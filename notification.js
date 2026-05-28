/**
 * NotificationSystem — улучшенная система уведомлений платформы ZAMANAT
 * Версия с модальным окном и оранжевой кнопкой закрытия.
 */

const NotificationSystem = (() => {

    // ─── Конфигурация ───────────────────────────────────────────────────────────
    const CONFIG = {
        STORAGE_KEY:  'zamanat_notifications',
        MAX_ITEMS:    50,           // Максимум хранимых уведомлений
        AUTO_EXPIRE:  0,            // Авто-удаление через N мс (0 = выключено)
        LOCALE:       'kk-KZ',      // Локаль Казахстана
        SHAKE_MS:     500,
        MAX_BADGE:    99,           // Максимальное число на бейдже (далее "99+")
    };

    // ─── Тексты интерфейса ──────────────────────────────────────────────────────
    const I18N = {
        empty: 'Жаңа хабарландырулар жоқ',
        modalClose: 'Жабу',
        modalTitle: 'Хабарландыру толығырақ',
        typeInfo: 'Ақпарат',
        typeSuccess: 'Сәтті аяқталды',
        typeWarning: 'Ескерту',
        typeDanger: 'Қателік',
    };

    // ─── Иконки по типу ─────────────────────────────────────────────────────────
    const ICONS = {
        info:    '<i class="fa-solid fa-circle-info"       style="color:#3498db"></i>',
        success: '<i class="fa-solid fa-circle-check"      style="color:#2ecc71"></i>',
        warning: '<i class="fa-solid fa-triangle-exclamation" style="color:#f1c40f"></i>',
        danger:  '<i class="fa-solid fa-circle-xmark"      style="color:#e74c3c"></i>',
    };

    // ─── Внутреннее состояние ───────────────────────────────────────────────────
    let _elements = {};             // Кешированные DOM-элементы
    let _listeners = {};            // { eventName: [callback, ...] }
    let _activeFilter = 'all';      // Текущий фильтр списка
    let _expireTimers = {};         // { notif.id: timeoutId }

    // ─── Вспомогательные функции ────────────────────────────────────────────────

    /** Экранирование HTML для защиты от XSS */
    function escapeHTML(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /** Текущее время в формате ЧЧ:ММ */
    function currentTime() {
        return new Date().toLocaleTimeString(CONFIG.LOCALE, {
            hour:   '2-digit',
            minute: '2-digit',
        });
    }

    /** Полная дата для модального окна */
    function currentFullDate() {
        return new Date().toLocaleDateString(CONFIG.LOCALE, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    /** Генерация уникального ID */
    function generateId() {
        return 'n-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
    }

    // ─── Хранилище ──────────────────────────────────────────────────────────────

    function getAll() {
        try {
            return JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    }

    function saveAll(notifications) {
        try {
            localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(notifications));
        } catch (e) {
            console.warn('[NotificationSystem] localStorage unavailable:', e);
        }
        render();
        emit('change', { total: notifications.length, unread: countUnread(notifications) });
    }

    function countUnread(notifications = getAll()) {
        return notifications.filter(n => n.unread).length;
    }

    // ─── Система событий ────────────────────────────────────────────────────────

    function on(event, callback) {
        if (!_listeners[event]) _listeners[event] = [];
        _listeners[event].push(callback);
    }

    function off(event, callback) {
        if (!_listeners[event]) return;
        _listeners[event] = _listeners[event].filter(fn => fn !== callback);
    }

    function emit(event, payload = {}) {
        (_listeners[event] || []).forEach(fn => {
            try { fn(payload); } catch (e) { console.error('[NS event error]', e); }
        });
    }

    // ─── Авто-удаление ──────────────────────────────────────────────────────────

    function scheduleExpire(id, ms) {
        if (!ms) return;
        clearTimeout(_expireTimers[id]);
        _expireTimers[id] = setTimeout(() => remove(id), ms);
    }

    function cancelExpire(id) {
        clearTimeout(_expireTimers[id]);
        delete _expireTimers[id];
    }

    // ─── CRUD ────────────────────────────────────────────────────────────────────

    function add(text, type = 'info', opts = {}) {
        if (!text || typeof text !== 'string') return null;
        text = text.trim();
        if (!text) return null;

        const notifications = getAll();

        // Дубликат-проверка
        if (!opts.allowDuplicate && notifications.some(n => n.text === text)) {
            return null;
        }

        // Переполнение: удаляем самое старое
        if (notifications.length >= CONFIG.MAX_ITEMS) {
            const removed = notifications.pop();
            cancelExpire(removed.id);
            emit('overflow_removed', { id: removed.id });
        }

        const id = generateId();
        const notif = {
            id,
            text,
            details: opts.details || text,
            type:   ['info','success','warning','danger'].includes(type) ? type : 'info',
            time:   currentTime(),
            fullDate: currentFullDate(),
            unread: true
        };

        notifications.unshift(notif);
        saveAll(notifications);
        shakeBell();

        const expireMs = opts.expireMs ?? CONFIG.AUTO_EXPIRE;
        scheduleExpire(id, expireMs);

        emit('added', { id, type: notif.type, text: notif.text });
        return id;
    }

    function addBatch(items) {
        return items
            .map(({ text, type, opts }) => add(text, type, opts))
            .filter(Boolean);
    }

    function remove(id) {
        let notifications = getAll();
        const idx = notifications.findIndex(n => n.id === id);
        if (idx === -1) return false;
        notifications.splice(idx, 1);
        cancelExpire(id);
        saveAll(notifications);
        emit('removed', { id });
        return true;
    }

    function markAsRead(id) {
        let notifications = getAll();
        const notif = notifications.find(n => n.id === id);
        if (!notif || !notif.unread) return;
        notif.unread = false;
        saveAll(notifications);
        emit('read', { id });
    }

    function markAllRead() {
        let notifications = getAll();
        notifications.forEach(n => { n.unread = false; });
        saveAll(notifications);
        emit('read', { id: 'all' });
    }

    function clearRead() {
        let notifications = getAll();
        const removed = notifications.filter(n => !n.unread);
        removed.forEach(n => cancelExpire(n.id));
        notifications = notifications.filter(n => n.unread);
        saveAll(notifications);
        emit('cleared', { type: 'read', count: removed.length });
    }

    // ─── Фильтрация ─────────────────────────────────────────────────────────────

    function getFiltered(filter = 'all') {
        const all = getAll();
        if (filter === 'all')    return all;
        if (filter === 'unread') return all.filter(n => n.unread);
        return all.filter(n => n.type === filter);
    }

    function setFilter(filter) {
        _activeFilter = filter;
        renderList();
    }

    // ─── Рендеринг интерфейса ───────────────────────────────────────────────────

    function render() {
        renderBadge();
        renderList();
    }

    function renderBadge() {
        const { badge } = _elements;
        if (!badge) return;
        const count = countUnread();
        if (count > 0) {
            badge.textContent = count > CONFIG.MAX_BADGE ? CONFIG.MAX_BADGE + '+' : count;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }

    function renderList() {
        const { list } = _elements;
        if (!list) return;

        const notifications = getFiltered(_activeFilter);
        list.innerHTML = '';

        if (notifications.length === 0) {
            list.innerHTML = `<div class="notif-empty">${I18N.empty}</div>`;
            return;
        }

        notifications.forEach(notif => {
            const item = document.createElement('div');
            item.className = `notif-item ${notif.type}${notif.unread ? ' unread' : ''}`;
            item.dataset.id = notif.id;

            item.innerHTML = `
                <div class="notif-icon">${ICONS[notif.type] ?? ICONS.info}</div>
                <div class="notif-content">
                    <p class="notif-text">${escapeHTML(notif.text)}</p>
                    <div class="notif-meta">
                        <span class="notif-time">${notif.time}</span>
                    </div>
                </div>
            `;

            item.addEventListener('click', () => {
                markAsRead(notif.id);
                showModal(notif);
            });

            list.appendChild(item);
        });
    }

    // ─── Стильдер мен Модальді Терезе ──────────────────────────────────────────

    function injectModalStyles() {
        if (document.getElementById('notif-modal-styles')) return;
        const style = document.createElement('style');
        style.id = 'notif-modal-styles';
        style.innerHTML = `
            .zm-modal-overlay {
                position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(0, 0, 0, 0.5); display: flex; align-items: center;
                justify-content: center; z-index: 99999; opacity: 0; transition: opacity 0.3s ease;
            }
            .zm-modal-overlay.active { opacity: 1; }
            .zm-modal-window {
                background: #fff; width: 90%; max-width: 500px; padding: 25px;
                border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                transform: translateY(-20px); transition: transform 0.3s ease;
                font-family: sans-serif; position: relative;
            }
            .zm-modal-overlay.active .zm-modal-window { transform: translateY(0); }
            .zm-modal-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; }
            .zm-modal-title { font-size: 18px; font-weight: bold; color: #2c3e50; display: flex; align-items: center; gap: 10px; }
            .zm-modal-close-btn { background: none; border: none; font-size: 20px; cursor: pointer; color: #95a5a6; transition: color 0.2s; }
            .zm-modal-close-btn:hover { color: #334155; }
            .zm-modal-body { font-size: 15px; line-height: 1.6; color: #34495e; margin-bottom: 20px; }
            .zm-modal-meta { display: flex; justify-content: space-between; font-size: 12px; color: #7f8c8d; border-top: 1px solid #f8f9fa; padding-top: 10px; }
            .zm-modal-badge { padding: 3px 8px; border-radius: 4px; font-weight: 600; text-transform: uppercase; font-size: 11px; }
            .zm-badge-info { background: #e3f2fd; color: #1d88e5; }
            .zm-badge-success { background: #e8f5e9; color: #388e3c; }
            .zm-badge-warning { background: #fff3e0; color: #f57c00; }
            .zm-badge-danger { background: #ffebee; color: #d32f2f; }
            .zm-modal-footer { text-align: right; }
            
            /* Сәнді оранжевый батырма стильдері */
            .zm-btn-orange { 
                background: #ff7a00; 
                color: #fff; 
                border: none; 
                padding: 10px 24px; 
                border-radius: 6px; 
                cursor: pointer; 
                font-weight: 600; 
                font-size: 14px; 
                transition: background 0.2s, transform 0.1s; 
                box-shadow: 0 4px 6px rgba(255, 122, 0, 0.2);
            }
            .zm-btn-orange:hover { 
                background: #e56e00; 
            }
            .zm-btn-orange:active {
                transform: scale(0.98);
            }
        `;
        document.head.appendChild(style);
    }

    function showModal(notif) {
        injectModalStyles();

        const oldModal = document.getElementById('zamanat-notif-modal');
        if (oldModal) oldModal.remove();

        const typeLabels = { info: I18N.typeInfo, success: I18N.typeSuccess, warning: I18N.typeWarning, danger: I18N.typeDanger };

        const overlay = document.createElement('div');
        overlay.id = 'zamanat-notif-modal';
        overlay.className = 'zm-modal-overlay';

        overlay.innerHTML = `
            <div class="zm-modal-window">
                <div class="zm-modal-header">
                    <div class="zm-modal-title">
                        ${ICONS[notif.type]} <span>${I18N.modalTitle}</span>
                    </div>
                    <button class="zm-modal-close-btn">&times;</button>
                </div>
                <div class="zm-modal-body">
                    <p>${escapeHTML(notif.details || notif.text)}</p>
                </div>
                <div class="zm-modal-meta">
                    <span class="zm-modal-badge zm-badge-${notif.type}">${typeLabels[notif.type]}</span>
                    <span class="zm-modal-date"><i class="fa-regular fa-clock"></i> ${notif.fullDate || notif.time}</span>
                </div>
                <div class="zm-modal-footer" style="margin-top: 15px;">
                    <button class="zm-btn-orange zm-modal-close-action">${I18N.modalClose}</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);

        setTimeout(() => overlay.classList.add('active'), 10);

        const closeModal = () => {
            overlay.classList.remove('active');
            setTimeout(() => overlay.remove(), 300);
        };

        overlay.querySelector('.zm-modal-close-btn').addEventListener('click', closeModal);
        overlay.querySelector('.zm-modal-close-action').addEventListener('click', closeModal);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    }

    // ─── Анимация колокольчика ──────────────────────────────────────────────────

    function shakeBell() {
        const trigger = document.querySelector('.notification-trigger i');
        if (!trigger) return;
        trigger.classList.remove('shake-animation');
        void trigger.offsetWidth; 
        trigger.classList.add('shake-animation');
        setTimeout(() => trigger.classList.remove('shake-animation'), CONFIG.SHAKE_MS);
    }

    // ─── Переключение панели ────────────────────────────────────────────────────

    function toggleBox(event) {
        if (event) event.stopPropagation();
        const { box } = _elements;
        if (!box) return;

        box.classList.toggle('show');
    }

    // ─── Инициализация ──────────────────────────────────────────────────────────

    function init() {
        _elements = {
            badge: document.getElementById('notif-badge'),
            list:  document.getElementById('notif-items-list'),
            box:   document.getElementById('notification-box'),
        };

        if (!_elements.badge || !_elements.list || !_elements.box) {
            console.warn('[NotificationSystem] DOM-элементы не найдены.');
        }

        render();

        document.addEventListener('click', (e) => {
            const { box } = _elements;
            if (box && !e.target.closest('#notification-wrapper') && box.classList.contains('show')) {
                box.classList.remove('show');
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const { box } = _elements;
                if (box && box.classList.contains('show')) box.classList.remove('show');
                const modal = document.getElementById('zamanat-notif-modal');
                if (modal) modal.remove();
            }
        });
    }

    return {
        init,
        add,
        addBatch,
        remove,
        markAsRead,
        markAllRead,
        clearRead,
        setFilter,
        getAll,
        getFiltered,
        toggleBox,
        on,
        off,
        config: CONFIG,
        i18n:   I18N,
    };

})();

function toggleNotifications(event) {
    NotificationSystem.toggleBox(event);
}

// ─── Автоматический запуск ───────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    NotificationSystem.init();

    NotificationSystem.addBatch([
        { 
            text: 'ZAMANAT платформасына қош келдіңіз!', 
            type: 'info',
            opts: { details: 'ZAMANAT білім беру платформасына қош келдіңіз! Бұл жерде сіз сапалы курстарды оқып, біліміңізді шыңдай аласыз. Кез келген сұрақтар бойынша қолдау көрсету орталығына хабарласыңыз.' }
        },
        { 
            text: 'Платформада маңызды жаңалық: Пайдаланушы интерфейсі жаңартылды!', 
            type: 'info',
            opts: { details: 'Құрметті пайдаланушылар! Біз сіздерге ыңғайлы болу үшін профиль мен хабарландырулар жүйесін толықтай жаңарттық. Енді навигация одан да жылдам әрі түсінікті.' }
        },
        { 
            text: 'Жаңалық: Қазақстан тарихы курсына жаңа ҰБТ тестілері қосылды.', 
            type: 'success',
            opts: { details: 'Тамаша жаңалық! Қазақстан тарихы пәні бойынша 2026 жылғы ҰБТ форматына сәйкес келетін 15 жаңа бірегей мәтіндік және контекстік тест тапсырмалары жүктелді. Қазір өтіп, өз деңгейіңізді тексеріңіз!' }
        },
        { 
            text: 'Маңызды жаңалық: Жақында платформада техникалық жұмыстар жүргізіледі.', 
            type: 'warning',
            opts: { details: 'Назар аударыңыз! Серверлерді оңтайландыру мақсатында үстіміздегі аптаның жексенбі күні сағат 03:00 - 05:00 аралығында платформада техникалық жұмыстар жүргізіледі. Осы уақытта сайт уақытша қолжетімсіз болуы мүмкүн.' }
        },
        { 
            text: 'Заманауи картамен жұмыс жасау бөлімі қосылды!', 
            type: 'success',
            opts: { details: 'География және Тарих пәндерінің студенттері үшін интерактивті карталармен жұмыс істеу модулі іске қосылды. Басты беттегі жаңа бөлімге өтіп, жаңа функцияны қолданып көріңіз.' }
        }
    ]);
});

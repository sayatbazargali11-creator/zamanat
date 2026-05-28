# ZAMANAT 🚀📚 A modern web-based Academy Testing and Digital Educational platform designed for students to explore textbooks, practice flashcards, and interact with historical data.

🔗 **Live Demo:** [https://sayatbazargali11-creator.github.io/zamanat/](https://sayatbazargali11-creator.github.io/zamanat/)

## ✨ Features
* **Academic Preloader:** Умный индикатор загрузки на главной странице на основе состояния браузера `document.readyState` с плавной покадровой анимацией через `requestAnimationFrame`.
* **Digital Library (`books.html`):** Полная цифровая база школьных учебников с мгновенной фильтрацией по классам (с 5 по 11) и предметам в реальном времени.
* **Smart PDF Reader:** Адаптивная система чтения. На ноутбуках и ПК учебники открываются в красивом модальном окне прямо на сайте, а на смартфонах — нативно открывают файл в новой вкладке для экономии оперативной памяти устройства.
* **Interactive Map (`karta.html`):** Интерактивная карта сакральных мест Казахстана на базе движка **Leaflet.js** и слоев OpenStreetMap с выдвижной боковой панелью (Side Drawer) при клике на объекты.
* **Chronology Timeline (`chronology.html`):** Цифровая хронология «Ұлы Дала Шежіресі» с вертикальным таймлайном, отслеживанием прокрутки и боковым быстрым навигатором по векам.
* **Flashcards Quiz (`quiz.html`):** Интерактивная система запоминания дат и терминов (аналог Quizlet) с анимацией переворота карт, сортировкой по эпохам и умным фильтром «Білемін» (Знаю) для исключения выученных карточек из колоды.
* **Real-time Glossary (`search.html`):** Поисковый глоссарий исторических терминов с мгновенной фильтрацией (Real-time Filter) прямо во время ввода текста.
* **Responsive & Adaptive UI:** Тонкая настройка верстки и защита от багов отображения меню на ультрабуках и MacBook с экранами 13 дюймов.

---

## 🛠 Tech Stack

### Frontend Only
* **HTML5** (Семантическая разметка и структура)
* **CSS3** (Modern Flexbox, CSS Grid, CSS Variables для тем оформления и адаптивного дизайна)
* **Vanilla JavaScript** (Чистый JS класса ES6+, манипуляции с DOM, `IntersectionObserver` для ленивой анимации контента, `requestAnimationFrame`)
* **Leaflet.js** (Открытая картографическая библиотека для работы с картами)
* **FontAwesome 6.5.1** & **Google Fonts (Inter)**

---

## 📁 Project Structure
```text
zamanat/
│
├── index.html          # Главная страница платформы и прелоадер
├── books.html          # Цифровая библиотека учебников с фильтрами по классам
├── chronology.html     # Интерактивный таймлайн истории
├── karta.html          # Карта сакральных мест Казахстана (Leaflet.js)
├── quiz.html           # Обучающие флэш-карточки (Quizlet)
├── 100data.html        # Список 100 ключевых исторических дат с анимацией
├── search.html         # Глоссарий терминов и умный поиск
├── privacy.html        # Политика конфиденциальности (Языки: KZ/RU)
├── rules.html          # Пользовательское соглашение (Языки: KZ/RU)
└── README.md           # Документация проекта

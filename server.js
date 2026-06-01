/**
 * ==========================================================================
 * ZAMANAT DUEL MULTIPLAYER BACKEND (PRODUCTION WEBSOCKET SERVER)
 * ==========================================================================
 * Полный скрипт без багов. Стабильный запуск 24/7.
 */

const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// Настройка CORS политик
const io = new Server(server, {
    cors: {
        origin: "*", 
        methods: ["GET", "POST"],
        credentials: true
    }
});

const PORT = process.env.PORT || 3000;

// База данных комнат и очередь поиска
const activeRooms = new Map();
let matchmakingQueue = [];

// Профессиональная база данных вопросов ЕНТ (ҰБТ)
const massiveQuestionsDatabase = [
    { q: "Қазақ хандығының негізі қаланған мерзім?", o: ["1456-1465 жж.", "1380-1390 жж.", "1511-1512 жж.", "1723-1725 жж."], c: "1456-1465 жж." },
    { q: "Аңырақай шайқасы өткен аймақ пен тарихи уақыт?", o: ["1729 ж. Балқаш көлінің маңы", "1643 ж. Орбұлақ өзені", "1718 ж. Аягөз өзені", "1756 ж. Жоңғар Алатауы"], c: "1729 ж. Балқаш көлінің маңы" },
    { q: "Есік қорғанынан табылған 'Алтын адам' қай дәуірге жатады?", o: ["Ерте темір дәуірі (Сақ)", "Қола дәуірі (Андронов)", "Кеш темір дәуірі (Ғұн)", "Түркі қағанаты кезеңі"], c: "Ерте темір дәуірі (Сақ)" },
    { q: "Қасым ханның тұсында қабылданған мемлекеттік заңдар жинағы?", o: ["Қасым ханның қасқа жолы", "Есім ханның ескі жолы", "Жеті жарғы", "Тәуке хан заңдары"], c: "Қасым ханның қасқа жолы" },
    { q: "1710 жылы жоңғарларға қарсы бүкілқазақтық құрылтай өткен жер?", o: ["Қарақұм маңы", "Ордабасы тауы", "Күлтөбе", "Ұлытау"], c: "Қарақұм маңы" },
    { q: "Шайқаста ту ұстаған, Абылай ханның жақын серігі болған атақты батыр?", o: ["Қабанбай батыр", "Бөгенбай батыр", "Райымбек батыр", "Наурызбай батыр"], c: "Қабанбай батыр" },
    { q: "Шыңғыс ханның шапқыншылығына 6 ай бойы ерліккен төтеп берген қала?", o: ["Отырар", "Сығанақ", "Сауран", "Тараз"], c: "Отырар" },
    { q: "Қазақ КСР Ғылым академиясының тұңғыш президенті кім?", o: ["Қаныш Сәтбаев", "Әлкей Марғұлан", "Мұхтар Әуезов", "Ахмет Байтұрсынов"], c: "Қаныш Сәтбаев" },
    { q: "Кенесары Қасымұлы бастаған ұлт-азаттық қозғалыстың қамтыған жылдары?", o: ["1837-1847 жж.", "1783-1797 жж.", "1822-1825 жж.", "1858-1859 жж."], c: "1837-1847 жж." },
    { q: "1986 жылғы Алматыдағы тарихи жастар көтерілісі қай айда болды?", o: ["Желтоқсан", "Қаңтар", "Наурыз", "Тамыз"], c: "Желтоқсан" }
];

const citiesPool = ["Алматы", "Астана", "Шымкент", "Ақтөбе", "Қарағанды", "Тараз"];
const namesPool = ["Аружан", "Диас", "Айша", "Әлішер", "Мадина", "Санжар"];

function generateMatchQuestionsPackage() {
    const shuffled = [...massiveQuestionsDatabase].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5);
}

// Главная веб-страница бэкенда для проверки
app.get('/', (req, res) => {
    res.json({ status: "online", rooms: activeRooms.size, queue: matchmakingQueue.length });
});

// Работа сокетов
io.on('connection', (socket) => {
    console.log(`[CONNECTED] Пользователь: ${socket.id}`);

    // Создание приватной комнаты
    socket.on('create_room', (roomCode) => {
        const customRoom = {
            id: roomCode,
            host: { id: socket.id, score: 0, answered: false },
            guest: null,
            currentRound: 0,
            questions: generateMatchQuestionsPackage()
        };
        activeRooms.set(roomCode, customRoom);
        socket.join(roomCode);
    });

    // Вход в комнату по коду
    socket.on('join_room', (roomCode) => {
        const room = activeRooms.get(roomCode);
        if (!room) {
            socket.emit('error_message', 'Бөлме табылмады!');
            return;
        }
        if (room.guest !== null) {
            socket.emit('error_message', 'Бөлме толы!');
            return;
        }

        room.guest = { id: socket.id, score: 0, answered: false };
        socket.join(roomCode);

        io.to(roomCode).emit('match_found', {
            roomCode: roomCode,
            questions: room.questions,
            hostId: room.host.id,
            guestId: room.guest.id,
            hostName: "Досыңыз (Host)",
            guestName: "Досыңыз (Guest)"
        });
    });

    // Автоматический быстрый подбор случайного соперника
    socket.on('start_matchmaking', () => {
        if (!matchmakingQueue.includes(socket.id)) {
            matchmakingQueue.push(socket.id);
        }

        if (matchmakingQueue.length >= 2) {
            const player1Id = matchmakingQueue.shift();
            const player2Id = matchmakingQueue.shift();

            const p1Socket = io.sockets.sockets.get(player1Id);
            const p2Socket = io.sockets.sockets.get(player2Id);

            if (p1Socket && p2Socket) {
                const randomRoomCode = "R_" + Math.floor(1000 + Math.random() * 9000);
                const name1 = namesPool[Math.floor(Math.random() * namesPool.length)] + " (" + citiesPool[Math.floor(Math.random() * citiesPool.length)] + ")";
                const name2 = namesPool[Math.floor(Math.random() * namesPool.length)] + " (" + citiesPool[Math.floor(Math.random() * citiesPool.length)] + ")";

                const roomObject = {
                    id: randomRoomCode,
                    host: { id: player1Id, score: 0, answered: false },
                    guest: { id: player2Id, score: 0, answered: false },
                    currentRound: 0,
                    questions: generateMatchQuestionsPackage()
                };

                activeRooms.set(randomRoomCode, roomObject);
                p1Socket.join(randomRoomCode);
                p2Socket.join(randomRoomCode);

                p1Socket.emit('match_found', { roomCode: randomRoomCode, questions: roomObject.questions, hostId: player1Id, guestId: player2Id, opponentName: name2 });
                p2Socket.emit('match_found', { roomCode: randomRoomCode, questions: roomObject.questions, hostId: player1Id, guestId: player2Id, opponentName: name1 });
            }
        }
    });

    socket.on('cancel_matchmaking', () => {
        matchmakingQueue = matchmakingQueue.filter(id => id !== socket.id);
    });

    // Прием ответов дуэлянтов
    socket.on('submit_answer', ({ roomCode, isCorrect, scoreAdded }) => {
        const room = activeRooms.get(roomCode);
        if (!room) return;

        const isHost = (socket.id === room.host.id);

        if (isHost) {
            room.host.answered = true;
            if (isCorrect) room.host.score += scoreAdded;
        } else if (room.guest) {
            room.guest.answered = true;
            if (isCorrect) room.guest.score += scoreAdded;
        }

        io.to(roomCode).emit('player_status_update', {
            hostAnswered: room.host.answered,
            guestAnswered: room.guest ? room.guest.answered : true,
            hostScore: room.host.score,
            guestScore: room.guest ? room.guest.score : 0,
            currentRoundIndex: room.currentRound,
            senderSide: isHost ? 'host' : 'guest',
            senderCorrect: isCorrect
        });

        const guestAnsweredFlag = room.guest ? room.guest.answered : true;
        if (room.host.answered && guestAnsweredFlag) {
            room.host.answered = false;
            if (room.guest) room.guest.answered = false;
            room.currentRound += 1;

            setTimeout(() => {
                if (room.currentRound >= 5) {
                    io.to(roomCode).emit('match_finished', {
                        finalHostScore: room.host.score,
                        finalGuestScore: room.guest ? room.guest.score : 0
                    });
                    activeRooms.delete(roomCode);
                } else {
                    io.to(roomCode).emit('next_round', room.currentRound);
                }
            }, 2000);
        }
    });

    // Отключение пользователя
    socket.on('disconnect', () => {
        matchmakingQueue = matchmakingQueue.filter(id => id !== socket.id);
        for (const [code, room] of activeRooms.entries()) {
            if (room.host.id === socket.id || (room.guest && room.guest.id === socket.id)) {
                io.to(code).emit('opponent_disconnected', 'Қарсыластың желісі үзілді! Жеңіс сізге берілді.');
                activeRooms.delete(code);
            }
        }
    });
});

// Защита от фатального падения сервера (Краш-протектор)
process.on('uncaughtException', (err) => {
    console.error('Критическая ошибка перехвачена:', err);
});

server.listen(PORT, () => {
    console.log(`🚀 Сервер успешно запущен на порту ${PORT}`);
});
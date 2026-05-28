 // Менеджердің WhatsApp нөмірі (халықаралық форматта, мысалы: 77071234567)
        const WHATSAPP_NUMBER = "77718287771"; 

        // ТЕСТТЕР ДЕЛАДАННЫХ БАЗАСЫ (Екі нұсқа: Қазақстан тарихы)
        const testDatabase = [
            {
                id: "history-1",
                title: "Қазақстан тарихы — Алаш қозғалысы және XX ғасыр басы",
                description: "Алаш партиясының құрылуы, Алашорда үкіметі, бірінші дүниежүзілік соғыс кезеңіндегі Қазақстан тарихына арналған тереңдетілген сынақ нұсқасы.",
                duration: 20, // минут
                questions: [
                    {
                        q: "«Қазақ» газетінің бас редакторы кім болды?",
                        a: ["Әлихан Бөкейханов", "Ахмет Байтұрсынов", "Міржақып Дулатов", "Мустафа Шоқай"],
                        correct: 1
                    },
                    {
                        q: "Алашорда үкіметінің төрағасы кім болып сайланды?",
                        a: ["Әлихан Бөкейханов", "Мұхамеджан Тынышпаев", "Халел Досмухамедов", "Жаһанша Досмухамедов"],
                        correct: 0
                    },
                    {
                        q: "Алаш автономиясы қай жылы жарияланды?",
                        a: ["1916 ж", "1917 ж", "1918 ж", "1920 ж"],
                        correct: 1
                    },
                    {
                        q: "Міржақып Дулатовтың 1909 жылы жарық көрген атақты өлеңдер жинағы?",
                        a: ["Оян, қазақ!", "Маса", "Көксерек", "Қалың мал"],
                        correct: 0
                    },
                    {
                        q: "Түркістан автономиясы қай қалада жарияланды?",
                        a: ["Перовск", "Қоқан", "Шымкент", "Верный"],
                        correct: 1
                    }
                ]
            },
            {
                id: "history-2",
                title: "Қазақстан тарихы — Алтын Орда және Қазақ хандығының құрылуы",
                description: "Жошы ұлысы, хандықтың негезін салушы Керей мен Жәнібек хандардың тарихи рөлі мен мемлекет құрылымы.",
                duration: 15,
                questions: [
                    {
                        q: "Қазақ хандығының негізі қаланған шамамен алынған мерзім?",
                        a: ["1456-1465 жж.", "1391-1400 жж.", "1511-1518 жж.", "1227-1230 жж."],
                        correct: 0
                    },
                    {
                        q: "Қазақ хандығы алғаш құрылған кезде қоныстанған аймақ?",
                        a: ["Батыс Қазақстан, Жайық бойы", "Шығыс Дешті Қыпшақ, Қозыбасы", "Оңтүстік Түркістан маңы", "Сырдария бойы"],
                        correct: 1
                    },
                    {
                        q: "Қазақ хандығының алғашқы ресми ханы кім?",
                        a: ["Керей", "Жәнібек", "Қасым", "Хақназар"],
                        correct: 0
                    },
                    {
                        q: "Алтын Орданың негізін қалаған хан?",
                        a: ["Шыңғысхан", "Бату (Жошыұлы)", "Берке", "Өзбек"],
                        correct: 1
                    },
                    {
                        q: "Қасым ханның тұсындағы заңдар жинағы қалай аталды?",
                        a: ["Жеті жарғы", "Қасым ханның қасқа жолы", "Есім ханның ескі жолы", "Ақсақ құлан заңы"],
                        correct: 1
                    }
                ]
            },
            {
    id: "history-3",
    title: "Қазақстан тарихы — Ұлыстың ыдырауы және Ақ Орда кезеңі",
    description: "Алтын Орданың әлсіреуі, Ақ Орданың күшеюі және Әбілқайыр хандығынан бөлінудің алғышарттары.",
    duration: 15,
    questions: [
        {
            q: "Алтын Орда ыдырағаннан кейін Қазақстанның орталық және шығыс аймақтарында құрылған мемлекет?",
            a: ["Ақ Орда", "Ноғай Ордасы", "Сібір хандығы", "Моғолстан"],
            correct: 0
        },
        {
            q: "Ақ Орданың дербес мемлекетке айналуына үлкен үлес қосқан, өз атынан теңге соқтырған хан?",
            a: ["Орыс хан", "Барақ хан", "Тоқтамыс хан", "Әбілқайыр хан"],
            correct: 0
        },
        {
            q: "Керей мен Жәнібек хандар бөлініп кеткенге дейін қай мемлекеттің құрамында болды?",
            a: ["Әбілқайыр хандығы (Өзбек ұлысы)", "Моғолстан", "Ноғай Ордасы", "Аштархан хандығы"],
            correct: 0
        },
        {
            q: "1457 жылы Әбілқайыр ханның сыртқы саяси беделіне нұқсан келтірген Сығанақ түбіндегі шайқаста кімдерден жеңілді?",
            a: ["Ойраттардан (жоңғарлардан)", "Моғолдардан", "Темір әулетінен", "Ресей князьдігінен"],
            correct: 0
        },
        {
            q: "Керей мен Жәнібек хандарды құшақ жая қарсы алып, Шу мен Қозыбасы өңірін берген Моғолстан билеушісі?",
            a: ["Есенбұға", "Тоғлық Темір", "Жүніс хан", "Абдар Рашид"],
            correct: 0
        }
    ]
},

{
    id: "history-4",
    title: "Қазақ хандығы — Мемлекеттің нығаюы мен заңдар жүйесі",
    description: "Хақназар, Есім және Тәуке хандардың тұсындағы қазақ қоғамы, сыртқы саясат және құқықтық реформалар.",
    duration: 15,
    questions: [
        {
            q: "Қазақ хандығының территориясын кеңейтіп, 'Қазақ пен қырғыздың ханы' деп аталған билеуші?",
            a: ["Хақназар хан", "Тәуекел хан", "Шығай хан", "Бұрындық хан"],
            correct: 0
        },
        {
            q: "Есім ханның тұсында қабылданған әскери-әкімшілік заңдар жинағы қалай аталды?",
            a: ["Есім ханның ескі жолы", "Жеті жарғы", "Қасқа жол", "Марқа заңы"],
            correct: 0
        },
        {
            q: "XVII ғасырдың соңы мен XVIII ғасырдың басында Қазақ хандығының бірлігін қалпына келтірген, 'Жеті жарғы' заңын шығарған хан?",
            a: ["Тәуке хан", "Әбілқайыр хан", "Абылай хан", "Болат хан"],
            correct: 0
        },
        {
            q: "Тәуке ханның тұсында тұрақты жұмыс істеген, мемлекеттік маңызы бар шешімдер қабылдайтын орган?",
            a: ["Билер кеңесі", "Ақсақалдар алқасы", "Құрылтай", "Уәзірлер кеңесі"],
            correct: 0
        },
        {
            q: "Қазақ хандығының XVI-XVIII ғасырлардағы бас қаласы, хандар жерленген рухани орталық?",
            a: ["Түркістан (Ясы)", "Сығанақ", "Сауран", "Тараз"],
            correct: 0
        }
    ]
},

{
    id: "history-5",
    title: "Қазақ хандығы — Мемлекеттің нығаюы мен заңдар жүйесі",
    description: "Хақназар, Есім және Тәуке хандардың тұсындағы қазақ қоғамы, сыртқы саясат және құқықтық реформалар.",
    duration: 15,
    questions: [
        {
            q: "Қазақ хандығының территориясын кеңейтіп, 'Қазақ пен қырғыздың ханы' деп аталған билеуші?",
            a: ["Хақназар хан", "Тәуекел хан", "Шығай хан", "Бұрындық хан"],
            correct: 0
        },
        {
            q: "Есім ханның тұсында қабылданған әскери-әкімшілік заңдар жинағы қалай аталды?",
            a: ["Есім ханның ескі жолы", "Жеті жарғы", "Қасқа жол", "Марқа заңы"],
            correct: 0
        },
        {
            q: "XVII ғасырдың соңы мен XVIII ғасырдың басында Қазақ хандығының бірлігін қалпына келтірген, 'Жеті жарғы' заңын шығарған хан?",
            a: ["Тәуке хан", "Әбілқайыр хан", "Абылай хан", "Болат хан"],
            correct: 0
        },
        {
            q: "Тәуке ханның тұсында тұрақты жұмыс істеген, мемлекеттік маңызы бар шешімдер қабылдайтын орган?",
            a: ["Билер кеңесі", "Ақсақалдар алқасы", "Құрылтай", "Уәзірлер кеңесі"],
            correct: 0
        },
        {
            q: "Қазақ хандығының XVI-XVIII ғасырлардағы бас қаласы, хандар жерленген рухани орталық?",
            a: ["Түркістан (Ясы)", "Сығанақ", "Сауран", "Тараз"],
            correct: 0
        }
    ]
},
{
    id: "history-6",
    title: "Жоңғар шапқыншылығы — Азаттық жолындағы ұлы шайқастар",
    description: "XVIII ғасырдағы қазақ-жоңғар соғыстары, Ақтабан шұбырынды, Бұланды және Аңырақай шайқастарының тарихы.",
    duration: 15,
    questions: [
        {
            q: "Тәуке хан 'Жеті жарғы' заңдар жинағын өңдеп, қабылдау үшін қай тарихи мекенде билер құрылтайын өткізді?",
            a: ["Күлтөбе", "Мәртөбе", "Ордабасы", "Ұлытау"],
            correct: 0
        },
        {
            q: "Жәңгір ханның тұсындағы қазақ-жоңғар соғысының ең даңқты беттерінің бірі болған, 600 қазақ сарбазы жоңғардың 50 мың әскеріне қарсы тұрған шайқас?",
            a: ["Орбұлақ шайқасы", "Аңырақай шайқасы", "Бұланды шайқасы", "Қатаған қырғыны"],
            correct: 0
        },
        {
            q: "1723 жылы Жоңғар қонтайшысы Цеван Рабданның қазақ жеріне тұтқиылдан жасаған жойқын жорығы тарихта қандай атпен қалды?",
            a: ["Ақтабан шұбырынды, Алқакөл сұлама", "Қалмақ қырылған", "Шаңды жорық", "Бәрібір қырғыны"],
            correct: 0
        },
        {
            q: "1726 (немесе 1728) жылы қазақ жасақтарының жоңғарларға алғашқы ірі соққы беріп, жеңіске жеткен шайқасы қалай аталады?",
            a: ["Бұланды шайқасы", "Аңырақай шайқасы", "Орбұлақ шайқасы", "Аягөз шайқасы"],
            correct: 0
        },
        {
            q: "1729-1730 жылдары Балқаш көлінің маңында Үш жүздің біріккен әскері жоңғарларды толықтай талқандаған ең соңғы шешуші шайқас?",
            a: ["Аңырақай шайқасы", "Бұланды шайқасы", "Ордабасы шайқасы", "Шалдуар шайқасы"],
            correct: 0
        }
    ]
},
{
    id: "history-7",
    title: "Қазақ хандары мен билері — Тұлғалар тарихы",
    description: "Есім ханның бүлікті басуы, Хақназар ханның дипломатиясы және Тәуке хан мен Үш жүз билерінің мемлекетті сақтаудағы рөлі.",
    duration: 15,
    questions: [
        {
            q: "Есім ханның тұсында Ташкентті билеп, Қазақ хандығына қарсы бүлік шығарған, тарихта 'Қатаған қырғынына' себепші болған билеуші?",
            a: ["Тұрсын Мұхаммед хан", "Имамқұли хан", "Абдаллах хан", "Баба сұлтан"],
            correct: 0
        },
        {
            q: "Хақназар ханның сыртқы саясаттағы басты жетістіктерінің бірі — қай мемлекеттің билеушісі Абдаллах II-мен 'достық әрі әскери одақ' құруы болды?",
            a: ["Бұхар хандығы", "Моғолстан", "Сібір хандығы", "Ноғай Ордасы"],
            correct: 0
        },
        {
            q: "'Жеті жарғы' заңдар жүйесін жасауға Тәуке ханмен бірге тікелей қатысып, Үш жүздің бірлігін ту еткен Ұлы жүздің атақты биі?",
            a: ["Төле би", "Қазыбек би", "Әйтеке би", "Мөңке би"],
            correct: 0
        },
        {
            q: "Орта жүздің атынан Тәуке ханның кеңесіне кірген, өткір тілі мен дипломатиялық шеберлігі үшін жоңғар қонтайшысы 'Қаз дауысты' деп атаған би?",
            a: ["Қазыбек би", "Төле би", "Әйтеке би", "Сырым би"],
            correct: 0
        },
        {
            q: "Кіші жүздің бас биі, 'Тура биде туған жоқ' деген ұстаныммен ел арасындағы дауларды әділ шешіп, Тәуке ханның бас кеңесшісі болған тұлға?",
            a: ["Әйтеке би", "Қазыбек би", "Төле би", "Бөгенбай би"],
            correct: 0
        }
    ]
}

        ];

        // Жаһандық күй айнымалылары
        let currentTest = null;
        let currentQuestionIndex = 0;
        let userAnswers = {}; // { questionIndex: selectedOptionIndex }
        let timerInterval = null;
        let secondsLeft = 0;

        // ПАРАҚШАЛАРДЫ АУЫСТЫРУ КӨРІНІС СЕРВИСІ
        function showPage(pageId) {
            // Барлық секцияларды жабу
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(s => s.classList.remove('active'));

            // Қажетті секцияны ашу
            const target = document.getElementById(pageId);
            if (target) target.classList.add('active');

            // Навигациялық сілтемелерді жаңарту
            const links = document.querySelectorAll('nav a');
            links.forEach(l => l.classList.remove('active'));
            
            const activeLink = document.getElementById(`nav-${pageId}`);
            if (activeLink) activeLink.classList.add('active');

            // Тест барысында хидер мен футерді жасыру логикасы
            const header = document.getElementById('main-header');
            const footer = document.getElementById('main-footer');
            if (pageId === 'active-test-section') {
                header.style.display = 'none';
                footer.style.display = 'none';
            } else {
                header.style.display = 'block';
                footer.style.display = 'block';
            }

            // Егер тарих немесе тесттер беті ашылса, мәліметтерді қайта жүктейміз
            if (pageId === 'tests') {
                renderTestDatabase();
            } else if (pageId === 'history') {
                renderHistoryLogs();
            }

            window.scrollTo(0, 0);
        }

        // ТЕСТТЕР ТІЗІМІН ЭКРАНҒА ШЫҒАРУ (РЕНДЕРИНГ)
        function renderTestDatabase() {
            const availableContainer = document.getElementById('test-list-available');
            const completedContainer = document.getElementById('test-list-completed');
            
            availableContainer.innerHTML = '';
            completedContainer.innerHTML = '';

            const completedIds = JSON.parse(localStorage.getItem('zamanat_completed_ids') || '[]');

            let availableCount = 0;
            let completedCount = 0;

            testDatabase.forEach(test => {
                const isDone = completedIds.includes(test.id);
                const cardHtml = `
                    <div class="test-card ${isDone ? 'completed-card' : ''}">
                        <div>
                            <span class="status-badge ${isDone ? 'done' : 'available'}">
                                ${isDone ? 'Тапсырылған' : 'Қолжетімді'}
                            </span>
                            <h3>${test.title}</h3>
                            <p>${test.description}</p>
                        </div>
                        <div>
                            <div style="font-size:13px; color:var(--text-muted); margin-bottom:14px; font-weight:500;">
                                ⏱ Уақыты: ${test.duration} минут | 📝 Сұрақ саны: ${test.questions.length}
                            </div>
                            ${isDone ? `
                                <button class="btn-card-disabled" disabled>Тапсырылды</button>
                            ` : `
                                <button class="card-action-btn" onclick="startTestProcess('${test.id}')">
                                    Сынақты бастау <span class="arrow-icon">→</span>
                                </button>
                            `}
                        </div>
                    </div>
                `;

                if (isDone) {
                    completedContainer.innerHTML += cardHtml;
                    completedCount++;
                } else {
                    availableContainer.innerHTML += cardHtml;
                    availableCount++;
                }
            });

            document.getElementById('count-available').innerText = availableCount;
            document.getElementById('count-completed').innerText = completedCount;
        }

        // ТЕСТТІ БАСТАУ ПРОЦЕСІ
        function startTestProcess(testId) {
            const found = testDatabase.find(t => t.id === testId);
            if (!found) return;

            currentTest = found;
            currentQuestionIndex = 0;
            userAnswers = {};
            secondsLeft = found.duration * 60;

            document.getElementById('active-test-title').innerText = found.title;
            showPage('active-test-section');
            setupQuizView();
            startTimerCountdown();
        }

        // ТАЙМЕР ОРНАТУ СИСТЕМА СЕРВИСІ
        function startTimerCountdown() {
            clearInterval(timerInterval);
            const timerBox = document.getElementById('timer-box');
            timerBox.classList.remove('warning');

            function updateDisplay() {
                if (secondsLeft <= 0) {
                    clearInterval(timerInterval);
                    autoSubmitQuiz();
                    return;
                }

                if (secondsLeft < 120) { // 2 минут қалғанда қызыл ескерту
                    timerBox.classList.add('warning');
                }

                const m = Math.floor(secondsLeft / 60);
                const s = secondsLeft % 60;
                document.getElementById('timer-val').innerText = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
                secondsLeft--;
            }

            updateDisplay();
            timerInterval = setInterval(updateDisplay, 1000);
        }

        // СҰРАҚТАРДЫ ЖҮКТЕУ КӨРІНІСІ
        function setupQuizView() {
            if (!currentTest) return;

            const quizArea = document.getElementById('quiz-area');
            const q = currentTest.questions[currentQuestionIndex];

            // Прогресс бару жаңарту
            const totalQ = currentTest.questions.length;
            const progressPercent = ((currentQuestionIndex + 1) / totalQ) * 100;
            document.getElementById('test-progress-fill').style.width = `${progressPercent}%`;

            const prefixes = ['A', 'B', 'C', 'D'];
            let answersHtml = '';

            q.a.forEach((ans, index) => {
                const isSelected = userAnswers[currentQuestionIndex] === index;
                answersHtml += `
                    <li class="ans-item ${isSelected ? 'selected' : ''}" onclick="selectAnswerOption(${index})">
                        <span class="ans-prefix">${prefixes[index]}</span>
                        <span>${ans}</span>
                    </li>
                `;
            });

            quizArea.innerHTML = `
                <div class="q-card">
                    <div class="q-title">Сұрақ ${currentQuestionIndex + 1} / ${totalQ}: <br><br> ${q.q}</div>
                    <ul class="ans-list">${answersHtml}</ul>
                </div>
            `;

            // Батырмалар күйі
            document.getElementById('prev-q-btn').disabled = currentQuestionIndex === 0;
            
            const nextBtn = document.getElementById('next-q-btn');
            if (currentQuestionIndex === totalQ - 1) {
                nextBtn.innerText = "Тестті аяқтау ✓";
                nextBtn.style.background = "var(--success-color)";
                nextBtn.style.borderColor = "var(--success-color)";
            } else {
                nextBtn.innerText = "Келесі сұрақ →";
                nextBtn.style.background = "var(--accent-color)";
                nextBtn.style.borderColor = "var(--accent-color)";
            }
        }

        // ЖАУАП НҰСҚАСЫН ТАНДАУ
        function selectAnswerOption(optionIndex) {
            userAnswers[currentQuestionIndex] = optionIndex;
            setupQuizView(); // Көріністі қайта жаңарту
        }

        // АЛДЫҢҒЫ СҰРАҚҚА ӨТУ
        function goToPrevQuestion() {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                setupQuizView();
            }
        }

        // КЕЛЕСІ СҰРАҚҚА ӨТУ НЕМЕСЕ БІТІРУ
        function goToNextQuestion() {
            const totalQ = currentTest.questions.length;
            if (currentQuestionIndex < totalQ - 1) {
                currentQuestionIndex++;
                setupQuizView();
            } else {
                // Аяқтау батырмасы басылғанда модальді терезені ашу
                openConfirmFinishModal();
            }
        }

        // ТЕСТТІ АЯҚТАУДЫ РАСТАУ МОДАЛЫ
        function openConfirmFinishModal() {
            document.getElementById('confirm-finish-modal').classList.add('active');
        }

        function closeConfirmFinishModal() {
            document.getElementById('confirm-finish-modal').classList.remove('active');
        }

        function executeQuizFinish() {
            closeConfirmFinishModal();
            finishQuizCalculation();
        }

        // ТЕСТ БАРЫСЫНДА ҚАТЕ ТУРАЛЫ ХАБАРЛАУ (WHATSAPP)
        function reportTestError() {
            if (!currentTest) return;
            const q = currentTest.questions[currentQuestionIndex];
            const message = `⚠️ ZAMANAT Қате туралы хабарлама!\n\nТест: ${currentTest.title}\nСұрақ №${currentQuestionIndex + 1}: ${q.q}`;
            const encoded = encodeURIComponent(message);
            window.open(`https://api.whatsapp.com/send?phone=${77058486656}&text=${encoded}`, '_blank');
        }

        // УАҚЫТ БІТКЕНДЕ АВТОМАТТЫ ТҮРДЕ ЖІБЕРУ
        function autoSubmitQuiz() {
            alert("Уақыт аяқталды! Сынақ нәтижесі автоматты түрде есептеледі.");
            finishQuizCalculation();
        }

        // НӘТИЖЕНІ ЕСЕПТЕУ ЖӘНЕ БАЗАҒА (LOCALSTORAGE) САҚТАУ
        function finishQuizCalculation() {
            clearInterval(timerInterval);
            if (!currentTest) return;

            const totalQ = currentTest.questions.length;
            let correctAnswersCount = 0;

            const reviewArea = document.getElementById('review-area');
            reviewArea.innerHTML = '';

            const prefixes = ['A', 'B', 'C', 'D'];

            currentTest.questions.forEach((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correct;
                if (isCorrect) correctAnswersCount++;

                let detailsHtml = '';
                q.a.forEach((ans, oIdx) => {
                    let styleExtension = '';
                    if (oIdx === q.correct) styleExtension = `style="color: var(--success-color); font-weight:700;"`;
                    if (oIdx === userAns && !isCorrect) styleExtension = `style="color: var(--error-color); font-weight:700; text-decoration:line-through;"`;
                    
                    detailsHtml += `<div ${styleExtension}><strong style="color:var(--text-color);">${prefixes[oIdx]})</strong> ${ans}</div>`;
                });

                reviewArea.innerHTML += `
                    <div class="review-card-item ${isCorrect ? 'correct' : 'wrong'}">
                        <h4 style="font-size:16px; font-weight:700; margin-bottom:12px;">Сұрақ ${idx + 1}: ${q.q}</h4>
                        <div style="font-size:14px; display:flex; flex-direction:column; gap:6px;">${detailsHtml}</div>
                        <div style="margin-top:14px; font-size:13px; font-weight:600; color:${isCorrect ? 'var(--success-color)' : 'var(--error-color)'};">
                            ${isCorrect ? '✓ Дұрыс жауап бердіңіз' : `✗ Қате. Сіздің жауабыңыз: ${userAns !== undefined ? prefixes[userAns] : 'Жауап берілмеді'}`}
                        </div>
                    </div>
                `;
            });

            // Экранографикалық көрсеткіштерді толтыру
            document.getElementById('result-test-title').innerText = currentTest.title;
            document.getElementById('final-score').innerText = `${correctAnswersCount} / ${totalQ}`;

            const percent = (correctAnswersCount / totalQ) * 100;
            const statusElem = document.getElementById('result-status-text');
            if (percent >= 80) {
                statusElem.innerText = "Керемет нәтиже! Сіз бұл тақырыпты өте жоғары деңгейде меңгергенсіз.";
                statusElem.style.color = "var(--success-color)";
            } else if (percent >= 50) {
                statusElem.innerText = "Жақсы нәтиже. Тұрақты ізденіспен біліміңізді одан әрі жетілдіре аласыз.";
                statusElem.style.color = "var(--gold-color)";
            } else {
                statusElem.innerText = "Тақырыпты қайта оқып шығу ұсынылады. Оқулықтар арқылы қатемен жұмыс жасаңыз.";
                statusElem.style.color = "var(--error-color)";
            }

            // Тапсырылды деп белгілеу жүйесі
            const completedIds = JSON.parse(localStorage.getItem('zamanat_completed_ids') || '[]');
            if (!completedIds.includes(currentTest.id)) {
                completedIds.push(currentTest.id);
                localStorage.setItem('zamanat_completed_ids', JSON.stringify(completedIds));
            }

            // Тарих архивіне жазу логтары
            const historyLog = JSON.parse(localStorage.getItem('zamanat_history_logs') || '[]');
            historyLog.unshift({
                testId: currentTest.id,
                title: currentTest.title,
                scoreText: `${correctAnswersCount} / ${totalQ}`,
                date: new Date().toLocaleString(),
                savedAnswers: userAnswers
            });
            localStorage.setItem('zamanat_history_logs', JSON.stringify(historyLog));

            showPage('result-section');
        }

        // ТАПСЫРЫЛҒАН ТЕСТТЕР ТАРИХЫН ЭКРАНҒА ШЫҒАРУ
        function renderHistoryLogs() {
            const container = document.getElementById('history-log-table-container');
            const logs = JSON.parse(localStorage.getItem('zamanat_history_logs') || '[]');

            if (logs.length === 0) {
                container.innerHTML = `
                    <div style="text-align:center; padding:40px; border:1px dashed var(--gray-border); border-radius:var(--radius-md); background:#ffffff;">
                        <p style="color:var(--text-secondary);">Сіз әлі ешқандай сынақ тапсырған жоқсыз. Тесттер аймағына өтіп біліміңізді тексеріңіз.</p>
                        <button class="btn" style="margin-top:16px;" onclick="showPage('tests')">Тесттерге өту</button>
                    </div>
                `;
                return;
            }

            let rowsHtml = '';
            logs.forEach((log, index) => {
                rowsHtml += `
                    <tr>
                        <td style="font-weight:600; color:var(--text-color);">${log.title}</td>
                        <td>${log.date}</td>
                        <td style="font-weight:700; color:var(--accent-color);">${log.scoreText}</td>
                        <td>
                            <button class="btn btn-secondary" style="padding:6px 14px; font-size:12px; border-radius:12px;" onclick="reviewPastTestLog(${index})">
                                Анализді көру
                            </button>
                        </td>
                    </tr>
                `;
            });

            container.innerHTML = `
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Нұсқа атауы</th>
                                <th>Тапсырылған уақыты</th>
                                <th>Қорытынды ұпай</th>
                                <th>Әрекет</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rowsHtml}
                        </tbody>
                    </table>
                </div>
            `;
        }

        // ТАРИХТАН ЕСКІ АНАЛИЗДІ ҚАЙТА ЖҮКТЕУ
        function reviewPastTestLog(logIndex) {
            const logs = JSON.parse(localStorage.getItem('zamanat_history_logs') || '[]');
            const currentLog = logs[logIndex];
            if (!currentLog) return;

            const foundTest = testDatabase.find(t => t.id === currentLog.testId);
            if (!foundTest) {
                alert("Бұл тесттің сұрақтар базасы жүйеден жойылған немесе өзгертілген.");
                return;
            }

            // Жаһандық айнымалыларды архив деректерімен уақытша алмастыру
            currentTest = foundTest;
            userAnswers = currentLog.savedAnswers || {};

            // Нәтиже парақшасын толтыру
            document.getElementById('result-test-title').innerText = currentLog.title;
            document.getElementById('final-score').innerText = currentLog.scoreText;
            
            const statusElem = document.getElementById('result-status-text');
            statusElem.innerText = "Бұл нәтиже тарих архивінен жүктелген.";
            statusElem.style.color = "var(--text-muted)";

            // Ревизиографиялық аналитикалық тізім құру
            const reviewArea = document.getElementById('review-area');
            reviewArea.innerHTML = '';
            const prefixes = ['A', 'B', 'C', 'D'];

            foundTest.questions.forEach((q, idx) => {
                const userAns = userAnswers[idx];
                const isCorrect = userAns === q.correct;

                let detailsHtml = '';
                q.a.forEach((ans, oIdx) => {
                    let styleExtension = '';
                    if (oIdx === q.correct) styleExtension = `style="color: var(--success-color); font-weight:700;"`;
                    if (oIdx === userAns && !isCorrect) styleExtension = `style="color: var(--error-color); font-weight:700; text-decoration:line-through;"`;
                    detailsHtml += `<div ${styleExtension}><strong>${prefixes[oIdx]})</strong> ${ans}</div>`;
                });

                reviewArea.innerHTML += `
                    <div class="review-card-item ${isCorrect ? 'correct' : 'wrong'}">
                        <h4 style="font-size:16px; font-weight:700; margin-bottom:12px;">Сұрақ ${idx + 1}: ${q.q}</h4>
                        <div style="font-size:14px; display:flex; flex-direction:column; gap:6px;">${detailsHtml}</div>
                        <div style="margin-top:14px; font-size:13px; font-weight:600; color:${isCorrect ? 'var(--success-color)' : 'var(--error-color)'};">
                            ${isCorrect ? '✓ Дұрыс жауап берілген' : `✗ Қате. Таңдалған жауап: ${userAns !== undefined ? prefixes[userAns] : 'Жауап берілмеді'}`}
                        </div>
                    </div>
                `;
            });

            showPage('result-section');
        }

        // МОДАЛЬДІ БАСҚАРУ ФУНКЦИЯЛАРЫ
        function openEnrollModal(tariffName = 'Курсқа өтінім') {
            document.getElementById('enroll-modal').classList.add('active');
        }

        function closeEnrollModal() {
            document.getElementById('enroll-modal').classList.remove('active');
        }

        function openFeedbackModal() {
            document.getElementById('feedback-modal').classList.add('active');
        }

        function closeFeedbackModal() {
            document.getElementById('feedback-modal').classList.remove('active');
        }

        // ТАРИФ ФОРМАСЫН WHATSAPP-ҚА ЖІБЕРУ
        function submitEnrollToWhatsapp(event) {
            event.preventDefault();
            const name = document.getElementById('enroll-name').value;
            const phone = document.getElementById('enroll-phone').value;
            
            const message = `🚀 ЖАҢА ӨТІНІМ!\n\nТариф: Silver пакетін аламын!\nЕсімі: ${name}\nТелефон: ${phone}`;
            const encoded = encodeURIComponent(message);
            
            window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`, '_blank');
            closeEnrollModal();
            document.getElementById('enroll-name').value = '';
            document.getElementById('enroll-phone').value = '';
        }

        // КЕРІ БАЙЛАНЫС ФОРМАСЫН WHATSAPP-ҚА ЖІБЕРУ
        function submitFeedbackToWhatsapp(event) {
            event.preventDefault();
            const name = document.getElementById('feedback-name').value;
            const phone = document.getElementById('feedback-phone').value;
            const text = document.getElementById('feedback-text').value;
            
            const message = `💬 КЕРІ БАЙЛАНЫС / ҰСЫНЫС ХАТ!\n\nЕсімі: ${name}\nТелефон: ${phone}\nПікір: ${text}`;
            const encoded = encodeURIComponent(message);
            
            window.open(`https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`, '_blank');
            closeFeedbackModal();
            document.getElementById('feedback-name').value = '';
            document.getElementById('feedback-phone').value = '';
            document.getElementById('feedback-text').value = '';
        }

        // ИНТЕРАКТИВТІ КАЛЬКУЛЯТОР ФУНКЦИЯСЫ
        function calculateGrantChance() {
            const score = parseInt(document.getElementById('calc-score').value);
            const resultBox = document.getElementById('calc-result');

            if (isNaN(score) || score < 0 || score > 140) {
                resultBox.style.display = 'none';
                return;
            }

            resultBox.style.display = 'block';

            if (score >= 125) {
                resultBox.innerText = "Ықтималдық: 99%. Сізде кез келген ЖОО грантына түсу мүмкіндігі өте жоғары!";
                resultBox.style.background = "rgba(52, 199, 89, 0.1)";
                resultBox.style.color = "var(--success-color)";
            } else if (score >= 100) {
                resultBox.innerText = "Ықтималдық: 80%. Мемлекеттік гранттан үміткер болу мүмкіндігіңіз зор.";
                resultBox.style.background = "rgba(255, 149, 0, 0.1)";
                resultBox.style.color = "var(--gold-color)";
            } else if (score >= 75) {
                resultBox.innerText = "Ықтималдық: 45%. Шекті балдан өттіңіз, бірақ грант үшін білімді арттыру қажет.";
                resultBox.style.background = "rgba(255, 149, 0, 0.05)";
                resultBox.style.color = "var(--text-secondary)";
            } else {
                resultBox.innerText = "Ықтималдық төмен. Ақылы бөлім немесе білімді жедел тереңдету қажет.";
                resultBox.style.background = "rgba(255, 59, 48, 0.1)";
                resultBox.style.color = "var(--error-color)";
            }
        }

        // FAQ ТАБ АУЫСТЫРҒЫШЫ
        function toggleFaq(element) {
            const answer = element.querySelector('.faq-answer');
            const span = element.querySelector('.faq-question span');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                span.innerText = '+';
            } else {
                answer.style.display = 'block';
                span.innerText = '−';
            }
        }

        // ТАЙМЕР ҰБТ ЕСЕПТЕУ СЕРВИСІ (РЕАЛДЫ ҚАЛҒАН КҮНДЕР)
        function initUbtCountdownTimer() {
            const targetDate = new Date("June 1, 2026 09:00:00").getTime();

            function updateTimer() {
                const now = new Date().getTime();
                const diff = targetDate - now;

                if (diff <= 0) {
                    document.getElementById('days-val').innerText = '00';
                    document.getElementById('hours-val').innerText = '00';
                    document.getElementById('minutes-val').innerText = '00';
                    document.getElementById('seconds-val').innerText = '00';
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((diff % (1000 * 60)) / 1000);

                document.getElementById('days-val').innerText = days.toString().padStart(2, '0');
                document.getElementById('hours-val').innerText = hours.toString().padStart(2, '0');
                document.getElementById('minutes-val').innerText = minutes.toString().padStart(2, '0');
                document.getElementById('seconds-val').innerText = seconds.toString().padStart(2, '0');
            }

            updateTimer();
            setInterval(updateTimer, 1000);
        }

        window.onload = function() {
            initUbtCountdownTimer();
            renderTestDatabase();
        }
        


        document.addEventListener('DOMContentLoaded', () => {
        // 1. Запрет контекстного меню (правой кнопки мыши)
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            showProtectionAlert("Оң жақ батырма бұғатталған! / Контекстное меню заблокировано!");
        });

        // 2. Запрет копирования (Ctrl+C / СМD+C)
        document.addEventListener('copy', (e) => {
            e.preventDefault();
            showProtectionAlert("Мәліметті көшіруге тыйым салынған! / Копирование информации запрещено!");
        });

        // 3. Запрет вырезания текста (Ctrl+X)
        document.addEventListener('cut', (e) => {
            e.preventDefault();
        });

        // 4. Запрет выделения текста двойным кликом или протяжкой (дополнительно к CSS)
        document.addEventListener('selectstart', (e) => {
            e.preventDefault();
        });

        // 5. Блокировка горячих клавиш разработчика и копирования
        document.addEventListener('keydown', (e) => {
            // Блокировка Ctrl+C, Ctrl+X, Ctrl+U (просмотр кода), Ctrl+S (сохранение страницы), Ctrl+P (печать)
            if (e.ctrlKey || e.metaKey) {
                if (['c', 'x', 'u', 's', 'p', 'a'].includes(e.key.toLowerCase())) {
                    e.preventDefault();
                    if(e.key.toLowerCase() === 'c') {
                        showProtectionAlert("Көшіру бұғатталған! / Копирование заблокировано!");
                    }
                    return false;
                }
            }

            // Блокировка F12 (Инструменты разработчика)
            if (e.key === 'F12') {
                e.preventDefault();
                showProtectionAlert("Әзірлеуші саймандары жабық! / Инструменты разработчика недоступны!");
                return false;
            }

            // Блокировка Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C (Комбинации для открытия консоли)
            if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
                if (['i', 'j', 'c'].includes(e.key.toLowerCase())) {
                    e.preventDefault();
                    return false;
                }
            }
        });

        // 6. Предотвращение зажатия клавиши PrintScreen для создания скриншотов (для старых систем)
        document.addEventListener('keyup', (e) => {
            if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText(''); // Очищаем буфер обмена
                showProtectionAlert("Скриншот алуға тыйым салынған! / Скриншоты запрещены!");
            }
        });

        // Красивое кастомное уведомление вместо стандартного грубого alert()
        function showProtectionAlert(message) {
            // Проверяем, нет ли уже активного уведомления
            if (document.querySelector('.protection-toast')) return;

            const toast = document.createElement('div');
            toast.className = 'protection-toast';
            toast.innerHTML = `
                <div style="display:flex; align-items:center; gap:10px;">
                    <span style="color:#ff6b00; font-size:20px;">⚠️</span>
                    <span style="font-family:sans-serif; font-size:14px; font-weight:600; color:#1d1d1f;">${message}</span>
                </div>
            `;
            
            // Стили для всплывающего уведомления в стиле Apple/Premium
            Object.assign(toast.style, {
                position: 'fixed',
                bottom: '30px',
                left: '50%',
                transform: 'translateX(-50%) translateY(100px)',
                background: '#ffffff',
                padding: '16px 24px',
                borderRadius: '12px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,107,0,0.2)',
                zIndex: '999999',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                opacity: '0'
            });

            document.body.appendChild(toast);

            // Анимация появления
            setTimeout(() => {
                toast.style.transform = 'translateX(-50%) translateY(0)';
                toast.style.opacity = '1';
            }, 50);

            // Автоматическое скрытие и удаление через 2.5 секунды
            setTimeout(() => {
                toast.style.transform = 'translateX(-50%) translateY(100px)';
                toast.style.opacity = '0';
                setTimeout(() => toast.remove(), 400);
            }, 2500);
        }
    });


function toggleMobileMenu() {
    const nav = document.getElementById('main-nav');
    const toggleBtn = document.getElementById('menu-toggle'); // ID сәйкес келуі керек
    
    if (nav && toggleBtn) {
        nav.classList.toggle('mobile-active');
        toggleBtn.classList.toggle('open'); // Осы класс анимацияны қосады
    }
}

// Функция клика по пункту меню (переключает страницу и закрывает шторку)
function handleNavMobile(pageId) {
    // Вызов вашей основной функции смены страниц
    if (typeof showPage === 'function') {
        showPage(pageId);
    }
    
    // Закрываем мобильное меню автоматически
    const nav = document.getElementById('main-nav');
    const toggleBtn = document.getElementById('menu-toggle');
    
    if (nav && toggleBtn) {
        nav.classList.remove('mobile-active');
        toggleBtn.classList.remove('open');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("browser-warning-modal");
    const closeBtn = document.getElementById("close-welcome-modal-btn");

    // Пайдаланушы бұған дейін сайтқа кірген-кірмегенін тексеру
    if (!localStorage.getItem("welcomeModalShown")) {
        // Егер бірінші рет кірсе, модалды терезені шығару
        setTimeout(() => {
            modal.classList.add("is-active");
        }, 600); // Сайт жүктелгеннен кейін 0.6 секундтан соң баяу шығады
    }

    // Батырманы басқан кезде жабу және жадқа сақтау
    closeBtn.addEventListener("click", function() {
        modal.classList.remove("is-active");
        localStorage.setItem("welcomeModalShown", "true"); // Келесі жолы шықпайтын қылу
    });
});



(function() {
    // Включаем блокировку скролла
    document.body.classList.add('preloader-active');

    const progressLine = document.getElementById("preloader-progress-line");
    const preloader = document.getElementById("minimal-preloader");
    
    let currentPercent = 0;
    let targetPercent = 0;

    // Умная симуляция на основе готовности документа браузера
    function updateProgress() {
        if (document.readyState === "loading") {
            targetPercent = 30;
        } else if (document.readyState === "interactive") {
            targetPercent = 70;
        } else if (document.readyState === "complete") {
            targetPercent = 100;
        }

        // Плавное заполнение линии кадр за кадром
        if (currentPercent < targetPercent) {
            currentPercent += 2; // Скорость заполнения линии
            if (currentPercent > targetPercent) currentPercent = targetPercent;
            
            if (progressLine) {
                progressLine.style.width = currentPercent + "%";
            }
        }

        if (currentPercent < 100) {
            requestAnimationFrame(updateProgress);
        } else {
            // Как только линия достигла 100%, эффектно схлопываем экран
            setTimeout(() => {
                if (preloader) {
                    preloader.classList.add("is-hidden");
                    document.body.classList.remove('preloader-active');
                }
            }, 300); // Небольшая задержка на 100% для визуальной красоты
        }
    }

    // Запускаем анимацию
    requestAnimationFrame(updateProgress);

    // Если всё мгновенно загрузилось из кэша
    window.addEventListener("load", () => {
        targetPercent = 100;
    });
})();










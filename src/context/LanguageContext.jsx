import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

const translations = {
    uz: {
        nav: {
            home: 'Bosh Sahifa',
            courses: 'Kurslar',
            about: 'Biz Haqimizda',
            status: 'Holat',
            contact: 'Aloqa',
            enroll: 'Kursga yozilish',
            news: 'Yangiliklar',
            getStarted: 'Boshlash'
        },
        home: {
            hero: {
                titlePrefix: 'Kelajak',
                titleSuffix: 'Shu Yerda',
                keywords: ['Dasturlash', 'Dizayn', 'Fullstack'],
                subtitle: 'Biz shunchaki dars o\'tmaymiz, biz real loyihalar orqali karyera qurishga yordam beramiz.',
                cta: 'Kurslarni Ko\'rish',
                secondaryCta: 'Biz Haqimizda'
            },
            whyTitle: 'Nega Datasite Academy?',
            whySubtitle: 'Biz shunchaki dars o\'tmaymiz. Biz karyera quramiz.',
            features: {
                secondTeacher: 'Ikkinchi Ustoz Tizimi',
                secondTeacherDesc: 'Sizga har doim yordam beradigan yordamchi mentorlar.',
                mentors: 'Tajribali Mentorlar',
                mentorsDesc: 'Top texnologiya kompaniyalarida ishlagan mutaxassislardan o\'rganing.',
                events: 'IT Eventlar va Networking',
                eventsDesc: 'Sohadagi eng sara mutaxassislar bilan uchrashuvlar.',
                mock: 'Mock Intervyular',
                mockDesc: 'Xar xafta mock tekin',
                coworking: '24/7 Coworking',
                coworkingDesc: 'Xohlagan vaqtingizda dars qilishingiz uchun qulay maydon.'
            },
            stats: {
                students: 'O\'quvchilar',
                employment: 'Ishga Joylashish',
                partners: 'Hamkorlar',
                projects: 'Loyihalar'
            },
            path: {
                title: 'Muvaffaqiyat Yo\'li',
                step1: 'Qabul: Darajangizni aniqlaymiz',
                step1Desc: 'Sizning qiziqishingizga qarab yo\'nalish tanlaymiz.',
                step2: 'Amaliyot: Real proyektlar ustida ishlaysiz',
                step2Desc: 'Faqat kod yozmaysiz, balki tizimlar qurasiz.',
                step3: 'Portfolio: Kuchli loyihalar to\'plami',
                step3Desc: 'Ish beruvchilarni hayron qoldiradigan portfolioni tayyorlaymiz.',
                step4: 'Karyera: Ish taklifi va mentorlik',
                step4Desc: 'Biz sizni top kompaniyalarga tavsiya qilamiz.'
            }
        },
        status: {
            title: 'Talaba Holatini Tekshirish',
            subtitle: 'To\'lov holati va kurs ma\'lumotlarini ko\'rish uchun ID raqamingizni kiriting.',
            placeholder: 'ID raqamingiz (masalan: DS2025)',
            btn: 'Tekshirish',
            notFound: 'O\'quvchi Topilmadi',
            notFoundDesc: 'Iltimos, ID raqamni tekshirib qaytadan urinib ko\'ring.',
            course: 'Kurs',
            paymentStatus: 'To\'lov Holati',
            paid: 'To\'langan',
            unpaid: 'To\'lanmagan',
            lastPayment: 'Oxirgi To\'lov',
            nextPayment: 'Keyingi To\'lov',
            payNow: 'Hozir To\'lash'
        },
        admin: {
            loginTitle: 'Admin Kirish',
            username: 'Login',
            password: 'Parol',
            loginBtn: 'Kirish',
            error: 'Login yoki parol xato!',
            dashboardTitle: 'Boshqaruv Paneli',
            addStudent: 'O\'quvchi Qo\'shish',
            editStudent: 'Tahrirlash',
            deleteStudent: 'O\'chirish',
            saveBtn: 'Saqlash',
            cancelBtn: 'Bekor qilish',
            id: 'ID',
            name: 'Ism Familiya',
            course: 'Kurs',
            status: 'Holat',
            lastPayment: 'Oxirgi To\'lov',
            nextPayment: 'Keyingi To\'lov',
            markPaid: 'To\'lov qilish',
            markUnpaid: 'Qarzdorlik',
            actions: 'Amallar',
            receipt: 'To\'lov Cheki',
            history: 'Tarix',
            amount: 'Summa',
            date: 'Sana',
            confirmDelete: 'O\'chirib tashlansinmi?',
            deleteWarning: 'Ushbu o\'quvchi ma\'lumotlari butunlay o\'chib ketadi.',
            print: 'Chop etish',
            close: 'Yopish',
            paymentHistory: 'To\'lovlar Tarixi',
            studentHistory: 'O\'quvchi To\'lovlari',
            groups: 'Guruhlar',
            addGroup: 'Guruh Qo\'shish',
            teacher: 'O\'qituvchi',
            groupName: 'Guruh Nomi',
            groupRevenue: 'Guruh Tushumi',
            groupStudents: 'Guruh O\'quvchilari'
        },
        monitoring: {
            title: 'Monitoring Tizimi',
            subtitle: 'Akademiya bo\'yicha umumiy statistika va tahlillar.',
            stats: {
                totalStudents: 'Jami O\'quvchilar',
                totalRevenue: 'Umumiy Tushum',
                activeCourses: 'Faol Kurslar',
                paidStudents: 'To\'lov Qilganlar',
                unpaidStudents: 'To\'lov Qilmaganlar'
            },
            charts: {
                studentDist: 'O\'quvchilar Taqsimoti',
                paymentStats: 'To\'lov Statistikasi'
            },
            live: {
                title: 'JONLI KUZATUV',
                visitors: 'Hozirgi foydalanuvchilar',
                uptime: 'Tizim barqarorligi',
                throughput: 'Ma\'lumotlar oqimi',
                status: 'Xavfsizlik holati',
                logs: 'Tizim qaydlari'
            },
            loginTitle: 'Monitoring Kirish',
            error: 'Login yoki parol xato!'
        },
        footer: {
            desc: 'Raqamli yaratuvchilar va dasturchilarning yangi avlodini tarbiyalaymiz.',
            quickLinks: 'Tezkor Havolalar',
            socials: 'Ijtimoiy Tarmoqlar',
            contactInfo: 'Kontaktlar',
            rights: 'Barcha huquqlar himoyalangan.',
            socialLinks: {
                telegram: 'https://t.me/datasite_academy',
                instagram: 'https://instagram.com/datasite_academy',
                youtube: 'https://youtube.com/@datasite_academy'
            },
            phone: '+998 95 061 64 66',
            email: 'datasite_academy@gmail.com',
            address: '📍 Manzil: A.Xo\'jayev 38',
            landmark: '📍 Mo\'ljal: Chorsu, Davlat Xizmatlari binosi, 4-qavat',
            newsletter: {
                title: 'Telegram Kanalimiz',
                desc: 'Kanalimizga obuna bo\'ling va eng so\'nggi yangiliklardan xabardor bo\'ling.',
                placeholder: 'Savolingiz bormi? (Ixtiyoriy)',
                btn: 'Obuna bo\'lish'
            },
            legal: {
                privacy: 'Maxfiylik Siyosati',
                terms: 'Foydalanish Shartlari'
            }
        },
        courses: {
            title: 'Yangi Natijalar Kashf Eting',
            subtitle: 'Malakangizni oshirish uchun mukammal kursni toping.',
            instructor: 'Mentor',
            experience: 'Tajriba',
            years: 'yil',
            filter: {
                all: 'Barchasi',
                beginner: 'Boshlang\'ich',
                dev: 'Dasturlash',
                individual: 'Individual',
                data: 'Ma\'lumotlar',
                design: 'Dizayn',
                marketing: 'Marketing',
                other: 'Boshqa',
                language: 'Til'
            },
            card: {
                weeks: 'Hafta',
                students: 'O\'quvchi'
            }
        },
        about: {
            title: 'Datasite Academy Haqida',
            subtitle: 'Bizning vazifamiz - texnologik ta\'limni demokratlashtirish va sizga orzu qilgan karyerangizni qurishda yordam berish.',
            storyTitle: 'Bizning Hikoyamiz',
            storyText1: '2025-yilda asos solingan Datasite Academy oddiy bir g\'oya bilan boshlandi: yuqori sifatli texnologik ta\'lim hamma joyda, hamma uchun ochiq bo\'lishi kerak.',
            storyText2: 'Biz amaliy o\'rganishga ishonamiz. Shuning uchun barcha kurslarimiz loyihalarga asoslangan va tizimlarni masshtabli qurgan soha mutaxassislari tomonidan o\'tiladi.',
            stats: {
                students: 'O\'quvchilar',
                courses: 'Kurslar',
                mentors: 'Mentorlar'
            }
        },
        aboutPage: {
            heroTitle: 'Kelajakni Birga Quramiz',
            heroSubtitle: 'Biz shunchaki o\'rgatmaymiz, biz hayotlarni o\'zgartiramiz va yangi imkoniyatlar yaratamiz.',
            missionTitle: 'Bizning Missiyamiz',
            missionDesc: 'Sifatli IT ta\'limni hamma uchun ochiq qilish va har bir o\'quvchimizni professional darajaga ko\'tarish.',
            timeline: {
                year2022: '2022:Ilk qadam',
                desc2022: 'Datasite Academy loyihasi ustida ish boshlandi.',
                year2023: '2023:Akademiya ochilishi',
                desc2023: 'Ilk guruhlar shakllantirildi va darslar boshlandi.',
                year2024: '2024:Masshtab kengayishi',
                desc2024: 'Yangi kurslar va mentorlar jamoasi qo\'shildi.',
                year2025: '2025:IT markazga aylanish',
                desc2025: 'Respublika miqyosida yetakchi IT akademiyalardan biriga aylandik.'
            },
            stats: {
                students: 'Faol o\'quvchilar',
                courses: 'Kurslar soni',
                mentors: 'Tajribali mentorlar'
            }
        },
        contact: {
            title: 'Bog\'lanish',
            subtitle: 'Savollaringiz bormi? Sizdan eshitishni xohlaymiz.',
            labels: {
                phone: 'Telefon',
                email: 'Email',
                office: 'Ofis',
                name: 'Ism Familiya',
                emailAddr: 'Email Manzil',
                message: 'Xabar',
                send: 'Xabarni Yuborish'
            },
            notifications: {
                success: 'Xabaringiz muvaffaqiyatli yuborildi!',
                error: 'Xatolik yuz berdi.'
            }
        },
        enrollment: {
            title: 'Kursga Yozilish',
            subtitle: 'Orzungizdagi IT karyerani biz bilan boshlang. Formani to\'ldiring va biz siz bilan bog\'lanamiz.',
            form: {
                name: 'To\'liq ismingiz',
                phone: 'Telefon raqamingiz',
                course: 'Kursni tanlang',
                message: 'Qo\'shimcha savollar (ixtiyoriy)',
                submit: 'Yuborish',
                success: 'Arizangiz qabul qilindi! Tez orada operatorlarimiz bog\'lanishadi.',
                error: 'Xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko\'ring.'
            },
            courses: {
                frontend: 'Frontend Dasturlash',
                backend: 'Backend (Node.js/Python)',
                fullstack: 'Fullstack Dasturlash',
                design: 'Grafik va UI/UX Dizayn',
                marketing: 'SMM va Raqamli Marketing',
                foundation: 'IT Foundation',
                russian: 'Rus tili'
            }
        }
    },
    ru: {
        nav: {
            home: 'Главная',
            courses: 'Курсы',
            about: 'О Нас',
            status: 'Статус',
            contact: 'Контакты',
            enroll: 'Записаться',
            news: 'Новости',
            getStarted: 'Начать'
        },
        home: {
            hero: {
                titlePrefix: 'Будущее',
                titleSuffix: 'Здесь',
                keywords: ['Дизайн', 'Fullstack'],
                subtitle: 'Мы не просто учим, мы помогаем построить карьеру через реальные проекты.',
                cta: 'Посмотреть Курсы',
                secondaryCta: 'О Нас'
            },
            whyTitle: 'Почему Datasite Academy?',
            whySubtitle: 'Мы даем больше, чем просто уроки. Мы строим карьеры.',
            features: {
                secondTeacher: 'Система Второго Учителя',
                secondTeacherDesc: 'Помощники менторы всегда готовы помочь вам с трудностями.',
                mentors: 'Опытные Менторы',
                mentorsDesc: 'Учитесь у экспертов, работавших в топовых технологических компаниях.',
                events: 'IT Мероприятия и Нетворкинг',
                eventsDesc: 'Встречи с лучшими специалистами отрасли.',
                mock: 'Mock Интервью',
                mockDesc: 'Бесплатные Mock-интервью каждую неделю.',
                coworking: '24/7 Коворкинг',
                coworkingDesc: 'Удобное место для учебы в любое время.'
            },
            stats: {
                students: 'Студенты',
                employment: 'Трудоустройство',
                partners: 'Партнеры',
                projects: 'Проекты'
            },
            path: {
                title: 'Путь к Успеху',
                step1: 'Прием: Определение уровня',
                step1Desc: 'Мы подбираем направление, исходя из ваших интересов.',
                step2: 'Практика: Работа над реальными проектами',
                step2Desc: 'Вы не просто пишете код, вы строите системы.',
                step3: 'Портфолио: Сильное портфолио',
                step3Desc: 'Мы готовим портфолио, которое удивит работодателей.',
                step4: 'Карьера: Оффер и Менторство',
                step4Desc: 'Мы рекомендуем вас в топовые компании.'
            }
        },
        status: {
            title: 'Проверка Статуса Студента',
            subtitle: 'Введите ваш ID для проверки оплаты и информации о курсе.',
            placeholder: 'Ваш ID (например: DS2025)',
            btn: 'Проверить',
            notFound: 'Студент не найден',
            notFoundDesc: 'Пожалуйста, проверьте ID и попробуйте снова.',
            course: 'Курс',
            paymentStatus: 'Статус Оплаты',
            paid: 'Оплачено',
            unpaid: 'Не оплачено',
            lastPayment: 'Последняя Оплата',
            nextPayment: 'Следующая Оплата',
            payNow: 'Оплатить Сейчас'
        },
        admin: {
            loginTitle: 'Вход для Админа',
            username: 'Логин',
            password: 'Пароль',
            loginBtn: 'Войти',
            error: 'Неверный логин или пароль!',
            dashboardTitle: 'Панель Управления',
            addStudent: 'Добавить Студента',
            editStudent: 'Редактировать',
            deleteStudent: 'Удалить',
            saveBtn: 'Сохранить',
            cancelBtn: 'Отмена',
            id: 'ID',
            name: 'ФИО',
            course: 'Курс',
            status: 'Статус',
            lastPayment: 'Последняя Оплата',
            nextPayment: 'Следующая Оплата',
            markPaid: 'Отметить оплату',
            markUnpaid: 'Отметить долг',
            actions: 'Действия',
            receipt: 'Чек Оплаты',
            history: 'История',
            amount: 'Сумма',
            date: 'Дата',
            confirmDelete: 'Вы уверены?',
            deleteWarning: 'Данные студента будут удалены безвозвратно.',
            print: 'Печать',
            close: 'Закрыть',
            paymentHistory: 'История Платежей',
            studentHistory: 'Платежи Студента',
            groups: 'Группы',
            addGroup: 'Добавить Группу',
            teacher: 'Учитель',
            groupName: 'Название Группы',
            groupRevenue: 'Выручка Группы',
            groupStudents: 'Студенты Группы'
        },
        monitoring: {
            title: 'Система Мониторинга',
            subtitle: 'Общая статистика и аналитика академии.',
            stats: {
                totalStudents: 'Всего Студентов',
                totalRevenue: 'Общая Выручка',
                activeCourses: 'Активные Курсы',
                paidStudents: 'Оплатившие',
                unpaidStudents: 'Не оплатившие'
            },
            charts: {
                studentDist: 'Распределение Студентов',
                paymentStats: 'Статистика Оплат'
            },
            live: {
                title: 'LIVE ОТСЛЕЖИВАНИЕ',
                visitors: 'Посетители онлайн',
                uptime: 'Аптайм системы',
                throughput: 'Поток данных',
                status: 'Статус безопасности',
                logs: 'Логи системы'
            },
            loginTitle: 'Вход в Мониторинг',
            error: 'Неверный логин или пароль!'
        },
        footer: {
            desc: 'Мы воспитываем новое поколение цифровых создателей и разработчиков.',
            quickLinks: 'Быстрые Ссылки',
            socials: 'Соцсети',
            contactInfo: 'Контакты',
            rights: 'Все права защищены.',
            socialLinks: {
                telegram: 'https://t.me/datasite_academy',
                instagram: 'https://instagram.com/datasite_academy',
                youtube: 'https://youtube.com/@datasite_academy'
            },
            phone: '+998 95 061 64 66',
            email: 'datasite_academy@gmail.com',
            address: '📍 Адрес: А.Ходжаев 38',
            landmark: '📍 Ориентир: Чорсу, Здание Госуслуг, 4-й этаж',
            newsletter: {
                title: 'Наш Telegram Канал',
                desc: 'Подписывайтесь на наш канал и будьте в курсе последних новостей.',
                placeholder: 'Есть вопросы? (Опционально)',
                btn: 'Подписаться'
            },
            legal: {
                privacy: 'Политика Конфиденциальности',
                terms: 'Условия Использования'
            }
        },
        courses: {
            title: 'Откройте Новые Результаты',
            subtitle: 'Найдите идеальный курс для повышения квалификации.',
            instructor: 'Ментор',
            experience: 'Опыт',
            years: 'лет',
            filter: {
                all: 'Все',
                beginner: 'Начинающий',
                dev: 'Разработка',
                individual: 'Индивидуальный',
                data: 'Data Science',
                design: 'Дизайн',
                marketing: 'Маркетинг',
                other: 'Другое',
                language: 'Язык'
            },
            card: {
                weeks: 'Недель',
                students: 'Студентов'
            }
        },
        about: {
            title: 'О Datasite Academy',
            subtitle: 'Наша миссия - демократизировать техническое образование и помочь вам построить карьеру мечты.',
            storyTitle: 'Наша История',
            storyText1: 'Datasite Academy была основана в 2025 году с простой идеей: качественное IT-образование должно быть доступно каждому.',
            storyText2: 'Мы верим в практическое обучение. Поэтому все наши курсы основаны на проектах и ведутся экспертами индустрии.',
            stats: {
                students: 'Студентов',
                courses: 'Курсов',
                mentors: 'Менторов'
            }
        },
        aboutPage: {
            heroTitle: 'Строим Будущее Вместе',
            heroSubtitle: 'Мы не просто учим, мы меняем жизни и создаем новые возможности.',
            missionTitle: 'Наша Миссия',
            missionDesc: 'Сделать качественное IT-образование доступным для всех и довести каждого студента до профессионального уровня.',
            timeline: {
                year2022: '2022:Первые шаги',
                desc2022: 'Началась работа над проектом Datasite Academy.',
                year2023: '2023:Открытие Академии',
                desc2023: 'Сформированы первые группы и начались занятия.',
                year2024: '2024:Масштабирование',
                desc2024: 'К команде присоединились новые курсы и менторы.',
                year2025: '2025:Лидирующий IT Центр',
                desc2025: 'Мы стали одной из ведущих IT-академий в стране.'
            },
            stats: {
                students: 'Активных студентов',
                courses: 'Количество курсов',
                mentors: 'Экспертных менторов'
            }
        },
        contact: {
            title: 'Свяжитесь с Нами',
            subtitle: 'Есть вопросы? Мы будем рады ответить.',
            labels: {
                phone: 'Телефон',
                email: 'Email',
                office: 'Офис',
                name: 'ФИО',
                emailAddr: 'Email Адрес',
                message: 'Сообщение',
                send: 'Отправить'
            },
            notifications: {
                success: 'Ваше сообщение успешно отправлено!',
                error: 'Произошла ошибка.'
            }
        },
        enrollment: {
            title: 'Записаться на Курс',
            subtitle: 'Начните карьеру своей мечты с нами. Заполните форму, и мы свяжемся с вами.',
            form: {
                name: 'ФИО',
                phone: 'Номер телефона',
                course: 'Выберите курс',
                message: 'Дополнительные вопросы (опционально)',
                submit: 'Отправить заявку',
                success: 'Заявка принята! Наши операторы скоро свяжутся с вами.',
                error: 'Произошла ошибка. Пожалуйста, попробуйте позже.'
            },
            courses: {
                frontend: 'Frontend Разработка',
                backend: 'Backend (Node.js/Python)',
                fullstack: 'Fullstack Разработка',
                design: 'Графический и UI/UX Дизайн',
                marketing: 'SMM и Digital Маркетинг',
                foundation: 'IT Foundation',
                russian: 'Русский язык'
            }
        }
    },
    en: {
        nav: {
            home: 'Home',
            courses: 'Courses',
            about: 'About Us',
            status: 'Status',
            contact: 'Contact',
            enroll: 'Enroll Now',
            news: 'News',
            getStarted: 'Get Started'
        },
        home: {
            hero: {
                titlePrefix: 'The Future of',
                titleSuffix: 'is Here',
                keywords: ['Coding', 'Design', 'Fullstack'],
                subtitle: 'We don\'t just teach. We help you build a career through real-world projects.',
                cta: 'Explore Courses',
                secondaryCta: 'About Us'
            },
            whyTitle: 'Why Datasite Academy?',
            whySubtitle: 'We provide more than just tutorials. We build careers.',
            features: {
                secondTeacher: 'Second Teacher System',
                secondTeacherDesc: 'Assistant mentors always available to help you with your challenges.',
                mentors: 'Expert Mentors',
                mentorsDesc: 'Learn from industry veterans who have worked in top tech companies.',
                events: 'IT Events & Networking',
                eventsDesc: 'Meet with top industry professionals during our exclusive events.',
                mock: 'Mock Interviews',
                mockDesc: 'Free mock interviews every week.',
                coworking: '24/7 Coworking Space',
                coworkingDesc: 'A comfortable space for you to study at any time.'
            },
            stats: {
                students: 'Total Students',
                employment: 'Employment Rate',
                partners: 'Partner Companies',
                projects: 'Real Projects'
            },
            path: {
                title: 'Success Path',
                step1: 'Admission: Define your level',
                step1Desc: 'We choose a direction based on your interests.',
                step2: 'Practice: Work on real projects',
                step2Desc: 'You don\'t just write code, you build systems.',
                step3: 'Portfolio: Build a strong collection',
                step3Desc: 'We prepare a portfolio that will wow employers.',
                step4: 'Career: Job offer & Mentorship',
                step4Desc: 'We recommend you to top tech companies.'
            }
        },
        status: {
            title: 'Check Student Status',
            subtitle: 'Enter your Student ID to check payment status and course details.',
            placeholder: 'Enter Student ID (e.g. DS2025)',
            btn: 'Check',
            notFound: 'Student Not Found',
            notFoundDesc: 'Please check your ID and try again.',
            course: 'Course',
            paymentStatus: 'Payment Status',
            paid: 'Paid',
            unpaid: 'Unpaid',
            lastPayment: 'Last Payment',
            nextPayment: 'Next Payment',
            payNow: 'Pay Now'
        },
        admin: {
            loginTitle: 'Admin Login',
            username: 'Username',
            password: 'Password',
            loginBtn: 'Login',
            error: 'Invalid username or password!',
            dashboardTitle: 'Admin Dashboard',
            addStudent: 'Add Student',
            editStudent: 'Edit',
            deleteStudent: 'Delete',
            saveBtn: 'Save',
            cancelBtn: 'Cancel',
            id: 'ID',
            name: 'Full Name',
            course: 'Course',
            status: 'Status',
            lastPayment: 'Last Payment',
            nextPayment: 'Next Payment',
            markPaid: 'Make Payment',
            markUnpaid: 'Mark Unpaid',
            actions: 'Actions',
            receipt: 'Payment Receipt',
            history: 'History',
            amount: 'Amount',
            date: 'Date',
            confirmDelete: 'Are you sure?',
            deleteWarning: 'This student data will be permanently deleted.',
            print: 'Print',
            close: 'Close',
            paymentHistory: 'Payment History',
            studentHistory: 'Student Payments',
            groups: 'Groups',
            addGroup: 'Add Group',
            teacher: 'Teacher',
            groupName: 'Group Name',
            groupRevenue: 'Group Revenue',
            groupStudents: 'Group Students'
        },
        monitoring: {
            title: 'Monitoring System',
            subtitle: 'General statistics and analytics of the academy.',
            stats: {
                totalStudents: 'Total Students',
                totalRevenue: 'Total Revenue',
                activeCourses: 'Active Courses',
                paidStudents: 'Paid Students',
                unpaidStudents: 'Unpaid Students'
            },
            charts: {
                studentDist: 'Student Distribution',
                paymentStats: 'Payment Statistics'
            },
            live: {
                title: 'LIVE TRACKING',
                visitors: 'Concurrent Visitors',
                uptime: 'System Uptime',
                throughput: 'Data Throughput',
                status: 'Security Status',
                logs: 'System Logs'
            },
            loginTitle: 'Monitoring Login',
            error: 'Invalid username or password!'
        },
        footer: {
            desc: 'Empowering the next generation of digital creators and developers through world-class education.',
            quickLinks: 'Quick Links',
            socials: 'Socials',
            contactInfo: 'Contact Info',
            rights: 'All rights reserved.',
            socialLinks: {
                telegram: 'https://t.me/datasite_academy',
                instagram: 'https://instagram.com/datasite_academy',
                youtube: 'https://youtube.com/@datasite_academy'
            },
            phone: '+998 95 061 64 66',
            email: 'datasite_academy@gmail.com',
            address: '📍 Address: A.Xo\'jayev 38',
            landmark: '📍 Landmark: Chorsu, Public Services Building, 4th floor',
            newsletter: {
                title: 'Telegram Channel',
                desc: 'Subscribe to our channel and stay updated with the latest news.',
                placeholder: 'Have a question? (Optional)',
                btn: 'Subscribe Now'
            },
            legal: {
                privacy: 'Privacy Policy',
                terms: 'Terms of Service'
            }
        },
        courses: {
            title: 'Discover New Results',
            subtitle: 'Find the perfect course to upgrade your skills.',
            instructor: 'Instructor',
            experience: 'Experience',
            years: 'years',
            filter: {
                all: 'All',
                beginner: 'Beginner',
                dev: 'Development',
                individual: 'Individual',
                data: 'Data Science',
                design: 'Design',
                marketing: 'Marketing',
                other: 'Other',
                language: 'Language'
            },
            card: {
                weeks: 'Weeks',
                students: 'Students'
            }
        },
        about: {
            title: 'About Datasite Academy',
            subtitle: "We're on a mission to democratize tech education and help you build the career of your dreams.",
            storyTitle: 'Our Story',
            storyText1: 'Founded in 2025, Datasite Academy started with a simple idea: that high-quality tech education should be accessible to everyone, everywhere.',
            storyText2: "We believe in learning by doing. That's why all our courses are project-based and taught by industry experts who have actually built systems at scale.",
            stats: {
                students: 'Students',
                courses: 'Courses',
                mentors: 'Mentors'
            }
        },
        aboutPage: {
            heroTitle: 'Building the Future Together',
            heroSubtitle: 'We don\'t just teach, we transform lives and create new opportunities.',
            missionTitle: 'Our Mission',
            missionDesc: 'Making quality IT education accessible to everyone and raising every student to a professional level.',
            timeline: {
                year2022: '2022:First Steps',
                desc2022: 'Work on the Datasite Academy project began.',
                year2023: '2023:Academy Opening',
                desc2023: 'First groups were formed and classes began.',
                year2024: '2024:Scaling Up',
                desc2024: 'New courses and mentors joined the team.',
                year2025: '2025:Leading IT Center',
                desc2025: 'Became one of the leading IT academies at the national level.'
            },
            stats: {
                students: 'Active Students',
                courses: 'Number of Courses',
                mentors: 'Expert Mentors'
            }
        },
        contact: {
            title: 'Get In Touch',
            subtitle: "Have questions? We'd love to hear from you.",
            labels: {
                phone: 'Phone',
                email: 'Email',
                office: 'Office',
                name: 'Full Name',
                emailAddr: 'Email Address',
                message: 'Message',
                send: 'Send Message'
            },
            notifications: {
                success: 'Your message has been sent successfully!',
                error: 'An error occurred.'
            }
        },
        enrollment: {
            title: 'Enroll in a Course',
            subtitle: 'Start your dream IT career with us. Fill out the form and we will contact you.',
            form: {
                name: 'Full Name',
                phone: 'Phone Number',
                course: 'Select a Course',
                message: 'Additional questions (optional)',
                submit: 'Submit Application',
                success: 'Application received! Our operators will contact you soon.',
                error: 'An error occurred. Please try again later.'
            },
            courses: {
                frontend: 'Frontend Development',
                backend: 'Backend (Node.js/Python)',
                fullstack: 'Fullstack Development',
                design: 'Graphic & UI/UX Design',
                marketing: 'SMM & Digital Marketing',
                foundation: 'IT Foundation',
                russian: 'Russian Language'
            }
        }
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('uz');

    const toggleLanguage = () => {
        setLanguage(prev => {
            if (prev === 'uz') return 'ru';
            if (prev === 'ru') return 'en';
            return 'uz';
        });
    };

    const currentTrans = translations[language];
    const t = currentTrans || translations['uz'];

    const value = {
        language,
        toggleLanguage,
        t,
        translations
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

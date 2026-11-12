import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ parentName: '', childName: '', childAge: '', phone: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const specialists = [
    { name: 'Иванова Мария Петровна', role: 'Логопед-дефектолог', experience: '12 лет', emoji: '👩‍⚕️' },
    { name: 'Смирнова Елена Александровна', role: 'Логопед', experience: '8 лет', emoji: '👩‍🏫' },
    { name: 'Козлова Анна Сергеевна', role: 'Нейропсихолог', experience: '10 лет', emoji: '🧠' },
    { name: 'Петрова Ольга Ивановна', role: 'Логопед-дефектолог', experience: '15 лет', emoji: '👩‍⚕️' },
    { name: 'Волкова Наталья Дмитриевна', role: 'Логопед', experience: '6 лет', emoji: '👩‍🏫' },
    { name: 'Новикова Татьяна Викторовна', role: 'Дефектолог', experience: '11 лет', emoji: '📚' },
    { name: 'Морозова Светлана Юрьевна', role: 'Логопед', experience: '9 лет', emoji: '👩‍🏫' },
    { name: 'Федорова Ирина Олеговна', role: 'Нейропсихолог', experience: '7 лет', emoji: '🧠' },
    { name: 'Алексеева Дарья Михайловна', role: 'Логопед-дефектолог', experience: '13 лет', emoji: '👩‍⚕️' },
    { name: 'Лебедева Юлия Андреевна', role: 'Логопед', experience: '5 лет', emoji: '👩‍🏫' },
    { name: 'Соколова Екатерина Павловна', role: 'Дефектолог', experience: '14 лет', emoji: '📚' },
    { name: 'Попова Виктория Романовна', role: 'Логопед', experience: '8 лет', emoji: '👩‍🏫' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Л</span>
              </div>
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                ЛигаЛого
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">О центре</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Услуги</button>
              <button onClick={() => scrollToSection('specialists')} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Специалисты</button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-600 hover:text-purple-600 transition-colors font-medium">Контакты</button>
              <button onClick={() => scrollToSection('diagnosis')} className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2.5 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all">
                Записаться
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50 rounded-lg">О центре</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50 rounded-lg">Услуги</button>
              <button onClick={() => scrollToSection('specialists')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50 rounded-lg">Специалисты</button>
              <button onClick={() => scrollToSection('contacts')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-purple-50 rounded-lg">Контакты</button>
              <button onClick={() => scrollToSection('diagnosis')} className="block w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white px-4 py-2.5 rounded-full font-medium text-center">
                Записаться на диагностику
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-20 md:pt-24 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-200 rounded-full opacity-30 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-600">Набор открыт</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Помогаем детям{' '}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  говорить красиво
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                Детский центр коррекции речи «ЛигаЛого» — команда из 12 опытных специалистов, 
                которые помогут вашему ребёнку преодолеть речевые трудности и раскрыть свой потенциал.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection('diagnosis')}
                  className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Записаться на диагностику
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transition-all"
                >
                  Узнать больше
                </button>
              </div>
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-purple-600">12</div>
                  <div className="text-sm text-gray-500">специалистов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pink-500">2000+</div>
                  <div className="text-sm text-gray-500">детей</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-500">10</div>
                  <div className="text-sm text-gray-500">лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl rotate-6 opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🗣️</div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                        <div className="text-3xl mb-1">👶</div>
                        <div className="text-xs text-gray-500">3-4 года</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                        <div className="text-3xl mb-1">🧒</div>
                        <div className="text-xs text-gray-500">5-6 лет</div>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
                        <div className="text-3xl mb-1">👦</div>
                        <div className="text-xs text-gray-500">7+ лет</div>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">Работаем с детьми от 3 лет</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">О нашем центре</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы создали пространство, где каждый ребёнок чувствует себя комфортно и получает профессиональную помощь
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Индивидуальный подход', desc: 'Каждое занятие строится с учётом особенностей и потребностей конкретного ребёнка' },
              { icon: '🏆', title: 'Доказательная база', desc: 'Используем только проверенные методики с подтверждённой эффективностью' },
              { icon: '👨‍👩‍👧', title: 'Работа с родителями', desc: 'Даём рекомендации и обучаем родителей приёмам для домашних занятий' },
              { icon: '🎮', title: 'Игровая форма', desc: 'Занятия проходят в увлекательной игровой форме, чтобы ребёнку было интересно' },
              { icon: '📊', title: 'Отслеживание прогресса', desc: 'Регулярная диагностика и отчёты о достижениях вашего ребёнка' },
              { icon: '🏠', title: 'Уютная атмосфера', desc: 'Современное оборудование в комфортной обстановке, располагающей к обучению' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services / Pricing Section */}
      <section id="services" className="py-20 md:py-28 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши абонементы</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Выберите удобный формат оплаты — абонемент на 5 или 10 занятий, или разовое посещение
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Single */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎫</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Разовое занятие</h3>
                <p className="text-gray-500 text-sm mb-6">Одно занятие без обязательств</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">1 500</span>
                  <span className="text-gray-500"> ₽</span>
                  <div className="text-sm text-gray-400 mt-1">за 1 занятие (45 мин)</div>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Индивидуальное занятие
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Длительность 45 минут
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Без привязки к расписанию
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('diagnosis')}
                  className="w-full py-3 rounded-full border-2 border-purple-200 text-purple-700 font-semibold hover:bg-purple-50 transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* 5 sessions - Popular */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-400 hover:shadow-2xl transition-shadow relative scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📋</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Абонемент на 5</h3>
                <p className="text-gray-500 text-sm mb-6">5 занятий для стабильного результата</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">6 500</span>
                  <span className="text-gray-500"> ₽</span>
                  <div className="text-sm text-gray-400 mt-1">1 300 ₽ за занятие</div>
                  <div className="text-sm text-green-600 font-medium mt-1">Экономия 1 000 ₽</div>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    5 индивидуальных занятий
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Фиксированное расписание
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Отчёт о прогрессе
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Срок действия 30 дней
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('diagnosis')}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg transition-all"
                >
                  Записаться
                </button>
              </div>
            </div>

            {/* 10 sessions */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow relative">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Абонемент на 10</h3>
                <p className="text-gray-500 text-sm mb-6">10 занятий для максимального результата</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">11 000</span>
                  <span className="text-gray-500"> ₽</span>
                  <div className="text-sm text-gray-400 mt-1">1 100 ₽ за занятие</div>
                  <div className="text-sm text-green-600 font-medium mt-1">Экономия 4 000 ₽</div>
                </div>
                <ul className="text-left space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    10 индивидуальных занятий
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Приоритетное расписание
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Подробный отчёт + рекомендации
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Срок действия 60 дней
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    Домашние задания
                  </li>
                </ul>
                <button
                  onClick={() => scrollToSection('diagnosis')}
                  className="w-full py-3 rounded-full border-2 border-purple-200 text-purple-700 font-semibold hover:bg-purple-50 transition-colors"
                >
                  Записаться
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            * Диагностика проводится бесплатно при покупке абонемента
          </p>
        </div>
      </section>

      {/* Specialists Section */}
      <section id="specialists" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши специалисты</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Команда из 12 квалифицированных специалистов с многолетним опытом работы с детьми
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialists.map((spec, i) => (
              <div key={i} className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-2xl">{spec.emoji}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{spec.name}</h3>
                <p className="text-purple-600 text-sm font-medium mb-2">{spec.role}</p>
                <p className="text-gray-500 text-xs">Опыт: {spec.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis Form Section */}
      <section id="diagnosis" className="py-20 md:py-28 bg-gradient-to-b from-purple-50/50 to-pink-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Запись на диагностику</h2>
              <p className="text-lg text-gray-600">
                Заполните форму и мы свяжемся с вами для подбора удобного времени. 
                Первичная консультация — бесплатно!
              </p>
            </div>

            {formSubmitted && (
              <div className="mb-8 bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-2">✅</div>
                <h3 className="text-xl font-semibold text-green-800 mb-1">Заявка отправлена!</h3>
                <p className="text-green-600">Мы свяжемся с вами в течение 30 минут в рабочее время</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя родителя *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.parentName}
                    onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all outline-none"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя ребёнка *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.childName}
                    onChange={(e) => setFormData({...formData, childName: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all outline-none"
                    placeholder="Имя ребёнка"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Возраст ребёнка *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.childAge}
                    onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all outline-none"
                    placeholder="Например: 5 лет"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all outline-none"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Опишите проблему / пожелания
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 transition-all outline-none resize-none"
                    placeholder="Расскажите, что вас беспокоит в речи ребёнка, какие звуки не выговаривает, есть ли рекомендации других специалистов..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Отправить заявку на диагностику
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">С чем мы работаем</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наши специалисты помогут решить широкий спектр речевых проблем
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🔤', title: 'Дислалия', desc: 'Нарушение произношения отдельных звуков' },
              { icon: '🗨️', title: 'Заикание', desc: 'Нарушение темпа и ритма речи' },
              { icon: '📖', title: 'ОНР', desc: 'Общее недоразвитие речи' },
              { icon: '🧩', title: 'Алалия', desc: 'Отсутствие или недоразвитие речи' },
              { icon: '✍️', title: 'Дисграфия', desc: 'Нарушение письменной речи' },
              { icon: '📝', title: 'Дислексия', desc: 'Нарушение чтения' },
              { icon: '🎓', title: 'Подготовка к школе', desc: 'Развитие речи для будущих первоклассников' },
              { icon: '🧠', title: 'ЗРР / ЗПРР', desc: 'Задержка речевого/психического развития' },
            ].map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">Мы всегда рады ответить на ваши вопросы</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">г. Москва, ул. Примерная, д. 15</p>
              <p className="text-gray-500 text-sm mt-1">м. Парк Культуры, 5 мин пешком</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (495) 123-45-67</p>
              <p className="text-gray-500 text-sm mt-1">Пн-Сб: 9:00 — 20:00</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@ligalogo.ru</p>
              <p className="text-gray-500 text-sm mt-1">Ответим в течение часа</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Л</span>
                </div>
                <span className="text-xl font-bold">ЛигаЛого</span>
              </div>
              <p className="text-gray-400 text-sm">
                Детский центр коррекции речи. Помогаем детям говорить красиво и уверенно с 2014 года.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors text-sm">О центре</button></li>
                <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-sm">Услуги и цены</button></li>
                <li><button onClick={() => scrollToSection('specialists')} className="text-gray-400 hover:text-white transition-colors text-sm">Специалисты</button></li>
                <li><button onClick={() => scrollToSection('diagnosis')} className="text-gray-400 hover:text-white transition-colors text-sm">Запись на диагностику</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📍 г. Москва, ул. Примерная, д. 15</li>
                <li>📞 +7 (495) 123-45-67</li>
                <li>✉️ info@ligalogo.ru</li>
                <li>🕐 Пн-Сб: 9:00 — 20:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
            © 2024 ЛигаЛого. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

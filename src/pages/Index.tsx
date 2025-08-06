import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-chemical-beige to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-chemical-orange rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-800">FURNITURE</h1>
                <p className="text-sm text-gray-600">CLEANING</p>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-chemical-orange transition-colors">Услуги</a>
              <a href="#advantages" className="text-gray-700 hover:text-chemical-orange transition-colors">Преимущества</a>
              <a href="#works" className="text-gray-700 hover:text-chemical-orange transition-colors">Наши работы</a>
              <a href="#reviews" className="text-gray-700 hover:text-chemical-orange transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-chemical-orange transition-colors">Контакты</a>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Icon name="Phone" size={18} className="text-chemical-orange" />
                <span className="font-semibold text-gray-800">+7 (910) 178-09 65</span>
              </div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-chemical-brown rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </div>
                <div className="w-8 h-8 bg-chemical-brown rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={16} className="text-white" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-chemical-beige via-chemical-beige-dark to-chemical-beige">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-chemical-brown leading-tight">
                  Профессиональная химчистка в
                </h1>
                <h2 className="text-5xl font-bold text-chemical-brown leading-tight">
                  Санкт-Петербурге
                </h2>
                <h3 className="text-4xl font-bold text-chemical-orange">
                  Диваны
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-chemical-orange rounded-full"></div>
                  <span className="text-gray-700 text-lg">без запаха и химии</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-chemical-orange rounded-full"></div>
                  <span className="text-gray-700 text-lg">выезд в удобное время</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-chemical-orange rounded-full"></div>
                  <span className="text-gray-700 text-lg">безопасно для детей и животных</span>
                </div>
              </div>

              <Button 
                className="bg-chemical-orange hover:bg-chemical-orange/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                Оставить заявку
              </Button>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/7d5b3a32-4f94-4e9b-a606-5e3c574232ee.jpg" 
                  alt="Профессиональная химчистка диванов"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={24} />
                  <span className="font-semibold">Гарантия качества</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Мы используем профессиональное оборудование и безопасные средства для идеального результата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-chemical-beige/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Sparkles" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Экологически чистые средства</h3>
                <p className="text-gray-600">
                  Используем только безопасные средства без вредных химикатов
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-chemical-beige/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Clock" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Быстрое высыхание</h3>
                <p className="text-gray-600">
                  Специальная технология позволяет мебели высохнуть за 2-4 часа
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-chemical-beige/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Shield" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Гарантия результата</h3>
                <p className="text-gray-600">
                  Если результат вас не устроит, переделаем бесплатно
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-chemical-beige/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Users" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Опытные мастера</h3>
                <p className="text-gray-600">
                  Наши специалисты имеют опыт работы более 5 лет
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-chemical-beige/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Home" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Выезд на дом</h3>
                <p className="text-gray-600">
                  Работаем у вас дома, не нужно никуда везти мебель
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-chemical-beige/20">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Star" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Удаляем любые пятна</h3>
                <p className="text-gray-600">
                  Справляемся даже со сложными загрязнениями и застарелыми пятнами
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Prices Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Услуги и цены
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Профессиональная химчистка мебели с выездом на дом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <Icon name="Sofa" className="text-chemical-orange" size={24} />
                      <h3 className="text-xl font-semibold text-chemical-brown">Диван 2-местный</h3>
                    </div>
                    <span className="text-2xl font-bold text-chemical-orange">от 3500₽</span>
                  </div>
                  <p className="text-gray-600">Полная очистка с удалением пятен и запахов</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <Icon name="Armchair" className="text-chemical-orange" size={24} />
                      <h3 className="text-xl font-semibold text-chemical-brown">Диван 3-местный</h3>
                    </div>
                    <span className="text-2xl font-bold text-chemical-orange">от 4500₽</span>
                  </div>
                  <p className="text-gray-600">Глубокая чистка всех поверхностей</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <Icon name="Car" className="text-chemical-orange" size={24} />
                      <h3 className="text-xl font-semibold text-chemical-brown">Кресло</h3>
                    </div>
                    <span className="text-2xl font-bold text-chemical-orange">от 2000₽</span>
                  </div>
                  <p className="text-gray-600">Бережная чистка с сохранением формы</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-4">
                      <Icon name="Square" className="text-chemical-orange" size={24} />
                      <h3 className="text-xl font-semibold text-chemical-brown">Матрас (1 сторона)</h3>
                    </div>
                    <span className="text-2xl font-bold text-chemical-orange">от 2500₽</span>
                  </div>
                  <p className="text-gray-600">Антибактериальная обработка</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-chemical-brown mb-6">Что входит в услугу:</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Предварительный осмотр и оценка</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Удаление пыли и мусора</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Обработка пятновыводителем</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Глубокая химчистка</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Антибактериальная обработка</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" className="text-green-500" size={20} />
                  <span>Защитное покрытие</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-chemical-orange/10 rounded-lg">
                <p className="text-sm text-chemical-brown">
                  <Icon name="Info" className="inline mr-2" size={16} />
                  Бесплатный выезд мастера для оценки в пределах КАД
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works Section */}
      <section id="works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Наши работы
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Результаты нашей работы говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/cb0722e6-2104-452d-ae37-ec1cc017fabb.jpg" 
                  alt="До и после химчистки дивана"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold">
                  До → После
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-chemical-brown mb-2">Диван из велюра</h3>
                <p className="text-gray-600 text-sm">Удаление застарелых пятен и восстановление цвета</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/d8701a89-2d23-4b1b-b874-dd0d8bf4a598.jpg" 
                  alt="Профессиональное оборудование"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold">
                  Оборудование
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-chemical-brown mb-2">Профессиональное оборудование</h3>
                <p className="text-gray-600 text-sm">Современные технологии для идеального результата</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative overflow-hidden bg-gradient-to-br from-chemical-beige to-chemical-beige-dark h-64 flex items-center justify-center">
                <div className="text-center p-6">
                  <Icon name="Camera" className="text-chemical-orange mx-auto mb-4" size={48} />
                  <h3 className="font-semibold text-chemical-brown mb-2">Кресло-качалка</h3>
                  <p className="text-gray-600 text-sm">Деликатная чистка антикварной мебели</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="border-chemical-orange text-chemical-orange hover:bg-chemical-orange hover:text-white"
            >
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Отзывы наших клиентов
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Мы гордимся доверием наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Отличная работа! Диван выглядит как новый. Мастер приехал вовремя, работал аккуратно. Рекомендую!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-chemical-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">А</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-chemical-brown">Анна Петрова</h4>
                    <p className="text-gray-500 text-sm">2 дня назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Думали, что диван уже не спасти после того, как ребенок разлил сок. Но ребята справились на отлично!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-chemical-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">М</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-chemical-brown">Михаил Иванов</h4>
                    <p className="text-gray-500 text-sm">1 неделю назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">
                  "Быстро, качественно, недорого! Заказываю химчистку мебели только у них. Всегда довольна результатом."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-chemical-orange rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">Е</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-chemical-brown">Елена Смирнова</h4>
                    <p className="text-gray-500 text-sm">2 недели назад</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-chemical-brown text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Готовы заказать химчистку?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Оставьте заявку и получите бесплатную консультацию мастера
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-chemical-orange" size={20} />
                  <span className="text-lg">+7 (910) 178-09 65</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="text-chemical-orange" size={20} />
                  <span className="text-lg">Работаем ежедневно с 8:00 до 22:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="text-chemical-orange" size={20} />
                  <span className="text-lg">Выезд по всему Санкт-Петербургу</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-800">
              <h3 className="text-2xl font-bold text-chemical-brown mb-6">Оставить заявку</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                />
                <input 
                  type="tel" 
                  placeholder="Телефон" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                />
                <textarea 
                  placeholder="Опишите что нужно почистить" 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                />
                <Button 
                  className="w-full bg-chemical-orange hover:bg-chemical-orange/90 text-white py-3 text-lg"
                >
                  Отправить заявку
                </Button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4">
                Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-chemical-orange rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold">FURNITURE CLEANING</h3>
                <p className="text-sm text-gray-400">Профессиональная химчистка мебели</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Все права защищены</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Contact() {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Телефон",
      value: "+7 (910) 178-09 65",
      description: "Звоните ежедневно с 8:00 до 22:00",
      action: "Позвонить"
    },
    {
      icon: "MessageCircle",
      title: "WhatsApp",
      value: "+7 (910) 178-09 65",
      description: "Быстрые ответы в мессенджере",
      action: "Написать"
    },
    {
      icon: "Mail",
      title: "Email",
      value: "info@furniture-cleaning.ru",
      description: "Ответим в течение часа",
      action: "Написать"
    },
    {
      icon: "MapPin",
      title: "Адрес",
      value: "Санкт-Петербург",
      description: "Выезжаем по всему городу",
      action: "Показать на карте"
    }
  ];

  const workingHours = [
    { day: "Понедельник", hours: "8:00 - 22:00" },
    { day: "Вторник", hours: "8:00 - 22:00" },
    { day: "Среда", hours: "8:00 - 22:00" },
    { day: "Четверг", hours: "8:00 - 22:00" },
    { day: "Пятница", hours: "8:00 - 22:00" },
    { day: "Суббота", hours: "9:00 - 21:00" },
    { day: "Воскресенье", hours: "9:00 - 21:00" }
  ];

  const serviceAreas = [
    "Адмиралтейский район",
    "Василеостровский район", 
    "Выборгский район",
    "Калининский район",
    "Кировский район",
    "Колпинский район",
    "Красногвардейский район",
    "Красносельский район",
    "Кронштадтский район",
    "Курортный район",
    "Московский район",
    "Невский район",
    "Петроградский район",
    "Петродворцовый район",
    "Приморский район",
    "Пушкинский район",
    "Фрунзенский район",
    "Центральный район"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-chemical-beige to-white">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-chemical-orange rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="font-bold text-xl text-gray-800">FURNITURE</h1>
                <p className="text-sm text-gray-600">CLEANING</p>
              </div>
            </a>
            
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Icon name="Phone" size={18} className="text-chemical-orange" />
                <span className="font-semibold text-gray-800">+7 (910) 178-09 65</span>
              </div>
              <Button className="bg-chemical-orange hover:bg-chemical-orange/90">
                Заказать звонок
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-chemical-beige via-chemical-beige-dark to-chemical-beige">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-chemical-brown mb-6">
              Контакты
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Свяжитесь с нами удобным способом. Мы всегда готовы ответить на ваши вопросы 
              и помочь с выбором услуг.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={method.icon as any} className="text-chemical-orange" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-chemical-brown mb-2">
                    {method.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-800 mb-2">
                    {method.value}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {method.description}
                  </p>
                  <Button className="bg-chemical-orange hover:bg-chemical-orange/90 text-white">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-chemical-brown mb-8">
                Оставьте заявку
              </h2>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя *
                      </label>
                      <input 
                        type="text" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        placeholder="Введите ваше имя"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон *
                      </label>
                      <input 
                        type="tel" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        placeholder="Введите ваш email"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Услуга
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent">
                        <option>Выберите услугу</option>
                        <option>Химчистка дивана</option>
                        <option>Химчистка кресла</option>
                        <option>Чистка матраса</option>
                        <option>Чистка ковра</option>
                        <option>Чистка штор</option>
                        <option>Комплексная уборка</option>
                        <option>Другое</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Адрес
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        placeholder="Укажите адрес для выезда мастера"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Удобное время
                      </label>
                      <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="date" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        />
                        <input 
                          type="time" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Комментарий
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        placeholder="Опишите детали заказа, особые требования..."
                      />
                    </div>

                    <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90 text-white py-3">
                      Отправить заявку
                    </Button>

                    <p className="text-gray-500 text-sm text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-bold text-chemical-brown mb-6">
                  Режим работы
                </h3>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-700">{schedule.day}</span>
                          <span className="font-semibold text-chemical-brown">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-chemical-orange/10 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" className="text-chemical-orange" size={20} />
                        <span className="text-chemical-brown font-semibold">
                          Экстренные вызовы 24/7
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        При срочных случаях работаем круглосуточно
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Service Areas */}
              <div>
                <h3 className="text-2xl font-bold text-chemical-brown mb-6">
                  Районы обслуживания
                </h3>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-2">
                      {serviceAreas.map((area, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="MapPin" className="text-chemical-orange" size={16} />
                          <span className="text-gray-700 text-sm">{area}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon name="Truck" className="text-green-600" size={20} />
                        <span className="text-green-800 font-semibold">
                          Бесплатный выезд в пределах КАД
                        </span>
                      </div>
                      <p className="text-green-700 text-sm mt-2">
                        За КАД доплата 30₽/км
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              <div>
                <h3 className="text-2xl font-bold text-chemical-brown mb-6">
                  Быстрая связь
                </h3>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                        <Icon name="MessageCircle" className="mr-2" size={20} />
                        Написать в WhatsApp
                      </Button>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Icon name="Send" className="mr-2" size={20} />
                        Написать в Telegram
                      </Button>
                      <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90 text-white">
                        <Icon name="Phone" className="mr-2" size={20} />
                        Заказать обратный звонок
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Часто задаваемые вопросы
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-chemical-brown mb-2">
                  Как быстро вы можете приехать?
                </h3>
                <p className="text-gray-600">
                  Обычно мы приезжаем в день обращения или на следующий день. 
                  В экстренных случаях можем приехать в течение 2-3 часов.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-chemical-brown mb-2">
                  Сколько времени занимает чистка?
                </h3>
                <p className="text-gray-600">
                  Время зависит от размера и загрязненности мебели. 
                  Обычно чистка дивана занимает 1-2 часа, кресла - 30-60 минут.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-chemical-brown mb-2">
                  Какие средства вы используете?
                </h3>
                <p className="text-gray-600">
                  Мы используем только профессиональные экологически чистые средства, 
                  безопасные для детей и животных.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
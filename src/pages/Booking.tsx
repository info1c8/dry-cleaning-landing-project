import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    { id: 'sofa-2', name: 'Диван 2-местный', price: 1350, oldPrice: 1800 },
    { id: 'sofa-3', name: 'Диван 3-местный', price: 1800, oldPrice: 2400 },
    { id: 'sofa-corner', name: 'Угловой диван', price: 2400, oldPrice: 3200 },
    { id: 'armchair', name: 'Кресло', price: 600, oldPrice: 800 },
    { id: 'mattress-single', name: 'Матрас односпальный', price: 1500, oldPrice: 2000 },
    { id: 'mattress-double', name: 'Матрас двуспальный', price: 2250, oldPrice: 3000 },
    { id: 'carpet', name: 'Ковер (за м²)', price: 150, oldPrice: 200 },
    { id: 'curtains', name: 'Шторы (за м²)', price: 470, oldPrice: 630 }
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', 
    '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const additionalServices = [
    { id: 'express-dry', name: 'Экспресс-сушка', price: 500 },
    { id: 'antibacterial', name: 'Антибактериальная обработка', price: 300 },
    { id: 'protection', name: 'Защитное покрытие', price: 400 },
    { id: 'stain-removal', name: 'Удаление сложных пятен', price: 200 },
    { id: 'deodorization', name: 'Дезодорация', price: 250 }
  ];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    const serviceTotal = services
      .filter(service => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
    
    const additionalTotal = additionalServices
      .filter(service => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
    
    return serviceTotal + additionalTotal;
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

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
            </div>
          </nav>
        </div>
      </header>

      {/* Progress Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step <= currentStep ? 'bg-chemical-orange text-white' : 'bg-gray-200 text-gray-500'
                  }`}>
                    {step}
                  </div>
                  {step < 4 && (
                    <div className={`w-16 h-1 mx-2 ${
                      step < currentStep ? 'bg-chemical-orange' : 'bg-gray-200'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Услуги</span>
              <span>Дата и время</span>
              <span>Контакты</span>
              <span>Подтверждение</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form Steps */}
              <div className="lg:col-span-2">
                {/* Step 1: Services */}
                {currentStep === 1 && (
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-chemical-brown mb-8">
                        Выберите услуги
                      </h2>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-semibold text-chemical-brown mb-4">
                            Основные услуги
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {services.map((service) => (
                              <div 
                                key={service.id}
                                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                  selectedServices.includes(service.id)
                                    ? 'border-chemical-orange bg-chemical-orange/5'
                                    : 'border-gray-200 hover:border-chemical-orange/50'
                                }`}
                                onClick={() => toggleService(service.id)}
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="font-semibold text-chemical-brown">
                                    {service.name}
                                  </h4>
                                  <div className="flex items-center space-x-2">
                                    <span className="text-gray-500 line-through text-sm">
                                      {service.oldPrice}₽
                                    </span>
                                    <span className="font-bold text-chemical-orange">
                                      {service.price}₽
                                    </span>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                                    -25%
                                  </span>
                                  <div className={`w-5 h-5 rounded border-2 ${
                                    selectedServices.includes(service.id)
                                      ? 'bg-chemical-orange border-chemical-orange'
                                      : 'border-gray-300'
                                  }`}>
                                    {selectedServices.includes(service.id) && (
                                      <Icon name="Check" className="text-white" size={16} />
                                    )}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-chemical-brown mb-4">
                            Дополнительные услуги
                          </h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            {additionalServices.map((service) => (
                              <div 
                                key={service.id}
                                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                  selectedServices.includes(service.id)
                                    ? 'border-chemical-orange bg-chemical-orange/5'
                                    : 'border-gray-200 hover:border-chemical-orange/50'
                                }`}
                                onClick={() => toggleService(service.id)}
                              >
                                <div className="flex items-center justify-between">
                                  <h4 className="font-semibold text-chemical-brown">
                                    {service.name}
                                  </h4>
                                  <div className="flex items-center space-x-2">
                                    <span className="font-bold text-chemical-orange">
                                      {service.price}₽
                                    </span>
                                    <div className={`w-5 h-5 rounded border-2 ${
                                      selectedServices.includes(service.id)
                                        ? 'bg-chemical-orange border-chemical-orange'
                                        : 'border-gray-300'
                                    }`}>
                                      {selectedServices.includes(service.id) && (
                                        <Icon name="Check" className="text-white" size={16} />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 2: Date & Time */}
                {currentStep === 2 && (
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-chemical-brown mb-8">
                        Выберите дату и время
                      </h2>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-xl font-semibold text-chemical-brown mb-4">
                            Дата
                          </h3>
                          <input 
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                          />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-chemical-brown mb-4">
                            Время
                          </h3>
                          <div className="grid grid-cols-3 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-3 rounded-lg border-2 transition-all ${
                                  selectedTime === time
                                    ? 'border-chemical-orange bg-chemical-orange text-white'
                                    : 'border-gray-200 hover:border-chemical-orange'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Icon name="Info" className="text-blue-600" size={20} />
                          <span className="text-blue-800 font-semibold">
                            Информация о выезде
                          </span>
                        </div>
                        <ul className="text-blue-700 text-sm mt-2 space-y-1">
                          <li>• Выезд мастера в пределах КАД бесплатный</li>
                          <li>• Время работы может варьироваться в зависимости от объема</li>
                          <li>• Мы свяжемся с вами для подтверждения времени</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Step 3: Contact Info */}
                {currentStep === 3 && (
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-chemical-brown mb-8">
                        Контактная информация
                      </h2>
                      
                      <form className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Имя *
                            </label>
                            <input 
                              type="text" 
                              required
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                              placeholder="Ваше имя"
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
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                          </label>
                          <input 
                            type="email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                            placeholder="Ваш email"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Адрес *
                          </label>
                          <input 
                            type="text" 
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                            placeholder="Улица, дом, квартира"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Комментарий к заказу
                          </label>
                          <textarea 
                            rows={4}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                            placeholder="Особые пожелания, детали заказа..."
                          />
                        </div>

                        <div className="flex items-center space-x-3">
                          <input type="checkbox" id="agreement" className="rounded" />
                          <label htmlFor="agreement" className="text-sm text-gray-600">
                            Я согласен с политикой обработки персональных данных
                          </label>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                )}

                {/* Step 4: Confirmation */}
                {currentStep === 4 && (
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <h2 className="text-3xl font-bold text-chemical-brown mb-8">
                        Подтверждение заказа
                      </h2>
                      
                      <div className="space-y-6">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                          <div className="flex items-center space-x-3 mb-4">
                            <Icon name="CheckCircle" className="text-green-600" size={24} />
                            <h3 className="text-lg font-semibold text-green-800">
                              Заказ успешно оформлен!
                            </h3>
                          </div>
                          <p className="text-green-700">
                            Ваш заказ №12345 принят в обработку. Мы свяжемся с вами 
                            в течение 15 минут для подтверждения деталей.
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-chemical-brown mb-3">
                              Детали заказа:
                            </h4>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span>Дата:</span>
                                <span>{selectedDate || 'Не выбрана'}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Время:</span>
                                <span>{selectedTime || 'Не выбрано'}</span>
                              </div>
                              <div className="flex justify-between">
                                <span>Услуг выбрано:</span>
                                <span>{selectedServices.length}</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-chemical-brown mb-3">
                              Что дальше:
                            </h4>
                            <div className="space-y-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Icon name="Phone" size={16} className="text-chemical-orange" />
                                <span>Звонок менеджера</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Icon name="Calendar" size={16} className="text-chemical-orange" />
                                <span>Подтверждение времени</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Icon name="Truck" size={16} className="text-chemical-orange" />
                                <span>Выезд мастера</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Icon name="Sparkles" size={16} className="text-chemical-orange" />
                                <span>Выполнение работ</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="text-center">
                          <Button className="bg-chemical-orange hover:bg-chemical-orange/90 px-8">
                            Вернуться на главную
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Navigation Buttons */}
                {currentStep < 4 && (
                  <div className="flex justify-between mt-8">
                    <Button 
                      variant="outline" 
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="border-chemical-orange text-chemical-orange hover:bg-chemical-orange hover:text-white"
                    >
                      Назад
                    </Button>
                    <Button 
                      onClick={nextStep}
                      className="bg-chemical-orange hover:bg-chemical-orange/90"
                      disabled={
                        (currentStep === 1 && selectedServices.length === 0) ||
                        (currentStep === 2 && (!selectedDate || !selectedTime))
                      }
                    >
                      Далее
                    </Button>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-xl sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-chemical-brown mb-6">
                      Ваш заказ
                    </h3>
                    
                    <div className="space-y-4">
                      {selectedServices.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">
                          Услуги не выбраны
                        </p>
                      ) : (
                        <>
                          {services
                            .filter(service => selectedServices.includes(service.id))
                            .map(service => (
                              <div key={service.id} className="flex justify-between items-center">
                                <span className="text-sm">{service.name}</span>
                                <span className="font-semibold">{service.price}₽</span>
                              </div>
                            ))
                          }
                          
                          {additionalServices
                            .filter(service => selectedServices.includes(service.id))
                            .map(service => (
                              <div key={service.id} className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">{service.name}</span>
                                <span className="font-semibold">{service.price}₽</span>
                              </div>
                            ))
                          }
                          
                          <hr />
                          
                          <div className="flex justify-between items-center text-lg font-bold text-chemical-brown">
                            <span>Итого:</span>
                            <span>{calculateTotal()}₽</span>
                          </div>
                          
                          <div className="bg-green-50 p-3 rounded-lg">
                            <div className="flex items-center space-x-2">
                              <Icon name="Percent" className="text-green-600" size={16} />
                              <span className="text-green-800 text-sm font-semibold">
                                Экономия 25%
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                    </div>

                    <div className="mt-6 space-y-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Icon name="Truck" size={16} className="text-chemical-orange" />
                        <span>Бесплатный выезд в пределах КАД</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Shield" size={16} className="text-chemical-orange" />
                        <span>Гарантия качества</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-chemical-orange" />
                        <span>Работаем с 8:00 до 22:00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
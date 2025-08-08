import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Calculator() {
  const [selectedServices, setSelectedServices] = useState<{[key: string]: number}>({});
  const [area, setArea] = useState<{[key: string]: number}>({});
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);

  const services = [
    {
      id: 'sofa-2',
      name: 'Диван 2-местный',
      price: 1350,
      oldPrice: 1800,
      category: 'furniture',
      description: 'Стандартная чистка с защитным покрытием'
    },
    {
      id: 'sofa-3',
      name: 'Диван 3-местный',
      price: 1800,
      oldPrice: 2400,
      category: 'furniture',
      description: 'Глубокая чистка и дезодорация'
    },
    {
      id: 'sofa-corner',
      name: 'Угловой диван',
      price: 2400,
      oldPrice: 3200,
      category: 'furniture',
      description: 'Полная обработка всех секций'
    },
    {
      id: 'armchair',
      name: 'Кресло',
      price: 600,
      oldPrice: 800,
      category: 'furniture',
      description: 'Чистка с антибактериальной обработкой'
    },
    {
      id: 'mattress-single',
      name: 'Матрас односпальный',
      price: 1500,
      oldPrice: 2000,
      category: 'mattress',
      description: 'Односторонняя чистка'
    },
    {
      id: 'mattress-double',
      name: 'Матрас двуспальный',
      price: 2250,
      oldPrice: 3000,
      category: 'mattress',
      description: 'Глубокая чистка с дезинфекцией'
    },
    {
      id: 'carpet',
      name: 'Ковер',
      price: 150,
      oldPrice: 200,
      category: 'area',
      unit: 'м²',
      description: 'Глубокая чистка с сушкой'
    },
    {
      id: 'curtains',
      name: 'Шторы',
      price: 470,
      oldPrice: 630,
      category: 'area',
      unit: 'м²',
      description: 'Чистка без снятия'
    }
  ];

  const additionalOptions = [
    { id: 'express-dry', name: 'Экспресс-сушка', price: 500, description: 'Ускоренная сушка за 1 час' },
    { id: 'antibacterial', name: 'Антибактериальная обработка', price: 300, description: 'Дополнительная дезинфекция' },
    { id: 'protection', name: 'Защитное покрытие', price: 400, description: 'Защита от загрязнений' },
    { id: 'stain-removal', name: 'Удаление сложных пятен', price: 200, description: 'За каждое пятно' },
    { id: 'deodorization', name: 'Дезодорация', price: 250, description: 'Устранение неприятных запахов' }
  ];

  const updateServiceQuantity = (serviceId: string, quantity: number) => {
    if (quantity === 0) {
      const newServices = { ...selectedServices };
      delete newServices[serviceId];
      setSelectedServices(newServices);
    } else {
      setSelectedServices(prev => ({ ...prev, [serviceId]: quantity }));
    }
  };

  const updateArea = (serviceId: string, areaValue: number) => {
    setArea(prev => ({ ...prev, [serviceId]: areaValue }));
  };

  const toggleAdditionalService = (serviceId: string) => {
    setAdditionalServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    let total = 0;

    // Основные услуги
    Object.entries(selectedServices).forEach(([serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        if (service.category === 'area') {
          const serviceArea = area[serviceId] || 0;
          total += service.price * serviceArea * quantity;
        } else {
          total += service.price * quantity;
        }
      }
    });

    // Дополнительные услуги
    additionalServices.forEach(serviceId => {
      const service = additionalOptions.find(s => s.id === serviceId);
      if (service) {
        total += service.price;
      }
    });

    return total;
  };

  const calculateDiscount = () => {
    let originalTotal = 0;

    Object.entries(selectedServices).forEach(([serviceId, quantity]) => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        if (service.category === 'area') {
          const serviceArea = area[serviceId] || 0;
          originalTotal += service.oldPrice * serviceArea * quantity;
        } else {
          originalTotal += service.oldPrice * quantity;
        }
      }
    });

    additionalServices.forEach(serviceId => {
      const service = additionalOptions.find(s => s.id === serviceId);
      if (service) {
        originalTotal += service.price;
      }
    });

    return originalTotal - calculateTotal();
  };

  const categories = [
    { id: 'furniture', name: 'Мягкая мебель', icon: 'Sofa' },
    { id: 'mattress', name: 'Матрасы', icon: 'Bed' },
    { id: 'area', name: 'По площади', icon: 'Grid3X3' }
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
              Калькулятор стоимости
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Рассчитайте точную стоимость химчистки вашей мебели. 
              Выберите услуги и получите мгновенный расчет с учетом всех скидок.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Services Selection */}
              <div className="lg:col-span-2 space-y-8">
                {categories.map(category => (
                  <Card key={category.id} className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-chemical-orange/10 rounded-lg flex items-center justify-center">
                          <Icon name={category.icon as any} className="text-chemical-orange" size={24} />
                        </div>
                        <h2 className="text-2xl font-bold text-chemical-brown">
                          {category.name}
                        </h2>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {services
                          .filter(service => service.category === category.id)
                          .map(service => (
                            <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h3 className="font-semibold text-chemical-brown">
                                    {service.name}
                                  </h3>
                                  <p className="text-gray-600 text-sm mt-1">
                                    {service.description}
                                  </p>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-gray-500 line-through text-sm">
                                      {service.oldPrice}₽
                                    </span>
                                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                                      -25%
                                    </span>
                                  </div>
                                  <div className="font-bold text-chemical-orange">
                                    {service.price}₽{service.unit && `/${service.unit}`}
                                  </div>
                                </div>
                              </div>

                              <div className="space-y-3">
                                {service.category === 'area' && (
                                  <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                      Площадь (м²)
                                    </label>
                                    <input
                                      type="number"
                                      min="0"
                                      step="0.1"
                                      value={area[service.id] || ''}
                                      onChange={(e) => updateArea(service.id, parseFloat(e.target.value) || 0)}
                                      className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                                      placeholder="0"
                                    />
                                  </div>
                                )}

                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Количество
                                  </label>
                                  <div className="flex items-center space-x-3">
                                    <button
                                      onClick={() => updateServiceQuantity(service.id, Math.max(0, (selectedServices[service.id] || 0) - 1))}
                                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                                    >
                                      <Icon name="Minus" size={16} />
                                    </button>
                                    <span className="w-12 text-center font-semibold">
                                      {selectedServices[service.id] || 0}
                                    </span>
                                    <button
                                      onClick={() => updateServiceQuantity(service.id, (selectedServices[service.id] || 0) + 1)}
                                      className="w-8 h-8 bg-chemical-orange rounded-full flex items-center justify-center hover:bg-chemical-orange/90 text-white"
                                    >
                                      <Icon name="Plus" size={16} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Additional Services */}
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-12 h-12 bg-chemical-orange/10 rounded-lg flex items-center justify-center">
                        <Icon name="Plus" className="text-chemical-orange" size={24} />
                      </div>
                      <h2 className="text-2xl font-bold text-chemical-brown">
                        Дополнительные услуги
                      </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      {additionalOptions.map(service => (
                        <div
                          key={service.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                            additionalServices.includes(service.id)
                              ? 'border-chemical-orange bg-chemical-orange/5'
                              : 'border-gray-200 hover:border-chemical-orange/50'
                          }`}
                          onClick={() => toggleAdditionalService(service.id)}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-chemical-brown">
                              {service.name}
                            </h3>
                            <div className="flex items-center space-x-2">
                              <span className="font-bold text-chemical-orange">
                                {service.price}₽
                              </span>
                              <div className={`w-5 h-5 rounded border-2 ${
                                additionalServices.includes(service.id)
                                  ? 'bg-chemical-orange border-chemical-orange'
                                  : 'border-gray-300'
                              }`}>
                                {additionalServices.includes(service.id) && (
                                  <Icon name="Check" className="text-white" size={16} />
                                )}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm">
                            {service.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Price Summary */}
              <div className="lg:col-span-1">
                <Card className="border-0 shadow-xl sticky top-24">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-chemical-brown mb-6">
                      Расчет стоимости
                    </h3>

                    <div className="space-y-4">
                      {Object.keys(selectedServices).length === 0 && additionalServices.length === 0 ? (
                        <p className="text-gray-500 text-center py-8">
                          Выберите услуги для расчета
                        </p>
                      ) : (
                        <>
                          {/* Selected Services */}
                          {Object.entries(selectedServices).map(([serviceId, quantity]) => {
                            const service = services.find(s => s.id === serviceId);
                            if (!service) return null;

                            let itemTotal = 0;
                            if (service.category === 'area') {
                              const serviceArea = area[serviceId] || 0;
                              itemTotal = service.price * serviceArea * quantity;
                            } else {
                              itemTotal = service.price * quantity;
                            }

                            return (
                              <div key={serviceId} className="flex justify-between items-center">
                                <div>
                                  <span className="text-sm font-medium">{service.name}</span>
                                  <div className="text-xs text-gray-500">
                                    {service.category === 'area' && area[serviceId] && (
                                      <span>{area[serviceId]}м² × </span>
                                    )}
                                    {quantity} шт × {service.price}₽
                                  </div>
                                </div>
                                <span className="font-semibold">{itemTotal}₽</span>
                              </div>
                            );
                          })}

                          {/* Additional Services */}
                          {additionalServices.map(serviceId => {
                            const service = additionalOptions.find(s => s.id === serviceId);
                            if (!service) return null;

                            return (
                              <div key={serviceId} className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">{service.name}</span>
                                <span className="font-semibold">{service.price}₽</span>
                              </div>
                            );
                          })}

                          <hr />

                          {/* Discount */}
                          {calculateDiscount() > 0 && (
                            <div className="flex justify-between items-center text-green-600">
                              <span>Скидка 25%:</span>
                              <span>-{calculateDiscount()}₽</span>
                            </div>
                          )}

                          {/* Total */}
                          <div className="flex justify-between items-center text-xl font-bold text-chemical-brown">
                            <span>Итого:</span>
                            <span>{calculateTotal()}₽</span>
                          </div>

                          {/* Savings */}
                          {calculateDiscount() > 0 && (
                            <div className="bg-green-50 p-3 rounded-lg">
                              <div className="flex items-center space-x-2">
                                <Icon name="Percent" className="text-green-600" size={16} />
                                <span className="text-green-800 text-sm font-semibold">
                                  Экономия: {calculateDiscount()}₽
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="space-y-3 pt-4">
                            <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90">
                              Заказать услуги
                            </Button>
                            <Button variant="outline" className="w-full border-chemical-orange text-chemical-orange hover:bg-chemical-orange hover:text-white">
                              Получить консультацию
                            </Button>
                          </div>
                        </>
                      )}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-6 pt-6 border-t space-y-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Icon name="Truck" size={16} className="text-chemical-orange" />
                        <span>Бесплатный выезд в пределах КАД</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Shield" size={16} className="text-chemical-orange" />
                        <span>Гарантия качества работ</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-chemical-orange" />
                        <span>Работаем с 8:00 до 22:00</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="CreditCard" size={16} className="text-chemical-orange" />
                        <span>Оплата после выполнения работ</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Полезные советы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calculator" className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-chemical-brown mb-2">
                  Как рассчитать площадь?
                </h3>
                <p className="text-gray-600 text-sm">
                  Для ковров и штор измерьте длину и ширину, затем перемножьте. 
                  Для сложных форм разделите на простые фигуры.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Percent" className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-chemical-brown mb-2">
                  Скидки и акции
                </h3>
                <p className="text-gray-600 text-sm">
                  При заказе нескольких услуг действует скидка 25%. 
                  Постоянным клиентам дополнительная скидка 10%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" className="text-purple-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-chemical-brown mb-2">
                  Время выполнения
                </h3>
                <p className="text-gray-600 text-sm">
                  Диван - 1-2 часа, кресло - 30-60 минут, ковер 3м² - 1 час. 
                  Время может увеличиться при сильных загрязнениях.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
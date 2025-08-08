import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Prices() {
  const priceCategories = [
    {
      title: "Мягкая мебель",
      items: [
        { name: "Диван 2-местный", oldPrice: "1800₽", newPrice: "1350₽", description: "Стандартная чистка с защитным покрытием" },
        { name: "Диван 3-местный", oldPrice: "2400₽", newPrice: "1800₽", description: "Глубокая чистка и дезодорация" },
        { name: "Угловой диван", oldPrice: "3200₽", newPrice: "2400₽", description: "Полная обработка всех секций" },
        { name: "Кресло", oldPrice: "800₽", newPrice: "600₽", description: "Чистка с антибактериальной обработкой" },
        { name: "Кресло-кровать", oldPrice: "1200₽", newPrice: "900₽", description: "Чистка механизма и обивки" },
        { name: "Пуф/Банкетка", oldPrice: "600₽", newPrice: "450₽", description: "Деликатная чистка" }
      ]
    },
    {
      title: "Спальная мебель",
      items: [
        { name: "Матрас односпальный", oldPrice: "2000₽", newPrice: "1500₽", description: "Односторонняя чистка" },
        { name: "Матрас двуспальный", oldPrice: "3000₽", newPrice: "2250₽", description: "Глубокая чистка с дезинфекцией" },
        { name: "Изголовье кровати", oldPrice: "1800₽", newPrice: "1350₽", description: "Чистка мягкой обивки" },
        { name: "Детский матрас", oldPrice: "1500₽", newPrice: "1125₽", description: "Гипоаллергенная обработка" }
      ]
    },
    {
      title: "Текстиль",
      items: [
        { name: "Шторы (за м²)", oldPrice: "630₽", newPrice: "470₽", description: "Чистка без снятия" },
        { name: "Тюль (за м²)", oldPrice: "420₽", newPrice: "315₽", description: "Деликатная обработка" },
        { name: "Ламбрекены", oldPrice: "800₽", newPrice: "600₽", description: "Ручная чистка сложных элементов" },
        { name: "Римские шторы", oldPrice: "900₽", newPrice: "675₽", description: "Чистка с сохранением формы" }
      ]
    },
    {
      title: "Ковры и покрытия",
      items: [
        { name: "Ковер (за м²)", oldPrice: "200₽", newPrice: "150₽", description: "Глубокая чистка с сушкой" },
        { name: "Палас (за м²)", oldPrice: "150₽", newPrice: "112₽", description: "Стандартная чистка" },
        { name: "Ковролин (за м²)", oldPrice: "180₽", newPrice: "135₽", description: "Чистка покрытия на месте" },
        { name: "Дорожка (за м²)", oldPrice: "160₽", newPrice: "120₽", description: "Чистка с антистатиком" }
      ]
    }
  ];

  const additionalServices = [
    { name: "Выезд мастера", price: "Бесплатно", description: "В пределах КАД" },
    { name: "Экспресс-сушка", price: "500₽", description: "Ускоренная сушка за 1 час" },
    { name: "Антибактериальная обработка", price: "300₽", description: "Дополнительная дезинфекция" },
    { name: "Защитное покрытие", price: "400₽", description: "Защита от загрязнений" },
    { name: "Удаление сложных пятен", price: "200₽", description: "За каждое пятно" },
    { name: "Дезодорация", price: "250₽", description: "Устранение неприятных запахов" }
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
              Цены на услуги
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
              Прозрачные цены без скрытых доплат. Действует скидка 25% на все услуги!
            </p>
            <div className="bg-red-100 text-red-800 px-6 py-3 rounded-full inline-block">
              <Icon name="Percent" className="inline mr-2" size={20} />
              Акция -25% действует до конца месяца!
            </div>
          </div>
        </div>
      </section>

      {/* Price Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {priceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-chemical-brown mb-8 text-center">
                  {category.title}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <Card key={itemIndex} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-bold text-chemical-brown">
                            {item.name}
                          </h3>
                          <div className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">
                            -25%
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">
                          {item.description}
                        </p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-500 line-through">{item.oldPrice}</span>
                          </div>
                          <div className="text-2xl font-bold text-chemical-brown">{item.newPrice}</div>
                        </div>

                        <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90">
                          Заказать
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Дополнительные услуги
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Расширьте базовую услугу дополнительными опциями
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-chemical-brown">
                      {service.name}
                    </h3>
                    <div className="text-xl font-bold text-chemical-orange">
                      {service.price}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-chemical-brown mb-4">
                Калькулятор стоимости
              </h2>
              <p className="text-gray-600 text-lg">
                Рассчитайте примерную стоимость услуг
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-chemical-brown mb-4">
                      Выберите услуги:
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span>Диван 3-местный (1800₽)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span>Кресло (600₽)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span>Матрас двуспальный (2250₽)</span>
                      </label>
                      <label className="flex items-center space-x-3">
                        <input type="checkbox" className="rounded" />
                        <span>Ковер 3м² (450₽)</span>
                      </label>
                    </div>
                  </div>

                  <div className="bg-chemical-beige/20 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-chemical-brown mb-4">
                      Итого:
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Базовая стоимость:</span>
                        <span>0₽</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Скидка 25%:</span>
                        <span>-0₽</span>
                      </div>
                      <hr />
                      <div className="flex justify-between text-xl font-bold text-chemical-brown">
                        <span>К оплате:</span>
                        <span>0₽</span>
                      </div>
                    </div>
                    <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90">
                      Заказать услуги
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Химчистка диванов",
      description: "Профессиональная чистка диванов любой сложности",
      price: "от 1350₽",
      oldPrice: "от 1800₽",
      image: "/img/5a3f8850-e404-49f7-83a8-e5d817c8ce4f.jpg",
      features: ["Удаление пятен", "Антибактериальная обработка", "Защитное покрытие"]
    },
    {
      id: 2,
      title: "Химчистка кресел",
      description: "Восстановление первоначального вида кресел",
      price: "от 600₽",
      oldPrice: "от 800₽",
      image: "/img/73c3218f-1613-437a-9c53-7981820112da.jpg",
      features: ["Глубокая чистка", "Устранение запахов", "Дезинфекция"]
    },
    {
      id: 3,
      title: "Чистка штор",
      description: "Деликатная чистка штор без снятия",
      price: "от 470₽",
      oldPrice: "от 630₽",
      image: "/img/28a15ea3-caf8-492d-a269-07d565508c0a.jpg",
      features: ["Без снятия", "Сохранение формы", "Удаление пыли"]
    },
    {
      id: 4,
      title: "Чистка матрасов",
      description: "Глубокая чистка и дезинфекция матрасов",
      price: "от 2250₽",
      oldPrice: "от 3000₽",
      image: "/img/7d5b3a32-4f94-4e9b-a606-5e3c574232ee.jpg",
      features: ["Антиклещевая обработка", "Удаление пятен", "Дезодорация"]
    }
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
              Наши услуги
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Профессиональная химчистка мебели с выездом на дом. 
              Используем только безопасные средства и современное оборудование.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-sm">
                    -25%
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-chemical-brown mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" className="text-green-500" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 line-through">{service.oldPrice}</span>
                    </div>
                    <div className="text-2xl font-bold text-chemical-brown">{service.price}</div>
                  </div>

                  <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-chemical-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Нужна консультация?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Наши специалисты помогут выбрать подходящую услугу
          </p>
          <Button className="bg-chemical-orange hover:bg-chemical-orange/90 text-white px-8 py-3">
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
}
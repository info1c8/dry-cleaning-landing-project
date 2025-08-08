import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: "Реставрация дивана после пожара",
      description: "Удаление запаха дыма и сажи с велюрового дивана",
      beforeImage: "https://cdn.poehali.dev/files/b1cfc5ff-13d8-4f38-bef0-ab536e3ef51a.png",
      afterImage: "/img/5a3f8850-e404-49f7-83a8-e5d817c8ce4f.jpg",
      category: "Сложные случаи",
      duration: "4 часа",
      difficulty: "Высокая"
    },
    {
      id: 2,
      title: "Чистка детского матраса",
      description: "Удаление пятен и дезинфекция детского матраса",
      beforeImage: "https://cdn.poehali.dev/files/b1cfc5ff-13d8-4f38-bef0-ab536e3ef51a.png",
      afterImage: "/img/7d5b3a32-4f94-4e9b-a606-5e3c574232ee.jpg",
      category: "Детская мебель",
      duration: "2 часа",
      difficulty: "Средняя"
    },
    {
      id: 3,
      title: "Восстановление антикварного кресла",
      description: "Деликатная чистка кресла XIX века",
      beforeImage: "https://cdn.poehali.dev/files/b1cfc5ff-13d8-4f38-bef0-ab536e3ef51a.png",
      afterImage: "/img/73c3218f-1613-437a-9c53-7981820112da.jpg",
      category: "Антиквариат",
      duration: "6 часов",
      difficulty: "Очень высокая"
    },
    {
      id: 4,
      title: "Чистка штор в ресторане",
      description: "Удаление жирных пятен и запахов еды",
      beforeImage: "https://cdn.poehali.dev/files/b1cfc5ff-13d8-4f38-bef0-ab536e3ef51a.png",
      afterImage: "/img/28a15ea3-caf8-492d-a269-07d565508c0a.jpg",
      category: "Коммерческие объекты",
      duration: "3 часа",
      difficulty: "Средняя"
    },
    {
      id: 5,
      title: "Чистка офисной мебели",
      description: "Комплексная чистка мебели в офисе",
      beforeImage: "https://cdn.poehali.dev/files/b1cfc5ff-13d8-4f38-bef0-ab536e3ef51a.png",
      afterImage: "/img/5a3f8850-e404-49f7-83a8-e5d817c8ce4f.jpg",
      category: "Офисная мебель",
      duration: "5 часов",
      difficulty: "Средняя"
    },
    {
      id: 6,
      title: "Удаление пятен с белого дивана",
      description: "Сложные пятна на светлой обивке",
      beforeImage: "https://cdn.poehali.dev/files/b1cfc5ff-13d8-4f38-bef0-ab536e3ef51a.png",
      afterImage: "/img/7d5b3a32-4f94-4e9b-a606-5e3c574232ee.jpg",
      category: "Светлая мебель",
      duration: "3 часа",
      difficulty: "Высокая"
    }
  ];

  const categories = ["Все", "Сложные случаи", "Детская мебель", "Антиквариат", "Коммерческие объекты", "Офисная мебель", "Светлая мебель"];

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
              Наши работы
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Посмотрите на результаты нашей работы. Каждый проект - это история 
              восстановления и возвращения мебели к жизни.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-chemical-orange hover:bg-chemical-orange/90" : "border-chemical-orange text-chemical-orange hover:bg-chemical-orange hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    alt={item.title}
                    title=""
                    description=""
                  />
                  <div className="absolute top-4 left-4 bg-chemical-orange text-white px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-chemical-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" className="text-chemical-orange" size={16} />
                      <span className="text-sm text-gray-600">{item.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="TrendingUp" className="text-chemical-orange" size={16} />
                      <span className="text-sm text-gray-600">{item.difficulty}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90">
                    Заказать похожую услугу
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Наши достижения
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-chemical-orange mb-2">2000+</div>
              <div className="text-gray-600">Выполненных заказов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chemical-orange mb-2">99%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chemical-orange mb-2">5+</div>
              <div className="text-gray-600">Лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-chemical-orange mb-2">24/7</div>
              <div className="text-gray-600">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-chemical-brown text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Хотите такой же результат?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Закажите профессиональную химчистку и убедитесь в качестве нашей работы
          </p>
          <Button className="bg-chemical-orange hover:bg-chemical-orange/90 text-white px-8 py-3">
            Заказать услугу
          </Button>
        </div>
      </section>
    </div>
  );
}
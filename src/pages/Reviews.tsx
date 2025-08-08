import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Анна Петрова",
      rating: 5,
      date: "2 дня назад",
      service: "Химчистка дивана",
      text: "Отличная работа! Диван выглядит как новый. Мастер приехал вовремя, работал аккуратно. Все пятна исчезли, даже те, которые были очень старые. Рекомендую всем!",
      avatar: "А",
      verified: true
    },
    {
      id: 2,
      name: "Михаил Иванов",
      rating: 5,
      date: "1 неделю назад",
      service: "Чистка детского матраса",
      text: "Думали, что диван уже не спасти после того, как ребенок разлил сок. Но ребята справились на отлично! Никаких пятен и запахов не осталось. Очень довольны результатом.",
      avatar: "М",
      verified: true
    },
    {
      id: 3,
      name: "Елена Смирнова",
      rating: 5,
      date: "2 недели назад",
      service: "Химчистка кресла",
      text: "Быстро, качественно, недорого! Заказываю химчистку мебели только у них. Всегда довольна результатом. Мастера вежливые и профессиональные.",
      avatar: "Е",
      verified: true
    },
    {
      id: 4,
      name: "Дмитрий Козлов",
      rating: 5,
      date: "3 недели назад",
      service: "Чистка ковра",
      text: "Ковер был в ужасном состоянии - пятна от вина, шерсть животных, пыль. После чистки он стал как новый! Цвета стали ярче, исчез неприятный запах. Спасибо!",
      avatar: "Д",
      verified: true
    },
    {
      id: 5,
      name: "Ольга Васильева",
      rating: 5,
      date: "1 месяц назад",
      service: "Чистка штор",
      text: "Шторы висели уже 3 года, стали серыми от пыли. После чистки они снова белоснежные! Мастер работал прямо у нас дома, не пришлось снимать шторы.",
      avatar: "О",
      verified: true
    },
    {
      id: 6,
      name: "Александр Морозов",
      rating: 5,
      date: "1 месяц назад",
      service: "Химчистка офисной мебели",
      text: "Заказывали чистку мебели в офисе. Работали быстро и качественно, не мешали рабочему процессу. Мебель стала выглядеть презентабельно. Будем обращаться еще.",
      avatar: "А",
      verified: true
    },
    {
      id: 7,
      name: "Мария Николаева",
      rating: 5,
      date: "1.5 месяца назад",
      service: "Чистка матраса",
      text: "У нас был матрас с пятнами от ребенка. Думали придется выбрасывать. Но мастера сделали чудо - матрас стал чистым и свежим. Очень благодарны!",
      avatar: "М",
      verified: true
    },
    {
      id: 8,
      name: "Сергей Волков",
      rating: 5,
      date: "2 месяца назад",
      service: "Химчистка углового дивана",
      text: "Большой угловой диван чистили целый день, но результат превзошел ожидания. Диван стал как новый, исчезли все пятна и запахи. Отличная работа!",
      avatar: "С",
      verified: true
    },
    {
      id: 9,
      name: "Татьяна Лебедева",
      rating: 5,
      date: "2 месяца назад",
      service: "Чистка кресла-кровати",
      text: "Кресло-кровать было в плохом состоянии. После чистки оно преобразилось! Ткань стала мягкой, цвет восстановился. Очень довольна качеством работы.",
      avatar: "Т",
      verified: true
    }
  ];

  const stats = [
    { number: "4.9", label: "Средняя оценка", icon: "Star" },
    { number: "2000+", label: "Отзывов", icon: "MessageSquare" },
    { number: "99%", label: "Рекомендуют", icon: "ThumbsUp" },
    { number: "5+", label: "Лет опыта", icon: "Award" }
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
              Отзывы наших клиентов
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Мы гордимся доверием наших клиентов и стремимся превзойти их ожидания 
              в каждом заказе.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} className="text-chemical-orange" size={32} />
                </div>
                <div className="text-4xl font-bold text-chemical-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>

                  {/* Service */}
                  <div className="bg-chemical-orange/10 text-chemical-orange px-3 py-1 rounded-full text-sm inline-block mb-4">
                    {review.service}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    "{review.text}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-chemical-orange rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{review.avatar}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-chemical-brown">{review.name}</h4>
                          {review.verified && (
                            <Icon name="CheckCircle" className="text-green-500" size={16} />
                          )}
                        </div>
                        <p className="text-gray-500 text-sm">{review.date}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-chemical-brown mb-4">
                Оставьте свой отзыв
              </h2>
              <p className="text-gray-600 text-lg">
                Поделитесь своим опытом работы с нами
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                        placeholder="Введите ваше имя"
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
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Оценка
                    </label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                          <Icon name="Star" size={24} />
                        </button>
                      ))}
                    </div>
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
                      <option>Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ваш отзыв
                    </label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                      placeholder="Расскажите о вашем опыте работы с нами..."
                    />
                  </div>

                  <Button className="w-full bg-chemical-orange hover:bg-chemical-orange/90 text-white py-3">
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-chemical-brown mb-4">
              Нам доверяют
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-2">
                  Проверенные отзывы
                </h3>
                <p className="text-gray-600">
                  Все отзывы проходят модерацию и проверку на подлинность
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-2">
                  Реальные клиенты
                </h3>
                <p className="text-gray-600">
                  Отзывы оставляют только клиенты, которые воспользовались нашими услугами
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-2">
                  Высокое качество
                </h3>
                <p className="text-gray-600">
                  99% клиентов рекомендуют наши услуги своим друзьям и знакомым
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
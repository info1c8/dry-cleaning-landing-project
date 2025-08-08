import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Как правильно ухаживать за мебелью после химчистки",
      excerpt: "Полезные советы по уходу за мебелью после профессиональной чистки, чтобы результат сохранился как можно дольше.",
      date: "15 декабря 2024",
      readTime: "5 мин",
      category: "Советы",
      image: "/img/7d5b3a32-4f94-4e9b-a606-5e3c574232ee.jpg",
      author: "Алексей Петров"
    },
    {
      id: 2,
      title: "Топ-5 ошибок при самостоятельной чистке мебели",
      excerpt: "Разбираем самые распространенные ошибки, которые могут навредить вашей мебели при попытке почистить её самостоятельно.",
      date: "12 декабря 2024",
      readTime: "7 мин",
      category: "Ошибки",
      image: "/img/5a3f8850-e404-49f7-83a8-e5d817c8ce4f.jpg",
      author: "Мария Иванова"
    },
    {
      id: 3,
      title: "Какие пятна можно удалить с мебели, а какие нет",
      excerpt: "Подробный гид по типам пятен: что поддается чистке, что требует профессионального подхода, а с чем придется смириться.",
      date: "10 декабря 2024",
      readTime: "6 мин",
      category: "Гид",
      image: "/img/73c3218f-1613-437a-9c53-7981820112da.jpg",
      author: "Дмитрий Сидоров"
    },
    {
      id: 4,
      title: "Экологичная химчистка: миф или реальность?",
      excerpt: "Рассказываем о современных экологичных средствах для химчистки и их эффективности по сравнению с традиционными.",
      date: "8 декабря 2024",
      readTime: "4 мин",
      category: "Экология",
      image: "/img/28a15ea3-caf8-492d-a269-07d565508c0a.jpg",
      author: "Елена Козлова"
    },
    {
      id: 5,
      title: "Как выбрать профессиональную службу химчистки",
      excerpt: "Критерии выбора надежной компании для химчистки мебели: на что обратить внимание и каких ошибок избежать.",
      date: "5 декабря 2024",
      readTime: "8 мин",
      category: "Выбор",
      image: "/img/7d5b3a32-4f94-4e9b-a606-5e3c574232ee.jpg",
      author: "Алексей Петров"
    },
    {
      id: 6,
      title: "Сезонная чистка мебели: когда и зачем",
      excerpt: "Почему важно проводить регулярную чистку мебели и как часто это нужно делать в зависимости от условий эксплуатации.",
      date: "3 декабря 2024",
      readTime: "5 мин",
      category: "Планирование",
      image: "/img/5a3f8850-e404-49f7-83a8-e5d817c8ce4f.jpg",
      author: "Мария Иванова"
    }
  ];

  const categories = ["Все", "Советы", "Ошибки", "Гид", "Экология", "Выбор", "Планирование"];

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
              Блог о химчистке мебели
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Полезные статьи, советы экспертов и актуальная информация 
              о профессиональной химчистке мебели
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
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

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-chemical-orange text-white px-3 py-1 rounded-full text-sm">
                    Рекомендуем
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-chemical-orange/10 text-chemical-orange px-3 py-1 rounded-full text-sm">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].date}</span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-chemical-brown mb-4">
                    {blogPosts[0].title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-chemical-orange rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">
                          {blogPosts[0].author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">{blogPosts[0].author}</span>
                    </div>
                    
                    <Button className="bg-chemical-orange hover:bg-chemical-orange/90">
                      Читать далее
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Card key={post.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-chemical-orange/90 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-chemical-brown mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-chemical-orange rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <span className="text-gray-600 text-sm">{post.author}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="border-chemical-orange text-chemical-orange hover:bg-chemical-orange hover:text-white">
                      Читать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Подпишитесь на наш блог
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Получайте новые статьи и полезные советы по уходу за мебелью на email
            </p>
            
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Ваш email"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-chemical-orange focus:border-transparent"
                  />
                  <Button className="bg-chemical-orange hover:bg-chemical-orange/90 px-6">
                    Подписаться
                  </Button>
                </div>
                <p className="text-gray-500 text-sm mt-4">
                  Не более 1 письма в неделю. Отписаться можно в любой момент.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-chemical-brown mb-4">
              Популярные темы
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "химчистка диванов", "удаление пятен", "уход за мебелью", 
              "экологичная чистка", "профессиональная чистка", "домашний уход",
              "чистка ковров", "антибактериальная обработка", "защита мебели",
              "выбор службы", "советы экспертов", "сезонная чистка"
            ].map((tag, index) => (
              <span 
                key={index}
                className="bg-white border border-chemical-orange text-chemical-orange px-4 py-2 rounded-full text-sm hover:bg-chemical-orange hover:text-white transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
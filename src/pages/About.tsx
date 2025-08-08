import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function About() {
  const stats = [
    { number: "5+", label: "лет опыта" },
    { number: "2000+", label: "довольных клиентов" },
    { number: "99%", label: "положительных отзывов" },
    { number: "24/7", label: "поддержка клиентов" }
  ];

  const team = [
    {
      name: "Алексей Петров",
      position: "Главный мастер",
      experience: "7 лет опыта",
      image: "/img/placeholder-person.jpg"
    },
    {
      name: "Мария Иванова", 
      position: "Специалист по тканям",
      experience: "5 лет опыта",
      image: "/img/placeholder-person.jpg"
    },
    {
      name: "Дмитрий Сидоров",
      position: "Мастер по коврам",
      experience: "6 лет опыта", 
      image: "/img/placeholder-person.jpg"
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
              О нашей компании
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Мы - команда профессионалов, которая уже более 5 лет помогает жителям 
              Санкт-Петербурга поддерживать чистоту и свежесть их мебели.
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

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-chemical-brown mb-6">
                Наша история
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Компания "Furniture Cleaning" была основана в 2019 году с простой миссией - 
                  предоставить жителям Санкт-Петербурга качественные услуги химчистки мебели 
                  с выездом на дом.
                </p>
                <p>
                  Мы начинали как небольшая команда из двух человек, но благодаря качеству 
                  наших услуг и положительным отзывам клиентов, быстро выросли до команды 
                  из 10 специалистов.
                </p>
                <p>
                  Сегодня мы гордимся тем, что помогли более чем 2000 семей вернуть их мебели 
                  первоначальный вид и свежесть. Наш опыт и профессионализм позволяют нам 
                  справляться даже с самыми сложными загрязнениями.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/7d5b3a32-4f94-4e9b-a606-5e3c574232ee.jpg"
                alt="Наша команда за работой"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Наша команда
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Профессиональные мастера с многолетним опытом работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-chemical-orange" size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-chemical-brown mb-2">
                    {member.name}
                  </h3>
                  <p className="text-chemical-orange font-semibold mb-2">
                    {member.position}
                  </p>
                  <p className="text-gray-600">
                    {member.experience}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-chemical-brown mb-4">
              Наши ценности
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Heart" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Забота о клиентах</h3>
                <p className="text-gray-600">
                  Каждый клиент для нас важен. Мы всегда идем навстречу и находим индивидуальный подход.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Award" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Качество</h3>
                <p className="text-gray-600">
                  Мы не идем на компромиссы в вопросах качества. Используем только лучшие средства и оборудование.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Leaf" className="text-chemical-orange" size={32} />
                </div>
                <h3 className="text-xl font-bold text-chemical-brown mb-4">Экологичность</h3>
                <p className="text-gray-600">
                  Заботимся об окружающей среде и здоровье наших клиентов, используя безопасные средства.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
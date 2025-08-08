import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const faqCategories = [
    {
      title: "Общие вопросы",
      questions: [
        {
          question: "Что входит в услугу химчистки мебели?",
          answer: "В базовую услугу входит: предварительный осмотр, удаление пыли и мусора, обработка пятновыводителем, глубокая химчистка, антибактериальная обработка и защитное покрытие. Мы также проводим финальную проверку качества работы."
        },
        {
          question: "Как долго сохнет мебель после чистки?",
          answer: "Время высыхания зависит от типа ткани и влажности в помещении. Обычно мебель высыхает за 2-4 часа. Мы используем специальное оборудование для ускорения процесса сушки."
        },
        {
          question: "Безопасны ли ваши средства для детей и животных?",
          answer: "Да, мы используем только экологически чистые средства без вредных химикатов. Все наши препараты сертифицированы и безопасны для детей и домашних животных."
        },
        {
          question: "Даете ли вы гарантию на свою работу?",
          answer: "Да, мы даем гарантию на качество выполненной работы. Если результат вас не устроит, мы переделаем работу бесплатно или вернем деньги."
        }
      ]
    },
    {
      title: "Цены и оплата",
      questions: [
        {
          question: "Как формируется цена на услуги?",
          answer: "Цена зависит от типа мебели, размера, степени загрязнения и сложности работы. У нас есть базовые тарифы, но окончательная стоимость определяется после осмотра мастером."
        },
        {
          question: "Есть ли скрытые доплаты?",
          answer: "Нет, мы работаем по принципу прозрачного ценообразования. Все дополнительные услуги обсуждаются и согласовываются с клиентом заранее."
        },
        {
          question: "Какие способы оплаты вы принимаете?",
          answer: "Мы принимаем оплату наличными, банковскими картами, через СБП и банковские переводы. Оплата производится после выполнения работы."
        },
        {
          question: "Можно ли получить скидку?",
          answer: "Да, у нас действуют различные акции и скидки. Постоянным клиентам предоставляется скидка 10%. При заказе нескольких услуг также действуют скидки."
        }
      ]
    },
    {
      title: "Процесс работы",
      questions: [
        {
          question: "Как происходит процесс чистки?",
          answer: "Сначала мастер осматривает мебель и определяет тип загрязнений. Затем удаляется пыль, обрабатываются пятна, проводится основная чистка с помощью профессионального оборудования, и в конце наносится защитное покрытие."
        },
        {
          question: "Нужно ли готовить мебель к чистке?",
          answer: "Желательно убрать с мебели все предметы (подушки, пледы, игрушки). Мы можем сделать это сами, но это поможет ускорить процесс работы."
        },
        {
          question: "Можно ли пользоваться мебелью сразу после чистки?",
          answer: "Рекомендуется подождать полного высыхания (2-4 часа). До этого времени лучше не садиться на мебель и не класть на неё вещи."
        },
        {
          question: "Что делать, если пятно не отошло?",
          answer: "Некоторые старые или сложные пятна могут потребовать повторной обработки. Мы предупреждаем об этом заранее и проводим дополнительную обработку бесплатно."
        }
      ]
    },
    {
      title: "Выезд и время",
      questions: [
        {
          question: "В какое время вы работаете?",
          answer: "Мы работаем ежедневно с 8:00 до 22:00. В выходные дни с 9:00 до 21:00. При необходимости можем приехать в экстренном порядке в любое время."
        },
        {
          question: "Как быстро вы можете приехать?",
          answer: "Обычно мы можем приехать в день обращения или на следующий день. В экстренных случаях приезжаем в течение 2-3 часов."
        },
        {
          question: "Берете ли вы доплату за выезд?",
          answer: "Выезд в пределах КАД бесплатный. За пределы КАД доплата составляет 30 рублей за километр."
        },
        {
          question: "Можно ли перенести время визита?",
          answer: "Да, вы можете перенести время визита, предупредив нас минимум за 2 часа. Мы всегда идем навстречу клиентам."
        }
      ]
    }
  ];

  const quickAnswers = [
    {
      icon: "Clock",
      title: "Время работы",
      answer: "8:00 - 22:00 ежедневно"
    },
    {
      icon: "MapPin", 
      title: "Зона выезда",
      answer: "Весь Санкт-Петербург"
    },
    {
      icon: "Shield",
      title: "Гарантия",
      answer: "100% гарантия качества"
    },
    {
      icon: "Leaf",
      title: "Безопасность",
      answer: "Экологичные средства"
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
              Часто задаваемые вопросы
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Ответы на самые популярные вопросы о наших услугах химчистки мебели. 
              Не нашли ответ? Свяжитесь с нами!
            </p>
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAnswers.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-chemical-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-chemical-orange" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-chemical-brown mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-chemical-brown mb-8 text-center">
                  {category.title}
                </h2>
                
                <Card className="border-0 shadow-xl">
                  <CardContent className="p-8">
                    <Accordion type="single" collapsible className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <AccordionItem 
                          key={faqIndex} 
                          value={`${categoryIndex}-${faqIndex}`}
                          className="border border-gray-200 rounded-lg px-6"
                        >
                          <AccordionTrigger className="text-left font-semibold text-chemical-brown hover:text-chemical-orange">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-chemical-brown mb-8">
              Не нашли ответ на свой вопрос?
            </h2>
            
            <div className="mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Поиск по вопросам..."
                  className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-chemical-orange focus:border-transparent text-lg"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <Icon name="Search" className="text-gray-400" size={24} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-lg">
                Свяжитесь с нами любым удобным способом
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-chemical-orange hover:bg-chemical-orange/90">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
                <Button variant="outline" className="border-chemical-orange text-chemical-orange hover:bg-chemical-orange hover:text-white">
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Написать в WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-gradient-to-b from-chemical-beige/20 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-chemical-brown mb-4">
              Популярные темы
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Sofa" className="text-chemical-orange" size={24} />
                  <h3 className="text-lg font-bold text-chemical-brown">Чистка диванов</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Все о процессе чистки диванов, времени высыхания и уходе после чистки
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="DollarSign" className="text-chemical-orange" size={24} />
                  <h3 className="text-lg font-bold text-chemical-brown">Цены и скидки</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Информация о ценах, акциях, скидках и способах оплаты
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Truck" className="text-chemical-orange" size={24} />
                  <h3 className="text-lg font-bold text-chemical-brown">Выезд мастера</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Зоны обслуживания, время выезда и стоимость доставки
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Shield" className="text-chemical-orange" size={24} />
                  <h3 className="text-lg font-bold text-chemical-brown">Гарантии</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Условия гарантии, что делать если результат не устроил
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Leaf" className="text-chemical-orange" size={24} />
                  <h3 className="text-lg font-bold text-chemical-brown">Безопасность</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Экологичность средств, безопасность для детей и животных
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Icon name="Clock" className="text-chemical-orange" size={24} />
                  <h3 className="text-lg font-bold text-chemical-brown">Время работы</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  График работы, экстренные вызовы, перенос времени визита
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
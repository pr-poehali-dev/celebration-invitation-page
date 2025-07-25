import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('img/9e25460e-309f-4f2d-9d39-af21ca1d53a2.jpg')`
        }}
      >
        <div className="text-center text-white px-4 max-w-4xl fade-in">
          <div className="elegant-border bg-black/20 backdrop-blur-sm p-12 rounded-lg">
            <h1 className="elegant-title text-6xl md:text-8xl mb-8 text-gold">
              Приглашение
            </h1>
            <div className="w-24 h-1 gold-gradient mx-auto mb-8"></div>
            <p className="elegant-text text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              В этот трогательный день, мы хотим оказаться в окружении самых дорогих нам людей! 
              С огромной радостью приглашаем разделить с нами этот волшебный момент!
            </p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <Icon name="Heart" className="text-gold" size={24} />
              <span className="elegant-text text-lg">21 сентября 2025</span>
              <Icon name="Heart" className="text-gold" size={24} />
            </div>
            <Button 
              className="gold-gradient text-black-elegant elegant-text font-semibold px-8 py-4 text-lg hover:opacity-90 transition-opacity"
            >
              Узнать подробности
            </Button>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="elegant-title text-5xl text-center mb-16 text-black-elegant">
            Детали торжества
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="elegant-border bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="Calendar" className="text-gold" size={32} />
                  <h3 className="elegant-title text-2xl text-black-elegant">Дата и время</h3>
                </div>
                <div className="elegant-text text-lg space-y-2">
                  <p className="font-semibold">21 сентября 2025 года</p>
                  <p>19:00 - начало церемонии</p>
                  <p className="text-muted-foreground">Просим прибыть за 15 минут до начала</p>
                </div>
              </CardContent>
            </Card>

            <Card className="elegant-border bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Icon name="MapPin" className="text-gold" size={32} />
                  <h3 className="elegant-title text-2xl text-black-elegant">Место проведения</h3>
                </div>
                <div className="elegant-text text-lg space-y-2">
                  <p className="font-semibold">Уфа, Республика Башкортостан</p>
                  <p>ул. Златоустовская, дом 20, корпус 2</p>
                  <Button variant="outline" className="mt-4 text-gold border-gold hover:bg-gold hover:text-white">
                    <Icon name="Navigation" className="mr-2" size={16} />
                    Показать на карте
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="elegant-title text-5xl mb-8 text-black-elegant">
            Дресс-код
          </h2>
          <div className="elegant-border bg-white p-12 rounded-lg">
            <Icon name="Shirt" className="text-gold mx-auto mb-6" size={48} />
            <h3 className="elegant-title text-3xl mb-4 text-black-elegant">Black Tie</h3>
            <p className="elegant-text text-xl mb-6">Торжественный стиль</p>
            <Separator className="my-6 bg-gold" />
            <div className="elegant-text text-lg text-muted-foreground">
              <p>Мужчины: смокинг или темный костюм, галстук-бабочка</p>
              <p className="mt-2">Женщины: вечернее платье или коктейльное платье</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="elegant-title text-5xl text-center mb-16 text-black-elegant">
            О подарках
          </h2>
          
          <Card className="elegant-border bg-white">
            <CardContent className="p-12 text-center">
              <Icon name="Gift" className="text-gold mx-auto mb-6" size={48} />
              <div className="elegant-text text-lg space-y-4 max-w-3xl mx-auto">
                <p>
                  Мы не хотим обременять себя поиском подарка, лучшим выбором будет 
                  вклад на мечту в бюджет нашей молодой семьи.
                </p>
                <p className="text-gold font-semibold">
                  И руки будут всегда готовы для объятий! 🤗
                </p>
              </div>
              <Separator className="my-8 bg-gold" />
              <Button className="gold-gradient text-black-elegant font-semibold px-8 py-3">
                <Icon name="CreditCard" className="mr-2" size={16} />
                Реквизиты для перевода
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4 bg-black-elegant text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="elegant-title text-5xl mb-16 text-gold">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-gold/30">
              <CardContent className="p-8">
                <h3 className="elegant-title text-2xl mb-4 text-gold">Организационные вопросы</h3>
                <div className="elegant-text space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="Phone" className="text-gold" size={20} />
                    <span>+7 (000) 000-00-00</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Icon name="MessageCircle" className="text-gold" size={20} />
                    <span>Telegram: @username</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-gold/30">
              <CardContent className="p-8">
                <h3 className="elegant-title text-2xl mb-4 text-gold">Подтверждение присутствия</h3>
                <div className="elegant-text space-y-3">
                  <p className="mb-4">Просим подтвердить ваше присутствие до 15 сентября</p>
                  <Button className="gold-gradient text-black-elegant font-semibold w-full">
                    <Icon name="Check" className="mr-2" size={16} />
                    Подтвердить присутствие
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 pt-8 border-t border-gold/30">
            <p className="elegant-text text-lg text-gold-light">
              С нетерпением ждем встречи с вами в этот особенный день! ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
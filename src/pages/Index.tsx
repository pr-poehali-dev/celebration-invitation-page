import React from 'react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl fade-in">
          <h1 className="minimal-title text-8xl md:text-9xl mb-12 text-primary">
            Приглашение
          </h1>
          <div className="minimal-line mx-auto mb-12"></div>
          <p className="minimal-text text-2xl md:text-3xl mb-16 leading-relaxed max-w-3xl mx-auto text-secondary">
            В этот трогательный день, мы хотим оказаться в окружении самых дорогих нам людей! 
            С огромной радостью приглашаем разделить с нами этот волшебный момент!
          </p>
          <div className="minimal-text text-xl text-primary mb-16">
            21 сентября 2025 · 19:00
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-24">
            <div className="fade-in">
              <h2 className="minimal-title text-4xl mb-8 text-primary">Дата и время</h2>
              <div className="minimal-text text-xl space-y-4 text-secondary">
                <p>21 сентября 2025 года</p>
                <p>19:00 - начало церемонии</p>
                <p className="text-base">Просим прибыть за 15 минут до начала</p>
              </div>
            </div>

            <div className="fade-in">
              <h2 className="minimal-title text-4xl mb-8 text-primary">Место проведения</h2>
              <div className="minimal-text text-xl space-y-4 text-secondary">
                <p>Уфа, Республика Башкортостан</p>
                <p>ул. Златоустовская, дом 20, корпус 2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="minimal-title text-6xl mb-12 text-primary">
            Дресс-код
          </h2>
          <div className="minimal-line mx-auto mb-12"></div>
          <h3 className="minimal-title text-4xl mb-8 text-primary">Black Tie</h3>
          <p className="minimal-text text-2xl mb-12 text-secondary">Торжественный стиль</p>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-3xl mx-auto">
            <div className="minimal-text text-lg text-secondary">
              <p className="font-normal">Мужчины:</p>
              <p>смокинг или темный костюм</p>
              <p>галстук-бабочка</p>
            </div>
            <div className="minimal-text text-lg text-secondary">
              <p className="font-normal">Женщины:</p>
              <p>вечернее платье или</p>
              <p>коктейльное платье</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gifts */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="minimal-title text-6xl mb-12 text-primary">
            О подарках
          </h2>
          <div className="minimal-line mx-auto mb-12"></div>
          
          <div className="minimal-text text-xl space-y-8 max-w-3xl mx-auto text-secondary leading-relaxed">
            <p>
              Мы не хотим обременять себя поиском подарка, лучшим выбором будет 
              вклад на мечту в бюджет нашей молодой семьи.
            </p>
            <p className="text-primary">
              И руки будут всегда готовы для объятий!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="minimal-title text-6xl text-center mb-20 text-primary">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-24">
            <div className="text-center">
              <h3 className="minimal-title text-3xl mb-8 text-primary">Организационные вопросы</h3>
              <div className="minimal-text text-lg space-y-4 text-secondary">
                <p>+7 (000) 000-00-00</p>
                <p>Telegram: @username</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="minimal-title text-3xl mb-8 text-primary">Подтверждение присутствия</h3>
              <div className="minimal-text text-lg space-y-6 text-secondary">
                <p>Просим подтвердить ваше присутствие до 15 сентября</p>
                <Button 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-colors px-8 py-3"
                >
                  Подтвердить присутствие
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-24 pt-16 border-t border-border text-center">
            <p className="minimal-text text-xl text-secondary">
              С нетерпением ждем встречи с вами в этот особенный день!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
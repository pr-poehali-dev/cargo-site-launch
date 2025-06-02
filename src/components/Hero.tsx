import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Надёжные грузоперевозки
              <span className="text-orange-400"> по России и СНГ</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Быстрая доставка грузов любого объёма. Гарантируем сохранность и
              соблюдение сроков. Работаем 24/7 по всей территории России и
              странам СНГ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-lg px-8"
              >
                <Icon name="Calculator" size={20} />
                Рассчитать стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-800 text-lg px-8"
              >
                <Icon name="Phone" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&h=600"
              alt="Грузовик на дороге"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={24} className="text-green-500" />
                <div>
                  <div className="font-bold">1000+</div>
                  <div className="text-sm text-gray-600">
                    Довольных клиентов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

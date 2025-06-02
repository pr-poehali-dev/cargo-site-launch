import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Shield",
      title: "Страхование груза",
      description:
        "Полное страхование вашего груза на весь период транспортировки",
    },
    {
      icon: "Clock",
      title: "Точные сроки",
      description:
        "Гарантируем доставку в оговорённые сроки или компенсируем задержку",
    },
    {
      icon: "MapPin",
      title: "Отслеживание",
      description:
        "Онлайн мониторинг местоположения груза в режиме реального времени",
    },
    {
      icon: "Users",
      title: "Опытная команда",
      description: "Более 10 лет опыта в сфере логистики и грузоперевозок",
    },
    {
      icon: "Award",
      title: "Лицензии",
      description: "Все необходимые разрешения для международных перевозок",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Круглосуточная техническая поддержка и консультации",
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы обеспечиваем высокий уровень сервиса на каждом этапе доставки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Icon
                  name={feature.icon as any}
                  size={24}
                  className="text-orange-600"
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

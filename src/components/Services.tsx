import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Truck",
      title: "Автоперевозки",
      description:
        "Доставка грузов автотранспортом по России и СНГ. От 1 кг до 20 тонн.",
      features: ["До 20 тонн", "Любые расстояния", "Страхование груза"],
    },
    {
      icon: "Plane",
      title: "Авиаперевозки",
      description:
        "Срочная доставка грузов авиатранспортом в любую точку мира.",
      features: ["Экспресс доставка", "По всему миру", "Особые грузы"],
    },
    {
      icon: "Ship",
      title: "Морские перевозки",
      description:
        "Контейнерные перевозки морским транспортом для крупных грузов.",
      features: ["Контейнеры", "Крупные партии", "Международные маршруты"],
    },
    {
      icon: "Train",
      title: "ЖД перевозки",
      description: "Железнодорожные перевозки для больших объёмов груза.",
      features: ["Большие объёмы", "Надёжность", "Низкая стоимость"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр логистических услуг для бизнеса любого
            масштаба
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li
                      key={fIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <Icon
                        name="Check"
                        size={16}
                        className="text-green-500 mr-2"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

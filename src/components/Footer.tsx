import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Icon name="Truck" size={28} className="text-orange-400" />
              <span className="text-xl font-bold">ГрузЭкспресс</span>
            </div>
            <p className="text-gray-400 mb-4">
              Надёжный партнёр в сфере грузоперевозок по России и странам СНГ
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={20}
                className="text-gray-400 hover:text-orange-400 cursor-pointer"
              />
              <Icon
                name="Twitter"
                size={20}
                className="text-gray-400 hover:text-orange-400 cursor-pointer"
              />
              <Icon
                name="Instagram"
                size={20}
                className="text-gray-400 hover:text-orange-400 cursor-pointer"
              />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Автоперевозки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Авиаперевозки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Морские перевозки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  ЖД перевозки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-400">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Лицензии
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Карьера
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Партнёрам
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>info@gruzexpress.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>г. Москва, ул. Логистическая, 15</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ГрузЭкспресс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={32} className="text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">
              Autoline142
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600">
              <Icon name="Phone" size={16} />
              <span>+7 (495) 123-45-67</span>
            </div>
            <Button className="bg-orange-500 hover:bg-orange-600">
              Заказать перевозку
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

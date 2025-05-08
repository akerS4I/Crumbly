import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const sections = [
  {
    title: "Продукт",
    links: [
      { name: "Обзор", href: "#" },
      { name: "Цены", href: "#" },
      { name: "Маркетплейс", href: "#" },
      { name: "Функции", href: "#" },
    ],
  },
  {
    title: "Компания",
    links: [
      { name: "О нас", href: "#" },
      { name: "Команда", href: "#" },
      { name: "Блог", href: "#" },
      { name: "Карьера", href: "#" },
    ],
  },
  {
    title: "Ресурсы",
    links: [
      { name: "Помощь", href: "#" },
      { name: "Продажи", href: "#" },
      { name: "Реклама", href: "#" },
    ],
  },
];

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
}

const Footer = ({
  logo = {
    url: "#",
    src: "cookie.png",
    alt: "логотип",
    title: "Crumbly",
  },
}: FooterProps) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex w-full flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col items-center justify-between gap-6 lg:items-start">
            {/* Логотип */}
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={logo.url}>
                <img
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{logo.title}</h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Платформа, объединяющая талантливых домашних кондитеров и
              ценителей вкусной выпечки
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaInstagram className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaFacebook className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaTwitter className="size-6" />
                </a>
              </li>
              <li className="font-medium hover:text-primary">
                <a href="#">
                  <FaLinkedin className="size-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="grid w-full grid-cols-3 gap-6 lg:gap-20">
            {sections.map((section, index) => (
              <div key={index}>
                <h3 className="mb-6 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, i) => (
                    <li key={i} className="font-medium hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t pt-8 text-center text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
          <p>© 2025 Crumbly.uz Все права защищены.</p>
          <ul className="flex justify-center gap-4 lg:justify-start">
            <li className="hover:text-primary">
              <a href="#"> Условия использования</a>
            </li>
            <li className="hover:text-primary">
              <a href="#"> Политика конфиденциальности</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer };

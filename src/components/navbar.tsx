"use client";

import { MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const features = [
    {
      title: "Видео-Презентация",
      description: "Окунитесь в разработку нашего сайта с головой просмотрев короткое видео",
      href: "/video",
    },
    {
      title: "Github Репозиторий",
      description: "Взгяните на код и то как двигалась разработка сайта",
      href: "https://github.com/akerS4I/Crumbly",
    },
    {
      title: "Telegram Бот",
      description: "Теперь можно заказывать и в любимом мессенджере",
      href: "https://t.me/Crumbly_Off_Bot",
    },
    {
      title: "Наша Команда",
      description: "Узнайте больше о создателях сервиса",
      href: "/team",
    },
  ];

  return (
    <section className="py-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/crumblymain.png"
              className="max-w-44 sm:max-w-44 lg:max-w-60"
              alt=""
            />
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link
                  to="/"
                  className={`${navigationMenuTriggerStyle()} !text-base`}
                >
                  На главную
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/about"
                  className={`${navigationMenuTriggerStyle()} !text-base`}
                >
                  Про нас
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  to="/contact"
                  className={`${navigationMenuTriggerStyle()} !text-base`}
                >
                  Контакты
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Дополнительно
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 p-3">
                    {features.map((feature, index) => (
                      <Link
                        to={feature.href}
                        key={index}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div>
                          <p className="mb-1 font-semibold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Link to="/login">
              <Button variant="outline" className="text-base">
                Войти в аккаунт
              </Button>
            </Link>
            <Link to="/register">
              <Button className="text-base">Зарегистрироваться</Button>
            </Link>
            <ModeToggle />
            <Link to="/cart">
              <Button
                className="text-black"
              >
                <FaShoppingCart />
              </Button>
            </Link>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <Link to="/" className="flex items-center gap-2">
                    <img src="/cookie.png" className="max-h-8" alt="" />
                    <span className="text-2xl font-semibold tracking-tighter">
                      Crumbly
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Link to="/" className="font-medium mt-4">
                  На главную
                </Link>
                <Accordion type="single" collapsible className="mt-2 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-base hover:no-underline">
                      Дополнительно
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <Link
                            to={feature.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div>
                              <p className="mb-1 font-semibold text-foreground">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-6">
                  <Link to="/contact" className="font-medium">
                    Контакт
                  </Link>
                  <Link to="/about" className="font-medium">
                    Про нас
                  </Link>
                  <Link to="/cart" className="font-medium underline decoration-yellow-400 decoration-2">
                    Корзина
                  </Link>
                  <ModeToggle />
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">
                    <Link to="/login">Войти в аккаунт</Link>
                  </Button>
                  <Button>
                    <Link to="/register">Зарегистрироваться</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };

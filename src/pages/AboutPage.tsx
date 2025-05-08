import { Navbar } from "@/components/navbar";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { FaUser, FaShoppingCart, FaTruck } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <header className="flex flex-col items-start justify-center w-full mt-10 px-4 sm:px-8 lg:px-20 py-8 bg-yellow-200 dark:bg-zinc-900">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-black dark:text-white">
          Домашняя выпечка c
        </h1>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-black dark:text-white">
          доставкой
        </h1>
        <Separator
          className="my-4 w-full bg-black dark:bg-white"
          orientation="horizontal"
        />
        <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-gray-200">
          Платформа, объединяющая талантливых
        </p>
        <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-gray-200">
          домашних кондитеров и ценителей вкусной выпечки
        </p>
      </header>
      <div className="flex flex-col content-center justify-center">
        <h1 className="text-2xl sm:text2xl lg:text-3xl m-auto mt-16 font-semibold">
          Как это работает?
        </h1>
        <div className="flex flex-row content-center justify-center gap-16 mt-12 flex-wrap">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>
                <div className="text-black dark:text-white">
                  <FaUser className="size-16" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-semibold text-xl">
              <p>Выберите кондитера</p>
            </CardContent>
            <CardFooter>
              <p className="text-center">
                Просмотрите профили талантливых домашних кондитеров и выберите
                того, чьи десерты вам нравятся больше всего
              </p>
            </CardFooter>
          </Card>

          <Card className="w-96">
            <CardHeader>
              <CardTitle>
                <div className="text-black dark:text-white">
                  <FaShoppingCart className="size-16" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-semibold text-xl">
              <p>Сделайте заказ</p>
            </CardContent>
            <CardFooter>
              <p className="text-center">
                Выберите понравившиеся десерты из каталога или закажите
                индивидуальный десерт по вашему вкусу
              </p>
            </CardFooter>
          </Card>

          <Card className="w-96">
            <CardHeader>
              <CardTitle>
                <div className="text-black dark:text-white">
                  <FaTruck className="size-16" />
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="font-semibold text-xl">
              <p>Получите доставку</p>
            </CardContent>
            <CardFooter>
              <p className="text-center">
                Свежая домашняя выпечка будет доставлена к вам в удобное время и
                место
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer
        logo={{
          url: "/",
          src: "/cookie.png",
          alt: "логотип",
          title: "Crumbly",
        }}
      />
    </>
  );
};

export default AboutPage;

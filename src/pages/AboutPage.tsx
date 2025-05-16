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
import { Contact } from "@/components/contact";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  YAxis,
} from "recharts";

const chartData = [
  { month: "Январь 2023", revenue: 12 },
  { month: "Апрель 2023", revenue: 13 },
  { month: "Июль 2023", revenue: 15 },
  { month: "Октябрь 2023", revenue: 16 },
  { month: "Январь 2024", revenue: 19 },
  { month: "Апрель 2024", revenue: 21 },
  { month: "Июль 2024", revenue: 22 },
  { month: "Октябрь 2024", revenue: 23 },
  { month: "Январь 2025", revenue: 25 },
];

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-md p-3 shadow-md bg-white dark:bg-zinc-800 border border-yellow-400">
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {label}
        </p>
        <p className="text-sm text-yellow-500 font-semibold">
          Оборот: {payload[0].value}%
        </p>
      </div>
    );
  }

  return null;
};

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <header className="flex flex-col items-start justify-center w-full mt-10 px-4 sm:px-8 lg:px-20 py-8 bg-yellow-200 dark:bg-zinc-900 h-auto min-h-[18rem]">
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-black dark:text-white leading-snug">
          Домашняя выпечка c доставкой
        </h1>
        <Separator className="my-4 w-full bg-black dark:bg-white" />
        <p className="text-lg sm:text-xl lg:text-2xl text-black dark:text-gray-200">
          Платформа, объединяющая талантливых домашних кондитеров и ценителей
          вкусной выпечки
        </p>
        <p className="text-sm sm:text-sx lg:text-md text-gray-600 dark:text-gray-200 mt-1">
          P.s (При создании проекта ни один Захар не пострадал)
        </p>
      </header>
      <section className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 mt-10 gap-6 mb-32">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          Сервис сделанный с душой
        </h1>
        <img src="Yulduz.png" alt="" className="max-h-64" />
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">
          от людей и для людей
        </h1>
      </section>
      <section className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 mt-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center">
          Как это работает?
        </h2>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 mt-12">
          <Card className="w-full sm:w-80 md:w-96">
            <CardHeader className="flex items-center justify-center">
              <CardTitle>
                <FaUser
                  style={{ color: "currentColor" }}
                  className="size-16 text-black dark:text-white"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="font-semibold text-xl text-center">
              <p>Выберите кондитера</p>
            </CardContent>
            <CardFooter>
              <p className="text-center text-muted-foreground">
                Просмотрите профили талантливых домашних кондитеров и выберите
                того, чьи десерты вам нравятся больше всего
              </p>
            </CardFooter>
          </Card>

          <Card className="w-full sm:w-80 md:w-96">
            <CardHeader className="flex items-center justify-center">
              <CardTitle>
                <FaShoppingCart
                  style={{ color: "currentColor" }}
                  className="size-16 text-black dark:text-white"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="font-semibold text-xl text-center">
              <p>Сделайте заказ</p>
            </CardContent>
            <CardFooter>
              <p className="text-center text-muted-foreground">
                Выберите понравившиеся десерты из каталога или закажите
                индивидуальный десерт по вашему вкусу
              </p>
            </CardFooter>
          </Card>

          <Card className="w-full sm:w-80 md:w-96">
            <CardHeader className="flex items-center justify-center">
              <CardTitle>
                <FaTruck
                  style={{ color: "currentColor" }}
                  className="size-16 text-black dark:text-white"
                />
              </CardTitle>
            </CardHeader>
            <CardContent className="font-semibold text-xl text-center">
              <p>Получите доставку</p>
            </CardContent>
            <CardFooter>
              <p className="text-center text-muted-foreground">
                Свежая домашняя выпечка будет доставлена к вам в удобное время и
                место
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 mt-36 gap-10 text-center">
        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
          Спрос в доставке еды на дом растет
        </h2>
        <p className="text-muted-foreground max-w-2xl">
          Доля доставки в общем обороте ресторанного бизнеса увеличилась с 18% в
          2023 году до 24% в 2024 году, что подчеркивает растущую популярность
          доставки еды.
        </p>

        <div className="w-full max-w-6xl h-[340px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
            >
              <Tooltip content={CustomTooltip} />
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" stroke="#a3a3a3" />
              <YAxis stroke="#a3a3a3" tickFormatter={(value) => `${value}%`} />
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  borderColor: "#facc15",
                }}
                itemStyle={{ color: "#000" }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#facc15"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>

      <Contact />
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

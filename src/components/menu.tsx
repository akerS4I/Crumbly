import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import cookie from "../assets/menu-items/1.jpg";
import medovik from "../assets/menu-items/2.jpg";
import blueberryMuffin from "../assets/menu-items/3.jpg";
import applePie from "../assets/menu-items/4.jpg";
import tiramisu from "../assets/menu-items/5.jpg";
import eclairs from "../assets/menu-items/6.jpg";
import brownie from "../assets/menu-items/7.jpg";
import cheesecake from "../assets/menu-items/8.jpg";
import donuts from "../assets/menu-items/9.jpg";
import croissant from "../assets/menu-items/10.jpg";
import tartlets from "../assets/menu-items/11.jpg";
import carrotCake from "../assets/menu-items/12.jpg";
import { addToCart } from "@/store/cartSlice";

const items = [
  {
    id: 1,
    title: "Печенье с шоколадной крошкой",
    img: cookie,
    rating: 4.8,
    description: "Хрустящее печенье с тающей шоколадной крошкой — идеальный перекус.",
  },
  {
    id: 2,
    title: "Классический торт Медовик",
    img: medovik,
    rating: 5.0,
    description: "Нежный многослойный медовик с насыщенным вкусом меда и сливок.",
  },
  {
    id: 3,
    title: "Маффины с черникой",
    img: blueberryMuffin,
    rating: 4.7,
    description: "Воздушные маффины с сочной черникой и хрустящей шапочкой.",
  },
  {
    id: 4,
    title: "Пирог с яблоками и корицей",
    img: applePie,
    rating: 4.9,
    description: "Домашний пирог с яблоками, корицей и хрустящей корочкой.",
  },
  {
    id: 5,
    title: "Тирамису",
    img: tiramisu,
    rating: 5.0,
    description: "Классический итальянский десерт с кремом маскарпоне и кофе.",
  },
  {
    id: 6,
    title: "Эклеры с ванильным кремом",
    img: eclairs,
    rating: 4.6,
    description: "Нежные эклеры с ароматным ванильным заварным кремом.",
  },
  {
    id: 7,
    title: "Шоколадный брауни",
    img: brownie,
    rating: 4.8,
    description: "Плотный и насыщенный шоколадный десерт с хрустящей корочкой.",
  },
  {
    id: 8,
    title: "Чизкейк Нью-Йорк",
    img: cheesecake,
    rating: 5.0,
    description: "Кремовый чизкейк на хрустящей основе, украшенный ягодами.",
  },
  {
    id: 9,
    title: "Пончики с начинкой",
    img: donuts,
    rating: 4.5,
    description: "Мягкие пончики с начинкой из варенья и сахарной пудрой.",
  },
  {
    id: 10,
    title: "Слоёные круассаны",
    img: croissant,
    rating: 4.7,
    description: "Золотистые круассаны с маслом или шоколадной начинкой.",
  },
  {
    id: 11,
    title: "Тарталетки с кремом и ягодами",
    img: tartlets,
    rating: 4.9,
    description: "Мини-десерты с заварным кремом и свежими сезонными ягодами.",
  },
  {
    id: 12,
    title: "Морковный торт",
    img: carrotCake,
    rating: 4.6,
    description: "Влажный торт с морковью, орехами и кремом из сливочного сыра.",
  },
];


const Menu = () => {
  const dispatch = useDispatch();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleQuantityChange = (id: number, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  const handleAddToCart = (item: (typeof items)[number]) => {
    const quantity = quantities[item.id] || 1;
    dispatch(
      addToCart({
        ...item,
        quantity,
      })
    );
  };

  return (
    <div className="flex flex-wrap gap-7 p-7">
      {items.map((item) => (
        <div
          key={item.id}
          className="w-80 p-4 flex flex-col items-center justify-between bg-yellow-300 bg-opacity-40 rounded-lg"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-2 text-lg font-semibold text-center">
            {item.title}
          </h3>
          <p
            className="mt-2 text-sm text-center text-gray-700 dark:text-gray-400"
            style={{ color: "currentColor" }}
          >
            {item.description}
          </p>
          <div className="mt-1 text-yellow-500 font-semibold">
            {"★".repeat(Math.round(item.rating))}{" "}
            <span
              className="text-base text-black dark:text-white ml-1"
              style={{ color: "currentColor" }}
            >
              {item.rating.toFixed(1)}
            </span>
          </div>

          {/* Кол-во + кнопки */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.id, -1)}
            >
              -
            </Button>
            <span className="px-2 w-6 text-center">
              {quantities[item.id] || 1}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleQuantityChange(item.id, 1)}
            >
              +
            </Button>
          </div>

          {/* Кнопка "Добавить в корзину" */}
          <Button className="mt-4 w-full" onClick={() => handleAddToCart(item)}>
            Добавить в корзину
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Menu;

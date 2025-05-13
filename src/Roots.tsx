import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import App from "./App";

import cookie from "./assets/menu-items/1.jpg";
import medovik from "./assets/menu-items/2.jpg";
import blueberryMuffin from "./assets/menu-items/3.jpg";
import applePie from "./assets/menu-items/4.jpg";
import tiramisu from "./assets/menu-items/5.jpg";
import eclairs from "./assets/menu-items/6.jpg";
import brownie from "./assets/menu-items/7.jpg";
import cheesecake from "./assets/menu-items/8.jpg";
import donuts from "./assets/menu-items/9.jpg";
import croissant from "./assets/menu-items/10.jpg";
import tartlets from "./assets/menu-items/11.jpg";
import carrotCake from "./assets/menu-items/12.jpg";

const images = [
  cookie,
  medovik,
  blueberryMuffin,
  applePie,
  tiramisu,
  eclairs,
  brownie,
  cheesecake,
  donuts,
  croissant,
  tartlets,
  carrotCake,
];


const Root = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  let loaded = 0;
  const start = Date.now();

  const handleLoad = () => {
    loaded++;
    if (loaded === images.length) {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, 1000 - elapsed); // at least 1s
      setTimeout(() => setLoading(false), remaining);
    }
  };

  images.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = handleLoad;
    img.onerror = handleLoad;
  });
}, []);


  return loading ? <Loader /> : <App />;
};

export default Root;

import { useEffect, useState } from "react";
import Loader from "@/components/loader";
import App from "./App";

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <App />;
};

export default Root;

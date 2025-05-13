import { Footer } from "@/components/footer";
import Menu from "@/components/menu";
import { Navbar } from "@/components/navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="">
      <Menu/>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;

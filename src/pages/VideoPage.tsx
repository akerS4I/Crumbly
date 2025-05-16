import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const VideoPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-xl font-medium mb-8 mt-4">
        Окунитесь в разработку нашего сайта с головой просмотрев короткое видео
      </h1>
      <div className="w-[95%] max-w-3xl aspect-video mx-auto rounded-lg overflow-hidden mb-30">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/CPk5e-b0r6Q"
          title="Video presentation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <Footer/>
    </>
  );
};

export default VideoPage;

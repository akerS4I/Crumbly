import { Navbar } from "@/components/navbar";

const VideoPage = () => {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-xl font-medium mb-8 mt-4">
        Окунитесь в разработку нашего сайта с головой просмотрев короткое видео
      </h1>
      <video
        src="/videos/VideoPresentation.mp4"
        controls
        className="w-[95%] max-w-3xl mx-auto rounded-lg"
      />
    </>
  );
};

export default VideoPage;

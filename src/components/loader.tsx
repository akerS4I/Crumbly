import "@/styles/loader.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background text-foreground">
      <div className="flex space-x-1 text-5xl font-bold tracking-widest loader-text">
        {"CRUMBLY".split("").map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;

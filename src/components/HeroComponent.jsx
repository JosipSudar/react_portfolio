/* eslint-disable react/no-unescaped-entities */
const HeroComponent = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500" id="hero">
      <section className="flex justify-between items-center max-w-[1200px] mx-auto h-screen">
        <div className="w-1/2 p-16">
          <img
            src="/portfolio-image.jpg"
            alt="Portfolio image"
            className="rounded-full"
          />
        </div>
        <div className="w-1/2 p-16">
          <div className=" space-y-2">
            <h1 className="text-6xl font-bold">Hi, I'm Josip</h1>
            <h2 className="text-3xl font-bold">I'm a Fullstack Developer</h2>
            <p className="text-2xl font-semibold">
              This is my portfolio site for all my projects
            </p>
          </div>
          <div className="flex justify-between m-10">
            <button className="border-2 border-black p-2 hover:animate-pulse hover:bg-black hover:text-white transition duration-200 ease-in-out rounded-sm">
              <a
                href={`../assets/CV_Josip_Sudar.docx`}
                download="Josip_Sudar_CV.docx"
              >
                Download Resume
              </a>
            </button>
            <button className="border-2 border-black p-2 hover:animate-pulse hover:bg-black hover:text-white transition duration-200 ease-in-out rounded-sm">
              <a href="https://github.com/JosipSudar" target="_blank">
                GitHub page
              </a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroComponent;

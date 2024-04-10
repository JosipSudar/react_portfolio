/* eslint-disable react/no-unescaped-entities */
const HeroComponent = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500" id="hero">
      <section className="flex justify-between items-center max-w-[1200px] mx-auto h-screen flex-col md:flex md:flex-row">
        <div className="w-1/2 md:p-16 py-10">
          <img
            src="/portfolio-image.jpg"
            alt="Portfolio image"
            className="rounded-full"
          />
        </div>
        <div className="w-1/2 md:p-16 ">
          <div className=" space-y-2">
            <h1 className="lg:text-6xl font-bold text-3xl">Hi, I'm Josip</h1>
            <h2 className="lg:text-3xl font-bold text-2xl">
              A Fullstack Developer based in Šibenik, Croatia
            </h2>
            <p className="lg:text-2xl font-semibold text-xl">
              This is my portfolio site for all my projects
            </p>
          </div>
          <div className="flex justify-between m-10 flex-col lg:flex space-y-4 lg:flex-row lg:space-y-0">
            <button className="border-2 border-black p-2 hover:animate-pulse hover:bg-black hover:text-white transition duration-200 ease-in-out rounded-sm">
              <a href="/CV_Josip_Sudar.pdf" download="CV_Josip_Sudar.pdf">
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

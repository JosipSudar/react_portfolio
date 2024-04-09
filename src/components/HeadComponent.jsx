const HeadComponent = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header className="w-full flex justify-between p-10 cursor-pointer bg-gradient-to-r from-blue-500 to-pink-500 items-center">
      <div className="text-5xl font-bold text-gray-100">JS.</div>
      <div className="">
        <nav className="flex list-none font-semibold text-xl">
          <a
            className="mr-6 no-underline hover:animate-pulse transition duration-200 ease-in-out hover:underline"
            href="#projects"
            onClick={handleClick}
          >
            Projects
          </a>
          <a
            className="mr-6 no-underline hover:animate-pulse transition duration-200 ease-in-out hover:underline"
            href="#skills"
            onClick={handleClick}
          >
            Skills
          </a>
          <a
            className="mr-6 no-underline hover:animate-pulse transition duration-200 ease-in-out hover:underline"
            href="#contact"
            onClick={handleClick}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default HeadComponent;

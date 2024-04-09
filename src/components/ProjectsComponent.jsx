import SingleProject from "./SingleProject";

const ProjectsComponent = () => {
  return (
    <section className="text-center m-10 max-w-[1200px] mx-auto" id="projects">
      <h1 className="text-7xl font-bold mb-10">Projects</h1>
      <p className="text-3xl">Here are some of my projects</p>
      <div className="grid grid-cols-2 m-20 gap-10">
        <SingleProject
          image="/projects/webshop-html_css_js.png"
          title="HTML CSS JS Webshop"
          description="A webshop built with HTML, CSS and JavaScript, that allows the user to add products to the cart and see the total price"
          demo="https://josipsudar.github.io/izrada-web-stranice-web-shop-JosipSudar/webshop/index.html"
          github="https://github.com/JosipSudar/izrada-web-stranice-web-shop-JosipSudar/tree/cdcf2b694ff71a52efb1903f2998edcb78057840"
        />
        <SingleProject
          image="/projects/html_css_js.png"
          title="Simple HTML CSS JS Page"
          description="A simple HTML, CSS and JavaScript page with a bit of styling"
          demo="https://josipsudar.github.io/oblutak-web-stranica-19-02-2024-JosipSudar/zada%C4%87a/zadaca.html"
          github="https://github.com/JosipSudar/oblutak-web-stranica-19-02-2024-JosipSudar/tree/fe1ab1cd442fc7b5d282172ad6f32f389f781bc7"
        />
        <SingleProject
          image="/projects/react_webshop.png"
          title="React Webshop"
          description="A webshop built with React, that allows the user to add products to the cart and see the total price"
          demo="https://easymart.vercel.app/"
          github="https://github.com/JosipSudar/easymart"
        />
        <SingleProject
          image="/projects/react_webshop.png"
          title="React Webshop Backend"
          description="A backend for the React webshop, built with Node.js and Express.js"
          demo="none"
          github="https://github.com/JosipSudar/easymart_backend"
        />
        <SingleProject
          image="/projects/todo_react.png"
          title="React Todo App"
          description="A simple TODO app built with React, that allows the user to add and remove tasks"
          demo="https://todo-app-sable-one.vercel.app/"
          github="https://github.com/JosipSudar/todo-app"
        />
        <SingleProject
          image="/projects/react_chat-app.png"
          title="React Chat App"
          description="A simple chat app built with React, that allows the user to join and send messages"
          demo="https://chat-pmk4vyjv3-josipsudars-projects.vercel.app/"
          github="hhttps://github.com/JosipSudar/Chat-app"
        />
        <SingleProject
          image="/projects/recipe_react.png"
          title="React Recipe App"
          description="A simple recipe app built with React, that allows the user to search and view recipes"
          demo="https://recipe-finder-l366qanys-josipsudars-projects.vercel.app/"
          github="https://github.com/JosipSudar/recipe-finder"
        />
      </div>
    </section>
  );
};

export default ProjectsComponent;
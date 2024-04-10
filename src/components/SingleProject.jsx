import PropTypes from "prop-types";

const SingleProject = ({ image, title, description, demo, github }) => {
  return (
    <div className="space-y-3 border-2">
      <img
        src={image}
        alt="cover_image"
        className="w-full h-[300px] object-cover"
      />
      <h1 className="text-3xl font-bold p-4">{title}</h1>
      <p className="text-xl p-4">{description}</p>
      <div className="flex">
        <button className="p-4 w-1/2 border-2 gap-3 m-4">
          <a href={demo} target="_blank">
            Live Demo
          </a>
        </button>
        <button className="p-4 w-1/2 border-2 gap-3 m-4">
          <a href={github} target="_blank">
            GitHub page
          </a>
        </button>
      </div>
    </div>
  );
};

SingleProject.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  demo: PropTypes.string,
  github: PropTypes.string,
};

export default SingleProject;

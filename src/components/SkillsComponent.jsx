import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";

const SkillsComponent = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-pink-500" id="skills">
      <section className="text-center max-w-[1200px] mx-auto">
        <h1 className="text-7xl font-bold m-10 p-10">Skills</h1>
        <p className="text-3xl">Here are some of my skills</p>
        <div className="grid grid-cols-3 gap-10 text-6xl pt-20">
          <FaHtml5 className="mx-auto" />
          <FaCss3Alt className="mx-auto" />
          <IoLogoJavascript className="mx-auto" />
          <FaReact className="mx-auto" />
          <FaNodeJs className="mx-auto" />
          <DiMysql className="mx-auto" />
          <SiMongodb className="mx-auto" />
          <SiTailwindcss className="mx-auto" />
          <FaBootstrap className="mx-auto" />
        </div>
      </section>
    </div>
  );
};

export default SkillsComponent;

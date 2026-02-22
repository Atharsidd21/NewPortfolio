import "./Skills.css";
import FadeIn from "../FadeIn/FadeIn";

import unity from "../../assets/skills/unity.png";
import unreal from "../../assets/skills/unreal.png";
import blender from "../../assets/skills/blender.png";
import csharp from "../../assets/skills/csharp.png";
import cpp from "../../assets/skills/cpp.png";
import premiere from "../../assets/skills/premiere.png";
import python from "../../assets/skills/python.png";

const skills = [
  { name: "Unity", image: unity },
  { name: "Unreal Engine", image: unreal },
  { name: "Blender", image: blender },
  { name: "Adobe Premiere", image: premiere },
  { name: "C#", image: csharp },
  { name: "C++", image: cpp },
  { name: "Python", image: python },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
       <FadeIn>

      <h2 className="skills-title">
        Tech & <span className="accent">Creative Stack </span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="icon-wrapper">
              <img src={skill.image} alt={skill.name} />
            </div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
        </FadeIn>
    </section>
  );
};

export default Skills;
import "./Skills.css";
import SkillCard from "./SkillCard";

import unity from "../../assets/skills/unity.png";
import unreal from "../../assets/skills/unreal.png";
import blender from "../../assets/skills/blender.png";
import csharp from "../../assets/skills/csharp.png";
import cpp from "../../assets/skills/cpp.png";
import premiere from "../../assets/skills/premiere.png";
import python from "../../assets/skills/python.png";

const skills = {
  "Game Development": [
    { name: "Unity", image: unity },
    { name: "Unreal Engine", image: unreal },
    { name: "C#", image: csharp },
    { name: "C++", image: cpp },
  ],
  "3D & Animation": [
    { name: "Blender", image: blender },
     { name: "Python", image: python },
  ],
  "Editing & Content": [
    { name: "Adobe Premiere Pro", image: premiere },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">
        My <span className="accent">Skills</span>
      </h2>

      {Object.entries(skills).map(([category, items]) => (
        <div className="skills-category" key={category}>
          <h3 className="category-title">{category}</h3>

          <div className="skills-grid">
            {items.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                image={skill.image}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
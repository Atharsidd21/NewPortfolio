import "./Experience.css";

const experiences = [
  {
    role: "Game Developer Intern",
    company: "Studio Name",
    year: "2024",
    points: [
      "Developed gameplay mechanics using Unity and C#",
      "Implemented enemy AI behaviour systems",
      "Built UI systems and integrated game menus",
      "Optimized gameplay performance and debugging"
    ]
  },
  {
    role: "Freelance 3D Artist",
    company: "Independent Work",
    year: "2023",
    points: [
      "Created environment assets and 3D models",
      "Produced character animations using Blender",
      "Optimized models for real-time game engines",
      "Delivered assets for indie game projects"
    ]
  },
  {
    role: "Video Editor",
    company: "Freelance Projects",
    year: "2022",
    points: [
      "Edited gaming videos and promotional content",
      "Worked with motion graphics and transitions",
      "Produced high-quality video edits for creators"
    ]
  }
];

const Experience = () => {
  return (
    <section className="experience" id="experience">

      <h2 className="experience-title">
        My <span className="accent">Experience</span>
      </h2>

      <div className="experience-list">

        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>

            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span>{exp.year}</span>
            </div>

            <h4>{exp.company}</h4>

            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;
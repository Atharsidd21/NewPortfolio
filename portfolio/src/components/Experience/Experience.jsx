import { useEffect, useRef } from "react";
import "./Experience.css";
import FadeIn from "../FadeIn/FadeIn";

const experiences = [
  {
    role: "Game Developer Intern",
    company: "Studio / Company Name",
    duration: "2024",
    description:
      "Worked on gameplay mechanics, enemy AI behaviour, and UI systems using Unity and C#."
  },
  {
    role: "Freelance 3D Artist",
    company: "Independent Work",
    duration: "2023",
    description:
      "Created environment assets, character animations, and optimized 3D models for game engines."
  },
  {
    role: "Video Editor",
    company: "Freelance Projects",
    duration: "2022",
    description:
      "Edited gaming trailers and promotional content using Adobe Premiere Pro."
  }
];

const Experience = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" id="experience">

      <h2 className="experience-title">
        My <span className="accent">Experience</span>
      </h2>

      <div className="timeline">

        {experiences.map((exp, index) => (
          <div
            className="timeline-item hidden"
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="duration">{exp.duration}</span>
              <p>{exp.description}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Experience;
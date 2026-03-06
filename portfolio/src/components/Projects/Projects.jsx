import { useState } from "react";
import "./Projects.css";
import anim1 from "../../assets/projects/anim4.png";

/* PROJECT DATA */

const projectGroups = {
  "Game Development": [
    {
      title: "Sundered Realms",
      type: "video",
      youtubeId: "zBWph5oP-Wk",
      tech: ["Unity", "C#"],
      buttons: [
        { text: "GitHub", link: "https://github.com/Atharsidd21/Sundered-Realms.git" },
        { text: "Play Demo", link: "https://itch.io/demo-link" }
      ]
    },
     {
      title: "Shooter Prototype",
      type: "video",
      youtubeId: "dQw4w9WgXcQ",
      tech: ["Unity", "C#"],
      buttons: [
        { text: "GitHub", link: "https://github.com/yourrepo" },
        { text: "Play Demo", link: "https://itch.io/demo-link" }
      ]
    },
     {
      title: "Shooter Prototype",
      type: "video",
      youtubeId: "dQw4w9WgXcQ",
      tech: ["Unity", "C#"],
      buttons: [
        { text: "GitHub", link: "https://github.com/yourrepo" },
        { text: "Play Demo", link: "https://itch.io/demo-link" }
      ]
    },
     {
      title: "Shooter Prototype",
      type: "video",
      youtubeId: "dQw4w9WgXcQ",
      tech: ["Unity", "C#"],
      buttons: [
        { text: "GitHub", link: "https://github.com/yourrepo" },
        { text: "Play Demo", link: "https://itch.io/demo-link" }
      ]
    },
     {
      title: "Shooter Prototype",
      type: "video",
      youtubeId: "dQw4w9WgXcQ",
      tech: ["Unity", "C#"],
      buttons: [
        { text: "GitHub", link: "https://github.com/yourrepo" },
        { text: "Play Demo", link: "https://itch.io/demo-link" }
      ]
    },
     {
      title: "Shooter Prototype",
      type: "video",
      youtubeId: "dQw4w9WgXcQ",
      tech: ["Unity", "C#"],
      buttons: [
        { text: "GitHub", link: "https://github.com/yourrepo" },
        { text: "Play Demo", link: "https://itch.io/demo-link" }
      ]
    }
  ],

  "3D & Animation": [
    {
      title: "Character Animation",
      type: "image",
      image: anim1,
      tech: ["Blender"],
      buttons: [
        { text: "ArtStation", link: "https://artstation.com/project" },
        { text: "View Render", link: "https://drive-link-or-gallery" }
      ]
    },
     {
      title: "Character Animation",
      type: "image",
      image: anim1,
      tech: ["Blender"],
      buttons: [
        { text: "ArtStation", link: "https://artstation.com/project" },
        { text: "View Render", link: "https://drive-link-or-gallery" }
      ]
    },
     {
      title: "Character Animation",
      type: "image",
      image: anim1,
      tech: ["Blender"],
      buttons: [
        { text: "ArtStation", link: "https://artstation.com/project" },
        { text: "View Render", link: "https://drive-link-or-gallery" }
      ]
    },
     {
      title: "Character Animation",
      type: "image",
      image: anim1,
      tech: ["Blender"],
      buttons: [
        { text: "ArtStation", link: "https://artstation.com/project" },
        { text: "View Render", link: "https://drive-link-or-gallery" }
      ]
    },
     {
      title: "Character Animation",
      type: "image",
      image: anim1,
      tech: ["Blender"],
      buttons: [
        { text: "ArtStation", link: "https://artstation.com/project" },
        { text: "View Render", link: "https://drive-link-or-gallery" }
      ]
    },
     {
      title: "Character Animation",
      type: "image",
      image: anim1,
      tech: ["Blender"],
      buttons: [
        { text: "ArtStation", link: "https://artstation.com/project" },
        { text: "View Render", link: "https://drive-link-or-gallery" }
      ]
    },
    
  ],

  "Video Editing": [
    {
      title: "Gaming Montage",
      type: "video",
      youtubeId: "VIDEO_ID",
      tech: ["Premiere Pro"],
      buttons: [
        { text: "Watch Video", link: "https://youtube.com/watch?v=VIDEO_ID" },
        { text: "Project Files", link: "#" }
      ]
    }
  ]
};

/* PROJECT CARD COMPONENT */

const ProjectCard = ({ project }) => {
    const [play, setPlay] = useState(false);

    return (
        <div className="project-card">

            {/* VIDEO PROJECT */}
            {project.type === "video" && (
                <div className="video-container">

                    {!play ? (
                        <div
                            className="video-thumbnail"
                            onClick={() => setPlay(true)}
                        >
                            <img
                                src={`https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`}
                                alt={project.title}
                            />

                            <div className="play-button">▶</div>
                        </div>
                    ) : (
                        <iframe
                            src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1`}
                            title={project.title}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    )}

                </div>
            )}

            {/* IMAGE PROJECT */}
            {project.type === "image" && (
                <div className="image-container">
                    <img src={project.image} alt={project.title} />
                </div>
            )}

            {/* PROJECT CONTENT */}

            <div className="project-content">

                <h3>{project.title}</h3>

                <div className="tech-tags">
                    {project.tech.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>
                <div className="project-buttons">
                    {project.buttons.map((btn, index) => (
                        <a
                            key={index}
                            href={btn.link}
                            className="project-btn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {btn.text}
                        </a>
                    ))}
                </div>

            </div>

        </div>
    );
};

/* PROJECT SECTION */

const Projects = () => {
    return (
        <section className="projects" id="projects">

            <h2 className="projects-title">
                My <span className="accent">Projects</span>
            </h2>

            {Object.entries(projectGroups).map(([category, projects]) => (
                <div className="project-category" key={category}>

                    <h3 className="category-title">{category}</h3>

                    <div className="projects-grid">

                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} />
                        ))}

                    </div>

                </div>
            ))}

        </section>
    );
};

export default Projects;
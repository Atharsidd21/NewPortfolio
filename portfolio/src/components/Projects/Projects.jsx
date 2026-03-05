import { useState } from "react";
import "./Projects.css";
import FadeIn from "../FadeIn/FadeIn";

/* Project Data */

const projectGroups = {
    "Game Development": [
        {
            title: "Shooter Prototype",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Unity", "C#"],
            projectLink: "#"
        },
        {
            title: "Platformer Game",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Unity", "Blender"],
            projectLink: "#"
        },
        {
            title: "Platformer Game",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Unity", "Blender"],
            projectLink: "#"
        },
        {
            title: "Platformer Game",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Unity", "Blender"],
            projectLink: "#"
        },
        {
            title: "Platformer Game",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Unity", "Blender"],
            projectLink: "#"
        },
        {
            title: "Platformer Game",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Unity", "Blender"],
            projectLink: "#"
        }
    ],

    "3D & Animation": [
        {
            title: "Character Animation",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Blender"],
            projectLink: "#"
        },
        {
            title: "Character Animation",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Blender"],
            projectLink: "#"
        },
        {
            title: "Character Animation",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Blender"],
            projectLink: "#"
        },
        {
            title: "Character Animation",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Blender"],
            projectLink: "#"
        },
        {
            title: "Character Animation",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Blender"],
            projectLink: "#"
        },
        {
            title: "Character Animation",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Blender"],
            projectLink: "#"
        }
    ],

    "Video Editing": [
        {
            title: "Asset Automation Tool",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Python"],
            projectLink: "#"
        },
        {
            title: "Asset Automation Tool",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Python"],
            projectLink: "#"
        },
        {
            title: "Asset Automation Tool",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Python"],
            projectLink: "#"
        },
        {
            title: "Asset Automation Tool",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Python"],
            projectLink: "#"
        },
        {
            title: "Asset Automation Tool",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Python"],
            projectLink: "#"
        },
        {
            title: "Asset Automation Tool",
            youtubeId: "dQw4w9WgXcQ",
            tech: ["Python"],
            projectLink: "#"
        }
    ]
};

/* Video Card Component */

const VideoCard = ({ project }) => {
    const [play, setPlay] = useState(false);

    const thumbnail = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;


    return (
        <div className="project-card">

            <div className="video-container">
                {!play ? (
                    <div
                        className="video-thumbnail"
                        onClick={() => setPlay(true)}
                    >
                        <img src={thumbnail} alt={project.title} />

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

            <div className="project-content">
                <h3>{project.title}</h3>

                <div className="tech-tags">
                    {project.tech.map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>

                <div className="project-buttons">
                    <a href={project.projectLink} className="project-btn">
                        View Project
                    </a>

                    <a
                        href={`https://youtube.com/watch?v=${project.youtubeId}`}
                        className="project-btn secondary"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Watch Video
                    </a>
                </div>
            </div>
        </div>
    );

};

/* Projects Section */

const Projects = () => {
    return (
        <section className="projects" id="projects">

            <h2 className="projects-title">
                My <span className="accent">Projects</span>
            </h2>

            {Object.entries(projectGroups).map(([category, projects]) => (
                <div className="project-category" key={category}>
                    <FadeIn>
                        <h3 className="category-title">{category}</h3>

                        <div className="projects-grid">
                            {projects.map((project) => (
                                <VideoCard key={project.title} project={project} />
                            ))}
                        </div>
                    </FadeIn>
                </div>
            ))}
        </section>
    );
};

export default Projects;
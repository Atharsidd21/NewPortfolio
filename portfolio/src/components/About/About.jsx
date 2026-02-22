import "./About.css";
import FadeIn from "../FadeIn/FadeIn";
const About = () => {
    return (
        <section id="about" className="about">
            <FadeIn>
            <div className="about-container">

                <h2 className="about-title">
                    About <span className="accent">Me</span>
                </h2>

                <p className="about-text">
                    I am a passionate Game Developer with a strong foundation in computer science
                    and a deep interest in building immersive interactive experiences. My core
                    expertise lies in game development using Unity, where I combine programming
                    logic with creative design to develop engaging and performance-optimized games.
                    <br /><br />
                    Alongside development, I bring multidisciplinary skills as a 3D Artist and
                    Animator, allowing me to create game-ready assets, animations, and visual
                    elements that enhance gameplay experience. My understanding of both the
                    technical and artistic aspects of game production enables me to contribute
                    effectively across the entire development pipeline.
                    <br /><br />
                    In addition, I have experience in video editing and content creation, which
                    helps me present projects professionally and communicate ideas visually.
                    <br /><br />
                    I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science,
                    where I continue strengthening my knowledge in programming, software design,
                    and system architecture — skills that directly enhance my capabilities as a
                    game programmer and technical developer.
                </p>


            </div>
            </FadeIn>
        </section>
    );
};

export default About;
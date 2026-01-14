import { useEffect, useState } from "react";
import "./Home.css";
import profile from "../../assets/ProfilePic.png";

const roles = [
    " a Game Developer!",
    "a 3D Artist!",
    "an Animator!",
    "a Video Editor!"
];

const Home = () => {
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentRole.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentRole.length) {
                    setTimeout(() => setIsDeleting(true), 1200);
                }
            } else {
                setText(currentRole.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setRoleIndex((roleIndex + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section id="home" className="home">
            <div className="home-container">

                {/* Left Content */}
                <div className="home-left">
                    <h1 className="hero-title">
                        Hi! <span className="wave">👋</span> <br />
                        I am <span className="accent">Athar Siddiqui</span>
                    </h1>

                    <h2 className="typewriter">
                        I am <span className="accent">{text}</span>
                        <span className="cursor">|</span>
                    </h2>
                </div>

                {/* Right Image */}
                <div className="home-right">
                    <img src={profile} alt="Athar Profile" />
                </div>

            </div>
        </section>
    );
};

export default Home;

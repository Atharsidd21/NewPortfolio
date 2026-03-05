import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FadeIn from "../FadeIn/FadeIn";

const contacts = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/yourusername"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/yourprofile"
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://youtube.com/@yourchannel"
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/yourprofile"
  },
  {
    name: "X/Twitter",
    icon: <FaXTwitter />,
    link: "#"
  },
   {
    name: "Mail",
    icon: <FaEnvelope />,
    link: "mailto:yourmail@email.com"
  }
];

const Contact = () => {
  return (
    <section className="contact" id="contact">
<FadeIn>

      <h2 className="contact-title">
        Get In <span className="accent">Touch</span>
      </h2>

      <div className="contact-grid">

        {contacts.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <div className="contact-icon">
              {item.icon}
            </div>

            <p>{item.name}</p>

          </a>
        ))}

      </div>
</FadeIn>

    </section>
  );
};

export default Contact;
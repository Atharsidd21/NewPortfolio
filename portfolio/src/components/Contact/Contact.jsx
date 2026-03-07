import "./Contact.css";

import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaGithub,
  FaDiscord
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiItchdotio } from "react-icons/si";

const contacts = [
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/atharcreates?igsh=MWdzMzR5emllYndkZw==",
    type: "instagram"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/athar-siddiqui-b584a7227/",
    type: "linkedin"
  },
  {
    name: "YouTube",
    icon: <FaYoutube />,
    link: "https://www.youtube.com/@AtharCreates",
    type: "youtube"
  },
  
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    link: "https://wa.me/918769875899?text=Hello!%20How%20are%20you?",
    type: "whatsapp"
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Atharsidd21",
    type: "github"
  },
  {
    name: "Mail",
    icon: <MdEmail />,
    link: "mailto:athar210221@gmail.com",
    type: "mail"
  },
  {
    name: "Discord",
    icon: <FaDiscord />,
    link: "https://discordapp.com/users/1042077699155431505",
    type: "discord"
  },
  {
    name: "Itch.io",
    icon: <SiItchdotio />,
    link: "https://athar210221gmailcom.itch.io/",
    type: "itch"
  }
];

const Contact = () => {
  return (
    <section className="contact" id="contact">

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
            className={`contact-card ${item.type}`}
          >
            <div className="contact-icon">{item.icon}</div>
            <p>{item.name}</p>
          </a>
        ))}

      </div>

    </section>
  );
};

export default Contact;
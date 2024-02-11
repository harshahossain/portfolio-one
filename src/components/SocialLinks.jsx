import React from "react";
import { FaGithub, FaLinkedin, FaDiscord, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./SocialLinks.css";

export default function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/muhammad-harshapratham",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/harshahossain",
    },
    {
      id: 3,
      child: (
        <>
          WhatsApp <FaWhatsapp size={30} />
        </>
      ),
      href: "https://wa.me/8801730715469",
    },
    {
      id: 4,
      child: (
        <>
          Discord <FaDiscord size={30} />
        </>
      ),
      href: "https://discordapp.com/users/icarus5780",
    },
    {
      id: 5,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:mharshapratham@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/file/d/1oLQD_6ZPkqNb0DgLeJBGVaOKDZX680Pe/view?usp=sharing",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div id="social">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px]" +
              " " +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full
               text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

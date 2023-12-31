import React from "react";
import {  FaLinkedin } from "react-icons/fa";
import {  RiInstagramFill } from "react-icons/ri";
import { FaFacebookF  } from "react-icons/fa";
import "./SocialLinks.css";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Facebook <FaFacebookF size={20} className="github-icon" />
        </>
      ),
      href: "https://www.facebook.com/veoworldwideservices/",
    },

    {
      id: 2,
      child: (
        <>
         Instagram  <RiInstagramFill size={20} className="mail-icon" />
        </>
      ),
      href: "https://www.instagram.com/veoworlwide/",
    },
    {
      id: 3,
      child: (
        <>
          LinkedIn <FaLinkedin size={20} className="linkedin-icon" />
        </>
      ),
      href: "https://www.linkedin.com/company/veo-worldwide-services",
      style: "rounded-tr-md",
    },
  ];

  return (
    <div className="social-links-container">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li key={id} className={`social-link-item ${style}`}>
            <a
              href={href}
              className="social-link-text"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

import config from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Telegram, Twitter } from "iconoir-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "./link";

const socialLinks = [
  { icon: FaGithub, href: config.socials.github, title: "Github" },
  { icon: CiLinkedin, href: config.socials.linkedin, title: "LinkedIn" },
  { icon: FaXTwitter, href: config.socials.twitter, title: "Twitter" },
  { icon: FaInstagram, href: config.socials.instagram, title: "Telegram" },
  { icon: CiMail, href: `mailto:${config.socials.email}`, title: "Email" },
];

const footerLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Tags", href: "/blog/tags" },
  { text: "Contact", href: "/contact" },
];

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex flex-col items-center gap-8 px-2 py-10 lg:py-12 w-full",
        "border-t border-borders text-foreground-secondary text-[17px]",
      )}>
      <div className="flex gap-4 justify-center text-[27px] float left">
        {socialLinks.map((link) => (
          <Link
            key={link.href}
            className="hover:text-accent"
            target="_blank"
            href={link.href}
            aria-label={link.title}>
            <link.icon />
          </Link>
        ))}
      </div>
      <div className="float-right">
        <ul className={cn("flex items-center gap-4 md:gap-6 lg:gap-8")}>
          {footerLinks.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                className="lg:text-lg lg:font-medium hover:text-accent">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-center">
        <p>onurtaskiran.com Copyright </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

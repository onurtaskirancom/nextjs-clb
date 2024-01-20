import config from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "./link";
import Tag from './side-tag'
import Image from "next/image";

const socialLinks = [
  { icon: FaGithub, href: config.socials.github, title: "Github" },
  { icon: CiLinkedin, href: config.socials.linkedin, title: "LinkedIn" },
  { icon: FaXTwitter, href: config.socials.twitter, title: "Twitter" },
  { icon: FaInstagram, href: config.socials.instagram, title: "Telegram" },
  { icon: CiMail, href: `mailto:${config.socials.email}`, title: "Email" },
];

const sidebar = () => {
  return (
    <div className="max-w-md float-left block ml-16 px-5  max-md:ml-0 max-md:px-0 ">
      <h2
        className="text-center font-medium text-xl md:text-2xl mb-2 text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-tahiti-title 
           after:inline-block after:relative after:align-middle after:w-2/5 
           before:bg-tahiti-title before:inline-block before:relative before:align-middle 
           before:w-2/5 before:right-2 after:left-2 text-xl p-4 max-sm:p-1 ">
        About
      </h2>
      <div className="mb-9">
        <Image
          src={"/images/onurtaskiran.jpg"}
          className="mx-auto flex-none w-48 h-48 rounded-full object-cover md:max-w-2xl"
          alt={"onur-taskiran"}
          width={1339}
          height={1363}
        />
        <p className="text-center">
          <strong className="text-[22px] text-center">Onur Taşkıran</strong>
          <br />
          <strong className="dark:text-tahiti-title mt-20">
            Web Developer
          </strong>
        </p>

        <p className="dark:text-tahiti-bio mt-2">
          Hi, I'm Onur Taşkıran👋🏼 I love coding, designing and doing sports. I
          have been working as a Web Developer and Graphic Designer for many
          years. My current focus is coding modern technologies using React &
          Node.js
        </p>
      </div>

      <h2
        className="text-center font-medium text-xl md:text-2xl mb-2 text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-tahiti-title 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-tahiti-title before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4 ">
        Social Media
      </h2>
      <div className="flex gap-4 justify-center text-[47px] mb-12">
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
      <h2
        className="text-center font-medium text-xl md:text-2xl mb-2 text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-tahiti-title 
           after:inline-block after:relative after:align-middle after:w-2/5 
           before:bg-tahiti-title before:inline-block before:relative before:align-middle 
           before:w-2/5 before:right-2 after:left-2 text-xl mb-0 ">
        Tags
      </h2>
      <div className="flex gap-4 justify-center mt-2  text-[26px] ">
        <Tag />
      </div>
      <h2
        className="text-center font-medium text-xl md:text-2xl mb-2 text-center overflow-hidden before:h-[1px] after:h-[1px] after:bg-tahiti-title 
           after:inline-block after:relative after:align-middle after:w-1/4 
           before:bg-tahiti-title before:inline-block before:relative before:align-middle 
           before:w-1/4 before:right-2 after:left-2 text-xl p-4 mt-20">
        Onur Taskiran
      </h2>
      <div className="flex gap-4 justify-center ">
        <Image
          className=""
          src={"/images/onurtaskiran-logo.svg"}
          width={350}
          height={350}
          alt={"onur-taskiran"}
        />
      </div>
      <div className="text-center">
        <p>onurtaskiran.com Copyright </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()}, All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default sidebar;


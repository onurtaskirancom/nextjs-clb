import config from "@/lib/siteConfig";
import Link from "@/components/link";
import ThemeToggle from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/contexts/theme-provider";
import Image from "next/image";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

const Header = () => {
  return (
    <ThemeProvider>
      <div
        className={cn(
          "sticky top-0 z-10 backdrop-blur-[10px] bg-background/80 shadow-sm",
          "transition-colors",
        )}>
        <header className={cn("max-w-container-center flex items-center py-4")}>
          <Link
            href="/"
            className={cn("block sm:block mr-4 dark:text-tahiti-bio")}>
            <Image
              className=""
              src={"/images/onurtaskiran-logo.svg"}
              width={80}
              height={80}
              alt={"onur-taskiran"}
            />
          </Link>
          <Link
            href="/"
            className={cn(
              "xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl hidden md:block lg:block xl:block sm:hidden font-bold mr-auto dark:text-tahiti-bio ",
            )}>
            {config.title}
          </Link>
          <nav>
            <ul className={cn("flex items-center gap-4 md:gap-6 lg:gap-8")}>
              {navLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="lg:text-lg lg:font-medium hover:text-accent">
                    {link.text}
                  </Link>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </ThemeProvider>
  );
};

export default Header;

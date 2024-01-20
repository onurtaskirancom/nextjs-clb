import Link from "@/components/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "iconoir-react";
import Image from "next/image";

const NotFound = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center">
      <h2 className="text-6xl lg:text-[7.5rem] font-medium">404</h2>
      <p className="text-xl lg:text-2xl mb-8">Page not found.</p>
      <Image
        className=""
        src={"/images/onurtaskiran404.png"}
        alt="onurtaskiran-404"
        width={328}
        height={328}
      />
      <Link
        href="/"
        className={cn(
          "px-4 py-2 bg-background-secondary rounded-global border border-borders",
          "flex gap-2 items-center justify-center",
          "hover:bg-background-tertiary",
        )}>
        <span>Go to Home</span>
        <ArrowRight className="text-xs" />
      </Link>
    </main>
  );
};

export default NotFound;

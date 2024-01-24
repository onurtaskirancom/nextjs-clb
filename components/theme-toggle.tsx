// "use client";

// import { Moon } from "@/lib/icons";
// import { SunLight } from "iconoir-react";
// import { useTheme } from "next-themes";
// import { cn } from "@/lib/utils";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuTrigger,
// } from "@/components/dropdown-menu";
// import { useEffect, useState } from "react";

// const ThemeToggle = () => {
//   const [mounted, setMounted] = useState(false);
//   const { theme, themes, resolvedTheme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger
//         aria-label="Theme Toggle"
//         className={cn(
//           "text-sm align-middle p-2 rounded-md",
//           "data-[state=open]:bg-background-secondary hover:bg-background-secondary",
//         )}>
//         {mounted && resolvedTheme === "dark" ? <Moon /> : <SunLight />}
//       </DropdownMenuTrigger>
//       <DropdownMenuContent
//         align="end"
//         sideOffset={10}
//         className={cn(
//           "z-20",
//           "data-[state=open]:animate-slide-up-fade",
//           "data-[state=closed]:animate-slide-down-fade",
//         )}>
//         <DropdownMenuRadioGroup
//           value={theme}
//           onValueChange={setTheme}
//           className={cn(
//             "[&>*]:capitalize",
//             "bg-background-secondary p-1 rounded-md border shadow-md border-borders",
//             "min-w-[120px]",
//           )}>
//           {themes.map((theme) => (
//             <DropdownMenuRadioItem
//               key={theme}
//               value={theme}
//               className={cn(
//                 "px-2 py-1 cursor-pointer rounded-md transition-colors",
//                 "hover:bg-background-tertiary hover:outline-none",
//               )}>
//               {theme}
//             </DropdownMenuRadioItem>
//           ))}
//         </DropdownMenuRadioGroup>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// };

// export default ThemeToggle;

"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import * as Prism from "prismjs";

// import "prismjs/themes/prism-okaidia.css"

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    Prism.highlightAll();
  });

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      onClick={() =>
        setTheme(
          theme === "dark" || resolvedTheme === "dark" ? "light" : "dark",
        )
      }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-gray-900 dark:text-gray-100">
        {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        ) : (
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        )}
      </svg>
    </button>
  );
};

export default ThemeToggle;

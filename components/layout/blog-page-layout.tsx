import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import ScrollButton from "@/components/scroll-button";

const BlogPageLayout = ({
  children,
  title,
  className,
  gridClassName,
  as: Element = "section",
}: {
  children: React.ReactNode;
  title: React.ReactNode;
  gridClassName?: string;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) => {
  return (
    <Element className={className}>
      {/* <h2 className="text-xl lg:text-2xl font-bold mb-8 lg:mb-12">{title}</h2> */}
      <div
        className={cn(
          "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-y-12 2xl:max-w-4xl xl:max-w-3xl lg:max-w-lg md:max-w-lg sm:max-w-lg float-left  ",
          gridClassName,
        )}>
        {children}
      </div>

      <Sidebar />

      <ScrollButton />
    </Element>
  );
};

export default BlogPageLayout;

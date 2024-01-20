import { cn, formatDate, isArrayNotEmpty, slugify } from "@/lib/utils";
import PostTag from "./post-tag";
import Link from "@/components/link";
import Image from "@/components/image";
import { MdDateRange } from "react-icons/md";

type BlogCardProps = {
  img?: string;
  date: Date | string;
  title: string;
  desc: string;
  tags?: string[];
  href: string;
  className?: string;
  priority?: boolean;
};

const BlogCard = ({
  title,
  desc,
  tags,
  date,
  img,
  href,
  className,
  priority = false,
}: BlogCardProps) => {
  return (
    <article className={className}>
      <Link href={href}>
        {img && (
          <Image
            className="mb-6 rounded-xl"
            src={img}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            alt={title}
            priority={priority}
          />
        )}
      </Link>
      <div>
        <MdDateRange className="text[27px] mt-0.4 float-left  dark:text-tahiti-title " />
        <p
          className={cn(
            "text-accent text-sm font-medium mb-4 dark:text-tahiti-title",
          )}>
          {formatDate(date)}
        </p>
        <h3
          className={cn(
            "font-medium text-xl md:text-2xl mb-2 hover:underline",
          )}>
          <Link href={href}>{title}</Link>
        </h3>
        <p className={cn("text-foreground-secondary dark:text-tahiti-bio")}>
          {desc}
        </p>
        {isArrayNotEmpty(tags) && (
          <div className={cn("mt-4 flex gap-2 flex-wrap")}>
            {tags.map((tag) => (
              <Link key={tag} href={`/blog/tags/${slugify(tag)}`}>
                <PostTag>{tag}</PostTag>
              </Link>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogCard;

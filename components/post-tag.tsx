import { cn } from "@/lib/utils";

const tagColors = [
  "dark:text-stone-900 dark:bg-tahiti-title text-purple-950 bg-tahiti-name rounded-lg",
];
let currentIdx = 0;

const PostTag = ({ children }: { children: string }) => {
  const tagColor = tagColors[currentIdx++];
  currentIdx = currentIdx >= tagColors.length ? 0 : currentIdx;

  return (
    <p className={cn("tag", tagColor)}>
      <span className="align-middle">{children}</span>
    </p>
  );
};

export default PostTag;

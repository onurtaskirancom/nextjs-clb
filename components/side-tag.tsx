import Link from "@/components/link";
import Tag from "@/components/tag";
import PostTag from "./post-tag";
import { cn, formatDate, isArrayNotEmpty, slugify } from "@/lib/utils";
import Image from "@/components/image";
import { MdDateRange } from "react-icons/md";

// import { slug } from "github-slugger";
import tagData from "app/tag-data.json";
// import { genPageMetadata } from "app/seo";

export const metadata = {
  title: "Tags",
  description: "Things I blog about",
};

export default async function Page() {
  const tagCounts = tagData as Record<string, number>;
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);
  return (
    <>
      <div className="max-w-xs">
        <div className="float-left">
          {tagKeys.length === 0 && "No tags found."}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="float-right mr-1">
                {/* <Tag text={t} /> */}
                <Link key={t} href={`/blog/tags/${slugify(t)}`}>
                  <PostTag>{t}</PostTag>
                  {/* {` (${tagCounts[t]})`} */}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

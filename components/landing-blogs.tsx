import { truncate } from "@/lib/helper-functions";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import { SectionHeading } from "./section-heading";
import { MotionDiv } from "./motion-div";

export async function LandingBlogs() {
  const allBlogs = await getBlogs();

  return (
    <div className="">
      <SectionHeading delay={0.4} className="pb-4">
        Sharing knowledge as I learn
      </SectionHeading>
      <div className="flex flex-col gap-4">
        {allBlogs.map((blog, idx) => (
          <MotionDiv
            initial={{
              opacity: 0,
              y: 10,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
            }}
            key={blog.title}
          >
            <Link href={`/blog/${blog.slug}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold tracking-tight text-primary">
                  {blog.title}
                </h2>
                <p className="max-w-lg pt-4 text-sm text-secondary md:text-sm">
                  {blog.date &&
                    new Date(blog.date).toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                </p>
              </div>
              <p className="max-w-lg pt-2 text-sm text-secondary md:text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
}

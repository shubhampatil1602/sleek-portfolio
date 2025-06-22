import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/container";
import { truncate } from "@/lib/helper-functions";
import { getBlogs } from "@/utils/mdx";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { Scales } from "@/components/scales";

export const metadata: Metadata = {
  title: "All blogs | Shubham Patil",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 pt-20 sm:px-8 md:pb-10">
        <Scales />
        <Heading>All blogs</Heading>
        <SubHeading>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as an intern and looking
          for a frontend engineer or full stack engineer role.
        </SubHeading>

        <div className="my-5 flex flex-col gap-8 border-y border-neutral-100 px-4 py-5 shadow-sectionInset dark:border-neutral-800 dark:shadow-sectionInsetDark">
          {allBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.title}>
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
              <p className="max-w-lg text-sm text-secondary md:text-sm">
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

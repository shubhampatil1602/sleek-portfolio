import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Container } from "@/components/container";
import { truncate } from "@/lib/helper-functions";
import { getBlogs } from "@/utils/mdx";

export const metadata: Metadata = {
  title: "All blogs - Shubham Patil",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();
  return (
    <div className='flex min-h-screen items-start justify-start'>
      <Container className='min-h-[200vh] p-4 md:pt-20 md:pb-10'>
        <h1 className='text-primary text-2xl font-bold tracking-tight md:text-4xl'>
          All blogs
        </h1>
        <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
          I&apos;m a software engineer with a passion for building scalable and
          efficient systems. I&apos;m currently working as an intern and looking
          for a frontend engineer or full stack engineer role.
        </p>

        <div className='flex flex-col gap-4 py-10'>
          {allBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.title}>
              <div className='flex items-center justify-between'>
                <h2 className='text-primary text-base font-bold tracking-tight'>
                  {blog.title}
                </h2>
                <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
                  {blog.date &&
                    new Date(blog.date).toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                </p>
              </div>
              <p className='text-secondary max-w-lg text-sm md:text-sm'>
                {truncate(blog.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

import { truncate } from "@/lib/helper-functions";
import { getBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";

export async function LandingBlogs() {
  const allBlogs = await getBlogs();

  return (
    <div className=''>
      <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm mb-12'>
        I love writing things down
      </p>
      <div className='flex flex-col gap-4'>
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
            <p className='text-secondary max-w-lg text-sm md:text-sm pt-2'>
              {truncate(blog.description || "", 150)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

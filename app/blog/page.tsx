import { Metadata } from "next";
import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Heading } from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { Scales } from "@/components/scales";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "All blogs | Shubham Patil",
  description: "All my general wisdom and thoughts",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  // Extract unique tags from all blogs
  const allTags = Array.from(
    new Set(allBlogs.flatMap((blog) => blog.tags)),
  ).sort();

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

        <BlogList blogs={allBlogs} tags={allTags} />
      </Container>
    </div>
  );
}

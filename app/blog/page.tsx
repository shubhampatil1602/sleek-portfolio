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
          I write about programming, networking fundamentals, generative AI, and
          how systems work behind the scenes. I also document my learning
          journey and share insights from the projects I build.
        </SubHeading>

        <BlogList blogs={allBlogs} tags={allTags} />
      </Container>
    </div>
  );
}

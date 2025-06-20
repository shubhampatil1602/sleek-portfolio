import { Container } from "@/components/container";
import { redirect } from "next/navigation";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { Scales } from "@/components/scales";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);
  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " by Shubham Patil",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 pt-20 md:pb-10">
        <Scales />
        <Image
          src={blog.frontmatter.image}
          alt={blog.frontmatter.title}
          width={800}
          height={400}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
          priority
        />
        <div className="prose prose-sm mx-auto dark:prose-invert">
          {blog.content}
        </div>
      </Container>
    </div>
  );
}

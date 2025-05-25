import { Container } from "@/components/container";

import { redirect } from "next/navigation";

import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const frontmatter = await getBlogFrontMatterBySlug(params.slug);
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

export default async function SingleBlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = params.slug;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-10 md:pb-10 md:pt-20">
        <img
          src={blog.frontmatter.image}
          alt={blog.frontmatter.title}
          className="mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl border border-neutral-200 object-cover shadow-xl"
        />
        <div className="prose mx-auto">{blog.content}</div>
      </Container>
    </div>
  );
}

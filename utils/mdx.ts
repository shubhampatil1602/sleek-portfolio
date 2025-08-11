import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

type FrontMatter = {
  tag: string;
  title: string;
  date: string;
  description: string;
  image: string;
};

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "data", `${slug}.mdx`),
      "utf-8",
    );

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    if (!singleBlog) return null;

    return {
      content,
      frontmatter,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getBlogs = async () => {
  const files = await fs.readdir(path.join(process.cwd(), "data"));

  const allBlogs = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".mdx", "");
      const frontMatter = await getBlogFrontMatterBySlug(slug);

      return {
        slug,
        ...frontMatter,
      };
    }),
  );

  return allBlogs;
};

export const getBlogFrontMatterBySlug = async (slug: string) => {
  const singleBlog = await fs.readFile(
    path.join(process.cwd(), "data", `${slug}.mdx`),
    "utf-8",
  );

  if (!singleBlog) return null;

  const { frontmatter } = await compileMDX<FrontMatter>({
    source: singleBlog,
    options: { parseFrontmatter: true },
  });

  return frontmatter;
};

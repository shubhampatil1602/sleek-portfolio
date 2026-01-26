import { promises as fs } from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

type FrontMatter = {
  tag?: string; // support legacy singular tag
  tags?: string[] | string;
  title: string;
  date: string;
  description: string;
  image: string;
};

export type Blog = {
  slug: string;
  tags: string[];
  title: string;
  date: string;
  description: string;
  image: string;
};

export function normalizeTags(frontmatter: FrontMatter): string[] {
  const { tags, tag } = frontmatter;

  // If tags array exists, use it
  if (Array.isArray(tags)) {
    return tags;
  }

  // If tags is a string (comma-separated), split it
  if (typeof tags === "string") {
    return tags.split(",").map((t) => t.trim());
  }

  // If single tag exists, convert to array
  if (typeof tag === "string") {
    return [tag];
  }

  // No tags
  return [];
}

export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "data", `${slug}.mdx`),
      "utf-8",
    );

    const { content, frontmatter } = await compileMDX<FrontMatter>({
      source: singleBlog,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    if (!singleBlog) return null;

    return {
      content,
      frontmatter: {
        ...frontmatter,
        tags: normalizeTags(frontmatter),
      },
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

      if (!frontMatter) return null;

      return {
        slug,
        ...frontMatter,
        tags: normalizeTags(frontMatter),
      };
    }),
  );

  return allBlogs
    .filter((blog): blog is Blog => blog !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
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

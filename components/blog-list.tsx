"use client";

import { useState, useMemo } from "react";
import { Link } from "next-view-transitions";
import { truncate } from "@/lib/helper-functions";
import { Button } from "@/components/button";

interface Blog {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
}

interface BlogListProps {
  blogs: Blog[];
  tags: string[];
}

const POSTS_PER_PAGE = 5;

export function BlogList({ blogs, tags }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and search logic
  const filteredBlogs = useMemo(() => {
    let result = blogs;

    // Filter by tag
    if (selectedTag) {
      result = result.filter((blog) => blog.tags.includes(selectedTag));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.description.toLowerCase().includes(query),
      );
    }

    return result;
  }, [blogs, selectedTag, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / POSTS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredBlogs.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredBlogs, currentPage]);

  // Reset to page 1 when filters change
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleTagChange = (tag: string | null) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <div className="my-5 flex flex-col gap-8 border-y border-neutral-100 px-4 py-5 shadow-sectionInset dark:border-neutral-800 dark:shadow-sectionInsetDark">
      {/* Search Bar */}
      <div className="space-y-4">
        <input
          placeholder="Search blogs..."
          className="w-full rounded-[6px] bg-white px-4 py-3 text-sm text-neutral-700 shadow-custom focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200"
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
        />

        {/* Tag Filter */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              onClick={() => handleTagChange(null)}
              active={selectedTag === null}
            >
              All
            </Button>
            {tags.map((tag) => (
              <Button
                key={tag}
                type="button"
                onClick={() => handleTagChange(tag)}
                active={selectedTag === tag}
              >
                {tag}
              </Button>
            ))}
          </div>
        )}

        {/* Results count */}
        <p className="text-sm text-secondary">
          Showing {paginatedBlogs.length} of {filteredBlogs.length} posts
        </p>
      </div>

      {/* Blog List */}
      {paginatedBlogs.length === 0 ? (
        <div className="py-12 text-center text-secondary">
          No blogs found matching your criteria.
        </div>
      ) : (
        <div className="flex flex-col gap-8">
          {paginatedBlogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} key={blog.slug}>
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
                {truncate(blog.description, 150)}
              </p>
              {blog.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-[6px] border border-neutral-200 bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2">
          <Button
            type="button"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          >
            Previous
          </Button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              // Show first page, last page, current page, and pages around current
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <Button
                    key={page}
                    type="button"
                    onClick={() => setCurrentPage(page)}
                    active={currentPage === page}
                  >
                    {page}
                  </Button>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <span key={page} className="px-2 py-1 text-sm text-secondary">
                    ...
                  </span>
                );
              }
              return null;
            })}
          </div>

          <Button
            type="button"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}

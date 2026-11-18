"use client";

import { useMemo, useRef, useState } from "react";

import { type Project } from "@/constants/projects";
import { Button } from "@/components/button";
import { Pagination } from "@/components/pagination";
import { ProjectGrid } from "@/components/projects";
import { SectionHeading } from "@/components/section-heading";

const PROJECTS_PER_PAGE = 6;

export function ProjectList({ projects }: { projects: Project[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const listTopRef = useRef<HTMLDivElement>(null);

  const filteredProjects = useMemo(() => {
    let result = projects;

    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.stack.some((s) => s.toLowerCase().includes(query)),
      );
    }

    return result;
  }, [projects, searchQuery]);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    listTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setCurrentPage(1);
  };

  return (
    <div
      ref={listTopRef}
      className="my-4 flex scroll-mt-20 flex-col gap-6 border-y border-neutral-100 px-4 py-6 shadow-sectionInset dark:border-neutral-800 dark:shadow-sectionInsetDark"
    >
      <SectionHeading delay={0.2}>Things I&apos;ve built</SectionHeading>

      <div className="space-y-4">
        <input
          placeholder="Search by name, description or tech..."
          aria-label="Search projects"
          className="w-full rounded-[6px] bg-white px-4 py-3 text-sm text-neutral-700 shadow-custom focus:outline-none focus:ring-2 focus:ring-neutral-300 dark:bg-neutral-800 dark:text-neutral-200"
          type="search"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
        />

        <p className="text-sm text-secondary" aria-live="polite">
          Showing {paginatedProjects.length} of {filteredProjects.length}{" "}
          projects
        </p>
      </div>

      {paginatedProjects.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-12 text-center text-secondary">
          No projects found matching your criteria.
          <Button type="button" onClick={clearSearch}>
            Clear search
          </Button>
        </div>
      ) : (
        // Re-key so the card entrance animation replays on page change
        // (not on search, which would flicker on every keystroke)
        <ProjectGrid key={currentPage} projects={paginatedProjects} />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

"use client";

import { Button } from "@/components/button";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2"
    >
      <Button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
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
                onClick={() => onPageChange(page)}
                active={currentPage === page}
                aria-current={currentPage === page ? "page" : undefined}
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
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </Button>
    </nav>
  );
}

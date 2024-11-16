interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export function Pagination({
  currentPage,
  onPageChange,
  hasNext,
  hasPrevious,
}: PaginationProps) {
  return (
    <div>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!hasPrevious}
      >
        Previous
      </button>
      <span>Page {currentPage}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={!hasNext}>
        Next
      </button>
    </div>
  );
}

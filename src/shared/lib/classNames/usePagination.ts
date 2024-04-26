import { useState } from "react";

interface UsePaginationResult {
  page: number;
  onPageChange: (page: number) => void;
}

export function usePagination(): UsePaginationResult {
  const [page, setPage] = useState(
    Number(localStorage.getItem("lastPage") ?? 1)
  );

  const onPageChange = (page: number) => {
    setPage(page);
    localStorage.setItem("lastPage", page.toString());
  };

  return { page, onPageChange };
}

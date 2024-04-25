import { Button } from "src/shared/ui/Button/Button";
import cls from "./Pagination.module.scss";
import { classNames } from "src/shared/lib/classNames/classNames";

interface PaginationProps {
  className?: string;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
  const { page, totalPages, onPageChange } = props;

  const prevPage = page > 1 ? page - 1 : 1;
  const nextPage = page < totalPages ? page + 1 : totalPages;

  return (
    <div className={classNames(cls.Pagination)}>
      <Button
        onClick={() => onPageChange(prevPage)}
        //disabled={page === 1}
      >
        Предыдущая
      </Button>

      {Array.from({ length: 4 }, (_, i) => i + 1).map((pageNumber) => (
        <Button
          key={pageNumber}
          className={pageNumber === page ? cls.select : ""}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}

      <Button
        className={5 === page || page > 5 ? cls.select : ""}
        onClick={() => onPageChange(page > 5 ? page : 5)}
      >
        {page > 5 ? page : 5}
      </Button>

      <Button
        onClick={() => onPageChange(nextPage)}
        //disabled={page === totalPages}
      >
        Следующая
      </Button>
    </div>
  );
};

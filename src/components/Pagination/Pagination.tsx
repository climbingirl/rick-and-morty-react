import { setCurrentPage } from '../../redux/charactersSlice';
import { useAppDispatch } from '../../redux/hooks';
import './Pagination.scss';

interface PaginationProps {
  totalPage: number;
  currentPage: number;
}

function Pagination({ totalPage, currentPage }: PaginationProps) {
  const dispatch = useAppDispatch();

  const paginationItems: JSX.Element[] = [];
  for (let i = 1; i <= totalPage; i++) {
    let className = 'pagination__item';
    if (i === currentPage) {
      className += ' active';
    }
    paginationItems.push(
      <div className={className} key={i} data-id={i}>
        {i}
      </div>
    );
  }

  function handleClick(e: React.MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    const page = Number(target.dataset.id);
    dispatch(setCurrentPage(page));
  }

  return (
    <div className="pagination">
      <div className="pagination__inner" onClick={handleClick}>
        {paginationItems}
      </div>
    </div>
  );
}

export default Pagination;

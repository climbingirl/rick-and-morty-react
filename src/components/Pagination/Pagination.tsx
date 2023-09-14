import { useSearchParams } from 'react-router-dom';
import './Pagination.scss';

function Pagination(props: { totalPage: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const paginationItems: JSX.Element[] = [];
  for (let i = 1; i <= props.totalPage; i++) {
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
    const id = target.dataset.id;
    if (id && id !== '1') {
      searchParams.set('page', id);
      setSearchParams(searchParams);
    } else if (id && id === '1') {
      searchParams.delete('page');
      setSearchParams(searchParams);
    }
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

import { useAppSelector } from '../redux/hooks/useAppSelector';
import { useAppDispatch } from '../redux/hooks/useAppDispatch';
import './Pagination.scss';
import { setCharactersCurrentPageAction } from '../redux/characters/actions';

function Pagination(props: { totalPage: number }) {
  const { currentPage } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();

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
    const page = Number(target.dataset.id);
    dispatch(setCharactersCurrentPageAction(page));
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

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchCharacters, setInitSearchParams } from '../../redux/charactersSlice';
import CharacterList from '../../components/CharacterList/CharacterList';
import CharacterSearch from '../../components/Search/CharacterSearch/CharacterSearch';
import CharacterPopup from '../../components/CharacterPopup/CharacterPopup';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import './Characters.scss';

function Characters() {
  const {
    status,
    characters,
    totalPage,
    error,
    searchText,
    currentPage,
    initialSearchParamsApplied,
  } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name') || '';
  const pageParam = searchParams.get('page') || '';

  useEffect(() => {
    if (!initialSearchParamsApplied) {
      const pageNumber = Number(pageParam) || 1;
      dispatch(setInitSearchParams({ name: nameParam, page: pageNumber }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (initialSearchParamsApplied) {
      dispatch(fetchCharacters({ name: searchText, page: currentPage }));
      applyCurrentSearchParams();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, currentPage, initialSearchParamsApplied]);

  function applyCurrentSearchParams() {
    if (searchText) {
      searchParams.set('name', searchText);
    } else {
      searchParams.delete('name');
    }
    if (currentPage > 1) {
      searchParams.set('page', String(currentPage));
    } else {
      searchParams.delete('page');
    }
    setSearchParams(searchParams);
  }

  if (status === 'loading') {
    return (
      <div className="characters__loader">
        <Loader />
      </div>
    );
  }

  return (
    <section className="characters container" aria-label="Api page">
      <CharacterSearch />
      {status === 'failed' ? (
        <div className="characters__empty" aria-label="Characters not found">
          {error}
        </div>
      ) : (
        <>
          <CharacterList characters={characters} />
          <Pagination totalPage={totalPage} currentPage={currentPage} />
          <CharacterPopup />
        </>
      )}
    </section>
  );
}

export default Characters;

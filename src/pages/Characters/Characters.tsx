import { useEffect } from 'react';
import { useAppSelector } from '../../components/redux/hooks/useAppSelector';
import { useSearchParams } from 'react-router-dom';
import { useActions } from '../../components/redux/hooks/useActions';
import CharacterList from '../../components/CharacterList/CharacterList';
import CharacterSearch from '../../components/Search/CharacterSearch/CharacterSearch';
import CharacterPopup from '../../components/CharacterPopup/CharacterPopup';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import './Characters.scss';

function Characters() {
  const {
    isLoading,
    characters,
    totalPage,
    error,
    searchText,
    currentPage,
    isSearchParamsApplied,
  } = useAppSelector((state) => state.characters);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameParam = searchParams.get('name') || '';
  const pageParam = searchParams.get('page') || '';
  const { fetchCharacters, setCharactersSearchParams } = useActions();

  useEffect(() => {
    if (!isSearchParamsApplied) {
      const pageNumber = Number(pageParam) || 1;
      setCharactersSearchParams(nameParam, pageNumber);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isSearchParamsApplied) {
      fetchCharacters(searchText, currentPage);
      applyCurrentSearchParams();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText, currentPage, isSearchParamsApplied]);

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

  if (isLoading) {
    return (
      <div className="characters__loader">
        <Loader />
      </div>
    );
  }

  return (
    <section className="characters container" aria-label="Api page">
      <CharacterSearch />
      {error ? (
        <div className="characters__empty" aria-label="Characters not found">
          {error}
        </div>
      ) : (
        <>
          <CharacterList characters={characters} />
          <Pagination totalPage={totalPage} />
          <CharacterPopup />
        </>
      )}
    </section>
  );
}

export default Characters;

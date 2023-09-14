import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import CharacterSearch from '../../components/Search/CharacterSearch/CharacterSearch';
import { Character } from '../../types/models';
import { getCharactersData } from './service';
import { useSearchParams } from 'react-router-dom';
import CharacterPopup from '../../components/CharacterPopup/CharacterPopup';
import Loader from '../../components/Loader/Loader';
import Pagination from '../../components/Pagination/Pagination';
import './Characters.scss';

export const SEARCH_VALUE_KEY = 'rssReactIvanovaSearchNameValue';

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searcParams, setSearchParams] = useSearchParams();
  const name = searcParams.get('name') || '';
  const page = searcParams.get('page') || '';
  const popup = searcParams.get('popup') || '';
  const [isLoading, setIsLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const storedName = localStorage.getItem(SEARCH_VALUE_KEY) || '';
    const loadCharacters = async (name: string, page: string) => {
      setIsLoading(true);
      const [charactersArr, pages] = await getCharactersData(name, page);
      setIsLoading(false);
      setCharacters(charactersArr);
      setTotalPage(pages);
    };

    if (name || page || popup) {
      localStorage.setItem(SEARCH_VALUE_KEY, name);
      loadCharacters(name, page);
    } else if (!name && storedName) {
      setSearchParams({ name: storedName });
    } else {
      loadCharacters('', '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, page]);

  return (
    <section className="characters container" aria-label="Api page">
      <CharacterSearch isLoading={isLoading} />
      {isLoading ? (
        <div className="characters__loader">
          <Loader />
        </div>
      ) : (
        <CharacterList characters={characters} />
      )}
      <Pagination totalPage={totalPage} />
      <CharacterPopup />
    </section>
  );
}

export default Characters;

import { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';
import CharacterSearch from '../../components/Search/CharacterSearch/CharacterSearch';
import { Character } from '../../types/models';
import { getCharacters } from './service';
import { useSearchParams } from 'react-router-dom';
import CharacterPopup from '../../components/CharacterPopup/CharacterPopup';
import Loader from '../../components/Loader/Loader';
import './Characters.scss';

export const SEARCH_VALUE_KEY = 'rssReactIvanovaSearchNameValue';

function Characters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searcParams, setSearchParams] = useSearchParams();
  const name = searcParams.get('name') || '';
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem(SEARCH_VALUE_KEY) || '';
    const loadCharacters = async (name: string) => {
      setIsLoading(true);
      const data = await getCharacters(name);
      setIsLoading(false);
      setCharacters(data);
    };

    if (!name && storedName) {
      setSearchParams({ name: storedName });
    } else if (name) {
      localStorage.setItem(SEARCH_VALUE_KEY, name);
      loadCharacters(name);
    } else {
      loadCharacters('');
    }
  }, [name, setSearchParams]);

  return (
    <section className="characters container" aria-label="Api page">
      <CharacterSearch />
      {isLoading ? (
        <div className="characters__loader">
          <Loader />
        </div>
      ) : (
        <CharacterList characters={characters} />
      )}
      <CharacterPopup />
    </section>
  );
}

export default Characters;

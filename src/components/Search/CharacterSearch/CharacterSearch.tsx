import { useSearchParams } from 'react-router-dom';
import { SEARCH_VALUE_KEY } from '../../../pages/Characters/Characters';
import { createRef, useEffect } from 'react';
import '../SearchForm.scss';

function CharacterSearch() {
  const [searcParams, setSearchParams] = useSearchParams();
  const name = searcParams.get('name') || '';
  const inputRef = createRef<HTMLInputElement>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = inputRef.current?.value || '';

    if (!value) {
      setSearchParams({});
    } else {
      setSearchParams({ name: value });
    }
    localStorage.setItem(SEARCH_VALUE_KEY, value);
  }

  return (
    <form className="search__form" onSubmit={handleSubmit} role="search" aria-label="Characters">
      <div className="search__inner">
        <input
          className="search__input"
          defaultValue={name}
          ref={inputRef}
          type="text"
          placeholder="Enter character name"
        />
      </div>
    </form>
  );
}

export default CharacterSearch;

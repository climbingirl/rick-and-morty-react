import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { createRef } from 'react';
import { useActions } from '../../redux/hooks/useActions';
import '../SearchForm.scss';

function CharacterSearch() {
  const { searchText } = useAppSelector((state) => state.characters);
  const { setCharactersSearchText } = useActions();
  const inputRef = createRef<HTMLInputElement>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = inputRef.current?.value || '';
    setCharactersSearchText(text);
  }

  return (
    <form className="search__form" onSubmit={handleSubmit} role="search" aria-label="Characters">
      <div className="search__inner">
        <input
          className="search__input"
          defaultValue={searchText}
          ref={inputRef}
          type="text"
          placeholder="Enter character name"
        />
        <button className="search__btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default CharacterSearch;

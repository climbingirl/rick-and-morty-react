import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useAppDispatch } from '../../redux/hooks/useAppDispatch';
import { createRef } from 'react';
import { setCharactersSearchTextAction } from '../../redux/characters/actions';
import '../SearchForm.scss';

function CharacterSearch() {
  const { searchText } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const inputRef = createRef<HTMLInputElement>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const text = inputRef.current?.value || '';
    dispatch(setCharactersSearchTextAction(text));
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

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setSearchText } from '../../../redux/charactersSlice';
import '../SearchForm.scss';

function CharacterSearch() {
  const { searchText } = useAppSelector((state) => state.characters);
  const dispatch = useAppDispatch();
  const [text, setText] = useState(searchText);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(setSearchText(text));
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  return (
    <form className="search__form" onSubmit={handleSubmit} role="search" aria-label="Characters">
      <div className="search__inner">
        <input
          className="search__input"
          value={text}
          type="text"
          placeholder="Enter character name"
          onChange={handleChange}
        />
        <button className="search__btn" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default CharacterSearch;

import { useEffect, useState } from 'react';
import '../SearchForm.scss';

function Search() {
  const SEARCH_VALUE_KEY = 'rssReactIvanovaProductSearchValue';
  const initialSearchValue = localStorage.getItem(SEARCH_VALUE_KEY) || '';
  const [searchValue, setSearchValue] = useState(initialSearchValue);

  useEffect(() => {
    localStorage.setItem(SEARCH_VALUE_KEY, searchValue);
  }, [searchValue]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <form
        className="search__form"
        onSubmit={handleSubmit}
        role="search"
        aria-label="Product cards"
      >
        <div className="search__inner">
          <input
            className="search__input"
            type="text"
            value={searchValue}
            placeholder="Enter search text"
            onChange={handleChange}
          />
        </div>
      </form>
    </>
  );
}

export default Search;

import React from 'react';
import './Search.scss';

interface SearchState {
  searchValue: string;
}

class Search extends React.Component<Record<string, never>, SearchState> {
  SEARCH_VALUE_KEY = 'rssReactIvanovaSearchValue';

  constructor(props: Record<string, never>) {
    super(props);
    this.state = { searchValue: '' };
  }

  componentDidMount() {
    const savedSearchValue = localStorage.getItem(this.SEARCH_VALUE_KEY);
    if (savedSearchValue) this.setState({ searchValue: savedSearchValue });
  }

  componentDidUpdate() {
    this.setSearchValue();
  }

  componentWillUnmount() {
    this.setSearchValue();
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: e.target.value });
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  setSearchValue() {
    const value = this.state.searchValue;
    localStorage.setItem(this.SEARCH_VALUE_KEY, value);
  }

  render() {
    return (
      <>
        <form
          className="search__form"
          onSubmit={this.handleSubmit.bind(this)}
          role="search"
          aria-label="Product cards"
        >
          <div className="search__inner">
            <input
              className="search__input"
              type="text"
              value={this.state.searchValue}
              placeholder="Enter search text"
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </form>
      </>
    );
  }
}

export default Search;

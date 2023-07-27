import React from 'react';
import './Search.scss';

interface SearchState {
  value: string;
}

class Search extends React.Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { value: '' };
  }

  componentDidMount() {
    const savedValue = localStorage.getItem('rssReactIvanovaSearchValue');
    if (savedValue) this.setState({ value: savedValue });
  }

  componentWillUnmount() {
    const value = this.state.value;
    localStorage.setItem('rssReactIvanovaSearchValue', value);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
              value={this.state.value}
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

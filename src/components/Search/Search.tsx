import React from 'react';
import './Search.scss';

class Search extends React.Component {
  state: { value: string };

  constructor() {
    super();
    this.state = { value: '' };
  }

  componentDidMount(): void {
    const savedValue = localStorage.getItem('rssReactIvanovaInputValue');
    if (savedValue) this.setState({ value: savedValue });
  }

  componentWillUnmount(): void {
    const value = this.state.value;
    localStorage.setItem('rssReactIvanovaInputValue', value);
  }

  render(): React.ReactNode {
    return (
      <>
        <form className="search__form" onSubmit={this.handleSubmit.bind(this)}>
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

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e: React.FormEvent): void {
    e.preventDefault();
  }
}

export default Search;

import React from 'react';

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
    localStorage.setItem('rssReactIvanovaInputValue', this.state.value);
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

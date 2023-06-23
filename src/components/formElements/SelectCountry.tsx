import React from 'react';
import ErrorMessage from './ErrorMessage';

class SelectCountry extends React.Component {
  render() {
    return (
      <div className="create__line">
        <label className="create__label" htmlFor="input-country">
          Country
        </label>
        <div className="create__box">
          <select className="create__select" id="input-country" defaultValue={undefined}>
            <option>choose your country</option>
            <option>Thailand</option>
            <option>USA</option>
            <option>Russia</option>
            <option>China</option>
          </select>
          <ErrorMessage error="Error message" />
        </div>
      </div>
    );
  }
}

export default SelectCountry;

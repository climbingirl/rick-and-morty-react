import React from 'react';
import ErrorMessage from './ErrorMessage';

class InputDate extends React.Component {
  render() {
    return (
      <div className="create__line">
        <label className="create__label" htmlFor="input-date">
          Date of birth
        </label>
        <div className="create__box">
          <input className="create__input" id="input-date" type="date" />
          <ErrorMessage error="Error message" />
        </div>
      </div>
    );
  }
}

export default InputDate;

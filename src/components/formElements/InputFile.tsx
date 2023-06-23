import React from 'react';
import ErrorMessage from './ErrorMessage';

class InputFile extends React.Component {
  render() {
    return (
      <div className="create__line">
        <label className="create__label" htmlFor="input-photo">
          Your photo
        </label>
        <div className="create__box">
          <input className="create__input" id="input-photo" type="file" />
          <ErrorMessage error="Error message" />
        </div>
      </div>
    );
  }
}

export default InputFile;

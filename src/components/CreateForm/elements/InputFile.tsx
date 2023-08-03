import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputFileProps {
  forwRef: React.RefObject<HTMLInputElement>;
}

class InputFile extends React.Component<InputFileProps> {
  render() {
    return (
      <div className="create__line">
        <label className="create__label" htmlFor="input-photo">
          Your photo
        </label>
        <div className="create__box">
          <input
            className="create__input"
            id="input-photo"
            type="file"
            ref={this.props.forwRef}
            role="button"
          />
          <ErrorMessage error="Error message" />
        </div>
      </div>
    );
  }
}

export default InputFile;

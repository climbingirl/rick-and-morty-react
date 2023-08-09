import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputFileProps {
  error: string | null;
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
            accept="image/*"
            ref={this.props.forwRef}
            role="button"
          />
          <ErrorMessage error={this.props.error} />
        </div>
      </div>
    );
  }
}

export default InputFile;

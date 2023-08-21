import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputFileProps {
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

class InputFile extends React.Component<InputFileProps> {
  photoInput = this.props.forwRef;

  handlePhotoUpload() {
    if (this.photoInput) {
      this.photoInput.current?.click();
    }
  }

  render() {
    return (
      <div className="create__line" data-testid="file-field">
        <label className="create__label" htmlFor="input-photo">
          Your photo
        </label>
        <div className="create__box">
          <input
            className="create__input create__input_photo"
            id="input-photo"
            type="file"
            accept="image/*"
            ref={this.photoInput}
            data-testId="file"
          />
          <button
            className="create__btn-photo"
            type="button"
            onClick={this.handlePhotoUpload.bind(this)}
          >
            Upload file
          </button>
          <ErrorMessage error={this.props.error} />
        </div>
      </div>
    );
  }
}

export default InputFile;

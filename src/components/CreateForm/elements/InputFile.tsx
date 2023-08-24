import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputFileProps {
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

function InputFile(props: InputFileProps) {
  const photoInput = props.forwRef;

  function handlePhotoUpload() {
    if (photoInput) {
      photoInput.current?.click();
    }
  }

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
          ref={photoInput}
          data-testid="file"
        />
        <button className="create__btn-photo" type="button" onClick={handlePhotoUpload}>
          Upload file
        </button>
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default InputFile;

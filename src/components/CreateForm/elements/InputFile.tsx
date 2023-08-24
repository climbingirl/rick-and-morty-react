import React, { useEffect, useState } from 'react';
import ErrorMessage from './ErrorMessage';

interface InputFileProps {
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

function InputFile(props: InputFileProps) {
  const photoInput = props.forwRef;
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    const fileName = getFileName();
    if (!fileName) {
      setFileName('');
    }
  });

  function handlePhotoUpload() {
    if (photoInput) {
      photoInput.current?.click();
    }
  }

  function handleInputChange() {
    const fileName = getFileName();
    if (fileName) {
      setFileName(fileName);
    }
  }

  function getFileName(): string {
    const fileList = photoInput.current?.files;
    const fileName = (fileList && fileList[0]?.name) || '';
    return fileName;
  }

  return (
    <div className="create__line create__line_file" data-testid="file-field">
      <label className="create__label" htmlFor="input-photo">
        Your photo
      </label>
      <div className="create__box">
        <input
          className="create__input create__input_photo"
          id="input-photo" /*  */
          type="file"
          accept="image/*"
          ref={photoInput}
          data-testid="file"
          onChange={handleInputChange}
        />
        <button className="create__btn-photo" type="button" onClick={handlePhotoUpload}>
          Upload file
        </button>
        <span className="create__file-name" data-testid="file-name">
          {fileName}
        </span>
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default InputFile;

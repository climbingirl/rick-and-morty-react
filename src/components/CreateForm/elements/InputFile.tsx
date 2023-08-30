import { useRef } from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';
import { FormValues } from '../../../types/form';
import ErrorMessage from './ErrorMessage';

interface InputFileProps {
  error: string | undefined;
  register: UseFormRegister<FormValues>;
  watch: UseFormWatch<FormValues>;
}

function InputFile(props: InputFileProps) {
  const { ref, ...rest } = props.register('photo', {
    required: 'Photo is required',
  });
  const photoInput = useRef<HTMLInputElement | null>(null);
  const fileName = getFileName();
  props.watch('photo');

  function handleBtnClick() {
    if (photoInput) {
      photoInput.current?.click();
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
          id="input-photo"
          {...rest}
          name="photo"
          ref={(e) => {
            ref(e);
            photoInput.current = e;
          }}
          type="file"
          accept="image/*"
          data-testid="file"
        />
        <button className="create__btn-photo" type="button" onClick={handleBtnClick}>
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

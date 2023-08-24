import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputTextProps {
  name: string;
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

function InputText(props: InputTextProps) {
  const name = props.name;

  return (
    <div className="create__line" data-testid="text-field">
      <label className="create__label" htmlFor={`input-${name}`}>
        {'Your ' + name}
      </label>
      <div className="create__box">
        <input
          className="create__input"
          id={`input-${name}`}
          type="text"
          placeholder={'Enter your ' + name}
          ref={props.forwRef}
        />
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default InputText;

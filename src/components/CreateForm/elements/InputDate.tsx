import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputDateProps {
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

function InputDate(props: InputDateProps) {
  return (
    <div className="create__line" data-testid="date-field">
      <label className="create__label" htmlFor="input-date">
        Date of birth
      </label>
      <div className="create__box">
        <input
          className="create__input"
          id="input-date"
          type="date"
          ref={props.forwRef}
          role="textbox"
        />
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default InputDate;

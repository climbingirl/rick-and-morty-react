import React from 'react';
import ErrorMessage from './ErrorMessage';

interface ConsentCheckboxProps {
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

function ConsentCheckbox(props: ConsentCheckboxProps) {
  return (
    <div className="create__line create__line_consent" data-testid="consent-field">
      <input className="create__input" id="consent-checkbox" type="checkbox" ref={props.forwRef} />
      <div className="create__box">
        <label className="create__label" htmlFor="consent-checkbox">
          I agree to the processing of my personal data
        </label>
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default ConsentCheckbox;

import React from 'react';
import ErrorMessage from './ErrorMessage';

interface CountrySelectProps {
  error: string | null;
  forwRef: React.RefObject<HTMLSelectElement>;
}

function CountrySelect(props: CountrySelectProps) {
  return (
    <div className="create__line" data-testid="country-field">
      <label className="create__label" htmlFor="input-country">
        Country
      </label>
      <div className="create__box">
        <select className="create__select" id="input-country" defaultValue="" ref={props.forwRef}>
          <option value="" disabled>
            -- choose your country --
          </option>
          <option>Thailand</option>
          <option>USA</option>
          <option>Russia</option>
          <option>China</option>
        </select>
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default CountrySelect;

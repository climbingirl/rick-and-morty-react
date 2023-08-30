import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';
import ErrorMessage from './ErrorMessage';

interface CountrySelectProps {
  error: string | undefined;
  register: UseFormRegister<FormValues>;
}

function CountrySelect(props: CountrySelectProps) {
  return (
    <div className="create__line" data-testid="country-field">
      <label className="create__label" htmlFor="input-country">
        Country
      </label>
      <div className="create__box">
        <select
          className="create__select"
          id="input-country"
          {...props.register('country', { required: 'Country is required' })}
          defaultValue=""
        >
          <option value="" disabled>
            -- choose your country --
          </option>
          <option value="Thailand">Thailand</option>
          <option value="USA">USA</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
        </select>
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default CountrySelect;

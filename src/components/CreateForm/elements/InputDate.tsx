import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';
import ErrorMessage from './ErrorMessage';
import { validateBirthDate } from '../../../utils/validation.helper';

interface InputDateProps {
  error: string | undefined;
  register: UseFormRegister<FormValues>;
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
          {...props.register('birthDate', {
            required: 'date is required',
            validate: validateBirthDate,
          })}
          type="date"
          role="textbox"
        />
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default InputDate;

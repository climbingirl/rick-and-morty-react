import ErrorMessage from './ErrorMessage';
import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

interface ConsentCheckboxProps {
  error: string | undefined;
  register: UseFormRegister<FormValues>;
}

function ConsentCheckbox(props: ConsentCheckboxProps) {
  return (
    <div className="create__line create__line_consent" data-testid="consent-field">
      <input
        className="create__input"
        id="consent-checkbox"
        {...props.register('consent', {
          required: 'Consent must be confirmed',
        })}
        type="checkbox"
      />
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

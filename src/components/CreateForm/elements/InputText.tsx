import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';
import ErrorMessage from './ErrorMessage';

interface InputTextProps {
  name: keyof FormValues;
  register: UseFormRegister<FormValues>;
  error: string | undefined;
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
          {...props.register(name, {
            required: `${name} is required`,
            minLength: {
              value: 2,
              message: `${name} must contain more than 1 letter`,
            },
          })}
          placeholder={'Enter your ' + name}
        />
        <ErrorMessage error={props.error} />
      </div>
    </div>
  );
}

export default InputText;

import { UseFormRegister } from 'react-hook-form';
import { FormValues } from '../../../types/form';

interface InputGenderProps {
  register: UseFormRegister<FormValues>;
}

function InputsGender(props: InputGenderProps) {
  return (
    <div className="create__line create__line_gender" role="radiogroup" aria-label="Choose gender">
      <label htmlFor="input-male">Male</label>
      <input
        className="create__input"
        id="input-male"
        {...props.register('gender')}
        type="radio"
        value="male"
        defaultChecked
      />
      <label htmlFor="input-female">Female</label>
      <input
        className="create__input"
        id="input-female"
        {...props.register('gender')}
        type="radio"
        value="female"
      />
    </div>
  );
}

export default InputsGender;

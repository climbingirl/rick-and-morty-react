import React from 'react';

interface InputGenderProps {
  forwRef: React.RefObject<HTMLInputElement>[];
}

function InputsGender(props: InputGenderProps) {
  return (
    <div className="create__line create__line_gender" role="radiogroup" aria-label="Choose gender">
      <label htmlFor="input-male">Male</label>
      <input
        className="create__input"
        id="input-male"
        name="input-gender"
        type="radio"
        value="male"
        ref={props.forwRef[0]}
        defaultChecked
      />
      <label htmlFor="input-female">Female</label>
      <input
        className="create__input"
        id="input-female"
        name="input-gender"
        type="radio"
        value="female"
        ref={props.forwRef[1]}
      />
    </div>
  );
}

export default InputsGender;

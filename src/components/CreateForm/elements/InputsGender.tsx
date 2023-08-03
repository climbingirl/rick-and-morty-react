import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputGenderProps {
  forwRef: React.RefObject<HTMLInputElement>[];
}

class InputsGender extends React.Component<InputGenderProps> {
  render() {
    return (
      <div
        className="create__line create__line_gender"
        role="radiogroup"
        aria-label="Choose gender"
      >
        <label htmlFor="input-male">Male</label>
        <input
          className="create__input"
          id="input-male"
          name="input-gender"
          type="radio"
          value="male"
          ref={this.props.forwRef[0]}
          defaultChecked
        />
        <label htmlFor="input-female">Female</label>
        <input
          className="create__input"
          id="input-female"
          name="input-gender"
          type="radio"
          value="female"
          ref={this.props.forwRef[1]}
        />
      </div>
    );
  }
}

export default InputsGender;

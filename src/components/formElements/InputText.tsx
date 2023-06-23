import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputTextProps {
  name: string;
  forwRef: React.RefObject<HTMLInputElement>[];
}

class InputText extends React.Component<InputTextProps> {
  name: string;

  constructor(props: InputTextProps) {
    super(props);
    this.name = props.name;
    this.forwRef = props.forwRef;
  }

  render() {
    return (
      <div className="create__line">
        <label className="create__label" htmlFor={`input-${this.name}`}>
          {'Your ' + this.name}
        </label>
        <div className="create__box">
          <input
            className="create__input"
            id={`input-${this.name}`}
            type="text"
            placeholder={'Enter your ' + this.name}
          />
          <ErrorMessage error="Error message" />
        </div>
      </div>
    );
  }
}

export default InputText;

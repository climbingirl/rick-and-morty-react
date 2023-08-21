import React from 'react';
import ErrorMessage from './ErrorMessage';

interface InputDateProps {
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

class InputDate extends React.Component<InputDateProps> {
  render() {
    return (
      <div className="create__line" data-testid="date-field">
        <label className="create__label" htmlFor="input-date">
          Date of birth
        </label>
        <div className="create__box">
          <input
            className="create__input"
            id="input-date"
            type="date"
            ref={this.props.forwRef}
            role="textbox"
          />
          <ErrorMessage error={this.props.error} />
        </div>
      </div>
    );
  }
}

export default InputDate;

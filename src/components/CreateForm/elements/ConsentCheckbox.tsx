import React from 'react';
import ErrorMessage from './ErrorMessage';

interface ConsentCheckboxProps {
  error: string | null;
  forwRef: React.RefObject<HTMLInputElement>;
}

class ConsentCheckbox extends React.Component<ConsentCheckboxProps> {
  render() {
    return (
      <div className="create__line create__line_consent">
        <input
          className="create__input"
          id="consent-checkbox"
          type="checkbox"
          ref={this.props.forwRef}
        />
        <div className="create__box">
          <label className="create__label" htmlFor="consent-checkbox">
            I agree to the processing of my personal data
          </label>
          <ErrorMessage error={this.props.error} />
        </div>
      </div>
    );
  }
}

export default ConsentCheckbox;

import React from 'react';
import ErrorMessage from './ErrorMessage';

interface ConsentCheckboxProps {
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
            I consent to my personal data
          </label>
          <ErrorMessage error="Error message" />
        </div>
      </div>
    );
  }
}

export default ConsentCheckbox;

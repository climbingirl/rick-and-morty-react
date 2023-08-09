import React from 'react';

interface ErrorMessageProps {
  error: string | null;
}

class ErrorMessage extends React.Component<ErrorMessageProps> {
  render() {
    return (
      <div className="error-message" role="alert">
        {this.props.error}
      </div>
    );
  }
}

export default ErrorMessage;

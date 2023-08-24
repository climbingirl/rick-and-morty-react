import React from 'react';

interface ErrorMessageProps {
  error: string | null;
}

function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div className="error-message" role="alert">
      {props.error}
    </div>
  );
}

export default ErrorMessage;

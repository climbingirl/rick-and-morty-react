interface ErrorMessageProps {
  error: string | undefined;
}

function ErrorMessage(props: ErrorMessageProps) {
  return (
    <div className="error-message" role="alert">
      {props.error}
    </div>
  );
}

export default ErrorMessage;

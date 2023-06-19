interface iValidationError {
  errorMsg: string;
}

function ValidationError(props: iValidationError): JSX.Element {
  const dom = (
    <div>
      <p>{props.errorMsg}</p>
    </div>
  );

  return dom;
}

export default ValidationError;

export function validateBirthDate(value: Date) {
  let error = undefined;
  const date = value.getTime();
  const currentDate = Date.now();

  if (date > currentDate) {
    error = `the date mustn't be a future one`;
  }

  return error;
}

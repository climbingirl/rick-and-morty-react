export function validateBirthDate(value: string) {
  let error = undefined;
  const date = new Date(value).getTime();
  const currentDate = Date.now();

  if (date > currentDate) {
    error = `the date mustn't be a future one`;
  }

  return error;
}

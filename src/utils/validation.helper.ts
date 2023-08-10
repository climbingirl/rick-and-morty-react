export function validateName(data: string, key: string): string | null {
  let error = null;
  const name = data.trim();

  if (name.length === 0) {
    error = `${key} is required`;
  } else if (name.length === 1) {
    error = `${key} must contain more than 1 letter`;
  }

  return error;
}

export function validateBirthDate(data: string): string | null {
  let error = null;
  const date = new Date(data).getTime();
  const currentDate = Date.now();

  if (!date) {
    error = `date is required`;
  } else if (date > currentDate) {
    error = `the date mustn't be a future one`;
  }

  return error;
}

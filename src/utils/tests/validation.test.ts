import { describe, it, expect } from 'vitest';
import { validateBirthDate, validateName } from '../validation.helper';

describe('Validation name function ', () => {
  it('return null if gets correct data', () => {
    const error = validateName('Test', 'name');
    expect(error).toBeNull();
  });

  it('return required error if gets an empty string', () => {
    const error = validateName('', 'name');
    expect(error).toMatch(/name is required/i);
  });

  it('return lenth error if gets a short string', () => {
    const error = validateName('A', 'name');
    expect(error).toMatch(/name must contain/i);
  });
});

describe('Validation birth date function ', () => {
  it('return null if gets correct data', () => {
    const error = validateBirthDate('2023-08-02');
    expect(error).toBeNull();
  });

  it('return required error if gets an empty string', () => {
    const error = validateBirthDate('');
    expect(error).toMatch(/date is required/i);
  });

  it('return invalid error if gets future date', () => {
    const today = new Date();
    const futureDateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}`;
    const error = validateBirthDate(futureDateStr);
    expect(error).toMatch(/mustn't be a future one/i);
  });
});

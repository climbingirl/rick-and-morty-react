import { describe, it, expect } from 'vitest';
import { validateBirthDate } from '../validation.helper';

describe('Validation birth date function ', () => {
  it('return undefined if gets correct data', () => {
    const error = validateBirthDate('2023-08-02');
    expect(error).toBeUndefined();
  });

  it('return error if gets future date', () => {
    const today = new Date();
    const futureDateStr = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() + 1}`;
    const error = validateBirthDate(futureDateStr);
    expect(error).toMatch(/mustn't be a future one/i);
  });
});

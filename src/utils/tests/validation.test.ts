import { describe, it, expect } from 'vitest';
import { validateBirthDate } from '../validation.helper';

describe('Validation birth date function ', () => {
  it('return undefined if gets correct data', () => {
    const error = validateBirthDate(new Date());
    expect(error).toBeUndefined();
  });

  it('return error if gets future date', () => {
    const today = new Date();
    const futureDate = today.setDate(today.getDate() + 1);
    const error = validateBirthDate(new Date(futureDate));
    expect(error).toMatch(/mustn't be a future one/i);
  });
});

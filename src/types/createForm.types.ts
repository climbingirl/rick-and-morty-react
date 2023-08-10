export interface CreateFormRefElements {
  createForm: React.RefObject<HTMLFormElement>;
  gendersRadio: React.RefObject<HTMLInputElement>[];
  nameInput: React.RefObject<HTMLInputElement>;
  surnameInput: React.RefObject<HTMLInputElement>;
  dateInput: React.RefObject<HTMLInputElement>;
  countrySelect: React.RefObject<HTMLSelectElement>;
  photoInput: React.RefObject<HTMLInputElement>;
  consentCheckbox: React.RefObject<HTMLInputElement>;
}

export interface CreateFormErrors {
  name: string | null;
  surname: string | null;
  birthDate: string | null;
  country: string | null;
  photo: string | null;
  consent: string | null;
}

import React, { useEffect, useState } from 'react';
import InputDate from '../elements/InputDate';
import InputText from '../elements/InputText';
import InputFile from '../elements/InputFile';
import InputsGender from '../elements/InputsGender';
import CountrySelect from '../elements/CountrySelect';
import ConsentCheckbox from '../elements/ConsentCheckbox';
import { CreateFormErrors } from '../../../types/models';
import { CreateElement } from '../../../types/models';
import { validateBirthDate, validateName } from '../../../utils/validation.helper';
import './CreateForm.scss';

interface CreateFormProps {
  onCardCreate: (card: CreateElement) => void;
}

function CreateForm(props: CreateFormProps) {
  const [errors, setErrors] = useState<CreateFormErrors>({
    name: null,
    surname: null,
    birthDate: null,
    country: null,
    photo: null,
    consent: null,
  });
  const [showStatus, setShowStatus] = useState(false);
  const elements = {
    createForm: React.createRef<HTMLFormElement>(),
    gendersRadio: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
    nameInput: React.createRef<HTMLInputElement>(),
    surnameInput: React.createRef<HTMLInputElement>(),
    dateInput: React.createRef<HTMLInputElement>(),
    countrySelect: React.createRef<HTMLSelectElement>(),
    photoInput: React.createRef<HTMLInputElement>(),
    consentCheckbox: React.createRef<HTMLInputElement>(),
  };

  useEffect(() => {
    if (showStatus) {
      setTimeout(() => {
        setShowStatus(false);
      }, 3000);
    }
  }, [showStatus]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fileList = elements.photoInput.current?.files;
    const fileObj = fileList && fileList[0];
    const formData: CreateElement = {
      gender: elements.gendersRadio.find((g) => g.current?.checked === true)?.current?.value || '',
      name: elements.nameInput.current?.value || '',
      surname: elements.surnameInput.current?.value || '',
      birthDate: elements.dateInput.current?.value || '',
      country: elements.countrySelect.current?.value || '',
      photo: fileObj ? URL.createObjectURL(fileObj) : '',
      consent: elements.consentCheckbox.current?.checked || false,
    };
    const { isValid, errors } = validateFormData(formData);
    if (!isValid) {
      setErrors(errors);
    } else {
      setErrors(errors);
      elements.createForm.current?.reset();
      setShowStatus(true);
      props.onCardCreate(formData);
    }
  }

  function validateFormData(data: CreateElement): { isValid: boolean; errors: CreateFormErrors } {
    const errors: CreateFormErrors = {
      name: validateName(data.name, 'name'),
      surname: validateName(data.surname, 'surname'),
      birthDate: validateBirthDate(data.birthDate),
      country: !data.country ? 'country is required' : null,
      photo: !data.photo ? 'photo is required' : null,
      consent: !data.consent ? 'consent must be confirmed' : null,
    };
    const isValid = Object.values(errors).every((error) => error === null);
    return { isValid, errors };
  }

  return (
    <div className="create__form-inner">
      <form
        className="create__form"
        onSubmit={handleSubmit}
        aria-label="Create product"
        ref={elements.createForm}
      >
        <InputsGender forwRef={elements.gendersRadio} />
        <InputText forwRef={elements.nameInput} name="name" error={errors.name} />
        <InputText forwRef={elements.surnameInput} name="surname" error={errors.surname} />
        <InputDate forwRef={elements.dateInput} error={errors.birthDate} />
        <CountrySelect forwRef={elements.countrySelect} error={errors.country} />
        <InputFile forwRef={elements.photoInput} error={errors.photo} />
        <ConsentCheckbox forwRef={elements.consentCheckbox} error={errors.consent} />
        <button className="create__form-btn" type="submit">
          Submit
        </button>
      </form>
      <div className="create__data-status" role="status">
        {showStatus && 'The data has been saved'}
      </div>
    </div>
  );
}

export default CreateForm;

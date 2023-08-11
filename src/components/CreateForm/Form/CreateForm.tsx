import React from 'react';
import InputDate from '../elements/InputDate';
import InputText from '../elements/InputText';
import InputFile from '../elements/InputFile';
import InputsGender from '../elements/InputsGender';
import CountrySelect from '../elements/CountrySelect';
import ConsentCheckbox from '../elements/ConsentCheckbox';
import { CreateFormErrors, CreateFormRefElements } from '../../../types/createForm.types';
import { CreateElement } from '../../../types/models';
import { validateBirthDate, validateName } from '../../../utils/validation.helper';
import './CreateForm.scss';

interface CreateFormProps {
  onCardCreate: (card: CreateElement) => void;
}

interface CreateFormState {
  errors: CreateFormErrors;
  isStatusShow: boolean;
}

class CreateForm extends React.Component<CreateFormProps, CreateFormState> {
  elements: CreateFormRefElements;

  constructor(props: CreateFormProps) {
    super(props);
    this.state = {
      errors: {
        name: null,
        surname: null,
        birthDate: null,
        country: null,
        photo: null,
        consent: null,
      },
      isStatusShow: false,
    };
    this.elements = {
      createForm: React.createRef<HTMLFormElement>(),
      gendersRadio: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
      nameInput: React.createRef<HTMLInputElement>(),
      surnameInput: React.createRef<HTMLInputElement>(),
      dateInput: React.createRef<HTMLInputElement>(),
      countrySelect: React.createRef<HTMLSelectElement>(),
      photoInput: React.createRef<HTMLInputElement>(),
      consentCheckbox: React.createRef<HTMLInputElement>(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    if (this.state.isStatusShow) {
      setTimeout(() => {
        this.setState({ isStatusShow: false });
      }, 3000);
    }
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fileList = this.elements.photoInput.current?.files;
    const fileObj = fileList && fileList[0];
    const formData: CreateElement = {
      gender:
        this.elements.gendersRadio.find((g) => g.current?.checked === true)?.current?.value || '',
      name: this.elements.nameInput.current?.value || '',
      surname: this.elements.surnameInput.current?.value || '',
      birthDate: this.elements.dateInput.current?.value || '',
      country: this.elements.countrySelect.current?.value || '',
      photo: fileObj ? URL.createObjectURL(fileObj) : '',
      consent: this.elements.consentCheckbox.current?.checked || false,
    };
    const { isValid, errors } = this.validateFormData(formData);
    if (!isValid) {
      this.setState({ errors });
    } else {
      this.setState({ errors });
      this.elements.createForm.current?.reset();
      this.setState({ isStatusShow: true });
      this.props.onCardCreate(formData);
    }
  }

  validateFormData(data: CreateElement): { isValid: boolean; errors: CreateFormErrors } {
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

  render() {
    return (
      <div className="create__form-inner">
        <form
          className="create__form"
          onSubmit={this.handleSubmit}
          aria-label="Create product"
          ref={this.elements.createForm}
        >
          <InputsGender forwRef={this.elements.gendersRadio} />
          <InputText forwRef={this.elements.nameInput} name="name" error={this.state.errors.name} />
          <InputText
            forwRef={this.elements.surnameInput}
            name="surname"
            error={this.state.errors.surname}
          />
          <InputDate forwRef={this.elements.dateInput} error={this.state.errors.birthDate} />
          <CountrySelect forwRef={this.elements.countrySelect} error={this.state.errors.country} />
          <InputFile forwRef={this.elements.photoInput} error={this.state.errors.photo} />
          <ConsentCheckbox
            forwRef={this.elements.consentCheckbox}
            error={this.state.errors.consent}
          />
          <button className="create__form-btn" type="submit">
            Submit
          </button>
        </form>
        <div className="create__data-status" role="status">
          {this.state.isStatusShow && 'The data has been saved'}
        </div>
      </div>
    );
  }
}

export default CreateForm;

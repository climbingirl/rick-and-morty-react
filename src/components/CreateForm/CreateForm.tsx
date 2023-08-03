import React from 'react';
import InputDate from './elements/InputDate';
import InputText from './elements/InputText';
import InputFile from './elements/InputFile';
import InputsGender from './elements/InputsGender';
import CountrySelect from './elements/CountrySelect';
import ConsentCheckbox from './elements/ConsentCheckbox';
import { CreateFormRefElements } from '../../types/createForm.types';
import './CreateForm.scss';

class CreateForm extends React.Component {
  elements: CreateFormRefElements;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      errors: {},
    };
    this.elements = {
      gender: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
      inputName: React.createRef<HTMLInputElement>(),
      inputSurname: React.createRef<HTMLInputElement>(),
      inputDate: React.createRef<HTMLInputElement>(),
      countrySelect: React.createRef<HTMLSelectElement>(),
      inputFile: React.createRef<HTMLInputElement>(),
      consentCheckbox: React.createRef<HTMLInputElement>(),
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.dir(this.elements.gender.find((g) => g.current?.checked === true)?.current?.value);
    console.dir(this.elements.inputDate.current);
  }

  render() {
    return (
      <div className="create__form-inner">
        <form className="create__form" onSubmit={this.submitForm} aria-label="Create product">
          <InputsGender forwRef={this.elements.gender} />
          <InputText forwRef={this.elements.inputName} name="name" />
          <InputText forwRef={this.elements.inputSurname} name="surname" />
          <InputDate forwRef={this.elements.inputDate} />
          <CountrySelect forwRef={this.elements.countrySelect} />
          <InputFile forwRef={this.elements.inputFile} />
          <ConsentCheckbox forwRef={this.elements.consentCheckbox} />
          <button className="create__form-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateForm;

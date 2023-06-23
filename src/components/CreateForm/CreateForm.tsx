import React from 'react';
import InputDate from '../formElements/InputDate';
import InputText from '../formElements/InputText';
import InputFile from '../formElements/InputFile';
import InputGender from '../formElements/InputGender';
import SelectCountry from '../formElements/SelectCountry';
import './CreateForm.scss';

interface RefElements {
  gender: React.RefObject<HTMLInputElement>[];
  inputName: React.RefObject<HTMLInputElement> | null;
  inputSurname: React.RefObject<HTMLInputElement> | null;
  inputDate: React.RefObject<HTMLInputElement> | null;
  selectCountry: React.RefObject<HTMLSelectElement> | null;
  inputFile: React.RefObject<HTMLInputElement> | null;
}
class CreateForm extends React.Component {
  elements: RefElements;

  constructor(props: object) {
    super(props);
    this.state = {
      Error: {},
    };
    this.elements = {
      gender: [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()],
      inputName: React.createRef<HTMLInputElement>(),
      inputSurname: React.createRef<HTMLInputElement>(),
      inputDate: React.createRef<HTMLInputElement>(),
      selectCountry: React.createRef<HTMLSelectElement>(),
      inputFile: React.createRef<HTMLInputElement>(),
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(this.elements.gender[1].current?.checked);
  }

  render() {
    return (
      <div className="create__form-inner">
        <form className="create__form" onSubmit={this.submitForm}>
          <InputGender forwRef={this.elements.gender} />
          <InputText forwRef={this.elements.inputName} name="name" />
          <InputText forwRef={this.elements.inputSurname} name="surname" />
          <InputDate forwRef={this.elements.inputDate} />
          <SelectCountry forwRef={this.elements.selectCountry} />
          <InputFile forwRef={this.elements.inputFile} />
          <button className="create__form-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateForm;

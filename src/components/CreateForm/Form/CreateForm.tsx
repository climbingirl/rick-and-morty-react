import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../redux/hooks';
import { addCard } from '../../../redux/createSlice';
import { FormValues } from '../../../types/form';
import { CardElement } from '../../../types/models';
import { formatDate } from '../../../utils/date.helper';
import InputDate from '../elements/InputDate';
import InputText from '../elements/InputText';
import InputFile from '../elements/InputFile';
import InputsGender from '../elements/InputsGender';
import CountrySelect from '../elements/CountrySelect';
import ConsentCheckbox from '../elements/ConsentCheckbox';
import './CreateForm.scss';

function CreateForm() {
  const [isStatusShown, setIsStatusShown] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isStatusShown) {
      setTimeout(() => {
        setIsStatusShown(false);
      }, 3000);
    }
  }, [isStatusShown]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  function onSubmit(data: FormValues) {
    const cardData: CardElement = {
      gender: data.gender,
      name: data.name,
      surname: data.surname,
      birthDate: formatDate(data.birthDate),
      country: data.country,
      photo: URL.createObjectURL(data.photo[0]),
      consent: data.consent,
    };
    setIsStatusShown(true);
    dispatch(addCard(cardData));
    reset();
  }

  return (
    <div className="create__form-inner">
      <form className="create__form" onSubmit={handleSubmit(onSubmit)} aria-label="Create product">
        <InputsGender register={register} />
        <InputText name="name" register={register} error={errors.name?.message} />
        <InputText name="surname" register={register} error={errors.surname?.message} />
        <InputDate register={register} error={errors.birthDate?.message} />
        <CountrySelect register={register} error={errors.country?.message} />
        <InputFile register={register} error={errors.photo?.message} watch={watch} />
        <ConsentCheckbox register={register} error={errors.consent?.message} />
        <button className="create__form-btn" type="submit">
          Submit
        </button>
      </form>
      <div className="create__data-status" role="status">
        {isStatusShown && 'The data has been saved'}
      </div>
    </div>
  );
}

export default CreateForm;

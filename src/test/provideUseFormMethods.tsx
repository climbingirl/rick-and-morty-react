import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormWatch,
  useForm,
} from 'react-hook-form';
import { FormValues } from '../types/form';
import { render } from '@testing-library/react';

interface UseFormMethods {
  register: UseFormRegister<FormValues>;
  errors: FieldErrors<FormValues>;
  handleSubmit: UseFormHandleSubmit<FormValues>;
  reset: UseFormReset<FormValues>;
  watch: UseFormWatch<FormValues>;
}

export default () => {
  const useFormMethods = {} as UseFormMethods;

  const EmptyComponent = () => {
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

    useFormMethods.register = register;
    useFormMethods.handleSubmit = handleSubmit;
    useFormMethods.errors = errors;
    useFormMethods.reset = reset;
    useFormMethods.watch = watch;

    return <></>;
  };

  render(<EmptyComponent />);

  return useFormMethods;
};

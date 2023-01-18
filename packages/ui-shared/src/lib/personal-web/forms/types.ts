import {
  FormState, Path, UseFormRegister, UseFormResetField, UseFormSetValue,
} from 'react-hook-form'


export interface IFormValues {
  name: string
  mail: string
  message: string
  terms: boolean
}

export type InputProps = {
  label: Path<IFormValues>
  register: UseFormRegister<IFormValues>
  errors: FormState<IFormValues>['errors']
  reset: UseFormResetField<IFormValues>
  required: boolean
}

export type CheckboxInputField = Pick<InputProps, 'label' | 'register' | 'errors'> & { setValue: UseFormSetValue<IFormValues> }

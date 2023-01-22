import { MailFormSchema } from '@sln/features-mail'
import {
  FormState,
  Path,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form'

export type InputProps = {
  label: Path<MailFormSchema>
  register: UseFormRegister<MailFormSchema>
  errors: FormState<MailFormSchema>['errors']
  reset: UseFormResetField<MailFormSchema>
  required: boolean
}

export type CheckboxInputField = Pick<InputProps, 'label' | 'register' | 'errors'> & {
  setValue: UseFormSetValue<MailFormSchema>
}

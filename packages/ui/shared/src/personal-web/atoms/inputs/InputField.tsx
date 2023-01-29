import { Input } from '@nextui-org/react'
import { InputProps } from '../../forms/types'

export default function InputField({ label, register, required, reset, errors }: InputProps) {
  return (
    <Input
      bordered
      size={'lg'}
      fullWidth
      onClearClick={() => reset}
      status={errors[label]?.message ? 'error' : 'default'}
      color={errors[label]?.message ? 'error' : 'secondary'}
      helperColor={errors[label]?.message ? 'error' : 'success'}
      helperText={errors[label]?.message}
      {...register(label, {
        required,
        minLength: { value: 4, message: `Please write a longer ${label}` },
      })}
      labelPlaceholder={label}
    />
  )
}

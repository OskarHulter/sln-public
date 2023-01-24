import { Input } from '@nextui-org/react'
import { InputProps } from '../../forms/types'

export default function InputField({ label, register, required, reset, errors }: InputProps) {
  return (
    <Input
      bordered
      size={'xl'}
      clearable
      fullWidth
      onClearClick={() => reset}
      status={errors[label]?.message ? 'error' : 'default'}
      color={errors[label]?.message ? 'error' : 'secondary'}
      helperColor={errors[label]?.message ? 'error' : 'primary'}
      helperText={errors[label]?.message}
      {...register(label, { required })}
      labelPlaceholder={label}
    />
  )
}

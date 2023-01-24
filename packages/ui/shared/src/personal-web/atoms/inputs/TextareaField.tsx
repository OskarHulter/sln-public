import { Textarea } from '@nextui-org/react'
import { InputProps } from '../../forms/types'

export default function TextareaField({
  label,
  register,
  required,
  errors,
}: Omit<InputProps, 'reset'>) {
  return (
    <Textarea
      bordered
      size={'xl'}
      fullWidth
      status={errors[label]?.message ? 'error' : 'default'}
      color={errors[label]?.message ? 'error' : 'secondary'}
      helperColor={errors[label]?.message ? 'error' : 'primary'}
      helperText={errors[label]?.message}
      {...register(label, { required })}
      labelPlaceholder='message'
    />
  )
}

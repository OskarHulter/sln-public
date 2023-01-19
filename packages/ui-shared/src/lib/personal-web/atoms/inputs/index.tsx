import { Checkbox, Input, Text, Textarea } from '@nextui-org/react'
import { CheckboxInputField, InputProps } from '../../forms/types.js'


export const InputField = ({ label, register, required, reset, errors }: InputProps) => (
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

export const TextareaField = ({ label, register, required, errors }: Omit<InputProps, 'reset'>) => (
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


export const CheckboxField = ({ label, register, errors, setValue }: CheckboxInputField) => {
  // const [checked, setChecked] = React.useState(false)
  // onChange={isSelected => {
  //   setChecked(isSelected)
  // }}
  // value={checked ? 'true' : 'false'}

  return (
    <>
      <Checkbox
        size='xl'
        color={errors[label]?.message ? 'error' : 'secondary'}
        {...register(label)}
        onChange={(checked) => setValue('terms', checked)}
      >
        {label}
      </Checkbox>
      <Text id='terms' color='error'>{errors[label]?.message}</Text>
    </>
  )
}

import { Checkbox, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { InputProps } from '../../forms/types'

export const InputField = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <Input {...register(label, { required })} />
  </>
)

export const TextAreaField = ({ label, register, required }: InputProps) => (
  <>
    <label>{label}</label>
    <Textarea
      bordered
      color='secondary'
      fullWidth
      labelPlaceholder='Please type your message:'
      {...register(label, { required })}
    />
  </>
)
export const BooleanField = ({ label, register, required }: InputProps) => {
  const [checked, setChecked] = React.useState(false)

  return (
    <>
      <label>{label}</label>
      <Checkbox
        {...register(label, { required })}
        onChange={(isSelected) => {
          setChecked(isSelected)
        }}
        value={checked ? 'true' : 'false'}
      />
    </>
  )
}

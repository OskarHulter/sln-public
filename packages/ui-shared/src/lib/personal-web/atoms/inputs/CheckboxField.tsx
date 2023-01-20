import { Checkbox, Text } from '@nextui-org/react'
import { CheckboxInputField } from '../../forms/types.js'

export default function CheckboxField({ label, register, errors, setValue }: CheckboxInputField) {
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
      <Text
        id='terms'
        color='error'
      >
        {errors[label]?.message}
      </Text>
    </>
  )
}

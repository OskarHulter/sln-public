import { Checkbox, Text } from '@nextui-org/react'
import type { CheckboxInputField } from '../../forms/types'

type CheckboxProps = {
  text: string
} & CheckboxInputField

export default function CheckboxField({ text, label, register, errors, setValue }: CheckboxProps) {
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
        onChange={(checked) => setValue('emailUpdates', checked)}
      >
        <Text
          as='label'
          size={'$lg'}
          id={label}
          css={{
            fontWeight: '$medium',
            color: '$accents8',
          }}
        >
          {text}
        </Text>
      </Checkbox>
      <Text
        id={label}
        color='error'
      >
        {errors[label]?.message}
      </Text>
    </>
  )
}

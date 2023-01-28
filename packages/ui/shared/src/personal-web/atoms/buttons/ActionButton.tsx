import type { ButtonProps } from '@nextui-org/react'
import { Button } from '@nextui-org/react'

export function ActionButton(props: ButtonProps) {
  return (
    <Button
      color='gradient'
      bordered
      size='xl'
      auto
      css={{
        letterSpacing: '$tight',
        fontWeight: '$light',
        fontSize: '$3xl',
        padding: 'auto',
        ...props.css,
      }}
      {...props}
    />
  )
}

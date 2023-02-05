import { Text, TextProps } from '@nextui-org/react'
import Balancer from 'react-wrap-balancer'
import type { BaseProps } from '../../types'

export default function Paragraph(props: BaseProps & TextProps) {
  return (
    <Text
      size='$xl'
      css={{
        letterSpacing: '$wide',
        lineHeight: '$base',
        fontWeight: '$light',
        width: 'min(45ch, 90vw)',
        textAlign: 'center',
        marginInline: 'auto',
      }}
      {...props}
    >
      <Balancer>{props.children}</Balancer>
    </Text>
  )
}

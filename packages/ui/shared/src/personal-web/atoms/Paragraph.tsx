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
        marginInline: 'auto',
      }}
      {...props}
    >
      <Balancer style={{ width: 'min(30ch, 90vw)' }}>{props.children}</Balancer>
    </Text>
  )
}

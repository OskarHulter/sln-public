import { Link as UiLink } from '@nextui-org/react'
import { default as NextLink } from 'next/link'
import type { BaseProps, Icon } from '../../../types'

export type SocialProps = {
  href: string
  icon: Icon
} & BaseProps

export function NextLinkButton({ href, children }: SocialProps) {
  return (
    <NextLink href={href}>
      <UiLink
        block
        color='secondary'
      >
        {children}
      </UiLink>
    </NextLink>
  )
}

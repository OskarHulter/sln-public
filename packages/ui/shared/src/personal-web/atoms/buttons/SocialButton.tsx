import { Button, Link } from '@nextui-org/react'
import { Icon } from '../../../types.js'

export type SocialProps = {
  href: string
  icon: Icon
}

export function SocialButton({ href, icon }: SocialProps) {
  return (
    <Link
      href={href}
      css={{ m: '$6' }}
    >
      <Button
        auto
        rounded
        icon={icon}
      />
    </Link>
  )
}

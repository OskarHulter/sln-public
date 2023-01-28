import { Avatar, Link } from '@nextui-org/react'
import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { default as NextLink } from 'next/link'

type SocialButtonProps = {
  href: string
} & ImageProps

export function SocialButton({ href, src, alt }: SocialButtonProps) {
  return (
    <NextLink
      target='_blank'
      href={href}
    >
      <Link
        block
        css={{ m: '$6' }}
      >
        <Avatar
          size='xl'
          icon={
            <Image
              className='social-icon'
              src={src}
              alt={alt}
              width={50}
              height={50}
            />
          }
        />
      </Link>
    </NextLink>
  )
}
// css = {{
//   objectFit: 'cover',
//     position: 'relative',
//       overflow: 'hidden',
//           }}
// {
/* <Button
          auto
          rounded
          icon={icon}
        /> */

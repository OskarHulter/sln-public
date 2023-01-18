import { Button, Grid, Link } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '../../atoms/icons/Icons'
import { SocialButton, SocialProps } from './SocialButton'


export function Socials(props: SocialProps[]) {
  return (
    <Grid.Container>
      {props.map((item, key) => {

        return <SocialButton key={key} href={item.href} icon={item.icon} />
      })}
      <Link href='https://github.com/oskarhulter' css={{ m: '$6' }}>
        <Button
          auto
          rounded
          icon={<GithubIcon fill='currentColor' />}
        />
      </Link>

      <Link href='mailto:oskarhulter@gmail.com' css={{ m: '$6' }}>
        <Button
          auto
          rounded
          icon={<MailIcon fill='currentColor' />}
        />
      </Link>

      <Link href='https://www.linkedin.com/in/oskar-hulter' css={{ m: '$6' }}>
        <Button
          auto
          rounded
          icon={<LinkedinIcon fill='currentColor' />}
        />
      </Link>

      <Link href='https://www.twitter.com/ohulter' css={{ m: '$6' }}>
        <Button
          auto
          rounded
          icon={<TwitterIcon fill='currentColor' />}
        />
      </Link>
    </Grid.Container>
  )
}

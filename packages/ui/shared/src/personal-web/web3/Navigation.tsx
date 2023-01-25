import { Avatar, Navbar, Row } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitch from '../atoms/buttons/ThemeSwitch'
import { GithubIcon } from '../atoms/icons/Icons'

export default function Navigation() {
  return (
    <>
      <Navbar
        variant='sticky'
        css={{
          width: '$full',
          color: '$foreground',
          backgroundColor: '$gradient',
        }}
      >
        <Navbar.Brand>Oskar Hulter</Navbar.Brand>

        <Navbar.Content>
          <Navbar.Item>
            <ThemeSwitch />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <Row
        justify='space-between'
        align='center'
      >
        <Link
          href='/'
          passHref
        >
          <div className='navLink'>
            <Image
              alt='accounts icon'
              src='/icons/accounts-icon.svg'
              width={27}
              height={27}
            />
          </div>
        </Link>

        <Link
          href='/sessions'
          passHref
        >
          <div className='navLink'>
            <Image
              alt='sessions icon'
              src='/icons/sessions-icon.svg'
              width={27}
              height={27}
            />
          </div>
        </Link>

        <Link
          href='/walletconnect'
          passHref
        >
          <div className='navLink'>
            <Avatar
              size='lg'
              css={{ cursor: 'pointer' }}
              color='gradient'
              icon={
                <Image
                  alt='wallet connect icon'
                  src='/wallet-connect-logo.svg'
                  width={30}
                  height={30}
                />
              }
            />
          </div>
        </Link>

        <Link
          href='/pairings'
          passHref
        >
          <div className='navLink'>
            <Image
              alt='pairings icon'
              src='/icons/pairings-icon.svg'
              width={25}
              height={25}
            />
          </div>
        </Link>
        <GithubIcon fill={'$ansiBlack'} />
        <Link
          href='/settings'
          passHref
        >
          <div className='navLink'>
            <Image
              alt='settings icon'
              src='/icons/iconmonstr-github-3.svg'
              width={27}
              height={27}
            />
          </div>
        </Link>
        <Link
          href='/settings'
          passHref
        >
          <div className='navLink'>
            <Image
              alt='settings icon'
              src='/icons/iconmonstr-github-2.svg'
              width={27}
              height={27}
            />
          </div>
        </Link>
        <Link
          href='/settings'
          passHref
          className='navLink'
        >
          <Image
            alt='settings icon'
            src='/icons/iconmonstr-github-1.svg'
            width={27}
            height={27}
          />
        </Link>
        <ThemeSwitch />
      </Row>
    </>
  )
}

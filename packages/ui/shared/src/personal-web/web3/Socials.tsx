import { Button, Col, Row } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'

export function Socials() {
  return (
    <Row>
      <Col className='social-icon'>
        <Link
          target='_blank'
          href='mailto:oskarhulter@gmail.com'
        >
          <Button
            className='navLink'
            color='gradient'
            rounded
            icon={
              <Image
                src='/icons/social/mail-round-fill.svg'
                alt='mail icon'
                fill
                style={{
                  fill: '#54b9ff',
                  padding: 2,
                }}
              />
            }
            css={{
              aspectRatio: 1,
              minWidth: '3.5rem',
              minHeight: '3.5rem',
              marginInline: 'auto',
            }}
          />
        </Link>
      </Col>
      <Col className='social-icon'>
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/oskar-hulter'
        >
          <Button
            className='navLink'
            color='gradient'
            rounded
            css={{
              aspectRatio: 1,
              minWidth: '3.5rem',
              minHeight: '3.5rem',
              marginInline: 'auto',
            }}
            icon={
              <Image
                src='/icons/social/linkedin-round-big.svg'
                alt='linkedin icon'
                fill
                style={{
                  fill: '#54b9ff',
                  padding: 2,
                }}
              />
            }
          />
        </Link>
      </Col>
      <Col className='social-icon'>
        <Link
          target='_blank'
          href='https://www.twitter.com/ohulter'
        >
          <Button
            className='navLink'
            color='gradient'
            rounded
            css={{
              aspectRatio: 1,
              minWidth: '3.5rem',
              minHeight: '3.5rem',
              marginInline: 'auto',

              backgroundColor: 'rgb(0,29,85)',
            }}
            icon={
              <Image
                src='/icons/social/twitter-round-fill-1.svg'
                alt='twitter icon'
                fill
                style={{
                  fill: '#54b9ff',
                  padding: 2,
                }}
              />
            }
          />
        </Link>
      </Col>
      <Col className='social-icon'>
        <Link
          target='_blank'
          href='https://www.github.com/OskarHulter'
        >
          <Button
            className='navLink'
            color='gradient'
            rounded
            css={{
              aspectRatio: 1,
              minWidth: '3.5rem',
              minHeight: '3.5rem',
              marginInline: 'auto',
              '&:hover': {
                background: '$green100',
                color: '$green800',
              },
              '&:active': {
                background: '$green200',
              },
              '&:focus': {
                borderColor: '$green400',
              },
            }}
            icon={
              <Image
                src='/icons/social/github-round-fill-1.svg'
                alt='github icon'
                fill
                style={{
                  fill: '#54b9ff',
                  padding: 2,
                }}
              />
            }
          />
        </Link>
      </Col>
    </Row>
  )
}

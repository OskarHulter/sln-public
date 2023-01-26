import { Col, Link, Row } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '../atoms/icons/Icons'

export default function Navigation() {
  return (
    <Row
      justify='space-evenly'
      align='center'
      css={{
        zIndex: 1,
        boxShadow: '$md',
        p: '0 $10',
        m: '0 $10',
      }}
    >
      <Col css={{ width: 'fit-content' }}>
        <Link
          block
          color='primary'
          href='https://github.com/oskarhulter'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <GithubIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>

      <Col css={{ width: 'fit-content' }}>
        <Link
          block
          color='primary'
          href='mailto:oskarhulter@gmail.com'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <MailIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>

      <Col css={{ width: 'fit-content' }}>
        <Link
          block
          color='primary'
          href='https://www.linkedin.com/in/oskar-hulter'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <LinkedinIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>

      <Col css={{ width: 'fit-content', height: 'auto' }}>
        <Link
          block
          color='primary'
          href='https://www.twitter.com/ohulter'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <TwitterIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>
    </Row>
  )
}
// <Row>
//   <Text>©2023 - Oskar Hulter</Text>
// </Row>

//  <Link
//       href='/'
//       passHref
//     >
//       <div className='navLink'>
//         <Image
//           fill
//           alt='accounts icon'
//           src='/icons/accounts-icon.svg'
//           sizes='(min-width: 60em) 24vw,
//                 (min-width: 28em) 45vw,
//                 100vw'
//           style={{ objectFit: 'contain' }}
//         />
//       </div>
//     </Link>

//     <Link
//       href='/walletconnect'
//       passHref
//     >
//       <div className='navLink'>
//         <Avatar
//           size='lg'
//           css={{ cursor: 'pointer' }}
//           color='gradient'
//           icon={
//             <Image
//               alt='wallet connect icon'
//               src='/icons/iconmonstr-github-3.svg'
//               style={{ objectFit: 'contain' }}
//               width={initialIconSize}
//               height={initialIconSize}
//             />
//           }
//         />
//       </div>
//     </Link>
//     <Link
//       href='/settings'
//       passHref
//       className='navLink'
//     >
//       <Image
//         alt='gh'
//         src='/icons/iconmonstr-github-1.svg'
//         width={27}
//         height={27}
//       />
//     </Link>
//     <ThemeSwitch />

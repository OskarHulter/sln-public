import { Container } from '@nextui-org/react'
import type { BaseProps } from '../../types'
//import fonts from '../styles/tokens/fonts'
import { inter, sourceCodePro } from '../styles/tokens/fonts'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }: BaseProps) {
  return (
    <Container
      className={`container ${inter.variable} ${sourceCodePro.variable}`}
      css={{
        p: '0',
      }}
    >
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

import { Container } from '@nextui-org/react'
import { BaseProps } from '../../types.js'
import fonts from '../styles/tokens/fonts.js'
import Footer from './Footer.js'
import Header from './Header.js'

export default function Layout({ children }: BaseProps) {
  return (
    <Container
      className={`container ${fonts.inter.variable} ${fonts.sourceCodePro.variable}`}
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

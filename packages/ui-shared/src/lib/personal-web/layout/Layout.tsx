import { Container } from '@nextui-org/react'
import fonts from '../../design/assets/fonts/fonts.js'
import { BaseProps } from '../../types.js'
import { Footer } from './Footer.js'
import Header from './Header.js'

export function Layout({ children }: BaseProps) {
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

export default Layout

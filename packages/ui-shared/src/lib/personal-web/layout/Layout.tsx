import { Container } from '@nextui-org/react'
import { fonts } from '../../design/index.js'
import { BaseProps } from '../../types'
import { Footer } from './Footer'
import { Header } from './Header'

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

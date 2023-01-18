import { Container } from '@nextui-org/react'
import { inter, sourceCodePro } from '../../design'
import { BaseProps } from '../../types'
import { Footer } from './Footer'
import { Header } from './Header'


export function Layout({ children }: BaseProps) {

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

export default Layout

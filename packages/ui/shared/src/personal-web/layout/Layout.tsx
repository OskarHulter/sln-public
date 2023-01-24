import { Container, css, styled } from '@nextui-org/react'
import Balancer from 'react-wrap-balancer'
import type { BaseProps } from '../../types'
//import fonts from '../styles/tokens/fonts'
import Footer from './Footer'
import Header from './Header'

const globalContainer = css({
  maxWidth: '2000px',
  minWidth: '100vw',
  h: '100vh',
  // top: 0,
  // left: 0,
  // bottom: 0,
  // right: 0,
  // position: 'absolute',
  m: '0',
  p: '0',
  zIndex: '-1',
  overflowY: 'hidden',
})

const GlobalContainer = styled(Container, globalContainer)

const grid = css({
  display: 'grid',
  gridTemplateAreas: `
  header header header
  . main .
  footer footer footer
  `,
  gridTemplateColumns: 'auto min-content auto',
  alignItems: 'center',
  justifyContent: 'space-around',
  minW: '100vw',
  minH: '100vh',
})

const GlobalGrid = styled(Container, grid)
//   < Container
// justify = 'center'
// className = {`${inter.variable} ${sourceCodePro.variable}`}
// css = {{
//   width: 'full',
//     p: '0',
//       }}
//     >
export default function Layout({ children }: BaseProps) {
  return (
    <GlobalContainer>
      <GlobalGrid>
        <Header />
        <GlobalGrid
          as='main'
          css={{ gridArea: 'main' }}
        >
          <Balancer>{children}</Balancer>
        </GlobalGrid>
        <Footer />
      </GlobalGrid>
    </GlobalContainer>
  )
}

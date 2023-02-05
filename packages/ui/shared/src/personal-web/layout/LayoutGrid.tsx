import { Container, css, styled } from '@nextui-org/react'
import type { BaseProps } from '../../types'
//import fonts from '../styles/tokens/fonts'

const globalContainer = css({
  maxWidth: '800px',
  display: 'grid',

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
//<Header />
//<Footer />
export default function LayoutGrid({ children }: BaseProps) {
  return (
    <GlobalContainer>
      <GlobalGrid>{children}</GlobalGrid>
    </GlobalContainer>
  )
}

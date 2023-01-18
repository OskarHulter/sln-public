import { Grid } from '@nextui-org/react'


type CardsProps = {
  children: React.ReactElement[]
}


const CardGrid = ({ children }: CardsProps) => {

  return (
    <Grid.Container
      gap={2}
      justify='center'
      alignContent='center'
      css={{
        width: '100%',
        gridTemplateColumns: 'repeat(auto-fill, minmax(20ch, 1fr))',
        gridAutoRows: '200px',
      }}
    >
      {children.map(child => <Grid xs={12} sm={4}>{child}</Grid>)}
    </Grid.Container>
  )
}

export default CardGrid

import { Grid } from '@nextui-org/react'
import { LoadingSpinner } from '../atoms/LoadingSpinner.js'
import ProjectCard from '../cards/ProjectCard.js'
import { useContent } from '../hooks/useContent.js'


export function Projects() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />
  return <Grid.Container gap={2}>
    {data.projects.map((item: Record<string, unknown>, key: number) => <ProjectCard key={key} {...item} />)}
  </Grid.Container>
}

export default Projects

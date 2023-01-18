import { Grid } from '@nextui-org/react'
import { LoadingSpinner } from '../atoms/LoadingSpinner'
import ProjectCard from '../cards/ProjectCard'
import { useContent } from '../hooks/useContent'


export function Projects() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />
  return <Grid.Container gap={2}>
    {data.projects.map((item, key) => <ProjectCard key={key} {...item} />)}
  </Grid.Container>
}

export default Projects

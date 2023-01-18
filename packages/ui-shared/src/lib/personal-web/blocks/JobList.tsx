import { Grid } from '@nextui-org/react'
import { LoadingSpinner } from '../atoms/LoadingSpinner'
import JobCard from '../cards/JobCard'
import { useContent } from '../hooks/useContent'


export function JobList() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />

  return <Grid.Container gap={2}>
    {data?.jobs.map((item, key) => <JobCard key={key} {...item} />)}
  </Grid.Container>
}

export default JobList

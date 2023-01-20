import { Grid } from '@nextui-org/react'
import { LoadingSpinner } from '../atoms/LoadingSpinner.js'
import JobCard from '../cards/JobCard.js'
import { useContent } from '../hooks/useContent.js'

export function JobList() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />

  return (
    <Grid.Container gap={2}>
      {data?.jobs.map((item: Record<string, unknown>, key: number) => (
        <JobCard
          key={key}
          {...item}
        />
      ))}
    </Grid.Container>
  )
}

export default JobList

import { Grid } from '@nextui-org/react'
import { Job } from '@sln/domain-shared'
import LoadingSpinner from '../atoms/LoadingSpinner.js'
import JobCard from '../cards/JobCard.js'
import { useContent } from '../features/content/useContent.js'

export function JobList() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />

  return (
    <Grid.Container gap={2}>
      {data?.jobs.map((item: Job, key: number) => (
        <JobCard
          key={key}
          {...item}
        />
      ))}
    </Grid.Container>
  )
}

export default JobList

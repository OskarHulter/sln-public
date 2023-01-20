import { Text } from '@nextui-org/react'
import { LoadingSpinner } from '../atoms/LoadingSpinner.js'
import { useContent } from '../features/content/useContent.js'

export function SkillList() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />
  return (
    <section>
      <ul>
        {Object.entries(data?.about.topTraits).map((item: string, index: number) => (
          <li key={index}>
            <div>
              <span>{index + 1}. </span>
              <Text>{item.toString()}</Text>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default SkillList

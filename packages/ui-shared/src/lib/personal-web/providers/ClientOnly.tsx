import React from 'react'
import { BaseProps } from '../../types'


export function ClientOnly({ children, ...delegated }: BaseProps) {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return (
    <div {...delegated}>
      {children}
    </div>
  )
}

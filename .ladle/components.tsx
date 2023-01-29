import type { GlobalProvider } from '@ladle/react'
import WebUiProvider from '../packages/ui/shared/src/personal-web/providers/WebUiProvider'
import React, { useEffect, useState } from 'react'
import 'tailwindcss/tailwind.css'
import '../apps/personal-web/public/main.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Container } from '@nextui-org/react'
import { fetchContent } from '../packages/data-access/shared/src'

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
        refetchOnMount: false,
        keepPreviousData: true,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        queryFn: () => fetchContent(),
        initialData: () => fetchContent(),
        onError: () => console.error('error!'),
      },
    },
    logger: {
      log: console.log,
      warn: console.warn,
      // ✅ no more errors on the console
      error: () => { },
    }
  }))

  useEffect(() => {
    if (globalState.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [globalState.theme])


  return (
    <QueryClientProvider client={queryClient}>
      <WebUiProvider>
        <h1>Theme: {globalState.theme}</h1>
        <h2>{storyMeta.customValue}</h2>
        <Container>

          {children}
        </Container>
      </WebUiProvider>
    </QueryClientProvider >
  )
}

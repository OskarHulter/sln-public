import type { DehydratedState } from '@tanstack/query-core'
import type { NextPageContext } from 'next'
import type { AppProps } from 'next/app'

export type PageProps = {
  contentList?: DehydratedState
}

export type ExtendedAppProps<P = object> = {
  err?: NextPageContext['err']
} & AppProps<P>

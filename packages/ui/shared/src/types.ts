import type { Content } from '@sln/domain-shared'
import { SVGProps } from 'react'

export type SafeNumber = number | `${number}`
export type Icon = React.ReactElement<SVGProps<SVGSVGElement>>

export type Unpacked<T> = T extends (infer U)[] ? U : T
export type BlockProps = {
  blockContent: Unpacked<Content>
}

export type IconProps = {
  fill: string
  filled?: boolean
  size?: string
  height?: string
  width?: string
  label?: string
} & Partial<SVGProps<SVGSVGElement>>

export type BaseProps = {
  children: React.ReactNode
}

export type ProviderProps = {
  initialized: boolean
} & BaseProps

export type MediaProps = {
  src: string
  alt: string
  width?: SafeNumber
  height?: SafeNumber
  fill?: boolean
  priority?: boolean
  quality?: SafeNumber
}

export type BlockCardProps = {
  heading: string
  subtitle: string
  paragraph: string
  cta: {
    text: string
    href: string
  }
  image: MediaProps
} & Partial<BaseProps>

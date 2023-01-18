import { SVGProps } from 'react'


export type SafeNumber = number | `${number}`
export type Icon = React.ReactElement<SVGProps<SVGSVGElement>>

export type BaseProps = {
  children: React.ReactNode
}

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




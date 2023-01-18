import { SVGProps } from 'react'


export type IconProps = {
  fill: string
  filled?: boolean
  size?: string
  height?: string
  width?: string
  label?: string
} & Partial<SVGProps<SVGSVGElement>>

import { constants } from '../constants'


export type SafeNumber = number | `${number}`


export type MediaProps = {
  src: string
  alt: string
  width?: SafeNumber
  height?: SafeNumber
  fill?: boolean
  priority?: boolean
  quality?: SafeNumber
}



export const images: MediaProps[] = [
  {
    alt: 'Smiling profile picture of Oskar',
    src: `${constants.urls.profilePicUrl}`,
    width: '300',
    height: '300',
  },
  {
    alt: 'unsplash pic',
    src: `${constants.urls.redBlueSmokeUrl}`,
    width: '300',
    height: '300',
  },
  {
    alt: 'unsplash pic',
    src: `${constants.urls.whiteLinesUrl}`,

    width: '300',
    height: '300',

  },
  {
    alt: 'unsplash pic',
    src: `${constants.urls.blueDunesUrl}`,

    width: '300',
    height: '300',

  },
]


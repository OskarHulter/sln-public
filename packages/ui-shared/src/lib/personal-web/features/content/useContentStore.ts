import { useQuery } from '@tanstack/react-query'
import ky from 'ky'

export interface Result {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: Date
  edited: Date
  url: string
}

export interface ReqResult {
  count: number
  next: string
  previous?: unknown
  results: Result[]
}
async function fetchContentStore() {
  const data: ReqResult = await ky.get('https://swapi.dev/api/people/').json()
  return data.results
}

export default function useContentStore() {
  const { data, status } = useQuery(['contentStore'], fetchContentStore)
  return { characters: data, status }
}

import type constants from './constants'
import type { content, topics } from './content'
import type jobs from './domain/jobs'
import type projects from './domain/projects'
import type technologies from './domain/technologies'

export type Job = (typeof jobs)[number]
export type Jobs = typeof jobs
export type Content = typeof content
export type ContentKeys = keyof Content
export type ConstantsWeb = typeof constants
export type ConstantsWebType = keyof ConstantsWeb
export type Topic = (typeof topics)[number]['name']
export type Topics = typeof topics
export type TechName = (typeof technologies)['techNames'][number]
export type Technologies = typeof technologies
export type Project = (typeof projects)[number]
export type Projects = typeof projects

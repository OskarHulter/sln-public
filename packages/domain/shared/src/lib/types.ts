import constants from './constants.js'
import content, { about, topics } from './content.js'
import jobs from './domain/jobs.js'
import projects from './domain/projects.js'
import technologies from './domain/technologies.js'

export type Job = (typeof jobs)[number]
export type Jobs = typeof jobs
export type Content = typeof content
export type ContentKeys = keyof Content
export type ConstantsWeb = typeof constants
export type ConstantsWebType = keyof ConstantsWeb
export type Topic = (typeof topics)[number]['name']
export type Topics = typeof topics
export type About = typeof about
export type TechName = (typeof technologies)['techNames'][number]
export type Technologies = typeof technologies
export type Project = (typeof projects)[number]
export type Projects = typeof projects

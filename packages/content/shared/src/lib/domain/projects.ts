import { images } from '../assets/index.js'

export const projects = [
  {
    name: 'personal website',
    description: 'Built a responsive website using gatsby.Gatsby enables free and blazingly fast hosting directly on a CDN.Website template that will be used for my new site as well as the company of a relative.A flexible and reusable framework that captures my favorite patterns.',
    siteUrl: 'www.oskarhulter.com',
    githubUrl: 'www.oskarhulter.com',
    technologies: ['ts', 'react', 'stitches', 'next', 'nextui'],
    image: images[0],
  },
  {
    name: 'Timeseries analysis',
    description: 'Comparison and evaluation of market decisions.To learn more about machine learning, dataviz and time - series analysis.',
    siteUrl: 'www.oskarhulter.com',
    githubUrl: 'www.oskarhulter.com',
    technologies: ['python', 'pandas', 'pinescript', 'tradingview'],
    image: images[0],
  },
]

export type Project = typeof projects[number]
export type Projects = typeof projects

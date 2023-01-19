import { images } from '../assets/index.js'

export const jobs = [
  {
    name: 'sigmaIt',
    title: 'MyTeam',
    description: 'Inhouse consultancy team delivering and maintaining projects for clients',
    role: 'Web Developer',
    technologies: ['Javascript', 'React', 'Wordpress', 'PHP'],
    reference: 'bjorn',
    startYear: '2018',
    endYear: '2019',
    siteUrl: 'https://www.sigma.se/',
    isConsultancy: true,
    image: images[0],
  },
  {
    name: 'nexerGroup',
    title: 'Nexer',
    description: 'Help clients plan and deliver greenfield web projects.',
    role: 'Techlead, Fullstack Developer',
    technologies: ['Typescript', 'React', 'Node'],
    startYear: '2019',
    endYear: '2022',
    reference: 'bjorn',
    siteUrl: 'https://nexergroup.com/',
    isConsultancy: true,
    image: images[0],
  },
  {
    name: 'mindler',
    title: 'Mindler',
    description: 'Rewrite the website using modern tech like SSR.',
    role: 'Web Developer',
    technologies: ['Typescript', 'React', 'next.js'],
    startYear: '2022',
    endYear: '2022',
    reference: 'bjorn',
    siteUrl: 'https://mindler.se/',
    isConsultancy: false,
    image: images[0],
  },
]

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

const techNames = [
  'html', 'Javascript', 'Typescript', 'node', 'react', 'next',
  'react-query', 'redux', 'zustand', 'next', 'react-hook-form', 'gatsby',
  'css', 'styled-components', 'Tailwind', 'stitches', 'css-in-js', 'C', 'C#', 'Python', 'Java', 'php', 'GraphQL', 'REST', 'zod', 'SQL', 'NOSQL', 'NEWSQL', 'postgres', 'MySQL', 'mongoDB', 'planetScale', 'jest', 'testing-library', 'cypress', 'playwright', 'webpack', 'nx', 'vite', 'babel', 'eslint', 'git', 'aws', 'wireshark', 'nmap', 'data-viz', 'design', 'agile', 'scrum', 'kanban', 'lean', 'Javascript', 'python', 'C', 'C#', 'php', 'Java',
]

const favoriteTools = [
  {
    name: 'zod',
    description: 'Runtime validation with perfect TS integration.',
    npmUrl: 'https://mindler.se/',
  },
  {
    name: 'tanstack-query',
    description: 'Best API for data fetching and caching.',
    npmUrl: 'https://mindler.se/',
  },
  {
    name: 'nx',
    description: 'Best monorepo manager.',
    npmUrl: 'https://mindler.se/',
  },
]

export const technologies = {
  techNames,
  favoriteTools,
}

export type TechName = typeof technologies['techNames'][number]
export type Technologies = typeof technologies
export type Project = typeof projects[number]
export type Projects = typeof projects
export type Job = typeof jobs[number]
export type Jobs = typeof jobs

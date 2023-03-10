const techNames = [
  'html',
  'Javascript',
  'Typescript',
  'node',
  'react',
  'next',
  'react-query',
  'redux',
  'zustand',
  'next',
  'react-hook-form',
  'gatsby',
  'css',
  'styled-components',
  'Tailwind',
  'stitches',
  'css-in-js',
  'C',
  'C#',
  'Python',
  'Java',
  'php',
  'GraphQL',
  'REST',
  'zod',
  'SQL',
  'NOSQL',
  'NEWSQL',
  'postgres',
  'MySQL',
  'mongoDB',
  'planetScale',
  'jest',
  'testing-library',
  'cypress',
  'playwright',
  'webpack',
  'nx',
  'vite',
  'babel',
  'eslint',
  'git',
  'aws',
  'wireshark',
  'nmap',
  'data-viz',
  'design',
  'agile',
  'scrum',
  'kanban',
  'lean',
  'Javascript',
  'python',
  'C',
  'C#',
  'php',
  'Java',
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

const technologies = {
  techNames,
  favoriteTools,
}

export type TechName = (typeof technologies)['techNames'][number]
export type Technologies = typeof technologies
export default technologies

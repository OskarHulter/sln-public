import images from '../images/index.js'

const jobs = [
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

export type Job = (typeof jobs)[number]
export type Jobs = typeof jobs
export default jobs

import constants from './constants'
import jobs from './domain/jobs'
import projects from './domain/projects'
import technologies from './domain/technologies'
import images from './images'

export const topTraits = ['learner', 'teacher', 'strategic']

export const topics = [
  {
    name: 'hero',
    title: 'Hi, I’m Oskar',
    text: `I'm a fullstack Javascript developer from Sweden. I help teams deliver better software by driving adoption of todays most valuable tools and practices.`,
  },
  {
    name: 'contactDetails',
    title: 'Contact',
    text: `Get in touch at: ${constants.email}`,
  },
  {
    name: 'skills',
    title: 'Skills',
    text: `Specialized in semantic HTML, modern CSS, JavaScript, Node & TypesScript.
      I'm up to date about the newest trends but I always try to choose the right tool for the job. I know that my greatest asset isn't knowledge about flavour of the month frameworks, but in my reasoning about the trade-offs they offer.
      My favorite JS tools are react, webpack, cypress, styled-components & gatsby.
      Design patterns, testing, software architecture & declarative/functional programming are the technical topics I am most excited about at the moment.`,
  },
  {
    name: 'education',
    title: 'Education',
    text: `
      I finished my bachelor's degree in ${constants.education.subject} at ${constants.education.university}, ${constants.education.endYear}.
      My thesis was an exploratory case-study about improving software documentation using data visualization. Successfully supporting that data-visualization does make documentation easier to understand.
      Since then, I've focused my attention on modern web development.`,
  },
  {
    name: 'Personality',
    title: 'Personality',
    text: `
    I'm an INTPJ. I definitely have an analytical mindset.This is reflected in my three biggest interests: music, strategy games & programming.
    As with any personality trait, an analytical mindset brings both pros and cons.

    I really enjoy the process of learning, working on my craft, experiencing new realizations and the fulfillment of solving problems efficiently.
    My primary challenge is that I am susceptible to analysis paralysis. I try to remedy this by acknowledging that no solution has to be perfect from the start. Even if you start building something that isn't the most efficient solution, you'll learn the correct requirements in the process.
    `,
  },
  {
    name: 'origin',
    title: 'Origin',
    text: `My passion for computers started at the age of six.
      Specifically,
      around the time my step-father wrote a note
      explaining the steps to launch Warcraft 2 from MS-DOS.
      That note became a portal to another world.
      A world which I embraced.

      A lot has changed since 1997, but my passion remained.`,
  },
  {
    name: 'systems',
    title: 'Systems',
    text: `
    However, my curiosity is not limited to the technical realm.
      I am interested in systems thinking in the broadest sense, covering topics like business processes and understanding customer needs. My thoughts on these topics are mostly influenced by the lean methodology. I studied lean during my time at LTU and it deeply resonates with my personal core values. The lean principles are all important tools in my tool belt that I find useful in many different areas.

      The art of writing clean code that is concise, consistent, elegant and readable is a fulfilling challenge that I try to get better at each day.
      I would love to apply & learn more about machine learning in the long term.
    `,
  },
  {
    name: 'teamwork',
    title: 'Teamwork',
    text: `
      I enjoy working with other people & I am very talkative for being an introvert. One of my core values is to always leave my ego at the door and take every opportunity to improve. This means that I value feedback from others, even if it could be construed as criticism.
      `,
  },
] as const

// export const getByName: (_: ContentKeys) => Partial<Content> = (name) => content[name]
// export const findTopic = (name: Topic, list: Topics) => list.find((data) => data.name === name)

export const content = {
  constants,
  topics,
  projects,
  jobs,
  topTraits,
  technologies,
  images,
}

export default content

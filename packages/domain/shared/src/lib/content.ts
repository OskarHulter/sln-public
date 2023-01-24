import { v4 as uuid } from 'uuid'
import { z } from 'zod'
import constants from './constants'

const profilePic = {
  key: uuid(),
  alt: 'Smiling profile picture of Oskar',
  src: `${constants.urls.profilePicUrl}`,
  width: '200',
  height: '200',
}

export const idSchema = z.string().uuid()
export type ContentId = z.infer<typeof idSchema>

export const imageSchema = z.object({
  key: z.string().uuid(),
  alt: z.string(),
  src: z.string().url(),
  width: z.string(),
  height: z.string(),
})
export const contentBlockSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  title: z.string(),
  text: z.string(),
  image: imageSchema.nullable().default(null),
})

export const contentKey = contentBlockSchema.keyof()
export const imageKey = imageSchema.keyof()

export type ImageKey = z.infer<typeof imageKey>
export type ContentKey = z.infer<typeof contentKey>
export type ContentBlock = z.infer<typeof contentBlockSchema>
export type ContentImage = z.infer<typeof imageSchema>
export type ContentList = ReadonlyArray<ContentBlock>

const contentList: ContentList = [
  {
    id: uuid(),
    name: 'hero',
    title: 'I’m Oskar',
    text: `I'm a fullstack Javascript developer from Sweden. I help teams deliver better software by driving adoption of todays most valuable tools and practices.`,
    image: profilePic,
  },
  {
    id: uuid(),
    name: 'contactDetails',
    title: 'Contact',
    text: `Get in touch at: ${constants.siteOwner.email}`,
    image: null,
  },
  {
    id: uuid(),
    name: 'skills',
    title: 'Skills',
    text: `Specialized in semantic HTML, modern CSS, JavaScript, Node & TypesScript.
      I'm up to date about the newest trends but I always try to choose the right tool for the job. I know that my greatest asset isn't knowledge about flavour of the month frameworks, but in my reasoning about the trade-offs they offer.
      My favorite JS tools are react, webpack, cypress, styled-components & gatsby.
      Design patterns, testing, software architecture & declarative/functional programming are the technical topics I am most excited about at the moment.`,
    image: null,
  },
  {
    id: uuid(),
    name: 'education',
    title: 'Education',
    text: `
      Bachelor's degree in ${constants.siteOwner.education}.
      My thesis was an exploratory case-study about improving software documentation using data visualization. Successfully supporting that data-visualization does make documentation easier to understand.
      Since then, I've focused my attention on modern web development.`,
    image: null,
  },
  {
    id: uuid(),
    name: 'Personality',
    title: 'Personality',
    text: `
    I'm an INTPJ. I definitely have an analytical mindset.This is reflected in my three biggest interests: music, strategy games & programming.
    As with any personality trait, an analytical mindset brings both pros and cons.

    I really enjoy the process of learning, working on my craft, experiencing new realizations and the fulfillment of solving problems efficiently.
    My primary challenge is that I am susceptible to analysis paralysis. I try to remedy this by acknowledging that no solution has to be perfect from the start. Even if you start building something that isn't the most efficient solution, you'll learn the correct requirements in the process.
    `,
    image: null,
  },
  {
    id: uuid(),
    name: 'origin',
    title: 'Origin',
    text: `My passion for computers started at the age of six.
      Specifically,
      around the time my step-father wrote a note
      explaining the steps to launch Warcraft 2 from MS-DOS.
      That note became a portal to another world.
      A world which I embraced.

      A lot has changed since 1997, but my passion remained.`,
    image: null,
  },
  {
    id: uuid(),
    name: 'systems',
    title: 'Systems',
    text: `
    However, my curiosity is not limited to the technical realm.
      I am interested in systems thinking in the broadest sense, covering topics like business processes and understanding customer needs. My thoughts on these topics are mostly influenced by the lean methodology. I studied lean during my time at LTU and it deeply resonates with my personal core values. The lean principles are all important tools in my tool belt that I find useful in many different areas.

      The art of writing clean code that is concise, consistent, elegant and readable is a fulfilling challenge that I try to get better at each day.
      I would love to apply & learn more about machine learning in the long term.
    `,
    image: null,
  },
  {
    id: uuid(),
    name: 'teamwork',
    title: 'Teamwork',
    text: `
      I enjoy working with other people & I am very talkative for being an introvert. One of my core values is to always leave my ego at the door and take every opportunity to improve. This means that I value feedback from others, even if it could be construed as criticism.
      `,
    image: null,
  },
]

export default contentList

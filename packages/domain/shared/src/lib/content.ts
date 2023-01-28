import { v4 as uuid } from 'uuid'
import { z } from 'zod'
import constants from './constants'

const profilePic = {
  key: uuid(),
  alt: 'Smiling profile picture of Oskar',
  src: `${constants.urls.profilePicUrl}`,
  width: 200,
  height: 200,
}

export const idSchema = z.string().uuid()
export type ContentId = z.infer<typeof idSchema>

export const imageSchema = z.object({
  key: z.string().uuid(),
  alt: z.string(),
  src: z.string().url(),
  width: z.number(),
  height: z.number(),
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
    title: 'Oskar Hulter',
    text: `I'm a fullstack Javascript developer from Sweden. I help teams deliver better software by driving adoption of todays most valuable tools and practices.`,
    image: profilePic,
  },
  {
    id: uuid(),
    name: 'hero2',
    title: 'Oskar Hulter',
    text: `Hi, my name is:`,
    image: profilePic,
  },
  {
    id: uuid(),
    name: 'hero3',
    title: 'Oskar Hulter.',
    text: `let myName = () => `,
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
  {
    id: uuid(),
    name: 'Favorite Subjects',
    title: 'Teamwork',
    text: `
      Programming, music, finance, crypto, and IT-architecture are all fascinating subjects that have many connections and similarities.

First, programming and music both involve creativity and problem-solving. In programming, one has to write code to solve a problem, while in music, one has to compose a melody or lyrics to convey a message. Both require a deep understanding of the medium, whether it's a programming language or music theory, in order to create something that is beautiful and functional.

Second, finance and crypto share a lot of similarities. Both deal with the flow of money and the management of assets. In finance, one has to understand the markets and how to invest in them, while in crypto, one has to understand blockchain technology and how to navigate the digital asset market. Both require a deep understanding of economics and a keen sense of risk management.

Finally, IT-architecture and all of the above are connected by the importance of understanding systems and how they work. IT-architecture deals with the design and organization of IT systems, while programming deals with the implementation of those systems, music deals with the creation of systems of sound, finance deals with the systems of money, and crypto deals with the systems of digital assets. All of them require a deep understanding of how systems work and how to optimize them for maximum efficiency and performance.

All these subjects are fascinating because they require creativity, problem-solving, and a deep understanding of complex systems. They also have a direct impact on our daily lives, whether through the technology we use, the music we listen to, the financial decisions we make, or the digital assets we own. They offer endless possibilities for innovation, growth, and progress.`,
    image: null,
  },
  {
    id: uuid(),
    name: 'Favorite Subjects',
    title: 'Teamwork',
    text: `
      Sure, one way that programming, music, finance, crypto, and IT-architecture connect is through the use of patterns. In programming, patterns are used to solve common problems and improve code organization. One example is Domain-Driven Design (DDD), which is a pattern used to design software that reflects a domain expert's understanding of the problem. DDD emphasizes the use of a rich domain model and communication with domain experts in order to create a more accurate and effective solution.

Type systems, which are used in programming languages such as Haskell and TypeScript, are another example of patterns that can be used to improve the quality and maintainability of code. Type systems allow for the creation of more robust and predictable code by enforcing strict rules on data types and function signatures. This can help prevent common programming errors and make the code easier to understand and maintain.

In music, patterns are also an important aspect. The use of chord progressions, melody, and rhythm are examples of patterns that are used to create structure and coherence in a song. These patterns can be used to evoke emotions and convey a message in a way that is easily understandable for the listener.

In finance, patterns can be found in the stock market, where trends and patterns are used to predict future price movements. Technical analysis, for example, is a method that uses patterns in historical stock prices to identify potential opportunities for investment.

In crypto, patterns can be found in the behavior of the market, where trends and patterns in trading activity are used to predict future price movements. Some crypto traders use technical analysis to identify patterns in historical crypto prices to make investment decisions.

In IT-architecture, patterns are a fundamental aspect of the design and organization of IT systems. Some examples of patterns include Microservices architecture, Event-Driven architecture, and CQRS (Command Query Responsibility Segregation). These patterns provide a structure for building scalable, maintainable, and flexible systems.

Overall, patterns are an important aspect of programming, music, finance, crypto, and IT-architecture, and they play a crucial role in solving common problems, improving code organization, and creating structure and coherence in systems.`,
    image: null,
  },
]

export default contentList

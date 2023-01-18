import { Content, content, ContentKeys, Topic, Topics } from '../content'


export const getContent = (): Content => content
export const getContentByName = (name: ContentKeys) => content[name]

export const findTopic = (name: Topic, list: Topics) => list.find(data => data.name === name)

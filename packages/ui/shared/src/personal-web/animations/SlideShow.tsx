import { AnimatePresence, motion } from 'framer-motion'
import type { ImageProps } from 'next/image'
import Image from 'next/image'

export const Slideshow = (image: ImageProps) => (
  <AnimatePresence>
    <motion.div
      key={image.src.toString()}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }} // optional
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 300 },
        opacity: { duration: 1 },
      }}
    >
      <Image {...image} />
    </motion.div>
  </AnimatePresence>
)

// const Item = () => (
//   <div>
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     />
//   </div>
// )

// /**
//  * The component being removed must be a direct
//  * descendant of AnimatePresence due to limitations
//  * with React.
//  */
// export const MyComponent = ({ items }) => (
//   <AnimatePresence>
//     {items.map(({ id }) => (
//       <Item key={id} />
//     ))}
//   </AnimatePresence>
// )

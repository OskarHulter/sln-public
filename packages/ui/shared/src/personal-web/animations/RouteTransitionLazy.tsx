import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import { useRouter } from 'next/router'
import type { BaseProps } from '../../types'

export default function RouteTransitionLazy({ children }: BaseProps) {
  const { pathname } = useRouter()

  return (
    <LazyMotion
      features={domAnimation}
      strict
    >
      <AnimatePresence mode='wait'>
        <m.div
          layoutScroll
          className='routeTransition'
          key={pathname}
          initial={{ opacity: 0, translateY: 7 }}
          animate={{ opacity: 1, translateY: 0 }} // o: 0.5?
          exit={{ opacity: 0, translateY: 7 }}
          transition={{
            duration: 0.18,
            opacity: { ease: 'linear' },
            layout: { duration: 0.3 },
          }}
          style={{ overflow: 'scroll' }}
        >
          {children}
        </m.div>
      </AnimatePresence>
    </LazyMotion>
  )
}
// * measure the scrolling. layout in reference to an element
// <motion.div layoutScroll style={{ overflow: "scroll" }}>
//   <motion.div layout />
// </motion.div>

// <AnimatePresence mode='wait'>
//   <motion.div
//     className='routeTransition'
//     key={pathname}
//     initial={{ opacity: 0, translateY: 7 }}
//     animate={{ opacity: 1, translateY: 0 }}
//     exit={{ opacity: 0, translateY: 7 }}
//     transition={{ duration: 0.18 }}
//   >
//     {children}
//   </motion.div>
// </AnimatePresence>

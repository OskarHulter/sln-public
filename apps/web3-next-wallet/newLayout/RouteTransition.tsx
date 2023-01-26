import { BaseProps } from '@sln/ui'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function RouteTransition({ children }: BaseProps) {
  const { pathname } = useRouter()

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className='routeTransition'
        key={pathname}
        initial={{ opacity: 0, translateY: 7 }}
        animate={{ opacity: 1, translateY: 0 }}
        exit={{ opacity: 0, translateY: 7 }}
        transition={{ duration: 0.18 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

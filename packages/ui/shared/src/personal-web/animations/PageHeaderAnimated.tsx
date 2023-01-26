import { Col, Divider, Row, Text } from '@nextui-org/react'
import { useScroll } from 'framer-motion'
import { RefObject, useEffect, useState } from 'react'
import type { BaseProps } from '../../types'

export default function PageHeaderAnimated({
  children,
  scrollRef,
}: BaseProps & { scrollRef?: RefObject<HTMLDivElement> }) {
  const [hidden, setHidden] = useState(true)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const currentProgress = scrollYProgress.get()
    const previousProgress = scrollYProgress.getPrevious()

    function update() {
      if (currentProgress < previousProgress) {
        setHidden(false)
        console.log('visible')
      } else if (currentProgress > 100 && currentProgress > previousProgress) {
        setHidden(true)
        console.log('hidden')
      }
    }

    if (currentProgress > 500) {
      update()
    }
  }, [scrollYProgress])
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  }
  return (
    // <motion.header
    //   initial={{ opacity: 0 }}
    //   whileInView={{ opacity: 1 }}
    //   viewport={{
    //     once: true,
    //     root: scrollRef,
    //   }}
    //   variants={variants}
    //   animate={hidden ? 'hidden' : 'visible'}
    //   transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
    // >
    <>
      <Row
        css={{ marginBottom: '$5', width: '100%' }}
        justify='space-between'
        align='center'
      >
        <Col>
          <Text
            h3
            weight='bold'
            css={{
              textGradient: '90deg, $secondary, $primary 30%',
            }}
          >
            Oskar Hulter
          </Text>
        </Col>
        {children ? <Col css={{ flex: 1 }}>{children}</Col> : null}
      </Row>

      <Divider css={{ marginBottom: '$10' }} />
    </>
    // </motion.header>
  )
}

// const Accordion = ({ i, expanded, setExpanded }) => {
//   const isOpen = i === expanded

//   // By using `AnimatePresence` to mount and unmount the contents, we can animate
//   // them in and out while also only rendering the contents of open accordions
//   return (
//     <>
//       <motion.header
//         initial={false}
//         animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
//         onClick={() => setExpanded(isOpen ? false : i)}
//       />
//       <AnimatePresence initial={false}>
//         {isOpen && (
//           <motion.section
//             key="content"
//             initial="collapsed"
//             animate="open"
//             exit="collapsed"
//             variants={{
//               open: { opacity: 1, height: "auto" },
//               collapsed: { opacity: 0, height: 0 }
//             }}
//             transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
//           >
//             <ContentPlaceholder />
//           </motion.section>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export const Example = () => {
//   // This approach is if you only want max one section open at a time. If you want multiple
//   // sections to potentially be open simultaneously, they can all be given their own `useState`.
//   const [expanded, setExpanded] = useState<false | number>(0)

//   return accordionIds.map((i) => (
//     <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
//   ))
// }

// const accordionIds = [0, 1, 2, 3];

// declare class MotionValue<V = any> {
//   /**
//    * This will be replaced by the build step with the latest version number.
//    * When MotionValues are provided to motion components, warn if versions are mixed.
//    */
//   version: string
//   /**
//    * If a MotionValue has an owner, it was created internally within Framer Motion
//    * and therefore has no external listeners. It is therefore safe to animate via WAAPI.
//    */
//   owner?: VisualElement
//   private stopPassiveEffect?;
/**
 * Adds a function that will be notified when the `MotionValue` is updated.
 *
 * It returns a function that, when called, will cancel the subscription.
 *
 * When calling `onChange` inside a React component, it should be wrapped with the
 * `useEffect` hook. As it returns an unsubscribe function, this should be returned
 * from the `useEffect` function to ensure you don't add duplicate subscribers..
 *
 * ```jsx
 * export const MyComponent = () => {
 *   const x = useMotionValue(0)
 *   const y = useMotionValue(0)
 *   const opacity = useMotionValue(1)
 *
 *   useEffect(() => {
 *     function updateOpacity() {
 *       const maxXY = Math.max(x.get(), y.get())
 *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
 *       opacity.set(newOpacity)
 *     }
 *
 *     const unsubscribeX = x.on("change", updateOpacity)
 *     const unsubscribeY = y.on("change", updateOpacity)
 *
 *     return () => {
 *       unsubscribeX()
 *       unsubscribeY()
 *     }
 *   }, [])
 *
 *   return <motion.div style={{ x }} />
 * }
 * ```'
 * */

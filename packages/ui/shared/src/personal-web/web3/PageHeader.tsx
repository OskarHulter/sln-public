import { Col, Divider, Row, Text, Tooltip } from '@nextui-org/react'
import UserAvatar from '../atoms/badges/UserAvatar'
import ThemeSwitch from '../atoms/buttons/ThemeSwitch'
import UserTwitterCard from '../blocks/UserTwitterCard'

export default function PageHeader() {
  return (
    <>
      <Row
        css={{
          maxWidth: '900px',
          position: 'sticky',
          boxShadow: '0 10px 15px #111111',
          background: '#111111',
          zIndex: 200,
          top: 0,
          left: 0,
          padding: '0 $10 0 $10',
        }}
        justify='space-between'
        align='center'
        as='header'
      >
        <Col css={{ w: 'auto', h: 'auto', padding: '0 $6 0 $6' }}>
          <Text
            h3
            weight='bold'
            css={{
              textGradient: '90deg, $secondary, $primary 30%',
              p: '0',
              m: '0',
            }}
          >
            <Tooltip
              placement='bottomStart'
              content={<UserTwitterCard />}
            >
              <UserAvatar />
            </Tooltip>
          </Text>
        </Col>
        <Col css={{ w: 'auto', h: 'auto', padding: '$2 $10 0 0' }}>
          <ThemeSwitch />
        </Col>
      </Row>

      <Divider css={{ marginBottom: '$6' }} />
    </>
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

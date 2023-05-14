import React, { forwardRef } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
    const onTheRight = { x: '100%' }
    const inTheCenter = { x: 0 }
    const onTheLeft = { x: '-100%' }

    const transition = { duration: 0.15, ease: 'easeInOut' }

    return (
        <motion.div
            className='max-h-full'
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            {...rest}
        >
            {children}
        </motion.div>
    )
}

export default forwardRef(PageTransition)
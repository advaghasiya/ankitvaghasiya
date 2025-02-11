import { motion, MotionProps } from 'framer-motion'
import React, { ReactNode } from 'react'

interface TransitionProps extends MotionProps {
  children: ReactNode;
}

const Transition: React.FC<TransitionProps> = ({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>
}

export default Transition
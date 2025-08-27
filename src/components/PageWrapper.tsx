import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { pageVariants, pageTransition } from '../utils/animations';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className = "" }: PageWrapperProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

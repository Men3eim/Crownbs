import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Custom hook for consistent page animations
export const usePageAnimations = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change (instant for better performance)
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return location.pathname;
};

// Animation configuration for consistent timing
export const pageAnimationConfig = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -20, scale: 0.98 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  },
};

// Stagger animation for multiple elements
export const staggerConfig = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    },
  },
};
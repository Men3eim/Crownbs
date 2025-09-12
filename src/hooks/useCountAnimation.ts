import { useState, useEffect, useRef } from 'react';

interface UseCountAnimationOptions {
  duration?: number;
  delay?: number;
  easing?: (t: number) => number;
}

export function useCountAnimation(
  endValue: number,
  options: UseCountAnimationOptions = {}
) {
  const {
    duration = 2000,
    delay = 0,
    easing = (t: number) => t * (2 - t) // easeOutQuad
  } = options;

  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const hasAnimated = useRef(false);

  useEffect(() => {
    // Only animate once
    if (hasAnimated.current) return;
    
    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      setIsAnimating(true);
      
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);
        const currentValue = Math.floor(endValue * easedProgress);
        
        setCount(currentValue);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(endValue); // Ensure final value is exact
          setIsAnimating(false);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    if (delay > 0) {
      const timeoutId = setTimeout(startAnimation, delay);
      return () => clearTimeout(timeoutId);
    } else {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [endValue, duration, delay, easing]);

  return { count, elementRef, isAnimating };
}

// Hook for formatted numbers (with +, %, £, etc.)
export function useFormattedCountAnimation(
  endValue: number,
  format: (value: number) => string,
  options: UseCountAnimationOptions = {}
) {
  const { count, elementRef } = useCountAnimation(endValue, options);
  return { formattedCount: format(count), elementRef };
}

// Predefined formatters
export const formatters = {
  currency: (value: number) => `£${value}M+`,
  percentage: (value: number) => `${value}%`,
  plus: (value: number) => `${value}+`,
  decimal: (value: number) => `${(value / 10).toFixed(1)}%`,
  plain: (value: number) => value.toString()
};

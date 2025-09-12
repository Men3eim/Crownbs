import { useState, useEffect, useRef } from 'react';

interface CountUpNumberProps {
  endValue: number;
  duration?: number;
  delay?: number;
  format?: (value: number) => string;
  className?: string;
}

export default function CountUpNumber({ 
  endValue, 
  duration = 2000, 
  delay = 0, 
  format = (value) => value.toString(),
  className = ""
}: CountUpNumberProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number>();
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const startAnimation = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      setHasStarted(true);

      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out quad function
        const easedProgress = 1 - Math.pow(1 - progress, 2);
        const currentValue = Math.floor(endValue * easedProgress);
        
        setCount(currentValue);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setCount(endValue); // Ensure exact final value
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
  }, [endValue, duration, delay]);

  return (
    <span className={className}>
      {format(count)}
    </span>
  );
}

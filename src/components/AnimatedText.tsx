import { motion } from 'framer-motion';
import { wordVariants, splitTextIntoWords } from '../utils/animations';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export default function AnimatedText({ 
  text, 
  className = "", 
  delay = 0.5,
  highlightWords = [],
  highlightClassName = "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent"
}: AnimatedTextProps) {
  const words = splitTextIntoWords(text);

  return (
    <div className={`flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-4 gap-y-1 sm:gap-y-2 ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.includes(word);

        return (
          <motion.span
            key={`${word}-${index}`}
            className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: delay + index * 0.15,
              duration: 0.9,
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 12
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { 
                duration: 0.2,
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

// Alternative component for left-aligned text
export function AnimatedTextLeft({ 
  text, 
  className = "", 
  delay = 0.5,
  highlightWords = [],
  highlightClassName = "bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 bg-clip-text text-transparent"
}: AnimatedTextProps) {
  const words = splitTextIntoWords(text);

  return (
    <div className={`flex flex-wrap gap-x-2 gap-y-1 ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.includes(word);
        
        return (
          <motion.span
            key={`${word}-${index}`}
            className={`inline-block ${isHighlighted ? highlightClassName : ""}`}
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: delay + index * 0.15,
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            {word}
          </motion.span>
        );
      })}
    </div>
  );
}

// Component for animated paragraphs
export function AnimatedParagraph({ 
  text, 
  className = "", 
  delay = 0.8
}: Omit<AnimatedTextProps, 'highlightWords' | 'highlightClassName'>) {
  const words = splitTextIntoWords(text);

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-1"
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          transition={{
            delay: delay + index * 0.05,
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

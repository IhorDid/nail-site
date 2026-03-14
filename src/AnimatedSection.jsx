import { useEffect, useRef, useState } from 'react';

function AnimatedSection({
  children,
  className = '',
  direction = 'up',
  delay = 0,
  duration = 800,
  once = false,
  threshold = 0.2,
  distance = 40,
  as: Tag = 'section',
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (once) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(element);
          }
        } else {
          if (entry.intersectionRatio >= threshold) {
            setIsVisible(true);
          } else if (entry.intersectionRatio < 0.05) {
            setIsVisible(false);
          }
        }
      },
      { threshold: [0, 0.05, threshold] },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [once, threshold]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0)';

    switch (direction) {
      case 'down':
        return `translate3d(0, -${distance}px, 0)`;
      case 'left':
        return `translate3d(${distance}px, 0, 0)`;
      case 'right':
        return `translate3d(-${distance}px, 0, 0)`;
      case 'up':
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms ease ${delay}ms, transform ${duration}ms ease ${delay}ms`,
    willChange: 'opacity, transform',
  };

  return (
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}

export default AnimatedSection;

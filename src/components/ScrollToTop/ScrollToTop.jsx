import { useState, useEffect } from 'react';
import css from './ScrollToTop.module.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`${css.btn} ${visible ? css.visible : ''}`}
      onClick={handleClick}
      aria-label="Вгору"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;

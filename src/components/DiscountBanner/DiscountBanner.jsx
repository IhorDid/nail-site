import { useState, useEffect } from 'react';
import css from './DiscountBanner.module.css';

const DEADLINE = new Date('2026-04-12T23:59:59').getTime();

const pad = n => String(n).padStart(2, '0');

const DiscountBanner = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const deadline = DEADLINE;

    const tick = () => {
      const diff = deadline - Date.now();
      if (diff <= 0) {
        setExpired(true);
        setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ d, h, m, s });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (expired || dismissed) return null;

  const handleClick = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const { d, h, m, s } = timeLeft;

  return (
    <div className={`${css.banner} ${visible ? css.visible : ''}`}>
      <button
        className={css.pill}
        onClick={handleClick}
        aria-label="Перейти до тарифів"
      >
        <span className={css.fire}>🔥</span>
        <span className={css.text}>Знижка 10%</span>
        <div className={css.timer}>
          <span className={css.unit}>
            <span className={css.num}>{pad(d)}</span>
            <span className={css.label}>дн</span>
          </span>
          <span className={css.sep}>:</span>
          <span className={css.unit}>
            <span className={css.num}>{pad(h)}</span>
            <span className={css.label}>год</span>
          </span>
          <span className={css.sep}>:</span>
          <span className={css.unit}>
            <span className={css.num}>{pad(m)}</span>
            <span className={css.label}>хв</span>
          </span>
          <span className={css.sep}>:</span>
          <span className={css.unit}>
            <span className={css.num}>{pad(s)}</span>
            <span className={css.label}>сек</span>
          </span>
        </div>
      </button>
      <button
        className={css.close}
        onClick={() => setDismissed(true)}
        aria-label="Закрити"
      >
        ✕
      </button>
    </div>
  );
};

export default DiscountBanner;

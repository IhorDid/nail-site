import { useState, useEffect } from 'react';
import css from './DiscountBanner.module.css';

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'discount_deadline';

const pad = n => String(n).padStart(2, '0');

const getDeadline = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    const ts = parseInt(stored, 10);
    if (ts > Date.now()) return ts;
  }
  const deadline = Date.now() + THREE_DAYS_MS;
  localStorage.setItem(STORAGE_KEY, String(deadline));
  return deadline;
};

const DiscountBanner = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const deadline = getDeadline();

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

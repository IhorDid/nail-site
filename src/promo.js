// Налаштування ціни та акції. Змінювати тільки тут.
// Дедлайн — за київським часом (у листопаді UTC+2).

export const PROMO_DEADLINE = new Date('2026-11-26T23:59:59+02:00').getTime();

export const REGULAR_PRICE = 6200;
export const PROMO_PRICE = 5200;

// Бонус, який показується в картці тільки під час акції.
export const PROMO_BONUS = 'Додатковий місяць доступу до каналу з уроками';

// «26 листопада» — формується з дедлайну, руками не міняти.
export const PROMO_UNTIL = new Intl.DateTimeFormat('uk-UA', {
  day: 'numeric',
  month: 'long',
  timeZone: 'Europe/Kyiv',
}).format(PROMO_DEADLINE);

// Кнопки оплати WayForPay. Якщо для акції буде окрема кнопка на 5200 —
// вставити її посилання в PROMO_PAY_URL, і сайт сам переключиться після дедлайну.
export const REGULAR_PAY_URL = 'https://secure.wayforpay.com/button/b9d56763f0e0e';
export const PROMO_PAY_URL = 'https://secure.wayforpay.com/button/b9d56763f0e0e';

export const isPromoActive = () => Date.now() < PROMO_DEADLINE;

// Межа setTimeout (~24.8 доби); далі таймер спрацьовує одразу.
const MAX_TIMEOUT = 2147483647;

// Викликає onEnd у момент завершення акції (якщо сторінка відкрита).
export const onPromoEnd = onEnd => {
  const diff = PROMO_DEADLINE - Date.now();
  if (diff <= 0 || diff > MAX_TIMEOUT) return () => {};
  const id = setTimeout(onEnd, diff);
  return () => clearTimeout(id);
};

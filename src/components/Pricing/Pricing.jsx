import { useEffect, useState } from 'react';
import {
  PiGiftLight,
  PiLockSimpleLight,
  PiCalendarCheckLight,
} from 'react-icons/pi';
import css from './Pricing.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
import {
  PROMO_PRICE,
  REGULAR_PRICE,
  PROMO_PAY_URL,
  REGULAR_PAY_URL,
  PROMO_BONUS,
  PROMO_UNTIL,
  BOOKING_DEPOSIT,
  BOOKING_PAY_URL,
  BOOKING_BALANCE_UNTIL,
  isPromoActive,
  onPromoEnd,
} from '../../promo';

const plan = {
  title: 'Онлайн-курс «Голі нігті»',
  features: [
    'Повна програма: блок «Бази» і блок «Гелі»',
    'Усі уроки в записі',
    'Доступ до уроків 3 місяці',
    "Група учасників у Telegram зі зворотним зв'язком",
  ],
};

const Pricing = () => {
  const [promo, setPromo] = useState(isPromoActive);

  useEffect(() => onPromoEnd(() => setPromo(false)), []);

  const { title, features } = plan;
  const price = promo ? PROMO_PRICE : REGULAR_PRICE;
  const payUrl = promo ? PROMO_PAY_URL : REGULAR_PAY_URL;

  return (
    <section className={css.pricing} id="pricing">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Вартість</p>
            <h2 className={css.title}>Вартість курсу</h2>
            {promo && (
              <p className={css.promoNote}>
                Знижка {REGULAR_PRICE - PROMO_PRICE} грн і додатковий місяць
                доступу — для всіх, хто запишеться{' '}
                <strong className={css.promoDate}>
                  до {PROMO_UNTIL} включно
                </strong>
              </p>
            )}
          </div>
          <div className={css.grid}>
            <AnimatedSection as="div" className={css.card} delay={100}>
              {promo && <div className={css.badge}>Акція до {PROMO_UNTIL}</div>}
              <div className={css.cardHeader}>
                <h3 className={css.cardTitle}>{title}</h3>
                <div className={css.priceBlock}>
                  <p className={css.price}>
                    {price}
                    <span className={css.currency}> грн</span>
                  </p>
                  {promo && (
                    <div className={css.discountRow}>
                      <span className={css.oldPrice}>{REGULAR_PRICE} грн</span>
                      <span className={css.discountBadge}>
                        −{REGULAR_PRICE - PROMO_PRICE} грн
                      </span>
                    </div>
                  )}
                </div>
                <p className={css.installment}>
                  Є можливість оплати частинами від банку — до 6 платежів без
                  комісії
                </p>
              </div>
              <ul className={css.features}>
                {features.map(f => (
                  <li key={f} className={css.featureItem}>
                    <span className={css.check}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
                {promo && (
                  <li className={css.bonusItem}>
                    <span className={css.check}>✓</span>
                    <span className={css.bonusText}>{PROMO_BONUS}</span>
                    <PiGiftLight className={css.gift} aria-hidden="true" />
                  </li>
                )}
              </ul>
              <a
                href={payUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={css.btn}
              >
                Записатися на курс
              </a>

              {promo && (
                <div className={css.booking}>
                  <p className={css.divider}>або</p>
                  <div className={css.bookingPanel}>
                    <p className={css.bookingEyebrow}>Мінімальна передплата</p>
                    <h4 className={css.bookingTitle}>
                      Забронюй місце за{' '}
                      <span className={css.bookingAmount}>
                        {BOOKING_DEPOSIT} грн
                      </span>
                    </h4>
                    <ul className={css.bookingPerks}>
                      <li className={css.bookingPerk}>
                        <PiLockSimpleLight
                          className={css.perkIcon}
                          aria-hidden="true"
                        />
                        <span>
                          Фіксуєш ціну{' '}
                          <b className={css.nowrap}>{PROMO_PRICE} грн</b>{' '}
                          замість{' '}
                          <span className={css.nowrap}>{REGULAR_PRICE} грн</span>
                        </span>
                      </li>
                      <li className={css.bookingPerk}>
                        <PiGiftLight
                          className={css.perkIcon}
                          aria-hidden="true"
                        />
                        <span>
                          Подарунок — <b>додатковий місяць доступу</b> до уроків
                        </span>
                      </li>
                    </ul>
                    <p className={css.bookingBalance}>
                      <PiCalendarCheckLight
                        className={css.balanceIcon}
                        aria-hidden="true"
                      />
                      <span>
                        Залишок{' '}
                        <span className={css.nowrap}>
                          {PROMO_PRICE - BOOKING_DEPOSIT} грн
                        </span>{' '}
                        можна внести до{' '}
                        <b className={css.nowrap}>{BOOKING_BALANCE_UNTIL}</b>
                      </span>
                    </p>
                    <a
                      href={BOOKING_PAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={css.btnBooking}
                    >
                      Забронювати місце
                    </a>
                  </div>
                </div>
              )}
            </AnimatedSection>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Pricing;

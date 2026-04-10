import css from './Pricing.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';

const DISCOUNT_DEADLINE = new Date('2026-04-13T23:59:59').getTime();

const plans = [
  {
    title: 'Все сама',
    price: '3510',
    oldPrice: '3900',
    discount: '−10%',
    popular: false,
    payUrl: 'https://secure.wayforpay.com/button/b3181cdcaa880',
    features: [
      'Доступ до всіх уроків',
      'Загальний чат учасників',
      "Без зворотного зв'язку",
      'Доступ до уроків 90 днів',
    ],
  },
  {
    title: 'З куратором',
    price: '5040',
    oldPrice: '5600',
    discount: '−10%',
    popular: true,
    payUrl: 'https://secure.wayforpay.com/button/b9d56763f0e0e',
    features: [
      "Зворотний зв'язок",
      'Перевірка домашніх завдань від куратора протягом 3 тижнів',
      'Загальний чат учасників',
      'Доступ до уроків 90 днів',
      'Сертифікат',
    ],
  },
];

const Pricing = () => {
  const discountActive = Date.now() < DISCOUNT_DEADLINE;

  return (
    <section className={css.pricing} id="pricing">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Тарифи</p>
            <h2 className={css.title}>Обери свій тариф</h2>
          </div>
          <div className={css.grid}>
            {plans.map(
              ({
                title,
                price,
                oldPrice,
                discount,
                popular,
                payUrl,
                features,
              }, i) => (
                <AnimatedSection as="div" key={title} className={css.card} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 200}>
                  {popular && <div className={css.badge}>Популярний вибір</div>}
                  <div className={css.cardHeader}>
                    <h3 className={css.cardTitle}>{title}</h3>
                    <div className={css.priceBlock}>
                      <p className={css.price}>
                        {discountActive ? price : oldPrice}
                        <span className={css.currency}> грн</span>
                      </p>
                      {discountActive && (
                        <div className={css.discountRow}>
                          <span className={css.oldPrice}>{oldPrice} грн</span>
                          <span className={css.discountBadge}>{discount}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <ul className={css.features}>
                    {features.map((f, i) => (
                      <li key={i} className={css.featureItem}>
                        <span className={css.check}>✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={payUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={css.btn}
                  >
                    Записатися
                  </a>
                </AnimatedSection>
              ),
            )}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Pricing;

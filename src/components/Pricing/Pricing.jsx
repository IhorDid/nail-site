import css from './Pricing.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';

const plans = [
  {
    title: 'Все сама',
    price: '3200',
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
    price: '4600',
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
  return (
    <section className={css.pricing} id="pricing">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Тарифи</p>
            <h2 className={css.title}>Обери свій тариф</h2>
          </div>
          <div className={css.grid}>
            {plans.map(({ title, price, popular, payUrl, features }) => (
              <div key={title} className={css.card}>
                {popular && <div className={css.badge}>Популярний вибір</div>}
                <div className={css.cardHeader}>
                  <h3 className={css.cardTitle}>{title}</h3>
                  <p className={css.price}>
                    {price}
                    <span className={css.currency}> грн</span>
                  </p>
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
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Pricing;

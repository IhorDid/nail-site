import css from './Pricing.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';

const PAY_URL = 'https://secure.wayforpay.com/button/b9d56763f0e0e';

const plan = {
  title: 'Онлайн-курс «Голі нігті»',
  price: '6200',
  features: [
    'Повна програма: блок «Бази» і блок «Гелі»',
    'Усі уроки в записі',
    'Доступ до уроків 3 місяці',
    "Група учасників у Telegram зі зворотним зв'язком",
  ],
};

const Pricing = () => {
  const { title, price, features } = plan;

  return (
    <section className={css.pricing} id="pricing">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Вартість</p>
            <h2 className={css.title}>Вартість курсу</h2>
          </div>
          <div className={css.grid}>
            <AnimatedSection as="div" className={css.card} delay={100}>
              <div className={css.cardHeader}>
                <h3 className={css.cardTitle}>{title}</h3>
                <p className={css.price}>
                  {price}
                  <span className={css.currency}> грн</span>
                </p>
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
              </ul>
              <a
                href={PAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={css.btn}
              >
                Записатися на курс
              </a>
            </AnimatedSection>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Pricing;

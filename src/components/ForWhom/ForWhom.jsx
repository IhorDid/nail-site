import css from './ForWhom.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';

const items = [
  'Для майстрів, які хочуть працювати з трендовими короткими і натуральними формами',
  'Для майстрів, які хочуть скоротити час роботи',
  'Для майстрів, які хочуть працювати базами і гелями просто, безпечно і без заморочок',
  'Для майстрів, яким набридло купувати багато різних баночок',
  'Для майстрів, які перейшли з баз на гель, але відшарування і білі плями залишилися',
];

const ForWhom = () => {
  return (
    <section className={css.forWhom} id="forwhom">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Аудиторія</p>
            <h2 className={css.title}>Для кого підійде курс</h2>
          </div>
          <div className={css.grid}>
            {items.map((text, i) => (
              <div key={i} className={css.card}>
                <p className={css.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ForWhom;

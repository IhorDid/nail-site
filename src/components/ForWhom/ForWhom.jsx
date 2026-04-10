import css from './ForWhom.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
import Button from '../../UI/Button/Button';

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
              <AnimatedSection
                as="div"
                key={i}
                className={css.card}
                delay={i * 100}
                direction={i % 2 === 0 ? 'left' : 'right'}
              >
                <p className={css.cardText}>{text}</p>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection as="div" delay={500}>
            <Button text="Записатися на курс" className={css.button} />
          </AnimatedSection>
        </div>
      </SharedLayout>
    </section>
  );
};

export default ForWhom;

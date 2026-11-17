import css from './ForWhom.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
import Button from '../../UI/Button/Button';

const items = [
  'Для майстрів, які хочуть працювати з трендовими короткими і натуральними формами. Дуже тонкі нігті — як свої, тільки краще',
  'Для майстрів, які хочуть скоротити час роботи і не витрачати його на поверхневий опил, побудову чіткої архітектури, затискання арки',
  'Для майстрів, які хочуть навчитися працювати базами і гелями просто, без заморочок, але головне — безпечно!',
  'Для майстрів, яким набридло скупляти 100500 баночок гелів, баз і постійно підбирати їх під різні нігті',
  'Для майстрів, які вже перейшли з баз на гель, але відшарування і білі плями нікуди не ділись',
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

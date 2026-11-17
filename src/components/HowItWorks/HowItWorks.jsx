import css from './HowItWorks.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
import Button from '../../UI/Button/Button';

const steps = [
  {
    icon: '📅',
    title: 'Тривалість — 3 місяці',
    text: 'Увесь цей час у тебе є доступ до всіх уроків курсу',
  },
  {
    icon: '📹',
    title: 'Усі уроки в записі',
    text: 'Дивися у зручний час і переглядай скільки потрібно',
  },
  {
    icon: '💬',
    title: 'Група учасників у Telegram',
    text: "Для отримання зворотного зв'язку і відповідей на запитання",
  },
  {
    icon: '⏰',
    title: 'Обмежений доступ',
    text: 'Щоб ти не відклала перегляд на «ніколи». Але в тебе буде час повернутись і пропрацювати матеріал кілька разів',
  },
];

const HowItWorks = () => {
  return (
    <section className={css.howItWorks} id="howitworks">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Процес</p>
            <h2 className={css.title}>Як проходить курс</h2>
          </div>
          <div className={css.grid}>
            {steps.map(({ icon, title, text }, i) => (
              <AnimatedSection as="div" key={title} className={css.card} delay={i * 120}>
                <div className={css.icon}>{icon}</div>
                <h3 className={css.cardTitle}>{title}</h3>
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

export default HowItWorks;

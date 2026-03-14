import css from './HowItWorks.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';

const steps = [
  {
    icon: '📅',
    title: 'Тривалість — 2 тижні',
    text: 'Структурована програма, яку зручно проходити у своєму темпі',
  },
  {
    icon: '📹',
    title: 'Усі уроки в записі',
    text: 'Дивися у зручний час і переглядай скільки потрібно',
  },
  {
    icon: '💬',
    title: 'Група в Telegram',
    text: "Для домашніх завдань і запитань — завжди на зв'язку",
  },
  {
    icon: '⏰',
    title: 'Доступ — 3 місяці',
    text: 'Доступ обмежений, щоб матеріал не відкладався на "ніколи". Але часу достатньо, щоб повернутись і пропрацювати уроки кілька разів',
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
            {steps.map(({ icon, title, text }) => (
              <div key={title} className={css.card}>
                <div className={css.icon}>{icon}</div>
                <h3 className={css.cardTitle}>{title}</h3>
                <p className={css.cardText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default HowItWorks;

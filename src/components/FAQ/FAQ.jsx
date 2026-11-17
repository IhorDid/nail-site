import { useState } from 'react';
import css from './FAQ.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';

const items = [
  {
    question: 'Чи підійде курс початківцю?',
    answer:
      'Курс розрахований на майстрів з базовими навичками манікюру. Якщо ви вже працюєте з клієнтами і хочете освоїти техніку коротких натуральних нігтів — курс для вас.',
  },
  {
    question: 'Скільки буде доступ до матеріалів?',
    answer:
      'Курс триває 3 місяці — весь цей час у тебе є доступ до всіх уроків. Доступ обмежений, щоб ти не відклала перегляд на «ніколи», але часу достатньо, щоб пропрацювати матеріал кілька разів.',
  },
  {
    question: "Чи є зворотний зв'язок?",
    answer:
      "Так. Для учасників курсу є група в Telegram, де ти отримуєш зворотний зв'язок і відповіді на свої запитання.",
  },
  {
    question: 'Чи можна оплатити частинами?',
    answer:
      'Так, є можливість оплати частинами від банку — до 6 платежів без комісії.',
  },
  {
    question: 'Чи можна проходити курс у зручний час?',
    answer:
      'Так! Усі уроки в записі, тож ти можеш навчатися у зручний для тебе час протягом 3 місяців доступу.',
  },
  {
    question: 'Чим цей курс відрізняється від PRO ГЕЛЬ?',
    answer:
      '«Голі нігті» — про короткі натуральні нігті: покриття базою і тонке зміцнення пластичним гелем без складної архітектури. Довгі нігті, чітку архітектуру і повну реставрацію форм я розкриваю на великому курсі PRO ГЕЛЬ.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = i => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className={css.faq} id="faq">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Питання</p>
            <h2 className={css.title}>Часті запитання</h2>
          </div>
          {items.map(({ question, answer }, i) => (
            <AnimatedSection
              as="li"
              className={css.list}
              delay={100}
              key={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
            >
              <li key={i} className={css.item}>
                <button
                  className={css.question}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{question}</span>
                  <span
                    className={`${css.icon} ${openIndex === i ? css.iconOpen : ''}`}
                  >
                    {openIndex === i ? '✕' : '+'}
                  </span>
                </button>
                {openIndex === i && <p className={css.answer}>{answer}</p>}
              </li>
            </AnimatedSection>
          ))}
        </div>
      </SharedLayout>
    </section>
  );
};

export default FAQ;

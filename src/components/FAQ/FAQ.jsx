import { useState } from 'react';
import css from './FAQ.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';

const items = [
  {
    question: 'Чи підійде курс початківцю?',
    answer:
      'Курс розрахований на майстрів з базовими навичками манікюру. Якщо ви вже працюєте з клієнтами і хочете освоїти техніку коротких натуральних нігтів — курс для вас.',
  },
  {
    question: 'Скільки буде доступ до матеріалів?',
    answer:
      'Доступ до уроків діє 90 днів (3 місяці) після старту курсу. Цього достатньо, щоб пройти програму кілька разів і закріпити навички.',
  },
  {
    question: "Чи є зворотний зв'язок?",
    answer:
      'Зворотний зв\'язок та перевірка домашніх завдань доступні в тарифі "З куратором". У тарифі "Все сама" є загальний чат учасників, де можна спілкуватися з іншими студентами.',
  },
  {
    question: 'Чим відрізняються тарифи?',
    answer:
      'Основна різниця — персональний зворотний зв\'язок від куратора. Тариф "З куратором" включає перевірку домашніх завдань та сертифікат після завершення курсу.',
  },
  {
    question: 'Чи отримаю я сертифікат?',
    answer:
      'Сертифікат видається тільки при виборі тарифу "З куратором" після виконання всіх домашніх завдань.',
  },
  {
    question: 'Чи можна проходити курс у зручний час?',
    answer:
      'Так! Всі уроки в записі, тому ви можете навчатися у зручний для вас час протягом 90 днів доступу до матеріалів.',
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
          <ul className={css.list}>
            {items.map(({ question, answer }, i) => (
              <li key={i} className={css.item}>
                <button
                  className={css.question}
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                >
                  <span>{question}</span>
                  <span className={`${css.icon} ${openIndex === i ? css.iconOpen : ''}`}>
                    {openIndex === i ? '✕' : '+'}
                  </span>
                </button>
                {openIndex === i && (
                  <p className={css.answer}>{answer}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </SharedLayout>
    </section>
  );
};

export default FAQ;

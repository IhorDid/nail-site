import css from './Program.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
import Button from '../../UI/Button/Button';

const blocks = [
  {
    title: 'Блок: Бази',
    items: [
      'Кому можна робити покриття базою',
      'Протипоказання',
      'Яку одну базу обрати, щоб не мати 100500 баночок',
      'Техніка покриття — тонко, без відшарувань',
      'Як знімати покриття швидко і безпечно',
      "Опил натуральних форм — овал, м'який квадрат, м'який скво",
      'Безпечна підготовка нігтьової пластини до покриття',
      'Покриття кольором під кутикулу без зайвого обєму',
    ],
  },
  {
    title: 'Блок: Гелі',
    items: [
      'Який гель обрати для натурального зміцнення',
      'Як зміцнити невелику довжину, щоб зберегти пластичність нігтя',
      'Викладка гелю супер тонко, майже як базою',
      'Виправлення скруток, клюючих нігтів, робота на нігтях без довжини',
      'Робота з пошкодженими нігтями',
      'Безпечна і швидкісна техніка зняття',
      'Викладка гелю на готовність — без поверхневого опилу',
      "Опил натуральних форм — м'який квадрат, овал, м'який скво",
    ],
  },
];

const Program = () => {
  return (
    <section className={css.program} id="program">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Програма</p>
            <h2 className={css.title}>Що ти вивчиш на курсі</h2>
          </div>
          <div className={css.grid}>
            {blocks.map((block, i) => (
              <AnimatedSection as="div" key={block.title} className={css.card} direction={i % 2 === 0 ? 'left' : 'right'} delay={i * 150}>
                <h3 className={css.cardTitle}>{block.title}</h3>
                <ul className={css.list}>
                  {block.items.map(item => (
                    <li key={item} className={css.item}>
                      <span className={css.dash}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection as="div" delay={300}>
            <Button text="Записатися на курс" className={css.button} />
          </AnimatedSection>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Program;

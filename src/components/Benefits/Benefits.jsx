import css from './Benefits.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
import img from '../../assets/img/benefits/img-1.jpg';

const items = [
  {
    num: '01',
    text: 'Працюватимеш без заморочок у трендовій і найбільш затребуваній техніці покриття',
  },
  { num: '02', text: 'Знову закохаєшся у свої манікюри — як з Пінтерест' },
  { num: '03', text: 'Працюватимеш без відшарувань і білих плям' },
  {
    num: '04',
    text: 'Скоротиш час роботи мінімум на 20–30 хвилин без втрати якості',
  },
  {
    num: '05',
    text: 'Навчишся робити короткі натуральні форми, які:',
    points: ['виглядають дорого', 'залишаються пластичними', 'ідеально носяться'],
  },
  {
    num: '06',
    text: 'Зможеш підняти свій прайс завдяки стабільному результату',
  },
];

const Benefits = () => {
  return (
    <section className={css.benefits}>
      <SharedLayout>
        <div className={css.sectionHeader}>
          <p className={css.label}>Результати</p>
        </div>
        <div className={css.content}>
          <AnimatedSection as="div" className={css.imgWrap} direction="left">
            <img src={img} alt="Авторка курсу" className={css.img} />
            <h2 className={css.title}>Що ти отримаєш після курсу</h2>
          </AnimatedSection>
          <div className={css.grid}>
            {items.map(({ num, text, points }, i) => (
              <AnimatedSection as="div" key={num} className={css.card} delay={i * 100}>
                <span className={css.number}>{num}</span>
                <h3 className={css.cardText}>{text}</h3>
                {points && (
                  <ul className={css.points}>
                    {points.map(point => (
                      <li key={point} className={css.point}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Benefits;

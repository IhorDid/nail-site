import css from './Benefits.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import img from '../../assets/img/benefits/img-1.jpg';

const items = [
  {
    num: '01',
    text: 'Працюватимеш у трендовій і затребуваній техніці покриття',
  },
  { num: '02', text: 'Працюватимеш без відшарувань і білих плям' },
  {
    num: '03',
    text: 'Скоротиш час роботи мінімум на 20–30 хвилин без втрати якості',
  },
  {
    num: '04',
    text: 'Навчишся робити короткі натуральні форми, які виглядають дорого',
  },
  {
    num: '05',
    text: 'Зможеш підняти свій прайс завдяки стабільному результату',
  },
];

const Benefits = () => {
  return (
    <section className={css.benefits}>
      <SharedLayout>
        <div className={css.sectionHeader}>
          <p className={css.label}>Результати</p>
          <h2 className={css.title}>Що ти отримаєш після курсу</h2>
        </div>
        <div className={css.content}>
          <div className={css.imgWrap}>
            <img src={img} alt="Авторка курсу" className={css.img} />
          </div>
          <div className={css.grid}>
            {items.map(({ num, text }) => (
              <div key={num} className={css.card}>
                <span className={css.number}>{num}</span>
                <h3 className={css.cardText}>{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Benefits;

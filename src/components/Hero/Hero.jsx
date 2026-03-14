import css from './Hero.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';

const Hero = () => {
  const heroList = [
    {
      title: 'Економія 20–40 хв на кожному клієнті',
      description: 'Економія 20–40 хв на кожному клієнті',
    },
    {
      title: 'Тонке покриття, яке виглядає дорого',
      description: 'Тонке покриття, яке виглядає дорого',
    },
    {
      title: 'Безпечна та проста техніка',
      description: 'Безпечна та проста техніка',
    },
    {
      title: 'Стабільний результат без білих плям',
      description: 'Стабільний результат без білих плям',
    },
  ];
  return (
    <section className={css.hero}>
      <SharedLayout>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.label}>Онлайн-курс</p>
            <h1 className={css.title}>Slim Form</h1>
            <p className={css.subtitle}>
              Курс про короткі натуральні нігті без зайвих рухів і складних
              технік
            </p>
            <p className={css.description}>
              Навчись безпечно працювати базою та тонким гелевим покриттям без
              відшарувань, без поверхневого опилу, без затискання арки й
              складної архітектури.
            </p>
            <ul className={css.benefits}>
              {heroList.map(({ title }) => (
                <li className={css.benefitItem} key={title}>
                  <span className={css.check}>✓</span>
                  <span>{title}</span>
                </li>
              ))}
            </ul>
            <div className={css.buttons}>
              <a href="#pricing" className={css.btnPrimary}>
                Обрати тариф
              </a>
              <a href="#program" className={css.btnSecondary}>
                Переглянути програму
              </a>
            </div>
          </div>

          <div className={css.imageWrapper}>
            <div className={css.image}></div>
            <button className={css.imageBtn}>Приклад результату</button>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Hero;

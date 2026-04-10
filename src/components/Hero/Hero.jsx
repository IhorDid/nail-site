import css from './Hero.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
// import heroImage from '../../assets/img/hero_img.JPG';
import heroImage from '../../assets/img/hero_img-2.JPG';

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
            <AnimatedSection as="p" className={css.subtitle} delay={100}>
              Курс про короткі натуральні нігті без зайвих рухів і складних
              технік
            </AnimatedSection>
            <AnimatedSection as="p" className={css.description} delay={200}>
              Навчись безпечно працювати базою та тонким гелевим покриттям без
              відшарувань, без поверхневого опилу, без затискання арки й
              складної архітектури.
            </AnimatedSection>
            <AnimatedSection as="ul" className={css.benefits} delay={300}>
              {heroList.map(({ title }) => (
                <li className={css.benefitItem} key={title}>
                  <span className={css.check}>✓</span>
                  <span>{title}</span>
                </li>
              ))}
            </AnimatedSection>
            <AnimatedSection as="div" className={css.buttons} delay={400}>
              <a href="#pricing" className={css.btnPrimary}>
                Обрати тариф
              </a>
              <a href="#program" className={css.btnSecondary}>
                Переглянути програму
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection as="div" className={css.imageWrapper} direction="right" delay={200}>
            <div className={css.image}>
              <img src={heroImage} alt="Slim Form курс манікюру" />
            </div>
          </AnimatedSection>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Hero;

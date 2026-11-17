import css from './Hero.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
// import heroImage from '../../assets/img/hero_img.JPG';
import heroImage from '../../assets/img/hero_img-2.JPG';

const Hero = () => {
  const heroList = [
    { title: 'Економія 20–40 хв на кожному клієнті' },
    { title: 'Тонке покриття, яке виглядає майже як база' },
    { title: 'Носиться без відшарувань і білих плям' },
    { title: 'Безпечна та проста техніка' },
  ];
  return (
    <section className={css.hero}>
      <SharedLayout>
        <div className={css.inner}>
          <div className={css.content}>
            <p className={css.label}>Онлайн-курс</p>
            <h1 className={css.title}>Голі нігті</h1>
            <AnimatedSection as="p" className={css.subtitle} delay={100}>
              Курс по роботі базою і зміцненню пластичним гелем
            </AnimatedSection>
            <AnimatedSection as="p" className={css.description} delay={200}>
              Про короткі натуральні нігті без зайвих рухів і складних технік.
              Без поверхневого опилу, затискання арки й складної архітектури.
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
                Записатися на курс
              </a>
              <a href="#program" className={css.btnSecondary}>
                Переглянути програму
              </a>
            </AnimatedSection>
          </div>

          <AnimatedSection as="div" className={css.imageWrapper} direction="right" delay={200}>
            <div className={css.image}>
              <img src={heroImage} alt="Голі нігті — онлайн-курс манікюру" />
            </div>
          </AnimatedSection>
        </div>
      </SharedLayout>
    </section>
  );
};

export default Hero;

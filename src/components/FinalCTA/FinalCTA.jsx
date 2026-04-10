import css from './FinalCTA.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';

const FinalCTA = () => {
  return (
    <section className={css.finalCta}>
      <SharedLayout>
        <div className={css.inner}>
          <h2 className={css.title}>
            Готова працювати швидше,{' '}
            <br className={css.br} />
            чистіше та дорожче?
          </h2>
          <AnimatedSection as="p" className={css.description} delay={100}>
            Приєднуйся до курсу <span className={css.accent}>Slim Form</span> і опануй техніку коротких натуральних нігтів,{' '}
            яка дає стабільний результат без зайвих рухів.
          </AnimatedSection>
          <AnimatedSection as="div" delay={250}>
            <a href="#pricing" className={css.btn}>
              Записатися на курс
            </a>
          </AnimatedSection>
        </div>
      </SharedLayout>
    </section>
  );
};

export default FinalCTA;

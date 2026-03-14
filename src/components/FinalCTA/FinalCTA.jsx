import css from './FinalCTA.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';

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
          <p className={css.description}>
            Приєднуйся до курсу <span className={css.accent}>Slim Form</span> і опануй техніку коротких натуральних нігтів,{' '}
            яка дає стабільний результат без зайвих рухів.
          </p>
          <a href="#pricing" className={css.btn}>
            Записатися на курс
          </a>
        </div>
      </SharedLayout>
    </section>
  );
};

export default FinalCTA;

import css from './About.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';

const About = () => {
  return (
    <section className={css.about} id="about">
      <SharedLayout>
        <div className={css.wrapper}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Про курс</p>
            <h2 className={css.title}>
              Slim Form — це курс про короткі натуральні нігті
            </h2>
          </div>
          <div className={css.grid}>
            <div className={css.card}>
              <div className={css.icon}>💅</div>
              <h3 className={css.cardTitle}>Безпечне покриття</h3>
              <p className={css.cardText}>
                Тонке гелеве покриття, яке виглядає майже як база, але носиться
                без відшарувань. Без поверхневого опилу, затискання арки і
                складної архітектури.
              </p>
            </div>
            <div className={css.card}>
              <div className={css.icon}>⚡</div>
              <h3 className={css.cardTitle}>Проста техніка</h3>
              <p className={css.cardText}>
                Економія часу без втрати якості. Без зайвих рухів і складних
                технік — тільки те, що дійсно працює.
              </p>
            </div>
          </div>
        </div>
      </SharedLayout>
    </section>
  );
};

export default About;

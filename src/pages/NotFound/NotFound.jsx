import { Link } from 'react-router-dom';
import SharedLayout from '../../components/SharedLayout/SharedLayout';
import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <section className={css.section}>
      <SharedLayout>
        <div className={css.card}>
          <p className={css.code}>404</p>
          <h1 className={css.title}>Сторінку не знайдено</h1>
          <p className={css.text}>
            Можливо, посилання застаріле або сторінка була переміщена.
          </p>
          <Link to="/" className={css.button}>
            Повернутися на Home
          </Link>
        </div>
      </SharedLayout>
    </section>
  );
};

export default NotFound;

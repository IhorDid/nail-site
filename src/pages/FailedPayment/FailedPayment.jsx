import { useNavigate } from 'react-router-dom';
import SharedLayout from '../../components/SharedLayout/SharedLayout';
import css from './FailedPayment.module.css';

const INSTAGRAM_URL = 'https://www.instagram.com/so.janeb/';

const FailedPayment = () => {
  const navigate = useNavigate();

  return (
    <section className={css.section}>
      <SharedLayout>
        <div className={css.card}>
          <h1 className={css.title}>Вітаємо!</h1>
          <p className={css.text}>
            На жаль, ваша оплата не пройшла. Напишіть, будь ласка, у приватні
            повідомлення в{' '}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={css.link}
            >
              Інстаграмі
            </a>{' '}
            для отримання альтернативного способу оплати.
          </p>
          <button className={css.button} onClick={() => navigate('/')}>
            Повернутися на головну
          </button>
        </div>
      </SharedLayout>
    </section>
  );
};

export default FailedPayment;

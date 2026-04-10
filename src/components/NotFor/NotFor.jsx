import css from './NotFor.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';

const items = [
  'Якщо хочеш навчитись працювати з довгими нігтями та чіткою архітектурою',
  'Якщо хочеш навчитися робити повну реставрацію форм і створювати чіткі форми',
  'Якщо хочеш працювати взагалі без баз',
];

const NotFor = () => {
  const ctaLink =
    'https://sojaneb.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnM6QWAR_6JBoTd11gwtiXtNStA0MByZoyKRDnylDNw7vOKLppd8tn1zPYVKY_aem_p2AGBf_drGTP-Nad21hEPg';
  return (
    <section className={css.notFor}>
      <SharedLayout>
        <div className={css.inner}>
          <div className={css.sectionHeader}>
            <p className={css.label}>Важливо знати</p>
            <h2 className={css.title}>Кому не підійде</h2>
            <p className={css.description}>
              Цей курс не про довгі нігті та складну архітектуру
            </p>
          </div>
          <AnimatedSection as="ul" className={css.list} delay={100}>
            {items.map((text, i) => (
              <li key={i} className={css.item}>
                <span className={css.cross}>✕</span>
                <span>{text}</span>
              </li>
            ))}
          </AnimatedSection>
          <AnimatedSection as="div" className={css.cta} delay={250}>
            <p className={css.ctaText}>
              Ці теми розкриваються на великому курсі
            </p>
            <a
              href={ctaLink}
              className={css.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              PRO ГЕЛЬ →
            </a>
          </AnimatedSection>
        </div>
      </SharedLayout>
    </section>
  );
};

export default NotFor;

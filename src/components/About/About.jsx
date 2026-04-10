import css from './About.module.css';
import SharedLayout from '../SharedLayout/SharedLayout';
import AnimatedSection from '../../AnimatedSection';
import { useMemo, useState } from 'react';
import heroImage from '../../assets/img/hero_img.JPG';

const About = () => {
  const courseImages = useMemo(() => {
    const images = Object.values(
      import.meta.glob(
        '../../assets/img/course/*.{png,jpg,jpeg,webp,JPG,JPEG,PNG,WEBP}',
        {
          eager: true,
          import: 'default',
        },
      ),
    );

    return images.length ? images : [heroImage];
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const isSingleImage = courseImages.length === 1;
  const visibleImages = Array.from(
    { length: Math.min(3, courseImages.length) },
    (_, index) => courseImages[(activeIndex + index) % courseImages.length],
  );

  const handlePrev = () => {
    setActiveIndex(prev => (prev === 0 ? courseImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev === courseImages.length - 1 ? 0 : prev + 1));
  };

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
          <AnimatedSection
            as="div"
            className={css.grid}
            delay={100}
            direction="left"
          >
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
          </AnimatedSection>

          <AnimatedSection
            as="div"
            className={css.carousel}
            delay={250}
            direction="right"
          >
            <div className={css.carouselTrack}>
              {visibleImages.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className={`${css.slide} ${index > 0 ? css.slideExtra : ''}`}
                >
                  <img
                    src={image}
                    alt={`Фото курсу ${activeIndex + index + 1}`}
                    className={css.carouselImage}
                  />
                </div>
              ))}
            </div>

            {!isSingleImage && (
              <>
                <button
                  type="button"
                  className={`${css.navBtn} ${css.navPrev}`}
                  onClick={handlePrev}
                  aria-label="Попереднє фото"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className={`${css.navBtn} ${css.navNext}`}
                  onClick={handleNext}
                  aria-label="Наступне фото"
                >
                  ›
                </button>
              </>
            )}

            {!isSingleImage && (
              <div className={css.dots}>
                {courseImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`${css.dot} ${index === activeIndex ? css.dotActive : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Перейти до фото ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </SharedLayout>
    </section>
  );
};

export default About;

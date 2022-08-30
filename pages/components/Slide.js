import { useState, useRef, useEffect } from "react";
import styles from "./Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);
  const contentRef = useRef();

  useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function prevSlide() {
    if (active > 0) setActive(active - 1);
  }

  function nextSlide() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={styles.item}
            style={{
              background: `url(${slide.imageUrl}) no-repeat center/cover`,
            }}
          ></div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Proximo</button>
      </nav>
    </section>
  );
};

export default Slide;

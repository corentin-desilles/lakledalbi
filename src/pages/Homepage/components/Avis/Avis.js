import React, { useState } from 'react';
import style from './Avis.module.scss';
import { avisList } from '../../../../data/avis';

export default function Avis() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? avisList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function handleClickNext() {
    const isLastSlide = currentIndex === avisList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <section className={`${style.avisSection}`}>
      <h2>Les étudiantes racontent</h2>
      <div className={`${style.avisCaroussel}`}>
        <i onClick={handleClickPrevious} class="fa-solid fa-chevron-left"></i>
        <div className={`${style.avisCaroussel_textContainer}`}>
          <p className={`${style.avisCaroussel_message}`}>
            " {avisList[currentIndex].message} "
          </p>
          <p className={`${style.avisCaroussel_name}`}>
            {avisList[currentIndex].name}
          </p>
        </div>
        <i onClick={handleClickNext} class="fa-solid fa-chevron-right"></i>
      </div>
    </section>
  );
}

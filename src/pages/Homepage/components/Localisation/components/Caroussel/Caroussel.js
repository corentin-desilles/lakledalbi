import React, { useState } from 'react';
import style from './Caroussel.module.scss';
import { pictureList } from '../../../../../../data/cityPic';

export default function Caroussel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleClickPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictureList.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function handleClickNext() {
    const isLastSlide = currentIndex === pictureList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <>
      <div className={`${style.sliderStyle}`}>
        <i
          className={`fa-solid fa-chevron-left ${style.leftArrow}`}
          onClick={handleClickPrevious}
        ></i>
        <i
          className={`fa-solid fa-chevron-right ${style.rightArrow}`}
          onClick={handleClickNext}
        ></i>
        <div
          className={`${style.slideStyle}`}
          style={{
            backgroundImage: `url(${pictureList[currentIndex].picture})`,
          }}
        ></div>
      </div>
    </>
  );
}

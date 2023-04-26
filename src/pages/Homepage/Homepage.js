import React from 'react';
import Header from '../../components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Lessons from './components/Lessons/Lessons';
import Program from './components/Program/Program';
import Teacher from './components/Teacher/Teacher';
import style from './Homepage.module.scss';

const Homepage = () => {
  return (
    <>
      <div className={`${style.heroBackground}`}>
        <Header />
        <HeroBanner />
      </div>
      <Teacher />
      <div className={`${style.LessonsProgramContainer}`}>
        <Lessons />
        <Program />
      </div>
    </>
  );
};

export default Homepage;

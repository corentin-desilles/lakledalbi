import React from 'react';
import style from './HeroBanner.module.scss';

const HeroBanner = () => {
  return (
    <section>
      <div className={`${style.HeroBannerContainer}`}>
        <h1>Cours de Français Langue Etrangère</h1>
        <h3>
          A Albi, avec Nathalie Désille <br />
          professeure diplomée et expérimentée
        </h3>
        <div className={`${style.HeroBannerDetailsCard}`}>
          <div className={`${style.HeroBannerDetailsContainer}`}>
            <i class="fa-solid fa-check"></i>
            <h5>Cours individuels</h5>
          </div>
          <div className={`${style.HeroBannerDetailsContainer}`}>
            <i class="fa-solid fa-check"></i>
            <h5>Cours petits groupes (maximum 4 apprenants de même niveau)</h5>
          </div>
          <div className={`${style.HeroBannerDetailsContainer}`}>
            <i class="fa-solid fa-check"></i>
            <h5>Cours en entreprises</h5>
          </div>
          <div className={`${style.HeroBannerDetailsContainer}`}>
            <i class="fa-solid fa-check"></i>
            <h5>Préparation aux examens (DELF, DALF)</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

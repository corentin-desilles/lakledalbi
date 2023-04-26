import React from 'react';
import Caroussel from './components/Caroussel/Caroussel';
import style from './Localisation.module.scss';

export default function Localisation() {
  return (
    <section className={`${style.sectionLocation}`}>
      <div className={`${style.classeContainer}`}>
        <h2>La classe de français LA[KLE]DALBI</h2>
        <p className={`${style.sectionLocation_text}`}>
          La classe La[kle]dalbi se situe dans un quartier calme du centre
          historique d’Albi, à deux pas de la cathédrale Ste-Cécile, du palais
          de la Berbie, du musée Toulouse Lautrec et de toutes les commodités de
          l’hyper centre.
        </p>
        <div className={`${style.slidesContainer}`}>
          <Caroussel />
        </div>
      </div>
    </section>
  );
}

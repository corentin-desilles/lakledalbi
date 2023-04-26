import React from 'react';
import style from './Teacher.module.scss';
import teacher from '../../../../assets/teacher.jpeg';

const Teacher = () => {
  return (
    <section className={`${style.teacherSection}`}>
      <h2 className={`${style.titreProfesseur}`}>Votre professeure</h2>

      <div className={`${style.teacherContainer}`}>
        <div className={`${style.textContainer}`}>
          <p>
            Je suis professeure diplômée de Français Langue Etrangère (Master 2
            ingénierie des langues*) et possède une expérience de 20 ans dans
            l’enseignement auprès de divers publics : étudiants ERASMUS, adultes
            souha itant débuter l’apprentissage du français, se perfectionner ou
            préparer une certification en langue française. J’ai également été
            professeure des écoles auprès d’enfants en situation de bilinguisme.
            J’ai effectué ma carrière essentiellement à l’île de la Réunion.
            *étude, conception, réalisation et adaptationh de dispositifs
            d’enseignement, de formations ou de cours.
          </p>
          <p>
            Je propose des cours de Français Langue Etrangère dans le cœur
            historique d’Albi. Ces cours, à très faible effectif (4 participants
            maximum de niveau équivalent) vous permettront de progresser
            rapideent dans l’apprentissage de la langue et ce, quelles que
            soient vos motivations : professionnelles, poursuite d’études
            universitaires, installation en France, plaisir personnel…
          </p>
        </div>
        <div className={`${style.pictureContainer}`}>
          <h5 className={`${style.teacherPictureTitle}`}>
            Nathalie Désilles, enseignante diplômée <br /> (Master 2) et
            expérimentée (20 ans)
          </h5>
          <img src={teacher} alt="la professeure Nathalie Desilles" />
        </div>
      </div>
    </section>
  );
};

export default Teacher;

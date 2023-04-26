import React from 'react';
import style from './Lessons.module.scss';
import lessons from '../../../../assets/lessons.png';

function Lessons() {
  return (
    <section className={`${style.lessonsContainer}`}>
      <h2 className={`${style.lessonsContainer_title} `}>
        Les cours de français
      </h2>

      <div className={`${style.lessonsContainer_imgContainer} `}>
        <img src={lessons} alt="carnet de notes" />
      </div>

      <div className={`${style.lessonsContainer_content} `}>
        <div className={`${style.lessonsContainer_content_subtitle} `}>
          <div
            className={`${style.lessonsContainer_content_subtitleContainer} `}
          >
            <i class="fa-solid fa-check"></i>
            <h5 className={`${style.lessonsContainer_subtitle_txt}`}>
              Cours individuels
            </h5>
          </div>
          <div
            className={`${style.lessonsContainer_content_subtitleContainer} `}
          >
            <i class="fa-solid fa-check"></i>
            <h5 className={`${style.lessonsContainer_subtitle_txt}`}>
              Cours en petits groupes
            </h5>
          </div>
          <div
            className={`${style.lessonsContainer_content_subtitleContainer} `}
          >
            <i class="fa-solid fa-check"></i>
            <h5 className={`${style.lessonsContainer_subtitle_txt}`}>
              Cours à la carte (choisissez le nombre d’heures par semaine que
              vous souhaitez)
            </h5>
          </div>
          <div
            className={`${style.lessonsContainer_content_subtitleContainer} `}
          >
            <i class="fa-solid fa-check"></i>
            <h5 className={`${style.lessonsContainer_subtitle_txt}`}>
              Cours intensifs (15 heures par semaine) 
            </h5>
          </div>
        </div>
        <p className={`${style.lessonsContainer_text} `}>
          Les cours individuels ou en petit groupe vous permettent de progresser
          rapidement puisque vous êtes sollicité.s en permanence et bénéficiez
          d’une attention soutenue et personnalisée. Les objectifs et les
          contenus des cours sont adaptés à votre niveau et à vos besoins. Vous
          pratiquez la compréhension et la production orale et écrite. Chaque
          séance est l’occasion : <br />
          <br /> - d’enrichir votre vocabulaire <br /> - d’acquérir une notion
          de grammaire <br /> - d’améliorer votre prononciation <br /> - de
          progresser dans la communication orale <br /> - d’apprendre des
          expressions et des locutions spécifiques à la langue française <br />{' '}
          - de mieux comprendre la société française et ses spécificités
          culturelles
        </p>
      </div>
    </section>
  );
}

export default Lessons;

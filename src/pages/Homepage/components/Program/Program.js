import React from 'react';
import style from './Program.module.scss';
import lessons from '../../../../assets/lessons.png';

function Program() {
  return (
    <section className={`${style.programContainer}`}>
      <div className={`${style.programContainer_content} `}>
        <div className={`${style.programContainer_content_subtitle} `}>
          <h5 className={`${style.programContainer_subtitle_txt}`}>
            Élaboré en fonction de votre niveau, de vos besoins et de votre
            projet
          </h5>
        </div>
        <p className={`${style.programContainer_text} `}>
          Les contenus de mes cours sont élaborés en fonction de votre niveau
          initial, de vos besoins et en accord avec vos objectifs et projets
          personnels. Ils correspondent aux attentes des apprenants du niveau A1
          (élémentaire) au niveau C2 (maîtrise) tels que définis par le Cadre
          Européen Commun de Référence pour les Langues (CECRL). Pour évaluer
          votre niveau :
          https://europass.cedefop.europa.eu/fr/resources/european-language-levels-cefr
          Plus d’informations sur les niveaux :  Niveau A1-A2  Niveau B1-B2 
          Niveau C1-C2 Les thématiques de travail sont variés et les supports
          que j’utilise sont principalement des documents authentiques : audios
          (extraits d’émissions radiophonique, interview…) , vidéos (débats,
          reportages…) ou écrits (article de journaux…).
        </p>
      </div>
      <h2 className={`${style.programContainer_title} `}>Le programme</h2>

      <div className={`${style.programContainer_imgContainer} `}>
        <img src={lessons} alt="carnet de notes" />
      </div>
    </section>
  );
}

export default Program;

import React from "react";
import { techStackDetails } from "../Details";
import "./Technologies.css";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    nodejs,
    nodejs2,
    c_logo,
    cpp,
    django,
    java,
    mongodbnew,
    mysql,
    tableau,
    typescript,
    mongodb,
    python,reduxToolkit,
    bootstrap,
    githubDesktop,
    mongodbCompass,
    vscode,
    // git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-10 pb-20 ">
      <section>
        <h1 className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tech Stack
        </h1>
        <p className="text-content py-2 lg:max-w-3xl techstacksmalltext">
          Technologies I've been working with recently
        </p>
      </section>
      <div className="technologiesTechStack">
      <div className="imageBox">
          <img src={python} title="html" alt="" className="techLogos"/>
          <span className="techStackText">Python</span>
        </div>  
        <div className="imageBox">
          <img src={js} title="JavaScript" alt="" className="techLogos"/>
          <span className="techStackText">JavaScript</span>
        </div>
        <div className="imageBox">
          <img src={java} title="Java" alt="" className="techLogos"/>
          <span className="techStackText">Java</span>
        </div>
        <div className="imageBox">
          <img src={cpp} title="CPP" alt="" className="techLogos"/>
          <span className="techStackText">C++</span>
        </div>
        <div className="imageBox">
          <img src={c_logo} title="C" alt="" className="techLogos"/>
          <span className="techStackText">C</span>
        </div>
     
      </div>
      <div className="secondTechnologiesTechStack">
      <div className="imageBox">
          <img src={django} title="django" alt="" className="techLogos"/>
          <span className="techStackText"></span>
        </div>
        <div className="imageBox">
          <img src={html} title="html" alt="" className="techLogos"/>
          <span className="techStackText">HTML</span>
        </div>
        <div className="imageBox">
          <img src={css} title="CSS" alt="" className="techLogos"/>
          <span className="techStackText">CSS</span>
        </div>
        <div className="imageBox">
          <img src={mongodbnew} title="Redux" alt="" className="techLogos"/>
          <span className="techStackText">MongoDb</span>
        </div>
        <div className="imageBox">
          <img src={mysql} title="mysql" alt="" className="techLogos"/>
          <span className="techStackText">Mysql</span>
        </div>
      </div>
      <section>
        <h1 className="text-2xl pt-10 text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold">
          Tools
        </h1>
      </section>
      <section className="technogiesTools">
        <div className="imageBox">
          <img src={vscode} title="Visual Studio Code" alt="" className="techLogos"/>
          <span
            className="
          techStackText"
          >
            VSCode
          </span>
        </div>
        <div className="imageBox">
          <img src={github} title="Github" alt="Github" className="techLogos"/>
          <span className="techStackText">Github</span>
        </div>
        <div className="imageBox">
          <img src={postman} title="Postman" alt="Postman" className="techLogos"/>
          <span className="techStackText">Postman</span>
        </div>
        <div className="imageBox">
          <img src={tableau} title="Postman" alt="Postman" className="techLogos"/>
          <span className="techStackText">Tableau</span>
        </div>
        <div className="imageBox">
          <img src={mongodbCompass} title="Postman" alt="Postman" className="techLogos"/>
          <span className="techStackText">mongodbCompass</span>
        </div>
      </section>
    </main>
  );
}

export default Technologies;

import React from "react";
import '../App.css';
import html from './images/html.png';
import css from './images/css.png';
import bootstrap from './images/bootstrap.png';
import js from './images/js.png';
import firebase from './images/firebase.png';
import react from './images/react.png';
import tailwind from './images/tailwind.png';


const Skills = () => {


    const cards = [
        { title: "HTML", progress: "95%", image: html },
        { title: "CSS", progress: "95%", image: css },
        { title: "JavaScript", progress: "90%", image: js },
        { title: "Bootstrap", progress: "90%", image: bootstrap },
        { title: "Tailwind", progress: "80%", image: tailwind },
        { title: "React", progress: "90%", image: react },
        { title: "Firebase", progress: "90%", image: firebase },
    ];



    return (
        <>

        <div className="cards__containers cards__containerss" style={{marginTop:"14rem"}}>
        
        <div className="skill__head">
            <h1 className="skill__text">Skills</h1>
        </div>
        
        <div className="card-container" style={{ marginBottom: "50rem" }}>
            {cards.map((card, index) => (
                <div className="card" key={index}>
                    <h3 className="card-title">{card.title} <img src={card.image} width={30} height={30} style={{ objectFit: "cover" }} className="card__image" /></h3>
                    <div className="progress-bar">
                        <div className="progress-line">
                            <div className="progress-fill"></div>
                        </div>
                        <div className="progress-percentage">{card.progress}</div>
                    </div>
                    <div className="circular-progress">
                        <svg className="circle-svg">
                            <circle cx="50" cy="50" r="45" className="circle-bg"></circle>
                            <circle cx="50" cy="50" r="45" className="circle-fg"></circle>
                        </svg>
                        <div className="circular-percentage">{card.progress}</div>
                    </div>
                </div>
            ))}
        </div>
        
        </div>      
        
            </>
    )

  
}

export default Skills;
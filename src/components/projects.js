import React, { useState } from "react";
import {items}  from "./items";
import "../App.css";

const Projects = () => {
  const [product, Setproduct] = useState(items)
  console.log(product)

  const filteritems = (catItem) => {
    const updateitems = items.filter((curitem)=> {
      return curitem.category === catItem
    });
    Setproduct(updateitems); 
  }

  return (
    <>
      <div className="project__section" style={{ marginTop: "12rem" }}>
        <div className="skill__head">
          <h1 className="skill__text">MY PROJECTS</h1>
        </div>
        <div className="proj__buttons">
        {/* <button type="button" className="proj__buttons-btn" onClick={()=> Setproduct(items)}>ALL</button> */}
          <button type="button" className="proj__buttons-btn proj__buton" onClick={()=> filteritems("landingpage")}>Landing page</button>
          <button type="button" className="proj__buttons-btn proj__buton" onClick={()=> filteritems("functionality")}>Functionality</button>
          <button type="button" className="proj__buttons-btn fron__btn" onClick={()=> filteritems("frontend")}>Frontend</button>
          {/* <button type="button" className="proj__buttons-btn" onClick={()=> filteritems("react")}>react</button> */}
        </div>
        <div className="proj__sec">
          {product.map((val) => (
            <div className="proj__cont proj__box">
              <div className="proj__details">
                <h3 className="proj__name">{val.name}</h3>
                <p className="proj__title">{val.title}</p>
              </div>
              <div className="proj__image">
                <img src={val.image} alt={val.name} className="proj__img" />
              </div>
              <div className="proj__button">
                <button className="project__btns"><a href={val.link} target="blank" className="proj__btn">View damo</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Projects;
/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import "../../styles/BreedCards.css";

const BreedCards = (props) => {
    return(
        <>
            {
                <li className="breeds__item">
                    <figure className="breeds__item__pic-wrap" data-category = {props.title}>
                        <img src={props.imgSource} alt="Breed Images"
                        className="breeds__item__img" />
                    </figure>
                    <div className="breeds__item__info">
                        <h5 className="breeds__item__text">{`Name: ${props.name}`}</h5>
                        <h5 className="breeds__item__text">{`Height: ${props.height}`}</h5>
                        <h5 className="breeds__item__text">{`Lifespan: ${props.lifespan}`}</h5>
                        <a href={props.link} target="_blank"><button className="btn btn-redirect">Know More</button></a>
                    </div>
                </li>
            }
        </>
    )
}
export default BreedCards;
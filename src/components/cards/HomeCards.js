import React from 'react';
import "../../styles/BreedCards.css";
import {Link} from "react-router-dom";

const HomeCards = (props) => {
    return(
        <>
            {
                <li className="breeds__item">
                    <Link className="breeds__item__link" to="/breeds">
                        <figure className="breeds__item__pic-wrap" data-category = {props.title}>
                            <img src={props.imgSource} alt="Breed Images"
                            className="breeds__item__img" />
                        </figure>
                        <div className="breeds__item__info">
                            <h5 className="breeds__item__text">{`Name: ${props.name}`}</h5>
                        </div>
                    </Link>
                </li>
            }
        </>
    )
}
export default HomeCards;
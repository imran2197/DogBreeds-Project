import React from 'react'
import "../styles/Header.css";
import { Button } from "./Button";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <>
            <div className="hero-container">
                <video src="videos/video-3.mp4" autoPlay loop muted />
                <div className="hero-btns">
                    <Button  type="button" className="btns" buttonStyle="btn--outline" buttonSize="btn-large">
                        <Link id="link" to="/SignUp">
                            <h1 id="start">Lets Get Started</h1>
                        </Link>
                    </Button>
                </div>
                <p className="quote">Dogs do speak, But only to those who know how to listen.</p>
            </div>
        </>
    )
}
export default Header;
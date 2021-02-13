import React from 'react';
import "../styles/AboutUs.css";
import Footer from "./Footer";

const AboutUs = () => {
    return(
        <>
            <video className="video" src="videos/About-Us.mp4" autoPlay loop muted />
            <h1 className="headingAbout">ABOUT DOG BREEDS</h1>
            <br/>
            <div className="divbody">
                
                <h2 className="aboutPara">
                    Welcome to Dog Breeds, your number one source for finding all DogBreeds. We're dedicated to provide you the best of Breeds, with a focus on dependability.
                    We're working to turn our passion for Dogs into a booming online store. We hope you will find what you are looking for and we enjoy offering best Breeds to you.
                </h2>
                <h1 className="thank">"Thank You for visiting us"</h1><br/>
                <br/>
            </div>
            <Footer />
        </>
    )
}
export default AboutUs;
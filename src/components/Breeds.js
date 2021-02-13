import React, {useState, useEffect} from 'react'
import "../styles/BreedCards.css";
import HomeCards from "./cards/BreedCards";
import Footer from "./Footer";

const Home = () => {
    const [names,setNames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/breeds")
        .then(res => res.json())
        .then(res => {
            console.log("Got data from Backend:", res);
            setNames(res);
        });
    }, []);
    return(
        <>
            <div className="Breeds">
                <p className="h1breeds">Dog Breeds</p>
                <div className="breeds__container">
                    <div className="breeds__wrapper">
                        {
                            names.map((item,idx) => (
                                <HomeCards key={idx}
                                    link={item.link}
                                    title={item.type}
                                    imgSource={item.source}
                                    name={item.name}
                                    height={item.height}
                                    lifespan={item.lifespan}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;
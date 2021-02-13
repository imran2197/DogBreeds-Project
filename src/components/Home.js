import React, {useState, useEffect} from 'react'
import "../styles/BreedCards.css";
import HomeCards from "./cards/HomeCards";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
    const [names,setNames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9999/breeds/names")
        .then(res => res.json())
        .then(res => {
            console.log("Got data from Backend:", res);
            setNames(res);
        });
    }, []);
    return(
        <>
            <Header />
            <div className="Breeds">
                <p className="h1breeds">Check Out These Amazing Dog Breeds</p>
                <div className="breeds__container">
                    <div className="breeds__wrapper">
                        {
                            names.map((item,idx) => (
                                <HomeCards key={idx}
                                    link={item.path}
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
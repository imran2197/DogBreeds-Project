import React, {useState, useEffect} from 'react'
import "../styles/BreedCards.css";
import BreedCards from "./cards/BreedCards";
import Footer from "./Footer";

const Home = () => {
    const [names,setNames] = useState([]);
    const [search, setSearch] = useState("");

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
                <div className="searchBar">
                    <i id="searchIcon" className="fa fa-search searchIcon"></i>
                    <input className="searchInputField" type="text" placeholder="Search Dog Breeds" onChange={e => setSearch(e.target.value)} />
                </div>
                <div className="breeds__container">
                    <div className="breeds__wrapper">
                        {
                            names
                            .filter(value => {
                                if (search === "") {
                                  return value;
                                } else {
                                  return value.name.toLowerCase().startsWith(search.toLocaleLowerCase());
                                }
                              })
                            .map((item,idx) => (
                                <BreedCards key={idx}
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
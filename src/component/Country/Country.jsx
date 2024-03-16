import { useState } from 'react';
import './country.css'
import { toast } from 'react-toastify';
const Country = ({country, handleVisitedCountry}) => {
    // console.log(country);
    // console.log(handleVisitedCountry);
    const {name, flags, capital, population, area, cca3} = country;
    const [visited, setVisited] = useState(false);
    const handleAddVisited = () =>{
        setVisited(!visited);
        if(!visited){
            toast("I visited this place");
        }
        else{
            toast("I want to vistit");
        }
    };
    const passWithParams = () => {
        handleVisitedCountry(country);
        toast(`I visited ${country.name.common}`);
    };
    return (
        <div className={`box ${visited ? "visited" : "non-visited"}`}>
            <h3 style={{color: visited ? "green" : "White"}}>Name: {name.common} </h3>
            <figure>
            <img src={flags.png} alt="" />
            </figure>
            <div style={{display: "flex", justifyContent: "space-between", padding: "0px 45px"}}>
                <p>Capital: {capital} </p>
                <p>Population: {population} </p>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", padding: "0px 45px"}}>
                <p>Acea: {area} </p>
                <p><small>CCA3 : {cca3}</small></p>
            </div>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px", marginBottom: "1rem"}}>
            <button onClick={handleAddVisited}>{visited ? 'visited' : 'Going'}</button>

            {visited ? "I visited this place" : "I want to vistit"}
            </div>
            <button onClick={passWithParams}>Mark as visited</button>
        </div>
    );
};

export default Country;
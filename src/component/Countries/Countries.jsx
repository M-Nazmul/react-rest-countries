import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountries, setvisitedCountries] = useState([]);

    useEffect(()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[]);
    const handleAddTodo = () =>{
        toast("Hi Tanjil ! Add a new todo");
    }

    const handleVisitedCountry = country => {
        console.log(country);
        console.log("Add this to your visited Countries");
        const newVisitedCountries = [...visitedCountries, country];
        setvisitedCountries(newVisitedCountries)
    }
    return (
        <div>
            <button onClick={handleAddTodo}>Toast me</button>
            <ToastContainer/>
            <h2>Countries : {countries.length} </h2>
            <div>
            <h3>Visited Countries: {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <div style={{display: "flex", gap: "10px", margin: "10px", alignItems: "center" }}  key={country.cca3}>
                            <li>{country.name.common}</li>
                            <img className="flag" src={country.flags.png} alt="" />
                        </div>
                        )
                    }
                </ul>
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.cca3} country={country} handleVisitedCountry = {handleVisitedCountry} ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
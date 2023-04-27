import '../css/App.css'
import { useEffect, useState } from 'react'

export default function App(){
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('sweden');

    function handleClick(event){
        const countries = ['sweden', 'finland', 'norway', 'gambia', 'zimbabwe'];

        const rand = Math.floor(Math.random()*countries.length);
        setCountry(countries[rand]);
    }
    
    useEffect(
        ()=>{
            getFlag(country);
        }, [country])

    async function getFlag(country){
        const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
        const [data] = await res.json();
        setFlag(data.flags.svg);
    }

    return (
        <>  
            <img src={flag}/>
            <button onClick={handleClick}>Get new Flag</button>
        </>
    )
}
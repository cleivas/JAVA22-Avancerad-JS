import '../css/App.css'
import '../css/Result.css'
import SearchForm from './SearchForm'
import Country from './Country'
import Status from './Status'
import { useEffect, useState } from 'react'

export default function App(){
    const [countries, setCountries] = useState([]); //State - datan som hämtas från restCountry API
    const [language, setLanguage] = useState('swedish'); //State - språket som ska sökas på
    const [status, setStatus] = useState(''); //Status - status som är loading, failed eller success, beroende på hur sökningen till API:et går
    const [lastSearches, setLastSearches] = useState([language]); //State - de senstae tre språken som sökts på
    
    // Funktion som hämtar länder från api:et
    async function getCountries(language){
        setStatus('loading'); //Innan datan  har hämtats är status loading

        const res = await fetch(`https://restcountries.com/v3.1/lang/${language}`);
        const data = await res.json();

        //Om data är en array vet vi att get requesten genom fetch lyckades
        if(Array.isArray(data)){

            //Loopa igenom all data men spara endast ner den infon vi behöver, alltså svgflagga, namn, population och en landskod som används för id
            const newCountries = data.map(c => { return {
                flag: c.flags.svg,
                name: c.name.common,
                population: c.population,
                id: c.cca2
            } })
    
            setCountries(newCountries); 
            setStatus('success'); //Status sätts till success eftersom requesten lyckades

            //Kopierar lastSearches som är en array eftersom vi vill ändra på den men vi vill inte göra det direkt på ett state
            const lsCopy = [...lastSearches];

            //Uppdatera endast lastSearches om det nuvarande språket inte finns i de senaste sökningarna
            if(!lsCopy.includes(language)){

                lsCopy.unshift(language); //Lägg till nya språket i början av arrayen
                if(lsCopy.length>3){ //Om arrayen är längre än tre tar vi bort det sista språket i arrayen
                    lsCopy.pop();
                }
                setLastSearches(lsCopy); //Uppdaterar statet med den uppdaterade arrayen
            }
            
        }
        else{
            setStatus('failed'); //Om data inte är en array misslyckades våran request och status sätts till failed
        }
    }

    //Hämta länder från APIet vid första renderingen och sedan varje gång som language har ändrats
    useEffect(()=>{
        getCountries(language); 
    }, [language])
    
    return (
        <>  
            {/* Searchform visas alltid */}
            <SearchForm language={language} setLanguage={setLanguage} lastSearches={lastSearches}/>

            {/* När status är success visar vi alla länder */}
            {status === 'success' && 
            <div className='result'>
                {/* En Country-komponent per object i arrayen countries */}
                {countries.map(country => <Country key={country.id} flag={country.flag} name={country.name} population={country.population}/>) }
            </div>}

            {/* Om status är loadinge lelr failed visar vi statuskomponenten */}
            {(status === 'loading' || status === 'failed') && <Status status={status}/>}

        </>
    )
}

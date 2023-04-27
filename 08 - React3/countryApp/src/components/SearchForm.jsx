import '../css/SearchForm.css';
import LatestSearches from './LatestSearches';

export default function SearchForm({language, setLanguage, lastSearches}) {
    let tempLanguage = ''; //Används för att spara ner inputens value

    function handleSubmit(event){
        event.preventDefault();

        setLanguage(tempLanguage); //Ändra statet language till det som användaren skrev in senast. Metoden setLanguage ägs av App
        event.target.reset(); //Tömmer alla inputs i ett form
    }
    
    function handleInputChange(event){
        tempLanguage = event.target.value; //Varje gång användaren skriver in en ny bokstav i inputen sparas inputvärdet ner här
    }

    return (
        <div className='form'>
            <h2>Search Country by Language</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange} placeholder={language} />
                <button>Search</button>
            </form>
            
            <LatestSearches lastSearches={lastSearches} setLanguage={setLanguage}/>
        </div>
    )
}
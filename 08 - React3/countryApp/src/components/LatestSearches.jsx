import '../css/LastSearch.css'

export default function LatestSearches({lastSearches, setLanguage}){

    function handleClick(event){
        setLanguage(event.target.innerText); //Language ändras till det som klickades på, setLanguage ägs av App
    }

    return(
        <div className='last-search'>
            <h3>Latest searches</h3>

            {/* Ett a element per språk i arrayen lastSearches */}
            { lastSearches.map(ls => <a onClick={handleClick} key={ls}>{ls}</a>) } 
        </div>
    )
}
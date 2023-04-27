import '../css/Country.css'
export default function Country({flag, name, population}){

    return(
        <div className='country'>
            <img src={flag} />
            <h2>{name}</h2>
            <p>{population}</p>
        </div>
    )
}
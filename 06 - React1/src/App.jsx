import {createRoot} from 'react-dom/client';
import './css/App.css';
import HeroCard from './components/HeroCard'
import superHeros from './data/superheros'

function App(){
    return(
        <div>
            <HeroCard hero={superHeros.hero1}/>
            <HeroCard hero={superHeros.hero2}/>
        </div>
    )
}

const root = createRoot( document.querySelector('#root'));
root.render(<App/>);
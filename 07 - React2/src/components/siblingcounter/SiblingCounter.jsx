import Button from "./Button"
import Counter from "./Counter";
import {useState} from 'react';


export default function SiblingCounter(){
    const [cssClass, setCssClass] = useState('');
    const [count, setCount] = useState(0);

    function countUp(){
        setCount(count+1);
    }
    

    return(
        <div className={'sibling-counter ' + cssClass }>

            <Button changeParentClass={setCssClass} countUp={countUp} color='pink'/>
            <Button changeParentClass={setCssClass} countUp={countUp} color='blue'/>
            <Button changeParentClass={setCssClass} countUp={countUp} color='violet'/>

            <Counter text={count}/>
        </div>
    )
}
import { useState } from "react";

export default function FirstButton({text, color}){
    const [cssClass, setCssClass] = useState('');

    function handleClick(event){
        console.log(event.target.innerText);
    }


    function handleEnter(){
        console.log('Mouse entered ', text);
        setCssClass(color);
    }

    function handleLeave(){
        console.log('Mouse left ', text);
        setCssClass('');
    }

    return(
        <button 
        className={cssClass}
        onMouseEnter={handleEnter} 
        onMouseLeave={handleLeave}
        onClick={ handleClick }>{text}</button>
    )
}
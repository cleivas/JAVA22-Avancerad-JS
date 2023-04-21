export default function Button({changeParentClass, color, countUp}){
   
    function handleClick(){
        changeParentClass(color);
        countUp();
    }
    return( 
        <button onClick={handleClick}>{color}</button>
    )
}
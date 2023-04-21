import {useState} from 'react';

export default function Form(){
    const [text, setText] = useState('Enter new text');
    let tempText = '';

    function handleSubmit(event){
        event.preventDefault();
        event.target.reset();

        console.log('submit');
        setText(tempText);
    }

    function handleInputChange(event){
        // console.log(event.target.value);
        tempText = event.target.value;
        console.log(tempText)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleInputChange}/>
            </form>
            <h1>{text}</h1>
        </div>
    )
}
import '../css/App.css'
import FirstButton from './FirstButton'
import Form from './Form'
import SiblingCounter from './siblingcounter/SiblingCounter'

export default function App(){


    return (
        <>
            <FirstButton text='Pink' color='pink'/>
            <FirstButton text='Blue' color='blue'/>
            <FirstButton text='Violet' color='violet'/>
            
            <Form/>

            <SiblingCounter/>
        </>
    )
}
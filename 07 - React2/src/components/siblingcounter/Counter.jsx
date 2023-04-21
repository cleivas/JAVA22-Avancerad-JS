export default function Counter({ text }) {

    const test = false;
    const result = test ? 'sant' : 'falskt';

    console.log('result', result);

    return (
        <div>
            <h1>{text}</h1>
            {text > 10 ? <h1>Mer än 10</h1> : <h5>Mindre än 10</h5>}
        </div>
    )
}
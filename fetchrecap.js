const url = 'https://dog.ceo/api/breeds/image/random';

// fetch(url)
//     .then(response =>{
//         console.log(response);
//         return response.json();
//     })
//     .then(data=>console.log(data));


const fetchPromise = fetch(url);

const jsonPromise = fetchPromise.then(
    response=>{
        console.log(response);
        return response.json();
    }
)

jsonPromise.then(data=> console.log(data));

console.log('Fetch', fetchPromise);
console.log('JSON', jsonPromise);
const dogUrl = 'https://dog.ceo/api/breeds/image/random';


async function fetchDogImage(url){

    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    
    return data.message;
}

function displayDogImage(imgUrl){
    const img = document.createElement('img');

    document.body.append(img);
    img.src = imgUrl;
}

fetchDogImage(dogUrl).then( displayDogImage);

// const dogPromise = fetchDogImage(dogUrl);
// dogPromise
//     .then(data => console.log(data));
// console.log(dogPromise);



//GET
async function getFirebase(){
    const url = 'https://java22-d619a-default-rtdb.europe-west1.firebasedatabase.app/array.json'

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

document.querySelector('#get').addEventListener('click', getFirebase )

//POST
async function postToFirebase(){
    const url = 'https://java22-d619a-default-rtdb.europe-west1.firebasedatabase.app/array.json';

    const newComment = {
        title: 'Created in JS',
        text: 'Hello is it me your looking for'
    }

    const options = {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

document.querySelector('#post').addEventListener('click', postToFirebase );

//DELETE
async function deleteBananFirebase(){
    const url = 'https://java22-d619a-default-rtdb.europe-west1.firebasedatabase.app/comments/-NSAj57-d8c-OWRG3r88.json';


    const options = {
        method: 'DELETE',
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

document.querySelector('#delete').addEventListener('click', deleteBananFirebase );

// PUT
async function putToFirebase(){
    const url = 'https://java22-d619a-default-rtdb.europe-west1.firebasedatabase.app/comments/comment5.json';

    const newComment = {
        color: 'hotpink'
    }

    const options = {
        method: 'PUT',
        body: JSON.stringify(newComment),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

document.querySelector('#put').addEventListener('click', putToFirebase );

// PATCH
async function patchToFirebase(){
    const url = 'https://java22-d619a-default-rtdb.europe-west1.firebasedatabase.app/array.json';

    const newComment = {
        "1": 'blue'
    }

    const options = {
        method: 'PATCH',
        body: JSON.stringify(newComment),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

document.querySelector('#patch').addEventListener('click', patchToFirebase );
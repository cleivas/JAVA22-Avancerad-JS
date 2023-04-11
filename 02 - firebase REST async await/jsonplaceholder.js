

async function postComment(comment){

    const url = 'https://jsonplaceholder.typicode.com/posts';
    
    const options = {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    console.log(response);

    const data = await response.json();
    console.log(data);
}

const commentObject = {
    userId: 3,
    title: 'title',
    body: 'this is MY comment'
}

// postComment(commentObject);


async function deleteComment(id){
    const url = 'https://jsonplaceholder.typicode.com/posts/' + id;

    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options);
    console.log(response);

    const data = await response.json();
    console.log(data);
}

deleteComment(10);
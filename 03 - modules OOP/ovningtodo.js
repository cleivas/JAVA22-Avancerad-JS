async function getAllUsers(){

    const url = 'https://todo-6ebf5-default-rtdb.europe-west1.firebasedatabase.app/users.json'

    const response = await fetch(url);
    const users = await response.json();

    // console.log(users);
    return users;
}

function displayTodos(users){
    // console.log(users);

    for(const user in users ){
        // console.log(users[user].name);
        const h2 = document.createElement('h2');
        h2.innerText = users[user].name;
        document.body.append(h2);


        // console.log(users[user].todos);
        const list = document.createElement('ol');
        document.body.append(list);

        list.addEventListener('click', clickTask )

        users[user].todos.forEach((todo, index)=>{
            // console.log(todo);

            const li = document.createElement('li');
            li.innerText = todo.task;
            list.append(li);

            li.id = user + '-' + index;

            if(todo.done){
                li.classList.add('done');
                li.setAttribute('isdone', true);
            }else{
                li.setAttribute('isdone', false);
            }
                
        })
    }
}

function clickTask(event){
    // console.log();
    event.target.classList.toggle('done');

    const [userid, taskid] = event.target.id.split('-');
    // console.log(ids);

    const url = `https://todo-6ebf5-default-rtdb.europe-west1.firebasedatabase.app/users/${userid}/todos/${taskid}.json`;
    console.log(url);


    let isdone = event.target.getAttribute('isdone');
    if(isdone === 'true') isdone = false;
    else if(isdone === 'false') isdone = true;

    patchTask(url, isdone).then(()=>{
        location.reload();
    });

}

async function patchTask(url, isdone){

    const options = {
        method: 'PATCH',
        body: JSON.stringify({done: isdone}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

getAllUsers()
    .then( displayTodos );
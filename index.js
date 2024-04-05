//GET

fetch('https://jsonplaceholder.typicode.com/posts?_limit=2', {
    method: 'GET'
})
    .then((res) => {
        if (res.status !== 200) {
            throw Error(res.status);
        }

        return res.json()
    })
    .then((data) => console.log(data))
    .catch((err) => console.log('err', err))


// POST
const newUser = {
    userId:  5,
    title: 'jimy'
}

fetch('https://jsonplaceholder.typicode.com/posts?_limit=2', {
    method: 'POST',
    body: JSON.stringify(newUser),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then((res) => res.json())
.then((data => console.log(data)))

//PUT

fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    body: JSON.stringify(newUser),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
})
.then((res) => res.json())
.then((data => console.log(data)))


//DELETE

fetch('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',
})
.then((res) => res.json())
.then((data => console.log(data)))

////


//creati un obiect cu fiecare utilizator ( atribuiti cate un nume pentru fiecareId)

const root = document.getElementById('root')
const users=["Ana","Maria","Vasile","Tudor","Jay","Viorica", "Clar","Denis","Faina","Madalina"];
const renderItems = (list) => {
    list.forEach((item) => {
        const i=item.userId-1;       
        const element = document.createElement('div')          
        element.innerText = `${item.userId}:${users[i]} postarea:${item.id}  ${item.title}`
        root.appendChild(element)}
    )}
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
        if (res.status !== 200) {
            throw Error(res.status);
        }
        return res.json()
    })
    .then((data) => {
        renderItems(data)
    })
    .catch((err) => console.log('err', err))
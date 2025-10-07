async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
}

function handleUsers(users) {
    console.log('Total users:', users.length);
    if (users.length > 0) {
        console.log('First user:', users[0].title);
    }
}

async function getData() {
    try {
        const users = await getUsers();
        handleUsers(users);
    } catch (error) {
        console.error('Error:', error);
    }
}

(async () => {
    await getData();
})();

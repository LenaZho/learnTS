function getData() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log(response, response.ok, response.status);
            return response.json();
        })
        .then((json) => processData(json))
        .catch((e) => console.log(e));
}
function summarizeUser(users) {
    const total = users.length;
    const completed = users.filter((u) => u.completed).length;
    const pending = total - completed;
    return { total, completed, pending };
}
function processData(users) {
    const summary = summarizeUser(users);
    console.log('Summary:', summary);
    return users;
}

getData().then(() => {
});

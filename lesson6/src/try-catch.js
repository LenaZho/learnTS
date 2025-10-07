function sendApiRequest(resource) {
    throw new Error(`Error: Not able to fetch resource ${resource}`);
}

function sendBackupApiRequest(resource) {
    return {
        resource: resource,
        result: 'success',
        status: 200
    };
}

function sendNextApiRequest() {
    console.log('sending API request...');

    let response;
    try {
        response = sendApiRequest('https://jsonplaceholder.typicode.com/todos');
    } catch (e) {
        console.log(e.message);
        if (e.message.includes('Not able to fetch resource')) {
            response = sendBackupApiRequest('https://backup.jsonplaceholder.typicode.com/todos');
        } else {
            throw e;
        }
    }

    console.log(response);
}

function initializeTestData() {
    try {
        sendNextApiRequest();
    } catch (e) {
        console.log(e.message);
        console.log('failed to initialize test data');
    }
}

initializeTestData();

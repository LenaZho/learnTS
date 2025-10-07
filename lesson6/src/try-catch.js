async function sendApiRequest(resource) {
    const response = await fetch(resource);
    if (!response.ok) {
        throw new Error(`Error: Not able to fetch resource ${resource}`);
    }
    return response.json();
}

async function sendBackupApiRequest(resource) {
    const response = await fetch(resource);
    if (!response.ok) {
        throw new Error(`Error: Backup resource also failed ${resource}`);
    }
    return response.json();
}

async function sendNextApiRequest() {
    console.log('sending API request...');

    let data;
    try {
        data = await sendApiRequest('https://api.github.com/users/wrong-endpoint');
    } catch (e) {
        console.log(e.message);
        if (e.message.includes('Not able to fetch resource')) {
            try {
                data = await sendBackupApiRequest('https://api.github.com/users/octocat');
            } catch (backupError) {
                console.log(backupError.message);
                throw new Error('Both primary and backup requests failed');
            }
        } else {
            throw e;
        }
    }

    console.log(data);
}

async function initializeTestData() {
    try {
        await sendNextApiRequest();
    } catch (e) {
        console.log(e.message);
        console.log('Failed to initialize test data');
    }
}

initializeTestData();

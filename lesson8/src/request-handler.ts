interface User {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
// Classes added
class TaskSummary {
    public totalTasks: number;
    public completedTasks?: number;
    public uniqueUsers: number;
    public userIds: number[];

    public constructor(tasks: User[]) {
        // Count tasks
        this.totalTasks = tasks.length;

        // Count completed
        this.completedTasks = 0;
        for (const user of tasks) {
            if (user.completed === true) {
                this.completedTasks++;
            }
        }

        this.userIds = [];
        for (const user of tasks) {
            let alreadyExists = false;
            for (const existingId of this.userIds) {
                if (existingId === user.userId) {
                    alreadyExists = true;
                    break;
                }
            }
            if (!alreadyExists) {
                this.userIds.push(user.userId);
            }
        }
        // Count users
        this.uniqueUsers = this.userIds.length;
    }
}

async function getTasks(): Promise<User[]> {
    console.log('Fetching data from API...');

    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
}

function handleTasks(users: User[]):  TaskSummary {
    console.log('Processing user data...');
    console.log('Total tasks received:', users.length);

    if (users.length > 0) {
        console.log('First Task title:', users[0].title);
        console.log('First Task completed?', users[0].completed);
    }

    const summary = new TaskSummary(users);

    console.log('Summary created!');
    console.log('Total tasks:', summary.totalTasks);
    console.log('Completed tasks:', summary.completedTasks);
    console.log('Unique users:', summary.uniqueUsers);

    return summary;
}


async function getData(): Promise<void> {
    try {
        console.log('Starting the program...');

        const users = await getTasks();
        console.log('Got users from API!');

        const summary = handleTasks(users);

        console.log('Result:', summary);
        console.log('Tasks fetched successfully!');

    } catch (error) {
        console.log('Something went wrong!');
        console.error('Error details:', error);
    }
}


console.log('Get user data');
getData().then(() => {
    console.log('Fetch completed');
});

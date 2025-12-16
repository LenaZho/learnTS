// ReportPortal settings - how to connect and what to send

const rpConfig = {
    // Your API key from ReportPortal (get it from Profile → API Keys)
    apiKey: process.env.RP_API_KEY || 'your-api-key-here',
    // Where ReportPortal is running
    endpoint: 'http://localhost:8080/api/v1',
    // Your project name in ReportPortal
    project: 'expense-tracker',
    // Name for this test run
    launch: 'Expense Tracker Tests',
    // Send screenshots when tests fail
    includeScreenshots: true,
    // Send detailed test steps
    includeTestSteps: true
};

export default rpConfig;

Final project by Olena Zhogol for Robot-dreams QA Automation course.
The website selected for testing - https://automationexercise.com/
Tests both UI and API functionality.

Technologies used:

Testing framework: Playwright
Programming language: TypeScript
Test reports: HTML Report (Playwright) + Allure

How to run tests after cloning

1. Clone this repository

2. Install dependencies

3. Run the tests
npm test
OR
npx playwright test
OR
npx playwright test --debug


Test Reports available:

HTML Report (Playwright)
After running tests, view the HTML report:
npx playwright show-report

Allure Report
Generate and view the Allure report:
1. Generate Allure report
   npm run allure:generate
2. Open Allure report
   npm run allure:open
OR
   Run tests and generate Allure report in one command:
   npm test; npm run allure:generate

Note: Allure results are automatically cleaned before each test run to ensure fresh reports.


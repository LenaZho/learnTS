import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    fullyParallel: true,
    retries: 0,
    workers: 1,
    reporter: [
        ['list'],
        ['html'],
        ['allure-playwright', { outputFolder: 'allure-results' }]
    ],
    use: {
        baseURL: 'https://automationexercise.com',
        screenshot: 'only-on-failure',
        video: 'off'
    },
    projects: [
        {
            name: 'API Tests',
            testMatch: /.*\.api\.spec\.ts/
        },
        {
            name: 'chromium',
            testMatch: /.*\.ui\.spec\.ts/,
            use: {
                ...devices['Desktop Chrome'],
                headless: false
            }
        }
    ]
});

import { defineConfig, devices } from '@playwright/test';
import rpConfig from './reportportal.config';

export default defineConfig({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: false,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['list'],  // Shows progress in terminal
        ['@reportportal/agent-js-playwright', rpConfig]  // Sends to ReportPortal
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('')`. */
        baseURL: process.env.BASE_URL || 'https://expense-tracker-app-react-web2.surge.sh/',

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry'
    },

    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                headless: process.env.CI ? true : false,
                viewport: {
                    width: 1680,
                    height: 900
                }
                // storageState: '.auth/storage-state-0.json'
            }
        }

        // {
        //     name: 'firefox',
        //     use: { ...devices['Desktop Firefox'] }
        // },

        // {
        //     name: 'webkit',
        //     use: { ...devices['Desktop Safari'] }
        // }

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ]

    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'https://expense-tracker-app-react-web2.surge.sh/',
    //   reuseExistingServer: !process.env.CI,
    // },
});

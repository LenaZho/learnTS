import { test as base } from '@playwright/test';
import { MonobasePage } from '../pages/monobase';
import { SubscriptionsPage } from '../pages/subscriptions-page';

interface MyFixtures {
    monobasePage: MonobasePage;
    subscriptionsPage: SubscriptionsPage;
}

export const test = base.extend<MyFixtures>({
    monobasePage: async ({ page }, use) => {
        const monobasePage = new MonobasePage(page);
        await use(monobasePage);
    },
    subscriptionsPage: async ({ page }, use) => {
        const subscriptionsPage = new SubscriptionsPage(page, 'https://base.monobank.ua/rusoriz');
        await use(subscriptionsPage);
    }
});

export { expect } from '@playwright/test';

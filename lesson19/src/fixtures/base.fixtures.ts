import { test as base, Page } from '@playwright/test';
import { SubscriptionsPage } from '../pages/subscriptions-page';

interface MyFixtures {
    subscriptionsPage: SubscriptionsPage;
}

export const test = base.extend<MyFixtures>({
    subscriptionsPage: async ({ page }: { page: Page }, use) => {
        const subscriptionsPage = new SubscriptionsPage(page, 'https://base.monobank.ua/rusoriz');
        await use(subscriptionsPage);
    }
});

export { expect } from '@playwright/test';

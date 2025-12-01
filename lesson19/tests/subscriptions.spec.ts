import { test, expect } from '../src/fixtures/base.fixtures';

test.describe('Subscription Page Tests', () => {
    test.beforeEach(async ({ subscriptionsPage }) => {
        await subscriptionsPage.goto();
    });

    test('check subscription card elements', async ({ subscriptionsPage }) => {
        const cards = await subscriptionsPage.getSubscriptionCards();
        expect(cards.length).toBeGreaterThan(0);

        const card = cards[0];
        await expect(card.title).toBeVisible();
        await expect(card.price).toBeVisible();
        await expect(card.subscribeButton).toBeVisible();
        await expect(card.subscribeButton).toBeEnabled();
    });

    test('check daily support elements', async ({ subscriptionsPage }) => {
        await expect(subscriptionsPage.dailySupport.container).toBeVisible();
        await expect(subscriptionsPage.dailySupport.title).toBeVisible();
        await expect(subscriptionsPage.dailySupport.joinButton).toBeVisible();
        await expect(subscriptionsPage.dailySupport.joinButton).toBeEnabled();
    });
});

import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class HomePage extends BasePage {
    public heroSection: Locator;
    public subscriptionInput: Locator;
    public subscribeButton: Locator;
    public subscriptionAlert: Locator;

    public constructor(page: Page) {
        super(page, '/');
        this.heroSection = page.locator('#slider');
        this.subscriptionInput = page.locator('#susbscribe_email');
        this.subscribeButton = page.locator('#subscribe');
        this.subscriptionAlert = page.locator('#success-subscribe');
    }

    public async verifyHomePage() {
        await expect(this.heroSection).toBeVisible();
    }

    public async subscribeToNewsletter(email: string) {
        await this.subscriptionInput.scrollIntoViewIfNeeded();
        await this.subscriptionInput.fill(email);
        await this.subscribeButton.click();
    }

    public async verifySubscriptionSuccess() {
        await expect(this.subscriptionAlert).toBeVisible();
    }
}
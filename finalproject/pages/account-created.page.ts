import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class AccountCreatedPage extends BasePage {
    public accountCreatedMessage: Locator;
    public continueButton: Locator;

    public constructor(page: Page) {
        super(page, '/account_created');
        this.accountCreatedMessage = page.locator('[data-qa="account-created"]');
        this.continueButton = page.locator('[data-qa="continue-button"]');
    }

    public async verifyAccountCreated() {
        await expect(this.accountCreatedMessage).toBeVisible();
    }

    public async clickContinue() {
        await this.continueButton.click();
    }
}
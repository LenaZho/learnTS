import { Page, Locator } from '@playwright/test';

export class MonobasePage {
    public readonly page: Page;
    public readonly getStartedButton: Locator;
    public readonly pageTitle: Locator;
    public readonly subscriberCount: Locator;
    public readonly telegramButton: Locator;
    public readonly instagramButton: Locator;
    public readonly twitterButton: Locator;
    public readonly websiteButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.getStartedButton = page.locator('a:has-text("Get started")');
        this.pageTitle = page.locator('h1:has-text("СТЕРНЕНКА")');
        this.subscriberCount = page.locator('text=/\\d+\\s+subscribers/');
        this.telegramButton = page.locator('a[href*="t.me/sternenkofund"]');
        this.instagramButton = page.locator('a[href*="instagram.com/sternenkofund"]');
        this.twitterButton = page.locator('a[href*="x.com/sternenkofund"]');
        this.websiteButton = page.locator('a[href*="sternenkofund.org"]');
    }

    public async goto(): Promise<void> {
        await this.page.goto('https://base.monobank.ua/rusoriz');
        await this.pageTitle.waitFor({ state: 'visible' });
    }
}


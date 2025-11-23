import { Page, Locator } from '@playwright/test';

export class MonobasePage {
  readonly page: Page;
  readonly getStartedButton: Locator;
  readonly pageTitle: Locator;
  readonly subscriberCount: Locator;
  readonly telegramButton: Locator;
  readonly instagramButton: Locator;
  readonly twitterButton: Locator;
  readonly websiteButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedButton = page.locator('a:has-text("Get started")');
    this.pageTitle = page.locator('h1:has-text("СТЕРНЕНКА")');
    this.subscriberCount = page.locator('text=/\\d+\\s+subscribers/');
    this.telegramButton = page.locator('a[href*="t.me/sternenkofund"]');
    this.instagramButton = page.locator('a[href*="instagram.com/sternenkofund"]');
    this.twitterButton = page.locator('a[href*="x.com/sternenkofund"]');
    this.websiteButton = page.locator('a[href*="sternenkofund.org"]');
  }

  async goto() {
    await this.page.goto('https://base.monobank.ua/rusoriz');
    await this.pageTitle.waitFor({ state: 'visible' });
  }
}
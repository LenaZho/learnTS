import { Locator, Page } from '@playwright/test';

export class SubscriptionCard {
    public readonly container: Locator;
    public readonly title: Locator;
    public readonly price: Locator;
    public readonly subscribeButton: Locator;
    public readonly telegramIcon: Locator;
    public readonly cardDesignIcon: Locator;

    public constructor(page: Page, cardLocator: Locator) {
        this.container = cardLocator;
        this.title = this.container.locator('.font-bold-600').first();
        this.price = this.container.locator('span').filter({ hasText: '₴' }).first();
        this.subscribeButton = this.container.locator('button.ui-button_primary');
        this.telegramIcon = this.container.locator('img[src*="telegram"]');
        this.cardDesignIcon = this.container.locator('img[src*="skins"]');
    }

    public async clickSubscribe(): Promise<void> {
        await this.subscribeButton.click();
    }
}

import { Locator, Page } from '@playwright/test';

export class DailySupport {
    public readonly container: Locator;
    public readonly title: Locator;
    public readonly joinButton: Locator;

    public constructor(page: Page) {
        this.container = page.locator('.daily.daily-plan');
        this.title = this.container.locator('span.text-xl');
        this.joinButton = this.container.locator('button.ui-button_secondary');
    }

    public async clickJoin(): Promise<void> {
        await this.joinButton.click();
    }
}

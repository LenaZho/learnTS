import { Page } from '@playwright/test';
import { SubscriptionCard } from './components/subscription-card';
import { DailySupport } from './components/daily-support';

export class SubscriptionsPage {
    public readonly page: Page;
    public readonly dailySupport: DailySupport;

    public constructor(page: Page) {
        this.page = page;
        this.dailySupport = new DailySupport(page);
    }

    public async goto(url: string): Promise<void> {
        await this.page.goto(url);
        await this.page.waitForLoadState('networkidle');
    }

    public async getSubscriptionCards(): Promise<SubscriptionCard[]> {
        const cardContainers = await this.page.locator('article.plan, .plan.bg-white').all();
        return cardContainers.map(container => new SubscriptionCard(this.page, container));
    }
}

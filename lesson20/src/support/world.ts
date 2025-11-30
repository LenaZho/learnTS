import { World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { MonobasePage } from '../pages/monobase';

export class CustomWorld extends World {
    public browser?: Browser;
    public context?: BrowserContext;
    public page?: Page;
    public monobasePage?: MonobasePage;

    public constructor(options: IWorldOptions) {
        super(options);
    }

    public async init(): Promise<void> {
        this.browser = await chromium.launch({
            headless: false,
            slowMo: 100
        });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        this.monobasePage = new MonobasePage(this.page);
    }

    public async cleanup(): Promise<void> {
        if (this.page) {
            await this.page.close();
        }
        if (this.context) {
            await this.context.close();
        }
        if (this.browser) {
            await this.browser.close();
        }
    }
}

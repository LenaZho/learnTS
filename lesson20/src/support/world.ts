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
            timeout: 60000
        });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
        this.page.setDefaultTimeout(60000);
        this.page.setDefaultNavigationTimeout(60000);
        this.monobasePage = new MonobasePage(this.page);
    }

    public async cleanup(): Promise<void> {
        // Small delay to ensure all operations complete
        await new Promise(resolve => setTimeout(resolve, 100));

        try {
            if (this.page) {
                await this.page.close();
            }
        } catch {
            // Ignore page close errors
        }
        try {
            if (this.context) {
                await this.context.close();
            }
        } catch {
            // Ignore context close errors
        }
        try {
            if (this.browser) {
                await this.browser.close();
            }
        } catch {
            // Ignore browser close errors
        }
    }
}

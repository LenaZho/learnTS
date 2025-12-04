import { World, IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright';
import { MonobasePage } from '../pages/monobase';

export class CustomWorld extends World {
    public static sharedBrowser?: Browser;
    public context?: BrowserContext;
    public page?: Page;
    public monobasePage?: MonobasePage;

    public constructor(options: IWorldOptions) {
        super(options);
    }

    public static async initSharedBrowser(): Promise<void> {
        if (!CustomWorld.sharedBrowser) {
            CustomWorld.sharedBrowser = await chromium.launch({
                headless: false,
                timeout: 60000
            });
        }
    }

    public async init(): Promise<void> {
        this.context = await CustomWorld.sharedBrowser!.newContext();
        this.page = await this.context.newPage();
        this.page.setDefaultTimeout(60000);
        this.page.setDefaultNavigationTimeout(60000);
        this.monobasePage = new MonobasePage(this.page);
    }

    public async cleanup(): Promise<void> {
        if (this.page) {
            await this.page.close();
        }
        if (this.context) {
            await this.context.close();
        }
    }

    public static async closeSharedBrowser(): Promise<void> {
        try {
            if (CustomWorld.sharedBrowser) {
                await CustomWorld.sharedBrowser.close();
                CustomWorld.sharedBrowser = undefined;
            }
        } catch {
            // Ignore browser close errors
        }
    }
}

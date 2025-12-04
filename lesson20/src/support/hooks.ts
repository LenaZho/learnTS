import { BeforeAll, Before, After, AfterAll, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

BeforeAll({ timeout: 60000 }, async function () {
    await CustomWorld.initSharedBrowser();
});

Before({ timeout: 60000 }, async function (this: CustomWorld) {
    await this.init();
});

After({ timeout: 60000 }, async function (this: CustomWorld, { result }) {
    await new Promise(resolve => setTimeout(resolve, 100));

    if (result?.status === Status.FAILED && this.page) {
        try {
            const screenshot = await this.page.screenshot({ fullPage: true });
            await this.attach(screenshot, 'image/png');
        } catch {
            // Ignore screenshot errors
        }
    }

    try {
        await this.cleanup();
    } catch {
        // Ignore cleanup errors
    }
});

AfterAll({ timeout: 60000 }, async function () {
    await CustomWorld.closeSharedBrowser();
});

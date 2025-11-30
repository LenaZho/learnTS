import { Before, After, setWorldConstructor, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

setWorldConstructor(CustomWorld);

Before({ timeout: 60000 }, async function (this: CustomWorld) {
    await this.init();
});

After({ timeout: 60000 }, async function (this: CustomWorld, { result }) {
    if (result?.status === Status.FAILED && this.page) {
        try {
            const screenshot = await this.page.screenshot({ fullPage: true });
            await this.attach(screenshot, 'image/png');
        } catch {
            // Ignore screenshot errors
        }
    }

    await this.cleanup();
});

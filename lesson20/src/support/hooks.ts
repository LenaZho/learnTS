import { Before, After, setWorldConstructor, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
    await this.init();
});

After(async function (this: CustomWorld, { result }) {
    if (result?.status === Status.FAILED && this.page) {
        const screenshot = await this.page.screenshot({ fullPage: true });
        await this.attach(screenshot, 'image/png');
    }

    await this.cleanup();
});

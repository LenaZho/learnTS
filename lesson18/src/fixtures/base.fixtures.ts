import { test as base } from '@playwright/test';
import { MonobasePage } from '../pages/monobase';

type MyFixtures = {
  monobasePage: MonobasePage;
};

export const test = base.extend<MyFixtures>({
  monobasePage: async ({ page }, use) => {
    const monobasePage = new MonobasePage(page);
    await use(monobasePage);
  },
});

export { expect } from '@playwright/test';

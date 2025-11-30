import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from 'chai';
import { CustomWorld } from '../support/world';

setDefaultTimeout(60000);

Given('I navigate to the Monobase page', async function (this: CustomWorld) {
    await this.monobasePage!.goto();
});

Then('the page title should be visible', async function (this: CustomWorld) {
    const isVisible = await this.monobasePage!.pageTitle.isVisible();
    expect(isVisible).to.be.true;
});

Then('the Get Started button should be visible', async function (this: CustomWorld) {
    const isVisible = await this.monobasePage!.getStartedButton.isVisible();
    expect(isVisible).to.be.true;
});

Then('the subscriber count should be visible', async function (this: CustomWorld) {
    const isVisible = await this.monobasePage!.subscriberCount.isVisible();
    expect(isVisible).to.be.true;
});

Then('the Telegram button should be visible', async function (this: CustomWorld) {
    const isVisible = await this.monobasePage!.telegramButton.isVisible();
    expect(isVisible).to.be.true;
});

Then('the Instagram button should be visible', async function (this: CustomWorld) {
    const isVisible = await this.monobasePage!.instagramButton.isVisible();
    expect(isVisible).to.be.true;
});

Then('the Twitter button should be visible', async function (this: CustomWorld) {
    const isVisible = await this.monobasePage!.twitterButton.isVisible();
    expect(isVisible).to.be.true;
});

Then('the Website button should be visible', async function (this: CustomWorld) {
    const isVisible = await this.monobasePage!.websiteButton.isVisible();
    expect(isVisible).to.be.true;
});

Then('the Telegram button should link to {string}', async function (this: CustomWorld, expectedLink: string) {
    const href = await this.monobasePage!.telegramButton.getAttribute('href');
    expect(href).to.include(expectedLink);
});

Then('the Instagram button should link to {string}', async function (this: CustomWorld, expectedLink: string) {
    const href = await this.monobasePage!.instagramButton.getAttribute('href');
    expect(href).to.include(expectedLink);
});

Then('the Twitter button should link to {string}', async function (this: CustomWorld, expectedLink: string) {
    const href = await this.monobasePage!.twitterButton.getAttribute('href');
    expect(href).to.include(expectedLink);
});

Then('the Website button should link to {string}', async function (this: CustomWorld, expectedLink: string) {
    const href = await this.monobasePage!.websiteButton.getAttribute('href');
    expect(href).to.include(expectedLink);
});

Then('the Get Started button should be enabled', async function (this: CustomWorld) {
    const isEnabled = await this.monobasePage!.getStartedButton.isEnabled();
    expect(isEnabled).to.be.true;
});

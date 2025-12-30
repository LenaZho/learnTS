import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
    public page: Page;
    public url: string;
    public homeLink: Locator;
    public productsLink: Locator;
    public cartLink: Locator;
    public signupLoginLink: Locator;
    public loggedInAsText: Locator;
    public deleteAccountLink: Locator;
    public logoutLink: Locator;

    public constructor(page: Page, url: string = '') {
        this.page = page;
        this.url = url;
        this.homeLink = page.locator('a[href="/"]').first();
        this.productsLink = page.locator('a[href="/products"]');
        this.cartLink = page.locator('a[href="/view_cart"]').first();
        this.signupLoginLink = page.locator('a[href="/login"]');
        this.loggedInAsText = page.locator('text=Logged in as');
        this.deleteAccountLink = page.locator('a[href="/delete_account"]');
        this.logoutLink = page.locator('a[href="/logout"]');
    }

    public async navigateTo() {
        await this.page.goto(this.url);
    }

    public async clickSignupLogin() {
        await this.signupLoginLink.click();
    }

    public async clickProducts() {
        await this.productsLink.click();
    }

    public async clickCart() {
        await this.cartLink.click();
    }

    public async verifyUserLoggedIn(username: string) {
        await expect(this.loggedInAsText).toContainText(username);
    }

    public async logout() {
        await this.logoutLink.click();
    }

    public async deleteAccount() {
        await this.deleteAccountLink.click();
    }
}
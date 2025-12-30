import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
    public loginEmailInput: Locator;
    public loginPasswordInput: Locator;
    public loginButton: Locator;
    public signupNameInput: Locator;
    public signupEmailInput: Locator;
    public signupButton: Locator;
    public loginErrorMessage: Locator;

    public constructor(page: Page) {
        super(page, '/login');
        this.loginEmailInput = page.locator('[data-qa="login-email"]');
        this.loginPasswordInput = page.locator('[data-qa="login-password"]');
        this.loginButton = page.locator('[data-qa="login-button"]');
        this.signupNameInput = page.locator('[data-qa="signup-name"]');
        this.signupEmailInput = page.locator('[data-qa="signup-email"]');
        this.signupButton = page.locator('[data-qa="signup-button"]');
        this.loginErrorMessage = page.locator('p').filter({ hasText: 'Your email or password is incorrect!' });
    }

    public async login(email: string, password: string) {
        await this.loginEmailInput.fill(email);
        await this.loginPasswordInput.fill(password);
        await this.loginButton.click();
    }

    public async signup(name: string, email: string) {
        await this.signupNameInput.fill(name);
        await this.signupEmailInput.fill(email);
        await this.signupButton.click();
    }

    public async verifyLoginError() {
        await expect(this.loginErrorMessage).toBeVisible();
    }
}
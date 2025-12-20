import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { LoginPage } from '../../pages/login.page';
import { SignupPage } from '../../pages/signup.page';
import { AccountCreatedPage } from '../../pages/account-created.page';
import { generateRandomUser } from '../../test-data/testdata';

test.describe('User Login Tests', () => {
    let userData: any;

    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        
        userData = generateRandomUser();
        
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const accountCreatedPage = new AccountCreatedPage(page);

        await homePage.navigateTo();
        await homePage.clickSignupLogin();
        await loginPage.signup(userData.name, userData.email);
        await signupPage.fillSignupForm(userData);
        await signupPage.createAccount();
        await accountCreatedPage.verifyAccountCreated();
        await accountCreatedPage.clickContinue();
        
        await page.close();
        await context.close();
    });

    test('Login success', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navigateTo();
        await homePage.clickSignupLogin();
        await loginPage.login(userData.email, userData.password);
        await homePage.verifyUserLoggedIn(userData.name);
    });

    test('Show error on wrong password', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navigateTo();
        await homePage.clickSignupLogin();
        await loginPage.login('wrong@testmail.com', 'wrongpass');
        await loginPage.verifyLoginError();
    });

    test('Logout success', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);

        await homePage.navigateTo();
        await homePage.clickSignupLogin();
        await loginPage.login(userData.email, userData.password);
        await homePage.verifyUserLoggedIn(userData.name);
        await homePage.logout();
        await expect(page).toHaveURL(/.*\/login/);
    });
});
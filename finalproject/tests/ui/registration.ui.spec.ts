import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { LoginPage } from '../../pages/login.page';
import { SignupPage } from '../../pages/signup.page';
import { AccountCreatedPage } from '../../pages/account-created.page';
import { generateRandomUser } from '../../test-data/testdata';

test.describe('User Registration Tests', () => {
    test('Register new user', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const accountCreatedPage = new AccountCreatedPage(page);
        
        const userData = generateRandomUser();

        await homePage.navigateTo();
        await homePage.clickSignupLogin();
        await loginPage.signup(userData.name, userData.email);
        await signupPage.fillSignupForm(userData);
        await signupPage.createAccount();
        await accountCreatedPage.verifyAccountCreated();
        await accountCreatedPage.clickContinue();
        await homePage.verifyUserLoggedIn(userData.name);
    });

    test('Delete account after registration', async ({ page }) => {
        const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const signupPage = new SignupPage(page);
        const accountCreatedPage = new AccountCreatedPage(page);
        
        const userData = generateRandomUser();

        await homePage.navigateTo();
        await homePage.clickSignupLogin();
        await loginPage.signup(userData.name, userData.email);
        await signupPage.fillSignupForm(userData);
        await signupPage.createAccount();
        await accountCreatedPage.clickContinue();
        await homePage.deleteAccount();
    });
});
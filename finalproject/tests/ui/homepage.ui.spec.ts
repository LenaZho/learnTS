import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';

test.describe('Homepage Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateTo();
    });

    test('should load homepage', async ({ page }) => {
        await homePage.verifyHomePage();
    });

    test('Navigate to products page', async ({ page }) => {
        await homePage.clickProducts();
        await expect(page).toHaveURL(/.*\/products/);
    });

    test('Navigate to cart page', async ({ page }) => {
        await homePage.clickCart();
        await expect(page).toHaveURL(/.*\/view_cart/);
    });
});
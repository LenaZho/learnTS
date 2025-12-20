import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';

test.describe('Homepage Tests', () => {
    test('should load homepage', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateTo();
        await homePage.verifyHomePage();
    });

    test('Navigate to products page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateTo();
        await homePage.clickProducts();
        await expect(page).toHaveURL(/.*\/products/);
    });

    test('Navigate to cart page', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.navigateTo();
        await homePage.clickCart();
        await expect(page).toHaveURL(/.*\/view_cart/);
    });
});
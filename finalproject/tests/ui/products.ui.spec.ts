import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductsPage } from '../../pages/products.page';
import { ProductDetailsPage } from '../../pages/product-details.page';

test.describe('Products Tests', () => {
    test('View all products', async ({ page }) => {
        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);

        await homePage.navigateTo();
        await homePage.clickProducts();
        await productsPage.verifyProductsPage();
    });

    test('View product details', async ({ page }) => {
        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);
        const productDetailsPage = new ProductDetailsPage(page);

        await homePage.navigateTo();
        await homePage.clickProducts();
        await productsPage.clickFirstProduct();
        await productDetailsPage.verifyProductDetails();
    });

    test('Search for products', async ({ page }) => {
        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);

        await homePage.navigateTo();
        await homePage.clickProducts();
        await productsPage.searchProduct('dress');
        await expect(page.locator('.title.text-center')).toContainText('Searched Products');
    });
});
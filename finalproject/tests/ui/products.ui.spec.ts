import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { ProductsPage } from '../../pages/products.page';
import { ProductDetailsPage } from '../../pages/product-details.page';

test.describe('Products Tests', () => {
    let homePage: HomePage;
    let productsPage: ProductsPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        await homePage.navigateTo();
        await homePage.clickProducts();
    });

    test('View all products', async ({ page }) => {
        await productsPage.verifyProductsPage();
    });

    test('View product details', async ({ page }) => {
        const productDetailsPage = new ProductDetailsPage(page);

        await productsPage.clickFirstProduct();
        await productDetailsPage.verifyProductDetails();
    });

    test('Search for products', async ({ page }) => {
        await productsPage.searchProduct('dress');
        await expect(page.locator('.title.text-center')).toContainText('Searched Products');
    });
});
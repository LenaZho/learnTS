import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { CartPage } from '../../pages/cart.page';
import { ProductsPage } from '../../pages/products.page';
import { ProductDetailsPage } from '../../pages/product-details.page';

test.describe('Cart Tests', () => {
    test('View cart', async ({ page }) => {
        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const cartPage = new CartPage(page);

        await homePage.navigateTo();
        await homePage.clickProducts();
        await productsPage.clickFirstProduct();
        await productDetailsPage.addToCart();
        await productDetailsPage.viewCartFromModal();
        await cartPage.verifyCartPage();
    });

    test('Proceed to checkout', async ({ page }) => {
        const homePage = new HomePage(page);
        const productsPage = new ProductsPage(page);
        const productDetailsPage = new ProductDetailsPage(page);
        const cartPage = new CartPage(page);

        await homePage.navigateTo();
        await homePage.clickProducts();
        await productsPage.clickFirstProduct();
        await productDetailsPage.addToCart();
        await productDetailsPage.viewCartFromModal();
        await cartPage.verifyCartPage();
        await cartPage.proceedToCheckout();
    });
});
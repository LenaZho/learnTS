import { test } from '@playwright/test';
import { HomePage } from '../../pages/home.page';
import { CartPage } from '../../pages/cart.page';
import { ProductsPage } from '../../pages/products.page';
import { ProductDetailsPage } from '../../pages/product-details.page';

test.describe('Cart Tests', () => {
    let homePage: HomePage;
    let productsPage: ProductsPage;
    let productDetailsPage: ProductDetailsPage;
    let cartPage: CartPage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        productsPage = new ProductsPage(page);
        productDetailsPage = new ProductDetailsPage(page);
        cartPage = new CartPage(page);

        await homePage.navigateTo();
        await homePage.clickProducts();
        await productsPage.clickFirstProduct();
        await productDetailsPage.addToCart();
        await productDetailsPage.viewCartFromModal();
        await cartPage.verifyCartPage();
    });

    test('View cart', async ({ page }) => {
        // Cart is already verified in beforeEach
    });

    test('Proceed to checkout', async ({ page }) => {
        await cartPage.proceedToCheckout();
    });
});
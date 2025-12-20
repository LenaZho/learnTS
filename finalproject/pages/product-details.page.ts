import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductDetailsPage extends BasePage {
    public productName: Locator;
    public productPrice: Locator;
    public quantityInput: Locator;
    public addToCartButton: Locator;
    public continueShoppingButton: Locator;
    public viewCartModalButton: Locator;

    public constructor(page: Page) {
        super(page, '');
        this.productName = page.locator('.product-information h2');
        this.productPrice = page.locator('.product-information span span');
        this.quantityInput = page.locator('#quantity');
        this.addToCartButton = page.locator('button.cart');
        this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")');
        this.viewCartModalButton = page.locator('.modal-content a[href="/view_cart"]');
    }

    public async verifyProductDetails() {
        await expect(this.productName).toBeVisible();
        await expect(this.productPrice).toBeVisible();
    }

    public async addToCart() {
        await this.addToCartButton.click();
    }

    public async continueShopping() {
        await this.continueShoppingButton.click();
    }

    public async viewCartFromModal() {
        await this.viewCartModalButton.click();
    }
}
import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class CartPage extends BasePage {
    public cartInfoTable: Locator;
    public cartProducts: Locator;
    public proceedToCheckoutButton: Locator;
    public deleteButtons: Locator;

    public constructor(page: Page) {
        super(page, '/view_cart');
        this.cartInfoTable = page.locator('#cart_info_table');
        this.cartProducts = page.locator('#cart_info tbody tr');
        this.proceedToCheckoutButton = page.locator('.btn-default.check_out');
        this.deleteButtons = page.locator('.cart_quantity_delete');
    }

    public async verifyCartPage() {
        await expect(this.cartInfoTable).toBeVisible();
    }

    public async verifyProductInCart(productName: string) {
        await expect(this.page.locator(`text=${productName}`)).toBeVisible();
    }

    public async proceedToCheckout() {
        await this.proceedToCheckoutButton.click();
    }

    public async removeProduct() {
        await this.deleteButtons.first().click();
    }
}

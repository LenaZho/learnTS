import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './base.page';

export class ProductsPage extends BasePage {
    public productsTitle: Locator;
    public searchInput: Locator;
    public searchButton: Locator;
    public productItems: Locator;
    public viewProductLinks: Locator;

    public constructor(page: Page) {
        super(page, '/products');
        this.productsTitle = page.locator('.title.text-center');
        this.searchInput = page.locator('#search_product');
        this.searchButton = page.locator('#submit_search');
        this.productItems = page.locator('.product-image-wrapper');
        this.viewProductLinks = page.locator('a[href*="/product_details/"]');
    }

    public async verifyProductsPage() {
        await expect(this.productsTitle).toContainText('All Products');
    }

    public async searchProduct(productName: string) {
        await this.searchInput.fill(productName);
        await this.searchButton.click();
    }

    public async clickFirstProduct() {
        await this.viewProductLinks.first().click();
    }
}
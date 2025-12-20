import { Page, Locator } from '@playwright/test';
import { BasePage } from './base.page';

export class SignupPage extends BasePage {
    public titleRadio: Locator;
    public passwordInput: Locator;
    public daySelect: Locator;
    public monthSelect: Locator;
    public yearSelect: Locator;
    public firstNameInput: Locator;
    public lastNameInput: Locator;
    public companyInput: Locator;
    public address1Input: Locator;
    public address2Input: Locator;
    public countrySelect: Locator;
    public stateInput: Locator;
    public cityInput: Locator;
    public zipcodeInput: Locator;
    public mobileNumberInput: Locator;
    public createAccountButton: Locator;

    public constructor(page: Page) {
        super(page, '/signup');
        this.titleRadio = page.locator('#id_gender1');
        this.passwordInput = page.locator('[data-qa="password"]');
        this.daySelect = page.locator('[data-qa="days"]');
        this.monthSelect = page.locator('[data-qa="months"]');
        this.yearSelect = page.locator('[data-qa="years"]');
        this.firstNameInput = page.locator('[data-qa="first_name"]');
        this.lastNameInput = page.locator('[data-qa="last_name"]');
        this.companyInput = page.locator('[data-qa="company"]');
        this.address1Input = page.locator('[data-qa="address"]');
        this.address2Input = page.locator('[data-qa="address2"]');
        this.countrySelect = page.locator('[data-qa="country"]');
        this.stateInput = page.locator('[data-qa="state"]');
        this.cityInput = page.locator('[data-qa="city"]');
        this.zipcodeInput = page.locator('[data-qa="zipcode"]');
        this.mobileNumberInput = page.locator('[data-qa="mobile_number"]');
        this.createAccountButton = page.locator('[data-qa="create-account"]');
    }

    public async fillSignupForm(userData: any) {
        await this.titleRadio.check();
        await this.passwordInput.fill(userData.password);
        await this.daySelect.selectOption(userData.birth_date || '15');
        await this.monthSelect.selectOption(userData.birth_month || 'June');
        await this.yearSelect.selectOption(userData.birth_year || '1990');
        await this.firstNameInput.fill(userData.firstname || 'Test');
        await this.lastNameInput.fill(userData.lastname || 'User');
        await this.companyInput.fill(userData.company || 'Test Company');
        await this.address1Input.fill(userData.address1 || '123 Test Street');
        await this.address2Input.fill(userData.address2 || '');
        await this.countrySelect.selectOption(userData.country || 'United States');
        await this.stateInput.fill(userData.state || 'California');
        await this.cityInput.fill(userData.city || 'Los Angeles');
        await this.zipcodeInput.fill(userData.zipcode || '12345');
        await this.mobileNumberInput.fill(userData.mobile_number || '1234567890');
    }

    public async createAccount() {
        await this.createAccountButton.click();
    }
}
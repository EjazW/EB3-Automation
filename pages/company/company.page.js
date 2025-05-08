const { expect } = require('@playwright/test');
const CompanyLocators = require('../../locators/company/company.locators');
const path = require('path');
const { emitWarning } = require('process');

class CompanyPage {
    constructor(page) {
        this.page = page;
        this.locators = CompanyLocators;
        this.timeout = 30000;
    }

    async navigate() {
        await this.page.goto('https://ebthree.com/company');
        await this.page.waitForLoadState('networkidle');
    }

    async addCompany(companyData) {
        await this.page.locator(this.locators.ADD_COMPANY_LINK).click();
        await this.page.type(this.locators.COMPANY_NAME_INPUT, companyData.name, { force: true });
        await this.page.type(this.locators.COMPANY_EMAIL_INPUT, "qatester422@gmail.com", { force: true });
        await this.page.type(this.locators.COMPANY_PHONE_INPUT, "03476354687", { force: true });
        await this.page.type(this.locators.COMPANY_ADDRESS_INPUT, "Pakistan", { force: true });
        await this.page.type(this.locators.COMPANY_CITY_INPUT, "Lahore", { force: true });
        await this.page.type(this.locators.COMPANY_STATE_INPUT, "State", { force: true });
        await this.page.type(this.locators.COMPANY_ZIP_INPUT, "5000", { force: true });
        
        if (companyData.logo) {
            const logoPath = path.join(process.cwd(), 'assets', companyData.logo);
            await this.page.setInputFiles(this.locators.COMPANY_LOGO_INPUT, logoPath);
        }

        await this.page.click(this.locators.SUBMIT_BUTTON);
        await this.page.waitForTimeout(10000);
        await expect(this.page).toHaveURL('https://ebthree.com/company');
        await this.page.waitForTimeout(10000);
    }
}

module.exports = CompanyPage; 
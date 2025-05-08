const { test, expect } = require('@playwright/test');
const CompanyPage = require('../pages/company/company.page');
const { login } = require('../pages/login/login.page');

test.describe('EB3 Company Tests', () => {
    let companyPage;

    test.beforeEach(async ({ page }) => {
        companyPage = new CompanyPage(page);
        await login(page);
    });

    test('Successfully add a new company', async ({ page }) => {
        await companyPage.navigate();
        
        const companyData = {
            name: 'Test Company',
            logo: 'logo.jpeg'
        };

        await companyPage.addCompany(companyData);
    });
}); 
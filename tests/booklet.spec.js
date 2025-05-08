const { test, expect } = require('@playwright/test');
const BookletPage = require('../pages/booklet/booklet.page');
const CompanyPage = require('../pages/company/company.page');
const { login } = require('../pages/login/login.page');

test.describe('EB3 Booklet Tests', () => {
    test.setTimeout(180000);    
    let bookletPage;
    let companyPage;

    test.beforeEach(async ({ page }) => {
        bookletPage = new BookletPage(page);
        companyPage = new CompanyPage(page);
        await login(page);
    });

    test('Add a new company', async ({ page }) => {
        test.setTimeout(180000);
        await companyPage.navigate();
        
        const companyData = {
            name: 'Test Company Automation',
            logo: 'logo.jpeg'
        };

        await companyPage.addCompany(companyData);
    });

    test('Create a new booklet with all 5 Steps', async ({ page }) => {
        test.setTimeout(180000);
        await bookletPage.navigate();
        
        const bookletData = {
            name: 'Test Booklet Automation',
            description: 'This is a test booklet description',
            file: 'test.pdf'  // Make sure this file exists in your assets folder
        };

        await bookletPage.addBooklet(bookletData);
        await bookletPage.booklet_creation_step2();
        await bookletPage.booklet_creation_step3();
        await bookletPage.booklet_creation_step4();
        await bookletPage.booklet_creation_step5();
    });

    ('Test Multiple Cover Pages', async ({ page }) => {
        test.setTimeout(180000);
        await bookletPage.navigate();
        
        const bookletData = {
            name: 'Test Booklet Automation',
            description: 'This is a test booklet description',
            file: 'test.pdf'  // Make sure this file exists in your assets folder
        };

        await bookletPage.multiple_cover_pages(bookletData);
    });
}); 
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login/login.page');

test.describe('EB3 Login Tests', () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
    });

    test('Successful login with valid credentials', async ({ page }) => {
        await loginPage.navigate();
        await loginPage.login('ejazw05@gmail.com', 'Ebthreerocks#1');
        await expect(page).toHaveURL('https://ebthree.com/company');
    });

    test.skip('failed login with invalid credentials', async ({ page }) => {
        // Navigate to login page
        await loginPage.navigate();
        
        // Attempt login with invalid credentials
        await loginPage.login('invalid@email.com', 'wrongpassword');
        
        // Verify error message
        expect(await loginPage.isErrorVisible()).toBeTruthy();
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toContain('Invalid');
    });

    test.skip('login with empty fields', async ({ page }) => {
        // Navigate to login page
        await loginPage.navigate();
        
        // Click login without entering credentials
        await loginPage.page.click(loginPage.locators.LOGIN_BUTTON);
        
        // Verify we're still on the login page
        expect(await loginPage.page.url()).toContain('/login');
    });
}); 
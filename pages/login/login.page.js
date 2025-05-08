const { expect } = require('@playwright/test');
const LoginLocators = require('../../locators/login/login.locators');

async function login(page) {
    await page.goto('https://ebthree.com/login');
    await page.waitForLoadState('networkidle');
    await page.fill(LoginLocators.EMAIL_INPUT, "ejazw05@gmail.com");
    await page.fill(LoginLocators.PASSWORD_INPUT, "Ebthreerocks#1");
    await page.click(LoginLocators.LOGIN_BUTTON);
    // Wait for loading spinner to disappear
    await page.waitForSelector(LoginLocators.LOADING_SPINNER, { state: 'hidden' }); 
    await expect(page).toHaveURL('https://ebthree.com/company');
}

module.exports = { login }; 
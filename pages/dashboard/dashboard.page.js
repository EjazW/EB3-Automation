const { expect } = require('@playwright/test');
const DashboardLocators = require('../../locators/dashboard/dashboard.locators');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.locators = DashboardLocators;
        this.timeout = 30000;
    }

    async getWelcomeMessage() {
        return await this.page.locator(this.locators.WELCOME_MESSAGE).textContent();
    }

    async clickUserProfile() {
        await this.page.click(this.locators.USER_PROFILE);
    }

    async clickLogout() {
        await this.page.click(this.locators.LOGOUT_BUTTON);
    }

    async isWelcomeMessageVisible() {
        return await this.page.locator(this.locators.WELCOME_MESSAGE).isVisible();
    }
}

module.exports = DashboardPage; 
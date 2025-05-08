const { expect } = require('@playwright/test');
const ProfileLocators = require('../../locators/profile/profile.locators');

class ProfilePage {
    constructor(page) {
        this.page = page;
        this.locators = ProfileLocators;
        this.timeout = 30000;
    }

    async navigateToProfile() {
        await this.page.click(this.locators.PROFILE_LINK);
        await this.page.waitForLoadState('networkidle');
    }

    async editProfile(firstName, lastName, email) {
        await this.page.fill(this.locators.FIRST_NAME_INPUT, firstName);
        await this.page.fill(this.locators.LAST_NAME_INPUT, lastName);
        await this.page.fill(this.locators.EMAIL_INPUT, email);
    }

    async saveChanges() {
        await this.page.click(this.locators.SAVE_BUTTON);
        await this.page.waitForLoadState('networkidle');
    }

    async getSuccessMessage() {
        return await this.page.locator(this.locators.SUCCESS_MESSAGE).textContent();
    }

    async isSuccessMessageVisible() {
        return await this.page.locator(this.locators.SUCCESS_MESSAGE).isVisible();
    }

    async getCurrentFirstName() {
        return await this.page.locator(this.locators.FIRST_NAME_INPUT).inputValue();
    }

    async getCurrentLastName() {
        return await this.page.locator(this.locators.LAST_NAME_INPUT).inputValue();
    }

    async getCurrentEmail() {
        return await this.page.locator(this.locators.EMAIL_INPUT).inputValue();
    }
}

module.exports = ProfilePage; 
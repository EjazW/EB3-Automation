const { test, expect } = require('@playwright/test');
const ProfilePage = require('../pages/profile/profile.page');
const LoginPage = require('../pages/login/login.page');

test.describe('Profile Management Tests', () => {
    let profilePage;
    let loginPage;

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page);
        loginPage = new LoginPage(page);
        
        // Login before each test
        await loginPage.navigate('https://your-eb3-application.com/login');
        await loginPage.login('valid_username', 'valid_password');
    });

    test('update profile information', async () => {
        // Navigate to profile page
        await profilePage.navigateToProfile();
        
        // Get current values
        const currentFirstName = await profilePage.getCurrentFirstName();
        const currentLastName = await profilePage.getCurrentLastName();
        const currentEmail = await profilePage.getCurrentEmail();
        
        // Update profile with new values
        const newFirstName = 'John';
        const newLastName = 'Doe';
        const newEmail = 'john.doe@example.com';
        
        await profilePage.editProfile(newFirstName, newLastName, newEmail);
        await profilePage.saveChanges();
        
        // Verify success message
        expect(await profilePage.isSuccessMessageVisible()).toBeTruthy();
        const successMessage = await profilePage.getSuccessMessage();
        expect(successMessage).toContain('Profile updated successfully');
        
        // Verify new values are saved
        expect(await profilePage.getCurrentFirstName()).toBe(newFirstName);
        expect(await profilePage.getCurrentLastName()).toBe(newLastName);
        expect(await profilePage.getCurrentEmail()).toBe(newEmail);
    });

    test('cancel profile changes', async () => {
        // Navigate to profile page
        await profilePage.navigateToProfile();
        
        // Get current values
        const originalFirstName = await profilePage.getCurrentFirstName();
        const originalLastName = await profilePage.getCurrentLastName();
        const originalEmail = await profilePage.getCurrentEmail();
        
        // Make changes but don't save
        await profilePage.editProfile('New', 'Name', 'new.email@example.com');
        
        // Click cancel
        await profilePage.page.click(ProfileLocators.CANCEL_BUTTON);
        
        // Verify original values are preserved
        expect(await profilePage.getCurrentFirstName()).toBe(originalFirstName);
        expect(await profilePage.getCurrentLastName()).toBe(originalLastName);
        expect(await profilePage.getCurrentEmail()).toBe(originalEmail);
    });
}); 
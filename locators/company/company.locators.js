class CompanyLocators {
    // Add Company Form Elements
    static ADD_COMPANY_LINK = "//a[normalize-space()='Add Company']";
    static COMPANY_NAME_INPUT = '#name';
    static COMPANY_LOGO_INPUT = '#logo';
    static COMPANY_EMAIL_INPUT = '#contact_person_email';
    static COMPANY_PHONE_INPUT = '#phone';
    static COMPANY_ADDRESS_INPUT = '#address';
    static COMPANY_CITY_INPUT = '#city';
    static COMPANY_STATE_INPUT = '#state';
    static COMPANY_ZIP_INPUT = '#zip';
    
    // Buttons
    static SUBMIT_BUTTON = 'button[type="submit"]';
    
    // Messages
    static SUCCESS_MESSAGE = '#loom-companion-mv3';
    static ERROR_MESSAGE = '.error-message';
    
    // Loading States
    static LOADING_SPINNER = 'text=Loading';
}

module.exports = CompanyLocators; 
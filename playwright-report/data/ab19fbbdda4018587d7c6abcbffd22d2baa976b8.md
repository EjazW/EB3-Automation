# Test info

- Name: EB3 Booklet Tests >> Add a new company
- Location: /Users/aaqibwaheed1234/Desktop/EB3 Automation/tests/booklet.spec.js:17:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://ebthree.com/company", waiting until "load"

    at CompanyPage.navigate (/Users/aaqibwaheed1234/Desktop/EB3 Automation/pages/company/company.page.js:14:25)
    at /Users/aaqibwaheed1234/Desktop/EB3 Automation/tests/booklet.spec.js:19:27
```

# Test source

```ts
   1 | const { expect } = require('@playwright/test');
   2 | const CompanyLocators = require('../../locators/company/company.locators');
   3 | const path = require('path');
   4 | const { emitWarning } = require('process');
   5 |
   6 | class CompanyPage {
   7 |     constructor(page) {
   8 |         this.page = page;
   9 |         this.locators = CompanyLocators;
  10 |         this.timeout = 30000;
  11 |     }
  12 |
  13 |     async navigate() {
> 14 |         await this.page.goto('https://ebthree.com/company');
     |                         ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  15 |         await this.page.waitForLoadState('networkidle');
  16 |     }
  17 |
  18 |     async addCompany(companyData) {
  19 |         await this.page.locator(this.locators.ADD_COMPANY_LINK).click();
  20 |         await this.page.type(this.locators.COMPANY_NAME_INPUT, companyData.name, { force: true });
  21 |         await this.page.type(this.locators.COMPANY_EMAIL_INPUT, "qatester422@gmail.com", { force: true });
  22 |         await this.page.type(this.locators.COMPANY_PHONE_INPUT, "03476354687", { force: true });
  23 |         await this.page.type(this.locators.COMPANY_ADDRESS_INPUT, "Pakistan", { force: true });
  24 |         await this.page.type(this.locators.COMPANY_CITY_INPUT, "Lahore", { force: true });
  25 |         await this.page.type(this.locators.COMPANY_STATE_INPUT, "State", { force: true });
  26 |         await this.page.type(this.locators.COMPANY_ZIP_INPUT, "5000", { force: true });
  27 |         
  28 |         if (companyData.logo) {
  29 |             const logoPath = path.join(process.cwd(), 'assets', companyData.logo);
  30 |             await this.page.setInputFiles(this.locators.COMPANY_LOGO_INPUT, logoPath);
  31 |         }
  32 |
  33 |         await this.page.click(this.locators.SUBMIT_BUTTON);
  34 |         await this.page.waitForTimeout(10000);
  35 |         await expect(this.page).toHaveURL('https://ebthree.com/company');
  36 |         await this.page.waitForTimeout(10000);
  37 |     }
  38 | }
  39 |
  40 | module.exports = CompanyPage; 
```
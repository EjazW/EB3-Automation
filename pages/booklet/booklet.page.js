const { expect } = require('@playwright/test');
const BookletLocators = require('../../locators/booklet/booklet.locators');
const path = require('path');

class BookletPage {
    constructor(page) {
        this.page = page;
        this.locators = BookletLocators;
    }

    async navigate() {
        await this.page.goto("https://ebthree.com/company");
        await this.page.waitForLoadState('networkidle');
    }


    async addBooklet(bookletData) {
        //await this.page.goto("https://ebthree.com/booklets?company=MTY0OTQ=");
        await this.page.locator(this.locators.COMPANY).click();
        await this.page.goto("https://ebthree.com/booklets?company=MTY0OTQ=")
        await this.page.locator(this.locators.ADD_BOOKLET_LINK).click();
        await this.page.fill(this.locators.BOOKLET_NAME_INPUT, bookletData.name);
        await this.page.click(this.locators.BOOKLET_ADD_COVER_PAGE_BUTTON);
        // await this.page.waitForTimeout(15000);
        await this.page.click(this.locators.BOOKLET_COVER_PAGE);

        const saveButton = await this.page.locator(this.locators.SAVE_COVER_PAGE_BUTTON);
        await saveButton.waitFor({ state: 'visible', timeout: 30000 });//
        await saveButton.evaluate(button => button.click());
        // await this.page.waitForTimeout(15000);

        // Add Back Page
        const back_cover_btn = this.page.locator(this.locators.BOOKLET_ADD_BACK_PAGE_BUTTON);
        await back_cover_btn.nth(1).waitFor({ state: 'visible', timeout: 30000 });
        await back_cover_btn.nth(1).click();

        await this.page.waitForTimeout(10000);
        await this.page.click(this.locators.BOOKLET_BACK_PAGE, { timeout: 30000 });//
        await this.page.waitForTimeout(2000);

        const saveBackButton = await this.page.locator(this.locators.SAVE_BACK_PAGE_BUTTON);
        await saveBackButton.waitFor({ state: 'visible', timeout: 30000 });//
        await saveBackButton.evaluate(button => button.click());
        await this.page.click(this.locators.SELECT_BOOKLET_THEME);
        await this.page.click(this.locators.SAVE_AND_NEXT_BUTTON);
        // await expect(this.page).toHaveURL(/.*\/booklets\/edit_report\/\d+\/step-2/)
    }

    async booklet_creation_step2() {
        //Select Plans
        await this.page.goto("https://ebthree.com/booklets/edit_report/27161/step-2");
        await this.page.locator(this.locators.PLANS_DROPDOWN).click({ force: true, timeout: 5000 });
        await this.page.locator(this.locators.PLAN_OPTION_1).click({ force: true, timeout: 5000 });
        await this.page.locator(this.locators.PLAN_OPTION_3).click({ force: true });

        //Select Pages
        await this.page.locator('[class="btn btn-block text-left collapsed text-white"]').first().click();
        await this.page.locator(this.locators.PAGE_OPTION_1).click({ force: true, timeout: 5000 });
        await this.page.locator(this.locators.PAGE_OPTION_2).click({ force: true, timeout: 5000 });

        // Legal Notices
        await this.page.locator(this.locators.LEGAL_NOTICES_DROPDOWN).click();
        await this.page.locator(this.locators.LEGAL_NOTICES_OPTION_1).click({ force: true, timeout: 5000 });//isu
        await this.page.locator(this.locators.LEGAL_NOTICES_OPTION_2).click({ force: true, timeout: 5000 });

        // Compliance
        await this.page.locator(this.locators.COMPLIANCE_DROPDOWN).click();
        await this.page.locator(this.locators.COMPLIANCE_OPTION_1).click({ force: true, timeout: 5000 });
        await this.page.locator(this.locators.COMPLIANCE_OPTION_2).click({ force: true, timeout: 5000 });
// await this.page.pause();
        //Save and Next
        await this.page.locator(this.locators.SAVE_AND_NEXT_BUTTON_2).click();
    }

    async booklet_creation_step3() {
        await this.page.goto("https://ebthree.com/booklets/edit_report/27161/step-3");
        // Array of input locators to check
        const inputLocators = [
            this.locators.first_input,
            this.locators.second_input,
            this.locators.third_input,
            this.locators.fourth_input,
            this.locators.fifth_input,
            this.locators.sixth_input,
            this.locators.seventh_input
        ];
        // Try to fill each input if it exists
        for (const locator of inputLocators) {
            try {
                const input = await this.page.locator(locator);
                if (await input.isVisible()) {
                    await input.press("End");
                    await input.type("1");
                }
            } catch (error) {
                continue;
            }
        }

        await this.page.locator("button[type='submit']").click();
    }

    async booklet_creation_step4() {
        await this.page.goto("https://ebthree.com/booklets/edit_report/27161/step-4");
        // await this.page.pause();
        await this.page.locator(this.locators.save_plan_checkbox).click();
        //Custom Logo
        await this.page.locator(this.locators.add_logo_button).nth(0).click();
        await this.page.locator(this.locators.logo_input).click();
        await this.page.locator(this.locators.logo).nth(1).click();//is
        await this.page.locator(this.locators.save_button).click();
        await this.page.waitForTimeout(5000);
        await this.page.locator(this.locators.OK).click({waitForTimeout: 3000}); //is

        await this.page.locator(this.locators.carrier_name).fill("Test Carrier");
        await this.page.locator(this.locators.plan_name).fill("Test Plan");
        await this.page.locator(this.locators.page_name).fill("Test Page");

        //Loadd Plan Data
        await this.page.locator(this.locators.load_plan_data).nth(0).click();
        await this.page.locator(this.locators.choose).nth(0).click();
        await this.page.waitForTimeout(2000);
        await this.page.locator(this.locators.option_1).nth(2).click();
        await this.page.locator(this.locators.load_plan).first().click();//is

        //Carrie Plan Library
        await this.page.locator(this.locators.carrier_plan_library).nth(0).click({ force: true });
        await this.page.locator(this.locators.market).click();
        await this.page.locator(this.locators.market_option).nth(1).click({ force: true });
        await this.page.locator(this.locators.plan).click();
        await this.page.locator(this.locators.plan_option).nth(1).click({ force: true });
        await this.page.locator(this.locators.load_data_button).click({ force: true });
        await this.page.locator(this.locators.cance).click();

        await this.page.locator(this.locators.check_box_1).click({force:true});
        await this.page.locator(this.locators.check_box_2).click({force:true});
        await this.page.locator(this.locators.check_box_3).click({force:true});
        await this.page.locator(this.locators.check_box_4).click({force:true});
        await this.page.locator(this.locators.check_box_5).click({force:true});
        await this.page.locator(this.locators.check_box_6).click({force:true});
        await this.page.locator(this.locators.check_box_7).click({force:true});
        await this.page.locator(this.locators.check_box_8).click({force:true});
        await this.page.locator(this.locators.SAVE_AND_NEXT_BUTTON_4).nth(1).click();
    }

    async booklet_creation_step5() {
        await this.page.goto("https://ebthree.com/booklets/edit_report/27161/step-5");
        await this.page.waitForTimeout(10000);
        await this.page.locator(this.locators.pay_period).fill("12");
        await this.page.locator(this.locators.rate).fill("10000");
        await this.page.selectOption('#ratetype', '2_tier');
        await this.page.selectOption('#formula_type', 'percentage');
        await this.page.locator(this.locators.buy_up_checkbox).click();
        await this.page.locator(this.locators.SAVE_AND_NEXT_BUTTON_5).nth(1).click();

        
    }
        

    async multiple_cover_pages() {
        const totalCovers = 20 // 

        for (let i = 0; i < totalCovers; i++) {
            // await this.page.locator(this.locators.COMPANY).click()
            await this.page.goto("https://ebthree.com/booklets?company=MTY0OTQ=")
            await this.page.locator(this.locators.ADD_BOOKLET_LINK).click()
            // await this.page.pause()
            await this.page.fill(this.locators.BOOKLET_NAME_INPUT, `Test Booklet ${i + 1}`)
            await this.page.click(this.locators.BOOKLET_ADD_COVER_PAGE_BUTTON)
            const coverPages = this.page.locator('[class="cover-pages-bg-img-back"]')
            const count = await coverPages.count()

            if (i < count) {
                await coverPages.nth(i).click()
                await this.page.locator("div[id='backgroundImageModel'] div[class='modal-footer justify-content-between'] button:nth-child(1)").click({force:true});
                await this.page.waitForTimeout(1000)
            } else {
                console.log(`Cover page at index ${i}`)
            }
        }
    }
}

module.exports = BookletPage; 

class BookletLocators {
    // Add Booklet Form Elements
    static COMPANY = "tbody tr:nth-child(1) td:nth-child(1)";
    static ADD_BOOKLET_LINK = "//a[normalize-space()='Create New Booklet']";
    static BOOKLET_NAME_INPUT = '#name';
    static BOOKLET_ADD_COVER_PAGE_BUTTON = "button[onclick='addCover()']";
    static BOOKLET_COVER_PAGE = ".cover-pages-bg-img-back[data-filename='cover1']";
    static SAVE_COVER_PAGE_BUTTON = "#savebgimage";

    static BOOKLET_ADD_BACK_PAGE_BUTTON = '[class="btn btn-success w-100"]';
    static BOOKLET_BACK_PAGE = '[data-filename="back-cover"]';
    static SAVE_BACK_PAGE_BUTTON = "#savebackPageimage";  

    static SELECT_BOOKLET_THEME = "img[src='https://ebthree.com/public/imgs/booklet-demos/health.png']";
    // Buttons
    static SAVE_AND_NEXT_BUTTON = "//button[normalize-space()='Save and Next']";
    
    // Step 2
   static PLANS_DROPDOWN = '[class="btn btn-block text-left text-white"]';
   static PLAN_OPTION_1 = "input[value='1'][name='plans[][plan]']";
   static PLAN_OPTION_2 = "input[value='472']']";
   static PLAN_OPTION_3 = "input[value='2'][name='plans[][plan]']";

   //Pages 
   static PAGES_DROPDOWN ="button[class='btn btn-block text-left text-white collapsed']";
   static PAGE_OPTION_1 = "//input[@value='20']";
   static PAGE_OPTION_2 = "//input[@value='1323']";

   // Legal Notices
   static LEGAL_NOTICES_DROPDOWN = "button[data-target='#collapseThree']";
   static LEGAL_NOTICES_OPTION_1 = "//input[@value='24']";
   static LEGAL_NOTICES_OPTION_2 = "//input[@value='27']";
   
   //Compliance
   static COMPLIANCE_DROPDOWN = "button[data-target='#collapseFour']";
   static COMPLIANCE_OPTION_1 = "//input[@value='219']";
   static COMPLIANCE_OPTION_2 = "//input[@value='220']";

   static SAVE_AND_NEXT_BUTTON_2 = "button[type='submit']";

   //Step 3
    static first_input = '[value="Health 3-Tiered Network"]'
    static second_input = '[value="Contact Sheet"]'
    static third_input = '[value="Health"]'
    static fourth_input = '[value="Health Dual Option"]'
    static fifth_input = '[value="Insurance Terms and Definitions"]'
    static sixth_input = '[value="CHIP Notice"]'
    static seventh_input = '[value="Cobra Notice"]'
    static SAVE_AND_NEXT_BUTTON_3 = "button[type='submit']";

    //Step 4
    static save_plan_checkbox = "input[value='1'][name='page_content[472][save_plan_0]']";
    static carrier_name = "(//input[@id='carrier_name_0'])[1]";
    static plan_name = "(//input[@id='plan_name_0'])[1]";
    static page_name = "(//input[@id='page_name'])[1]"

    //Logo
    static add_logo_button = '[class="ml-3 float-right d-block btn btn-primary  page_open_pop  mb-2"]'; //nth(0)
    static logo_input = "//div[@aria-modal='true']//button[1]//img[1]";
    static logo = "[src='https://temp-ebthree.s3.us-east-2.amazonaws.com/carrier_logos/1709115770.png']";//nth(1)
    static save_button = "//button[@id='storeCarrierValue-plan-472']";
    static OK = ".confirm.btn.btn-lg.btn-primary";

    //Load Plan Data
    static load_plan_data = '[class="btn btn-info btn-sm btn-AgencyPlanLibrary uploadButtonDivClass"]';//nth 0
    static choose = '[class="select2-selection__placeholder"]'; //nth 0
    static option_1 = '[role="option"]';
    // static load_plan = "(//button[@type='button'])[18]";
    static load_plan = ".hidden_data .btn-success";//first

    //Carrie Plan Library
    static carrier_plan_library = '[class="btn btn-sm btn-secondary btn-CarrierPlanLibrary uploadButtonDivClass isVisbleForHealth"]';//nth 0
    static market = '[id="select2-market_segment-container"]';
    static market_option = '[role="option"]'; //nth 1
    static plan = '[id="select2-coverageType-container"]';
    static plan_option = '[role="option"]'; //nth 1
    static load_data_button = "//button[@id='loadCarrierData']";
    static cance = "//div[@id='button-apidata']//span[@aria-hidden='true'][normalize-space()='×']"

     //Check Boxes
    static check_box_1 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][100][disable]']";
    static check_box_2 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][101][disable]']";
    static check_box_3 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][102][disable]']";
    static check_box_4 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][103][disable]']";
    static check_box_5 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][104][disable]']";
    static check_box_6 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][105][disable]']";
    static check_box_7 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][106][disable]']";
    static check_box_8 = "input[value='1'][name='input_values[plan][472][section][0][plan_field_type][107][disable]']";
    static SAVE_AND_NEXT_BUTTON_4 = '[class="btn btn-primary next-step step-btn"]';
    // static SAVE_AND_NEXT_BUTTON_4 = "(//button[@type='button'][normalize-space()='Save & Next'])[3]";

    //Step 5
    static upload_rates_button = '.btn.btn-sm.btn-warning.uploadButtonDivClass'; //[class="btn btn-sm btn-warning uploadButtonDivClass"]
    static pay_period = "input[placeholder='Enter # of pay periods'][name='plan_formulas[472][basic_data][no_of_pay_periods]']";
    static rate = "input[placeholder='Enter Rate Guarantee'][name='plan_formulas[472][basic_data][rate_guarantee]']";
    static rate_type_dropdown = "select[name='plan_formulas[472][basic_data][formula]']";
    static rate_type_option = 'option[value="2_tier"]';//first
    // static rate_type_option = "(//option[@value='2_tier'][normalize-space()='2 Tier Composite'])[1]";
    static contribution_type_dropdown = "#formula_type";
    static contribution_type_option = "(//option[@value='fix'][normalize-space()='$$ Fixed Dollar'])[1]";
    static buy_up_checkbox = "input[value='0'][name='plan_formulas[472][1][is_buyup]']";

    static rate_file = "//input[@type='file']"
    static SAVE_AND_NEXT_BUTTON_5 = '[class="btn btn-primary next-step step-btn"]';
    static opt_2 = '[class="nav-link active bg-warning"]';//nth0
    static save_and_complete_button = '[class="btn btn-primary next-step step-btn"]';//nth 3

    // Agency Plan Library Dropdown
    static AGENCY_PLAN_DROPDOWN = '[class="btn btn-info btn-sm btn-AgencyPlanLibrary uploadButtonDivClass"]';
    static AGENCY_PLAN_OPTION = 'li[id="select2-1yye-result-hodc-JOE 4"]';
}

module.exports = BookletLocators; 




// while (!(await this.page.locator(this.locators.save_and_complete_button).nth(3).isVisible())) {
        //     await this.page.locator(this.locators.pay_period).fill("12")
        //     await this.page.locator(this.locators.rate).fill("10000")
        //     await this.page.selectOption('#ratetype', '2_tier')
        //     await this.page.selectOption('#formula_type', 'percentage')
        //     await this.page.locator(this.locators.buy_up_checkbox).click()
        //     await this.page.locator(this.locators.SAVE_AND_NEXT_BUTTON_5).nth(1).click()
        //     await this.page.waitForTimeout(1000) // optional: small wait for next section to load
        //   }
        //   await this.page.locator(this.locators.save_and_complete_button).nth(3).click()
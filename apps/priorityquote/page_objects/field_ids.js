/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * field_ids.js
 *  This will contain all of the element ids for the tests
 *
 *************************************************************************/

'use strict';


var priority_quote_ids = function() {

/**********************************************************************************************************
   ___      _          _ __         ____           __        ____                 ____   ___    
  / _ \____(____  ____(_/ /___ __  / __ \__ _____ / /____   / _____  ______ _    /  ____/ ( )___
 / ___/ __/ / _ \/ __/ / __/ // / / /_/ / // / _ / __/ -_) / _// _ \/ __/  ' \  _/ // _  /|/(_-<
/_/  /_/ /_/\___/_/ /_/\__/\_, /  \___\_\_,_/\___\__/\__/ /_/  \___/_/ /_/_/_/ /___/\_,_/  /___/
***********************************************************************************************************/

	//Priority Quote Login Page
	this.pq_username = element(by.name("username"));
	this.pq_password = element(by.name("password"));
	this.pq_login_button = element(by.buttonText("LOGIN"));

	this.pq_register_button = element(by.name("submitbutton"));
	this.pq_tell_us_who_you_are_option1_dropDown = element(by.xpath("//div[@class='row']/form/select//option[1]"));
	this.pq_tell_us_who_you_are_option2_dropDown = element(by.xpath("//div[@class='row']/form/select//option[2]"));
	this.pq_tell_us_who_you_are_option3_dropDown = element(by.xpath("//div[@class='row']/form/select//option[3]"));
	this.pq_tell_us_who_you_are_option4_dropDown = element(by.xpath("//div[@class='row']/form/select//option[4]"));
	this.pq_tell_us_who_you_are_option5_dropDown = element(by.xpath("//div[@class='row']/form/select//option[5]"));


	//Priority Quote Menu
	this.pq_home_button = element(by.linkText("Home"));
	this.pq_contact_button= element(by.linkText("Contact"));
	this.pq_logout_button = element(by.css('[ng-click="logout()"]'));
	this.pq_hellousername_button = element(by.css('ul.nav:nth-child(4) > li:nth-child(2) > a:nth-child(1)'));


	//Priority Quote Dashboard Page
	this.pq_individual_button = element(by.css("button.ph-btn.btn-green"));
	this.pq_zipcode = element(by.name("zip"));
	this.pq_small_group_button = element(by.css("a.ph-btn.btn-green"));
	this.pq_healthcare_gov_button = element(by.xpath("//div[@class='main-content']//button[.='Healthcare.gov']"));


	//footer
	this.pq_priority_health_button = element(by.linkText("Priority Health"));
	this.pq_priority_medicare_button = element(by.linkText("Priority Medicare"));
	this.pq_understanding_health_reform_button = element(by.linkText("Understanding Health Reform"));
	this.pq_my_go_points_button = element(by.linkText("MyGo Points"));
	this.pq_individual_and_family_button = element(by.xpath("//div[@id='footer']//a[.='Individual & Family']"));
	this.pq_medicare_button = element(by.xpath("//div[@id='footer']//a[.='Medicare']"));
	this.pq_employer_and_employee_button = element(by.xpath("//div[@id='footer']//a[.='Employer & employee']"));
	this.pq_all_plans_button = element(by.xpath("//div[@id='footer']//a[.='All plans']"));
	this.pq_members_button = element(by.linkText("Members"));
	this.pq_employers_button = element(by.linkText("Employers"));
	this.pq_providers_button = element(by.linkText("Providers"));
	this.pq_agents_button = element(by.linkText("Agents"));
	this.pq_vendors_button = element(by.linkText("Vendors"));
	this.pq_media_button = element(by.xpath("//div[@id='footer']//a[.='Media']"));
	this.pq_careers_button = element(by.xpath("//div[@id='footer']//a[.='Media']"));
	this.pq_wellness_button = element(by.xpath("//div[@id='footer']//a[.='Wellness']"));
	this.pq_email_us_button = element(by.linkText("Email Us"));
	this.pq_website_feedback_button = element(by.linkText("Website Feedback"));
	this.pq_facebook_button = element(by.linkText("Facebook"));
	this.pq_twitter_button = element(by.linkText("Twitter"));
	this.pq_my_go_points_button = element(by.xpath("//div[@id='footer']//span[.='MyGo Points']"));
	
	//Priority Quote Individual page
	/////////////////////New Page//////////////////////////////////////////
	this.pq_zipcode = element(by.name("zip"));
	this.pq_first_name = element(by.name("firstname"));
	this.pq_last_name = element(by.name("lastname"));
	this.pq_date_of_birth = element(by.name("birthdate"));
	this.pq_gender_male_radiobutton = element(by.css("input.ng-dirty:nth-child(1)"));
	this.pq_gender_female_radiobutton = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(5) > input:nth-child(3)"));
	this.pq_tobacco_use_yes_radiobutton = element(by.css("td.ng-scope:nth-child(6) > span:nth-child(1) > input:nth-child(1)"));
	this.pq_tobacco_use_no_radiobutton = element(by.css("td.ng-scope:nth-child(6) > span:nth-child(1) > input:nth-child(3)"));
	this.pq_add_dental_enroll_radiobutton = element(by.css("td.ng-scope:nth-child(7) > input:nth-child(1)"));
	this.pq_add_dental_waive_radiobutton = element(by.css("td.ng-scope:nth-child(7) > input:nth-child(3)"));
	this.pq_continue_button = element(by.xpath("//div[@class='main-content']//submit-button[.='Continue']"));
	this.pq_individual_medical_plans = element(by.css("button.btn-green:nth-child(2)"));
	this.pq_individual_dental_plans = element(by.css("button.btn-green:nth-child(3)"));
	this.pq_individual_medical_plan_option1 = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(1)"));
	this.pq_individual_dental_plan_option1 = element(by.css("table.table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) > input:nth-child(1)"));
	this.pq_individual_enroll_button = element(by.css("button.ph-btn.btn-orange"));
	this.pq_member_information_button = element(by.css("#Enrollment > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > h4:nth-child(1)"));
	this.pq_eligibility_requirements = element(by.linkText("Eligibility requirements"));
	this.pq_member_information = element(by.linkText("Member information"));
	this.pq_payment_information = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[1]/a/h4"));
	this.pq_expand_all = element(by.linkText("Expand all"));
	this.pq_middle_initial = element(by.name("middleInitial"));
	this.pq_ssn = element(by.name("ssn"));
	this.pq_street_address1 = element(by.name("address1"));
	this.pq_street_address2 = element(by.name("address2"));
	this.pq_city = element(by.name("city"));
	this.pq_phone = element(by.name("phone"));
	this.pq_email = element(by.xpath("//div[@id='Enrollment']/div/div[2]/div[2]/div/div/form/div/indv-form/ng-form/div[18]/div/input"));
	this.pq_individual_save_member_information_button = element(by.xpath("//div[@id='Enrollment']//button[.='Save']"));
	this.pq_close_member_information_popup_button = element(by.css("div.modal-border.clearfix > button.pull-right.ng-scope"));
	this.pq_eligibility_requirements_enrollees_eligible = element(by.name("enrolleesEligible"));
	this.pq_dental_attestation_yes_radiobutton = element(by.name("pediatricDental"));
	this.pq_dental_attestation_no_radiobutton = element(by.xpath("//div[@id='Enrollment']/div/div[1]/div[2]/div/div/form/div[2]/div[2]/div[3]/input[2]"));
	this.pq_eligibility_requirements_save_button = element(by.css("submit-button.ph-btn:nth-child(3)"));
	//pq_close_eligibility_requirements_popup_button, does not work
	this.pq_close_eligibility_requirements_popup_button = element(by.css("button.ng-scope:nth-child(3)"));
	//Payment information
	this.pq_payment_frequency_dropdown_option1 = element(by.xpath("//div[@class='col-sm-4']/select//option[1]"));
	this.pq_payment_frequency_dropdown_option2 = element(by.xpath("//div[@class='col-sm-4']/select//option[2]"));
	this.pq_payment_frequency_dropdown_option3 = element(by.xpath("//div[@class='col-sm-4']/select//option[3]"));
	this.pq_payment_frequency_dropdown_option4 = element(by.xpath("//div[@class='col-sm-4']/select//option[4]"));
	this.payment_method_credit_card_radiobutton = element(by.name("paymentMethod"));
	this.payment_method_electronic_funds_transfer_radiobutton = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[5]/div/div[2]/input"));
	this.payment_method_money_order_certified_check_radiobutton = element(by.css("form.form-horizontal:nth-child(2) > div:nth-child(5) > div:nth-child(2) > div:nth-child(3) > input:nth-child(1)"));
	this.card_type_dropdown_option1 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[1]"));
	this.card_type_dropdown_option2 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[2]"));
	this.card_type_dropdown_option3 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[3]"));
	this.card_type_dropdown_option4 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[1]/div/select//option[4]"));
	this.pq_credit_card_number = element(by.name("ccNumber"));
	this.pq_name_on_card = element(by.name("cardHolder"));
	this.pq_expiration_date = element(by.name("cardExpDate"));
	this.pq_billing_address_checkbox = element(by.css("ng-form.ng-invalid-credit-card > div:nth-child(5) > div:nth-child(2) > input:nth-child(1)"));
	this.pq_payment_information_street_address1 = element(by.name("streetAddress"));
	this.pq_payment_information_street_address2 = element(by.name("streetAddress2"));
	this.pq_payment_information_city = element(by.css('div.col-sm-8 > input[name="city"]'));
	this.pq_payment_information_state_dropdown_option2 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/ng-form/div[9]/div[2]/select//option[2]"));
	this.pq_payment_information_zipcode = element(by.name("zip"));
	this.pq_payment_method_electronic_funds_transfer_radiobutton = element(by.name("ongoingPaymentMethod"));
	this.pq_payment_method_mail_a_bill_radiobutton = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[8]/div/div/div[2]/input"));
	this.pq_name_of_finacial_insitutuion = element(by.name("bank"));
	this.pq_account_holder_name = element(by.name("accountHolder"));
	this.pq_aba_routing_number = element(by.name("accountNum"));
	//pq_account_type_dropdown_option1 prompts user to choose option 2 or 3
	this.pq_account_type_dropdown_option2 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/div[3]/div[5]/div/select//option[2]"));
	this.pq_account_type_dropdown_option3 = element(by.xpath("//div[@id='Enrollment']/div/div[3]/div[2]/div/div/form/div[7]/div[3]/div[5]/div/select//option[3]"));
	this.pq_payment_frequency_save = element(by.css("submit-button.ph-btn:nth-child(9)"));

                    
	//Priority Quote create new group page.
 	this.pq_group_name = element(by.name("GroupName"));
 	this.pq_tax_id = element(by.name("taxId"));
 	this.pq_religous_organization_option1 = element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[1]"));
 	this.pq_religous_organization_option2 = element(by.xpath("//div[@class='col-sm-12']/form/div[3]/div[1]/select//option[2]"));
	this.pq_general_street_address = element(by.name("generalAddress"));
	this.pq_general_street_address2 = element(by.name("generalAddress2"));
 	this.pq_general_city = element(by.name("generalCity"));
 	this.pq_zip_code = element(by.name("zipcode"));
 	this.pq_effective_date_option1_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[1]"));
 	this.pq_effective_date_option2_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[2]"));
 	this.pq_effective_date_option3_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[3]"));
 	this.pq_effective_date_option4_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[4]"));
 	this.pq_effective_date_option5_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[5]"));
	this.pq_effective_date_option6_dropDown = element(by.xpath("//div[@class='col-sm-12']/form/div[10]/div/effective-date/select//option[6]"));
	this.pq_create_and_close_button = element(by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and close']"));
	this.pq_create_and_quote_button = element(by.xpath("//div[@class='col-sm-12']//submit-button[.='Create and quote]"));
	this.pq_cancel_button = element(by.css("button.btn.btn-link"));
	this.pq_add_agent_button = element(by.xpath("//div[@class='col-sm-12']//button[.='Agent']"));
	this.pq_search_agent_first_name = element(by.css("input.ng-valid.ng-dirty"));
	this.pq_search_agent_last_name = element(by.xpath("//div[@class='modal-content']/div/form/div[2]/div/input"));
	this.pq_search_button = element(by.xpath("//div[@class='modal-content']//button[.='Searching...']"));
	this.pq_close_popup_window_button = element(by.xpath("div.modal-border.clearfix > button.pull-right"));
	this.pq_search_again_button = element(by.id("searchAgain"));
};

module.exports = priority_quote_ids;	




Support.prototype.createIndividualQuotePriorityQuote = function(callback){

  	var formFieldsId = new FormFieldsId();
  	var pageLocations = new PageLocations();
  	text = browser.getPageSource();
  
  	browser.get(pageLocations.pq_individual_quote);
  	helper.wait(5);
	formFieldsId.pq_zipcode.sendKeys("49506");
    formFieldsId.pq_first_name.sendKeys("AutoTest FirstName");
    formFieldsId.pq_last_name.sendKeys("AutoTest LastName");
    formFieldsId.pq_date_of_birth.sendKeys("01/01/1971");
    formFieldsId.pq_gender_male_radiobutton.click();
    //Next line activates popup box
    //Female button does not always activate, calling twice seems to help
    formFieldsId.pq_gender_female_radiobutton.click();
    formFieldsId.pq_gender_female_radiobutton.click(); 
    formFieldsId.pq_tobacco_use_no_radiobutton.click();
    formFieldsId.pq_tobacco_use_no_radiobutton.click();
    formFieldsId.pq_add_dental_enroll_radiobutton.click();
    helper.wait(1);
    formFieldsId.pq_continue_button.click();
    helper.wait(40);
    formFieldsId.pq_individual_medical_plans.click();
    helper.wait(2);
    formFieldsId.pq_individual_medical_plan_option1.click();
    formFieldsId.pq_individual_dental_plans.click();
    helper.wait(2);
    formFieldsId.pq_individual_dental_plan_option1.click();
    formFieldsId.pq_individual_enroll_button.click();
    helper.wait(4);
    formFieldsId.pq_expand_all.click();
    helper.wait(2);
    formFieldsId.pq_eligibility_requirements_enrollees_eligible.click();
    formFieldsId.pq_dental_attestation_yes_radiobutton.click();
    //Next line activates popup box
    //formFieldsId.pq_eligibility_requirements_save_button.click();
    formFieldsId.pq_middle_initial.sendKeys("AutoTest Middle Initial");
    formFieldsId.pq_ssn.sendKeys("111223333");
    formFieldsId.pq_street_address1.sendKeys("AutoTest Street Address1");
    formFieldsId.pq_street_address2.sendKeys("AutoTest Street Address2");
    formFieldsId.pq_city.sendKeys("AutoTest City");
    formFieldsId.pq_phone.sendKeys("616");
    formFieldsId.pq_phone.sendKeys("2223333");
    formFieldsId.pq_email.sendKeys("autotest@email.com");
    //formFieldsId.pq_individual_save_member_information_button.click();
    formFieldsId.pq_payment_frequency_dropdown_option2.click();
    formFieldsId.payment_method_credit_card_radiobutton.click();
    formFieldsId.card_type_dropdown_option3.click();
    formFieldsId.pq_credit_card_number.sendKeys("5300212134354647");
    formFieldsId.pq_name_on_card.sendKeys("AutoTest CardName");
    formFieldsId.pq_expiration_date.sendKeys("07/17");
    //pq_billing_address_checkbox can not be found. 
    //formFieldsId.pq_billing_address_checkbox.click();
    formFieldsId.pq_payment_information_street_address1.sendKeys("AutoTest Street Address1");
    formFieldsId.pq_payment_information_street_address2.sendKeys("AutoTest Street Address2");
    formFieldsId.pq_payment_information_city.sendKeys("AutoTest City");
    formFieldsId.pq_payment_information_state_dropdown_option2.click();
    formFieldsId.pq_payment_information_zipcode.sendKeys("49506");
    formFieldsId.pq_payment_method_mail_a_bill_radiobutton.click();
    //formFieldsId.pq_payment_frequency_save.click();
    helper.wait(60);
    browser.driver.sleep(1).then(function(result) {
          callback(result);
            });
};
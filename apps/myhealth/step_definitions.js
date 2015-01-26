/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * step_definitions.js
 *  This will contain all of the page locations for the tests
 *
 *************************************************************************/


// Use the external Chai As Promised to deal with resolving promises in
// expectations.
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var support = require('./support/support');
chai.use(chaiAsPromised);

var expect = chai.expect;

// Chai expect().to.exist syntax makes default jshint unhappy.
// jshint expr:true

module.exports = function() {

/**********************************************************************************************************
   ___                  _      ___                        _   
  / __|___ _ _  ___ _ _(_)__  / __|_  _ _ __ _ __ ___ _ _| |_ 
 | (_ / -_| ' \/ -_| '_| / _| \__ | || | '_ | '_ / _ | '_|  _|
  \___\___|_||_\___|_| |_\__| |___/\_,_| .__| .__\___|_|  \__|
                                       |_|  |_|               
***********************************************************************************************************/
	
	// Given Functions
    this.Given(/^I am on page "([^"]*)"$/, function(link, next) {
        support.gotoPage(link, function(result) { 
        	next(); 
        });
    });

	// When Functions

    this.When(/^I select "([^"]*)"$/, function(link, next) {
        support.clickElement(link, function(result) { 
        	next(); 
        });
    });

    this.When(/^I enter in "([^"]*)" in form field "([^"]*)"$/, function(text, formField, next) {
        support.fillInField(text, formField, function(result) { 
        	next(); 
        });
    });

    this.When(/^I wait "([^"]*)" seconds$/, function(seconds, next) {
    	browser.driver.sleep(seconds * 1000).then( function() {
    		next();		
        });
    });


	// Then Functions

    this.Then(/^I should see text "([^"]*)" on page$/, function(textToFind, next) {
        browser.ignoreSynchronization = true;
        text = browser.getPageSource();
        expect(text).to.eventually.contain(textToFind).and.notify(next);
    });

    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });
};
/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * page_locations.js
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
        console.log("\n Navigating to page:" + link);
        support.gotoPage(link, function(result) { 
        	next(); 
        });
    });

	// When Functions

    this.When(/^I select "([^"]*)"$/, function(link, next) {
        console.log("\n Selecting element:" + link);

        browser.ignoreSynchronization = true;
        
        support.clickElement(link, function(result) { 
        	next(); 
        });
    });

    this.When(/^I enter in "([^"]*)" in form field "([^"]*)"$/, function(text, formField, next) {
        console.log("\n Selecting element:" + formField);


        browser.ignoreSynchronization = true;
        support.fillInField(text, formField, function(result) { 
        	next(); 
        });
    });

    this.When(/^I wait "([^"]*)" seconds$/, function(seconds, next) {
        console.log("\n Wait for " + seconds + " seconds");

    	browser.driver.sleep(seconds * 1000).then( function() {
    		next();		
        });
    });


	// Then Functions

    this.Then(/^I should see text "([^"]*)" on page$/, function(textToFind, next) {
        console.log('Looking for text "' + textToFind + '"');

        browser.ignoreSynchronization = true;
        text = browser.getPageSource();
        expect(text).to.eventually.contain(textToFind).and.notify(next);
    });

    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });


/**********************************************************************************************************
  ___     _         _ _           ___           _       
 | _ \_ _(_)___ _ _(_| |_ _  _   / _ \ _  _ ___| |_ ___ 
 |  _| '_| / _ | '_| |  _| || | | (_) | || / _ |  _/ -_)
 |_| |_| |_\___|_| |_|\__|\_, |  \__\_\\_,_\___/\__\___|
                          |__/                          
***********************************************************************************************************/

	// Given Functions

	this.Given(/^I log onto priority quote with username "([^"]*)" and password "([^"]*)"$/, function(user, password, next) {
        console.log("Log into Priority Quote");

        support.logIntoPriorityQuote(user, password, function(result) {
            next();
        });
    });

	this.Given(/^I am logged out of priority quote$/, function(next) {
        console.log("Logging out of priority quote");

        support.logoutPriorityQuote(function(result) {
            next();
        });
    });

	// When Functions
    
    this.When(/^I create a small group in Priority Quote$/, function(next) {
  		browser.ignoreSynchronization = true;
  		console.log("\n Create Small Group");
      	support.createSmallGroupPriorityQuote(function(result){
      		next();
    	});
  	});
  	
  	this.When(/^I create an individual quote in Priority Quote$/, function(next) {
  		browser.ignoreSynchronization = true;
  		console.log("\nCreate individual quote");
      	support.createIndividualQuotePriorityQuote(function(result){
      		next();
    	});
  	});
  	  	
  	this.When(/^I click on small group$/, function(next) {
        browser.ignoreSynchronization = true;
        console.log("\nClick on small group\n");
        support.clickSmallGroup(function(result) { 
        	next(); 
        });
    });

	this.When(/^I am logged out of priority quote$/, function(next) {
        console.log("Logging out of priority quote");

        support.logoutPriorityQuote(function(result) {
            next();
        });
    });
  
	// Then Functions

  	this.Then(/^I can search for the small group created$/, function(next) {
  		console.log('\nSearch for small group "Autotest Small Group ' + randomNine + '"');
        browser.ignoreSynchronization = true;
        support.searchForSmallGroup(function(result) { 
        	next(); 
        });
    });
  
  
    /*this.Given(/^I run Cucumber with Protractor$/, function(next) {
        next();
    });
    this.Given(/^I go on(?: the website)? "([^"]*)"$/, function(url, next) {
        browser.get(url);
        next();
    });
    this.Then(/^it should still do normal tests$/, function(next) {
        expect(true).to.equal(true);
        next();
    });
    this.Then(/^it should expose the correct global variables$/, function(next) {
        expect(protractor).to.exist;
        expect(browser).to.exist;
        expect(by).to.exist;
        expect(element).to.exist;
        expect($).to.exist;
        next();
    });
    this.Then(/the title should equal "([^"]*)"$/, function(text, next) {
        expect(browser.getTitle()).to.eventually.equal(text).and.notify(next);
    });*/

};
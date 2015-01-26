/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * support.js
 *  This will contain all of the lower level protractor and selinum code
 *  that will drive the automated tests
 *
 *************************************************************************/

var FormFieldsId = require('../page_objects/FormFieldsId.js');
var PageLocations = require('../page_objects/page_locations.js');
var helper = require('./helper');

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;



var Support = function(){
};

/**********************************************************************************************************
   ___                  _      ___                        _   
  / __|___ _ _  ___ _ _(_)__  / __|_  _ _ __ _ __ ___ _ _| |_ 
 | (_ / -_| ' \/ -_| '_| / _| \__ | || | '_ | '_ / _ | '_|  _|
  \___\___|_||_\___|_| |_\__| |___/\_,_| .__| .__\___|_|  \__|
                                       |_|  |_|               
***********************************************************************************************************/

Support.prototype.gotoPage = function(link, callback){
  
  var pageLocations = new PageLocations();

  browser.get(pageLocations[link]).then(function(result) {
    callback(result);
    });
};


Support.prototype.clickElement = function(link, callback){
  
  var formFieldsId = new FormFieldsId();

  console.log(link);
  formFieldsId[link].click().then(function() {
      browser.driver.sleep(2000).then(function(result) {
            callback(result);
      });
    });

};

Support.prototype.fillInField = function(text, formFieldId, callback){
  
  var formFieldsId = new FormFieldsId();

  formFieldsId[formFieldId].sendKeys(text).then(function(result) {
    callback(result);
    });
};


module.exports = new Support();
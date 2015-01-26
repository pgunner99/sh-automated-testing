/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * login_support.js
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



var Login_Support = function(){
};

/**********************************************************************************************************
  ___     _         _ _           ___           _       
 | _ \_ _(_)___ _ _(_| |_ _  _   / _ \ _  _ ___| |_ ___ 
 |  _| '_| / _ | '_| |  _| || | | (_) | || / _ |  _/ -_)
 |_| |_| |_\___|_| |_|\__|\_, |  \__\_\\_,_\___/\__\___|
                          |__/                          
***********************************************************************************************************/


Login_Support.prototype.logIntoPriorityQuote = function(user, password, callback){

    var formFieldsId = new FormFieldsId();
    var pageLocations = new PageLocations();
    
    try 
    {
        helper.gotoUrl(pageLocations.pq_login);
        helper.clearThenFillInText(formFieldsId.pq_username, user);
        helper.clearThenFillInText(formFieldsId.pq_password, password);
        helper.wait(1);
        helper.click(formFieldsId.pq_login_button);
        helper.wait(10);
    }
    catch(err) {
        console.log("Log into priority quote error:" + err);
        callback(false);
    }
    callback(true);
  };

Login_Support.prototype.logoutPriorityQuote = function(callback) {
    var formFieldsId = new FormFieldsId();

    console.log("click on the user name button");
    formFieldsId.pq_hellousername_button.click().then(function() {
      helper.wait(1);   
      formFieldsId.pq_logout_button.click().then(function() {
        helper.wait(2);
        callback(true);  
      }, function(err) { console.log(err); callback(false); }); 
    }, function(err) { console.log(err); callback(false); } );
  };

};


module.exports = new Login_Support();
/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * helper.js
 *  This will contain all of the lower level protractor and selinum code
 *  that will drive the automated tests
 *
 *************************************************************************/

var Helper = function(){
};

Helper.prototype.wait = function(seconds) {
    browser.driver.sleep(seconds*1000).then(function() {
        });      
};

Helper.prototype.gotoUrl = function(url) {
	browser.get(url).then(function(result) {
	}, function(err) {
		throw err;
	});
};	

Helper.prototype.click = function(elementToClick) {
	elementToClick.click().then(function(result) {
	}, function(err) {
		throw err;
	});
};

Helper.prototype.clearThenFillInText = function(elementToSendText, text) {
	elementToSendText.clear().then(function(result) {
	}, function(err) {
		throw err;
	});

	elementToSendText.sendKeys(text).then(function(result) {
	}, function(err2) {
		throw err2;
	});
};



module.exports = new Helper();
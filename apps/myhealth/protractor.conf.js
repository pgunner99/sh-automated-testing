/*************************************************************************
 * Copyright @2015 Spectrum health
 *
 *************************************************************************
 *
 * protractor.conf.js
 *  This will contain all of the page locations for the tests
 *
 *************************************************************************/
var env = require('./environment.js');


// A small suite to make sure the cucumber framework works.
exports.config = {
  seleniumAddress: '',
  allScriptsTimeout: 11000,
  framework: 'cucumber',
  directConnect: true,

  // Spec patterns are relative to this directory.
  specs: [
    'features/*.feature'
  ],

  capabilities: env.capabilities,

  baseUrl: env.baseUrl,

    // CSS Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>.
  rootElement: 'body',

  // The timeout in milliseconds for each script run on the browser. This should
  // be longer than the maximum time your application needs to stabilize between
  // tasks.
  allScriptsTimeout: 11000,

  // How long to wait for a page to load.
  getPageTimeout: 10000,

  // If set, protractor will save the test output in json format at this path.
  // The path is relative to the location of this config.
  resultJsonOutputFile: "test.json",

  // If true, protractor will restart the browser between each test. 
  // CAUTION: This will cause your tests to slow down drastically.
  restartBrowserBetweenTests: false,

// The params object will be passed directly to the Protractor instance,
  // and can be accessed from your test as browser.params. It is an arbitrary
  // object and can contain anything you may need in your test.
  // This can be changed via the command line as:
  //   --params.login.user 'Joe'
  params: {
    login: {
      user: 'Jane',
      password: '1234'
    }
  },

  cucumberOpts: {
	    require: 'stepDefinitions.js',
	    tags: '@dev',
	      format: 'progress',
	      report: '../public/report.html'
  }

};
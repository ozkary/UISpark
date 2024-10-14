/**
 * UISpark - Test Setup
 * 
 * The common setup file (test.js) initializes jsdom and jQuery, setting up a simulated browser environment 
 * with global window and document objects. This ensures consistency across all your test files.
 * 
 * @component Test Setup
 * @package   UISpark
 * @version   1.0.0
 * @file      index.js
 * @license   APACHE
 * @requires  jQuery
 * @author    Oscar Garcia - ozkary
 * @created  2024-10-14
 * @updated  2024-10-14
 */

const { JSDOM } = require('jsdom');
const { window } = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);

// Setup global window and document for jQuery
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

// Import jQuery
global.$ = require('jquery');

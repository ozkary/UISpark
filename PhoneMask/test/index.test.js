/**
 * UISpark - PhoneMask Component Tests
 * 
 * Unit tests for the PhoneMask component.
 * Ensures phone number formatting functionality works as expected.
 * 
 * @component PhoneMask
 * @package   UISpark
 * @version   1.0.0
 * @file      index.test.js
 * @license   APACHE
 * @requires  Mocha, Chai, JSDOM
 * @author    Oscar Garcia - ozkary
 * @created  2024-10-01
 * @updated  2024-10-01
 */

const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const PhoneMask = require('../src/index');

// Create a new jsdom instance
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const { window } = dom;

// Setup global window and document for jQuery
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

const input = window.document.createElement('input');
input.type = 'tel';
input.id = 'phone';
window.document.body.appendChild(input);


// Test cases
describe('PhoneMask', () => {
  it('should format phone numbers correctly when typing', async () => {
  
    input.value = '';
    PhoneMask.attach('#phone');
    
    for(let i = 0; i < 10; i++) {
        input.value += (i).toString();       
        input.dispatchEvent(new window.Event('input'));
        // await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    expect(input.value).to.equal('012-345-6789');
  });

  it('should format phone numbers correctly when pasting', async () => {
   
    input.value = '1234567890';
    PhoneMask.attach('#phone');
    input.dispatchEvent(new window.Event('input'));

    expect(input.value).to.equal('123-456-7890');
  });
});
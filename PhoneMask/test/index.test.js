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

describe('PhoneMask', () => {
  it('should format phone numbers correctly', () => {
    const dom = new JSDOM(`<input type="text" id="phone" />`);
    const input = dom.window.document.getElementById('phone');
    input.value = '1234567890';

    PhoneMask.attach('#phone');
    input.dispatchEvent(new dom.window.Event('input'));

    expect(input.value).to.equal('123-456-7890');
  });
});

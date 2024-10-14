/**
 * UISpark - SsnMask Utility Tests
 * 
 * Unit tests for the SsnMask utility.
 * Ensures SSN number formatting functionality works as expected.
 * 
 * @component SsnMask
 * @package   UISpark
 * @version   1.0.0
 * @file      index.test.js
 * @license   APACHE
 * @requires  Mocha, Chai, JSDOM
 * @author    Oscar Garcia - ozkary
 * @created  2024-10-14
 * @updated  2024-10-14
 */

require('../../../setup/test');
const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const SsnMask = require('../src/index');

const input = window.document.createElement('input');
input.type = 'text';
input.id = 'ssn';
window.document.body.appendChild(input);


// Test cases
describe('SsnMask', () => {
  it('should format social security numbers correctly when typing', async () => {
  
    input.value = '';
    SsnMask.attach('#ssn');
    
    for(let i = 0; i < 9; i++) {
        input.value += (i).toString();       
        input.dispatchEvent(new window.Event('input'));        
      
    }
    
    expect(input.value).to.equal('012-34-5678');
  });

  it('should format social security numbers correctly when pasting', async () => {
   
    input.value = '123456789';
    SsnMask.attach('#ssn');
    input.dispatchEvent(new window.Event('input'));

    expect(input.value).to.equal('123-45-6789');
  });
});
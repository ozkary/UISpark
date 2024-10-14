/**
 * UISpark - SsnMask utility
 * 
 * Provides USA social security number (SSN) formatting functionality.
 * Formats input fields to display SSN numbers in a specified format.
 * 
 * @component SsnMask
 * @package   UISpark
 * @version   1.0.0
 * @file      index.js
 * @license   APACHE
 * @requires  jQuery
 * @author    Oscar Garcia - ozkary
 * @created  2024-10-14
 * @updated  2024-10-14
 */
const $ = require('jquery');
// src/index.js

function formatSsn(input) {
  let value = input.value.replace(/[^\d-]/g, '');
  let formattedValue = value;

  // i.e. 111-22-3333
  const del = '-';
  const pos = value.length;
  if ([3, 6].includes(pos)) {
    // handles user typing
    formattedValue += del;
    input.value = formattedValue;
  } else if (pos >= 9 && formattedValue.indexOf(del) < 0) {
    // full number pasted
    formattedValue = value.substring(0, 3) + del + value.substring(3, 5) + del + value.substring(5, 9);
    input.value = formattedValue;  
  }
  
}

module.exports = {
  attach: function(selector) {    
    $(selector).on('input', function() {
      formatSsn(this);
    });
  }
};

/**
 * UISpark - PhoneMask Component
 * 
 * Provides phone number formatting functionality.
 * Formats input fields to display phone numbers in a specified format.
 * 
 * @component PhoneMask
 * @package   UISpark
 * @version   1.0.0
 * @file      index.js
 * @license   APACHE
 * @requires  jQuery
 * @author    Oscar Garcia - ozkary
 * @created  2024-10-01
 * @updated  2024-10-01
 */

// src/index.js

function formatPhone(input) {
  let value = input.value.replace(/[^\d-]/g, '');
  let formattedValue = value;

  // i.e. 111-222-3333
  const del = '-';
  const pos = value.length;
  if ([3, 7].includes(pos)) {
    // handles user typing
    formattedValue += del;
    input.value = formattedValue;
  } else if (pos >= 10 && formattedValue.indexOf(del) < 0) {
    // full phone number pasted
    formattedValue = value.substring(0, 3) + del + value.substring(3, 6) + del + value.substring(6, 10);
    input.value = formattedValue;  
  }
  
}

module.exports = {
  attach: function(selector) {
    const $ = require('jquery');
    $(selector).on('input', function() {
      formatPhone(this);
    });
  }
};

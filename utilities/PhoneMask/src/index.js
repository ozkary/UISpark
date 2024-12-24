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
  // Get the raw value and remove any non-digit characters
  let value = input.value.replace(/[^\d]/g, "");
  let formattedValue = value;

  // I might be wrong about the international phone number style
  // However, You can add and update the format as following
  const formats = {
    US: {
      pattern: /^(\d{3})(\d{3})(\d{4})$/,
      format: "$1-$2-$3", // e.g., 111-222-3333
      partial: (v) => {
        if (v.length <= 3) return v;
        if (v.length <= 6) return v.slice(0, 3) + "-" + v.slice(3);
        return v.slice(0, 3) + "-" + v.slice(3, 6) + "-" + v.slice(6);
      },
    },
    UK: {
      pattern: /^(\d{4})(\d{3})(\d{3})$/,
      format: "$1 $2 $3", // e.g., 020 7123 4567
      partial: (v) => {
        if (v.length <= 4) return v;
        if (v.length <= 7) return v.slice(0, 4) + " " + v.slice(4);
        return v.slice(0, 4) + " " + v.slice(4, 7) + " " + v.slice(7);
      },
    },
    FR: {
      pattern: /^(\d{1})(\d{2})(\d{2})(\d{2})(\d{2})$/,
      format: "$1 $2 $3 $4 $5", // e.g., 1 23 45 67 89
      partial: (v) => {
        if (v.length <= 2) return v;
        if (v.length <= 4) return v.slice(0, 2) + " " + v.slice(2);
        if (v.length <= 6)
          return v.slice(0, 2) + " " + v.slice(2, 4) + " " + v.slice(4);
        if (v.length <= 8)
          return (
            v.slice(0, 2) +
            " " +
            v.slice(2, 4) +
            " " +
            v.slice(4, 6) +
            " " +
            v.slice(6)
          );
        return (
          v.slice(0, 2) +
          " " +
          v.slice(2, 4) +
          " " +
          v.slice(4, 6) +
          " " +
          v.slice(6, 8) +
          " " +
          v.slice(8)
        );
      },
    },
    KR: {
      pattern: /^(\d{3})(\d{4})(\d{4})$/,
      format: "$1-$2-$3", // e.g., 010-1234-5678
      partial: (v) => {
        if (v.length <= 4) return v;
        if (v.length <= 7) return v.slice(0, 4) + "-" + v.slice(4);
        return v.slice(0, 4) + "-" + v.slice(4, 7) + "-" + v.slice(7);
      },
    },
  };

  // Get the selected country code from the dropdown
  const countrySelector = document.getElementById("country-code");
  let country = countrySelector.value; // Get the selected country code

  // Check if the country has a defined format
  if (formats[country]) {
    // As the user is still typing, apply partial formatting
    formattedValue = formats[country].partial(value);

    // If the number is complete and matches the country's pattern, format it fully
    if (formats[country].pattern.test(value)) {
      formattedValue = value.replace(
        formats[country].pattern,
        formats[country].format
      );
    }
  }

  // Set the formatted value back to the input
  input.value = formattedValue;
}

module.exports = {
  attach: function (selector) {
    const $ = require("jquery");
    $(selector).on("input", function () {
      formatPhone(this);
    });

    // Attach the country code change event
    $("#country-code").on("change", function () {
      formatPhone(document.getElementById("input"));
    });
  },
};

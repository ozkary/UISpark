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

const { expect } = require("chai");
const { JSDOM } = require("jsdom");
const PhoneMask = require("../src/index");

// Create a new jsdom instance
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`);
const { window } = dom;

// Setup global window and document for jQuery
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
};

const input = window.document.createElement("input");

input.type = "tel";
input.id = "phone";
window.document.body.appendChild(input);

const countrySelector = window.document.createElement("select");
countrySelector.id = "country-code";
countrySelector.innerHTML = `
      <option value="US">US</option>
      <option value="UK">UK</option>
      <option value="FR">FR</option>
      <option value="KR">KR</option>
    `;

window.document.body.appendChild(countrySelector);

// Test cases
describe("PhoneMask", () => {
  it("should format phone numbers correctly when typing with selected contury code", async () => {
    // Test formatting for US
    countrySelector.value = "US";

    input.value = "";
    PhoneMask.attach("#phone");

    for (let i = 0; i < 10; i++) {
      input.value += i.toString();
      input.dispatchEvent(new window.Event("input"));
      // await new Promise(resolve => setTimeout(resolve, 100))
    }

    expect(input.value).to.equal("012-345-6789");
  });

  it("should update format correctly with country code selected", async () => {
    // Test formatting for US
    countrySelector.value = "US";
    input.value = "1234567890"; // Set a US phone number
    input.dispatchEvent(new window.Event("input"));

    expect(input.value).to.equal("123-456-7890"); // Check US formatted value

    // Test formatting for UK
    countrySelector.value = "UK";
    input.value = "123456789"; // Set a UK phone number
    input.dispatchEvent(new window.Event("input"));

    expect(input.value).to.equal("1234 567 89"); // Check UK formatted value

    // Test formatting for FR
    countrySelector.value = "FR";
    input.value = "123456789"; // Set a FR phone number
    input.dispatchEvent(new window.Event("input"));

    expect(input.value).to.equal("1 23 45 67 89"); // Check FR formatted value

    // Test formatting for KR
    countrySelector.value = "KR";
    input.value = "010-1234-6789"; // Set a KR phone number
    input.dispatchEvent(new window.Event("input"));

    expect(input.value).to.equal("010-1234-6789"); // Check KR formatted value
  });
});

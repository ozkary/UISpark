# Contributing to UISpark

Thank you for considering contributing to UISpark! We appreciate your help in making this project better. Follow these steps to add new components and maintain consistency.

## Steps to Add a New Component

### 1. Create the Component Folder Structure

Each new component should be added in its own directory under the root folder. The structure should be as follows:

```bash
component-name/ ├── src/ │ └── index.js ├── test/ │ └── index.test.js └── README.md
```

### 2. Add the Component Logic
Add the main logic for your component in the `src/index.js` file. Include standard comment headers:

```javascript
/**
 * UISpark - [ComponentName] Component
 * 
 * Provides [describe component functionality].
 * 
 * @component [ComponentName]
 * @package   UISpark
 * @version   1.0.0
 * @file      index.js
 * @license   MIT
 * @requires  [List any dependencies]
 * @created   YYYY-MM-DD
 * @updated   YYYY-MM-DD
 * @author    Your Name
 */

// Your component logic here
module.exports = {
  // Export functions or classes
};

```
### 3. Add Tests for the Component

Add test cases for your component in the test/index.test.js file. Include standard comment headers:

```javascript
/**
 * UISpark - [ComponentName] Component Tests
 * 
 * Unit tests for the [ComponentName] component.
 * 
 * @component [ComponentName]
 * @package   UISpark
 * @version   1.0.0
 * @file      index.test.js
 * @license   MIT
 * @requires  Mocha, Chai, JSDOM
 * @created   YYYY-MM-DD
 * @updated   YYYY-MM-DD
 * @author    Your Name
 */

// Your test cases here
const { expect } = require('chai');
const { JSDOM } = require('jsdom');
const ComponentName = require('../src/index');

// Example test
describe('[ComponentName]', () => {
  it('should [test description]', () => {
    // Test logic here
  });
});


```

### 4. Update the Root Index File

Update the index.js file in the root folder to export the new component:

```javascript
/**
 * UISpark
 * 
 * Main entry point for UISpark library.
 * Exports all components and utilities.
 * 
 * @package  UISpark
 * @version  1.0.0
 * @file     index.js
 * @license  MIT
 * @author   Your Name
 * @created  YYYY-MM-DD
 * @updated  YYYY-MM-DD
 */

module.exports = {
  PhoneMask: require('./PhoneMask/src/index'),
  ComponentName: require('./ComponentName/src/index') // Add your new component here
};

```

### 5. Update Documentation

Update the main README.md file to include your new component:

- **PhoneMask**: Effortlessly format phone numbers with ease.
- **[ComponentName]**: [Describe component functionality].

- Usage

[ComponentName]
To use the [ComponentName] component, follow these steps:

```javascript
import { ComponentName } from 'uispark';

// Example usage

```

- Example

Add relevant example.
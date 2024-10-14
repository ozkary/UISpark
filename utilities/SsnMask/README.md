# SsnMask

Effortlessly format social security numbers with ease.

## Installation

- Install via npm:

```sh

npm install @uispark/ssnmask

```

## Usage

To format social security numbers, simply attach the SsnMask to your input fields.

```javascript

import { PhoneMask } from '@uispark/ssnmask';

document.addEventListener('DOMContentLoaded', () => {
  PhoneMask.attach("#ssn");
});

```

**Example**

Add an input field in your HTML

```html

<input type="text" id="ssn" name="snn" maxlength="11" pattern="\d{3}-\d{2}-\d{4}" placeholder="123-45-6789"/>

```

And you're all set! UISpark will handle the formatting for you.
# PhoneMask

Effortlessly format phone numbers with ease.

## Installation

- Install via npm:

```sh

npm install @uispark/phonemask

```

## Usage

To format phone numbers, simply attach the PhoneMask to your input fields.

```javascript

import { PhoneMask } from '@uispark/phonemask';

document.addEventListener('DOMContentLoaded', () => {
  PhoneMask.attach("#phone");
});

```

**Example**

Add an input field in your HTML

```html

<input type="tel" id="phone" name="phone" placeholder="###-###-####" />

```

And you're all set! UISpark will handle the formatting for you.
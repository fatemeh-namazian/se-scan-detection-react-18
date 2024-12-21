# Project Status

This project is actively maintained and has been updated to support **React 18**. If you are using an older version of React (such as React 16), consider upgrading to React 18 for full compatibility and new features.


# useScanDetection

![npm](https://img.shields.io/npm/v/use-scan-detection-react-18)
![downloads](https://img.shields.io/npm/dm/use-scan-detection-react-18)

A React hook for detecting barcode scanners in the DOM.

## Installation

```bash
npm i use-scan-detection-react-18
```

## Usage

To use the hook, simply call `useScanDetection` with your configuration:

```js
useScanDetection({
    onComplete: (code) => { console.log(code) }
});
```

## Parameters

You can configure the behavior of the hook with the following parameters:

|   Parameter       |   Description                                                                                                                                                 |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `averageWaitTime` | Average time between characters in milliseconds. Used to determine if input is from keyboard or a scanner. Defaults to `50`.                                   |
| `timeToEvaluate`  | Time to evaluate the buffer after each character is scanned.                                                                                                  |
| `startCharacter`  | **Optional**. Character that the barcode scanner prefixes input with. Buffer starts if this character is read first.                                           |
| `endCharacter`    | **Optional**. Character that the barcode scanner suffixes input with. Buffer is evaluated early if this character is read. Defaults to line return (13) and escape (27). |
| `onComplete`      | Function called when a complete barcode is scanned. Receives the complete barcode string as a parameter.                                                      |
| `onError`         | **Optional**. Function called when an incomplete barcode is scanned. Receives the incomplete barcode string as a parameter.                                     |
| `minLength`       | Minimum number of characters required for a barcode to be successfully read. Defaults to `1`. Should be greater than `0`.                                       |
| `ignoreIfFocusOn` | **Optional**. DOM element that, if focused, prevents barcode codes from being read.                                                                             |
| `stopPropagation` | Whether to call `stopPropagation` on each key event. Defaults to `false`.                                                                                     |
| `preventDefault`  | Whether to call `preventDefault` on each key event. Defaults to `false`.                                                                                      |
| `container`       | DOM element to listen for `keydown` events in. Defaults to `document`.                                                                                        |

## Return

This hook does not return anything.

## Example

Here's an example of how you can use the `useScanDetection` hook in a React component:

```js
import React, { useState } from 'react';
import useScanDetection from 'use-scan-detection-react-18';

const Input = () => {
    const [value, setValue] = useState("");

    useScanDetection({
        onComplete: setValue,
        minLength: 13 // EAN13 barcode
    });

    return (
        <input 
            value={value} 
            type="text"
        />
    );
};

export default Input;
```

## License

MIT License.

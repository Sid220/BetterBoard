@2.1.0
* **Added:** Input based `data-BetterBoard-placement` data attribute option has been added. This option sets the placement of the keyboard on `top` or `bottom` for each input/textarea element. The default value is `bottom`.

  ```html
  <input class="js-BetterBoard" data-BetterBoard-type="keyboard" data-BetterBoard-placement="top" placeholder="Your Name" />
  ```
* **Added:** TypeScript declaration has been added.
* **Changed:** Refactor.

-----

@2.0.0
* **Removed:** The `BetterBoard.Merge()` method has been removed. (This method already has been deprecated in v1.4.0)

* **Changed:** `BetterBoard.Init()` function name has been changed to `BetterBoard.init()`.

* **Changed:** `BetterBoard.Run()` function name has been changed to `BetterBoard.run()`.

* **Changed:** Auto-generated `BetterBoard-aio.js` file has been moved from `src/all-in-one` folder to `build` folder.

* **Changed:** The `specialCharactersObject` option has been changed to `keysSpecialCharsArrayOfStrings`. An Array of Strings can be set to override the built-in special characters. e.g. => `["#", "$", "%", "+", "-", "*"]`

* **Fixed:** Custom key with multiple characters: ([#31](https://github.com/furcan/BetterBoard/issues/31))

* **Added:** The `keysNumpadArrayOfNumbers` option has been added: An Array of Numbers can be set to override the built-in numpad keys. (From 0 to 9, in any order.) e.g. => `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]` - ([#30](https://github.com/furcan/BetterBoard/issues/30))


-----
-----
-----

@1.4.0
* **Fixed:** The dispatcher issue on the input change event has been fixed: ([#11](https://github.com/furcan/BetterBoard/issues/11))
* **Fixed:** The current text selection issue has been fixed: ([#19](https://github.com/furcan/BetterBoard/issues/19))
* **Added:** The `max` and `maxlength` attribute controls have been added: ([#17](https://github.com/furcan/BetterBoard/issues/17))
* **Added:** The `options` parameter has been added to the `Run()` function to set the initialize options. => `BetterBoard.Run(selector, options);`
* **Changed:** The `selector` parameter has been changed to `selectorOrElement` that also can use an element instead of the query selector. => `BetterBoard.Run(selectorOrElement);`
* **Changed:** The `Merge()` function has been deprecated.
* **Changed:** Code Review.

-----

@1.3.3
* **Fixed:** `AllowMobileKeyboard` option was not working properly on iOS devices. ([#7](https://github.com/furcan/BetterBoard/issues/7))

-----

@1.3.2
* **Added:** Internet Explorer 11 compatibility. ([#3](https://github.com/furcan/BetterBoard/issues/3))
* **Changed:** Code Review.

-----

@1.3.1
* **Fixed:** Fixes on checking the "window.location.protocol". ([#4](https://github.com/furcan/BetterBoard/issues/4))
* **Added:** IE polyfill for the CustomEvent constructor. ([#3](https://github.com/furcan/BetterBoard/issues/3))
* **Changed:** Code Review.

-----

@1.3.0
* **Changed:** `BetterBoard.css`, and `BetterBoard.js` files have been moved from `dist` folder to `src` folder.
* **Changed:** `BetterBoard-aio.js` file has been moved from `dist` folder to `src/all-in-one` folder.
* **Added:** `autoScroll` option has been added. Scrolling the document to the top of the input/textarea element can be manageable with this option. The default value is `true` as before.
* **Fixed:** Fixes for the input element's `selectionStart` method to prevent issues if the input element type is number. ([#1](https://github.com/furcan/BetterBoard/issues/1))
* **Changed:** Code Review.

-----

@1.2.1
* **Fixed:** Document Object Model definition fixes.

-----

@1.2.0
* **Added:** Universal Module Definition.
* Code Review

-----

@1.1.1
* Code Review

-----

@1.1.0
* **Added:** "allowMobileKeyboard" option is added. Default value is "false" and prevents mobile keyboard.

* Code Review

-----

@1.0.0
* BetterBoard is ready to use.

-----

@1.0.0-beta.02
* BetterBoard. First Release.

-----

@1.0.0-beta.01
* BetterBoard. Coming Soon.

-----

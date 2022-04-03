/*!
* BetterBoard - Virtual Keyboard ('https://github.com/Sid220/BetterBoard')
* Version: 1.0.0-beta.01
* Author: The Fake Slim Shady ('https://github.com/Sid220')
* Copyright 2022 BetterBoard - Virtual Keyboard, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

/**
  * BetterBoard is a pure JavaScript library for using virtual keyboards.
  * @namespace BetterBoard
  * @memberof Global
  */
declare namespace BetterBoard {

  /**
   * @interface IBetterBoardOptions
   * @memberof BetterBoard
   */
  export interface IBetterBoardOptions {

    /**
     * @property {Array<Object>} - Optional, An Array of Objects has to be defined for the custom keys.
     * @defaultValue `[ { "0": "Q", "1": "W", "2": "E", "3": "R", "4": "T", "5": "Y", "6": "U", "7": "I", "8": "O", "9": "P" }, { "0": "A", "1": "S", "2": "D", "3": "F", "4": "G", "5": "H", "6": "J", "7": "K", "8": "L" }, { "0": "Z", "1": "X", "2": "C", "3": "V", "4": "B", "5": "N", "6": "M" } ]`
     *
     * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
     *
     * Hint: Each object creates a row element (HTML) on the keyboard.
     */
    keysArrayOfObjects?: { [index: string]: string }[];

    /**
    * @property {string} - Required, The default type of keyboard to be shown (can be overridden with data-betterboard-type).
    * @defaultValue `all`
    */
    keyboardType: 'all' | 'keyboard' | 'numpad';

    /**
    * @property {string} - Optional, The position of the keyboard (can be overridden with data-betterboard-placement).
    * @defaultValue `all`
    */
    keyboardPlacement?: 'top' | 'bottom';

    /**
     * @property {string} - Optional
     * @defaultValue `null`
     *
     * The path of the "BetterBoard-keys-${langugage}.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to get the keys from JSON file.)
     *
     * e.g. '/Content/Plugins/BetterBoard/dist/BetterBoard-keys-english.json'
     */
    keysJsonUrl?: string;

    /**
     * @property {boolean} - Optional, Whether or not to show the special character button, data-betterboard-specialcharacters can override. Shown when `true`.
     * @defaultValue `true`
     *
     */
    specialCharButton?: boolean;

    /**
    * @property {boolean} - Optional, Whether or not to show the close keyboard button, Shown when `true`.
    * @defaultValue `true`
    *
    */
    closeKeyboardButton?: boolean;

    /**
     * @property {Array<string>} - Optional, An Array of Strings can be set to override the built-in special characters.
     * @defaultValue `null`
     *
     * e.g. ["#", "€", "%", "+", "-", "*"]
     */
    keysSpecialCharsArrayOfStrings?: string[];

    /**
     * @property {Array<number>} - Optional, An Array of Numbers can be set to override the built-in numpad keys. (From 0 to 9, in any order.)
     * @defaultValue `null`
     *
     * e.g. [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
     */
    keysNumpadArrayOfNumbers?: number[];

    /**
     * @property {string} - Optional, Language Code `(ISO 639-1)` for custom keys (for language support).
     * @defaultValue `en`
     *
     * e.g. `de`, `en`, `fr`, `hu`, `tr`, etc...
     */
    language?: string;

    /**
     * @property {string} - Optional, The theme of keyboard.
     * @defaultValue `light`
     */
    theme?: 'light' | 'dark' | 'flat' | 'material' | 'oldschool';

    /**
     * @property {boolean} - Optional, Uppercase or lowercase to start. Uppercased when `true`.
     * @defaultValue `false`
     */
    capsLockActive?: boolean;

    /**
     * @property {boolean} - Optional, Allow or prevent real/physical keyboard usage. Prevented when `false`.
     * @defaultValue `true`
     *
     * In addition, the `allowMobileKeyboard` option must be `true` as well, if the real/physical keyboard has wanted to be used.
     */
    allowRealKeyboard?: boolean;

    /**
     * @property {boolean} - Optional, Allow or prevent mobile keyboard usage. Prevented when `false`.
     * @defaultValue `true`
     */
    allowMobileKeyboard?: boolean;

    /**
     * @property {boolean} - Optional, CSS animations for opening or closing the keyboard.
     * @defaultValue `true`
     */
    cssAnimations?: boolean;

    /**
     * @property {number} - Optional, CSS animations duration as millisecond.
     * @defaultValue `360`
     */
    cssAnimationsDuration?: number;

    /**
     * @property {string} - Optional, CSS animations style for opening or closing the keyboard.
     * @defaultValue `slide`
     */
    cssAnimationsStyle?: 'slide' | 'fade';

    /**
     * @property {boolean} - Optional, Enable or Disable Spacebar functionality on the keyboard. The Spacebar will be passive when `false`.
     * @defaultValue `true`
     */
    keysAllowSpacebar?: boolean;

    /**
     * @property {string} - Optional, Text of the space key (Spacebar). Without text => `" "`
     * @defaultValue `Space`
     */
    keysSpacebarText?: string;

    /**
     * @property {string} - Optional, Font family of the keys.
     * @defaultValue `sans-serif`
     */
    keysFontFamily?: string;

    /**
     * @property {string} - Optional, Font size of the keys.
     * @defaultValue `22px`
     */
    keysFontSize?: string;

    /**
     * @property {string} - Optional, Font weight of the keys.
     * @defaultValue `normal`
     */
    keysFontWeight?: string;

    /**
     * @property {string} - Optional, Size of the icon keys.
     * @defaultValue `25px`
     */
    keysIconSize?: string;

    /**
     * @property {boolean} - Optional, Scrolls the document to the top or bottom(by the placement option) of the input/textarea element. Prevented when `false`.
     * @defaultValue `true`
     */
    autoScroll?: boolean;
  }

  /**
    * This method can be used to set custom options globally for BetterBoard.
    * @function init
    * @memberof BetterBoard
    * @param {Object} initOptions - Required, `BetterBoard.IBetterBoardOptions`.
    */
  function init(initOptions: IBetterBoardOptions): void;

  /**
    * This method can be used to use BetterBoard on the selected `input` and/or `textarea` elements.
    * @function run
    * @memberof BetterBoard
    * @param {string | HTMLInputElement | HTMLTextAreaElement } selectorOrElement - Required, CSS selector(s) that matches the element(s) or an `input`/`textarea` element.
    * @param {Object} initOptions - Required, `BetterBoard.IBetterBoardOptions`.
    */
  function run(
    selectorOrElement: string | HTMLInputElement | HTMLTextAreaElement,
    initOptions: IBetterBoardOptions,
  ): void;

}

export = BetterBoard;
export as namespace BetterBoard;

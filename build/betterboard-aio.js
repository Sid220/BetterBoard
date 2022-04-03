/*!
* BetterBoard - Virtual Keyboard ('https://github.com/Sid220/BetterBoard')
* Description: This file contains the BetterBoard CSS codes as internal to use the BetterBoard as one file. This file has been created automatically from using the "BetterBoard.js", and "BetterBoard.css" files.
* Author: The Fake Slim Shady ('https://github.com/Sid220')
* Copyright 2022 BetterBoard - Virtual Keyboard, MIT Licence ('https://opensource.org/licenses/MIT')*
*/

/* global define */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory(root);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(root);
  } else {
    root.BetterBoard = factory(root);
  }
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

  // SSR check: begin
  if (typeof window === 'undefined' && typeof window.document === 'undefined') {
    return;
  }
  // SSR check: end

  // BetterBoard: Internal CSS Codes: begin
  var BetterBoardInternalCSSCodes = function () {
    var internalCSS = '#BetterBoard-VirtualKeyboard{box-sizing:border-box!important;position:fixed;z-index:2000;width:100%;max-width:1440px;background:#e3e3e3;background:linear-gradient(to right bottom,#eee,#ebebeb,#e8e8e8,#e6e6e6,#e3e3e3);-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);padding:25px 20px 20px;left:0;right:0;margin:auto}#BetterBoard-VirtualKeyboard.BetterBoard-placement-bottom{top:unset;bottom:0;border-radius:10px 10px 0 0}#BetterBoard-VirtualKeyboard.BetterBoard-placement-top{top:0;bottom:unset;border-radius:0 0 10px 10px}#BetterBoard-VirtualKeyboard.BetterBoard-placement-top span.BetterBoard-key-closeKeyboard svg{-webkit-transform:rotate(180deg) scale(.7)!important;transform:rotate(180deg) scale(.7)!important;-webkit-transform-origin:9px 9px!important;transform-origin:9px 9px!important}#BetterBoard-VirtualKeyboard *{box-sizing:border-box!important}#BetterBoard-VirtualKeyboard .BetterBoard-wrapper{position:relative;background:inherit;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}#BetterBoard-VirtualKeyboard .BetterBoard-wrapper.BetterBoard-overflow{padding-right:12px!important;overflow:hidden auto}#BetterBoard-VirtualKeyboard .BetterBoard-wrapper.BetterBoard-overflow::-webkit-scrollbar{height:6px;width:6px}#BetterBoard-VirtualKeyboard .BetterBoard-wrapper.BetterBoard-overflow::-webkit-scrollbar-track{border-radius:3px;background:rgba(255,255,255,.75)}#BetterBoard-VirtualKeyboard .BetterBoard-wrapper.BetterBoard-overflow::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(0,0,0,.25);cursor:pointer}#BetterBoard-VirtualKeyboard .BetterBoard-row{position:relative;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}#BetterBoard-VirtualKeyboard .BetterBoard-row span[class^=BetterBoard-key]{-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;position:relative;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;-webkit-transform-origin:bottom center;transform-origin:bottom center;cursor:pointer;font-size:22px;line-height:1;font-weight:normal;font-family:sans-serif;max-width:6.25%;margin:8px 8px 12px;padding:12px 12px 22px;border-radius:8px;background:#fafafa;color:#707070;border:2px solid rgba(255,255,255,.04);-webkit-box-shadow:0 4px 0 .04px rgba(0,0,0,.1);box-shadow:0 4px 0 .04px rgba(0,0,0,.1);border-bottom-color:rgba(255,255,255,.1);border-bottom-width:4px;-webkit-box-flex:1;-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;text-align:left}#BetterBoard-VirtualKeyboard.BetterBoard-tolowercase .BetterBoard-row-dynamic span[class^=BetterBoard-key]{text-transform:lowercase}#BetterBoard-VirtualKeyboard.BetterBoard-touppercase .BetterBoard-row-dynamic span[class^=BetterBoard-key]{text-transform:uppercase}#BetterBoard-VirtualKeyboard .BetterBoard-row span[class^=BetterBoard-key]:not(.spacebar-denied):hover{-webkit-transform:scaleY(.98) translateY(1px);transform:scaleY(.98) translateY(1px)}#BetterBoard-VirtualKeyboard .BetterBoard-row span[class^=BetterBoard-key]:not(.spacebar-denied):active{-webkit-transform:scaleY(.95) translateY(4px);transform:scaleY(.95) translateY(4px)}#BetterBoard-VirtualKeyboard .BetterBoard-row span[class^=BetterBoard-key] svg{position:absolute;z-index:10;left:10px;top:10px}#BetterBoard-VirtualKeyboard .BetterBoard-row-top{padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.06);margin:0 0 10px}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom{padding:10px 0 0;border-top:1px solid rgba(0,0,0,.06);margin:10px 0 0}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-capslock{max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-capslock::before{content:"";position:absolute;z-index:2;width:10px;height:10px;border-radius:10px;right:6px;top:6px;background:#c4c4c4}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-capslock.capslock-active::before{background:#5decaa}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-backspace{position:relative;max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-closeKeyboard{position:relative;max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-space{min-height:60px;max-width:100%;width:calc(100% - 16px - 140px - 16px - 140px - 16px - 140px - 16px);-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom.BetterBoard-with-specialcharacter span.BetterBoard-key-space{width:calc(100% - 16px - 140px - 16px - 140px - 16px - 140px - 16px - 140px - 16px)}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-space.spacebar-denied{opacity:.4!important;cursor:not-allowed!important}#BetterBoard-VirtualKeyboard .BetterBoard-with-specialcharacter span.BetterBoard-key-specialcharacter{position:relative;max-width:100%;min-height:60px;width:140px;-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad{display:block;max-width:320px;margin:auto}#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad span[class^=BetterBoard-key]{max-width:100%;min-height:60px;width:calc(33.3333% - 16px);-webkit-box-flex:1;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto}#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad span.BetterBoard-key-backspace,#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad span.BetterBoard-key-last{max-width:100%;width:calc(50% - 16px)}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters{-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;visibility:hidden;opacity:0;position:absolute;background:inherit;padding:20px;z-index:20;left:0;top:0;height:100%;width:100%}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters.BetterBoard-specialcharacter-show{visibility:visible;opacity:1}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters span.BetterBoard-specialcharacter-close{-webkit-transition:all .36s ease-in-out;-o-transition:all .36s ease-in-out;transition:all .36s ease-in-out;cursor:pointer;position:absolute;z-index:30;right:0;top:-42.5px;width:40px;height:40px;background:#a9a9a9;border-radius:20px;-webkit-box-shadow:0 0 16px -6px rgba(0,0,0,.25);box-shadow:0 0 16px -6px rgba(0,0,0,.25)}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters span.BetterBoard-specialcharacter-close svg{position:absolute;left:0;top:0;right:0;bottom:0;margin:auto;fill:#fff!important;width:16px!important;height:16px!important}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters span.BetterBoard-specialcharacter-close:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}#BetterBoard-VirtualKeyboard .BetterBoard-specialcharacters-content{width:100%;max-height:100%;padding-right:5px;overflow-x:hidden;overflow-y:auto}#BetterBoard-VirtualKeyboard .BetterBoard-specialcharacters-content::-webkit-scrollbar{height:6px;width:6px}#BetterBoard-VirtualKeyboard .BetterBoard-specialcharacters-content::-webkit-scrollbar-track{border-radius:3px;background:rgba(255,255,255,.75)}#BetterBoard-VirtualKeyboard .BetterBoard-specialcharacters-content::-webkit-scrollbar-thumb{border-radius:3px;background:rgba(0,0,0,.25);cursor:pointer}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters span.BetterBoard-key{min-width:60px;min-height:30px}#BetterBoard-VirtualKeyboard.BetterBoard-theme-light,#BetterBoard-VirtualKeyboard.BetterBoard-theme-material{-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);background:#e3e3e3;background:linear-gradient(to right bottom,#eee,#ebebeb,#e8e8e8,#e6e6e6,#e3e3e3)}#BetterBoard-VirtualKeyboard.BetterBoard-theme-dark{-webkit-box-shadow:inset 1px 1px 0 rgba(0,0,0,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(0,0,0,.25),0 0 20px -8px rgba(0,0,0,.15);background:#151515;background:linear-gradient(to left top,#151515,#171717,#1a1a1a,#1c1c1c,#1e1e1e)}#BetterBoard-VirtualKeyboard.BetterBoard-theme-flat{-webkit-box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);box-shadow:inset 1px 1px 0 rgba(255,255,255,.25),0 0 20px -8px rgba(0,0,0,.15);background:#dfdfdf}#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool{-webkit-box-shadow:inset 4px 4px 4px rgba(0,0,0,.02),0 0 20px -8px rgba(0,0,0,.1);box-shadow:inset 4px 4px 4px rgba(0,0,0,.02),0 0 20px -8px rgba(0,0,0,.1);background:#e5e5e5;background:linear-gradient(to right bottom,#e5e5e5,#e6e6e6,#e7e7e7,#e7e7e7,#e8e8e8)}#BetterBoard-VirtualKeyboard.BetterBoard-theme-light .BetterBoard-row span[class^=BetterBoard-key],#BetterBoard-VirtualKeyboard.BetterBoard-theme-material .BetterBoard-row span[class^=BetterBoard-key]{color:#707070;background:#fafafa}#BetterBoard-VirtualKeyboard.BetterBoard-theme-dark .BetterBoard-row span[class^=BetterBoard-key]{border-color:rgba(255,255,255,.02);border-bottom-color:rgba(255,255,255,.04);-webkit-box-shadow:0 5px 0 .05px rgba(255,255,255,.2);box-shadow:0 5px 0 .05px rgba(255,255,255,.2);color:#b7b7b7;background:#323232}#BetterBoard-VirtualKeyboard.BetterBoard-theme-flat .BetterBoard-row span[class^=BetterBoard-key]{color:#707070;background:#fafafa;border-color:#fafafa;border-bottom-color:#fafafa;-webkit-box-shadow:0 2px 0 .05px #fafafa;box-shadow:0 2px 0 .05px #fafafa}#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool .BetterBoard-row span[class^=BetterBoard-key]{color:#8f8f8f;text-shadow:0 0 1px rgba(0,0,0,.2);background:#fafafa;-webkit-box-shadow:0 4px 6px .06px rgba(0,0,0,.05);box-shadow:0 4px 6px .06px rgba(0,0,0,.05)}#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool .BetterBoard-row span[class^=BetterBoard-key]::after{content:"";position:absolute;left:0;top:-5px;right:0;bottom:0;width:100%;height:calc(100% - 5px);background:rgba(255,255,255,.1);-webkit-box-shadow:0 5px 15px -10px rgba(0,0,0,.4);box-shadow:0 5px 15px -10px rgba(0,0,0,.4);margin:auto;border-radius:inherit;border:4px solid rgba(0,0,0,.06);border-top-color:rgba(0,0,0,.02);border-bottom-color:transparent;box-sizing:border-box;border-top-width:2px;border-bottom-width:6px}#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool span.BetterBoard-key-capslock::before{right:9px;top:9px}#BetterBoard-VirtualKeyboard.BetterBoard-theme-flat span.BetterBoard-key-capslock::before,#BetterBoard-VirtualKeyboard.BetterBoard-theme-light span.BetterBoard-key-capslock::before,#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool span.BetterBoard-key-capslock::before{background:#c4c4c4}#BetterBoard-VirtualKeyboard.BetterBoard-theme-dark span.BetterBoard-key-capslock::before{background:#a9a9a9}#BetterBoard-VirtualKeyboard.BetterBoard-theme-material span.BetterBoard-key-capslock::before{background:#e6e6e6}#BetterBoard-VirtualKeyboard.BetterBoard-theme-dark span.BetterBoard-key-capslock.capslock-active::before,#BetterBoard-VirtualKeyboard.BetterBoard-theme-flat span.BetterBoard-key-capslock.capslock-active::before,#BetterBoard-VirtualKeyboard.BetterBoard-theme-light span.BetterBoard-key-capslock.capslock-active::before,#BetterBoard-VirtualKeyboard.BetterBoard-theme-material span.BetterBoard-key-capslock.capslock-active::before,#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool span.BetterBoard-key-capslock.capslock-active::before{background:#5decaa}#BetterBoard-VirtualKeyboard.BetterBoard-theme-flat .BetterBoard-row span[class^=BetterBoard-key] svg,#BetterBoard-VirtualKeyboard.BetterBoard-theme-light .BetterBoard-row span[class^=BetterBoard-key] svg{fill:#707070!important}#BetterBoard-VirtualKeyboard.BetterBoard-theme-dark .BetterBoard-row span[class^=BetterBoard-key] svg{fill:#a9a9a9!important}#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool .BetterBoard-row span[class^=BetterBoard-key] svg{left:12px;fill:#a1a1a1!important}#BetterBoard-VirtualKeyboard.BetterBoard-theme-material .BetterBoard-row span[class^=BetterBoard-key] svg{fill:#fafafa!important}#BetterBoard-VirtualKeyboard.BetterBoard-theme-material .BetterBoard-row-bottom span.BetterBoard-key-backspace,#BetterBoard-VirtualKeyboard.BetterBoard-theme-material .BetterBoard-row-bottom span.BetterBoard-key-capslock,#BetterBoard-VirtualKeyboard.BetterBoard-theme-material .BetterBoard-row-bottom span.BetterBoard-key-closeKeyboard,#BetterBoard-VirtualKeyboard.BetterBoard-theme-material .BetterBoard-row-bottom span.BetterBoard-key-specialcharacter,#BetterBoard-VirtualKeyboard.BetterBoard-theme-material .BetterBoard-row-numpad span.BetterBoard-key-backspace{-webkit-box-shadow:0 4px 0 .04px rgba(0,0,0,.3);box-shadow:0 4px 0 .04px rgba(0,0,0,.3);border-bottom-color:rgba(0,0,0,.03);color:#fafafa;background:#b0b0b0}#BetterBoard-VirtualKeyboard.BetterBoard-theme-flat span.BetterBoard-specialcharacter-close,#BetterBoard-VirtualKeyboard.BetterBoard-theme-light span.BetterBoard-specialcharacter-close,#BetterBoard-VirtualKeyboard.BetterBoard-theme-material span.BetterBoard-specialcharacter-close,#BetterBoard-VirtualKeyboard.BetterBoard-theme-oldschool span.BetterBoard-specialcharacter-close{background:#a9a9a9}#BetterBoard-VirtualKeyboard.BetterBoard-theme-dark span.BetterBoard-specialcharacter-close{background:#323232}#BetterBoard-VirtualKeyboard.BetterBoard-theme-dark span.BetterBoard-specialcharacter-close svg{fill:#b7b7b7!important}@media only screen and (max-width:767px){#BetterBoard-VirtualKeyboard{min-height:210px;padding:12px 6px}#BetterBoard-VirtualKeyboard .BetterBoard-row span[class^=BetterBoard-key]{font-size:13px!important;margin:2px 2px 12px;padding:8px 0;width:auto;min-width:22.5px;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;border-radius:4px}#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad span[class^=BetterBoard-key]{margin:4px 4px 12px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:16px!important;width:calc(33.3333% - 16px);min-height:55px}#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad span.BetterBoard-key-backspace,#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad span.BetterBoard-key-last{width:calc(50% - 20px)}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-backspace,#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-capslock,#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-closeKeyboard,#BetterBoard-VirtualKeyboard .BetterBoard-with-specialcharacter span.BetterBoard-key-specialcharacter{max-width:60px;min-height:45px;margin-bottom:4px}#BetterBoard-VirtualKeyboard .BetterBoard-row-bottom span.BetterBoard-key-space{padding-top:10px;min-height:45px;margin-bottom:4px}#BetterBoard-VirtualKeyboard .BetterBoard-row span[class^=BetterBoard-key] svg{-webkit-transform:scale(.7);transform:scale(.7);-webkit-transform-origin:left top;transform-origin:left top;left:8px;top:8px}#BetterBoard-VirtualKeyboard .BetterBoard-row-numpad span[class^=BetterBoard-key] svg{top:0;left:18px;bottom:0;margin:auto;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:center center;transform-origin:center center}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters{padding:15px 15px 10px}#BetterBoard-VirtualKeyboard .BetterBoard-row-specialcharacters span.BetterBoard-specialcharacter-close{width:30px;height:30px;top:-27px;right:5px}}#BetterBoard-VirtualKeyboard.BetterBoard-with-animation.BetterBoard-fade{opacity:1;-webkit-animation:BetterBoard-animation-fade .36s ease-in-out 0s normal;animation:BetterBoard-animation-fade .36s ease-in-out 0s normal}@-webkit-keyframes BetterBoard-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes BetterBoard-animation-fade{0%{opacity:0}100%{opacity:1}}#BetterBoard-VirtualKeyboard.BetterBoard-with-animation.BetterBoard-fade.BetterBoard-fade-remove{opacity:0;-webkit-animation:BetterBoard-animation-fade-remove .36s ease-in-out 0s normal;animation:BetterBoard-animation-fade-remove .36s ease-in-out 0s normal}@-webkit-keyframes BetterBoard-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes BetterBoard-animation-fade-remove{0%{opacity:1}100%{opacity:0}}#BetterBoard-VirtualKeyboard.BetterBoard-with-animation.BetterBoard-placement-bottom.BetterBoard-slide{bottom:0;-webkit-animation:BetterBoard-animation-slide-bottom 1.2s ease-in-out 0s normal;animation:BetterBoard-animation-slide-bottom 1.2s ease-in-out 0s normal}@-webkit-keyframes BetterBoard-animation-slide-bottom{0%{bottom:-100%}100%{bottom:0}}@keyframes BetterBoard-animation-slide-bottom{0%{bottom:-100%}100%{bottom:0}}#BetterBoard-VirtualKeyboard.BetterBoard-with-animation.BetterBoard-slide.BetterBoard-placement-bottom.BetterBoard-slide-remove{bottom:-100%;-webkit-animation:BetterBoard-animation-slide-bottom-remove 1.2s ease-in-out 0s normal;animation:BetterBoard-animation-slide-bottom-remove 1.2s ease-in-out 0s normal}@-webkit-keyframes BetterBoard-animation-slide-bottom-remove{0%{bottom:0}100%{bottom:-100%}}@keyframes BetterBoard-animation-slide-bottom-remove{0%{bottom:0}100%{bottom:-100%}}#BetterBoard-VirtualKeyboard.BetterBoard-with-animation.BetterBoard-placement-top.BetterBoard-slide{top:0;-webkit-animation:BetterBoard-animation-slide-top 1.2s ease-in-out 0s normal;animation:BetterBoard-animation-slide-top 1.2s ease-in-out 0s normal}@-webkit-keyframes BetterBoard-animation-slide-top{0%{top:-100%}100%{top:0}}@keyframes BetterBoard-animation-slide-top{0%{top:-100%}100%{top:0}}#BetterBoard-VirtualKeyboard.BetterBoard-with-animation.BetterBoard-slide.BetterBoard-placement-top.BetterBoard-slide-remove{top:-100%;-webkit-animation:BetterBoard-animation-slide-top-remove 1.2s ease-in-out 0s normal;animation:BetterBoard-animation-slide-top-remove 1.2s ease-in-out 0s normal}@-webkit-keyframes BetterBoard-animation-slide-top-remove{0%{top:0}100%{top:-100%}}@keyframes BetterBoard-animation-slide-top-remove{0%{top:0}100%{top:-100%}}';
    return internalCSS || null;
  };
  // BetterBoard: Internal CSS codes: end

  // BetterBoard: Internal CSS: begin
  var BetterBoardInternalCSS = function () {
    if (BetterBoardInternalCSSCodes() !== null && !window.document.getElementById('BetterBoardInternalCSS')) {
      var internalCSS = window.document.createElement('style');
      internalCSS.id = 'BetterBoardInternalCSS';
      internalCSS.innerHTML = BetterBoardInternalCSSCodes();
      window.document.head.appendChild(internalCSS);
    }
  };
  // BetterBoard: Internal CSS: end

  // BetterBoard: Default Options: begin
  var BetterBoardDefaultOptions = {
    keysArrayOfObjects: null,
    keysJsonUrl: null,
    keysSpecialCharsArrayOfStrings: null,
    keysNumpadArrayOfNumbers: null,
    language: 'en',
    theme: 'light', // "light" || "dark" || "flat" || "material" || "oldschool"
    capsLockActive: false,
    allowRealKeyboard: true,
    allowMobileKeyboard: true,
    cssAnimations: true,
    cssAnimationsDuration: 360,
    cssAnimationsStyle: 'slide', // "slide" || "fade"
    keysAllowSpacebar: true,
    keysSpacebarText: 'Space',
    keysFontFamily: 'sans-serif',
    keysFontSize: '22px',
    keysFontWeight: 'normal',
    keysIconSize: '25px',
    autoScroll: true,
    specialCharButton: true,
    keyboardType: 'all', // "numpad" || "keyboard" || "all"
    keyboardPlacement: 'bottom', // "top" || "bottom",
    closeKeyboardButton: true,
    keysArrayOfObjects: [{ "0": "Q", "1": "W", "2": "E", "3": "R", "4": "T", "5": "Y", "6": "U", "7": "I", "8": "O", "9": "P" }, { "0": "A", "1": "S", "2": "D", "3": "F", "4": "G", "5": "H", "6": "J", "7": "K", "8": "L" }, { "0": "Z", "1": "X", "2": "C", "3": "V", "4": "B", "5": "N", "6": "M" }],
  };
  var BetterBoardCachedKeys;
  var BetterBoardNewOptions;
  var BetterBoardGithubUrl = 'https://github.com/furcan/BetterBoard';
  var BetterBoardSpecialCharacters = {
    '0': '!',
    '1': '\'',
    '2': '^',
    '3': '#',
    '4': '+',
    '5': '$',
    '6': '%',
    '7': '½',
    '8': '&',
    '9': '/',
    '10': '{',
    '11': '}',
    '12': '(',
    '13': ')',
    '14': '[',
    '15': ']',
    '16': '=',
    '17': '*',
    '18': '?',
    '19': '\\',
    '20': '-',
    '21': '_',
    '22': '|',
    '23': '@',
    '24': '€',
    '25': '₺',
    '26': '~',
    '27': 'æ',
    '28': 'ß',
    '29': '<',
    '30': '>',
    '31': ',',
    '32': ';',
    '33': '.',
    '34': ':',
    '35': '`',
  };
  var BetterBoardNumpadKeysObject = {
    '0': '7',
    '1': '8',
    '2': '9',
    '3': '4',
    '4': '5',
    '5': '6',
    '6': '1',
    '7': '2',
    '8': '3',
    '9': '0',
  };
  var BetterBoardAllKeysObject = {
    '0': '1',
    '1': '2',
    '2': '3',
    '3': '4',
    '4': '5',
    '5': '6',
    '6': '7',
    '7': '8',
    '8': '9',
    '9': '0',
  };
  var BetterBoardTypes = {
    All: 'all',
    Keyboard: 'keyboard',
    Numpad: 'numpad',
  };
  var BetterBoardPlacements = {
    Bottom: 'bottom',
    Top: 'top',
  };
  // BetterBoard: Default Options: end

  // BetterBoard: Extend Options: begin
  var BetterBoardExtendObjects = function () {
    var extended = {};
    var deep = false;
    var i = 0;
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }
    var merge = function (obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = BetterBoardExtendObjects(extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };
    for (; i < arguments.length; i++) {
      merge(arguments[i]);
    }
    return extended;
  };
  // BetterBoard: Extend Options: end

  // BetterBoard: Check Array of Objects: begin
  var BetterBoardCheckArrayOfObjects = function (array) {
    if (Array.isArray(array) && array.length > 0) {
      var firstChild = array[0];
      if (typeof firstChild === 'object' && !Array.isArray(firstChild)) {
        for (var key in firstChild) {
          if (Object.prototype.hasOwnProperty.call(firstChild, key)) {
            return true;
          }
        }
      }
    }
    return false;
  };
  // BetterBoard: Check Array of Objects: end

  // BetterBoard: Console Error Function: begin
  var BetterBoardConsoleError = function (errorMessage) {
    return console.error('%c BetterBoard (Error) ', 'padding:2px;border-radius:20px;color:#fff;background:#f44336', '\n' + errorMessage);
  };
  // BetterBoard: Console Error Function: end

  // BetterBoard: Console Log Function: begin
  var BetterBoardConsoleLog = function (logMessage) {
    return console.log('%c BetterBoard (Info) ', 'padding:2px;border-radius:20px;color:#fff;background:#00bcd4', '\n' + logMessage);
  };
  // BetterBoard: Console Log Function: end

  // BetterBoard: Icons: begin
  var BetterBoardIconBackspace = function (width, color) {
    if (!width) { width = 25; }
    if (!color) { color = '#707070'; }
    var icon = '&nbsp;<svg id="BetterBoardIconBackspace" xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + width + '" viewBox="0 0 612 612" style="width:' + width + ';height:' + width + ';fill:' + color + ';"><path d="M561,76.5H178.5c-17.85,0-30.6,7.65-40.8,22.95L0,306l137.7,206.55c10.2,12.75,22.95,22.95,40.8,22.95H561c28.05,0,51-22.95,51-51v-357C612,99.45,589.05,76.5,561,76.5z M484.5,397.8l-35.7,35.7L357,341.7l-91.8,91.8l-35.7-35.7l91.8-91.8l-91.8-91.8l35.7-35.7l91.8,91.8l91.8-91.8l35.7,35.7L392.7,306L484.5,397.8z"/></svg>';
    return icon;
  };
  var BetterBoardIconCapslock = function (width, color) {
    if (!width) { width = 25; }
    if (!color) { color = '#707070'; }
    var icon = '&nbsp;<svg id="BetterBoardIconCapslock" xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + width + '" style="width:' + width + ';height:' + width + ';fill:' + color + ';shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 200 200"><path d="M61.8 148.97l76.4 0c6,0 10.91,4.9 10.91,10.9l0 27.24c0,5.99 -4.91,10.89 -10.91,10.89l-76.4 0c-6,0 -10.91,-4.9 -10.91,-10.89l0 -27.24c0,-6 4.91,-10.9 10.91,-10.9zm105.7 -60.38l-18.39 0 0 37.36c0,5.99 -4.91,10.89 -10.91,10.89l-76.4 0c-6,0 -10.91,-4.9 -10.91,-10.89l0 -37.36 -18.39 0c-2.65,0 -4.91,-1.47 -5.97,-3.89 -1.07,-2.42 -0.63,-5.08 1.16,-7.02l67.5 -73.57c1.28,-1.39 2.91,-2.11 4.81,-2.11 1.9,0 3.53,0.72 4.81,2.11l67.5 73.57c1.79,1.94 2.23,4.6 1.16,7.02 -1.06,2.42 -3.32,3.89 -5.97,3.89z"/></svg>';
    return icon;
  };
  var BetterBoardIconSpecialCharacters = function (width, height, color) {
    if (!width) { width = 50; }
    if (!height) { width = 25; }
    if (!color) { color = '#707070'; }
    var icon = '&nbsp;<svg id="BetterBoardIconSpecialCharacters" xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '" style="width:' + width + ';height:' + height + ';fill:' + color + ';shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 300 150"><path d="M34.19 79.43l1.99 -10.86 10.8 0 -1.96 10.86 -10.83 0zm264.98 -17.22l0 -9.63c0,-1.23 -1,-2.23 -2.24,-2.23l-74.48 0c-1.24,0 -2.24,1 -2.24,2.23l0 9.63c0,1.23 1,2.23 2.24,2.23l74.48 0c1.24,0 2.24,-1 2.24,-2.23zm0 35.22l0 -9.62c0,-1.23 -1,-2.23 -2.24,-2.23l-74.48 0c-1.24,0 -2.24,1 -2.24,2.23l0 9.62c0,1.23 1,2.24 2.24,2.24l74.48 0c1.24,0 2.24,-1.01 2.24,-2.24zm-153.98 -61.91l9.63 0c1.23,0 2.23,1.01 2.23,2.25l0 30.19 30.19 0c1.25,0 2.25,1.01 2.25,2.23l0 9.63c0,1.23 -1,2.23 -2.25,2.23l-30.19 0 0 30.19c0,1.25 -1,2.25 -2.23,2.25l-9.63 0c-1.23,0 -2.23,-1 -2.23,-2.25l0 -30.19 -30.19 0c-1.24,0 -2.25,-1 -2.25,-2.23l0 -9.63c0,-1.22 1.01,-2.23 2.25,-2.23l30.19 0 0 -30.19c0,-1.24 1,-2.25 2.23,-2.25zm-67.7 33.05c1.28,0 2.31,-1.03 2.31,-2.31l0 -9.2c0,-1.27 -1.03,-2.31 -2.31,-2.31l-13.93 0 2.95 -16.51c0.12,-0.68 -0.07,-1.37 -0.51,-1.89 -0.44,-0.53 -1.09,-0.83 -1.77,-0.83l-9.36 -0.01c0,0 0,0 0,0 -1.12,0 -2.08,0.8 -2.28,1.9l-3.12 17.34 -10.74 0 3.03 -16.49c0.12,-0.67 -0.06,-1.37 -0.5,-1.89 -0.44,-0.53 -1.09,-0.84 -1.77,-0.84l-9.48 -0.01c0,0 0,0 0,0 -1.12,0 -2.08,0.8 -2.28,1.9l-3.16 17.33 -21.43 0c-1.28,0 -2.31,1.04 -2.31,2.32l0 9.19c0,1.28 1.03,2.31 2.31,2.31l18.91 0 -1.98 10.86 -16.93 0c-1.28,0 -2.31,1.04 -2.31,2.31l0 9.2c0,1.28 1.03,2.31 2.31,2.31l14.41 0 -3.35 18.36c-0.12,0.67 0.06,1.37 0.5,1.89 0.44,0.53 1.09,0.84 1.78,0.84l9.36 0c1.12,0 2.08,-0.8 2.28,-1.9l3.53 -19.19 10.88 0 -3.31 18.42c-0.13,0.67 0.06,1.36 0.49,1.89 0.44,0.52 1.08,0.83 1.76,0.84l9.49 0.09c0,0 0.01,0 0.02,0 1.12,0 2.08,-0.81 2.28,-1.91l3.44 -19.33 20.79 0c1.28,0 2.31,-1.03 2.31,-2.31l0 -9.2c0,-1.27 -1.03,-2.31 -2.31,-2.31l-18.32 0 1.93 -10.86 16.39 0z"/></svg>';
    return icon;
  };
  var BetterBoardIconClose = function (width, color) {
    if (!width) { width = 18; }
    if (!color) { color = '#707070'; }
    var icon = '<svg id="BetterBoardIconClose" width="' + width + '" height="' + width + '" style="width:' + width + ';height:' + width + ';fill:' + color + ';" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 348.333 348.334"><path d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554	L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"/></svg>';
    return icon;
  };
  // BetterBoard: Icons: end

  // BetterBoard: IE support for Event: begin
  (function () {
    if (typeof window.Event === 'function') {
      return false;
    }
    function Event(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };
      var evt = window.document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    Event.prototype = window.Event.prototype;
    window.Event = Event;
  })();
  // BetterBoard: IE support for Event: end

  // BetterBoard: Check the event target by element: begin
  var BetterBoardEventTargetIsElementOrChilds = function (event, element) {
    if (event.target === element) {
      return true;
    } else {
      var nodeList = element.querySelectorAll('*');
      if (nodeList && nodeList.length > 0) {
        for (var ni = 0; ni < nodeList.length; ni++) {
          var child = nodeList[ni];
          if (event.target === child) {
            return true;
          }
        }
      }
    }
    return false;
  };
  // BetterBoard: Check the event target by element: end

  // BetterBoard: begin
  var BetterBoard = {
    // Initialize
    init: function (initOptions) {
      initOptions = typeof initOptions === 'object' && Object.keys(initOptions).length > 0 ? initOptions : {};
      BetterBoardNewOptions = BetterBoardExtendObjects(true, BetterBoardDefaultOptions, initOptions);
      BetterBoardInternalCSS();
    },
    // Run
    run: function (selectorOrElement, options) {
      // Element(s)
      var kbElements = [];

      // Allowed Element Types
      var allowedElementTypes = ['input', 'textarea'];

      // If: Check the selector is an element
      var isElement = allowedElementTypes.indexOf(((selectorOrElement || {}).nodeName || '').toLocaleLowerCase('en')) > -1;
      if (isElement) {
        kbElements.push(selectorOrElement);
      }
      // Else: Check the selector is valid for the querySelector
      else {
        // Check the selector
        var selectorIsValid = typeof selectorOrElement === 'string' && selectorOrElement.length > 0;
        if (!selectorIsValid) {
          BetterBoardConsoleError('"' + selectorOrElement + '" is not a valid selector.');
          return false;
        }

        // Get the element(s)
        kbElements = window.document.querySelectorAll(selectorOrElement);
        if (kbElements.length < 1) {
          BetterBoardConsoleError('You called the BetterBoard with the "' + selectorOrElement + '" selector, but there is no such element on the document.');
          return false;
        }
      }

      // If: Check the options to initialize or extend
      if (typeof options === 'object' && Object.keys(options).length > 0) {
        if (!BetterBoardNewOptions) {
          BetterBoard.init(options);
        } else {
          // extend the new options by the default options
          BetterBoardNewOptions = BetterBoardExtendObjects(true, BetterBoardDefaultOptions, options);
        }
      }
      // Else If: Check the initialize
      else if (!BetterBoardNewOptions) {
        BetterBoardConsoleError('You have to initialize the BetterBoard first. \n\nVisit to learn more: ' + BetterBoardGithubUrl);
        return false;
      }

      // The final options for each
      var opt = BetterBoardNewOptions;

      // Keys: Array of Objects
      var keysArrayOfObjects = opt.keysArrayOfObjects;

      // Keys: Array of Objects has keys
      var objectHasKeys = false;

      // Step 1: check the "keysArrayOfObjects": begin
      if (BetterBoardCheckArrayOfObjects(keysArrayOfObjects)) {
        // object has keys
        objectHasKeys = true;
        // cache the array
        BetterBoardCachedKeys = keysArrayOfObjects;
      }
      // Step 1: check the "keysArrayOfObjects": end

      // Step 2: check the "keysJsonUrl": begin
      if (!objectHasKeys) {
        // keys json url is valid
        var keysJsonUrlIsValid = typeof opt.keysJsonUrl === 'string' && opt.keysJsonUrl.length > 0;
        // check the "keysJsonUrl"
        if (!keysJsonUrlIsValid) {
          BetterBoardConsoleError('You have to set the path of BetterBoard Keys JSON file to "keysJsonUrl" option. \n\nVisit to learn more: ' + BetterBoardGithubUrl);
          return false;
        }
      }
      // Step 2: check the "keysJsonUrl": end

      // Functions: Create Keyboard and AppendTo: begin
      var createKeyboardAndAppendTo = function (data, input) {
        // all inputs
        var allInputs = [];
        allInputs.push(input);

        // all inputs readonly check for allowing mobile keyboard
        var getReadOnlyAttr = input.getAttribute('readonly') !== null;
        var allowMobileKeyboard = opt.allowMobileKeyboard === true;

        // each input focus listener: begin
        var inputFocusListener = function (e) {
          // input element variables: begin
          var theInput = e.currentTarget;
          var theInputSelIndex = 0;
          var theInputValArray = [];


          var keyboardType = opt.keyboardType;
          if (typeof theInput.dataset.betterboardType !== 'undefined') {
            var keyboardTypeArray = [BetterBoardTypes.All, BetterBoardTypes.Keyboard, BetterBoardTypes.Numpad];
            var theInputKeyboardType = theInput.dataset.betterboardType.toLocaleLowerCase('en');
            keyboardType = keyboardTypeArray.indexOf(theInputKeyboardType) > -1 ? theInputKeyboardType : opt.keyboardType;
          }
          if (theInput.type === "number") {
            keyboardType = BetterBoardTypes.Numpad;
          }


          var keyboardPlacement = opt.keyboardPlacement;
          if (typeof theInput.dataset.betterboardPlacement !== 'undefined') {
            var keyboardPlacementArray = [BetterBoardPlacements.Top, BetterBoardPlacements.Bottom];
            var theInputPlacement = theInput.dataset.betterboardPlacement.toLocaleLowerCase('en');
            keyboardPlacement = keyboardPlacementArray.indexOf(theInputPlacement) > -1 ? theInputPlacement : opt.keyboardPlacement;
          }

          var allowedSpecialCharacters = opt.specialCharButton;
          if (typeof theInput.dataset.betterboardSpecialcharacters !== 'undefined') {
            if (theInput.dataset.betterboardSpecialcharacters.toLocaleLowerCase('en') == 'true') {
              allowedSpecialCharacters = true;
            }
            else if (theInput.dataset.betterboardSpecialcharacters.toLocaleLowerCase('en') == 'false') {
              allowedSpecialCharacters = false;
            }
          }
          var keyboardLanguage = typeof opt.language === 'string' && opt.language.length > 0 ? opt.language.toLocaleLowerCase('en') : 'en';
          // input element variables: end

          // check mobile keyboard allowed: begin
          if (!allowMobileKeyboard) {
            theInput.setAttribute('readonly', 'readonly');
            theInput.blur();
          }
          // check mobile keyboard allowed: end

          // update theInputSelIndex on focus
          var theInputValLen = (theInput.value || '').length;
          theInputSelIndex = theInput.selectionStart || theInputValLen;

          // update theInputValArray on focus
          theInputValArray = theInput.value.split('');

          // row keys element
          var keysRowElements = '';

          // all keys styles
          var fontFamily = typeof opt.keysFontFamily === 'string' && opt.keysFontFamily.length > 0 ? opt.keysFontFamily : 'sans-serif';
          var fontSize = typeof opt.keysFontSize === 'string' && opt.keysFontSize.length > 0 ? opt.keysFontSize : '22px';
          var fontWeight = typeof opt.keysFontWeight === 'string' && opt.keysFontWeight.length > 0 ? opt.keysFontWeight : 'normal';

          // static keys: begin
          var isCapsLockActive = opt.capsLockActive === true;
          var keysIconWidth = typeof opt.keysIconSize === 'string' && opt.keysIconSize.length > 0 ? opt.keysIconSize : '25px';
          var keysIconColor = '#707070';
          var keysAllowSpacebar = opt.keysAllowSpacebar === true;
          var spaceKeyValue = keysAllowSpacebar ? ' ' : '';
          var keysSpacebarText = typeof opt.keysSpacebarText === 'string' && opt.keysSpacebarText.length > 0 ? opt.keysSpacebarText : 'Space';

          var spaceKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key BetterBoard-key-space ' + (keysAllowSpacebar ? 'spacebar-allowed' : 'spacebar-denied') + '" data-value="' + spaceKeyValue + '">' + keysSpacebarText + '</span>';
          var capsLockKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key-capslock ' + (isCapsLockActive ? 'capslock-active' : '') + '">' + BetterBoardIconCapslock(keysIconWidth, keysIconColor) + '</span>';
          var backspaceKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key-backspace">' + BetterBoardIconBackspace(keysIconWidth, keysIconColor) + '</span>';
          var closeKeyboardKey = '<span class="BetterBoard-key-closeKeyboard" id="BetterBoardCloseKeyboard"><svg style="width:25px;height:25px;fill:#707070;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/></svg></span>';
          // static keys: end

          // keyboard "specialcharacter" setting is "true": begin
          var specialCharacterKey = '';
          var specialCharactersContent = '';
          if (allowedSpecialCharacters) {
            var size = parseInt(keysIconWidth) || 25;
            var specialKeyWidth = (size * 2) + 'px';
            var specialKeyHeight = size + 'px';
            specialCharacterKey = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key-specialcharacter">' + BetterBoardIconSpecialCharacters(specialKeyWidth, specialKeyHeight, keysIconColor) + '</span>';

            // check "keysSpecialCharsArrayOfStrings" for override: begin
            var specialCharacters = opt.keysSpecialCharsArrayOfStrings;
            if (Array.isArray(specialCharacters) && specialCharacters.length > 0) {
              BetterBoardSpecialCharacters = specialCharacters.reduce(function (scMemo, scKey, scIndex) {
                scMemo[scIndex] = scKey;
                return scMemo;
              }, {});
            }
            // check "keysSpecialCharsArrayOfStrings" for override: end

            for (var key2 in BetterBoardSpecialCharacters) {
              if (Object.prototype.hasOwnProperty.call(BetterBoardSpecialCharacters, key2)) {
                var index2 = key2;
                var value2 = BetterBoardSpecialCharacters[key2];
                var eachKey2 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key" data-index="' + index2.toString() + '" data-value="' + value2.toString() + '">' + value2.toString() + '</span>';
                specialCharactersContent += eachKey2;
              }
            }
          }
          // keyboard "specialcharacter" setting is "true": begin

          // keyboard type is "numpad": begin
          if (keyboardType === BetterBoardTypes.Numpad) {
            // check "keysNumpadArrayOfNumbers" for override: begin
            var numpadKeys = opt.keysNumpadArrayOfNumbers;
            if (Array.isArray(numpadKeys) && numpadKeys.length === 10) {
              BetterBoardNumpadKeysObject = numpadKeys.reduce(function (numpadMemo, numpadKey, numpadIndex) {
                numpadMemo[numpadIndex] = numpadKey;
                return numpadMemo;
              }, {});
            }
            // check "keysNumpadArrayOfNumbers" for override: end

            var numpadKeysContent = '';
            for (var key3 in BetterBoardNumpadKeysObject) {
              if (Object.prototype.hasOwnProperty.call(BetterBoardNumpadKeysObject, key3)) {
                var index3 = key3;
                var value3 = BetterBoardNumpadKeysObject[key3];
                var eachKey3 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key BetterBoard-key-' + value3.toString() + ' ' + (index3 === '9' ? 'BetterBoard-key-last' : '') + '" data-index="' + index3.toString() + '" data-value="' + value3.toString() + '">' + value3.toString() + '</span>';
                numpadKeysContent += eachKey3;
              }
            }
            keysRowElements += '<div class="BetterBoard-row BetterBoard-row-numpad">' + numpadKeysContent + backspaceKey + '</div>';
          }
          // keyboard type is "numpad": end

          // keyboard type is "all" or "keyboard": begin
          if (keyboardType === BetterBoardTypes.Keyboard || keyboardType === BetterBoardTypes.All) {
            // only keyboard type is "all": begin
            if (keyboardType === BetterBoardTypes.All) {
              var numberKeysContent = '';
              for (var key4 in BetterBoardAllKeysObject) {
                if (Object.prototype.hasOwnProperty.call(BetterBoardAllKeysObject, key4)) {
                  var index4 = key4;
                  var value4 = BetterBoardAllKeysObject[key4];
                  var eachKey4 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key BetterBoard-key-' + value4.toString() + '" data-index="' + index4.toString() + '" data-value="' + value4.toString() + '">' + value4.toString() + '</span>';
                  numberKeysContent += eachKey4;
                }
              }
              keysRowElements += '<div class="BetterBoard-row BetterBoard-row-top">' + numberKeysContent + '</div>';

            }
            // only keyboard type is "all": end

            // dynamic keys group: begin
            for (var i = 0; i < data.length; i++) {
              var eachObj = data[i];
              var rowKeysContent = '';
              for (var key5 in eachObj) {
                if (Object.prototype.hasOwnProperty.call(eachObj, key5)) {
                  var index5 = key5;
                  var value5 = eachObj[key5];
                  var eachKey5 = '<span style="font-family:' + fontFamily + ',sans-serif;font-weight:' + fontWeight + ';font-size:' + fontSize + ';" class="BetterBoard-key BetterBoard-key-' + value5.toString().toLocaleLowerCase(keyboardLanguage) + '" data-index="' + index5.toString() + '" data-value="' + value5.toString() + '">' + value5.toString() + '</span>';
                  rowKeysContent += eachKey5;
                }
              }
              keysRowElements += '<div class="BetterBoard-row BetterBoard-row-dynamic">' + rowKeysContent + '</div>';
            }
            // dynamic keys group: end

            // bottom keys group: begin
            keysRowElements += '<div class="BetterBoard-row BetterBoard-row-bottom ' + (allowedSpecialCharacters ? 'BetterBoard-with-specialcharacter' : '') + '">' + capsLockKey + specialCharacterKey + spaceKey + backspaceKey + (opt.closeKeyboardButton ? closeKeyboardKey : "") + '</div>';
            // bottom keys group: end

            // add if special character keys allowed: begin
            if (allowedSpecialCharacters) {
              var closeSpecialCharacters = '<span class="BetterBoard-specialcharacter-close">' + BetterBoardIconClose('18px', keysIconColor) + '</span>';
              var specialCharactersWrapper = '<div class="BetterBoard-specialcharacters-content">' + specialCharactersContent + '</div>';
              keysRowElements += '<div class="BetterBoard-row BetterBoard-row-specialcharacters">' + closeSpecialCharacters + specialCharactersWrapper + '</div>';
            }
            // add if special character keys allowed: end
          }
          // keyboard type is "all" or "keyboard": end

          // create keys wrapper: begin
          var wrapKeysElement = function (stringHtml) {
            var div = window.document.createElement('div');
            div.className = 'BetterBoard-wrapper';
            div.innerHTML = stringHtml.trim();
            return div;
          };
          var allKeysElement = wrapKeysElement(keysRowElements); // all keyboard element
          // create keys wrapper: end

          // check "cssAnimations": begin
          var cssAnimations = opt.cssAnimations === true;
          var cssAnimationsClass = 'no-animation';
          var cssAnimationsStyle = 'no-animation';
          var cssAnimationsDuration = 0;
          if (cssAnimations) {
            cssAnimationsClass = 'BetterBoard-with-animation';
            cssAnimationsStyle = 'BetterBoard-fade';
            cssAnimationsDuration = typeof opt.cssAnimationsDuration === 'number' ? opt.cssAnimationsDuration : 360;
            if (opt.cssAnimationsStyle === 'slide') {
              cssAnimationsStyle = 'BetterBoard-slide';
            }
          }
          // check "cssAnimations": end

          // create the keyboard: begin
          var theTheme = typeof opt.theme === 'string' && opt.theme.length > 0 ? opt.theme.trim() : 'light';
          var BetterBoardVirtualKeyboard = window.document.createElement('div');
          BetterBoardVirtualKeyboard.id = 'BetterBoard-VirtualKeyboard';
          BetterBoardVirtualKeyboard.classList.add('BetterBoard-theme-' + theTheme);
          BetterBoardVirtualKeyboard.classList.add('BetterBoard-placement-' + keyboardPlacement);
          BetterBoardVirtualKeyboard.classList.add(cssAnimationsClass);
          BetterBoardVirtualKeyboard.classList.add(cssAnimationsStyle);
          BetterBoardVirtualKeyboard.classList.add((isCapsLockActive ? 'BetterBoard-touppercase' : 'BetterBoard-tolowercase'));
          BetterBoardVirtualKeyboard.lang = keyboardLanguage;
          BetterBoardVirtualKeyboard.style.webkitLocale = '"' + keyboardLanguage + '"';
          BetterBoardVirtualKeyboard.style.animationDuration = cssAnimations ? (cssAnimationsDuration + 'ms') : '';
          BetterBoardVirtualKeyboard.appendChild(allKeysElement);
          // create the keyboard: end

          // event for input element trigger change: begin
          var changeEvent = new Event('change', {
            'bubbles': true,
            'cancelable': true,
          });
          // event for input element trigger change: end

          // event for input element input: begin
          var inputEvent = new Event('input', {
            'bubbles': true,
            'cancelable': true,
          });
          // event for input element trigger: end

          // input element keypress listener: begin
          theInput.addEventListener('keypress', function (e) {
            // if: allowed real keyboard use
            var allowRealKeyboard = opt.allowRealKeyboard === true;
            if (allowRealKeyboard) {
              // update theInputValArray on keypress
              theInputValArray = e.currentTarget.value.split('');
            }
            // else: stop
            else {
              e.stopPropagation();
              e.preventDefault();
              e.returnValue = false;
              e.cancelBubble = true;
              return false;
            }
          }, false);
          // input element keypress listener: end

          // keys click listeners: begin
          var keysClickListeners = function (input) {
            // each key click listener: begin
            var eachKeyElm = window.document.getElementById(BetterBoardVirtualKeyboard.id).getElementsByClassName('BetterBoard-key');
            if (eachKeyElm && eachKeyElm.length > 0) {
              for (var ekIndex = 0; ekIndex < eachKeyElm.length; ekIndex++) {
                var keyElm = eachKeyElm[ekIndex];
                keyElm.addEventListener('click', function (e) {
                  e.preventDefault();

                  // check input max & maxlength
                  var maxLength = (input.getAttribute('maxlength') || '') * 1;
                  var max = (input.getAttribute('max') || '') * 1;
                  var liveValueLength = (input.value || '').length || 0;
                  if (maxLength > 0 && liveValueLength >= maxLength) { return false; }
                  if (max > 0 && liveValueLength >= max) { return false; }

                  // input trigger focus
                  input.focus();

                  // key's value
                  var keyValue = e.currentTarget.dataset.value || '';

                  // check capslock
                  if (isCapsLockActive) {
                    keyValue = keyValue.toLocaleUpperCase(keyboardLanguage);
                  } else {
                    keyValue = keyValue.toLocaleLowerCase(keyboardLanguage);
                  }

                  var keyValArr = keyValue.split('');
                  for (var keyValIndex = 0; keyValIndex < keyValArr.length; keyValIndex++) {
                    // update the selectionStart
                    theInputSelIndex = input.selectionStart || (input.value || '').length;

                    // add value by index
                    theInputValArray.splice(theInputSelIndex, 0, keyValArr[keyValIndex]);

                    // update input value
                    input.value = theInputValArray.join('');

                    // set next selection index
                    if (input.type !== 'number') {
                      input.setSelectionRange(theInputSelIndex + 1, theInputSelIndex + 1);
                    }

                    // input trigger change and input event for update the value
                    input.dispatchEvent(changeEvent);
                    input.dispatchEvent(inputEvent);
                  }
                }, false);
              }
            }
            // each key click listener: end

            // capslock key click listener: begin
            var capsLockKeyElm = window.document.getElementById(BetterBoardVirtualKeyboard.id).getElementsByClassName('BetterBoard-key-capslock')[0];
            if (capsLockKeyElm) {
              capsLockKeyElm.addEventListener('click', function (e) {
                e.preventDefault();
                // focus the input
                input.focus();

                if (e.currentTarget.classList.contains('capslock-active')) {
                  e.currentTarget.classList.remove('capslock-active');
                  BetterBoardVirtualKeyboard.classList.add('BetterBoard-tolowercase');
                  BetterBoardVirtualKeyboard.classList.remove('BetterBoard-touppercase');
                  isCapsLockActive = false;
                } else {
                  e.currentTarget.classList.add('capslock-active');
                  BetterBoardVirtualKeyboard.classList.remove('BetterBoard-tolowercase');
                  BetterBoardVirtualKeyboard.classList.add('BetterBoard-touppercase');
                  isCapsLockActive = true;
                }
              }, false);
            }
            // capslock key click listener: end

            // backspace key click listener: begin
            var backspaceKeyElm = window.document.getElementById(BetterBoardVirtualKeyboard.id).getElementsByClassName('BetterBoard-key-backspace')[0];
            if (backspaceKeyElm) {
              backspaceKeyElm.addEventListener('click', function (e) {
                e.preventDefault();

                // update the selectionStart
                theInputSelIndex = input.selectionStart || (input.value || '').length;

                // input trigger focus
                input.focus();

                // remove value by index
                theInputValArray.splice((theInputSelIndex - 1), 1);

                // update input value
                input.value = theInputValArray.join('');

                // set next selection index
                if (input.type !== 'number') {
                  input.setSelectionRange(theInputSelIndex - 1, theInputSelIndex - 1);
                }

                // input trigger change and input event for update the value
                input.dispatchEvent(changeEvent);
                input.dispatchEvent(inputEvent);
              }, false);
            }
            // backspace key click listener: end

            // specialcharacter key click listener: begin
            var specialCharacterKeyElm = window.document.getElementById(BetterBoardVirtualKeyboard.id).getElementsByClassName('BetterBoard-key-specialcharacter')[0];
            var specialCharactersRowElm = window.document.getElementById(BetterBoardVirtualKeyboard.id).getElementsByClassName('BetterBoard-row-specialcharacters')[0];
            // open
            if (specialCharacterKeyElm && specialCharactersRowElm) {
              specialCharacterKeyElm.addEventListener('click', function (e) {
                e.preventDefault();
                input.focus(); // focus the input
                if (e.currentTarget.classList.contains('specialcharacter-active')) {
                  e.currentTarget.classList.remove('specialcharacter-active');
                  specialCharactersRowElm.classList.remove('BetterBoard-specialcharacter-show');
                } else {
                  e.currentTarget.classList.add('specialcharacter-active');
                  specialCharactersRowElm.classList.add('BetterBoard-specialcharacter-show');
                }
              }, false);
            }
            // close
            var specialCharCloseElm = window.document.getElementById(BetterBoardVirtualKeyboard.id).getElementsByClassName('BetterBoard-specialcharacter-close')[0];
            if (specialCharCloseElm && specialCharacterKeyElm && specialCharactersRowElm) {
              specialCharCloseElm.addEventListener('click', function (e) {
                e.preventDefault();
                input.focus(); // focus the input
                specialCharacterKeyElm.classList.remove('specialcharacter-active');
                specialCharactersRowElm.classList.remove('BetterBoard-specialcharacter-show');
              }, false);
            }
            // specialcharacter key click listener: end

          };
          // keys click listeners: end

          // append keyboard: begin
          var keyboardElement = window.document.getElementById(BetterBoardVirtualKeyboard.id);
          if (!keyboardElement) {
            // append the keyboard to body and cache
            window.document.body.appendChild(BetterBoardVirtualKeyboard);
            keyboardElement = window.document.getElementById(BetterBoardVirtualKeyboard.id);

            // check window and keyboard height: begin
            var windowHeight = Math.round(window.innerHeight);
            var documentHeight = Math.round(window.document.body.clientHeight);
            var keyboardHeight = Math.round(window.document.getElementById(BetterBoardVirtualKeyboard.id).offsetHeight);
            if (keyboardHeight > Math.round((windowHeight / 3) * 2)) {
              var keyboardWrapper = window.document.getElementById(BetterBoardVirtualKeyboard.id).getElementsByClassName('BetterBoard-wrapper')[0];
              keyboardWrapper.style.maxHeight = Math.round((windowHeight / 5) * 4) + 'px';
              keyboardWrapper.style.overflowX = 'hidden';
              keyboardWrapper.style.overflowY = 'auto';
              keyboardWrapper.classList.add('BetterBoard-overflow');
            }
            // check window and keyboard height: end

            // body padding bottom || top: begin
            var isPlacementTop = keyboardPlacement === BetterBoardPlacements.Top;
            var inputTop = (isPlacementTop ? theInput.getBoundingClientRect().bottom : theInput.getBoundingClientRect().top) || 0;
            var docTop = window.document.documentElement.scrollTop || 0;
            var inputThreshold = isPlacementTop ? (theInput.clientHeight + 20) : 50;
            var theInputOffsetTop = Math.round(inputTop + docTop) - inputThreshold;
            var isPaddingTop = theInputOffsetTop < keyboardHeight;
            var isPaddingBottom = documentHeight <= (theInputOffsetTop + keyboardHeight);

            if (isPaddingTop || isPaddingBottom) {
              var styleElm = window.document.getElementById('BetterBoardBodyPadding');
              if (styleElm && styleElm.parentNode !== null) {
                styleElm.parentNode.removeChild(styleElm);
              }

              var style = '<style id="BetterBoardBodyPadding">.BetterBoard-body-padding {padding-' + (keyboardPlacement === BetterBoardPlacements.Bottom ? 'bottom' : 'top') + ':' + keyboardHeight + 'px !important;}</style>';
              var styleRange = window.document.createRange();
              styleRange.selectNode(window.document.head);
              var styleFragment = styleRange.createContextualFragment(style);
              window.document.head.appendChild(styleFragment);
              window.document.body.classList.add('BetterBoard-body-padding');
            }
            // body padding bottom || top: end

            // auto scroll: begin
            var autoScroll = opt.autoScroll === true;
            if (autoScroll) {
              var scrollBehavior = opt.cssAnimations === true ? 'smooth' : 'auto';
              var scrollDelay = opt.cssAnimations === true && typeof opt.cssAnimationsDuration === 'number' ? opt.cssAnimationsDuration : 0;
              var userAgent = navigator.userAgent.toLocaleLowerCase('en');
              var scrollTop = theInputOffsetTop - (isPlacementTop ? keyboardHeight : 0);
              if (userAgent.indexOf('edge') < 0 && userAgent.indexOf('.net4') < 0) {
                var scrollTimeout = setTimeout(function () {
                  window.scrollTo({ top: scrollTop, left: 0, behavior: scrollBehavior });
                  clearTimeout(scrollTimeout);
                }, scrollDelay);
              } else {
                window.document.documentElement.scrollTop = scrollTop;
              }
            }
            // auto scroll: end

            // keyboard keys click listeners
            keysClickListeners(theInput);

            // keyboard click outside listener: begin
            var docClickListener = function (e) {
              var docClickTimeout = setTimeout(function () {
                // check event target to remove keyboard: begin
                if (
                  e.target !== theInput &&
                  !BetterBoardEventTargetIsElementOrChilds(e, keyboardElement) &&
                  !e.target.classList.contains('BetterBoard-body-padding')
                ) {
                  // add remove class
                  BetterBoardVirtualKeyboard.classList.add(cssAnimationsStyle + '-remove');

                  // remove after the animation has been ended
                  var removeTimeout = setTimeout(function () {
                    if (keyboardElement.parentNode !== null) {
                      keyboardElement.parentNode.removeChild(keyboardElement); // remove keyboard
                      window.document.body.classList.remove('BetterBoard-body-padding'); // remove body padding class
                      window.document.removeEventListener('click', docClickListener); // remove document click listener
                    }
                    clearTimeout(removeTimeout);
                  }, cssAnimationsDuration);
                }
                // check event target to remove keyboard: end

                // toggle inputs: begin
                if (allInputs.indexOf(theInput) > -1) {
                  var toggleTimeout = setTimeout(function () {
                    e.target.blur();
                    e.target.focus();
                    clearTimeout(toggleTimeout);
                  }, cssAnimationsDuration);
                }
                // toggle inputs: end

                // clear doc click delay
                clearTimeout(docClickTimeout);
              }, cssAnimationsDuration);
            };
            window.document.addEventListener('click', docClickListener); // add document click listener
            // keyboard click outside listener: end
            // Close keyboard click event listener: begin
            var closeKeyboardClickListener = function () {
              // add remove class
              BetterBoardVirtualKeyboard.classList.add(cssAnimationsStyle + '-remove');

              // remove after the animation has been ended
              var removeTimeout = setTimeout(function () {
                if (keyboardElement.parentNode !== null) {
                  keyboardElement.parentNode.removeChild(keyboardElement); // remove keyboard
                  window.document.body.classList.remove('BetterBoard-body-padding'); // remove body padding class
                  window.document.removeEventListener('click', docClickListener); // remove document click listener
                }
                clearTimeout(removeTimeout);
              }, cssAnimationsDuration);
            }
            document.getElementById("BetterBoardCloseKeyboard").addEventListener('click', closeKeyboardClickListener);
          }
          // append keyboard: end
        };
        input.addEventListener('focus', inputFocusListener); // add input focus listener
        // each input focus listener: end

        // each input focusout listener: begin
        var inputFocusoutListener = function (e) {
          if (!allowMobileKeyboard && !getReadOnlyAttr) {
            e.currentTarget.removeAttribute('readonly');
          }
        };
        input.addEventListener('focusout', inputFocusoutListener); // add input focusout listener
        // each input focusout listener: end
      };
      // Functions: Create Keyboard and AppendTo: end

      // Functions: Get the Keys from JSON by XMLHttpRequest and AppendTo: begin
      var getKeysViaXmlHttpRequest = function (jsonUrl, input) {
        // check the protocol
        var protocolSchemes = ['http:', 'data:', 'chrome:', 'chrome-extension:', 'https:'];
        var protocol = (window.location || {}).protocol;
        if (protocolSchemes.indexOf(protocol) <= -1) {
          BetterBoardConsoleError('The Browser has blocked this request by CORS policy.');
          return false;
        }

        // if "BetterBoardCachedKeys" is undefined || null => send XMLHttpRequest
        if (!BetterBoardCachedKeys) {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open('GET', jsonUrl, true);
          xmlHttp.setRequestHeader('Content-type', 'application/json; charset=utf-8');
          xmlHttp.send();
          xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
              if (xmlHttp.status === 200) { // success
                var data = xmlHttp.responseText || []; // data
                if (typeof data === 'string' && data.length > 0) {
                  var parsedData = JSON.parse(data); // JSON parse data
                  if (BetterBoardCheckArrayOfObjects(parsedData)) {
                    BetterBoardCachedKeys = parsedData; // cache the keys
                    createKeyboardAndAppendTo(parsedData, input); // create the keyboard
                  } else {
                    BetterBoardConsoleError('Array of objects of the keys are not valid. \n\nVisit to learn more: ' + BetterBoardGithubUrl);
                    return false;
                  }
                }
              } else {
                BetterBoardConsoleError('XMLHttpRequest has been failed. Please check your URL path or protocol.');
                return false;
              }
            }
          };
        }
      };
      // Functions: Get the Keys from JSON by XMLHttpRequest and AppendTo: end

      // Step 3: Select the element(s): begin
      for (var kbIndex = 0; kbIndex < kbElements.length; kbIndex++) {
        // each element
        var eachElement = kbElements[kbIndex];

        // each element tag name
        var getTagName = ((eachElement || {}).tagName || '').toLocaleLowerCase('en');

        // if: an input or textarea element
        if (allowedElementTypes.indexOf(getTagName) > -1) {
          // if: has cached keys => create the keyboard by using cached keys
          if (BetterBoardCachedKeys) {
            createKeyboardAndAppendTo(BetterBoardCachedKeys, eachElement);
          }
          // else: try to get the keys from the JSON file via XmlHttpRequest
          else {
            getKeysViaXmlHttpRequest(opt.keysJsonUrl, eachElement);
          }
        }
        // else: other elements
        else {
          BetterBoardConsoleLog('You have to call the "BetterBoard" with an ID/ClassName of an Input or a TextArea element. Your element\'s tag name is: "' + getTagName + '". \n\nYou can visit the Documentation page to learn more. \n\nVisit: ' + BetterBoardGithubUrl);
        }
      }
      // Step 3: Select the element(s): end
    },
    closeKeyboard: function () {
      // add remove class
      BetterBoardVirtualKeyboard.classList.add(cssAnimationsStyle + '-remove');

      // remove after the animation has been ended
      var removeTimeout = setTimeout(function () {
        if (keyboardElement.parentNode !== null) {
          keyboardElement.parentNode.removeChild(keyboardElement); // remove keyboard
          window.document.body.classList.remove('BetterBoard-body-padding'); // remove body padding class
          window.document.removeEventListener('click', docClickListener); // remove document click listener
        }
        clearTimeout(removeTimeout);
      }, cssAnimationsDuration);
    }
  };

  return BetterBoard;
  // BetterBoard: end
});

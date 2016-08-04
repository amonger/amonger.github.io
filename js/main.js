/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/**\n * Reset some basic elements\n */\nbody, h1, h2, h3, h4, h5, h6,\np, blockquote, pre, hr,\ndl, dd, ol, ul, figure {\n  margin: 0;\n  padding: 0; }\n\n/**\n * Basic styling\n */\nbody {\n  font-family: Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: 300;\n  color: #111;\n  background-color: #fdfdfd;\n  -webkit-text-size-adjust: 100%; }\n\n/**\n * Set `margin-bottom` to maintain vertical rhythm\n */\nh1, h2, h3, h4, h5, h6,\np, blockquote, pre,\nul, ol, dl, figure,\n.highlight {\n  margin-bottom: 15px; }\n\n/**\n * Images\n */\nimg {\n  max-width: 100%;\n  vertical-align: middle; }\n\n/**\n * Figures\n */\nfigure > img {\n  display: block; }\n\nfigcaption {\n  font-size: 14px; }\n\n/**\n * Lists\n */\nul, ol {\n  margin-left: 30px; }\n\nli > ul,\nli > ol {\n  margin-bottom: 0; }\n\n/**\n * Headings\n */\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 300; }\n\n/**\n * Links\n */\na {\n  color: #2a7ae2;\n  text-decoration: none; }\n  a:visited {\n    color: #1756a9; }\n  a:hover {\n    color: #111;\n    text-decoration: underline; }\n\n/**\n * Blockquotes\n */\nblockquote {\n  color: #828282;\n  border-left: 4px solid #e8e8e8;\n  padding-left: 15px;\n  font-size: 18px;\n  letter-spacing: -1px;\n  font-style: italic; }\n  blockquote > :last-child {\n    margin-bottom: 0; }\n\n/**\n * Code formatting\n */\npre,\ncode {\n  font-size: 15px;\n  border: 1px solid #e8e8e8;\n  border-radius: 3px;\n  background-color: #eef; }\n\ncode {\n  padding: 1px 5px; }\n\npre {\n  padding: 8px 12px;\n  overflow-x: scroll; }\n  pre > code {\n    border: 0;\n    padding-right: 0;\n    padding-left: 0; }\n\n/**\n * Wrapper\n */\n.wrapper {\n  max-width: -webkit-calc(800px - (30px * 2));\n  max-width: calc(800px - (30px * 2));\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 30px;\n  padding-left: 30px; }\n  @media screen and (max-width: 800px) {\n    .wrapper {\n      max-width: -webkit-calc(800px - (30px));\n      max-width: calc(800px - (30px));\n      padding-right: 15px;\n      padding-left: 15px; } }\n\n/**\n * Clearfix\n */\n.wrapper:after, .footer-col-wrapper:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n/**\n * Icons\n */\n.icon > svg {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  vertical-align: middle; }\n  .icon > svg path {\n    fill: #828282; }\n\n/**\n * Site header\n */\n.site-header {\n  border-top: 5px solid #424242;\n  border-bottom: 1px solid #e8e8e8;\n  min-height: 56px;\n  position: relative; }\n\n.site-title {\n  font-size: 26px;\n  line-height: 56px;\n  letter-spacing: -1px;\n  margin-bottom: 0;\n  float: left; }\n  .site-title, .site-title:visited {\n    color: #424242; }\n\n.site-nav {\n  float: right;\n  line-height: 56px; }\n  .site-nav .menu-icon {\n    display: none; }\n  .site-nav .page-link {\n    color: #111;\n    line-height: 1.5; }\n    .site-nav .page-link:not(:first-child) {\n      margin-left: 20px; }\n  @media screen and (max-width: 600px) {\n    .site-nav {\n      position: absolute;\n      top: 9px;\n      right: 30px;\n      background-color: #fdfdfd;\n      border: 1px solid #e8e8e8;\n      border-radius: 5px;\n      text-align: right; }\n      .site-nav .menu-icon {\n        display: block;\n        float: right;\n        width: 36px;\n        height: 26px;\n        line-height: 0;\n        padding-top: 10px;\n        text-align: center; }\n        .site-nav .menu-icon > svg {\n          width: 18px;\n          height: 15px; }\n          .site-nav .menu-icon > svg path {\n            fill: #424242; }\n      .site-nav .trigger {\n        clear: both;\n        display: none; }\n      .site-nav:hover .trigger {\n        display: block;\n        padding-bottom: 5px; }\n      .site-nav .page-link {\n        display: block;\n        padding: 5px 10px; } }\n\n/**\n * Site footer\n */\n.site-footer {\n  border-top: 1px solid #e8e8e8;\n  padding: 30px 0; }\n\n.footer-heading {\n  font-size: 18px;\n  margin-bottom: 15px; }\n\n.contact-list,\n.social-media-list {\n  list-style: none;\n  margin-left: 0; }\n\n.footer-col-wrapper {\n  font-size: 15px;\n  color: #828282;\n  margin-left: -15px; }\n\n.footer-col {\n  float: left;\n  margin-bottom: 15px;\n  padding-left: 15px; }\n\n.footer-col-1 {\n  width: -webkit-calc(35% - (30px / 2));\n  width: calc(35% - (30px / 2)); }\n\n.footer-col-2 {\n  width: -webkit-calc(20% - (30px / 2));\n  width: calc(20% - (30px / 2)); }\n\n.footer-col-3 {\n  width: -webkit-calc(45% - (30px / 2));\n  width: calc(45% - (30px / 2)); }\n\n@media screen and (max-width: 800px) {\n  .footer-col-1,\n  .footer-col-2 {\n    width: -webkit-calc(50% - (30px / 2));\n    width: calc(50% - (30px / 2)); }\n  .footer-col-3 {\n    width: -webkit-calc(100% - (30px / 2));\n    width: calc(100% - (30px / 2)); } }\n\n@media screen and (max-width: 600px) {\n  .footer-col {\n    float: none;\n    width: -webkit-calc(100% - (30px / 2));\n    width: calc(100% - (30px / 2)); } }\n\n/**\n * Page content\n */\n.page-content {\n  padding: 30px 0; }\n\n.page-heading {\n  font-size: 20px; }\n\n.post-list {\n  margin-left: 0;\n  list-style: none; }\n  .post-list > li {\n    margin-bottom: 30px; }\n\n.post-meta {\n  font-size: 14px;\n  color: #828282; }\n\n.post-link {\n  display: block;\n  font-size: 24px; }\n\n/**\n * Posts\n */\n.post-header {\n  margin-bottom: 30px; }\n\n.post-title {\n  font-size: 42px;\n  letter-spacing: -1px;\n  line-height: 1; }\n  @media screen and (max-width: 800px) {\n    .post-title {\n      font-size: 36px; } }\n\n.post-content {\n  margin-bottom: 30px; }\n  .post-content h2 {\n    font-size: 32px; }\n    @media screen and (max-width: 800px) {\n      .post-content h2 {\n        font-size: 28px; } }\n  .post-content h3 {\n    font-size: 26px; }\n    @media screen and (max-width: 800px) {\n      .post-content h3 {\n        font-size: 22px; } }\n  .post-content h4 {\n    font-size: 20px; }\n    @media screen and (max-width: 800px) {\n      .post-content h4 {\n        font-size: 18px; } }\n\n/**\n * Syntax highlighting styles\n */\n.highlight {\n  background: #fff; }\n  .highlight .c {\n    color: #998;\n    font-style: italic; }\n  .highlight .err {\n    color: #a61717;\n    background-color: #e3d2d2; }\n  .highlight .k {\n    font-weight: bold; }\n  .highlight .o {\n    font-weight: bold; }\n  .highlight .cm {\n    color: #998;\n    font-style: italic; }\n  .highlight .cp {\n    color: #999;\n    font-weight: bold; }\n  .highlight .c1 {\n    color: #998;\n    font-style: italic; }\n  .highlight .cs {\n    color: #999;\n    font-weight: bold;\n    font-style: italic; }\n  .highlight .gd {\n    color: #000;\n    background-color: #fdd; }\n  .highlight .gd .x {\n    color: #000;\n    background-color: #faa; }\n  .highlight .ge {\n    font-style: italic; }\n  .highlight .gr {\n    color: #a00; }\n  .highlight .gh {\n    color: #999; }\n  .highlight .gi {\n    color: #000;\n    background-color: #dfd; }\n  .highlight .gi .x {\n    color: #000;\n    background-color: #afa; }\n  .highlight .go {\n    color: #888; }\n  .highlight .gp {\n    color: #555; }\n  .highlight .gs {\n    font-weight: bold; }\n  .highlight .gu {\n    color: #aaa; }\n  .highlight .gt {\n    color: #a00; }\n  .highlight .kc {\n    font-weight: bold; }\n  .highlight .kd {\n    font-weight: bold; }\n  .highlight .kp {\n    font-weight: bold; }\n  .highlight .kr {\n    font-weight: bold; }\n  .highlight .kt {\n    color: #458;\n    font-weight: bold; }\n  .highlight .m {\n    color: #099; }\n  .highlight .s {\n    color: #d14; }\n  .highlight .na {\n    color: #008080; }\n  .highlight .nb {\n    color: #0086B3; }\n  .highlight .nc {\n    color: #458;\n    font-weight: bold; }\n  .highlight .no {\n    color: #008080; }\n  .highlight .ni {\n    color: #800080; }\n  .highlight .ne {\n    color: #900;\n    font-weight: bold; }\n  .highlight .nf {\n    color: #900;\n    font-weight: bold; }\n  .highlight .nn {\n    color: #555; }\n  .highlight .nt {\n    color: #000080; }\n  .highlight .nv {\n    color: #008080; }\n  .highlight .ow {\n    font-weight: bold; }\n  .highlight .w {\n    color: #bbb; }\n  .highlight .mf {\n    color: #099; }\n  .highlight .mh {\n    color: #099; }\n  .highlight .mi {\n    color: #099; }\n  .highlight .mo {\n    color: #099; }\n  .highlight .sb {\n    color: #d14; }\n  .highlight .sc {\n    color: #d14; }\n  .highlight .sd {\n    color: #d14; }\n  .highlight .s2 {\n    color: #d14; }\n  .highlight .se {\n    color: #d14; }\n  .highlight .sh {\n    color: #d14; }\n  .highlight .si {\n    color: #d14; }\n  .highlight .sx {\n    color: #d14; }\n  .highlight .sr {\n    color: #009926; }\n  .highlight .s1 {\n    color: #d14; }\n  .highlight .ss {\n    color: #990073; }\n  .highlight .bp {\n    color: #999; }\n  .highlight .vc {\n    color: #008080; }\n  .highlight .vg {\n    color: #008080; }\n  .highlight .vi {\n    color: #008080; }\n  .highlight .il {\n    color: #099; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);
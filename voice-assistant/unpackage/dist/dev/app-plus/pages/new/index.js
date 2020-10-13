"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/main.js?{"page":"pages%2Fnew%2Findex"} ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_new_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/new/index.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_new_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_new_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/new/index'\n        _pages_new_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_new_index_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9uZXcvaW5kZXgubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9uZXcvaW5kZXgnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!******************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/main.js?{"type":"appStyle"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('~@/static/uni.ttf') format('truetype')"
    },
    {
      "fontFamily": "iconfont",
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2')"
    }
  ],
  "uni-flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "uni-flex-item": {
    "flex": 1
  },
  "uni-row": {
    "flexDirection": "row"
  },
  "uni-column": {
    "flexDirection": "column"
  },
  "uni-link": {
    "color": "#576B95",
    "fontSize": "26rpx"
  },
  "uni-center": {
    "textAlign": "center"
  },
  "uni-inline-item": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-page-head": {
    "paddingTop": "35rpx",
    "paddingRight": "35rpx",
    "paddingBottom": "35rpx",
    "paddingLeft": "35rpx",
    "textAlign": "center"
  },
  "uni-page-head-title": {
    "display": "inline-block",
    "paddingTop": 0,
    "paddingRight": "40rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "fontSize": "30rpx",
    "height": "88rpx",
    "lineHeight": "88rpx",
    "color": "#BEBEBE",
    "boxSizing": "border-box",
    "borderBottom": "2rpx solid #D8D8D8"
  },
  "uni-page-body": {
    "width": 100,
    "flexGrow": 1,
    "overflowX": "hidden"
  },
  "uni-padding-wrap": {
    "width": "690rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-word": {
    "textAlign": "center",
    "paddingTop": "200rpx",
    "paddingRight": "100rpx",
    "paddingBottom": "200rpx",
    "paddingLeft": "100rpx"
  },
  "uni-title": {
    "fontSize": "30rpx",
    "fontWeight": "500",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0,
    "lineHeight": 1.5
  },
  "uni-text": {
    "fontSize": "28rpx"
  },
  "uni-text-gray": {
    "color": "#cccccc"
  },
  "uni-text-small": {
    "fontSize": "24rpx"
  },
  "uni-common-mb": {
    "marginBottom": "30rpx"
  },
  "uni-common-pb": {
    "paddingBottom": "30rpx"
  },
  "uni-common-pl": {
    "paddingLeft": "30rpx"
  },
  "uni-common-mt": {
    "marginTop": "30rpx"
  },
  "uni-bg-red": {
    "background": "#F76260",
    "color": "#FFFFFF"
  },
  "uni-bg-green": {
    "background": "#09BB07",
    "color": "#FFFFFF"
  },
  "uni-bg-blue": {
    "background": "#007AFF",
    "color": "#FFFFFF"
  },
  "uni-h1": {
    "fontSize": "80rpx",
    "fontWeight": "700"
  },
  "uni-h2": {
    "fontSize": "60rpx",
    "fontWeight": "700"
  },
  "uni-h3": {
    "fontSize": "48rpx",
    "fontWeight": "700"
  },
  "uni-h4": {
    "fontSize": "36rpx",
    "fontWeight": "700"
  },
  "uni-h5": {
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-h6": {
    "fontSize": "24rpx",
    "color": "#8f8f94"
  },
  "uni-bold": {
    "fontWeight": "bold"
  },
  "uni-ellipsis": {
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "uni-btn-v": {
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-form-item": {
    "display": "flex",
    "width": 100,
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0
  },
  "uni-label": {
    "width": "210rpx",
    "wordWrap": "break-word",
    "wordBreak": "break-all",
    "textIndent": "20rpx"
  },
  "uni-input": {
    "height": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "25rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "25rpx",
    "lineHeight": "50rpx",
    "fontSize": "28rpx",
    "background": "#FFF",
    "flex": 1
  },
  "uni-loadmore": {
    "height": "80rpx",
    "lineHeight": "80rpx",
    "textAlign": "center",
    "paddingBottom": "30rpx"
  },
  "uni-badge": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-default": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge-green": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-yellow": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-red": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-purple": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-badge-royal": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-collapse-content": {
    "height": 0,
    "width": 100,
    "overflow": "hidden"
  },
  "uni-card": {
    "background": "#fff",
    "borderRadius": "8rpx",
    "marginTop": "20rpx",
    "marginRight": 0,
    "marginBottom": "20rpx",
    "marginLeft": 0,
    "position": "relative",
    "boxShadow": "0 2rpx 4rpx rgba(0, 0, 0, .3)"
  },
  "uni-card-content": {
    "fontSize": "30rpx"
  },
  "uni-card-content-inner": {
    "position": "relative",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "uni-card-footer": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "color": "#6d6d72",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-card-header": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50rpx",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "36rpx",
    "position:before:after": "absolute",
    "top:before:after": 0,
    "right:before:after": 0,
    "left:before:after": 0,
    "height:before:after": "2rpx",
    "content:before:after": "''",
    "WebkitTransform:before:after": "scaleY(.5)",
    "transform:before:after": "scaleY(.5)",
    "backgroundColor:before:after": "#c8c7cc",
    "bottom:after": 0
  },
  "uni-card-media": {
    "justifyContent": "flex-start"
  },
  "uni-card-media-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-card-media-body": {
    "height": "84rpx",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "uni-card-media-text-top": {
    "lineHeight": "36rpx",
    "fontSize": "34rpx"
  },
  "uni-card-media-text-bottom": {
    "lineHeight": "30rpx",
    "fontSize": "28rpx",
    "color": "#8f8f94"
  },
  "uni-card-link": {
    "color": "#007AFF"
  },
  "uni-list": {
    "backgroundColor": "#FFFFFF",
    "position": "relative",
    "width": 100,
    "display": "flex",
    "flexDirection": "column",
    "position:after": "absolute",
    "zIndex:after": 10,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "1",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc",
    "position::before": "absolute",
    "zIndex::before": 10,
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc"
  },
  "uni-list-cell": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position::after": "absolute",
    "zIndex::after": 3,
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "30rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "uni-list-cell-pd": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-left": {
    "whiteSpace": "nowrap",
    "fontSize": "28rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-db": {
    "flex": 1
  },
  "uni-list-cell-right": {
    "flex": 1
  },
  "uni-list-cell-divider": {
    "position": "relative",
    "display": "flex",
    "color": "#999999",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "0rpx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-navigate": {
    "fontSize": "30rpx",
    "paddingTop": "22rpx",
    "paddingRight": "36rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "lineHeight": "48rpx",
    "position": "relative",
    "display": "flex",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-navigate-badge": {
    "paddingRight": "50rpx"
  },
  "uni-triplex-row": {
    "display": "flex",
    "flex": 1,
    "width": 100,
    "boxSizing": "border-box",
    "flexDirection": "row",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx"
  },
  "uni-triplex-right": {
    "display": "flex",
    "flexDirection": "column",
    "width": 16,
    "textAlign": "right"
  },
  "uni-triplex-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": 84
  },
  "uni-media-list": {
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "boxSizing": "border-box",
    "display": "flex",
    "width": 100,
    "flexDirection": "row"
  },
  "uni-pull-right": {
    "flexDirection": "row-reverse"
  },
  "uni-media-list-logo": {
    "height": "84rpx",
    "width": "84rpx",
    "marginRight": "20rpx"
  },
  "uni-media-list-body": {
    "height": "84rpx",
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden"
  },
  "uni-media-list-text-top": {
    "width": 100,
    "lineHeight": "36rpx",
    "fontSize": "30rpx"
  },
  "uni-media-list-text-bottom": {
    "width": 100,
    "lineHeight": "30rpx",
    "fontSize": "26rpx",
    "color": "#8f8f94"
  },
  "uni-grid-9": {
    "background": "#f2f2f2",
    "width": "750rpx",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderTop": "2rpx solid #eee"
  },
  "uni-grid-9-item": {
    "width": "250rpx",
    "height": "200rpx",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottom": "2rpx solid",
    "borderRight": "2rpx solid",
    "borderColor": "#eeeeee",
    "boxSizing": "border-box"
  },
  "no-border-right": {
    "borderRight": "none"
  },
  "uni-grid-9-image": {
    "width": "100rpx",
    "height": "100rpx"
  },
  "uni-grid-9-text": {
    "width": "250rpx",
    "lineHeight": "4rpx",
    "height": "40rpx",
    "textAlign": "center",
    "fontSize": "30rpx"
  },
  "uni-grid-9-item-hover": {
    "background": "rgba(0, 0, 0, 0.1)"
  },
  "uni-uploader": {
    "flex": 1,
    "flexDirection": "column"
  },
  "uni-uploader-head": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "uni-uploader-info": {
    "color": "#B2B2B2"
  },
  "uni-uploader-body": {
    "marginTop": "16rpx"
  },
  "uni-uploader__files": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "uni-uploader__file": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__img": {
    "display": "block",
    "width": "210rpx",
    "height": "210rpx"
  },
  "uni-uploader__input-box": {
    "position": "relative",
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx",
    "width": "208rpx",
    "height": "208rpx",
    "border": "2rpx solid #D9D9D9",
    "content:before": "\" \"",
    "position:before": "absolute",
    "top:before": 50,
    "left:before": 50,
    "WebkitTransform:before": "translate(-50%, -50%)",
    "transform:before": "translate(-50%, -50%)",
    "backgroundColor:before": "#D9D9D9",
    "content:before:after": "\" \"",
    "position:before:after": "absolute",
    "top:before:after": 50,
    "left:before:after": 50,
    "WebkitTransform:before:after": "translate(-50%, -50%)",
    "transform:before:after": "translate(-50%, -50%)",
    "backgroundColor:before:after": "#D9D9D9",
    "width:before": "4rpx",
    "height:before": "79rpx",
    "width:after": "79rpx",
    "height:after": "4rpx",
    "borderColor:active": "#999999",
    "backgroundColor:active:before": "#999999",
    "backgroundColor:active:before:active:after": "#999999"
  },
  "uni-uploader__input": {
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "left": 0,
    "width": 100,
    "height": 100,
    "opacity": 0
  },
  "feedback-title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "color": "#8f8f94",
    "fontSize": "28rpx"
  },
  "feedback-quick": {
    "position": "relative",
    "paddingRight": "40rpx",
    "fontFamily:after": "uniicons",
    "fontSize:after": "40rpx",
    "content:after": "'\\e581'",
    "position:after": "absolute",
    "right:after": 0,
    "top:after": 50,
    "color:after": "#bbbbbb",
    "WebkitTransform:after": "translateY(-50%)",
    "transform:after": "translateY(-50%)"
  },
  "feedback-body": {
    "background": "#fff"
  },
  "feedback-textare": {
    "height": "200rpx",
    "fontSize": "34rpx",
    "lineHeight": "50rpx",
    "width": 100,
    "boxSizing": "border-box",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "feedback-input": {
    "fontSize": "34rpx",
    "height": "50rpx",
    "minHeight": "50rpx",
    "paddingTop": "15rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "15rpx",
    "paddingLeft": "20rpx",
    "lineHeight": "50rpx"
  },
  "feedback-uploader": {
    "paddingTop": "22rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "20rpx"
  },
  "feedback-star": {
    "fontFamily": "uniicons",
    "fontSize": "40rpx",
    "marginLeft": "6rpx",
    "content:after": "'\\e408'"
  },
  "feedback-star-view": {
    "marginLeft": "20rpx"
  },
  "feedback-submit": {
    "background": "#007AFF",
    "color": "#FFFFFF",
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "uni-input-group": {
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "border": 0,
    "backgroundColor": "#ffffff",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2rpx",
    "content:before": "''",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "2rpx",
    "content:after": "''",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-input-row": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "28rpx",
    "paddingTop": "22rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "22rpx",
    "paddingLeft": "30rpx",
    "justifyContent": "space-between"
  },
  "uni-textarea": {
    "width": 100,
    "background": "#FFF"
  },
  "uni-tab-bar": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "height": 100
  },
  "uni-swiper-tab": {
    "width": 100,
    "whiteSpace": "nowrap",
    "lineHeight": "100rpx",
    "height": "100rpx",
    "borderBottom": "1px solid #c8c7cc"
  },
  "swiper-tab-list": {
    "fontSize": "30rpx",
    "width": "150rpx",
    "display": "inline-block",
    "textAlign": "center",
    "color": "#555555"
  },
  "uni-tab-bar-loading": {
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "20rpx",
    "paddingLeft": 0
  },
  "uni-comment": {
    "paddingTop": "5rpx",
    "paddingRight": 0,
    "paddingBottom": "5rpx",
    "paddingLeft": 0,
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  "uni-comment-list": {
    "flexWrap": "nowrap",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0,
    "width": 100,
    "display": "flex"
  },
  "uni-comment-face": {
    "width": "70rpx",
    "height": "70rpx",
    "borderRadius": 100,
    "marginRight": "20rpx",
    "flexShrink": 0,
    "overflow": "hidden"
  },
  "uni-comment-body": {
    "width": 100
  },
  "uni-comment-top": {
    "lineHeight": 1.5,
    "justifyContent": "space-between"
  },
  "uni-comment-date": {
    "lineHeight": "38rpx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "display": "flex",
    "flexGrow": 1
  },
  "uni-comment-content": {
    "lineHeight": 1.6,
    "fontSize": "28rpx",
    "paddingTop": "8rpx",
    "paddingRight": 0,
    "paddingBottom": "8rpx",
    "paddingLeft": 0
  },
  "uni-comment-replay-btn": {
    "background": "#FFF",
    "fontSize": "24rpx",
    "lineHeight": "28rpx",
    "paddingTop": "5rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "20rpx",
    "borderRadius": "30rpx",
    "color": "#333333",
    "marginTop": 0,
    "marginRight": "10rpx",
    "marginBottom": 0,
    "marginLeft": "10rpx"
  },
  "uni-swiper-msg": {
    "width": 100,
    "paddingTop": "12rpx",
    "paddingRight": 0,
    "paddingBottom": "12rpx",
    "paddingLeft": 0,
    "flexWrap": "nowrap",
    "display": "flex"
  },
  "uni-swiper-msg-icon": {
    "width": "50rpx",
    "marginRight": "20rpx"
  },
  "uni-product-list": {
    "display": "flex",
    "width": 100,
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "uni-product": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx",
    "display": "flex",
    "flexDirection": "column"
  },
  "image-view": {
    "height": "330rpx",
    "width": "330rpx",
    "marginTop": "12rpx",
    "marginRight": 0,
    "marginBottom": "12rpx",
    "marginLeft": 0
  },
  "uni-product-image": {
    "height": "330rpx",
    "width": "330rpx"
  },
  "uni-product-title": {
    "width": "300rpx",
    "wordBreak": "break-all",
    "display": "-webkit-box",
    "overflow": "hidden",
    "lineHeight": 1.5,
    "textOverflow": "ellipsis",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2
  },
  "uni-product-price": {
    "marginTop": "10rpx",
    "fontSize": "28rpx",
    "lineHeight": 1.5,
    "position": "relative"
  },
  "uni-product-price-original": {
    "color": "#e80080"
  },
  "uni-product-price-favour": {
    "color": "#888888",
    "textDecoration": "line-through",
    "marginLeft": "10rpx"
  },
  "uni-product-tip": {
    "position": "absolute",
    "right": "10rpx",
    "backgroundColor": "#ff3333",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "10rpx",
    "borderRadius": "5rpx"
  },
  "uni-timeline": {
    "marginTop": "35rpx",
    "marginRight": 0,
    "marginBottom": "35rpx",
    "marginLeft": 0,
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "uni-timeline-item": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "paddingBottom": "20rpx",
    "boxSizing": "border-box",
    "overflow": "hidden"
  },
  "uni-timeline-item-divider": {
    "position::before": "absolute",
    "left::before": "15rpx",
    "width::before": "1rpx",
    "height::before": 100,
    "content::before": "''",
    "background::before": "inherit",
    "position::before::after": "absolute",
    "left::before::after": "15rpx",
    "width::before::after": "1rpx",
    "height::before::after": 100,
    "content::before::after": "''",
    "background::before::after": "inherit",
    "bottom::before": 100,
    "top::after": 100
  },
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "uni-icon-contact": {
    "content:before": "'\\e100'"
  },
  "uni-icon-person": {
    "content:before": "'\\e101'"
  },
  "uni-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "uni-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "uni-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "uni-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "uni-icon-phone": {
    "content:before": "'\\e200'"
  },
  "uni-icon-email": {
    "content:before": "'\\e201'"
  },
  "uni-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "uni-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "uni-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "uni-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "uni-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "uni-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "uni-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "uni-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "uni-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "uni-icon-chat": {
    "content:before": "'\\e263'"
  },
  "uni-icon-qq": {
    "content:before": "'\\e264'"
  },
  "uni-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "uni-icon-camera": {
    "content:before": "'\\e301'"
  },
  "uni-icon-mic": {
    "content:before": "'\\e302'"
  },
  "uni-icon-location": {
    "content:before": "'\\e303'"
  },
  "uni-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "uni-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "uni-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "uni-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "uni-icon-image": {
    "content:before": "'\\e363'"
  },
  "uni-icon-map": {
    "content:before": "'\\e364'"
  },
  "uni-icon-compose": {
    "content:before": "'\\e400'"
  },
  "uni-icon-trash": {
    "content:before": "'\\e401'"
  },
  "uni-icon-upload": {
    "content:before": "'\\e402'"
  },
  "uni-icon-download": {
    "content:before": "'\\e403'"
  },
  "uni-icon-close": {
    "content:before": "'\\e404'"
  },
  "uni-icon-redo": {
    "content:before": "'\\e405'"
  },
  "uni-icon-undo": {
    "content:before": "'\\e406'"
  },
  "uni-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "uni-icon-star": {
    "content:before": "'\\e408'"
  },
  "uni-icon-plus": {
    "content:before": "'\\e409'"
  },
  "uni-icon-minus": {
    "content:before": "'\\e410'"
  },
  "uni-icon-circle": {
    "content:before": "'\\e411'"
  },
  "uni-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "uni-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "uni-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "uni-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "uni-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "uni-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "uni-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "uni-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "uni-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "uni-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "uni-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "uni-icon-reload": {
    "content:before": "'\\e462'"
  },
  "uni-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "uni-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "uni-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "uni-icon-search": {
    "content:before": "'\\e466'"
  },
  "uni-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "uni-icon-forward": {
    "content:before": "'\\e470'"
  },
  "uni-icon-back": {
    "content:before": "'\\e471'"
  },
  "uni-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "uni-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "uni-icon-home": {
    "content:before": "'\\e500'"
  },
  "uni-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "uni-icon-gear": {
    "content:before": "'\\e502'"
  },
  "uni-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "uni-icon-info": {
    "content:before": "'\\e504'"
  },
  "uni-icon-help": {
    "content:before": "'\\e505'"
  },
  "uni-icon-locked": {
    "content:before": "'\\e506'"
  },
  "uni-icon-more": {
    "content:before": "'\\e507'"
  },
  "uni-icon-flag": {
    "content:before": "'\\e508'"
  },
  "uni-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "uni-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "uni-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "uni-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "uni-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "uni-icon-settings": {
    "content:before": "'\\e560'"
  },
  "uni-icon-list": {
    "content:before": "'\\e562'"
  },
  "uni-icon-bars": {
    "content:before": "'\\e563'"
  },
  "uni-icon-loop": {
    "content:before": "'\\e565'"
  },
  "uni-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "uni-icon-eye": {
    "content:before": "'\\e568'"
  },
  "uni-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "uni-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "uni-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "uni-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "uni-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "uni-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "uni-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "uni-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "uni-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "uni-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "uni-divider": {
    "height": "110rpx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative"
  },
  "uni-divider__content": {
    "fontSize": "28rpx",
    "color": "#999999",
    "paddingTop": 0,
    "paddingRight": "20rpx",
    "paddingBottom": 0,
    "paddingLeft": "20rpx",
    "position": "relative",
    "zIndex": 101,
    "background": "#F4F5F6"
  },
  "uni-divider__line": {
    "backgroundColor": "#CCCCCC",
    "height": "1",
    "width": 100,
    "position": "absolute",
    "zIndex": 100,
    "top": 50,
    "left": 0,
    "transform": "translateY(50%)"
  },
  "iconfont": {
    "fontFamily": "\"iconfont\"",
    "fontSize": "16",
    "fontStyle": "normal",
    "WebkitFontSmoothing": "antialiased",
    "MozOsxFontSmoothing": "grayscale"
  },
  "iconback": {
    "content:before": "\"\\e6ef\""
  },
  "iconless": {
    "content:before": "\"\\e6f2\""
  },
  "iconmoreunfold": {
    "content:before": "\"\\e6f4\""
  },
  "iconmore1": {
    "content:before": "\"\\e6f5\""
  },
  "iconkefufenxiermaikefu": {
    "content:before": "\"\\e88d\""
  },
  "iconkefuerji": {
    "content:before": "\"\\e6f6\""
  },
  "iconkefu2": {
    "content:before": "\"\\e6f7\""
  },
  "icongouwuche2": {
    "content:before": "\"\\e6eb\""
  },
  "icongouwuche6": {
    "content:before": "\"\\e6f0\""
  },
  "iconqunfengyouhuiquan": {
    "content:before": "\"\\e7cc\""
  },
  "iconqunfengzuji": {
    "content:before": "\"\\e7fd\""
  },
  "iconhuo": {
    "content:before": "\"\\e6c8\""
  },
  "icondingdan1": {
    "content:before": "\"\\e6ce\""
  },
  "iconyouhuiquan-xuanzhong": {
    "content:before": "\"\\e6cf\""
  },
  "icontubiaozhizuomoban": {
    "content:before": "\"\\e6d0\""
  },
  "iconflag": {
    "content:before": "\"\\e7a6\""
  },
  "iconguanggaotongji": {
    "content:before": "\"\\e954\""
  },
  "iconxiadan": {
    "content:before": "\"\\e6d1\""
  },
  "iconlijixiadan": {
    "content:before": "\"\\e6d2\""
  },
  "iconkefu1": {
    "content:before": "\"\\e6dc\""
  },
  "iconzhiding": {
    "content:before": "\"\\e6dd\""
  },
  "icontuan": {
    "content:before": "\"\\e6df\""
  },
  "icongouwuche1": {
    "content:before": "\"\\e6e0\""
  },
  "iconyouhuiquan-sousuo": {
    "content:before": "\"\\e6e1\""
  },
  "iconHOT-copy": {
    "content:before": "\"\\e88a\""
  },
  "iconweixinzhifu3": {
    "content:before": "\"\\e6e2\""
  },
  "iconsaoma11": {
    "content:before": "\"\\e6e6\""
  },
  "iconloading1": {
    "content:before": "\"\\e891\""
  },
  "icongouwuchex": {
    "content:before": "\"\\e6e7\""
  },
  "icongouwuchetubiao": {
    "content:before": "\"\\e6e8\""
  },
  "iconremen": {
    "content:before": "\"\\e8c9\""
  },
  "icongouwuche4": {
    "content:before": "\"\\e6e9\""
  },
  "icongouwuche5": {
    "content:before": "\"\\e6ea\""
  },
  "iconyouhuiquan_xuanzhong": {
    "content:before": "\"\\e70a\""
  },
  "iconchexiao1": {
    "content:before": "\"\\e6aa\""
  },
  "iconcuowu": {
    "content:before": "\"\\e6ab\""
  },
  "iconzhengque": {
    "content:before": "\"\\e6ad\""
  },
  "iconsuoding": {
    "content:before": "\"\\e6ae\""
  },
  "iconkaishi": {
    "content:before": "\"\\e6b1\""
  },
  "iconwode1": {
    "content:before": "\"\\e6b3\""
  },
  "icontianjia": {
    "content:before": "\"\\e6b5\""
  },
  "iconguanzhu1": {
    "content:before": "\"\\e6b6\""
  },
  "iconzhuyi": {
    "content:before": "\"\\e6ba\""
  },
  "iconjine": {
    "content:before": "\"\\e6be\""
  },
  "iconyiwen": {
    "content:before": "\"\\e6c1\""
  },
  "iconzanting": {
    "content:before": "\"\\e6c4\""
  },
  "iconsaoma1": {
    "content:before": "\"\\e6c6\""
  },
  "iconfenlei1": {
    "content:before": "\"\\e6c7\""
  },
  "iconicon_shakehands": {
    "content:before": "\"\\ebc7\""
  },
  "iconicon_video": {
    "content:before": "\"\\ebc8\""
  },
  "iconicon_task_done": {
    "content:before": "\"\\ebc9\""
  },
  "iconicon_synergy": {
    "content:before": "\"\\ebca\""
  },
  "iconicon_workfile_line": {
    "content:before": "\"\\ebcb\""
  },
  "iconicon_addresslist_fil": {
    "content:before": "\"\\ebcc\""
  },
  "iconicon_addressbook_fil": {
    "content:before": "\"\\ebcd\""
  },
  "iconicon_calendar_fill": {
    "content:before": "\"\\ebce\""
  },
  "iconicon_delete_fill": {
    "content:before": "\"\\ebcf\""
  },
  "iconicon_doc_fill": {
    "content:before": "\"\\ebd0\""
  },
  "iconicon_camera_fill": {
    "content:before": "\"\\ebd1\""
  },
  "iconicon_certification_f": {
    "content:before": "\"\\ebd2\""
  },
  "iconicon_likegood_fill": {
    "content:before": "\"\\ebd3\""
  },
  "iconicon_gift_fill": {
    "content:before": "\"\\ebd4\""
  },
  "iconicon_message_fill": {
    "content:before": "\"\\ebd5\""
  },
  "iconicon_newapplication_": {
    "content:before": "\"\\ebd6\""
  },
  "iconicon_people_fill": {
    "content:before": "\"\\ebd7\""
  },
  "iconicon_photo_fill": {
    "content:before": "\"\\ebd8\""
  },
  "iconicon_roundreduce_fil": {
    "content:before": "\"\\ebd9\""
  },
  "iconicon_redpacket_fill": {
    "content:before": "\"\\ebda\""
  },
  "iconicon_replieslist": {
    "content:before": "\"\\ebdb\""
  },
  "iconicon_roundadd_fill": {
    "content:before": "\"\\ebdc\""
  },
  "iconicon_study_fill": {
    "content:before": "\"\\ebdd\""
  },
  "iconicon_setting_fill": {
    "content:before": "\"\\ebde\""
  },
  "iconicon_shakehands_fill": {
    "content:before": "\"\\ebdf\""
  },
  "iconicon_work_fill": {
    "content:before": "\"\\ebe0\""
  },
  "iconicon_trashcan": {
    "content:before": "\"\\ebe1\""
  },
  "iconicon_roundclose_fill": {
    "content:before": "\"\\ebe2\""
  },
  "iconicon_add": {
    "content:before": "\"\\eb8f\""
  },
  "iconicon_addmessage": {
    "content:before": "\"\\eb90\""
  },
  "iconicon_addresslist": {
    "content:before": "\"\\eb91\""
  },
  "iconicon_affiliations_li": {
    "content:before": "\"\\eb92\""
  },
  "iconicon_addperson": {
    "content:before": "\"\\eb93\""
  },
  "iconicon_boss": {
    "content:before": "\"\\eb94\""
  },
  "iconicon_addressbook": {
    "content:before": "\"\\eb95\""
  },
  "iconicon_calendar": {
    "content:before": "\"\\eb96\""
  },
  "iconicon_attestation": {
    "content:before": "\"\\eb97\""
  },
  "iconicon_camera": {
    "content:before": "\"\\eb98\""
  },
  "iconicon_certificate_fil": {
    "content:before": "\"\\eb99\""
  },
  "iconicon_coinpurse_line": {
    "content:before": "\"\\eb9a\""
  },
  "iconicon_collect": {
    "content:before": "\"\\eb9b\""
  },
  "iconicon_compile": {
    "content:before": "\"\\eb9c\""
  },
  "iconicon_details": {
    "content:before": "\"\\eb9d\""
  },
  "iconicon_community_line": {
    "content:before": "\"\\eb9e\""
  },
  "iconicon_discovery": {
    "content:before": "\"\\eb9f\""
  },
  "iconicon_delete": {
    "content:before": "\"\\eba0\""
  },
  "iconicon_dispose": {
    "content:before": "\"\\eba1\""
  },
  "iconicon_doc": {
    "content:before": "\"\\eba2\""
  },
  "iconicon_gift": {
    "content:before": "\"\\eba3\""
  },
  "iconicon_file": {
    "content:before": "\"\\eba4\""
  },
  "iconicon_GPS": {
    "content:before": "\"\\eba5\""
  },
  "iconicon_im_more": {
    "content:before": "\"\\eba6\""
  },
  "iconicon_horn": {
    "content:before": "\"\\eba7\""
  },
  "iconicon_im_face": {
    "content:before": "\"\\eba8\""
  },
  "iconicon_invite": {
    "content:before": "\"\\eba9\""
  },
  "iconicon_likegood": {
    "content:before": "\"\\ebaa\""
  },
  "iconicon_index_line": {
    "content:before": "\"\\ebab\""
  },
  "iconicon_link": {
    "content:before": "\"\\ebac\""
  },
  "iconicon_mobilephone": {
    "content:before": "\"\\ebad\""
  },
  "iconicon_dmail": {
    "content:before": "\"\\ebae\""
  },
  "iconicon_message": {
    "content:before": "\"\\ebaf\""
  },
  "iconicon_more": {
    "content:before": "\"\\ebb0\""
  },
  "iconicon_notice": {
    "content:before": "\"\\ebb1\""
  },
  "iconicon_photo": {
    "content:before": "\"\\ebb2\""
  },
  "iconicon_medal": {
    "content:before": "\"\\ebb3\""
  },
  "iconicon_roundclose": {
    "content:before": "\"\\ebb4\""
  },
  "iconicon_roundreduce": {
    "content:before": "\"\\ebb5\""
  },
  "iconicon_QRcode": {
    "content:before": "\"\\ebb6\""
  },
  "iconicon_roundadd": {
    "content:before": "\"\\ebb7\""
  },
  "iconicon_refresh": {
    "content:before": "\"\\ebb8\""
  },
  "iconicon_search": {
    "content:before": "\"\\ebb9\""
  },
  "iconicon_scan": {
    "content:before": "\"\\ebba\""
  },
  "iconicon_secret": {
    "content:before": "\"\\ebbb\""
  },
  "iconicon_share": {
    "content:before": "\"\\ebbc\""
  },
  "iconicon_task": {
    "content:before": "\"\\ebbd\""
  },
  "iconicon_threeline_fill": {
    "content:before": "\"\\ebbe\""
  },
  "iconicon_study": {
    "content:before": "\"\\ebbf\""
  },
  "iconicon_wechat": {
    "content:before": "\"\\ebc0\""
  },
  "iconicon_sport": {
    "content:before": "\"\\ebc1\""
  },
  "iconicon_work": {
    "content:before": "\"\\ebc2\""
  },
  "iconicon_workmore": {
    "content:before": "\"\\ebc3\""
  },
  "iconicon_safety": {
    "content:before": "\"\\ebc4\""
  },
  "iconicon_workset": {
    "content:before": "\"\\ebc5\""
  },
  "iconicon_shield": {
    "content:before": "\"\\ebc6\""
  },
  "iconjiahao": {
    "content:before": "\"\\e72b\""
  },
  "iconjiahao1": {
    "content:before": "\"\\e72c\""
  },
  "iconjiahao2fill": {
    "content:before": "\"\\e72d\""
  },
  "iconjianhao": {
    "content:before": "\"\\e72e\""
  },
  "icontishifill": {
    "content:before": "\"\\e72f\""
  },
  "icontishi": {
    "content:before": "\"\\e734\""
  },
  "iconwenhaofill": {
    "content:before": "\"\\e737\""
  },
  "iconwenhao": {
    "content:before": "\"\\e739\""
  },
  "iconxuanze": {
    "content:before": "\"\\e73b\""
  },
  "iconyuanxingweixuanzhong": {
    "content:before": "\"\\e73e\""
  },
  "iconyuanxingxuanzhongfill": {
    "content:before": "\"\\e73f\""
  },
  "iconyuanxingxuanzhong": {
    "content:before": "\"\\e742\""
  },
  "iconbiaoxingfill": {
    "content:before": "\"\\e743\""
  },
  "iconbiaoxing": {
    "content:before": "\"\\e744\""
  },
  "iconchexiao": {
    "content:before": "\"\\e745\""
  },
  "icondianpufill": {
    "content:before": "\"\\e746\""
  },
  "icondianpu": {
    "content:before": "\"\\e747\""
  },
  "icondingdan": {
    "content:before": "\"\\e748\""
  },
  "iconfankui": {
    "content:before": "\"\\e749\""
  },
  "iconfenxiang3": {
    "content:before": "\"\\e74b\""
  },
  "icongengduo2": {
    "content:before": "\"\\e74c\""
  },
  "icongonglve": {
    "content:before": "\"\\e74d\""
  },
  "icongouwuchefill": {
    "content:before": "\"\\e74e\""
  },
  "icongouwuche": {
    "content:before": "\"\\e754\""
  },
  "icongouwudai": {
    "content:before": "\"\\e755\""
  },
  "iconqiapianxingshi": {
    "content:before": "\"\\e756\""
  },
  "iconkefufill": {
    "content:before": "\"\\e75a\""
  },
  "iconkefu": {
    "content:before": "\"\\e75c\""
  },
  "iconliebiaoxingshi": {
    "content:before": "\"\\e75e\""
  },
  "iconliuyanfill": {
    "content:before": "\"\\e75f\""
  },
  "iconliuyan": {
    "content:before": "\"\\e760\""
  },
  "iconpengyoufill": {
    "content:before": "\"\\e761\""
  },
  "iconpengyou": {
    "content:before": "\"\\e762\""
  },
  "iconqingchu": {
    "content:before": "\"\\e764\""
  },
  "iconquan": {
    "content:before": "\"\\e765\""
  },
  "iconsaoma": {
    "content:before": "\"\\e766\""
  },
  "iconshaixuan": {
    "content:before": "\"\\e769\""
  },
  "iconshanchu": {
    "content:before": "\"\\e76a\""
  },
  "iconshezhi": {
    "content:before": "\"\\e76b\""
  },
  "iconshizhongfill": {
    "content:before": "\"\\e76c\""
  },
  "iconshizhong": {
    "content:before": "\"\\e76d\""
  },
  "iconshouyefill": {
    "content:before": "\"\\e76e\""
  },
  "iconshouye": {
    "content:before": "\"\\e76f\""
  },
  "iconsousuo1": {
    "content:before": "\"\\e770\""
  },
  "iconsousuoleimufill": {
    "content:before": "\"\\e771\""
  },
  "iconsousuoleimu": {
    "content:before": "\"\\e772\""
  },
  "icontongzhifill": {
    "content:before": "\"\\e773\""
  },
  "icontongzhi": {
    "content:before": "\"\\e774\""
  },
  "icontuikuan": {
    "content:before": "\"\\e77a\""
  },
  "iconwodefill": {
    "content:before": "\"\\e77b\""
  },
  "iconwode": {
    "content:before": "\"\\e77e\""
  },
  "iconxihuanfill": {
    "content:before": "\"\\e77f\""
  },
  "iconxihuan": {
    "content:before": "\"\\e780\""
  },
  "iconxinxifill": {
    "content:before": "\"\\e781\""
  },
  "iconxinxi": {
    "content:before": "\"\\e782\""
  },
  "iconzuji": {
    "content:before": "\"\\e783\""
  },
  "iconzuobiaofill": {
    "content:before": "\"\\e784\""
  },
  "iconzuobiao": {
    "content:before": "\"\\e785\""
  },
  "icondibu": {
    "content:before": "\"\\e786\""
  },
  "icondingbu": {
    "content:before": "\"\\e787\""
  },
  "iconxiangshang1": {
    "content:before": "\"\\e788\""
  },
  "iconxiangshang2": {
    "content:before": "\"\\e789\""
  },
  "iconxiangshang3": {
    "content:before": "\"\\e78a\""
  },
  "iconxiangshang5": {
    "content:before": "\"\\e78d\""
  },
  "iconxiangxia1": {
    "content:before": "\"\\e78e\""
  },
  "iconxiangxia2": {
    "content:before": "\"\\e78f\""
  },
  "iconxiangxia3": {
    "content:before": "\"\\e790\""
  },
  "iconxiangxia5": {
    "content:before": "\"\\e792\""
  },
  "iconxiangyou2": {
    "content:before": "\"\\e793\""
  },
  "iconxiangyou3fill": {
    "content:before": "\"\\e794\""
  },
  "iconxiangyou3": {
    "content:before": "\"\\e795\""
  },
  "iconxiangzuo1": {
    "content:before": "\"\\e796\""
  },
  "iconxiangzuo2": {
    "content:before": "\"\\e797\""
  },
  "iconxiangji1fill": {
    "content:before": "\"\\e798\""
  },
  "iconxiangji1": {
    "content:before": "\"\\e799\""
  },
  "iconjiazai": {
    "content:before": "\"\\e79a\""
  },
  "iconshuaxin1": {
    "content:before": "\"\\e79b\""
  },
  "iconsalefill": {
    "content:before": "\"\\e79c\""
  },
  "iconsale": {
    "content:before": "\"\\e79d\""
  },
  "iconandroidgengduo": {
    "content:before": "\"\\e79e\""
  },
  "iconleimu": {
    "content:before": "\"\\e79f\""
  },
  "iconbangzhuzhongxin": {
    "content:before": "\"\\e7a0\""
  },
  "iconcaidan": {
    "content:before": "\"\\e7a1\""
  },
  "iconzantongfill": {
    "content:before": "\"\\e7a2\""
  },
  "iconzantong": {
    "content:before": "\"\\e7a3\""
  },
  "iconxiangshang4": {
    "content:before": "\"\\e7a4\""
  },
  "iconxiangxia4": {
    "content:before": "\"\\e7a5\""
  },
  "icondanpin": {
    "content:before": "\"\\e7ab\""
  },
  "iconpinpai": {
    "content:before": "\"\\e7b8\""
  },
  "iconxiangbao": {
    "content:before": "\"\\e7ba\""
  },
  "iconyishouchu": {
    "content:before": "\"\\e7bb\""
  },
  "iconothers": {
    "content:before": "\"\\e7bc\""
  },
  "icondanxuanfill": {
    "content:before": "\"\\e71e\""
  },
  "icondanxuan": {
    "content:before": "\"\\e723\""
  },
  "iconfangxingweixuanzhong": {
    "content:before": "\"\\e724\""
  },
  "iconfangxingxuanzhongfill": {
    "content:before": "\"\\e725\""
  },
  "iconfangxingxuanzhong": {
    "content:before": "\"\\e726\""
  },
  "iconguanbi1": {
    "content:before": "\"\\e727\""
  },
  "iconguanbi2fill": {
    "content:before": "\"\\e728\""
  },
  "iconguanbi2": {
    "content:before": "\"\\e72a\""
  },
  "iconfavor": {
    "content:before": "\"\\e67b\""
  },
  "iconloading": {
    "content:before": "\"\\e67c\""
  },
  "iconlocationfill": {
    "content:before": "\"\\e67d\""
  },
  "iconroundcheckfill": {
    "content:before": "\"\\e67e\""
  },
  "iconroundcheck": {
    "content:before": "\"\\e67f\""
  },
  "iconroundclosefill": {
    "content:before": "\"\\e680\""
  },
  "iconroundclose": {
    "content:before": "\"\\e681\""
  },
  "iconroundrightfill": {
    "content:before": "\"\\e682\""
  },
  "iconroundright": {
    "content:before": "\"\\e683\""
  },
  "iconsearch1": {
    "content:before": "\"\\e684\""
  },
  "icontimefill": {
    "content:before": "\"\\e685\""
  },
  "icontime": {
    "content:before": "\"\\e686\""
  },
  "iconunfold": {
    "content:before": "\"\\e687\""
  },
  "iconwarnfill": {
    "content:before": "\"\\e688\""
  },
  "iconwarn": {
    "content:before": "\"\\e689\""
  },
  "iconcamerafill": {
    "content:before": "\"\\e68a\""
  },
  "iconcamera1": {
    "content:before": "\"\\e68b\""
  },
  "iconcommentfill": {
    "content:before": "\"\\e68c\""
  },
  "iconcomment": {
    "content:before": "\"\\e68d\""
  },
  "iconlikefill": {
    "content:before": "\"\\e68e\""
  },
  "iconlike": {
    "content:before": "\"\\e68f\""
  },
  "iconnotificationfill": {
    "content:before": "\"\\e690\""
  },
  "iconnotification": {
    "content:before": "\"\\e691\""
  },
  "iconorder": {
    "content:before": "\"\\e692\""
  },
  "icondeliver": {
    "content:before": "\"\\e693\""
  },
  "iconevaluate": {
    "content:before": "\"\\e694\""
  },
  "iconpay": {
    "content:before": "\"\\e695\""
  },
  "iconsend": {
    "content:before": "\"\\e696\""
  },
  "iconshop": {
    "content:before": "\"\\e697\""
  },
  "iconticket": {
    "content:before": "\"\\e698\""
  },
  "iconcascades": {
    "content:before": "\"\\e699\""
  },
  "iconlist": {
    "content:before": "\"\\e69a\""
  },
  "iconmore": {
    "content:before": "\"\\e69b\""
  },
  "iconscan": {
    "content:before": "\"\\e69c\""
  },
  "iconsettings": {
    "content:before": "\"\\e69d\""
  },
  "iconquestionfill": {
    "content:before": "\"\\e69e\""
  },
  "iconquestion": {
    "content:before": "\"\\e69f\""
  },
  "iconshopfill": {
    "content:before": "\"\\e6a0\""
  },
  "iconform": {
    "content:before": "\"\\e6a1\""
  },
  "iconpic": {
    "content:before": "\"\\e6a2\""
  },
  "iconfootprint": {
    "content:before": "\"\\e6a3\""
  },
  "icontop": {
    "content:before": "\"\\e6a4\""
  },
  "iconpulldown": {
    "content:before": "\"\\e6a5\""
  },
  "iconpullup": {
    "content:before": "\"\\e6a6\""
  },
  "iconrefresh": {
    "content:before": "\"\\e6a7\""
  },
  "iconmoreandroid": {
    "content:before": "\"\\e6a8\""
  },
  "icondeletefill": {
    "content:before": "\"\\e6a9\""
  },
  "iconrefund": {
    "content:before": "\"\\e6ac\""
  },
  "iconcart1": {
    "content:before": "\"\\e6af\""
  },
  "iconqrcode": {
    "content:before": "\"\\e6b0\""
  },
  "iconremind": {
    "content:before": "\"\\e6b2\""
  },
  "icondelete": {
    "content:before": "\"\\e6b4\""
  },
  "iconprofile": {
    "content:before": "\"\\e6b7\""
  },
  "iconhome1": {
    "content:before": "\"\\e6b8\""
  },
  "iconcartfill": {
    "content:before": "\"\\e6b9\""
  },
  "iconhomefill": {
    "content:before": "\"\\e6bb\""
  },
  "iconmessage": {
    "content:before": "\"\\e6bc\""
  },
  "iconaddressbook": {
    "content:before": "\"\\e6bd\""
  },
  "iconlink": {
    "content:before": "\"\\e6bf\""
  },
  "iconlock": {
    "content:before": "\"\\e6c0\""
  },
  "iconunlock": {
    "content:before": "\"\\e6c2\""
  },
  "iconvip": {
    "content:before": "\"\\e6c3\""
  },
  "iconactivity": {
    "content:before": "\"\\e6c5\""
  },
  "iconfriendaddfill": {
    "content:before": "\"\\e6c9\""
  },
  "iconfriendadd": {
    "content:before": "\"\\e6ca\""
  },
  "iconfriendfamous": {
    "content:before": "\"\\e6cb\""
  },
  "iconfriend": {
    "content:before": "\"\\e6cc\""
  },
  "icongoods": {
    "content:before": "\"\\e6cd\""
  },
  "iconpresent": {
    "content:before": "\"\\e6d3\""
  },
  "iconsquarecheckfill": {
    "content:before": "\"\\e6d4\""
  },
  "iconsquare": {
    "content:before": "\"\\e6d5\""
  },
  "iconsquarecheck": {
    "content:before": "\"\\e6d6\""
  },
  "iconround": {
    "content:before": "\"\\e6d7\""
  },
  "iconroundaddfill": {
    "content:before": "\"\\e6d8\""
  },
  "iconroundadd": {
    "content:before": "\"\\e6d9\""
  },
  "iconadd": {
    "content:before": "\"\\e6da\""
  },
  "iconnotificationforbidfill": {
    "content:before": "\"\\e6db\""
  },
  "iconfold": {
    "content:before": "\"\\e6de\""
  },
  "iconappreciatefill": {
    "content:before": "\"\\e6e3\""
  },
  "iconinfofill": {
    "content:before": "\"\\e6e4\""
  },
  "iconinfo": {
    "content:before": "\"\\e6e5\""
  },
  "iconrechargefill": {
    "content:before": "\"\\e6ec\""
  },
  "iconrecharge": {
    "content:before": "\"\\e6ed\""
  },
  "iconvipcard": {
    "content:before": "\"\\e6ee\""
  },
  "iconfriendfavor": {
    "content:before": "\"\\e6f1\""
  },
  "iconshare": {
    "content:before": "\"\\e6f3\""
  },
  "iconservice": {
    "content:before": "\"\\e6ff\""
  },
  "icondown": {
    "content:before": "\"\\e703\""
  },
  "iconcopy": {
    "content:before": "\"\\e706\""
  },
  "iconchoicenessfill": {
    "content:before": "\"\\e714\""
  },
  "iconchoiceness": {
    "content:before": "\"\\e715\""
  },
  "iconpullleft": {
    "content:before": "\"\\e71f\""
  },
  "iconpullright": {
    "content:before": "\"\\e720\""
  },
  "iconrankfill": {
    "content:before": "\"\\e721\""
  },
  "iconrank": {
    "content:before": "\"\\e722\""
  },
  "iconapps": {
    "content:before": "\"\\e729\""
  },
  "iconmarkfill": {
    "content:before": "\"\\e730\""
  },
  "iconmark": {
    "content:before": "\"\\e731\""
  },
  "iconpresentfill": {
    "content:before": "\"\\e732\""
  },
  "iconrepeal": {
    "content:before": "\"\\e733\""
  },
  "iconpeoplefill": {
    "content:before": "\"\\e735\""
  },
  "iconpeople": {
    "content:before": "\"\\e736\""
  },
  "iconrepair": {
    "content:before": "\"\\e738\""
  },
  "iconrepairfill": {
    "content:before": "\"\\e73a\""
  },
  "iconattentionfill": {
    "content:before": "\"\\e73c\""
  },
  "iconattention": {
    "content:before": "\"\\e73d\""
  },
  "iconcommunityfill": {
    "content:before": "\"\\e740\""
  },
  "iconcommunity": {
    "content:before": "\"\\e741\""
  },
  "iconcalendar": {
    "content:before": "\"\\e74a\""
  },
  "iconplayfill": {
    "content:before": "\"\\e74f\""
  },
  "iconstop": {
    "content:before": "\"\\e750\""
  },
  "icontagfill": {
    "content:before": "\"\\e751\""
  },
  "icontag": {
    "content:before": "\"\\e752\""
  },
  "icongroup": {
    "content:before": "\"\\e753\""
  },
  "iconhotfill": {
    "content:before": "\"\\e757\""
  },
  "iconhot": {
    "content:before": "\"\\e758\""
  },
  "iconpost": {
    "content:before": "\"\\e759\""
  },
  "iconradiobox": {
    "content:before": "\"\\e75b\""
  },
  "iconupload": {
    "content:before": "\"\\e75d\""
  },
  "iconradioboxfill": {
    "content:before": "\"\\e763\""
  },
  "iconadd1": {
    "content:before": "\"\\e767\""
  },
  "iconmove": {
    "content:before": "\"\\e768\""
  },
  "iconactivityfill": {
    "content:before": "\"\\e775\""
  },
  "iconcrownfill": {
    "content:before": "\"\\e776\""
  },
  "iconcrown": {
    "content:before": "\"\\e777\""
  },
  "icongoodsfill": {
    "content:before": "\"\\e778\""
  },
  "iconmessagefill": {
    "content:before": "\"\\e779\""
  },
  "iconsponsorfill": {
    "content:before": "\"\\e77c\""
  },
  "iconsponsor": {
    "content:before": "\"\\e77d\""
  },
  "iconmy": {
    "content:before": "\"\\e78b\""
  },
  "iconmyfill": {
    "content:before": "\"\\e78c\""
  },
  "icontext": {
    "content:before": "\"\\e791\""
  },
  "iconroundaddlight": {
    "content:before": "\"\\e7a7\""
  },
  "iconattentionforbid": {
    "content:before": "\"\\e7b2\""
  },
  "iconattentionforbidfill": {
    "content:before": "\"\\e7b3\""
  },
  "iconmail": {
    "content:before": "\"\\e7bd\""
  },
  "iconpeoplelist": {
    "content:before": "\"\\e7be\""
  },
  "iconnewshotfill": {
    "content:before": "\"\\e7c4\""
  },
  "iconnewshot": {
    "content:before": "\"\\e7c5\""
  },
  "iconvideofill": {
    "content:before": "\"\\e7c7\""
  },
  "iconvideo": {
    "content:before": "\"\\e7c8\""
  },
  "iconaskfill": {
    "content:before": "\"\\e7c9\""
  },
  "iconask": {
    "content:before": "\"\\e7ca\""
  },
  "iconexit": {
    "content:before": "\"\\e7cb\""
  },
  "iconmoneybagfill": {
    "content:before": "\"\\e7ce\""
  },
  "iconredpacket_fill": {
    "content:before": "\"\\e7d3\""
  },
  "iconhome_light": {
    "content:before": "\"\\e7d4\""
  },
  "iconmy_light": {
    "content:before": "\"\\e7d5\""
  },
  "iconcommunity_light": {
    "content:before": "\"\\e7d6\""
  },
  "iconcart_light": {
    "content:before": "\"\\e7d7\""
  },
  "iconwe_light": {
    "content:before": "\"\\e7d8\""
  },
  "iconhome_fill_light": {
    "content:before": "\"\\e7d9\""
  },
  "iconcart_fill_light": {
    "content:before": "\"\\e7da\""
  },
  "iconcommunity_fill_light": {
    "content:before": "\"\\e7db\""
  },
  "iconmy_fill_light": {
    "content:before": "\"\\e7dc\""
  },
  "iconwe_fill_light": {
    "content:before": "\"\\e7dd\""
  },
  "iconsearch_light": {
    "content:before": "\"\\e7de\""
  },
  "iconscan_light": {
    "content:before": "\"\\e7df\""
  },
  "iconpeople_list_light": {
    "content:before": "\"\\e7e0\""
  },
  "iconmessage_light": {
    "content:before": "\"\\e7e1\""
  },
  "iconclose_light": {
    "content:before": "\"\\e7e2\""
  },
  "iconadd_light": {
    "content:before": "\"\\e7e3\""
  },
  "iconprofile_light": {
    "content:before": "\"\\e7e4\""
  },
  "iconservice_light": {
    "content:before": "\"\\e7e5\""
  },
  "iconfriend_add_light": {
    "content:before": "\"\\e7e6\""
  },
  "iconedit_light": {
    "content:before": "\"\\e7e7\""
  },
  "iconcamera_light": {
    "content:before": "\"\\e7e8\""
  },
  "iconshare_light": {
    "content:before": "\"\\e7e9\""
  },
  "iconcomment_light": {
    "content:before": "\"\\e7ea\""
  },
  "iconappreciate_light": {
    "content:before": "\"\\e7eb\""
  },
  "iconappreciate_fill_light": {
    "content:before": "\"\\e7ec\""
  },
  "iconcomment_fill_light": {
    "content:before": "\"\\e7ed\""
  },
  "iconmore_android_light": {
    "content:before": "\"\\e7ee\""
  },
  "iconfriend_light": {
    "content:before": "\"\\e7ef\""
  },
  "iconmore_light": {
    "content:before": "\"\\e7f0\""
  },
  "icongoods_favor_light": {
    "content:before": "\"\\e7f1\""
  },
  "icongoods_new_fill_light": {
    "content:before": "\"\\e7f2\""
  },
  "icongoods_new_light": {
    "content:before": "\"\\e7f3\""
  },
  "icongoods_light": {
    "content:before": "\"\\e7f4\""
  },
  "iconfavor_fill_light": {
    "content:before": "\"\\e7f5\""
  },
  "icondelete_light": {
    "content:before": "\"\\e7f6\""
  },
  "iconback_android": {
    "content:before": "\"\\e7f7\""
  },
  "iconback_android_light": {
    "content:before": "\"\\e7f8\""
  },
  "icondown_light": {
    "content:before": "\"\\e7f9\""
  },
  "iconround_close_light": {
    "content:before": "\"\\e7fa\""
  },
  "iconround_close_fill_light": {
    "content:before": "\"\\e7fb\""
  },
  "iconqr_code_light": {
    "content:before": "\"\\e7fc\""
  },
  "iconfriend_settings_light": {
    "content:before": "\"\\e7fe\""
  },
  "iconround_list_light": {
    "content:before": "\"\\e800\""
  },
  "iconround_friend_fill": {
    "content:before": "\"\\e80a\""
  },
  "iconround_crown_fill": {
    "content:before": "\"\\e80b\""
  },
  "iconround_link_fill": {
    "content:before": "\"\\e80c\""
  },
  "iconround_light_fill": {
    "content:before": "\"\\e80d\""
  },
  "iconround_favor_fill": {
    "content:before": "\"\\e80e\""
  },
  "iconround_menu_fill": {
    "content:before": "\"\\e80f\""
  },
  "iconround_location_fill": {
    "content:before": "\"\\e810\""
  },
  "iconround_pay_fill": {
    "content:before": "\"\\e811\""
  },
  "iconround_like_fill": {
    "content:before": "\"\\e812\""
  },
  "iconround_people_fill": {
    "content:before": "\"\\e813\""
  },
  "iconround_pay": {
    "content:before": "\"\\e814\""
  },
  "iconround_rank_fill": {
    "content:before": "\"\\e815\""
  },
  "iconround_redpacket_fill": {
    "content:before": "\"\\e816\""
  },
  "iconround_skin_fill": {
    "content:before": "\"\\e817\""
  },
  "iconround_record_fill": {
    "content:before": "\"\\e818\""
  },
  "iconround_ticket_fill": {
    "content:before": "\"\\e819\""
  },
  "iconround_text_fill": {
    "content:before": "\"\\e81a\""
  },
  "iconround_transfer_fill": {
    "content:before": "\"\\e81b\""
  },
  "iconround_transfer": {
    "content:before": "\"\\e81c\""
  },
  "iconarrow_left_fill": {
    "content:before": "\"\\e81d\""
  },
  "iconarrow_up_fill": {
    "content:before": "\"\\e81e\""
  },
  "iconreturn": {
    "content:before": "\"\\e81f\""
  },
  "iconbroadcast_fill": {
    "content:before": "\"\\e820\""
  },
  "iconappreciate": {
    "content:before": "\"\\e675\""
  },
  "iconcheck": {
    "content:before": "\"\\e676\""
  },
  "iconclose": {
    "content:before": "\"\\e677\""
  },
  "iconedit": {
    "content:before": "\"\\e678\""
  },
  "iconemoji": {
    "content:before": "\"\\e679\""
  },
  "iconfavorfill": {
    "content:before": "\"\\e67a\""
  },
  "iconliebiaomoshi2": {
    "content:before": "\"\\e61b\""
  },
  "icondaifahuo": {
    "content:before": "\"\\e61c\""
  },
  "icondaifukuan": {
    "content:before": "\"\\e61d\""
  },
  "iconpaixing": {
    "content:before": "\"\\e61e\""
  },
  "iconzanxuanzhong": {
    "content:before": "\"\\e61f\""
  },
  "iconfenxiang1": {
    "content:before": "\"\\e620\""
  },
  "iconfenxiang2": {
    "content:before": "\"\\e621\""
  },
  "icongengduo1": {
    "content:before": "\"\\e622\""
  },
  "iconcart": {
    "content:before": "\"\\e623\""
  },
  "iconhome": {
    "content:before": "\"\\e624\""
  },
  "iconhome2": {
    "content:before": "\"\\e625\""
  },
  "iconcamera": {
    "content:before": "\"\\e626\""
  },
  "iconcamera2": {
    "content:before": "\"\\e627\""
  },
  "iconsearch": {
    "content:before": "\"\\e628\""
  },
  "iconshuaxin": {
    "content:before": "\"\\e629\""
  },
  "iconmine": {
    "content:before": "\"\\e62a\""
  },
  "iconmine2": {
    "content:before": "\"\\e62b\""
  },
  "icontabulation": {
    "content:before": "\"\\e62c\""
  },
  "iconliebiao2": {
    "content:before": "\"\\e62d\""
  },
  "iconiconfontscan": {
    "content:before": "\"\\e62e\""
  },
  "iconquanbudingdan1": {
    "content:before": "\"\\e62f\""
  },
  "icon31shoucangxuanzhong": {
    "content:before": "\"\\e630\""
  },
  "icon31shoucang": {
    "content:before": "\"\\e631\""
  },
  "icon31guanbi": {
    "content:before": "\"\\e632\""
  },
  "icon31xuanze": {
    "content:before": "\"\\e633\""
  },
  "icon31guanzhudianpu": {
    "content:before": "\"\\e634\""
  },
  "icon31xuanzhong": {
    "content:before": "\"\\e635\""
  },
  "icon31yiguanzhudianpu": {
    "content:before": "\"\\e636\""
  },
  "icon31dianzan": {
    "content:before": "\"\\e637\""
  },
  "icon31dianpu": {
    "content:before": "\"\\e638\""
  },
  "icon31fenxiang": {
    "content:before": "\"\\e639\""
  },
  "icon31zhuanfa": {
    "content:before": "\"\\e63a\""
  },
  "icon31daifahuo": {
    "content:before": "\"\\e63b\""
  },
  "icon31daifukuan": {
    "content:before": "\"\\e63c\""
  },
  "icon31daishouhuo": {
    "content:before": "\"\\e63d\""
  },
  "icon31daipingjia": {
    "content:before": "\"\\e63e\""
  },
  "icontuikuantuihuo": {
    "content:before": "\"\\e63f\""
  },
  "icon31huiyuanqia": {
    "content:before": "\"\\e640\""
  },
  "icon31jifen": {
    "content:before": "\"\\e641\""
  },
  "icon31youhuiquan": {
    "content:before": "\"\\e642\""
  },
  "icon31tianmaobao": {
    "content:before": "\"\\e643\""
  },
  "icon31hongbao": {
    "content:before": "\"\\e644\""
  },
  "icon31fanerxuanzhong": {
    "content:before": "\"\\e645\""
  },
  "icon31faner": {
    "content:before": "\"\\e646\""
  },
  "icon31gouwuchexuanzhong": {
    "content:before": "\"\\e647\""
  },
  "icon31gouwuche": {
    "content:before": "\"\\e648\""
  },
  "icon31shouyexuanzhong": {
    "content:before": "\"\\e649\""
  },
  "icon31shouye": {
    "content:before": "\"\\e64a\""
  },
  "icon31wodexuanzhong": {
    "content:before": "\"\\e64b\""
  },
  "icon31wode": {
    "content:before": "\"\\e64c\""
  },
  "iconliwuhuodong": {
    "content:before": "\"\\e64d\""
  },
  "iconliebiaomoshi": {
    "content:before": "\"\\e64e\""
  },
  "iconzhongtumoshi": {
    "content:before": "\"\\e64f\""
  },
  "iconchakan": {
    "content:before": "\"\\e650\""
  },
  "iconguanbi": {
    "content:before": "\"\\e651\""
  },
  "iconguanzhu": {
    "content:before": "\"\\e652\""
  },
  "iconlaba": {
    "content:before": "\"\\e653\""
  },
  "icon31paishexuanzhong": {
    "content:before": "\"\\e654\""
  },
  "icon31paishe": {
    "content:before": "\"\\e655\""
  },
  "icon31rexiao": {
    "content:before": "\"\\e656\""
  },
  "icon31saoma": {
    "content:before": "\"\\e657\""
  },
  "icon31shangxin": {
    "content:before": "\"\\e658\""
  },
  "icon31shuaxin": {
    "content:before": "\"\\e659\""
  },
  "icon31sousuo": {
    "content:before": "\"\\e65a\""
  },
  "icon31tishi": {
    "content:before": "\"\\e65b\""
  },
  "icon31xiaoxi": {
    "content:before": "\"\\e65c\""
  },
  "icon31yiwen": {
    "content:before": "\"\\e65d\""
  },
  "icon31dingdan": {
    "content:before": "\"\\e65e\""
  },
  "icon31guanzhu1xuanzhong": {
    "content:before": "\"\\e65f\""
  },
  "icon31guanzhu1": {
    "content:before": "\"\\e660\""
  },
  "icon31huidaodingbu": {
    "content:before": "\"\\e661\""
  },
  "icon31zuji": {
    "content:before": "\"\\e662\""
  },
  "icon31leimu": {
    "content:before": "\"\\e663\""
  },
  "icon31liebiao": {
    "content:before": "\"\\e664\""
  },
  "icon31chiping": {
    "content:before": "\"\\e665\""
  },
  "icon31erweima": {
    "content:before": "\"\\e666\""
  },
  "iconbianji": {
    "content:before": "\"\\e667\""
  },
  "icon31fanhui": {
    "content:before": "\"\\e668\""
  },
  "icon31huiyuan": {
    "content:before": "\"\\e669\""
  },
  "icon31pinglun": {
    "content:before": "\"\\e66a\""
  },
  "icon31qiandao": {
    "content:before": "\"\\e66b\""
  },
  "icon31quanbushangpin": {
    "content:before": "\"\\e66c\""
  },
  "icon31shangsheng": {
    "content:before": "\"\\e66d\""
  },
  "icon31shezhi": {
    "content:before": "\"\\e66e\""
  },
  "icon31shijian": {
    "content:before": "\"\\e66f\""
  },
  "icon31shouqi": {
    "content:before": "\"\\e670\""
  },
  "icon31xiajiang": {
    "content:before": "\"\\e671\""
  },
  "icon31xiala": {
    "content:before": "\"\\e672\""
  },
  "icon31tishi1": {
    "content:before": "\"\\e673\""
  },
  "icon31haoyou": {
    "content:before": "\"\\e674\""
  },
  "iconsaoyisao": {
    "content:before": "\"\\e600\""
  },
  "iconsousuo": {
    "content:before": "\"\\e601\""
  },
  "iconfenxiang": {
    "content:before": "\"\\e602\""
  },
  "iconfenlei": {
    "content:before": "\"\\e603\""
  },
  "iconhuanyipi": {
    "content:before": "\"\\e604\""
  },
  "iconxiugaioryijian": {
    "content:before": "\"\\e605\""
  },
  "iconweixin": {
    "content:before": "\"\\e606\""
  },
  "iconshangsheng": {
    "content:before": "\"\\e607\""
  },
  "iconerweima": {
    "content:before": "\"\\e608\""
  },
  "iconlianjie": {
    "content:before": "\"\\e609\""
  },
  "icondianzan": {
    "content:before": "\"\\e60a\""
  },
  "iconfanhui8": {
    "content:before": "\"\\e60b\""
  },
  "iconfanhui7": {
    "content:before": "\"\\e60c\""
  },
  "iconfanhui6": {
    "content:before": "\"\\e60d\""
  },
  "iconfanhui5": {
    "content:before": "\"\\e60e\""
  },
  "icongengduo": {
    "content:before": "\"\\e60f\""
  },
  "iconshoucangxuanzhong": {
    "content:before": "\"\\e610\""
  },
  "iconshoucang": {
    "content:before": "\"\\e611\""
  },
  "iconfanhui1": {
    "content:before": "\"\\e612\""
  },
  "iconfanhui2": {
    "content:before": "\"\\e613\""
  },
  "iconfanhui3": {
    "content:before": "\"\\e614\""
  },
  "iconfanhui4": {
    "content:before": "\"\\e615\""
  },
  "iconhuidaodingbu": {
    "content:before": "\"\\e616\""
  },
  "icongouwuchexuanzhong": {
    "content:before": "\"\\e617\""
  },
  "iconwodexuanzhong": {
    "content:before": "\"\\e618\""
  },
  "iconquanbudingdan": {
    "content:before": "\"\\e619\""
  },
  "icondaishouhuo": {
    "content:before": "\"\\e61a\""
  }
}

/***/ }),
/* 4 */
/*!***********************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=74edcfb4&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 40).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 40).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"77f53a66\",\n  false,\n  _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/new/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0ZWRjZmI0Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI3N2Y1M2E2NlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9uZXcvaW5kZXgubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!*****************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=template&id=74edcfb4&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=template&id=74edcfb4&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=template&id=74edcfb4&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniNavBar: __webpack_require__(/*! @/components/uni-nav-bar/uni-nav-bar.vue */ 7).default,
  uniIcons: __webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 19).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        [
          _c(
            "uni-nav-bar",
            {
              attrs: {
                statusBar: "false",
                leftIcon: "back",
                leftText: "返回",
                title: "新闻"
              },
              on: {
                clickLeft: function($event) {
                  _vm.back("/pages/index/index")
                }
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["info"],
                  attrs: { slot: "right" },
                  slot: "right"
                },
                [
                  _c(
                    "navigator",
                    {
                      attrs: {
                        url: "/pages/uni-feedback/uni-feedback",
                        openType: "navigate"
                      }
                    },
                    [_c("uni-icons", { attrs: { type: "more", size: "24" } })],
                    1
                  )
                ],
                1
              )
            ]
          ),
          _c(
            "view",
            { staticClass: ["tabs"] },
            [
              _c(
                "scroll-view",
                {
                  staticClass: ["scroll-h"],
                  attrs: {
                    id: "tab-bar",
                    scrollX: true,
                    showScrollbar: false,
                    scrollIntoView: _vm.scrollInto
                  }
                },
                _vm._l(_vm.tabBars, function(tab, index) {
                  return _c(
                    "view",
                    {
                      key: tab.id,
                      staticClass: ["uni-tab-item"],
                      attrs: { id: tab.id, dataCurrent: index },
                      on: { click: _vm.ontabtap }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: ["uni-tab-item-title"],
                          class: _vm.isScroll(index)
                            ? "uni-tab-item-title-active"
                            : ""
                        },
                        [_vm._v(_vm._s(tab.name))]
                      ),
                      _c(
                        "view",
                        {
                          class: _vm.isScroll(index)
                            ? "underlinebox"
                            : "underlinebox-active",
                          staticStyle: { width: "100%" }
                        },
                        [_c("view", { staticClass: ["underline"] })]
                      )
                    ]
                  )
                }),
                0
              ),
              _c("view", { staticClass: ["line-h"] }),
              _c(
                "swiper",
                {
                  staticClass: ["swiper-box"],
                  staticStyle: { flex: "1" },
                  attrs: { current: _vm.tabIndex, duration: 300 },
                  on: { change: _vm.ontabchange }
                },
                _vm._l(_vm.newsList, function(tab, index1) {
                  return _c(
                    "swiper-item",
                    { key: index1, staticClass: ["swiper-item"] },
                    [
                      _c(
                        "list",
                        {
                          staticClass: ["scroll-v", "list"],
                          attrs: {
                            enableBackToTop: "true",
                            scrollY: true,
                            loadmoreoffset: "15"
                          },
                          on: {
                            loadmore: function($event) {
                              _vm.loadMore(index1)
                            }
                          }
                        },
                        [
                          _c(
                            "refresh",
                            {
                              staticClass: ["refresh"],
                              attrs: {
                                display: tab.refreshing ? "show" : "hide"
                              },
                              on: {
                                refresh: function($event) {
                                  _vm.onrefresh(index1)
                                },
                                pullingdown: _vm.onpullingdown
                              }
                            },
                            [
                              _c(
                                "div",
                                { staticClass: ["refresh-view"] },
                                [
                                  _c("u-image", {
                                    staticClass: ["refresh-icon"],
                                    class: {
                                      "refresh-icon-active": tab.refreshFlag
                                    },
                                    style: {
                                      width:
                                        tab.refreshing || _vm.pulling
                                          ? 0
                                          : "30px"
                                    },
                                    attrs: { src: _vm.refreshIcon }
                                  }),
                                  tab.refreshing
                                    ? _c("loading-indicator", {
                                        staticClass: ["loading-icon"],
                                        attrs: { animating: "true" }
                                      })
                                    : _vm._e(),
                                  _c(
                                    "u-text",
                                    { staticClass: ["loading-text"] },
                                    [_vm._v(_vm._s(tab.refreshText))]
                                  )
                                ],
                                1
                              )
                            ]
                          ),
                          _vm._l(tab.data, function(newsitem, index2) {
                            return _c(
                              "cell",
                              {
                                key: newsitem.id,
                                appendAsTree: true,
                                attrs: { append: "tree" }
                              },
                              [
                                _c("media-item", {
                                  attrs: { options: newsitem },
                                  on: {
                                    close: function($event) {
                                      _vm.close(index1, index2)
                                    },
                                    click: function($event) {
                                      _vm.goDetail(newsitem, index2)
                                    }
                                  }
                                })
                              ],
                              1
                            )
                          }),
                          tab.isLoading || tab.data.length > 4
                            ? _c(
                                "cell",
                                {
                                  staticClass: ["loading-more"],
                                  appendAsTree: true,
                                  attrs: { append: "tree" }
                                },
                                [
                                  _c(
                                    "u-text",
                                    { staticClass: ["loading-more-text"] },
                                    [_vm._v(_vm._s(tab.loadingText))]
                                  )
                                ]
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*****************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-nav-bar.vue?vue&type=template&id=4afea59e&scoped=true& */ 8);\n/* harmony import */ var _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-nav-bar.vue?vue&type=script&lang=js& */ 27);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& */ 29).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& */ 29).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4afea59e\",\n  \"6d387a60\",\n  false,\n  _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-nav-bar/uni-nav-bar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFGQUE2RTtBQUNqSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUZBQTZFO0FBQ3RJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFmZWE1OWUmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhZmVhNTllJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGFmZWE1OWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRhZmVhNTllXCIsXG4gIFwiNmQzODdhNjBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=4afea59e&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=template&id=4afea59e&scoped=true& */ 9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 9 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=template&id=4afea59e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniStatusBar: __webpack_require__(/*! @/components/uni-status-bar/uni-status-bar.vue */ 10)
    .default,
  uniIcons: __webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 19).default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", { staticClass: ["uni-navbar"] }, [
    _c(
      "view",
      {
        staticClass: ["uni-navbar__content"],
        class: {
          "uni-navbar--fixed": _vm.fixed,
          "uni-navbar--shadow": _vm.shadow,
          "uni-navbar--border": _vm.border
        },
        style: { "background-color": _vm.backgroundColor }
      },
      [
        _vm.statusBar ? _c("uni-status-bar") : _vm._e(),
        _c(
          "view",
          {
            staticClass: ["uni-navbar__header", "uni-navbar__content_view"],
            style: { color: _vm.color, backgroundColor: _vm.backgroundColor }
          },
          [
            _c(
              "view",
              {
                staticClass: [
                  "uni-navbar__header-btns",
                  "uni-navbar__header-btns-left",
                  "uni-navbar__content_view"
                ],
                on: { click: _vm.onClickLeft }
              },
              [
                _vm.leftIcon.length
                  ? _c(
                      "view",
                      { staticClass: ["uni-navbar__content_view"] },
                      [
                        _c("uni-icons", {
                          attrs: {
                            color: _vm.color,
                            type: _vm.leftIcon,
                            size: "24"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm.leftText.length
                  ? _c(
                      "view",
                      {
                        staticClass: [
                          "uni-navbar-btn-text",
                          "uni-navbar__content_view"
                        ],
                        class: {
                          "uni-navbar-btn-icon-left": !_vm.leftIcon.length
                        }
                      },
                      [
                        _c(
                          "u-text",
                          { style: { color: _vm.color, fontSize: "14px" } },
                          [_vm._v(_vm._s(_vm.leftText))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._t("left")
              ],
              2
            ),
            _c(
              "view",
              {
                staticClass: [
                  "uni-navbar__header-container",
                  "uni-navbar__content_view"
                ]
              },
              [
                _vm.title.length
                  ? _c(
                      "view",
                      {
                        staticClass: [
                          "uni-navbar__header-container-inner",
                          "uni-navbar__content_view"
                        ]
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["uni-nav-bar-text"],
                            style: { color: _vm.color }
                          },
                          [_vm._v(_vm._s(_vm.title))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._t("default")
              ],
              2
            ),
            _c(
              "view",
              {
                staticClass: [
                  "uni-navbar__header-btns",
                  "uni-navbar__content_view"
                ],
                class: _vm.title.length ? "uni-navbar__header-btns-right" : "",
                on: { click: _vm.onClickRight }
              },
              [
                _vm.rightIcon.length
                  ? _c(
                      "view",
                      { staticClass: ["uni-navbar__content_view"] },
                      [
                        _c("uni-icons", {
                          attrs: {
                            color: _vm.color,
                            type: _vm.rightIcon,
                            size: "24"
                          }
                        })
                      ],
                      1
                    )
                  : _vm._e(),
                _vm.rightText.length && !_vm.rightIcon.length
                  ? _c(
                      "view",
                      {
                        staticClass: [
                          "uni-navbar-btn-text",
                          "uni-navbar__content_view"
                        ]
                      },
                      [
                        _c(
                          "u-text",
                          { staticClass: ["uni-nav-bar-right-text"] },
                          [_vm._v(_vm._s(_vm.rightText))]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._t("right")
              ],
              2
            )
          ]
        )
      ],
      1
    ),
    _vm.fixed
      ? _c(
          "view",
          { staticClass: ["uni-navbar__placeholder"] },
          [
            _vm.statusBar ? _c("uni-status-bar") : _vm._e(),
            _c("view", { staticClass: ["uni-navbar__placeholder-view"] })
          ],
          1
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 10 */
/*!***********************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-status-bar.vue?vue&type=template&id=86f9f2b8&scoped=true& */ 11);\n/* harmony import */ var _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-status-bar.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& */ 16).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& */ 16).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"86f9f2b8\",\n  \"f6541354\",\n  false,\n  _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-status-bar/uni-status-bar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUFnRjtBQUNwSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQWdGO0FBQ3pJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg2ZjlmMmI4JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NmY5ZjJiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1zdGF0dXMtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg2ZjlmMmI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NmY5ZjJiOFwiLFxuICBcImY2NTQxMzU0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!******************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue?vue&type=template&id=86f9f2b8&scoped=true& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-status-bar.vue?vue&type=template&id=86f9f2b8&scoped=true& */ 12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 12 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue?vue&type=template&id=86f9f2b8&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-status-bar"], style: { height: _vm.statusBarHeight } },
    [_vm._t("default")],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 13 */
/*!************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-status-bar.vue?vue&type=script&lang=js& */ 14);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJpQixDQUFnQiw4akJBQUcsRUFBQyIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n\nvar statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';var _default =\n{\n  name: 'UniStatusBar',\n  data: function data() {\n    return {\n      statusBarHeight: statusBarHeight };\n\n  },\n  onLoad: function onLoad() {\n    __f__(\"log\", this.statusBarHeight, \" at components/uni-status-bar/uni-status-bar.vue:17\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLHFFO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLHNDQURBOztBQUdBLEdBTkE7QUFPQSxRQVBBLG9CQU9BO0FBQ0E7QUFDQSxHQVRBLEUiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3IDpzdHlsZT1cInsgaGVpZ2h0OiBzdGF0dXNCYXJIZWlnaHQgfVwiIGNsYXNzPVwidW5pLXN0YXR1cy1iYXJcIj5cblx0XHQ8c2xvdCAvPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgc3RhdHVzQmFySGVpZ2h0ID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0ICsgJ3B4J1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ1VuaVN0YXR1c0JhcicsXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogc3RhdHVzQmFySGVpZ2h0XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRvbkxvYWQoKXtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzQmFySGVpZ2h0KVxuXHRcdH0sXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC51bmktc3RhdHVzLWJhciB7XG5cdFx0d2lkdGg6IDc1MHJweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0Ly8gaGVpZ2h0OiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 16 */
/*!*********************************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& */ 17);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-status-bar": {
    "width": "750rpx",
    "height": "20"
  }
}

/***/ }),
/* 18 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 19 */
/*!*************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=0bf90c00&scoped=true& */ 20);\n/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 22);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& */ 25).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& */ 25).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0bf90c00\",\n  \"6ad09232\",\n  false,\n  _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-icons/uni-icons.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmY5MGMwMCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGJmOTBjMDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGJmOTBjMDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiZjkwYzAwXCIsXG4gIFwiNmFkMDkyMzJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!********************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=template&id=0bf90c00&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=template&id=0bf90c00&scoped=true& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 21 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=template&id=0bf90c00&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "u-text",
    {
      staticClass: ["uni-icons"],
      style: { color: _vm.color, "font-size": _vm.size + "px" },
      on: { click: _vm._onClick }
    },
    [_vm._v(_vm._s(_vm.icons[_vm.type]))]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!**************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 23);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNpQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\nvar _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\nvar domModule = weex.requireModule('dom');domModule.addRule('fontFace', { 'fontFamily': \"uniicons\",\n  'src': \"url('data:font/truetype;charset=utf-8;base64,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AXcBeAF5AXoBewF8AX0BfgF/AYABgQGCAYMHdW5pMDAwMAdjb250YWN0BnBlcnNvbglwZXJzb25hZGQNY29udGFjdGZpbGxlZAxwZXJzb25maWxsZWQPcGVyc29uYWRkZmlsbGVkBXBob25lBWVtYWlsCmNoYXRidWJibGUJY2hhdGJveGVzC3Bob25lZmlsbGVkC2VtYWlsZmlsbGVkEGNoYXRidWJibGVmaWxsZWQPY2hhdGJveGVzZmlsbGVkBXdlaWJvBndlaXhpbgtwZW5neW91cXVhbgRjaGF0AnFxCHZpZGVvY2FtBmNhbWVyYQNtaWMIbG9jYXRpb24JbWljZmlsbGVkDmxvY2F0aW9uZmlsbGVkBm1pY29mZgVpbWFnZQNtYXAHY29tcG9zZQV0cmFzaAZ1cGxvYWQIZG93bmxvYWQFY2xvc2UEcmVkbwR1bmRvB3JlZnJlc2gEc3Rhcgt3aGl0ZWNpcmNsZQVjbGVhcg1yZWZyZXNoZmlsbGVkCnN0YXJmaWxsZWQKcGx1c2ZpbGxlZAttaW51c2ZpbGxlZAxjaXJjbGVmaWxsZWQOY2hlY2tib3hmaWxsZWQKY2xvc2VlbXB0eQxyZWZyZXNoZW1wdHkGcmVsb2FkCHN0YXJoYWxmDHNwaW5uZXJjeWNsZQZzZWFyY2gJcGx1c2VtcHR5B2ZvcndhcmQEYmFjaw5jaGVja21hcmtlbXB0eQRob21lCG5hdmlnYXRlBGdlYXIKcGFwZXJwbGFuZQRpbmZvBGhlbHAGbG9ja2VkBG1vcmUEZmxhZwpob21lZmlsbGVkCmdlYXJmaWxsZWQKaW5mb2ZpbGxlZApoZWxwZmlsbGVkCm1vcmVmaWxsZWQIc2V0dGluZ3MEbGlzdARiYXJzBGxvb3AJcGFwZXJjbGlwCWV5ZWZpbGxlZAx1cHdhcmRzYXJyb3cOZG93bndhcmRzYXJyb3cObGVmdHdhcmRzYXJyb3cPcmlnaHR3YXJkc2Fycm93C2Fycm93dGhpbnVwDWFycm93dGhpbmRvd24NYXJyb3d0aGlubGVmdA5hcnJvd3RoaW5yaWdodAhwdWxsZG93bgVzb3VuZARzaG9wBHNjYW4KdW5kb2ZpbGxlZApyZWRvZmlsbGVkDGNhbWVyYWZpbGxlZApjYXJ0ZmlsbGVkBGNhcnQIY2hlY2tib3gRc21hbGxjaXJjbGVmaWxsZWQOZXllc2xhc2hmaWxsZWQIZXllc2xhc2gDZXllCmZsYWdmaWxsZWQVaGFuZHRodW1ic2Rvd25fZmlsbGVkDmhhbmR0aHVtYnNkb3duEmhhbmR0aHVtYnN1cGZpbGxlZAtoZWFydGZpbGxlZAxoYW5kdGh1bWJzdXAOYmxhY2toZWFydHN1aXQKY2hhdGZpbGxlZA5tYWlsb3BlbmZpbGxlZAhtYWlsb3Blbgxsb2NrZWRmaWxsZWQJbWFwZmlsbGVkBm1hcHBpbg1tYXBwaW5lbGxpcHNlC3NtYWxsY2lyY2xlEHBhcGVycGxhbmVmaWxsZWQLaW1hZ2VmaWxsZWQMaW1hZ2VzZmlsbGVkBmltYWdlcw5uYXZpZ2F0ZWZpbGxlZA5taWNzbGFzaGZpbGxlZAtzb3VuZGZpbGxlZA5kb3dubG9hZGZpbGxlZA52aWRlb2NhbWZpbGxlZAx1cGxvYWRmaWxsZWQKaGVhZHBob25lcwt0cmFzaGZpbGxlZA1jbG91ZGRvd25sb2FkEWNsb3VkdXBsb2FkZmlsbGVkC2Nsb3VkdXBsb2FkE2Nsb3VkZG93bmxvYWRmaWxsZWQHdW5pMDAwOQAAAAAB//8AAgABAAAADAAAABYAAAACAAEAAQCFAAEABAAAAAIAAAAAAAAAAQAAAADVpCcIAAAAANoxE3MAAAAA2jSpUA==')\" });\n\n\n\n/**\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * Icons 图标\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @description 用于展示 icons 图标\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @tutorial https://ext.dcloud.net.cn/plugin?id=28\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @property {Number} size 图标大小\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @property {String} type 图标图案，参考示例\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @property {String} color 图标颜色\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        * @event {Function} click 点击 Icon 触发事件\n                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        */var _default =\n{\n  name: 'UniIcons',\n  props: {\n    type: {\n      type: String,\n      default: '' },\n\n    color: {\n      type: String,\n      default: '#333333' },\n\n    size: {\n      type: [Number, String],\n      default: 16 } },\n\n\n  data: function data() {\n    return {\n      icons: _icons.default };\n\n  },\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('click');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLCtFOzs7O0FBRUEsMENBQ0EsZ0NBQ0Esd0JBREE7QUFFQSxrd2xDQUZBOzs7O0FBTUE7Ozs7Ozs7OztBQVNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQUxBOztBQVNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQVRBLEVBRkE7OztBQWdCQSxNQWhCQSxrQkFnQkE7QUFDQTtBQUNBLDJCQURBOztBQUdBLEdBcEJBO0FBcUJBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0EsS0FIQSxFQXJCQSxFIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dGV4dCA6c3R5bGU9XCJ7IGNvbG9yOiBjb2xvciwgJ2ZvbnQtc2l6ZSc6IHNpemUgKyAncHgnIH1cIiBjbGFzcz1cInVuaS1pY29uc1wiIEBjbGljaz1cIl9vbkNsaWNrXCI+e3tpY29uc1t0eXBlXX19PC90ZXh0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMuanMnO1xuXHQvLyAjaWZkZWYgQVBQLU5WVUVcblx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcblx0XHQnZm9udEZhbWlseSc6IFwidW5paWNvbnNcIixcblx0XHQnc3JjJzogXCJ1cmwoJ2RhdGE6Zm9udC90cnVldHlwZTtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBTkFJQUFBd0JRUmtaVVRZb0o0OHdBQUdmNEFBQUFIRWRFUlVZQUp3Q01BQUJuMkFBQUFCNVBVeTh5V1hwYzNRQUFBVmdBQUFCZ1kyMWhjQjlTQ2E4QUFBUFFBQUFESW1kaGMzRC8vd0FEQUFCbjBBQUFBQWhuYkhsbVdXZmVjUUFBQ0FRQUFGWWNhR1ZoWkJlaEFNQUFBQURjQUFBQU5taG9aV0VIK2dTSEFBQUJGQUFBQUNSb2JYUjREM0l1akFBQUFiZ0FBQUlZYkc5allhNzdtaUFBQUFiMEFBQUJEbTFoZUhBQm5BQ29BQUFCT0FBQUFDQnVZVzFsajR2YlV3QUFYaUFBQUFNNWNHOXpkSC9nMTFZQUFHRmNBQUFHY3dBQkFBQUFBUUFBR2J2VGVGOFBQUFVBQ3dRQUFBQUFBTm94RTNNQUFBQUEyalNwVUFBQS81VUVIQU5yQUFBQUNBQUNBQUFBQUFBQUFBRUFBQU9BLzRBQVhBU0FBQUFBQUFRY0FBRUFBQUFBQUFBQUFBQUFBQUFBQUFDR0FBRUFBQUNHQUp3QURBQUFBQUFBQWdBQUFBb0FDZ0FBQVA4QUFBQUFBQUFBQXdRQkFaQUFCUUFBQW9rQ3pBQUFBSThDaVFMTUFBQUI2d0F5QVFnQUFBSUFCUU1BQUFBQUFBQUFBQUFBRUFBQUFBQUFBQUFBQUFBQVVHWkZaQUJBQUIzbzZRT0EvNEFBWEFPQUFJQUFBQUFCQUFBQUFBSUFBczBBQUFBZ0FBRUVBQUFBQUFBQUFBRlZBQUFFQUFCTEJBQUFpUVFBQUNFRUFBQkxCQUFBbHdRQUFDa0VBQUJkQkFBQUp3UUFBQ2dFQUFBQUJBQUFjd1FBQUNjRUFBQW9CQUFBQUFRQUFDQUVnQUJWQkFBQWVnUUFBQ2dFQUFDY0JBQUFrZ1FBQUFnRUFBRE5CQUFBeVFRQUFOMEVBQURKQkFBQWVBUUFBQVlFQUFCQ0JBQUFWZ1FBQUdvRUFBQ0VCQUFBaEFRQUFFc0VBQUF4QkFBQU1RUUFBRXNFQUFBY0JBQUFTd1FBQUVzRUFBQkxCQUFBU3dRQUFFc0VBQUFjQkFBQVN3UUFBRXNFQUFCTEJBQUFTUVFBQU9NRUFBRUFCQUFBU3dRQUFCd0VBQUFkQkFBQWJRUUFBSjhFQUFGQUJBQUJRQVFBQUxnRUFBQUxCQUFBU3dRQUFGWUVBQUEvQkFBQVN3UUFBRXNFQUFEUkJBQUFaQVFBQUlNRUFBQUxCQUFBVmdRQUFFc0VBQUJMQkFBQVpBUUFBRkFFQUFCUkJBQUFrZ1FBQUFRRUFBQnFCQUFBQUFRQUFJd0VBQUNNQkFBQkx3UUFBUzRFQUFDN0JBQUF1d1FBQUhJRUFBQnlCQUFCSGdRQUFBMEVBQUE1QkFBQVFBUUFBREVFQUFBeEJBQUFDQVFBQUJFRUFBQVNCQUFBU1FRQUFFc0VBQUFBQkFBQUFBUUFBQUFFQUFDREJBQUFWUVFBQUR3RUFBQlZCQUFBVmdRQUFEd0VBQUJXQkFBQUtBUUFBQ1lFQUFBbUJBQUExZ1FBQUVFRUFBRmZCQUFBWndRQUFFc0VBQUEvQkFBQUJnUUFBQUFFQUFBQUJBQUFTd1FBQUhnRUFBQUFCQUFBaEFRQUFKSUVBQUNFQkFBQVJRUUFBSVFFRWdBY0JCSUFIQVFTQUJ3RUVnQWNBVlVBQUFBQUFBTUFBQUFEQUFBQUhBQUJBQUFBQUFJY0FBTUFBUUFBQUJ3QUJBSUFBQUFBZkFCQUFBVUFQQUFBQUIzaEF1RXk0Z1BpTStKazR3UGpNK05nNDJUa0NlUVI1RFRrT2VSQzVHUGtadVJvNUhMbENPVXc1VExsTmVVMzVXRGxZK1ZsNVdqbGlPV1E1Z25tRXVmVzU5bm43K2YxNS9yb0FlZ2w2RURvUitoTzZGYm9YT2hlNkdUb2FPaHU2SGZvZStpRTZKTG9vZWlrNksvb3NlaS82TnpvNXVqcC8vOEFBQUFBQUIzaEFPRXc0Z0RpTU9KZzR3RGpNdU5nNDJQa0FPUVE1RFRrTitSQTVHRGtaZVJvNUhEbEFPVXc1VExsTk9VMzVXRGxZdVZsNVdmbGdPV1E1Z25tRXVmVzU5bm43K2YwNS9yb0FlZ2k2RHZvUitoTjZGYm9YT2hlNkdUb2FPaHU2SGZvZXVpRTZKTG9vZWlrNksvb3NlaS82TnpvNU9qcC8vOEFBZi9rSHdNZTFoNEpIZDBkc1IwV0hPZ2N2Qnk2SEI4Y0dSdjNHL1ViN3h2U0c5RWIwQnZKR3p3YkZSc1VHeE1iRWhycUd1a2E2QnJuR3RBYXlScFJHa2tZaGhpRUdHOFlheGhuR0dFWVFSZ3NHQ1lZSVJnYUdCVVlGQmdQR0F3WUJ4Zi9GLzBYOVJmb0Y5b1gyQmZPRjgwWHdCZWtGNTBYbXdBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFRWUFBQUVBQUFBQUFBQUFBUUlBQUFBQ0FBQUFBQUFBQUFBQUFBQUFBQUFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFFb0FtZ0VnQVdJQmtBSDRBbkFDd2dNVUE1WUQzQVFrQkU0RW9BVTBCYTRHUGdhdUJ2UUhWZ2ZzQ0ZBSWlnamdDUklKbWdua0NrQUtpZ3NVQzJvTHZnd1VESFFNMUExQURhWU4rQTQyRG1RT3FBOENEeklQY0ErYUQ5b1FFaEJBRUdvUXNCRUFFZm9TTmhKbUVub1NqaEs2RXh3VGFCUXVGSUFVMmhWSUZZd1Y2QlkrRnB3WENoZFNGNndYNEJoNEdONFpIaG1BR2Q0YUdobzhHbUlhaEJxcUd0d2JEaHRBRzNJYmhCd01ITGdkT2gxd0hhWWVFQjVvSHNnZkZCOHVINVFnQWlCU0lJb2c3aUdnSWdRaU1DTGlJelFqaENQVUpEd2tiQ1NtSk5vbE5DVmlKWndsNWlZK0pwZ20wQ2RDSjY0bitDZ3FLSElvd2lrNktjUXFKQ3F1S3c0ckRnQUFBQU1BUy8vTEE3VUROUUFMQUIwQUtRQUFCVDRCTnk0Qkp3NEJCeDRCRXc0QkJ5NEJKejRCTng0QkZ4UUdCeTRCSno0Qk55NEJKdzRCQng0QkFnQzQrQVVGK0xpNTl3VUYrTGhpakNJck1BRUV6SnlielFReEt5S01ZajlUQVFKU1B6OVRBUUpTTlFYNHVMajRCUVg0dUxqNEFSNEJPU2N3ZkVlYnpRUUV6WnRIZkRFb09Vb0JXa1pEV2dJQ1drTkdXUUFBQUFBRUFJbi84Z04zQXcwQUN3QVhBQ0lBTFFBQUFUNEJOeTRCSnc0QkJ4NEJOeTRCSno0Qk54NEJGdzRCQVNFV0p5NEJKdzRCQndZM0JqYzBOamNlQVJVV0p3SUFUMmdDQW1oUFRta0NBbWxPTUVNQkFVSXhNa0VCQVVMK3dnSWFhZ0VCeGJDd3hRRUJWaEVCblpTVW5RRVFBWUFDY2xWVWJnSUNiMVJWY1Q0Q1REbzVTZ0VCU1RrNlRmNHhBVVpic1FZR3NWdEdRZ0VOTzRrR0JvazdEUUVBQlFBaC82d0Q0QU5VQUFzQUZ3QXNBRGdBVlFBQUFUNEJOeTRCSnc0QkJ4NEJOeTRCSno0Qk54NEJGdzRCQnlJR0J4WVhOamNlQVJjV0p5RUdCeUVXSnk0QkFUNEJOeTRCSnc0QkJ4NEJOeUltUFFFakxnRTBOanNCTlRRMk1oWWRBVE15RmhRR0J5TVZGQVlDYVU1cEFnSm9UMDVwQWdKcFRqRkNBUUZDTVRGQ0FRRkNNVHBsS1JzVlAxbVVuQUVCRWY2RkFRb0JjbW9CQXNUOTRsdDhBZ0o3WEZ4N0F3TjdYQXNSVWdzUER3dFNFUmNRVWdzUER3dFNFQUhIQW5KVlZXMENBbTlUVlhJL0FVdzdPVWtCQVVrNU9rMTNHUllXSEI4QkJvazdEUUVoSUFGR1c3SCtJUUo4WEZ4N0FnSjdYRjE3U2c0TldBRVBGZzlaREE0T0RGa1BGZzhCV0EwT0FBQUFBQU1BUy8vTEE3VUROUUFMQUJjQUpBQUFCVDRCTnk0Qkp3NEJCeDRCRXg0QkZ3NEJCeTRCSno0QkFSY09BU0ltSnpjK0FUY2VBUUlBdVBnRkJmaTR1ZmNGQmZpNFAxSUNBVk0vUDFNQkFWTUJSQUV6aUphSk1nRWNobU5qaFRVRitMaTQrQVVGK0xpNCtBS25BbHBEUmxvQkFsbEdRMXIrRFFVMU9qbzFCU2xCQWdKQkFBSUFsLy8vQTJrREFRQUxBQmdBQUFFK0FUY3VBU2NPQVFjZUFRTWhNalkxTGdFbkRnRUhGQllDQUVkakFnSmpSMGRpQWdKaXhnSWFNaW9DdjZpb3Z3SXFBWXdCYWxKUlpnRUJaMUZSYXY1eUhCMVpxQVlHcUZrZEhBQUFCQUFwLzdJRDJBTk9BQXNBR2dBbUFFTUFBQUUrQVRjdUFTY09BUWNlQVJjaUJnY2VBUlVVQnlFeU5pY3VBUUUrQVRjdUFTY09BUWNlQVRjaUppYzFJeUltTkRZN0FUVStBVElXRnhVek1oWVVCaXNCRlE0QkFtOUhZZ0lDWWtkSFlnSUNZa2MzWHljdk5nZ0JiVElxQVFHLy9ldGNld01DZkZ4Y2V3SUNlMTBNRUFGUkRBOFBERkVCRUJjUUFWRU1EZzRNVVFFUUFka0NhVkpSWmdFQloxRlJhVThZRkNadVFTQWZIUnhacVA0c0FueGJYSHdDQW54Y1hIdEtEZ3haRHhjUFdRd09EZ3haRHhjUFdRd09BQUlBWGYvY0E2UURKQUFuQUU0QUFBVVdOajhCTmljMkx3RW1JZzhCQmljdUF5Y21Qd0UrQVM4QkppTW1Ed0VPQVJVVUhnSTNJaTRDSnpZM05qYytBUjhCRmhRUEFRWVVGeDRERnhZeVB3RTJNaDhCRmdZUEFRWUN6RGRRSVFrbkFRRTVmUjAvR3lFT0R4STZNaXdOQ2c0aEdnRVZWeWN1S1NzTUpDQnUwTlJkVThDcmJ3RUJNZ1FGRXljTVV3Y0tKaFlRRXpjMFFob1dNaFltQ2hVS2ZSTUJFZ1l1SXdFaEpRb3NLQzhvVmhRYUlRNEtEREl5TXhVT0RpRWJQeDE5T0FFbkNTQlFOMTNWMEc1Q2E2dkVWRWd0QXdRUUFoTjlDaFVLSmhjeEZobytORG9VRUJZbUNnWlVEQ2NVQ0RFQUFBVUFKd0FQQTlrQzhRQU5BQmNBSFFBaEFDNEFBRGNoTWpZMUVUUWpJU0lHRlJFVUNRRTJNeUV5RndFR0lnVVJOUmNISmdFUkp6Y0JJaWNsRnhZM0ZqOEJCUVlqclFLeU96K0cvVTQ2UUFHbS9yd09GQUtxRkEvK3ZSc3kvb0QzOWdFRE1QWDEvUk1TRFFFQUhDd3RMQzBjQVFBT0V3OUNRd0haaEVKQy9pZUZBVnNCUUFZSC9zRWJ1d0haQlBMekJBSGMvaUx4OGYzZ0J2MGJLd0VCS3h2OUJnQUFBZ0FvLzc0RDJBTTVBQmtBTUFBQUpUWVhGak0rQVRjdUFTY09BUWNVRmg4Qk1pTVhIZ0VYTnpZQk5pUTNGZ1FYQmdRSElpY3hKZ1lIQmo0Qkx3RXVBUUZsS1NzakpLL2tCQVRrcjYva0JFUS9FZ0VDQnhrWkFSb00vc3NGQVFySnlRRUtCUVgrOXNrcktDdFphQzFFSXgwWFNsVmtEZ2tGQkx5Smlid0VCTHlKUm53dkRRUVRMeHNOQmdGTXFPQUVCT0NvcWQ4RkJnaEZId3hIVmhrUU41a0FBQUFEQUFEL3RRUUFBdVVBSndCQUFGa0FBQmN5Tmo4QkZoY3pGeDRCTXo0QlBRRXpQZ0UzTlM0Qkp5TTFMZ0VuSVE0QkJ4RWVBUmN6RlJRM0xnRXJBU0ltSnhFK0FUTWhNaFlYRlNNT0FRY1ZGQmNIQlNjdUFTc0JJaVluTlQ0Qk15RXlGaGNWRGdFckFTSUdCL0VOR1JCNEowdDdkeEFXRFJJVUQwUlFBUUZRUkRnQlVFbitBa2RUQVFGVFJ5ODJBUThNUmpBMEFRRTBNQUgzTURRQjZVZE5BUWVEQWlaeUNoSU9kaTB4QVFFeExRRlVMVEVCQVRFdEpnd1BBU01NRDJzckFXWU5Ed0VYRlZVQlRFZlNSMHdCRzBsUEFRRlBTZjYzU1U4QllTcWpFQTR6TWdGRk1qTXpNaGtCVEVmU0hSaDVKMmNKQnpBdjBDOHdNQy9RTHpBT0R3QUFBQUVBYy8veEE0MEREd0FzQUFBbEhnRVhGamMrQVRVMEppOEJKaU1HRHdFR0lpY3VBeWNtTkQ4Qk5qYzBMd0VtQnlJR0J3NEJGUjRCQVV4ZjBWNVRPeElURFErRUhSY2NIQjhIRkFjVVBVRXpDd1VHSGg0QkZWd1lKQlVxRXg4ZEFuak5YbnNDQVQ4VEt4WVFIZ3RkRlFFZUhnWUVERE5CUFJRSUVnY2dIQndYSG9FZkFSTVNIa2twWHM4QUJBQW5BQThEMlFMeEFBb0FFUUFZQUNRQUFBRVdOd0VtSXlFaUJ3RVdCUWtCQmhVUkZBVTJOUkUwSndrQklUSTNBUWNHSWk4QkFSWUNBUm9iQVhRWVAvMU9OeFVCZHh2K1N3RXYvdEFLQTZnS0NmN1IvZ3dDc2pZVi9zd2RLbHdxSGY3TUdBRlBBUndCY1JZVi9vNGMrZ0VyQVN3U0xQNG5MaElUTFFIWkt4TCsxZjZRRkFFeUhDb3FIUDdQRlFBQUFRQW8vNzREMkFNNUFCWUFBQk0ySkRjV0JCY0dCQWNpSnpFbUJnY0dQZ0V2QVM0QktBVUJDc25KQVFvRkJmNzJ5U3NvSzFsb0xVUWpIUmRLVlFHdHFPQUVCT0NvcWQ4RkJnaEZId3hIVmhrUU41a0FBZ0FBLzdJRUFBTHRBQndBTlFBQUZ6STJQd0V1QVNjMVBnRTdBU2N1QVNjaERnRUhFUjRCRnpNVkZCWUZQZ0U5QVRNK0FUYzFMZ0VuSVE0QkhRRVVGaGN6Rng0QjVnc1NEV29RRlFFQlhsVCtBUVJIUHY0UFAwb0JBVW8vUEJFQ1dROFJKajlLQVFGS1AvNmFRa2hJUW5PRERSSWJDd3hpQ3k0czhGUmREamhDQVFGR1FmNmNRa3NCYVJFVU13RVVFR29CUzBIZFFVWUJBVVpCM1VGTEFYY01EQUFIQUNBQUdnUDZBellBQ3dBZ0FDd0FPQUJFQUUwQVZnQUFBVFltQndZbU56WVdCd1ltQVM0Qkp6UTJOejRCQndZMk56WVdCd1lXRnhZQ0F5NEJCdzRCRng0Qk56NEJBd1lXTnpZV0J3WVdOelltQVE0Qkp5NEJOejRCRng0Qkl5WU9BUjRCUGdFbU55WU9BUjRCUGdFbUF4c0pMQ01nQ3g1SldSTU5OZjZlblBFR1MwU1UweUVFR0FOemhDSUVDUXUzemhvTHJYcDZtQVVMclhwNm1Ca2pEaVZxZ3h3R1BROG51UDdYR25VOU9pb1lHMnc3UERHNUV5Z1hDU1VxR0FzcUJ3OElBdzhRQ0FRQ0V5TXhCZ00yQ3d4bFJoMFIvaVlCaDNnL2lrU05CSVlSQlFFdk1GOE5DUU5OL3NzQkFWQmFDZzU2VVZCYkNnOTZBa0lNUHdNUmtHa2tGQ0dUelAyaE9ERVNGVjgwTXpBT0VWMElEaVVrRVE0bUpDRURCZzROQndZUERRQUFBQVlBVmYvMkJCd0RDZ0FXQUI4QUtBQTVBRU1BVFFBQUFUSVhMZ0VuRGdFSEZCWVhCemNlQVRNeU55WTFQZ0VuTWhZVUJpSW1ORFlISWlZME5qSVdGQVlCTGdFbkRnRUhIZ0VYTWpZM0Z5YytBU1VpSmpRMk54NEJGQVl6SWlZME5qY2VBUlFHQXVNUkVCbS9nWkhCQkVoQkluY2dPUjhRRUFvQ296c1VGeGNvSGg3YkZCOGZKeGNYQXMwRXFIZDlvd01EbzMwWk5CcGVHalJEL29BT0ZCUU9FeGNYcVE0VUZRMFRGeGNDR3dKcWhRSURvMzFHZEMxblBBY0tBU0ltYzVoZ0Z5Y1hGeWNYVlJjbkZ4Y25GLzd1YVl3REE0eHBhb3dEQ3djMFZpZGtaUlVhRkFFQkZCc1VGUm9VQVFFVUd4UUFBQUFKQUhyLytnT0dBd1lBQndBUUFCZ0FJQUFvQUVBQVNBQlFBRmdBQUNVT0FSOEJQZ0UzSlJVV0Z6STNKeVlHRXlJSEZ4WTNOU1lGQmdjVUZ6YzJKemNPQVFjaE1qWW5CeFVVSHdFV093RXlQd0UyUFFFMEx3RW1Ld0VpRHdFR0pRY0dGek0yTnpRREVSUVdQd0V1QVFFZUFSY1JMZ0VIQWZVQ0FnS1FQR01qL2hSTldpZ2w3UUlGcHljbDdnVUJUZjVGSlFFSTdnTUdFVHhqSXdGUkFnSUN0Z0plQWdPRkF3SmVBZ0plQWdPRkF3SmVBZ0ltN1FRR3pDVUJyUVVDa0JaTi9ZUVZUalVCQkFLb0FRUUNrQlZOTlVYTkpRRUk3UUlDQWhjSDdnTUZ6U1hkVFZzb0plNEZBc2dXVFRVRkFwMkVBd0plQWdKZUFnT0VCQUpkQXdOZEF3ZnRCUUpOV3ljQkhmNndBZ0lDa0R4ai9sdzhZeU1CVVFJQ0FnQUFBQUFGQUNqL3hRUFlBenNBR0FBeEFEb0FRd0JNQUFBRk1qWS9BU0UrQVRVUk5DWWpJU0lHRlJFVUZoY3pGUlFXTnpVMEppc0JJaVkxRVRRMk15RXlGaFVSRkFZaklTSUdCd011QVNJR0ZCWXlOamN1QVNJR0ZCWXlOamMwSmlJR0ZCWXlOZ0V2RUJzVGxBRVRZR1JrWVAzWVlHUmtZQlVZS0E4Uk5VRStQa0VDS0VFK1BrSCs2aEVYREZFQklEQWdJREFneEFFZ01DQWdNQ0RFSVRBZ0lEQWhPeEVSZ3dGbFh3RklYMlZsWC82NFgyVUJieGtkVG53U0QwQS9BVWcvUUVBLy9yZy9RQWdOQVNjWUlDQXdJU0VZR0NBZ01DRWhHQmdnSURBaElRQUFBQUVBblAvWkEyUURKZ0FwQUFBbExnRW5GQVlISGdFSEJpWW5EZ0VuSmpZM0xnRTFEZ0VISWlZM05qOEJKalkzSGdFSEZ4WVhGZ1lEV2hFMkF5a3JHRHNJRThBME5NQVRDRHNZS3lrRE5oRUlBaG9NRUNZRmdJMk1nQVFtRUF3YUFuRUVUUVlvV2lZSEhoUU9BZ1lHQWc0VUhnY21XaWdHVFFST1ZpZ29YNVRLQkFUSWxsOG9LRlpPQUFBQUJBQ1NBS1VEYmdKYkFBOEFId0F0QUQ4QUFCTVZIZ0V6SVRJMlBRRTBKaU1oSWdZbklUSVdGUkVVQmlNaElpWW5FVDRCQlJVVUh3RVdOamMxTGdFUEFRWW5OejRCSGdFVkVSUU9BU1l2QVNZOUFUVGJBUlFRQVNVUEZSVVAvdHNRRkFFQmJoNHJLeDcra2g0cUFRRXFBakVISkFrVUFRRVVDU1FIS1cwSkZCUUxDeFFVQ1cwT0FlN2NEeFVWRDl3UEZSVmVLeDcrM0I0ckt4NEJKQjRydFV3SkJSNEdDZ3VHQ3dvR0hnVWxXQVlEQ1JJTC91SUxFZ2tDQjFnTEVYQVJBQUFBQUFVQUNQL25BL2dER1FBYkFEc0FSd0JWQUdRQUFCY2hOamNSSmlzQklpWXZBUzRCS3dFaUJnOEJEZ0VyQVNJSEVSWTNJaVkxRVRRMk93RXlOajhCUGdFN0FUSVdId0VlQVRzQk1oWVZFUlFHSXlVK0FUY3VBU2NPQVFjZUFRRXlOamMwTGdFaURnRVZGQllYQVM0Qkp6NEJOekllQWhRT0FvOEM0b1lCQVlaa0dCb05JdzhuSWFzZ0tBOGpEUm9ZWVlZQkFZY2dJeU1nY1Iwa0VDSVJIaHgvSEI0UkloQWtIWFFnSXlNZy9wQmtnd01EZzJSa2d3TURnd0dZRmg0QkRoa2NHUTRlRi83TVNGOENBbDlJSWowd0dob3dQUmtCaEFIQmhBMFFKaElURXhJbUVBMkUvaitFUkNJaUFia2lJUTRTSlJRUER4UWxFZzRoSXY1SElpSkVBNFJrWklRQ0FvUmtaSVFCVVI0V0R4Z09EaGdQRmg0Qi91OEJZRWhJWHdJWk1ENUVQakFaQUFBQUFBTUF6ZisxQXpNRFN3QU5BQmtBUWdBQUFSRXVBU2NPQVFjUkhnRVhQZ0VuRkFZaUpqVVJORFl5RmhjQklnWVVGak1oTWpZMEppc0JOVDRCTnpVMEppSUdIUUVPQVFjdUFTYzFOQ1lpQmdjVkhnRVhGUUtjQVZWR1JsVUJBVlZHUmxWQU1WTXlNbE14QWY3bERoSVNEZ0YvRFJNVERhQjlsQUlUR3hNQmdYQnZnZ0VUR2hNQkFwUjlBWlVCRGt0YkFnSmJTLzd5UzF3QkFWeExNRGc0TUFFT01EYzNNUDFURXhzVEV4c1RaQXlnZ0ZjTkV4TU5WVytDQWdLQ2IxVU5FeE1OVjRDZ0RHUUFBZ0RKLzhRRE53TTNBQkFBSHdBQUFTNEJKdzRCQng0Qkh3RVdNajhCUGdFbFBnRTNIZ0VYQmdJSEJpSW5KZ0lDN2dLQ2FtcUNBZ0pzV1FvTEpBc0tXV3o5M1FPd2hJU3dBd200U1JRekUwbTRBZHVCa1FFQmtZRkwwblVPRFEwT2RkTktwclVCQWJXbWcvN1lWaFlXVlFFcEFBQUNBTjMveEFNakF6d0FEUUEyQUFBQkVTNEJKdzRCQnhFZUFSYytBUUVPQVJRV015RXlOalFtSnlNMVBnRTNOVFFtSWdZSEZRNEJCeTRCSnpVdUFTSUdIUUVlQVJjVkFvSUJSem82UndFQlJ6bzZSLzYzRFJNVERRR1FEUk1URGFoM2l3RVNHaElCQVgxbVpuMEJBUklhRWdHTGRnR0FBVEk5VEFFQlREMyt6anhOQVFGTi9zRUJFeG9URXhvVEFWNE1tbmRsRFJJU0RXVmtmQUlDZkdSbERSSVNEV1YzbWd4ZUFBQUFBZ0RKLzhRRE53TTNBQTRBR2dBQUV6NEJOeDRCRndZQ0J3WWlKeVlDSlQ0Qk55NEJKdzRCQng0QnlRT3doSVN3QXdtNFNSUXpFMG00QVM0dlBnRUJQaTh2UGdFQlBnSGJwclVCQWJXbWcvN1lWaFlXVlFFcE9nRStMeTgrQVFFK0x5OCtBQVVBZVAvQUE0Y0RRQUFSQUIwQVBnQktBRmtBQUFFZUFSMEJGeEV1QVNjT0FROEJGelUrQVFFV01qWTBKd0VtSWdZVUZ4TWlCaFFXTXlFeU5qUW1Ld0UxTmpjbkJnY3VBU2MxTkNZaUJoMEJIZ0VYRlFFMEppSUdCeFVVQnhjMk5RVXlOamNuQmlNaUppYzFKeFVlQVFIb0pTeENBazlDT2t3SkFUOEJMQUdMQ2hzVEN2MDBDaHNVQ3A0TkV4TU5BWkFORXhNTnAxSTdMalZMWm53Q0Voc1NBb3AzQVVNU0doSUJCVFVQL3RVWkpBNDFCZzhpSmdGQ0FVMERBZ0V6Sjg1Q0FRNUVWZ0VCUXpZTlBpd25NLzBkQ2hNYkNnTE5DaFFiQ3YwV0V4b1RFeG9UWGdncUxpUUJBbjFrWlEwU0VnMWxkNXNNWGdIaERSSVNEV1VaR1RNdU41TUpDVFFIS1NJYVExUktTUUFBQXdBRy8vVUQrZ01MQUF3QUh3QXJBQUFYSVRJM0VTWW5JU0lIRVJZekFTNEJEd0VuSmljaUR3RVJOak1oTWhZVkVTVStBVGN1QVNjT0FRY2VBWTBDNW9ZQkFZYjlHb1lCQVlZQ1FSMUhIY0ZRR3g0ZEdvQUJRUUxrSUNMOWtpbzVBUUU1S2lzNUFRRTVDb1FDRElRQmhmMzBoUUdNR2dFYnJVZ1lBUmh6QWRoRElTTCtKOU1CT2lvck9RSUNPU3NxT1FBQUFBUUFRdi9SQTc0REx3QWJBQ1VBTEFBNEFBQUZNajhCTmpVUkppY2lEd0VuSmlJUEFRWVZFUlFXTXpJL0FSY1dKU0kxRVRRL0FSRUhCZ1VtTHdFUkh3RVRFVGMyTnhZWEVSUVBBUVlDalJnVDRTVUJNQThVNU9rVE1CVGVKaG9YRHhYWjdSaitHQVlPd01JREFkWUpDYm9OdjBYQ0JBSUZBUTZzQ2k4TGZ4VXJBbEl3QVF0K2pnd01meFVxL2E0WUdneDFoUXhwQndJVER3bHYvY3hyQVE0RkJXa0NNZ2gwL2M4Q05Xa0NBUUVHL2UwUUNHUUdBQUFEQUZiL3pRT21BekFBQ1FBUkFDa0FBQUUzTmpRdkFTWUdEd0VCTndFbkFRY0dGZ01oTWpZM0VRY1JEZ0VqSVNJbkVUWXpJVGNoSWdjUkZnTjhId3NMQ2dvYkN4LytUVk1CZXp2K2hpY0NDYXNCOXpvL0FVVUJIaGYrQzBFQ0FrRUJjMFgrUjRZQkFRTEtId3diQ3dzS0Fnb2YvZ2NrQVhvNi9vWlFCZ3IrdzBOQ0FkMUYvbXNoSWtNQjUwTkZoUDRTaFFBQUJnQnEvNkVEbGdOZkFCOEFLUUF6QUVBQVRRQlpBQUFsRXpNeU5qUW1KeU0xTkNZbkl3NEJCeFVqRGdFVUZqc0JFeDRCRnlFK0FRRTBOanNCTWhZZEFTTURMZ0VuQXlFRERnRUhKekkyTnhNMEppSUdCd01VRmlNeU5qVUROQ1lpQmhVVEhnRTNFVFFtSWdZSEVSNEJNallETGg0ckRSSVNEYnc1TXFFeU9BRzZEUk1URFNzZEF6Z3ZBWWt1T1A1ZUdCU1dGQmp1UnhNWUFSNENEeHdCR0JRL0N3NEJEQTRWRGdFTkR2TUxEZzBQRlE0TkFRMmtEeFVQQVFFUEZROEdBbk1TR3hNQlFDNDJBUUUyTGtBQkVod1MvWTB2TlFFQk5RTWZFaGNYRWp6OUp3RVlFd0pzL1pRVEdBRk1EdzBCeEEwUER3eitPd3dRRUF3QnhRd1BEdzMrUEEwUEhBSEZEQThQRFA0N0RCQVFBQUFBQWdDRS81d0RmUU5rQUJvQU9BQUFKVEkyTlJFbkZ4WXlOalF2QVNZaUR3RU9BUll5UHdFSEVSUVdBeUUySnhFMkp5TVZNeklXRlJFVUJpTWhKaWNSTmpjek5TTWlGUkVVQWdBT0ZBSmRDaHNTQ3BFTUdneVJDUUVSSEFwZUF4VG9BZXlIQVFHSGQzWWdJaUlnL2hkQ0FRRkNkbmlHN0JNT0FiaEFZd29RR3dtTURBeU1DUm9SQ21SQi9rZ09FLzZ3QVlRQnA0UUJSU0lpL21FaUlnRkRBWjlEQVVXRi9sbUZBQUFBQUFJQWhQK3hBMzBEVGdBYUFEZ0FBQ1V5UHdFMk5DWWlEd0UzRVRRbUlnWVZFUmNuSmlJR0ZoOEJGZ01oTWljUk5pY2pGVE15RmhVUkZBWWpJU0luRVRZM016VWpCaFVSRkFJQURReVJDaEliQ2wwQ0ZCd1VBMTRLSEJFQkNwQU02UUhzaHdFQmgzeDdJQ0lpSVA0WFFnRUJRbnA4aHNzTWl3b2JFQXBrUUFIRURoTVREdjQ4UUdRS0VCc0tpdzMrNklRQnU0UUJSU01oL2swaUlVTUJzME1CUlFHRS9rV0ZBQU1BUy8vTEE3VUROUUFMQUJjQU5BQUFCVDRCTnk0Qkp3NEJCeDRCTnk0Qkp6NEJOeDRCRnc0QkpUSS9BUmNXTWpZMEx3RTNOalFtSWc4Qkp5WWlCaFFmQVFjR0ZCWUNBTGo0QlFYNHVMbjNCUVg0dUp2TkJBVE1uSnZOQkFQTy90SVBDbnA1Q2g0VENucDdDaFFjQ250N0Nod1VDbnA2Q2hRMUJmaTR1UGdGQmZpNHVQaEVCTXljbTgwRUJNMmJuTXl5QzNwNkNoTWVDWHA3Q2h3VUNudDZDaE1kQ25wNkNSNFRBQUFDQURILzlnUFBBd2tBSUFBK0FBQUZNalkzQVRZMEp3RXVBU01pQmgwQkl3WUNGeDRCTXhZMk56NEJGek1WRkJZM0lqMEJOQWNqRGdFSEJpSTFQZ0UzTXhZOUFUUTJNaGNCRmhRSEFRWUNLdzhjRUFGU0Z4ZityaElaRHhjY0RlYlZBUUVaRWc0YkN6aW5ldzBjTHdZT09wbkNKUUlGQXF6Wk9nNERCd01CTVFVRi9zOEVDUTRPQVQ4WUxCZ0JQQkFQSGhlaUF2N3c4QndkQVEwVGFGQUJwQlljWEFhbUR3RUJYMUlFQlo3eEJ3RVBxZ01EQS83YkJBZ0UvdDhFQUFBQ0FESC85Z1BQQXdrQUlBQStBQUFGTWpZOUFUTTJGaGNlQVRjeU5qYzJBaWNqTlRRbUl5SUdCd0VHRkJjQkhnRW5JaWNCSmpRM0FUWXlGaDBCRkRjekhnRVhGQ0luTGdFbkl5WWRBUlFCMVJZY0RYdW5Od3diRGhJWkFRSFY1ZzBjRnc4YUVmNnVGeGNCVWhBYkNRTUUvczhGQlFFeEF3Y0REanJackFJR0FTWENtVG9PQ1J3V3BBRlFaeFFOQVIwYzhBRVFBNklXSGc4US9zUVlMQmord1E0T1hBUUJJUVFJQkFFbEF3TURxZzhCQi9HZkJBUlNYd0VCRDZZR0FBQURBRXYveXdPMUF6VUFDd0FYQUVNQUFBVStBVGN1QVNjT0FRY2VBVGN1QVNjK0FUY2VBUmNPQVFFZUFSYytBVGMwSmlJR0ZRNEJCeTRCSno0Qk56SVhCd1llQVRJL0FUWTBMd0VtSWdZVUh3RW1JdzRCQWdDNCtBVUYrTGk1OXdVRitMaWJ6UVFFekp5YnpRUUR6djZsQW14U1VXc0NFUmdSQWtvNE9Vb0NBa281Q0FjcUNBRU9Gd2hUQ0FoU0NCZ09CeDRHQmtwcU5RWDR1TGo0QlFYNHVMajRSQVRNbkp2TkJBVE5tNXpNQVZSU2JRSUNiVkVNRUJBTU9Vb0NBa281T0VvQ0FTa0lHQThJVXdnWENWUUlFQmNJSHdFQ2FRQUNBQnovc1FQa0Ewa0FHUUE5QUFBWEZqOEJGeFkySndNM05pWWpCUU1tSWdjREpTSUdId0VEQmpjaVB3RTJMd0VtTmpNRkZqOEJOaklmQVJZM0pUSVdEd0VHSHdFV0JpOEJKZzhCQnRzYUtPUGpLRFVRV2VVb0ZETCs1MVVQUVJCVi91Y3hGU25sV2hCWkFRRlZDUmJWQXdFRUFRTWFDRW9DQXdGS0NCb0JCQU1CQTlVV0NsVUJBZ1BPRmhYUEFqd1RIcWFtSGljdUFRdWtIRDhDQVF3dkwvNzBBajhjcFA3MUxrRUU5UmtQa3dJREJRRWErQVFFK0JvQkJRTUNrdzhaOVFRQ0E1MFFFSjRDQUFBREFFdi95d08xQXpVQUN3QVhBRFFBQUFVK0FUY3VBU2NPQVFjZUFUY3VBU2MrQVRjZUFSY09BU2MrQVRjMU16STJOQ1luSXpVdUFTSUdIUUVqRGdFVUZqc0JGUlFXQWdDNCtBVUYrTGk1OXdVRitMaWJ6UVFFekp5YnpRUUR6cHdSRXdHR0VoWVZFNFlCRXlJU2hoTVdGeEtHRWpVRitMaTQrQVVGK0xpNCtFUUV6SnlielFRRXpadWN6SndCRlJOL0VpTVNBWVlURmhZVGhnRVNJeEovRWhZQUFBTUFTLy9MQTdVRE5RQUxBQmNBSXdBQUJUNEJOeTRCSnc0QkJ4NEJOeTRCSno0Qk54NEJGdzRCQVNFeU5qUW1JeUVpQmhRV0FnQzQrQVVGK0xpNTl3VUYrTGlielFRRXpKeWJ6UVFEenY2NEFWa1NGaFVUL3FjVEZoYzFCZmk0dVBnRkJmaTR1UGhFQk15Y204MEVCTTJibk13QlJCSWlFeE1pRWdBQ0FFdi95d08xQXpVQUN3QVhBQUFGUGdFM0xnRW5EZ0VISGdFM0xnRW5QZ0UzSGdFWERnRUNBTGo0QlFYNHVMbjNCUVg0dUp2TkJBVE1uSnZOQkFQT05RWDR1TGo0QlFYNHVMajRSQVRNbkp2TkJBVE5tNXpNQUFBQUFBSUFTLy9MQTdVRE5RQUxBQ2dBQUFVK0FUY3VBU2NPQVFjZUFUY2lKalEvQVNjbU5EWXlId0UzTmg0Q0R3RVhGaFFHSWk4QkJ3WUNBTGo0QlFYNHVMbjNCUVg0SGc4VkM0Q0FDeFVlQ29HQkN4MFVBUXVBZ0FvVkhncUFnQXMxQmZpNHVQZ0ZCZmk0dVBqeUZSNEtnWUFLSGhRS2dJQU1BUlFlQ29HQUNoOFZDb0dCQ2dBQUFBQUNBRXYveXdPMUF6VUFDd0EzQUFBRlBnRTNMZ0VuRGdFSEhnRURQZ0UzTWhjbkpqUTJNaDhCSGdFUEFRWWlKalEvQVNZSERnRUhIZ0VYUGdFM05EWXlGaFVPQVFjdUFRSUF1UGdGQmZpNHVmY0ZCZmdMQTJ0TUJnWWZCdzhZQ0ZRSEFRaFVDUmNQQ0NvSENEcE1BUUZNT2psTEFoRVpFUUp0VWxOdU5RWDR1TGo0QlFYNHVMajRBWjVTYXdJQkh3Z1lFQWhXQ0JnSVZBZ1BHQWdxQVFFQlN6azZTd0lDU3pvTUVSRU1VMjRDQW04QUFBQUJBQnovc1FQa0Ewa0FHUUFBRnhZL0FSY1dOaWNETnpZbUl3VURKaUlIQXlVaUJoOEJBd2JiR2lqajR5ZzFFRm5sS0JReS91ZFZEMEVRVmY3bk1SVXA1Vm9RUEJNZXBxWWVKeTRCQzZRY1B3SUJEQzh2L3ZRQ1B4eWsvdlV1QUFBQ0FFdi95d08xQXpVQUN3QW9BQUFGUGdFM0xnRW5EZ0VISGdFM0lpWTlBU01pSmpRMk93RTFORFl5RmgwQk16SVdEZ0VyQVJVVUJnSUF1UGdGQmZpNHVmY0ZCZmkzRWhPTkV4Y1dGSTBUSkJTTkZCY0JGaFNORkRVRitMaTQrQVVGK0xpNCtOc1hFNFVUSlJPT0V4Y1dGSTRUSlJPRkZCWUFBQUFBQWdCTC84c0R0UU0xQUFzQUZ3QUFCVDRCTnk0Qkp3NEJCeDRCRXlJbU5EWXpJVElXRkFZakFnQzQrQVVGK0xpNTl3VUYrQU1VRnhjVUFXb1VGaGNUTlFYNHVMajRCUVg0dUxqNEFZb1RKUk1USlJNQUF3QkwvOHNEdFFNMUFBc0FGd0FqQUFBRlBnRTNMZ0VuRGdFSEhnRTNMZ0VuUGdFM0hnRVhEZ0VuUGdFM0xnRW5EZ0VISGdFQ0FMajRCUVg0dUxuM0JRWDR1SnZOQkFUTW5Kdk5CQVBPbTNTZUF3T2VkSGFkQXdPZU5RWDR1TGo0QlFYNHVMajRSQVRNbkp2TkJBVE5tNXpNVWdPZWRYV2VBd09lZFhXZUFBQUNBRW4veVFPM0F6Y0FDd0FnQUFBRkxnRW5QZ0UzSGdFWERnRVRKaUlQQVFZaUx3RW1JZ1lVSHdFV01qOEJOalFDQUxyNEJRWDR1cnI0QlFYNEN3a2FDY2dLR1FrN0Noa1RDV2dKR1FyMENUY0YrTHE2K0FVRitMcTYrQUpHQ1FuSUNnbzZDaE1aQ21jSkNmUUtHUUFBQVFEakFHTURIUUtkQUJzQUFEY0dGQll5UHdFWEZqSTJOQzhCTnpZMEppSVBBU2NtSWdZVUh3SHVDeFlmRE56Y0N4OFhDOXpjQ3hjZkM5emNEQjhXQzl1a0N4OFhDOXpjQ3hjZkM5emNDeDhYQzl6Y0N4Y2ZDOXdBQUFBQkFRQUFnQU1BQXRnQUZnQUFKUzRCSno0Qk56VVhCelVPQVFjZUFSYytBVGN6RGdFQ0FHMlFBd09RYmNEQVhIb0NBbnBjWEhvQ0tBT1FnQU9RYlcyUUExaUFiMjhDZWx4Y2VnSUNlbHh0a1FBQUFBQUJBRXYvblFPMUExNEFLUUFBQlQ0Qk55NEJKeVlPQVJZWEhnRVhEZ0VITGdFblBnRTNGUjRCUHdFMk5DOEJKZ1lIRlE0QkJ4NEJBZ0M0K0FVQllsUVBIUkVIRFVWUkFRUE9tNXZOQkFPYWZBRVpFb29PRG9rU0dnR1p4Z01GK0dNRitMaHR1RDBMQlJ3YkNqS1lYWnZOQkFUTm00WEFIajRXREExZ0Noc0xZQXdMRnowZzY2SzQrQUFBQUFJQUhQK3hBK1FEU1FBWkFDMEFBQmNXUHdFWEZqWW5BemMySmlNRkF5WWlCd01sSWdZZkFRTUdKUkUySHdFV055VXlGZzhCQmg4QkZnWXZBU2JiR2lqajR5ZzFFRm5sS0JReS91ZFZEMEVRVmY3bk1SVXA1Vm9RQVVBQ0FVb0lHZ0VFQXdFRDFSWUtWUUVDQTg0S1BCTWVwcVllSnk0QkM2UWNQd0lCREM4di92UUNQeHlrL3ZVdTV3SWlBUVQ0R2dFRkF3S1REeG4xQkFJRG5RZ0FBQUFNQUIzL25RUGpBMk1BREFBWkFDWUFNd0JBQUUwQVdnQm5BSFFBZ1FDT0FKc0FBQUVpQmdjVkhnRXlOamMxTGdFSERnRWZBUjRCUGdFdkFTNEJCU1lHRHdFR0hnRTJQd0UySmdVR0ZoOEJGajRCSmk4QkpnWUZMZ0VQQVE0QkhnRS9BVDRCRnpRbUp5TU9BUlFXRnpNK0FTVVVGaGN6UGdFMEppY2pEZ0VGTmlZdkFTWU9BUllmQVJZMkpSNEJQd0UrQVM0QkR3RU9BUVUrQVM4QkxnRU9BUjhCSGdFbEZqWS9BVFl1QVFZUEFRWVdGekkyTnpVdUFTSUdCeFVlQVFJQURSRUJBUkVhRVFFQkVmNE1CZ1pNQnhnV0J3ZE1CeGNCMkF3WENFd0dCeFlZQjB3R0J2MWdCZ2NMaEFzWURRWU1oQXNZQXo4SEdBdUZDd1lORnd5RUN3YzZFUTZZRFJFUkRaZ09FZnc2RVEyWkRSRVJEWmtORVFPR0JnY0xoQXdYRFFZTGhBd1kvTUVIR0F1RkN3WU5HQXVFQ3djQ21nd0dCa3dIR0JjR0Jrd0lGLzRwQ3hjSVN3Y0dHQmNIVEFZRy9RMFJBUUVSR2hFQkFSRURZeEVPbUEwUkVRMllEaEZBQnhnTGhRc0dEUmdMaEFzSEJnWUhDNFFMR1F3R0M0VUxHS29NRndoTUJnWVhHQWRNQmdZTURBWUdUQWNZRndZR1RBZ1g1ZzBSQVFFUkdoRUJBUkVORFJFQkFSRWFFUUVCRWY0TEZ3aE1CZ1lYR0FkTUJnWU1EQVlHVEFjWUZ3WUdUQWdYdlFjWUM0VUxCZzBYRElRTEJ3WUdCd3VFREJjTkJneUVDeGhIRVE2WURSRVJEWmdPRVFBQUFBSUFiZi9wQTVRREZ3QVZBQ0VBQUNVeU5qY1hGakkrQVM4QlBnRTNMZ0VuRGdFSEhnRTNMZ0VuUGdFM0hnRVhEZ0VCdGpSaEs4c09LaG9CRHNvZ0l3RUV1b3lNdWdNRHVveHRrd0lDazIxdGt3TURrNFFnSHNzT0d5a1B5aXBsT1l1N0F3TzdpNHk2UXdPVGJXMlNBd09TYlcyVEFBQUFBQUVBbndBWEEyRUM2QUFjQUFBbFBnRTFFU0UrQVRRbUl5RVJOQ1lpQmhVUklTSUdGQllYSVJFVUZnSUFFQllCRlJBV0ZoRCs2eFlnRnY3ckVCWVdFQUVWRmhjQkZROEJIUUVXSUJZQkhnOFZGUS8rNGhZZ0ZnSCs0dzhWQUFBQUFBRUJRQUJBQXNBQ3dBQUZBQUFCTndrQkp3RUJRRUVCUC83QlFRRC9BbjlCL3NEK3dFRUEvd0FCQVVBQVFBTEFBc0FBQlFBQUFTY0pBVGNEQXNCQi9zRUJQMEgvQW45Qi9zRCt3RUVBL3dBQUFRQzRBSVVEV2dKL0FCY0FBQUVYRmhRSEFRWWlMd0VtTkQ4Qk5qSWZBUll5TndFMk1nTkREUW9LL2x3TEhReTFDd3NOQ3gwTGRRd2RDd0ZqQ3gwQ2RBMExIUXYrWEFzTHRnc2REQXdMQzNVS0NnRmpDd0FBQUFJQUMvKzlBL1VEUXdBbkFEMEFBQmNoUGdFMUVSY1dGekkyTnlZdkFUVTBKaWNqRGdFZEFTY21JZ2NCQmdjZUFUTTJQd0VSRkJZQk5DWXJBU0lHRlJFakppY1JBVDRCRndFUkJnY2o1d0l6TGpJM0RSSVFGQUVCREpVUkRqZ09FYW9YT0JmK1N3d0JBUlFRRWcwM013SENFUSsyRHhLUEtRRUJKZ2NRQndFbUFTbVFRd0V4TFFHSE1nNEJFZzhUQ29mOURoQUJBUkFPa1pvVkZmNXlDUk1QRWdFT012NTVMakFCWVE4UkVRLys0d0VxQWJVQkRBWUJCLzcwL2tzcUFRQUFBQUFEQUV2L3l3TzFBelVBQ3dBWEFDd0FBQVUrQVRjdUFTY09BUWNlQVRjdUFTYytBVGNlQVJjT0FTVXlQd0UyTWg4QkZqSTJKaWNESmlJSEF3WVVGZ0lBdVBnRkJmaTR1ZmNGQmZpNG04MEVCTXljbTgwRUE4Nyt0UXNHbEFZS0JwTUlGUTBCQTZRTEtncWxBd3cxQmZpNHVQZ0ZCZmk0dVBoRUJNeWNtODBFQk0yYm5NeUlCNVFGQlpRSERSTUpBYU1hR3Y1ZENCUU5BQVFBVnYvVEE2d0RLZ0F0QUdZQWNnQitBQUFsTmpjK0FUYzJOeVkyTnlZbkJpWTNOU1luQndZaUx3RUhGUllHSnlNSEZ4WVVEd0VXRnpNMkZnY1dGejRCQnlZbk56WW1Ed0VtSnpjMk5DOEJOamNYRmpZdkFUWTNGeFl5UHdFV0Z3Y0dGajhCRmhjSEJoUWZBUVlISnlZR0h3RUdCeWNtSWc4QkV6NEJOeTRCSnc0QkJ4NEJGeTRCSno0Qk54NEJGdzRCQW9ZUER3SmxUUWNHTndJNEJBWlNhUUlMREFJNmx6b0dFd0pyVXdvSEJqMDlBd1VGQkZKckFRNE9PSkdzUXpzQ0FUb3ZNU01SSnlFaEtROGdPQzg2QVFNNFBpVWdVeUFpUURjQ0FUc3VMQ01PSGlJaUhCRWxKUzg2QVFJOFJCa2dVeUFjWHk4K0FRRStMeTgrQVFFK0wwWmRBZ0pkUmtaZEFnSmRHd1lIVFdVQ0R3ODVrVGdPRGdGclVnUUZCUU05UFFjSUNsTnJBaE1HT3BjNUF3d0xBbWxTQmdRNEFuNE9JeXd2T2dFQ04wQWlJRk1nSlQ0NEF3RTZMemdnRHlraElTY1JJekV2T2dFQ08wTWNJRk1nR1VROEFnRTdMaVVsRVJ3aUloOEJQd0UrTHk4K0FRRStMeTgrT0FKZFJrWmRBZ0pkUmtaZEFBQUFBQU1BUC8rL0E4RURRUUFVQUNBQUxRQUFCVEkyTndFMk5DWWlCd0VPQVJVVUZoY0ZFeDRCQXlVbU5EY2xOajhCQndZSEF5SW5Bd0UrQVRjSEJnY0RCZ0pYRnlJTUFSa01HQ3NlL1I4Y0pDZ2ZBVFZhQ1J4ci90Z0tDUUpFR1JreExoY1NtQVFEV2dFbUVpZ1JGd3dLMndSQkpSOEMzUjRyR0F6KzVRb2hGeDBjQ1ZyK3ppRXBBYjFhQXdnRTJ3b01GeVVURXYxNUNnRW9BU2NTTUJZeEdScjl2QWtBQkFCTC84c0R0UU0xQUFzQUZ3QWdBRGtBQUFVK0FUY3VBU2NPQVFjZUFUY3VBU2MrQVRjZUFSY09BUU15TmpRbUlnWVVGZ016UGdFMEppc0JOVFFtS3dFaUJoUVdPd0VWSXlJR0ZCWUNBTGo0QlFYNHVMbjNCUVg0dUp2TkJBVE1uSnZOQkFQT254Z2ZIekFmSURDdURoRVJEalVSRUZFTkVoSU5MalVPRVJFMUJmaTR1UGdGQmZpNHVQaEVCTXljbTgwRUJNMmJuTXdDQVNBdklDQXZJUDU3QVJBYUVkb1NGUkVhRWNVUkdoQUFBQUFBQkFCTC84c0R0UU0xQUFzQUZ3QThBRVVBQUFVK0FUY3VBU2NPQVFjZUFUY3VBU2MrQVRjZUFSY09BUU0rQVQwQk5EWTNQZ0UzTGdFT0FRY0dGUlFXTXpJMk56WTNIZ0VWRkFZSERnRWRBUlFYUGdFMEppSUdGQllDQUxqNEJRWDR1TG4zQlFYNHVKdk5CQVRNbkp2TkJBUE9wQkFURlJZZ0p3RUNUbkJGQ1FRU0N4SVBDUlVySFNNYkhCZ2VJUk1iR2ljYkd6VUYrTGk0K0FVRitMaTQrRVFFekp5YnpRUUV6WnVjekFFUEFSRU5CUkViRHhNdkpUWTRBU3NlQ3dzT0R4RU1KUUVCSFJrVkhoSVFKeDhHSW9BQkdTWVpHU1laQUFBQUFBTUEwZi9MQXk4RE5RQVVBQndBS3dBQUFTSUdCeFVHRlJFVUZqTWhNalkxRVRRbk5TNEJCejRCTWhZWEZTRUZNaFlWRVJRR0l5RUdOUkUwTmpNQ0FGMkZBMG93TUFHZU1EQktBNFg5QWxxSVdnTCt3QUZ0RHc0T0QvNW1IUTRQQXpXQmcySUpXLzdGTkRFeE5BRTdXd2xpZzRIN1dsOWZXbWxCRGhMK3ZCSVBBU0lCUkJJT0FBQUdBR1FCTGdPZEFkTUFDQUFTQUJzQUpRQXVBRGdBQUFFZUFSUUdJaVkwTmpjT0FSUVdNalkwSmljRkhnRVVCaUltTkRZM0RnRVVGakkyTkNZbkJSNEJGQVlpSmpRMk53NEJGQll5TmpRbUp3SUFGQm9hS0JvYUZDTXZMMFl2THlQK3RoTWJHeWNhR2hRa0xpNUhMeThqQXBVVUdob25HeHNUSXk4dlJ5NHVKQUd2QVJvb0dob29HaVVCTDBZdkwwWXZBU1FCR2lnYUdpZ2FKUUV2Umk4dlJpOEJKQUVhS0JvYUtCb2xBUzlHTHk5R0x3RUFBQUFBQWdDRC85c0RmUU1sQUNFQU5BQUFGejRCTnpVK0FUY2VBUmN5UGdJM0VTNEJJdzRCQnk0Qkp5SU9BZ2NSSGdFQkxnRW5JZ1lIRVQ0Qk14NEJGelkzRVE0QnBBNFNBUWc2TUhPNGJURTFMUm9CQVJrVEQwQTNicmQwTVRVdEdnRUJFZ0k1WjdsNEpEd1NCRFl5YnJoelJpd0ZOU1VCRWc3dUJBOEJCVVFGQ3hVa0hRRzBFUk1CRUFFRlJBVUxGU1FkL1RnT0VnRVZCVVFGQ0FnQmt3c1dCRVFGQVEzK2J3c1dBQUFBQUFJQUMvKzlBL1VEUXdBaEFEa0FBQk1lQVRNMk53RTJNaGNCRmhjeU5qY21Md0UxTkNZbkl3NEJIUUVuSmlJSEFRWVRGQllYTXhFME5qY3pIZ0VWRVRNK0FUVVJBU1lpQndFTEFSUVFFZzBCb2djUUJ3R2lEUklRRkFFQkRKVVFEamtPRWFvWE9CZitTd3g2TXkydUVnK1hEeEt0TGpMK2xBY1BCLzZWQVlNUEVnRU9BWDBIQi82RERnRVNEeE1LaC8wT0VBRUJFQTZTbXhVVi9uTUsvb1l0TVFFQk1ROFJBUUVSRC83UEFURXRBVGtCU0FjSC9yWUFBQUFBQWdCVy85TURyQU1xQURnQVJBQUFCU1luTnpZbUR3RW1KemMyTkM4Qk5qY1hGall2QVRZM0Z4WXlQd0VXRndjR0ZqOEJGaGNIQmhRZkFRWUhKeVlHSHdFR0J5Y21JZzhCTno0Qk55NEJKdzRCQng0QkFhRkRPd0lCT2k4eEl4RW5JU0VwRHlBNEx6b0JBemcrSlNCVElDSkFOd0lCT3k0c0l3NGVJaUljRVNVbEx6b0JBanhFR1NCVElCeGZUbWNDQW1kT1RtY0NBbWNzRGlNc0x6b0JBamRBSWlCVElDVStPQU1CT2k4NElBOHBJU0VuRVNNeEx6b0JBanRESENCVElCbEVQQUlCT3k0bEpSRWNJaUlmOWdKblRrNW5BZ0puVGs1bkFBTUFTLy9MQTdVRE5RQUxBQlFBTFFBQUJUNEJOeTRCSnc0QkJ4NEJFeUltTkRZeUhnRUdBeTRCTkRZN0FUVWpJaVkwTmpzQk1oWWRBVE15RmhRR0J3SUF1UGdGQmZpNHVmY0ZCZmkwRnlBZk1COEJJVjRPRVJFT05TNE5FaElOVVJBUk5RNFJFUTQxQmZpNHVQZ0ZCZmk0dVBnQ1NTQXZJQ0F2SVA1N0FSQWFFY1VSR2hFVkV0b1JHaEFCQUFBQUFBTUFTLy9MQTdVRE5RQUxBREFBT1FBQUJUNEJOeTRCSnc0QkJ4NEJFeUk5QVRRMk56NEJOVFFtSndZSERnRWpJaVluTkRjK0FoWVhEZ0VIRGdFZEFSUUdCeUltTkRZeUZnNEJBZ0M0K0FVRitMaTU5d1VGK0xBa0h4a2VIQ1FmTFJVS0VSSUxFd0VFQ1VsMlVnSUJLU0VYR0JJUUV4d2NKeHdCSERVRitMaTQrQVVGK0xpNCtBRlRJd1loS1JFVElCWWFIZ0VDSmcwUkVBOExDeUF0QVRzNEp6RVZEeHdUQlE0U2dSb3BHUmtwR2dBQUFBTUFaQUV1QTUwQjB3QUpBQk1BSFFBQUFRNEJGQll5TmpRbUp5RU9BUlFXTWpZMEppY2hEZ0VVRmpJMk5DWW5BZ0FqTHk5R0x5OGovcllrTGk1SEx5OGpBcFVqTHk5SExpNGtBZE1CTDBZdkwwWXZBUUV2Umk4dlJpOEJBUzlHTHk5R0x3RUFBQUFBQmdCUUFCTURzQUxzQUJnQUlRQTVBRUlBV3dCa0FBQUJNalkzTXpJMk5DWXJBUzRCSWdZSElTSU9BUll6SVI0Qk55NEJORFl5RmhRR0JTSUdGQllYTXg0Qk1qWTNJVDRDSmljaExnRWlCZ2NYSWlZME5oNEJGQVlCUGdFM016STJOQ1luSXk0QklnWUhJUTRCSGdFeklSNEJOeUltTkRZeUhnRUdBcG9oTkF5VURSTVREWlFNTTBRMEMvNDZEeE1CRlE0QnhnczBJaFljSFNvY0hQM0NEUk1URFprTE5FUTBDd0hCRHhNQkZRNytQd3MwUkRNTVlSVWRIU3NjSEFFWklqTUxsUTBURXcyVkN6UkROQXYrT2c0VkFSTVBBY1lMTkNJVkhSd3JIQUVlQWg4bEh4UWRGQjRtSmg0VUhSUWZKVFFCSENzZEhDd2NzaE1lRXdFZUppVWZBUk1kRkFFZUpTVWVWUjBxSFFFY0t4eit4UUVsSHhNZUV3RWZKQ1FmQVJRZEV4OGxOQjBySEJ3ckhRQUFBQVlBVVFCSEE3QUN1UUFJQUJRQUhRQXBBRElBUGdBQUV6NEJOQ1lPQVJRV055RXlOalFtSnlFT0FSUVdBekkyTkNZaUJoUVdOeUUrQVM0Qkp5RU9BUlFXQXo0Qk5DWU9BUlFXTnlFeU5qUW1KeUVPQVJRV2hoWWdJQzBlSHRVQ1NROFRFdy85dHc4VEU2OFdJQ0F0SGg3VkFra09GUUVURC8yM0R4TVRyeGNmSUMwZUh0VUNTUThURXcvOXR3OFRFd0pOQVI4c0lBRWVMaDRURXg0VEFRRVRIaFArNlNBc0lCOHVIaElCRkIwVEFRRVRIaFArNlFFZUxTQUJIaTRlRXhNZUV3RUJFeDRUQUFBQUFBTUFrZ0NsQTIwQ1d3QU1BQmtBSmdBQUV6NEJNeUV5RmhRR0J5RWlKaFUrQVRjaEhnRVVCZ2NoTGdFVlBnRTNJUjRCRkFZaklTSW1rZ0VVRUFLU0VCUVVFUDF1RHhZQkZCQUNraEFVRkJEOWJnOFdBUlFRQXBJUUZCUVEvVzRQRmdJM0R4VVZIeFFCRnFnUUZBRUJGQ0FVQVFFVnFCQVVBUUVVSHhVVkFBQUFBZ0FFLzg4RC9BTVlBQjBBT3dBQUFTTXVBU2NPQVFjR0hnRTJOejRCTng0QkZ5TWlCaDhCRmpJL0FUWW1CVE1lQVJjK0FUYzJMZ0VHQnc0QkJ5NEJKek0rQVM4QkxnRVBBUVlXQTlvNEZlaWxYNk03Q3dJWkdnc3lpVTJId1JNOUZnc01YQW9hQ2wwTUMvdzFPQlhvcFYrak93c0NHQnNLTUlsUWlNQVRQUllMREZ3S0dncGREQXNCbjZIVUJBRk9SQTBkRVFRTU9UNEJBNnFHR1JHRURnNkRFaGxZb2RNRUFVNUREaDBSQkF3NFB3RUNxb1lCR0JLRERnRVBneEVaQUFBQUFBRUFhdiszQTUwRFVBQXpBQUFKQVFZdUFqY0JQZ0VYRmdZSEFRWXVBamNCUGdFbUJnY0JEZ0VYRmpZM0FUWTBKeTRCQndFR0ZoY2VBVGNCTmk0QkJnTW0vc1Uva0cwRFBBR3VKbDRsSWdZbC9sd1FJaGNERHdFbENnRVRHQXIrMlNBQkhpQlRJZ0dtUERVMWpELytVRTRFU0V2RFV3RTlDZ0VUR2dGdy9zVTlCRzJQUUFHdEpnY2pKVjRtL2x3UUJCY2hFUUVsQ2hnVEFRcisyaUpWSGlBQ0lRR21Qb3MyTkFFOC9sQlR3MHRJQkU0QlBRb2NFd0VBQUFBQUF3QUFBQzhFQUFLeUFBc0FGd0FnQUFBbE5pUTNKaVFuQmdRSEZnUTNMZ0VuUGdFM0hnRVhEZ0VuTWpZMEppSUdGQllDQU9jQkZRUUUvdXJtNWY3cEJBUUJHT1JhZHdJQ2QxcGFkd0lDZDFvZ0xDdEJMQ3d2RGU1SFJ1NE5EZTVHUis1aUEzZFpXbllDQW5aYVdYZUVMRUFySzBBc0FBQUFBUUNNQUs4RGRBSlJBQkFBQURjR0ZCWXlOd2tCRmpJMk5DY0JKaUlIbHdzV0lnc0JNUUV4Q3lJV0MvNjBEQ0lNOFFvakZRc0JPUDdJQ3hVakNnRlVEQXdBQUFBQkFJd0FyZ04wQWxJQUVRQUFKVFkzQVRZMEpnWUhDUUV1QVFZVUZ3RVdBZ0FSREFGTUN4Y2dEUDdQL3M4TUlCY0xBVXdNcmdFTUFWUUxJQmdCQy83SUFUZ0xBUmdnRFA2dERBQUFBUUV2QUF3QzBRTDBBQkFBQUNVV01qWTBKd2tCTmpRbUlnY0JCaFFYQW84TEloVUwvc2dCT0FzVklndityQXdNRndzV0lRd0JNUUV4RENFV0MvNjBEQ0lNQUFBQkFTNEFEQUxSQXZRQUVRQUFKVEkzQVRZMEp3RW1JZ1lXRndrQkJoUVdBVllRREFGVERBeityUXdnR0FFTEFUait5QXNXREFzQlRBMGhEQUZMREJjZ0RQN1AvczhMSWhZQUFBQUFBUUM3LytzRFJRTVZBQndBQUFVeU5qVVJKeDhCRmpJMk5DY0JKaUlIQVFZVUZqSS9BZ2NSRkJZQ0FCRVZBNEJpQ3lBVkRQN2tEU0FNL3VNTUZTQUxZb0FERlJVVkVRSTBYSTFnQ2hVZkRRRWREUTMrNHcwZkZRcGdqVno5ekJFVkFBQUFBQUVBdS8vckEwVURGUUFjQUFBQklnWVZFUmN2QVNZaUJoUVhBUll5TndFMk5DWWlEd0kzRVRRbUFnQVJGUU9BWWdzZ0ZRd0JIQTBnREFFZERCVWdDMktBQXhVREZSVVIvY3hjaldBS0ZSOE4vdU1ORFFFZERSOFZDbUNOWEFJMEVSVUFBQUFCQUhJQU93T09Bc1lBSEFBQUV4UVhBUll5TmpRdkFoY2hNalkwSmlNaEJ6OEJOaTRDQndFR2NnMEJIUTBmRlFwZ2tXZ0NIaEVWRlJIOTRtZVFZQXNCRlI4Ty91UU5BWUFRRGY3a0RCVWdDMktEQmhVaUZRYURZZ3NnRlFFTy91VU5BQUFBQVFCeUFEc0RqZ0xHQUJ3QUFBRTBKd0VtRGdFVUh3SW5JU0lHRkJZeklUY1BBUVlVRmpJM0FUWURqZzMrNUE0ZkZRcGdrV2o5NGhFVkZSRUNIbWlSWUFvVkh3MEJIUTBCZ0JBTkFSc09BUlVnQzJLREJoVWlGUWFEWWdzZ0ZRd0JIQTBBQUFFQkhnQUhBdG9DM3dBR0FBQWxFeU1SSXhFakFmemVrWnVRQndFb0FiRCtVQUFBQUFRQURmLzNBL01EQ1FBWkFDNEFSUUJiQUFBRk1qWTFFVFFtSXlJR0R3RUdLd0VtSFFFVU56TXlId0VlQVNVV05qYytBVFFtSnk0QkRnRVhIZ0VVQmdjR0ZnVWlMd0V1QVNzQkJqMEJORHNCTWpZL0FUWXlGUkVVTnhZMk56NEJOQ1luTGdFSERnRVhIZ0VVQmdjR0ZnSDJGaHdjRnc4YUVja0VCMzliVzM4SEJNa1FHd0dDRFJzS0tpOHVLd29iR1FNSkpDZ29KQWtEL29FREJMNElEZ2lQR1JtUENBNEl2Z01LMmd3YUNob2NIUmtLR2d3T0F3b1RGUllTQ2dNSkhCWUNxeGNlRHhDeUJBRmdxMkFCQkxRT0RsY0lCZzA3bDZhWFBBMEZFUnNQTklHUWdqTU9IQVlFcXdjRkFScTFHUVFJckFNRy9iQUdjQWdGRFNKZFpsMGpEQVVIQ2gwT0drZE9SeG9PSEFBQUJnQTUvOThEMGdNaUFDUUFUQUJRQUdJQVpnQnlBQUFCTkRFbUx3RXVBUWNoSmdZUEFnWVZIZ0VYTXpJMk54NEJOelkzSGdFek1SWTNQZ0VIQmlzQklpWXZBUWNHQndZSElpWXZBUWNPQVNzQkxnRTlBVFEvQWpZM0lUSVdId0lXQmdjbUp3Y1hJd1lIRlNFMUppY1JGQll6SVRJMk5SRWxKaWNIQVNFaUpqUTJOeUVlQVJRR0E3NEJBa3dMTkNIOTVDQXlDMU1CQ1FGaVN3Y29SeG96ampzTUNocEhLQzRwT2krTUZ4a0VHQ29QT0RnR0NCMG1GeW9QT1RnUUtoY0dMRG9GQWxJRkRnSW5Cd3dEVEFJTUhOb0NBZ1B4QWg4ai9aWW5JaDhYQXBBWEgvMy9BZ0VEQVd2K1BCQVdGaEFCeEJBV0ZnSVVBUVVFd1I4a0FRRWlIOGdGSEI1Tlp3TWlJRHNNTUFzTUlDRUJGaUY1V2d3VUUwUkVDQVlZQVJRVFJFVVNGUUk5TGdFU0VRWEhEZ0VLQjhNR0tFbHJBUUVDQ2c4RzRPRUhFdjcwRnhzYkZ3RUtCd0VCQWdFQUZSOFVBUUVVSHhVQUFBQUZBRUQvNEFQQUF5QUFDd0FmQURNQVNBQmRBQUFCSVNJbU5EWXpJVElXRkFZREl5SW1ORFk3QVRJMlBRRTBOaklXSFFFT0FRVWpMZ0VuTlRRMk1oWWRBUlFXT3dFeUZoUUdBeUltUFFFK0FUY3pNaFlVQmlzQklnWWRBUlFHSVNJbVBRRTBKaXNCSWlZME5qc0JIZ0VYRlJRR0E2RDh3QTRTRWc0RFFBNFNFbTdBRGhJU0RzQU9FaEljRWdFMi9mZWdLVFlCRWh3U0VnNmdEaElTN2c0U0FUWXBvQTRTRWc2Z0RoSVNBdklPRWhJT3dBNFNFZzdBS1RZQkVnRmdFaHdTRWh3Uy9vQVNIQklTRHFBT0VoSU9vQ2syQVFFMkthQU9FaElPb0E0U0Vod1NBaUFTRHFBcE5nRVNIQklTRHFBT0VoSU9vQTRTRWh3U0FUWXBvQTRTQUFBQUFBRUFNZi8yQTg4RENRQWdBQUFGTWpZOUFUTTJGaGNlQVRjeU5qYzJBaWNqTlRRbUl5SUdCd0VHRkJjQkhnRUIxUlljRFh1bk53d2JEaElaQVFIVjVnMGNGdzhhRWY2dUZ4Y0JVaEFiQ1J3V3BBRlFaeFFOQVIwYzhBRVFBNklXSGc4US9zUVlMQmord1E0T0FBRUFNZi8yQTg4RENRQWdBQUFGTWpZM0FUWTBKd0V1QVNNaUJoMEJJd1lDRng0Qk14WTJOejRCRnpNVkZCWUNLdzhjRUFGU0Z4ZityaElaRHhjY0RlYlZBUUVaRWc0YkN6aW5ldzBjQ1E0T0FUOFlMQmdCUEJBUEhoZWlBdjd3OEJ3ZEFRMFRhRkFCcEJZY0FBUUFDUC9uQS9nREdRQWJBQ2NBTlFCRUFBQVhJVFkzRVNZckFTSW1Md0V1QVNzQklnWVBBUTRCS3dFaUJ4RVdKUzRCSno0Qk54NEJGdzRCRXlJbU5UUStBVEllQVJVT0FRY0JNajRDTkM0Q0l3NEJCeDRCandMaWhnRUJobVFZR2cwakR5Y2hxeUFvRHlNTkdoaGhoZ0VCQWZka2d3TURnMlJrZ3dNRGc5QVhIZzRaSEJrT0FSNFcvc3dpUFRBYUdqQTlJa2hmQWdKZkdRR0VBY0dFRFJBbUVoTVRFaVlRRFlUK1A0U0lBNFJrWklRQ0FvUmtaSVFCVVI0V0R4Z09EaGdQRmg0Qi91OFpNRDVFUGpBWkFsOUlTR0FBQXdBUi85c0Q3d01sQUNVQUxnQTNBQUFUSGdFN0FSTWVBVE1oTWpZMEppTWhMZ0V2QVNFeU5qOEJOamN1QVNNaEp5NEJLd0VpQmdFZUFUSTJOQ1lpQmdVVUZqSTJOQ1lpQmhFQkVnMlJSUVl5THdIMERSSVNEZjRURWhZREJ3SWdMeklISWdFQkFSVVIvVVFJQXhrZ2x3MFNBVGdCSnpvcEtUb25BWkFvT3lnb095Z0RCUTBUL2lrdU5SSWNFZ0VYRkMwMUx1TUtCaEFUTnhnWkUvME9IaWNvT2lnbkhoNG5KenduSndBQUFBQUVBQkwvMndQdkF5VUFKQUFyQURRQVBRQUFKU0V5TmpRbUl5RXVBUzhCSVRJMlB3RTJOeTRCSXlFbkxnRXJBU0lHRkJZN0FSTWVBUUVIRGdFaklTY1RNalkwSmlJR0ZCWWhNalkwSmlJR0ZCWUJiZ0gwRFJJU0RmNFRFaFlEQndJZ0x6SUhJZ0VCQVJVUi9VUUlBeGtnbHcwU0VnMlJSUVl5QW1jZkFoWVQvZDRsZXh3cEtUb25Kd0d1SGlnb095Z29xeEljRWdFWEZDMDFMdU1LQmhBVE54Z1pFeG9UL2lrdU5RSFJ6UlFYK1AxZktEb29KenduSnp3bkp6d25BQUFEQUVuL3lRTzNBemNBRkFBZ0FDd0FBQUVXRkE4QkJpSXZBU1kwTmpJZkFSWXlQd0UyTWdNK0FUY3VBU2NPQVFjZUFSY3VBU2MrQVRjZUFSY09BUUxGQ1FuMENoa0phQWtUR1FvN0NSa0t5QW9adkp2UEJBVFBtNXZQQkFUUG03cjRCUVg0dXJyNEJRWDRBaFFLR1FyMENRbG5DaGtUQ2pvS0NzZ0ovZlVFejV1Ynp3UUV6NXViejAwRitMcTYrQVVGK0xxNitBQUFBQUVBUy8vTEE3VUROUUFMQUFBRlBnRTNMZ0VuRGdFSEhnRUNBTGo0QlFYNHVMbjNCUVg0TlFYNHVMajRCUVg0dUxqNEFBQUZBQUFBRmdRQUFyNEFDd0FjQUMwQU5nQThBQUFsRmpJK0FTY0JKZzRDRndFK0FUY21KQ2NHQnhjMk14NEJGeFFQQVRZM0p3WWpMZ0VuTkRjbkRnRUhGZ1FCTGdNaklnY1hKeDRCRnpNbkF5UUpGeEFCQ2YyUkNCZ1FBUWtDa2xoZ0FRUCs2K2hmVW1JbUtWbDFBaEcvYUZaaUt6RlpkUUlXZ2wxbUFRUUJGZ0ZkQVJFaUt4Z0hCNFR0QWtNekQ0WWZDUkVYQ1FKdkNBRVFHQWo5K3p0N0kwYnFEUUVjWVJFQ2RGb3JKTzBCSDJNV0FuWlhNeXFEUEg4bFJlb0JOeGdySWhFQmd3OHlRd0dHQUFBRkFBQUFHQVFBQXJzQUN3QWRBQzhBTndBL0FBQWxGajRCTkNjQkpnNENGeVVHQnhjMk14NEJGeFFHQnhjK0FUY21KQU0yTnljR0J5NEJKejRCTnljT0FRY1dCQ1UyTlM0Qkp3WUhFelkzQVFZVkhnRURId29XRVFqOWxna1hFQUVJQVV0Z1VEQTlROEQ3QkZsT0xsaGhBUVArN09sblZqQkNTOEQ3QkFGZVVpNWRaZ0VFQVJZQnBCRUNkVmdzSlZFeEt2N3JGUUowSVFrQkVCY0pBbW9JQVJBWENSUUJIVEFURE1rdEdXTXhMang4STBicS9aUUJIakVWQVF2Rk1oWm9NeTQ4ZnlSRjY5OG1LMWwwQWdFUS9uTUJGUUVWS2pKWGRRQUFCQUFBQUM4RUFBS3hBQXNBRndBakFDd0FBQ1UySkRjbUpDY0dCQWNXQkRjdUFTYytBVGNlQVJjT0FTYytBVGN1QVNjT0FRY2VBVGN1QVRRMk1oWVVCZ0lBNXdFVkJBVCs2K2ZrL3VnRUJBRVk1TDc4QkFUOHZyMzlCQVQ5dlZwMkFnSjJXbHAzQVFKMldoNG9LRHduSnk4TTdrZEc3ZzBON2taSDdpOEx5RE10ekEwTnpDMHp5Q2tDZUZoYWRRSUNkVnBZZUlvQkp6c29LRHNuQUFBQUFBRUFnLy9iQTMwREpRQWhBQUFYUGdFM05UNEJOeDRCRnpJK0FqY1JMZ0VqRGdFSExnRW5JZzRDQnhFZUFhUU9FZ0VJT2pCenVHMHhOUzBhQVFFWkV3OUFOMjYzZERFMUxSb0JBUklsQVJJTzdnUVBBUVZFQlFzVkpCMEJ0QkVUQVJBQkJVUUZDeFVrSGYwNERoSUFBQUFDQUZYL3d3T3JBendBTWdCQUFBQVREZ0VIRmhjV0J3NEJGUlFYRmdjT0FSVVVIZ0VPQVJVVUZqc0JIZ0VWRGdFSEZCWXpNalkzUGdFM1BnRTNOQ1luSXlJQkxnRW5JeDRCQnc0QkJ6TStBZHdhS0FFQkNnUUhGQjBQQndzUEVna1RGZ3NxSVprZEl3UkFCQ0lhRmgwTU1YUXpLaWtCcnBrOFZRS3JBV2hTVFRvM0FRTXhIajlLWUFNekJpSWZHUTBKQXdra0doNFRDZ2NJSWhZUEhSQVJIUklnTEFFYkdDK0hQQjhoSFJsZW0wSTJia3Q2bXdUKzYyT0dBeXQ4U2xGMUl3S0ZBQUFBQUFNQVBQK2RBOFFEWXdBd0FHa0Fkd0FBQVNNaUJnY09BUWNXRnc0QkZCY09BUlVVRndZVkhnRVhNellYRGdFSEhnRVhNalkzUGdFM016NEJOeTRCSnlNdUFRY3pIZ0VYRmdZSERnRUhEZ0VuSWljK0FUY3VBU3NCTGdFMUpqWTNOalFuTGdFMU5EYzJOVFFuTGdFMUpqYzJOVFFuTGdFMU5EYytBUVVlQVJjT0FRY2pQZ0UxTkNZbkFaNDdLVUlZTERNQkFRUVdHQW9QRVE0VEFUOHhvaEVCQlVBRUFUVXNIeThVSm1aTVVWSnJBZ0oxV0kwclpYWThpYUlDQVNVck1uWXlEQklLSVFFRlFBUUJNeWVaRlJzQkN3MEdCQXNKSFEwRENRZ0JMZ29DQ0FRdkV6b0J1RHRTQVFGSk5DY1lGaW9uQTJNRkJnczVLQkFQRUM4MUZ3OHFGeUVaR3lneFFBSUJEaVdKUkMwNEFTTW9TcFJiQTVkd2I1WURGeGxCQTRkdlJHazVRSjVmR1JBQkpUZUdOU1VwQVJzV0R4Y01CZzBGRHhjTkhoWUpDd1VFRVJRTEloY0ZDZ01GRWhBSElRd0ZCVEFEY1ZSVmNnSXRZVGc4WnlnQUFBQUFBZ0JWLzhRRHF3TTlBRElBUUFBQUJUNEJOeVluSmpjK0FUYzBKeVkzUGdFMU5DNEJQZ0UxTkNZbkl5SW1KejRCTnpRbUl5SUdCdzRCQnc0QkZSUVdGek15QVI0QkZ6TXVBVGMrQVRjakRnRURJeHNvQVFFS0JRZ1VIQUVQQ0F3UEVnb1NGZ3NxSVprZUlnRUZRQVFpR2hZZERERjBNeW9xcnBrOFZQMVdBV2hTVFRvM0FRTXhIajlLWURNR0loOFlEZ2tEQ1NRYUhoTUtCd2dpRmc4ZEVCRWRFaUFyQVJ3WUw0YzhIaUlkR1Y2Y1FUWnVUSG1iQkFFVlk0WURLM3RMVVhVakFvVUFBQUFCQUZiLzl3T3FBd2tBRndBQUJUSTJOellTTnk0Qkp5SUdCeTRCSXc0QkJ4WVNGeDRCQWdBSEVRZTQwUUlEaG1vOVhSMGRYanhxaGdNQzBMa0hFUWtIQkhRQkI0cHpqUUpBTnpkQUFvMXppdjczY2dRSEFBQUFBd0E4LzUwRHhBTmpBREVBYWdCNEFBQUZNekkyTno0Qk55WW5QZ0UwSno0Qk5UUW1KelkxTGdFbkl5SW5QZ0UzTGdFbklnWUhEZ0VISXc0QkJ4NEJGek1lQVRjbkxnRW5KalkzUGdFM1BnRVhNaGNPQVFjZUFUc0JIZ0VWRmdZSEJoUVhIZ0VWRkFjR0ZRWVhIZ0VWRmdjR0ZSUVhIZ0VWRkFjT0FTVXVBU2MrQVRjekRnRVZGQllYQW1JN0tVSVlMRE1CQVFRV0dBb1BFUWNIRXdFL01hSVJBUVZBQkFFMUxCOHZGQ1ptVEZGU2F3SUNkVmlOSzJWMlBJbWlBZ0VsS3pKMk1nd1NDaUVCQlVBRUFUTW5tUlViQVFzTkJnUUxDUjBNQVFNSkNBRXVDZ0lJQkM4VE92NUlPMUlCQVVrMEp4Z1dLaWRqQlFZTE9TZ1FEeEF2TmhZUEtoZ1BIZ3diS0RGQUFnMGxpVVF0T0FFaktFcVVXd09XY1crV0F4Y1pRUUVDaDI5RWFUbEFubDhaRUFFbE5vYzFKU2tCR3hZUEZ3d0dEUVVQRnd3ZkZna0xCQVVSRkFzaUZ3VUtBd1VTRUFjaERBVUZNQU54VkZWeUFpMWhPRHhuS0FBQ0FGYi85d09xQXdrQUZnQXdBQUFURmhJWEhnRXlOamMyRWpjdUFTY2lCZ2N1QVNNT0FSYytBVGNlQVJjZUFUSTJOejRCTng0QkZ3NEJCd1lpSnk0QlZnTFN0d2NSRGhFSHQ5SUNBNFpxUFYwZEhWNDhhb1pDQWw5Tk8wb1ZDQTRPRFFrVlNqdE5Yd0lGeklzSEJRYUx6QUlIaXY3NmRRUUhCd1IxQVFhS2M0MENNeXdzTXdLTmMxWm1BUUU2SWd3S0Nnd2lPZ0VCWmxaNjdWd0ZCVnp0QUFBQUFBUUFLUC9EQTlnRFBRQVlBQ0VBS2dBekFBQUZNalkvQVNFeU5qVVJOQ1luSVE0QkZSRVVGanNCRlJRV0V3NEJJaVkwTmpJV0Z3NEJJaVkwTmpJV0Z3NEJJaVkwTmpJV0FTWU5GZytiQVNGZ1pHUmcvZGhnWkdSZ0ZCUlpBU1UxSkNNMkpkY0JKVFFsSkRVbDF3RWtOU1FrTlNROURnNk5aVjhCU0Y5bEFRRmxYLzY0WDJWOEZSY0IveHNrSkRVbEpSb2JKQ1ExSlNVYUd5UWtOU1VsQUFBQ0FDYi9td1BhQTJVQUlnQXNBQUFYQVNjbU53RStBVElXRndFV0ZBOEJBVFkxRVRZbUp3RXVBU0lHQndFT0FSY1JGQmNoTWpjQkppSUhBUll4QVJUb0RRNEJiaEFZR1JZUkFXOEhCK1lCRWdvQkVSZitweGdxTGlvWC9xWVhFUUY2QXJJL0dmNkxHelFiL29rVkh3RVI0UkFMQVJ3TkRRME4vdVFGRHdmaC92QVNMQUd5SWlvVEFRc1RGaFlUL3ZVVEtpTCtUaTFZRndGeEd4ditqUlVBQlFBbS81VUQyZ05yQUJNQUl3QXBBREFBT2dBQUZ5RXlOUkUySmljQkxnRWlCZ2NCRGdFWEVSUUJMZ0VpQmc4QkxRRStBVElXRncwQ0VUY1hCeVlCRVJRSEp6Y1dBU0lqQVRZeUZ3RWlJNjBDcG9ZQkdCNyt0UmNyTGlvWC9yVWVHUUVDTXhZdExTd1dIUDcvQVVJUEZ4c1dEd0ZEL3dEOThnSDI4UVlETUFYdzlBSDlFd1FGQVNzYk1oc0JLZ1VGYTRVQnFpMDJGd0VFRXhZV0UvNzhGell0L2xhRkFac1dGQlFXRy8zN0RBME5EUHo4K3dHMkRQVHNEQUhJL2tvUkRlM3hCUDRCQVNZY0hQN2FBQUFBQUFJQTF2L09BeW9ETWdBVUFCd0FBQUVpQmdjVkJoVVJGQll6SVRJMk5SRTBKelV1QVFjK0FUSVdGeFVoQWdCZGhRTkZLeW9CcWlvclJRT0YvUUphaUZvQy9zQURNb0dEWndkUy9ya3VLeXN1QVVoU0IyYURnZnRhWDE5YWJ3QUFBQU1BUWYvVUE3NERMQUFIQUJRQUlBQUFCUkVuSmljUkZ4WWxNajhCRVFZUEFRWVhFUlFXQlRZL0FUWTFFU1luSWc4QkFuSFVDdzNZQ3Y0TUR4VzBEQXpMSndFYUFsQUdCK0FsQVRBUEZMNHNBczJCQndQOUtYa0ZDZ3RoQXRjRkIzVVZLdjJ1R0JrTUFRVi9GU29DVXpBQkMya0FBZ0ZmLzdvQ29RTkdBQk1BSEFBQUJUSTJOeEUrQVRjdUFTY09BUWNlQVJjUkhnRURMZ0UwTmpJV0ZBWUNBQTRaQVRaQ0FRSmFSVVZhQWdGRE5RRVpJQmNmSHk0ZkgwWmtZQUdLRDFVNFJWc0NBbHRGT1ZVTy9uWmdZd0xnQVNBdUh4OHVJQUFBQUFBREFHZi95d09aQXpVQUZRQWVBRGdBQUNVeU5qYzFQZ0UzTkM0Q0l3NEJCeDRCRnhVZUFRTWlKalEyTWhZVUJoTStBVGN1QVNjVkhnRVhEZ0VITGdFblBnRTNOUTRCQng0QkFnQU9HUUUyUWdFWUxqc2dSVm9DQVVNMUFSa2dGeDhmTGg4ZkY4VFVBUWpGWVVTSkJnS25sWlduQWdhSlJHSEZDQUhVYW1SZnlnOVZPU0E3TGhnQ1cwUTZWQS9LWDJRQ0lTQXVJQ0F1SVAxQUEyeExWMkVCUXdFN01EUkdBZ0ZITkRBN0FVTUJZVmRMYkFBQ0FFdi95d08xQXpVQUN3QVhBQUFGUGdFM0xnRW5EZ0VISGdFVExnRW5QZ0UzSGdFWERnRUNBTGo0QlFYNHVMbjNCUVg0dURkTUFRRk1OemhMQVFGTE5RWDR1TGo0QlFYNHVMajRBU3dCU3pnM1N3RUJTemM0U3dBQUFBRUFQLysvQThFRFFRQWZBQUFGTWpZM0FUWTBKaUlIQVE0QkZSUVdId0VXTmpjQk5oWUhBUTRCSHdFZUFRSlhGeUlNQVJrTUdDc2UvUjhjSkNnZjZCUWJEZ0hXQ1E0SC9rb01CQWREQ1J4QkpSOEMzUjRyR0F6KzVRb2hGeDBjQ1VZR0F3MEJ0d2NPQ2Y0b0RCd1Y0aUVwQUFBQUF3QUcvL1VEK2dNTEFBd0FHQUFzQUFBWElUSTNFU1luSVNJSEVSWXpFeTRCSno0Qk54NEJGdzRCQXk0QlBRRTNOak15SHdFM05qSWZBUlVVQmdlTkF1YUdBUUdHL1JxR0FRR0d1eTA4QVFFOExTdzhBUUU4NWg4amd4MGVJQjFTelNCSklNVWpId3FFQWd5RUFZWDk5SVVCZ1FFN0xTMDhBUUU4TFMwNy9zTUJJeDhiY2hvYlNiWWJITFpESHlJQkFBQUFBQVFBQVAvQUJBQURBZ0FPQUJvQUl3QTZBQUFUTkRZeklUVTBJeUVpRlJFVU93RVhJVEkxRVRRaklTSVhFUVlCTGdFME5qSVdGQVlESWlZOUFUYytBVElXSHdFM1BnRXlGaDhCRlE0Qkk0MVZVd0lKZWYyMWVub1RyZ0pMZW5yOXRYb0JBUUVQSnpJeVRETXp2aHNjUXhva0tDY2FKWDhmTURJeEgyTUJIQm9CMlZOVUNuaDQvbWgzdTNnQm5IZDMvbVI0QVVvQk0wd3pNMHd6L3ZNZEdpQStGeHdjR0NCeUhTTWlIbDVSR2gwQUJBQUEvOEFFQUFNQ0FCTUFJUUF6QUR3QUFEY3pGUVl6SVRJMUVUUXJBVFUwSXlFaUZSRVVOeUluRVRZM0lSWVhGU0VpRnhFVE5qTWhNaGNSSnk0QkR3RW5KaU1pRHdFM1BnRTBKaUlHRkJaNlNBRjZBa3Q2ZWtoNS9iVjZlenNDQWpzQ1NUc0IvanQ2QVQ0Qk93SkpPd0tPR2tBYnJrVVpIQmtaWmRJbU5EUk5Nek43UTNoNEFaeDNQM2g0L21oM1BqMEJrVHdCQVR3OGQvN2xBUmM5UGY2OWhoY0JHSm8vRmhaWXFRRTBUVFEwVFRRQUFnQkwvOHNEdFFNMUFBc0FJQUFBQlQ0Qk55NEJKdzRCQng0Qk55SW1ORGNUTmpJWEV4WVVCaUl2QVNZaUR3RUdBZ0M0K0FVRitMaTU5d1VGK0E0S0RBT2ZDaWtKbndRTUZRZVBCUW9GandjMUJmaTR1UGdGQmZpNHVQalZEQk1JQVpVWkdmNXJDQk1NQm84R0JvOEdBQVVBZVAvRUE0Y0RQQUFJQUJRQU5RQkJBRWdBQUFFUkxnRW5EZ0VIRlFFV01qWTBKd0VtSWdZVUZ4TU9BUlFXTXlFeU5qUW1KeU0xTmpjbkJnY3VBU2MxTkNZaUJoMEJIZ0VYRlFFMEppSUdCeFVVQnhjMk5RY25GUjRCRnpJQ2FnRkdPemxIQVFIb0Noc1RDdjAwQ2hzVUNwNE5FeE1OQVpBTkV4TU5wMUk3TGpWTFpud0NFUjBSQW9wM0FVTVJIQkVCQlRVUDU3MEJSam9qQWF3QkJqMU1BUUZLT2dmOWNnb1VHZ3NDekFvVUd3cjlGd0VUR2hNVEdoTUJYZ2NxTGlNQkFueGtaQThSRVE5a2Q1b01YZ0hmRHhFUkQyUVpHRFF2Tm5xOVF6eE5BUUFBQUFNQUFQLzRCQUFEQkFBWkFDNEFSQUFBQlRJMk5SRTBKaWNpQmc4QkJpc0JJZ2NWRmhjek1oOEJIZ0VsRmpZM1BnRTBKaWN1QVE0QkZ4NEJGQVlIQmhZbkZqWTNQZ0UwSmljdUFRY09BUmNlQVJRR0J3WVdBZHNYR3h3V0VCa1J1d1VHZjFzQkFWdC9CZ1c3RHh3QnF3d2JDaW91TGlvS0d4a0RDaU1uSnlRSkJKNExHd29aSEIwWUNob01EZ1FMRWhVVkV3a0RDQndXQXFZV0hRRVBFTEVFWUtWZ0FRU3pEZzFYQ1FZTk81YWxsVHdNQmhFY0RqT0Jqb0V6RGh4cUJ3VU1JbHhtWENJTkJRZ0tIQThaUmsxSEdnNGNBQUFBQUFJQWhQK3hBMzBEVGdBTEFDNEFBQUUrQVRJV0Z6VTBKaUlHRlJjUkJ6OEJQZ0VXRkE4QkJpSXZBU1kwTmpJZkFTY1JJeVlWRVJRM0lUSW5FVFlqQWQ0QkV4d1RBUlFjRkVVQ0cwRUpIUklMa0EwYURaQUxFaHdLWFFQVGhvWUI3SWNCQVljQ1dBMFRFdzNWRGhNVERycis4VDRkUlFvQkVoc0tqQXdNakFvYkVndGlQZ0VQQVlYK1I0VUJoQUc1aEFBQUFBQURBSklBcFFOdUFsc0FBQUFNQUI0QUFCTXpJVElWRVJRaklTSTFFVFFGTno0QkhnRVZFUlFPQVNZdkFTWTlBVFNTU1FGdVNVbitra2tDTTIwSkZCUUxDeFFVQ1cwT0FsdEovdHhKU1FFa1NZZFlCZ01KRWd2KzRnc1NDUUlIV0FzUmNCRUFBZ0NFLzV3RGZRTmtBQm9BTGdBQUFUNEJQUUVuRnhZeU5qUXZBU1lpRHdFT0FSWXlQd0VIRlJRV0F5RTJKeEUyS3dFUkRnRWlKalVSSXlJVkVSUUNBQTRVQWwwS0d4SUtrUXdhREpFSkFSRWNDbDRERk9nQjdJY0JBWWZLQVJra0djdUdBaDRCRWc2SFAyTUtFUm9KakF3TWpBa2FFUXBrUUljT0V2MTlBWVFCbW9YK3pSSVlHQklCTTRYK1pvVUFBd0JGLytRRHV3TWNBQndBS2dBNEFBQTNNekk5QVQ0Qk54NEJGeFVVT3dFeU5qMEJMZ0VuSXc0QkJ4VVVGaGN6TWpZOUFUUW1KeU1HQnhVV0lUTXlQUUUwSnlNT0FSMEJGQlpsRndzQ3phcXJ6QUlMRnc0U0ErdStIcjdyQXhLSktTY3JLeWNwS3dFQkFrTW9MUzBvS0NvcWpndnhtN01CQWJPYjhRc1FEZSt1MFFNRDBhN3ZEUkNxS0NXNUppY0JBU3Y4TEN6OEt3RUJKeWE1SlNnQUFBVUFoUCt2QTN3RFVRQWZBQ2tBTmdCREFFOEFBQnNCSGdFeklUSTJOeE16TWpZMEppY2pOUzRCS3dFaUJnY1ZJdzRCRkJZek56UTJPd0V5RmgwQkl4TXVBVFVUUGdFeUZoVUREZ0VGTGdFMUF6UTJNaFlWRXhRR053NEJJaVluRVQ0Qk1oWVYxUnNDTFNnQmNpZ3RBaHd4RFJJU0RiQUJNeXVkS2pNQnJ3NFNFZzdwR0JTT0ZCam0vZ3dRRWdFUUdCQVRBUS8rM2d3UEZCRVlFQklQbkFFUkdCQUJBUkFZRWdKMC9ZNHBLaW9wQW5JU0hCSUJQU3d6TXl3OUFSSWNFbjRTRnhjU1BmMVJBUklPQWZFTkVoSU4vZzRPRVFFQkVRNEI4ZzBTRWczK0R3NFNJQTRTRWc0QjhRMFNFZzBBQUFJQUhQKzVCQWtET3dCQkFGd0FBQ1UxTXpJK0FqY3VBUzhCTnpZMUxnRW5JZ1lQQVNjbURnSWZBUWNPQVFjVUhnSTdBUlVqTGdFblBnRTNKajRDRno0Qk54NEJGeFFISGdFWERnRUhCUlkvQVRZMEppSVBBVGNSTkNZaUJoVVJGeWNtRGdFVUh3RVdBb25PRmlnZkVBRUJMaVk2QmdFRGVGczJYaDRjTVJZcUl4TUJBVGNwTXdFU0l5c1p3c0pSYWdJQlVVQUJJRDVMSlNkNlMzaWZBd0U4VEFFQ1pFeit1ZzBNa1FvU0d3cGRBaFFjRkFOZUNod1FDcEFOcDBVUUlDZ1dKem9KRGpzS0NsdDRBak11S2c0R0NCc25GamtNQzBBckdDd2lFa1VDYTFCRlpCQW5SREFPQ3pwRkFRT2ZlQTBORDE1QVRHVUM3UUVNakFrYkVBcGpRQUZLRGhNVER2NjJRR01MQVJBYkNZd01BQUlBSEFBREJBb0RPd0FnQUR3QUFDVVZEZ0VtSnpVaExnRW5QZ0UzSmo0Q0Z6NEJOeDRCRnhRSEhnRVhEZ0VIQVNZUEFRWVVGakkvQWdjVkhnRXlOamMxSnhjV01qWTBMd0VtQWpZQkpDTUIvdXhRYXdJQlVVQUJJVDVLSmlaN1MzaWZBd0k5U3dJQ1pVeit1Z3dOa0FvUkhBbEJIUU1CRXgwVEFRTmVDaHNSQ3BFTXAzc1VGUlVVZXdKclVFVmtFQ2RFTUE0TE9rVUJBNTk0RFEwUFhrQk1aUUlCYWdFTWpBa2JFUXRFSDBDMkRoTVREclpBWXdzUkd3bU1EQUFBQUFJQUhBQUlCQW9ET3dBL0FGb0FBQ1UxTXo0Qk55NEJMd0UzTmpVdUFTY2lCZzhCSnlZT0FoOEJCdzRCRlJRZUFqc0JGU011QVNjK0FUY21QZ0lYUGdFM0hnRVhGQWNlQVJjT0FRY0JOaDhCRmhRR0lpOEJGeEVPQVNJbUp4RTNCd1lpSmpRL0FUWUNpczB2UGdFQkxpVTZCUUVDZVZvM1hoNGNNUlVySXhNQkFqY3FNeElpTEJqRHcxQnJBZ0ZSUUFFaFBrb21KbnRMZUo4REFqMUxBZ0psVFA2NkRReVJDaEViQ2w0REFSTWRFd0VEWGdrY0VRcVFEYWRGQVQ0dkp6b0pEanNLQ2x0NEFqTXVLZzRHQ0JzbkZqa01DMEFyR0N3aUVrVUNhMUJGWkJBblJEQU9DenBGQVFPZmVBME5EMTVBVEdVQ0FXb0JESXdKR3hFTFkwRCt0ZzRURXc0QlNrQmpDeEViQ1l3TUFBQUFBQUlBSFArNUJBa0RPd0FqQUQ0QUFDVTFOQzRCSWc0QkhRRWhMZ0VuUGdFM0pqNENGejRCTng0QkZ4UUhIZ0VYRGdFSEJSWS9BVFkwSmlJUEFUYzFOQ1lpQmgwQkZ5Y21EZ0VVSHdFV0FqME1GQmdVRFA3MFVXb0NBVkZBQVNBK1N5VW5la3Q0bndNQlBFd0JBbVJNL3JvTkRKRUtFaHNLWFFJVUhCUURYZ29jRUFxUURhZnhEQlFNREJRTThRSnJVRVZrRUNkRU1BNExPa1VCQTU5NERRMFBYa0JNWlFMdEFReU1DUnNRQ21OQVR3NFRFdzVQUUdNTEFSQWJDWXdNQUFBQUVnRGVBQUVBQUFBQUFBQUFFd0FvQUFFQUFBQUFBQUVBQ0FCT0FBRUFBQUFBQUFJQUJ3Qm5BQUVBQUFBQUFBTUFGUUNiQUFFQUFBQUFBQVFBQ0FEREFBRUFBQUFBQUFVQU93RkVBQUVBQUFBQUFBWUFDQUdTQUFFQUFBQUFBQW9BS3dIekFBRUFBQUFBQUFzQUV3SkhBQU1BQVFRSkFBQUFKZ0FBQUFNQUFRUUpBQUVBRUFBOEFBTUFBUVFKQUFJQURnQlhBQU1BQVFRSkFBTUFLZ0J2QUFNQUFRUUpBQVFBRUFDeEFBTUFBUVFKQUFVQWRnRE1BQU1BQVFRSkFBWUFFQUdBQUFNQUFRUUpBQW9BVmdHYkFBTUFBUVFKQUFzQUpnSWZBRU1BY2dCbEFHRUFkQUJsQUdRQUlBQmlBSGtBSUFCcEFHTUFid0J1QUdZQWJ3QnVBSFFBQUVOeVpXRjBaV1FnWW5rZ2FXTnZibVp2Ym5RQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQUFGSUFaUUJuQUhVQWJBQmhBSElBQUZKbFozVnNZWElBQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0E2QUZZQVpRQnlBSE1BYVFCdkFHNEFJQUF4QUM0QU1BQXdBQUIxYm1scFkyOXVjenBXWlhKemFXOXVJREV1TURBQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQUFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUF3QURzQVNnQmhBRzRBZFFCaEFISUFlUUFnQURNQUxBQWdBRElBTUFBeUFEQUFPd0JHQUc4QWJnQjBBRU1BY2dCbEFHRUFkQUJ2QUhJQUlBQXhBRElBTGdBd0FDNEFNQUF1QURJQU5RQXpBRFVBSUFBMkFEUUFMUUJpQUdrQWRBQUFWbVZ5YzJsdmJpQXhMakF3TzBwaGJuVmhjbmtnTXl3Z01qQXlNRHRHYjI1MFEzSmxZWFJ2Y2lBeE1pNHdMakF1TWpVek5TQTJOQzFpYVhRQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQUFFY0FaUUJ1QUdVQWNnQmhBSFFBWlFCa0FDQUFZZ0I1QUNBQWN3QjJBR2NBTWdCMEFIUUFaZ0FnQUdZQWNnQnZBRzBBSUFCR0FHOEFiZ0IwQUdVQWJBQnNBRzhBSUFCd0FISUFid0JxQUdVQVl3QjBBQzRBQUVkbGJtVnlZWFJsWkNCaWVTQnpkbWN5ZEhSbUlHWnliMjBnUm05dWRHVnNiRzhnY0hKdmFtVmpkQzRBQUdnQWRBQjBBSEFBT2dBdkFDOEFaZ0J2QUc0QWRBQmxBR3dBYkFCdkFDNEFZd0J2QUcwQUFHaDBkSEE2THk5bWIyNTBaV3hzYnk1amIyMEFBQUFBQUFJQUFBQUFBQUFBQ1FBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFoZ0FBQVFJQUFnRURBUVFCQlFFR0FRY0JDQUVKQVFvQkN3RU1BUTBCRGdFUEFSQUJFUUVTQVJNQkZBRVZBUllCRndFWUFSa0JHZ0ViQVJ3QkhRRWVBUjhCSUFFaEFTSUJJd0VrQVNVQkpnRW5BQTRBN3dFb0FTa0JLZ0VyQVN3QkxRRXVBUzhCTUFFeEFUSUJNd0UwQVRVQk5nRTNBVGdCT1FFNkFUc0JQQUU5QVQ0QlB3RkFBVUVCUWdGREFVUUJSUUZHQVVjQlNBRkpBVW9CU3dGTUFVMEJUZ0ZQQVZBQlVRRlNBVk1CVkFGVkFWWUJWd0ZZQVZrQldnRmJBVndCWFFGZUFWOEJZQUZoQVdJQll3RmtBV1VCWmdGbkFXZ0JhUUZxQVdzQmJBRnRBVzRCYndGd0FYRUJjZ0Z6QVhRQmRRRjJBWGNCZUFGNUFYb0Jld0Y4QVgwQmZnRi9BWUFCZ1FHQ0FZTUhkVzVwTURBd01BZGpiMjUwWVdOMEJuQmxjbk52Ymdsd1pYSnpiMjVoWkdRTlkyOXVkR0ZqZEdacGJHeGxaQXh3WlhKemIyNW1hV3hzWldRUGNHVnljMjl1WVdSa1ptbHNiR1ZrQlhCb2IyNWxCV1Z0WVdsc0NtTm9ZWFJpZFdKaWJHVUpZMmhoZEdKdmVHVnpDM0JvYjI1bFptbHNiR1ZrQzJWdFlXbHNabWxzYkdWa0VHTm9ZWFJpZFdKaWJHVm1hV3hzWldRUFkyaGhkR0p2ZUdWelptbHNiR1ZrQlhkbGFXSnZCbmRsYVhocGJndHdaVzVuZVc5MWNYVmhiZ1JqYUdGMEFuRnhDSFpwWkdWdlkyRnRCbU5oYldWeVlRTnRhV01JYkc5allYUnBiMjRKYldsalptbHNiR1ZrRG14dlkyRjBhVzl1Wm1sc2JHVmtCbTFwWTI5bVpnVnBiV0ZuWlFOdFlYQUhZMjl0Y0c5elpRVjBjbUZ6YUFaMWNHeHZZV1FJWkc5M2JteHZZV1FGWTJ4dmMyVUVjbVZrYndSMWJtUnZCM0psWm5KbGMyZ0VjM1JoY2d0M2FHbDBaV05wY21Oc1pRVmpiR1ZoY2cxeVpXWnlaWE5vWm1sc2JHVmtDbk4wWVhKbWFXeHNaV1FLY0d4MWMyWnBiR3hsWkF0dGFXNTFjMlpwYkd4bFpBeGphWEpqYkdWbWFXeHNaV1FPWTJobFkydGliM2htYVd4c1pXUUtZMnh2YzJWbGJYQjBlUXh5WldaeVpYTm9aVzF3ZEhrR2NtVnNiMkZrQ0hOMFlYSm9ZV3htREhOd2FXNXVaWEpqZVdOc1pRWnpaV0Z5WTJnSmNHeDFjMlZ0Y0hSNUIyWnZjbmRoY21RRVltRmphdzVqYUdWamEyMWhjbXRsYlhCMGVRUm9iMjFsQ0c1aGRtbG5ZWFJsQkdkbFlYSUtjR0Z3WlhKd2JHRnVaUVJwYm1adkJHaGxiSEFHYkc5amEyVmtCRzF2Y21VRVpteGhad3BvYjIxbFptbHNiR1ZrQ21kbFlYSm1hV3hzWldRS2FXNW1iMlpwYkd4bFpBcG9aV3h3Wm1sc2JHVmtDbTF2Y21WbWFXeHNaV1FJYzJWMGRHbHVaM01FYkdsemRBUmlZWEp6Qkd4dmIzQUpjR0Z3WlhKamJHbHdDV1Y1WldacGJHeGxaQXgxY0hkaGNtUnpZWEp5YjNjT1pHOTNibmRoY21SellYSnliM2NPYkdWbWRIZGhjbVJ6WVhKeWIzY1BjbWxuYUhSM1lYSmtjMkZ5Y205M0MyRnljbTkzZEdocGJuVndEV0Z5Y205M2RHaHBibVJ2ZDI0TllYSnliM2QwYUdsdWJHVm1kQTVoY25KdmQzUm9hVzV5YVdkb2RBaHdkV3hzWkc5M2JnVnpiM1Z1WkFSemFHOXdCSE5qWVc0S2RXNWtiMlpwYkd4bFpBcHlaV1J2Wm1sc2JHVmtER05oYldWeVlXWnBiR3hsWkFwallYSjBabWxzYkdWa0JHTmhjblFJWTJobFkydGliM2dSYzIxaGJHeGphWEpqYkdWbWFXeHNaV1FPWlhsbGMyeGhjMmhtYVd4c1pXUUlaWGxsYzJ4aGMyZ0RaWGxsQ21ac1lXZG1hV3hzWldRVmFHRnVaSFJvZFcxaWMyUnZkMjVmWm1sc2JHVmtEbWhoYm1SMGFIVnRZbk5rYjNkdUVtaGhibVIwYUhWdFluTjFjR1pwYkd4bFpBdG9aV0Z5ZEdacGJHeGxaQXhvWVc1a2RHaDFiV0p6ZFhBT1lteGhZMnRvWldGeWRITjFhWFFLWTJoaGRHWnBiR3hsWkE1dFlXbHNiM0JsYm1acGJHeGxaQWh0WVdsc2IzQmxiZ3hzYjJOclpXUm1hV3hzWldRSmJXRndabWxzYkdWa0JtMWhjSEJwYmcxdFlYQndhVzVsYkd4cGNITmxDM050WVd4c1kybHlZMnhsRUhCaGNHVnljR3hoYm1WbWFXeHNaV1FMYVcxaFoyVm1hV3hzWldRTWFXMWhaMlZ6Wm1sc2JHVmtCbWx0WVdkbGN3NXVZWFpwWjJGMFpXWnBiR3hsWkE1dGFXTnpiR0Z6YUdacGJHeGxaQXR6YjNWdVpHWnBiR3hsWkE1a2IzZHViRzloWkdacGJHeGxaQTUyYVdSbGIyTmhiV1pwYkd4bFpBeDFjR3h2WVdSbWFXeHNaV1FLYUdWaFpIQm9iMjVsY3d0MGNtRnphR1pwYkd4bFpBMWpiRzkxWkdSdmQyNXNiMkZrRVdOc2IzVmtkWEJzYjJGa1ptbHNiR1ZrQzJOc2IzVmtkWEJzYjJGa0UyTnNiM1ZrWkc5M2JteHZZV1JtYVd4c1pXUUhkVzVwTURBd09RQUFBQUFCLy84QUFnQUJBQUFBREFBQUFCWUFBQUFDQUFFQUFRQ0ZBQUVBQkFBQUFBSUFBQUFBQUFBQUFRQUFBQURWcENjSUFBQUFBTm94RTNNQUFBQUEyalNwVUE9PScpXCJcblx0fSk7XG5cdC8vICNlbmRpZlxuXG5cdC8qKlxuXHQgKiBJY29ucyDlm77moIdcblx0ICogQGRlc2NyaXB0aW9uIOeUqOS6juWxleekuiBpY29ucyDlm77moIdcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTI4XG5cdCAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBzaXplIOWbvuagh+Wkp+Wwj1xuXHQgKiBAcHJvcGVydHkge1N0cmluZ30gdHlwZSDlm77moIflm77moYjvvIzlj4LogIPnpLrkvotcblx0ICogQHByb3BlcnR5IHtTdHJpbmd9IGNvbG9yIOWbvuagh+minOiJslxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjbGljayDngrnlh7sgSWNvbiDop6blj5Hkuovku7Zcblx0ICovXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnVW5pSWNvbnMnLFxuXHRcdHByb3BzOiB7XG5cdFx0XHR0eXBlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJydcblx0XHRcdH0sXG5cdFx0XHRjb2xvcjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcjMzMzMzMzJ1xuXHRcdFx0fSxcblx0XHRcdHNpemU6IHtcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdFx0ZGVmYXVsdDogMTZcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpY29uczogaWNvbnNcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdF9vbkNsaWNrKCkge1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdEBmb250LWZhY2Uge1xuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcblx0XHRzcmM6IHVybCgnZGF0YTpmb250L3RydWV0eXBlO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LEFBRUFBQUFOQUlBQUF3QlFSa1pVVFlvSjQ4d0FBR2Y0QUFBQUhFZEVSVVlBSndDTUFBQm4yQUFBQUI1UFV5OHlXWHBjM1FBQUFWZ0FBQUJnWTIxaGNCOVNDYThBQUFQUUFBQURJbWRoYzNELy93QURBQUJuMEFBQUFBaG5iSGxtV1dmZWNRQUFDQVFBQUZZY2FHVmhaQmVoQU1BQUFBRGNBQUFBTm1ob1pXRUgrZ1NIQUFBQkZBQUFBQ1JvYlhSNEQzSXVqQUFBQWJnQUFBSVliRzlqWWE3N21pQUFBQWIwQUFBQkRtMWhlSEFCbkFDb0FBQUJPQUFBQUNCdVlXMWxqNHZiVXdBQVhpQUFBQU01Y0c5emRIL2cxMVlBQUdGY0FBQUdjd0FCQUFBQUFRQUFHYnZUZUY4UFBQVUFDd1FBQUFBQUFOb3hFM01BQUFBQTJqU3BVQUFBLzVVRUhBTnJBQUFBQ0FBQ0FBQUFBQUFBQUFFQUFBT0EvNEFBWEFTQUFBQUFBQVFjQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUNHQUFFQUFBQ0dBSndBREFBQUFBQUFBZ0FBQUFvQUNnQUFBUDhBQUFBQUFBQUFBd1FCQVpBQUJRQUFBb2tDekFBQUFJOENpUUxNQUFBQjZ3QXlBUWdBQUFJQUJRTUFBQUFBQUFBQUFBQUFFQUFBQUFBQUFBQUFBQUFBVUdaRlpBQkFBQjNvNlFPQS80QUFYQU9BQUlBQUFBQUJBQUFBQUFJQUFzMEFBQUFnQUFFRUFBQUFBQUFBQUFGVkFBQUVBQUJMQkFBQWlRUUFBQ0VFQUFCTEJBQUFsd1FBQUNrRUFBQmRCQUFBSndRQUFDZ0VBQUFBQkFBQWN3UUFBQ2NFQUFBb0JBQUFBQVFBQUNBRWdBQlZCQUFBZWdRQUFDZ0VBQUNjQkFBQWtnUUFBQWdFQUFETkJBQUF5UVFBQU4wRUFBREpCQUFBZUFRQUFBWUVBQUJDQkFBQVZnUUFBR29FQUFDRUJBQUFoQVFBQUVzRUFBQXhCQUFBTVFRQUFFc0VBQUFjQkFBQVN3UUFBRXNFQUFCTEJBQUFTd1FBQUVzRUFBQWNCQUFBU3dRQUFFc0VBQUJMQkFBQVNRUUFBT01FQUFFQUJBQUFTd1FBQUJ3RUFBQWRCQUFBYlFRQUFKOEVBQUZBQkFBQlFBUUFBTGdFQUFBTEJBQUFTd1FBQUZZRUFBQS9CQUFBU3dRQUFFc0VBQURSQkFBQVpBUUFBSU1FQUFBTEJBQUFWZ1FBQUVzRUFBQkxCQUFBWkFRQUFGQUVBQUJSQkFBQWtnUUFBQVFFQUFCcUJBQUFBQVFBQUl3RUFBQ01CQUFCTHdRQUFTNEVBQUM3QkFBQXV3UUFBSElFQUFCeUJBQUJIZ1FBQUEwRUFBQTVCQUFBUUFRQUFERUVBQUF4QkFBQUNBUUFBQkVFQUFBU0JBQUFTUVFBQUVzRUFBQUFCQUFBQUFRQUFBQUVBQUNEQkFBQVZRUUFBRHdFQUFCVkJBQUFWZ1FBQUR3RUFBQldCQUFBS0FRQUFDWUVBQUFtQkFBQTFnUUFBRUVFQUFGZkJBQUFad1FBQUVzRUFBQS9CQUFBQmdRQUFBQUVBQUFBQkFBQVN3UUFBSGdFQUFBQUJBQUFoQVFBQUpJRUFBQ0VCQUFBUlFRQUFJUUVFZ0FjQkJJQUhBUVNBQndFRWdBY0FWVUFBQUFBQUFNQUFBQURBQUFBSEFBQkFBQUFBQUljQUFNQUFRQUFBQndBQkFJQUFBQUFmQUJBQUFVQVBBQUFBQjNoQXVFeTRnUGlNK0prNHdQak0rTmc0MlRrQ2VRUjVEVGtPZVJDNUdQa1p1Um81SExsQ09VdzVUTGxOZVUzNVdEbFkrVmw1V2psaU9XUTVnbm1FdWZXNTlubjcrZjE1L3JvQWVnbDZFRG9SK2hPNkZib1hPaGU2R1RvYU9odTZIZm9lK2lFNkpMb29laWs2Sy9vc2VpLzZOem81dWpwLy84QUFBQUFBQjNoQU9FdzRnRGlNT0pnNHdEak11Tmc0MlBrQU9RUTVEVGtOK1JBNUdEa1plUm81SERsQU9VdzVUTGxOT1UzNVdEbFl1Vmw1V2ZsZ09XUTVnbm1FdWZXNTlubjcrZjA1L3JvQWVnaTZEdm9SK2hONkZib1hPaGU2R1RvYU9odTZIZm9ldWlFNkpMb29laWs2Sy9vc2VpLzZOem81T2pwLy84QUFmL2tId01lMWg0SkhkMGRzUjBXSE9nY3ZCeTZIQjhjR1J2M0cvVWI3eHZTRzlFYjBCdkpHendiRlJzVUd4TWJFaHJxR3VrYTZCcm5HdEFheVJwUkdra1loaGlFR0c4WWF4aG5HR0VZUVJnc0dDWVlJUmdhR0JVWUZCZ1BHQXdZQnhmL0YvMFg5UmZvRjlvWDJCZk9GODBYd0Jla0Y1MFhtd0FCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVFZQUFBRUFBQUFBQUFBQUFRSUFBQUFDQUFBQUFBQUFBQUFBQUFBQUFBQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUVvQW1nRWdBV0lCa0FINEFuQUN3Z01VQTVZRDNBUWtCRTRFb0FVMEJhNEdQZ2F1QnZRSFZnZnNDRkFJaWdqZ0NSSUptZ25rQ2tBS2lnc1VDMm9Mdmd3VURIUU0xQTFBRGFZTitBNDJEbVFPcUE4Q0R6SVBjQSthRDlvUUVoQkFFR29Rc0JFQUVmb1NOaEptRW5vU2poSzZFeHdUYUJRdUZJQVUyaFZJRll3VjZCWStGcHdYQ2hkU0Y2d1g0Qmg0R040WkhobUFHZDRhR2hvOEdtSWFoQnFxR3R3YkRodEFHM0liaEJ3TUhMZ2RPaDF3SGFZZUVCNW9Ic2dmRkI4dUg1UWdBaUJTSUlvZzdpR2dJZ1FpTUNMaUl6UWpoQ1BVSkR3a2JDU21KTm9sTkNWaUpad2w1aVkrSnBnbTBDZENKNjRuK0NncUtISW93aWs2S2NRcUpDcXVLdzRyRGdBQUFBTUFTLy9MQTdVRE5RQUxBQjBBS1FBQUJUNEJOeTRCSnc0QkJ4NEJFdzRCQnk0Qkp6NEJOeDRCRnhRR0J5NEJKejRCTnk0Qkp3NEJCeDRCQWdDNCtBVUYrTGk1OXdVRitMaGlqQ0lyTUFFRXpKeWJ6UVF4S3lLTVlqOVRBUUpTUHo5VEFRSlNOUVg0dUxqNEJRWDR1TGo0QVI0Qk9TY3dmRWVielFRRXpadEhmREVvT1VvQldrWkRXZ0lDV2tOR1dRQUFBQUFFQUluLzhnTjNBdzBBQ3dBWEFDSUFMUUFBQVQ0Qk55NEJKdzRCQng0Qk55NEJKejRCTng0QkZ3NEJBU0VXSnk0Qkp3NEJCd1kzQmpjME5qY2VBUlVXSndJQVQyZ0NBbWhQVG1rQ0FtbE9NRU1CQVVJeE1rRUJBVUwrd2dJYWFnRUJ4YkN3eFFFQlZoRUJuWlNVblFFUUFZQUNjbFZVYmdJQ2IxUlZjVDRDVERvNVNnRUJTVGs2VGY0eEFVWmJzUVlHc1Z0R1FnRU5PNGtHQm9rN0RRRUFCUUFoLzZ3RDRBTlVBQXNBRndBc0FEZ0FWUUFBQVQ0Qk55NEJKdzRCQng0Qk55NEJKejRCTng0QkZ3NEJCeUlHQnhZWE5qY2VBUmNXSnlFR0J5RVdKeTRCQVQ0Qk55NEJKdzRCQng0Qk55SW1QUUVqTGdFME5qc0JOVFEyTWhZZEFUTXlGaFFHQnlNVkZBWUNhVTVwQWdKb1QwNXBBZ0pwVGpGQ0FRRkNNVEZDQVFGQ01UcGxLUnNWUDFtVW5BRUJFZjZGQVFvQmNtb0JBc1Q5NGx0OEFnSjdYRng3QXdON1hBc1JVZ3NQRHd0U0VSY1FVZ3NQRHd0U0VBSEhBbkpWVlcwQ0FtOVRWWEkvQVV3N09Va0JBVWs1T2sxM0dSWVdIQjhCQm9rN0RRRWhJQUZHVzdIK0lRSjhYRng3QWdKN1hGMTdTZzROV0FFUEZnOVpEQTRPREZrUEZnOEJXQTBPQUFBQUFBTUFTLy9MQTdVRE5RQUxBQmNBSkFBQUJUNEJOeTRCSnc0QkJ4NEJFeDRCRnc0QkJ5NEJKejRCQVJjT0FTSW1KemMrQVRjZUFRSUF1UGdGQmZpNHVmY0ZCZmk0UDFJQ0FWTS9QMU1CQVZNQlJBRXppSmFKTWdFY2htTmpoVFVGK0xpNCtBVUYrTGk0K0FLbkFscERSbG9CQWxsR1ExcitEUVUxT2pvMUJTbEJBZ0pCQUFJQWwvLy9BMmtEQVFBTEFCZ0FBQUUrQVRjdUFTY09BUWNlQVFNaE1qWTFMZ0VuRGdFSEZCWUNBRWRqQWdKalIwZGlBZ0ppeGdJYU1pb0N2NmlvdndJcUFZd0JhbEpSWmdFQloxRlJhdjV5SEIxWnFBWUdxRmtkSEFBQUJBQXAvN0lEMkFOT0FBc0FHZ0FtQUVNQUFBRStBVGN1QVNjT0FRY2VBUmNpQmdjZUFSVVVCeUV5TmljdUFRRStBVGN1QVNjT0FRY2VBVGNpSmljMUl5SW1ORFk3QVRVK0FUSVdGeFV6TWhZVUJpc0JGUTRCQW05SFlnSUNZa2RIWWdJQ1lrYzNYeWN2TmdnQmJUSXFBUUcvL2V0Y2V3TUNmRnhjZXdJQ2UxME1FQUZSREE4UERGRUJFQmNRQVZFTURnNE1VUUVRQWRrQ2FWSlJaZ0VCWjFGUmFVOFlGQ1p1UVNBZkhSeFpxUDRzQW54YlhId0NBbnhjWEh0S0RneFpEeGNQV1F3T0RneFpEeGNQV1F3T0FBSUFYZi9jQTZRREpBQW5BRTRBQUFVV05qOEJOaWMyTHdFbUlnOEJCaWN1QXljbVB3RStBUzhCSmlNbUR3RU9BUlVVSGdJM0lpNENKelkzTmpjK0FSOEJGaFFQQVFZVUZ4NERGeFl5UHdFMk1oOEJGZ1lQQVFZQ3pEZFFJUWtuQVFFNWZSMC9HeUVPRHhJNk1pd05DZzRoR2dFVlZ5Y3VLU3NNSkNCdTBOUmRVOENyYndFQk1nUUZFeWNNVXdjS0poWVFFemMwUWhvV01oWW1DaFVLZlJNQkVnWXVJd0VoSlFvc0tDOG9WaFFhSVE0S0RESXlNeFVPRGlFYlB4MTlPQUVuQ1NCUU4xM1YwRzVDYTZ2RVZFZ3RBd1FRQWhOOUNoVUtKaGN4RmhvK05Eb1VFQlltQ2daVURDY1VDREVBQUFVQUp3QVBBOWtDOFFBTkFCY0FIUUFoQUM0QUFEY2hNalkxRVRRaklTSUdGUkVVQ1FFMk15RXlGd0VHSWdVUk5SY0hKZ0VSSnpjQklpY2xGeFkzRmo4QkJRWWpyUUt5T3orRy9VNDZRQUdtL3J3T0ZBS3FGQS8rdlJzeS9vRDM5Z0VETVBYMS9STVNEUUVBSEN3dExDMGNBUUFPRXc5Q1F3SFpoRUpDL2llRkFWc0JRQVlIL3NFYnV3SFpCUEx6QkFIYy9pTHg4ZjNnQnYwYkt3RUJLeHY5QmdBQUFnQW8vNzREMkFNNUFCa0FNQUFBSlRZWEZqTStBVGN1QVNjT0FRY1VGaDhCTWlNWEhnRVhOellCTmlRM0ZnUVhCZ1FISWljeEpnWUhCajRCTHdFdUFRRmxLU3NqSksva0JBVGtyNi9rQkVRL0VnRUNCeGtaQVJvTS9zc0ZBUXJKeVFFS0JRWCs5c2tyS0N0WmFDMUVJeDBYU2xWa0Rna0ZCTHlKaWJ3RUJMeUpSbnd2RFFRVEx4c05CZ0ZNcU9BRUJPQ29xZDhGQmdoRkh3eEhWaGtRTjVrQUFBQURBQUQvdFFRQUF1VUFKd0JBQUZrQUFCY3lOajhCRmhjekZ4NEJNejRCUFFFelBnRTNOUzRCSnlNMUxnRW5JUTRCQnhFZUFSY3pGUlEzTGdFckFTSW1KeEUrQVRNaE1oWVhGU01PQVFjVkZCY0hCU2N1QVNzQklpWW5OVDRCTXlFeUZoY1ZEZ0VyQVNJR0IvRU5HUkI0SjB0N2R4QVdEUklVRDBSUUFRRlFSRGdCVUVuK0FrZFRBUUZUUnk4MkFROE1SakEwQVFFME1BSDNNRFFCNlVkTkFRZURBaVp5Q2hJT2RpMHhBUUV4TFFGVUxURUJBVEV0Smd3UEFTTU1EMnNyQVdZTkR3RVhGVlVCVEVmU1Iwd0JHMGxQQVFGUFNmNjNTVThCWVNxakVBNHpNZ0ZGTWpNek1oa0JURWZTSFJoNUoyY0pCekF2MEM4d01DL1FMekFPRHdBQUFBRUFjLy94QTQwRER3QXNBQUFsSGdFWEZqYytBVFUwSmk4QkppTUdEd0VHSWljdUF5Y21ORDhCTmpjMEx3RW1CeUlHQnc0QkZSNEJBVXhmMFY1VE94SVREUStFSFJjY0hCOEhGQWNVUFVFekN3VUdIaDRCRlZ3WUpCVXFFeDhkQW5qTlhuc0NBVDhUS3hZUUhndGRGUUVlSGdZRURETkJQUlFJRWdjZ0hCd1hIb0VmQVJNU0hra3BYczhBQkFBbkFBOEQyUUx4QUFvQUVRQVlBQ1FBQUFFV053RW1JeUVpQndFV0JRa0JCaFVSRkFVMk5SRTBKd2tCSVRJM0FRY0dJaThCQVJZQ0FSb2JBWFFZUC8xT054VUJkeHYrU3dFdi90QUtBNmdLQ2Y3Ui9nd0NzallWL3N3ZEtsd3FIZjdNR0FGUEFSd0JjUllWL280YytnRXJBU3dTTFA0bkxoSVRMUUhaS3hMKzFmNlFGQUV5SENvcUhQN1BGUUFBQVFBby83NEQyQU01QUJZQUFCTTJKRGNXQkJjR0JBY2lKekVtQmdjR1BnRXZBUzRCS0FVQkNzbkpBUW9GQmY3MnlTc29LMWxvTFVRakhSZEtWUUd0cU9BRUJPQ29xZDhGQmdoRkh3eEhWaGtRTjVrQUFnQUEvN0lFQUFMdEFCd0FOUUFBRnpJMlB3RXVBU2MxUGdFN0FTY3VBU2NoRGdFSEVSNEJGek1WRkJZRlBnRTlBVE0rQVRjMUxnRW5JUTRCSFFFVUZoY3pGeDRCNWdzU0RXb1FGUUVCWGxUK0FRUkhQdjRQUDBvQkFVby9QQkVDV1E4UkpqOUtBUUZLUC82YVFraElRbk9ERFJJYkN3eGlDeTRzOEZSZERqaENBUUZHUWY2Y1Frc0JhUkVVTXdFVUVHb0JTMEhkUVVZQkFVWkIzVUZMQVhjTURBQUhBQ0FBR2dQNkF6WUFDd0FnQUN3QU9BQkVBRTBBVmdBQUFUWW1Cd1ltTnpZV0J3WW1BUzRCSnpRMk56NEJCd1kyTnpZV0J3WVdGeFlDQXk0QkJ3NEJGeDRCTno0QkF3WVdOellXQndZV056WW1BUTRCSnk0Qk56NEJGeDRCSXlZT0FSNEJQZ0VtTnlZT0FSNEJQZ0VtQXhzSkxDTWdDeDVKV1JNTk5mNmVuUEVHUzBTVTB5RUVHQU56aENJRUNRdTN6aG9MclhwNm1BVUxyWHA2bUJrakRpVnFneHdHUFE4bnVQN1hHblU5T2lvWUcydzdQREc1RXlnWENTVXFHQXNxQnc4SUF3OFFDQVFDRXlNeEJnTTJDd3hsUmgwUi9pWUJoM2cvaWtTTkJJWVJCUUV2TUY4TkNRTk4vc3NCQVZCYUNnNTZVVkJiQ2c5NkFrSU1Qd01Sa0dra0ZDR1R6UDJoT0RFU0ZWODBNekFPRVYwSURpVWtFUTRtSkNFREJnNE5Cd1lQRFFBQUFBWUFWZi8yQkJ3RENnQVdBQjhBS0FBNUFFTUFUUUFBQVRJWExnRW5EZ0VIRkJZWEJ6Y2VBVE15TnlZMVBnRW5NaFlVQmlJbU5EWUhJaVkwTmpJV0ZBWUJMZ0VuRGdFSEhnRVhNalkzRnljK0FTVWlKalEyTng0QkZBWXpJaVkwTmpjZUFSUUdBdU1SRUJtL2daSEJCRWhCSW5jZ09SOFFFQW9Db3pzVUZ4Y29IaDdiRkI4Zkp4Y1hBczBFcUhkOW93TURvMzBaTkJwZUdqUkQvb0FPRkJRT0V4Y1hxUTRVRlEwVEZ4Y0NHd0pxaFFJRG8zMUdkQzFuUEFjS0FTSW1jNWhnRnljWEZ5Y1hWUmNuRnhjbkYvN3VhWXdEQTR4cGFvd0RDd2MwVmlka1pSVWFGQUVCRkJzVUZSb1VBUUVVR3hRQUFBQUpBSHIvK2dPR0F3WUFCd0FRQUJnQUlBQW9BRUFBU0FCUUFGZ0FBQ1VPQVI4QlBnRTNKUlVXRnpJM0p5WUdFeUlIRnhZM05TWUZCZ2NVRnpjMkp6Y09BUWNoTWpZbkJ4VVVId0VXT3dFeVB3RTJQUUUwTHdFbUt3RWlEd0VHSlFjR0Z6TTJOelFERVJRV1B3RXVBUUVlQVJjUkxnRUhBZlVDQWdLUVBHTWovaFJOV2lnbDdRSUZweWNsN2dVQlRmNUZKUUVJN2dNR0VUeGpJd0ZSQWdJQ3RnSmVBZ09GQXdKZUFnSmVBZ09GQXdKZUFnSW03UVFHekNVQnJRVUNrQlpOL1lRVlRqVUJCQUtvQVFRQ2tCVk5OVVhOSlFFSTdRSUNBaGNIN2dNRnpTWGRUVnNvSmU0RkFzZ1dUVFVGQXAyRUF3SmVBZ0plQWdPRUJBSmRBd05kQXdmdEJRSk5XeWNCSGY2d0FnSUNrRHhqL2x3OFl5TUJVUUlDQWdBQUFBQUZBQ2oveFFQWUF6c0FHQUF4QURvQVF3Qk1BQUFGTWpZL0FTRStBVFVSTkNZaklTSUdGUkVVRmhjekZSUVdOelUwSmlzQklpWTFFVFEyTXlFeUZoVVJGQVlqSVNJR0J3TXVBU0lHRkJZeU5qY3VBU0lHRkJZeU5qYzBKaUlHRkJZeU5nRXZFQnNUbEFFVFlHUmtZUDNZWUdSa1lCVVlLQThSTlVFK1BrRUNLRUUrUGtIKzZoRVhERkVCSURBZ0lEQWd4QUVnTUNBZ01DREVJVEFnSURBaE94RVJnd0ZsWHdGSVgyVmxYLzY0WDJVQmJ4a2RUbndTRDBBL0FVZy9RRUEvL3JnL1FBZ05BU2NZSUNBd0lTRVlHQ0FnTUNFaEdCZ2dJREFoSVFBQUFBRUFuUC9aQTJRREpnQXBBQUFsTGdFbkZBWUhIZ0VIQmlZbkRnRW5KalkzTGdFMURnRUhJaVkzTmo4QkpqWTNIZ0VIRnhZWEZnWURXaEUyQXlrckdEc0lFOEEwTk1BVENEc1lLeWtETmhFSUFob01FQ1lGZ0kyTWdBUW1FQXdhQW5FRVRRWW9XaVlISGhRT0FnWUdBZzRVSGdjbVdpZ0dUUVJPVmlnb1g1VEtCQVRJbGw4b0tGWk9BQUFBQkFDU0FLVURiZ0piQUE4QUh3QXRBRDhBQUJNVkhnRXpJVEkyUFFFMEppTWhJZ1luSVRJV0ZSRVVCaU1oSWlZbkVUNEJCUlVVSHdFV05qYzFMZ0VQQVFZbk56NEJIZ0VWRVJRT0FTWXZBU1k5QVRUYkFSUVFBU1VQRlJVUC90c1FGQUVCYmg0ckt4NytraDRxQVFFcUFqRUhKQWtVQVFFVUNTUUhLVzBKRkJRTEN4UVVDVzBPQWU3Y0R4VVZEOXdQRlJWZUt4NyszQjRyS3g0QkpCNHJ0VXdKQlI0R0NndUdDd29HSGdVbFdBWURDUklML3VJTEVna0NCMWdMRVhBUkFBQUFBQVVBQ1AvbkEvZ0RHUUFiQURzQVJ3QlZBR1FBQUJjaE5qY1JKaXNCSWlZdkFTNEJLd0VpQmc4QkRnRXJBU0lIRVJZM0lpWTFFVFEyT3dFeU5qOEJQZ0U3QVRJV0h3RWVBVHNCTWhZVkVSUUdJeVUrQVRjdUFTY09BUWNlQVFFeU5qYzBMZ0VpRGdFVkZCWVhBUzRCSno0Qk56SWVBaFFPQW84QzRvWUJBWVprR0JvTkl3OG5JYXNnS0E4akRSb1lZWVlCQVljZ0l5TWdjUjBrRUNJUkhoeC9IQjRSSWhBa0hYUWdJeU1nL3BCa2d3TURnMlJrZ3dNRGd3R1lGaDRCRGhrY0dRNGVGLzdNU0Y4Q0FsOUlJajB3R2hvd1BSa0JoQUhCaEEwUUpoSVRFeEltRUEyRS9qK0VSQ0lpQWJraUlRNFNKUlFQRHhRbEVnNGhJdjVISWlKRUE0UmtaSVFDQW9Sa1pJUUJVUjRXRHhnT0RoZ1BGaDRCL3U4QllFaElYd0laTUQ1RVBqQVpBQUFBQUFNQXpmKzFBek1EU3dBTkFCa0FRZ0FBQVJFdUFTY09BUWNSSGdFWFBnRW5GQVlpSmpVUk5EWXlGaGNCSWdZVUZqTWhNalkwSmlzQk5UNEJOelUwSmlJR0hRRU9BUWN1QVNjMU5DWWlCZ2NWSGdFWEZRS2NBVlZHUmxVQkFWVkdSbFZBTVZNeU1sTXhBZjdsRGhJU0RnRi9EUk1URGFCOWxBSVRHeE1CZ1hCdmdnRVRHaE1CQXBSOUFaVUJEa3RiQWdKYlMvN3lTMXdCQVZ4TE1EZzRNQUVPTURjM01QMVRFeHNURXhzVFpBeWdnRmNORXhNTlZXK0NBZ0tDYjFVTkV4TU5WNENnREdRQUFnREovOFFETndNM0FCQUFId0FBQVM0Qkp3NEJCeDRCSHdFV01qOEJQZ0VsUGdFM0hnRVhCZ0lIQmlJbkpnSUM3Z0tDYW1xQ0FnSnNXUW9MSkFzS1dXejkzUU93aElTd0F3bTRTUlF6RTBtNEFkdUJrUUVCa1lGTDBuVU9EUTBPZGROS3ByVUJBYldtZy83WVZoWVdWUUVwQUFBQ0FOMy94QU1qQXp3QURRQTJBQUFCRVM0Qkp3NEJCeEVlQVJjK0FRRU9BUlFXTXlFeU5qUW1KeU0xUGdFM05UUW1JZ1lIRlE0QkJ5NEJKelV1QVNJR0hRRWVBUmNWQW9JQlJ6bzZSd0VCUnpvNlIvNjNEUk1URFFHUURSTVREYWgzaXdFU0doSUJBWDFtWm4wQkFSSWFFZ0dMZGdHQUFUSTlUQUVCVEQzK3pqeE5BUUZOL3NFQkV4b1RFeG9UQVY0TW1uZGxEUklTRFdWa2ZBSUNmR1JsRFJJU0RXVjNtZ3hlQUFBQUFnREovOFFETndNM0FBNEFHZ0FBRXo0Qk54NEJGd1lDQndZaUp5WUNKVDRCTnk0Qkp3NEJCeDRCeVFPd2hJU3dBd200U1JRekUwbTRBUzR2UGdFQlBpOHZQZ0VCUGdIYnByVUJBYldtZy83WVZoWVdWUUVwT2dFK0x5OCtBUUUrTHk4K0FBVUFlUC9BQTRjRFFBQVJBQjBBUGdCS0FGa0FBQUVlQVIwQkZ4RXVBU2NPQVE4QkZ6VStBUUVXTWpZMEp3RW1JZ1lVRnhNaUJoUVdNeUV5TmpRbUt3RTFOamNuQmdjdUFTYzFOQ1lpQmgwQkhnRVhGUUUwSmlJR0J4VVVCeGMyTlFVeU5qY25CaU1pSmljMUp4VWVBUUhvSlN4Q0FrOUNPa3dKQVQ4QkxBR0xDaHNUQ3YwMENoc1VDcDRORXhNTkFaQU5FeE1OcDFJN0xqVkxabndDRWhzU0FvcDNBVU1TR2hJQkJUVVAvdFVaSkE0MUJnOGlKZ0ZDQVUwREFnRXpKODVDQVE1RVZnRUJRellOUGl3bk0vMGRDaE1iQ2dMTkNoUWJDdjBXRXhvVEV4b1RYZ2dxTGlRQkFuMWtaUTBTRWcxbGQ1c01YZ0hoRFJJU0RXVVpHVE11TjVNSkNUUUhLU0lhUTFSS1NRQUFBd0FHLy9VRCtnTUxBQXdBSHdBckFBQVhJVEkzRVNZbklTSUhFUll6QVM0QkR3RW5KaWNpRHdFUk5qTWhNaFlWRVNVK0FUY3VBU2NPQVFjZUFZMEM1b1lCQVliOUdvWUJBWVlDUVIxSEhjRlFHeDRkR29BQlFRTGtJQ0w5a2lvNUFRRTVLaXM1QVFFNUNvUUNESVFCaGYzMGhRR01HZ0ViclVnWUFSaHpBZGhESVNMK0o5TUJPaW9yT1FJQ09Tc3FPUUFBQUFRQVF2L1JBNzRETHdBYkFDVUFMQUE0QUFBRk1qOEJOalVSSmljaUR3RW5KaUlQQVFZVkVSUVdNekkvQVJjV0pTSTFFVFEvQVJFSEJnVW1Md0VSSHdFVEVUYzJOeFlYRVJRUEFRWUNqUmdUNFNVQk1BOFU1T2tUTUJUZUpob1hEeFhaN1JqK0dBWU93TUlEQWRZSkNib052MFhDQkFJRkFRNnNDaThMZnhVckFsSXdBUXQramd3TWZ4VXEvYTRZR2d4MWhReHBCd0lURHdsdi9jeHJBUTRGQldrQ01naDAvYzhDTldrQ0FRRUcvZTBRQ0dRR0FBQURBRmIvelFPbUF6QUFDUUFSQUNrQUFBRTNOalF2QVNZR0R3RUJOd0VuQVFjR0ZnTWhNalkzRVFjUkRnRWpJU0luRVRZeklUY2hJZ2NSRmdOOEh3c0xDZ29iQ3gvK1RWTUJlenYraGljQ0Nhc0I5em8vQVVVQkhoZitDMEVDQWtFQmMwWCtSNFlCQVFMS0h3d2JDd3NLQWdvZi9nY2tBWG82L29aUUJncit3ME5DQWQxRi9tc2hJa01CNTBORmhQNFNoUUFBQmdCcS82RURsZ05mQUI4QUtRQXpBRUFBVFFCWkFBQWxFek15TmpRbUp5TTFOQ1luSXc0QkJ4VWpEZ0VVRmpzQkV4NEJGeUUrQVFFME5qc0JNaFlkQVNNRExnRW5BeUVERGdFSEp6STJOeE0wSmlJR0J3TVVGaU15TmpVRE5DWWlCaFVUSGdFM0VUUW1JZ1lIRVI0Qk1qWURMaDRyRFJJU0RidzVNcUV5T0FHNkRSTVREU3NkQXpndkFZa3VPUDVlR0JTV0ZCanVSeE1ZQVI0Q0R4d0JHQlEvQ3c0QkRBNFZEZ0VORHZNTERnMFBGUTROQVEya0R4VVBBUUVQRlE4R0FuTVNHeE1CUUM0MkFRRTJMa0FCRWh3Uy9ZMHZOUUVCTlFNZkVoY1hFano5SndFWUV3SnMvWlFUR0FGTUR3MEJ4QTBQRHd6K093d1FFQXdCeFF3UER3MytQQTBQSEFIRkRBOFBEUDQ3REJBUUFBQUFBZ0NFLzV3RGZRTmtBQm9BT0FBQUpUSTJOUkVuRnhZeU5qUXZBU1lpRHdFT0FSWXlQd0VIRVJRV0F5RTJKeEUySnlNVk16SVdGUkVVQmlNaEppY1JOamN6TlNNaUZSRVVBZ0FPRkFKZENoc1NDcEVNR2d5UkNRRVJIQXBlQXhUb0FleUhBUUdIZDNZZ0lpSWcvaGRDQVFGQ2RuaUc3Qk1PQWJoQVl3b1FHd21NREF5TUNSb1JDbVJCL2tnT0UvNndBWVFCcDRRQlJTSWkvbUVpSWdGREFaOURBVVdGL2xtRkFBQUFBQUlBaFAreEEzMERUZ0FhQURnQUFDVXlQd0UyTkNZaUR3RTNFVFFtSWdZVkVSY25KaUlHRmg4QkZnTWhNaWNSTmljakZUTXlGaFVSRkFZaklTSW5FVFkzTXpVakJoVVJGQUlBRFF5UkNoSWJDbDBDRkJ3VUExNEtIQkVCQ3BBTTZRSHNod0VCaDN4N0lDSWlJUDRYUWdFQlFucDhoc3NNaXdvYkVBcGtRQUhFRGhNVER2NDhRR1FLRUJzS2l3Mys2SVFCdTRRQlJTTWgvazBpSVVNQnMwTUJSUUdFL2tXRkFBTUFTLy9MQTdVRE5RQUxBQmNBTkFBQUJUNEJOeTRCSnc0QkJ4NEJOeTRCSno0Qk54NEJGdzRCSlRJL0FSY1dNalkwTHdFM05qUW1JZzhCSnlZaUJoUWZBUWNHRkJZQ0FMajRCUVg0dUxuM0JRWDR1SnZOQkFUTW5Kdk5CQVBPL3RJUENucDVDaDRUQ25wN0NoUWNDbnQ3Q2h3VUNucDZDaFExQmZpNHVQZ0ZCZmk0dVBoRUJNeWNtODBFQk0yYm5NeXlDM3A2Q2hNZUNYcDdDaHdVQ250NkNoTWRDbnA2Q1I0VEFBQUNBREgvOWdQUEF3a0FJQUErQUFBRk1qWTNBVFkwSndFdUFTTWlCaDBCSXdZQ0Z4NEJNeFkyTno0QkZ6TVZGQlkzSWowQk5BY2pEZ0VIQmlJMVBnRTNNeFk5QVRRMk1oY0JGaFFIQVFZQ0t3OGNFQUZTRnhmK3JoSVpEeGNjRGViVkFRRVpFZzRiQ3ppbmV3MGNMd1lPT3BuQ0pRSUZBcXpaT2c0REJ3TUJNUVVGL3M4RUNRNE9BVDhZTEJnQlBCQVBIaGVpQXY3dzhCd2RBUTBUYUZBQnBCWWNYQWFtRHdFQlgxSUVCWjd4QndFUHFnTURBLzdiQkFnRS90OEVBQUFDQURILzlnUFBBd2tBSUFBK0FBQUZNalk5QVRNMkZoY2VBVGN5TmpjMkFpY2pOVFFtSXlJR0J3RUdGQmNCSGdFbklpY0JKalEzQVRZeUZoMEJGRGN6SGdFWEZDSW5MZ0VuSXlZZEFSUUIxUlljRFh1bk53d2JEaElaQVFIVjVnMGNGdzhhRWY2dUZ4Y0JVaEFiQ1FNRS9zOEZCUUV4QXdjRERqclpyQUlHQVNYQ21Ub09DUndXcEFGUVp4UU5BUjBjOEFFUUE2SVdIZzhRL3NRWUxCait3UTRPWEFRQklRUUlCQUVsQXdNRHFnOEJCL0dmQkFSU1h3RUJENllHQUFBREFFdi95d08xQXpVQUN3QVhBRU1BQUFVK0FUY3VBU2NPQVFjZUFUY3VBU2MrQVRjZUFSY09BUUVlQVJjK0FUYzBKaUlHRlE0QkJ5NEJKejRCTnpJWEJ3WWVBVEkvQVRZMEx3RW1JZ1lVSHdFbUl3NEJBZ0M0K0FVRitMaTU5d1VGK0xpYnpRUUV6SnlielFRRHp2NmxBbXhTVVdzQ0VSZ1JBa280T1VvQ0FrbzVDQWNxQ0FFT0Z3aFRDQWhTQ0JnT0J4NEdCa3BxTlFYNHVMajRCUVg0dUxqNFJBVE1uSnZOQkFUTm01ek1BVlJTYlFJQ2JWRU1FQkFNT1VvQ0FrbzVPRW9DQVNrSUdBOElVd2dYQ1ZRSUVCY0lId0VDYVFBQ0FCei9zUVBrQTBrQUdRQTlBQUFYRmo4QkZ4WTJKd00zTmlZakJRTW1JZ2NESlNJR0h3RURCamNpUHdFMkx3RW1Oak1GRmo4Qk5qSWZBUlkzSlRJV0R3RUdId0VXQmk4QkpnOEJCdHNhS09QaktEVVFXZVVvRkRMKzUxVVBRUkJWL3VjeEZTbmxXaEJaQVFGVkNSYlZBd0VFQVFNYUNFb0NBd0ZLQ0JvQkJBTUJBOVVXQ2xVQkFnUE9GaFhQQWp3VEhxYW1IaWN1QVF1a0hEOENBUXd2TC83MEFqOGNwUDcxTGtFRTlSa1Brd0lEQlFFYStBUUUrQm9CQlFNQ2t3OFo5UVFDQTUwUUVKNENBQUFEQUV2L3l3TzFBelVBQ3dBWEFEUUFBQVUrQVRjdUFTY09BUWNlQVRjdUFTYytBVGNlQVJjT0FTYytBVGMxTXpJMk5DWW5JelV1QVNJR0hRRWpEZ0VVRmpzQkZSUVdBZ0M0K0FVRitMaTU5d1VGK0xpYnpRUUV6SnlielFRRHpwd1JFd0dHRWhZVkU0WUJFeUlTaGhNV0Z4S0dFalVGK0xpNCtBVUYrTGk0K0VRRXpKeWJ6UVFFelp1Y3pKd0JGUk4vRWlNU0FZWVRGaFlUaGdFU0l4Si9FaFlBQUFNQVMvL0xBN1VETlFBTEFCY0FJd0FBQlQ0Qk55NEJKdzRCQng0Qk55NEJKejRCTng0QkZ3NEJBU0V5TmpRbUl5RWlCaFFXQWdDNCtBVUYrTGk1OXdVRitMaWJ6UVFFekp5YnpRUUR6djY0QVZrU0ZoVVQvcWNURmhjMUJmaTR1UGdGQmZpNHVQaEVCTXljbTgwRUJNMmJuTXdCUkJJaUV4TWlFZ0FDQUV2L3l3TzFBelVBQ3dBWEFBQUZQZ0UzTGdFbkRnRUhIZ0UzTGdFblBnRTNIZ0VYRGdFQ0FMajRCUVg0dUxuM0JRWDR1SnZOQkFUTW5Kdk5CQVBPTlFYNHVMajRCUVg0dUxqNFJBVE1uSnZOQkFUTm01ek1BQUFBQUFJQVMvL0xBN1VETlFBTEFDZ0FBQVUrQVRjdUFTY09BUWNlQVRjaUpqUS9BU2NtTkRZeUh3RTNOaDRDRHdFWEZoUUdJaThCQndZQ0FMajRCUVg0dUxuM0JRWDRIZzhWQzRDQUN4VWVDb0dCQ3gwVUFRdUFnQW9WSGdxQWdBczFCZmk0dVBnRkJmaTR1UGp5RlI0S2dZQUtIaFFLZ0lBTUFSUWVDb0dBQ2g4VkNvR0JDZ0FBQUFBQ0FFdi95d08xQXpVQUN3QTNBQUFGUGdFM0xnRW5EZ0VISGdFRFBnRTNNaGNuSmpRMk1oOEJIZ0VQQVFZaUpqUS9BU1lIRGdFSEhnRVhQZ0UzTkRZeUZoVU9BUWN1QVFJQXVQZ0ZCZmk0dWZjRkJmZ0xBMnRNQmdZZkJ3OFlDRlFIQVFoVUNSY1BDQ29IQ0RwTUFRRk1PamxMQWhFWkVRSnRVbE51TlFYNHVMajRCUVg0dUxqNEFaNVNhd0lCSHdnWUVBaFdDQmdJVkFnUEdBZ3FBUUVCU3prNlN3SUNTem9NRVJFTVUyNENBbThBQUFBQkFCei9zUVBrQTBrQUdRQUFGeFkvQVJjV05pY0ROelltSXdVREppSUhBeVVpQmg4QkF3YmJHaWpqNHlnMUVGbmxLQlF5L3VkVkQwRVFWZjduTVJVcDVWb1FQQk1lcHFZZUp5NEJDNlFjUHdJQkRDOHYvdlFDUHh5ay92VXVBQUFDQUV2L3l3TzFBelVBQ3dBb0FBQUZQZ0UzTGdFbkRnRUhIZ0UzSWlZOUFTTWlKalEyT3dFMU5EWXlGaDBCTXpJV0RnRXJBUlVVQmdJQXVQZ0ZCZmk0dWZjRkJmaTNFaE9ORXhjV0ZJMFRKQlNORkJjQkZoU05GRFVGK0xpNCtBVUYrTGk0K05zWEU0VVRKUk9PRXhjV0ZJNFRKUk9GRkJZQUFBQUFBZ0JMLzhzRHRRTTFBQXNBRndBQUJUNEJOeTRCSnc0QkJ4NEJFeUltTkRZeklUSVdGQVlqQWdDNCtBVUYrTGk1OXdVRitBTVVGeGNVQVdvVUZoY1ROUVg0dUxqNEJRWDR1TGo0QVlvVEpSTVRKUk1BQXdCTC84c0R0UU0xQUFzQUZ3QWpBQUFGUGdFM0xnRW5EZ0VISGdFM0xnRW5QZ0UzSGdFWERnRW5QZ0UzTGdFbkRnRUhIZ0VDQUxqNEJRWDR1TG4zQlFYNHVKdk5CQVRNbkp2TkJBUE9tM1NlQXdPZWRIYWRBd09lTlFYNHVMajRCUVg0dUxqNFJBVE1uSnZOQkFUTm01ek1VZ09lZFhXZUF3T2VkWFdlQUFBQ0FFbi95UU8zQXpjQUN3QWdBQUFGTGdFblBnRTNIZ0VYRGdFVEppSVBBUVlpTHdFbUlnWVVId0VXTWo4Qk5qUUNBTHI0QlFYNHVycjRCUVg0Q3drYUNjZ0tHUWs3Q2hrVENXZ0pHUXIwQ1RjRitMcTYrQVVGK0xxNitBSkdDUW5JQ2dvNkNoTVpDbWNKQ2ZRS0dRQUFBUURqQUdNREhRS2RBQnNBQURjR0ZCWXlQd0VYRmpJMk5DOEJOelkwSmlJUEFTY21JZ1lVSHdIdUN4WWZETnpjQ3g4WEM5emNDeGNmQzl6Y0RCOFdDOXVrQ3g4WEM5emNDeGNmQzl6Y0N4OFhDOXpjQ3hjZkM5d0FBQUFCQVFBQWdBTUFBdGdBRmdBQUpTNEJKejRCTnpVWEJ6VU9BUWNlQVJjK0FUY3pEZ0VDQUcyUUF3T1FiY0RBWEhvQ0FucGNYSG9DS0FPUWdBT1FiVzJRQTFpQWIyOENlbHhjZWdJQ2VseHRrUUFBQUFBQkFFdi9uUU8xQTE0QUtRQUFCVDRCTnk0Qkp5WU9BUllYSGdFWERnRUhMZ0VuUGdFM0ZSNEJQd0UyTkM4QkpnWUhGUTRCQng0QkFnQzQrQVVCWWxRUEhSRUhEVVZSQVFQT201dk5CQU9hZkFFWkVvb09Eb2tTR2dHWnhnTUYrR01GK0xodHVEMExCUndiQ2pLWVhadk5CQVRObTRYQUhqNFdEQTFnQ2hzTFlBd0xGejBnNjZLNCtBQUFBQUlBSFAreEErUURTUUFaQUMwQUFCY1dQd0VYRmpZbkF6YzJKaU1GQXlZaUJ3TWxJZ1lmQVFNR0pSRTJId0VXTnlVeUZnOEJCaDhCRmdZdkFTYmJHaWpqNHlnMUVGbmxLQlF5L3VkVkQwRVFWZjduTVJVcDVWb1FBVUFDQVVvSUdnRUVBd0VEMVJZS1ZRRUNBODRLUEJNZXBxWWVKeTRCQzZRY1B3SUJEQzh2L3ZRQ1B4eWsvdlV1NXdJaUFRVDRHZ0VGQXdLVER4bjFCQUlEblFnQUFBQU1BQjMvblFQakEyTUFEQUFaQUNZQU13QkFBRTBBV2dCbkFIUUFnUUNPQUpzQUFBRWlCZ2NWSGdFeU5qYzFMZ0VIRGdFZkFSNEJQZ0V2QVM0QkJTWUdEd0VHSGdFMlB3RTJKZ1VHRmg4QkZqNEJKaThCSmdZRkxnRVBBUTRCSGdFL0FUNEJGelFtSnlNT0FSUVdGek0rQVNVVUZoY3pQZ0UwSmljakRnRUZOaVl2QVNZT0FSWWZBUlkySlI0QlB3RStBUzRCRHdFT0FRVStBUzhCTGdFT0FSOEJIZ0VsRmpZL0FUWXVBUVlQQVFZV0Z6STJOelV1QVNJR0J4VWVBUUlBRFJFQkFSRWFFUUVCRWY0TUJnWk1CeGdXQndkTUJ4Y0IyQXdYQ0V3R0J4WVlCMHdHQnYxZ0JnY0xoQXNZRFFZTWhBc1lBejhIR0F1RkN3WU5Gd3lFQ3djNkVRNllEUkVSRFpnT0VmdzZFUTJaRFJFUkRaa05FUU9HQmdjTGhBd1hEUVlMaEF3WS9NRUhHQXVGQ3dZTkdBdUVDd2NDbWd3R0Jrd0hHQmNHQmt3SUYvNHBDeGNJU3djR0dCY0hUQVlHL1EwUkFRRVJHaEVCQVJFRFl4RU9tQTBSRVEyWURoRkFCeGdMaFFzR0RSZ0xoQXNIQmdZSEM0UUxHUXdHQzRVTEdLb01Gd2hNQmdZWEdBZE1CZ1lNREFZR1RBY1lGd1lHVEFnWDVnMFJBUUVSR2hFQkFSRU5EUkVCQVJFYUVRRUJFZjRMRndoTUJnWVhHQWRNQmdZTURBWUdUQWNZRndZR1RBZ1h2UWNZQzRVTEJnMFhESVFMQndZR0J3dUVEQmNOQmd5RUN4aEhFUTZZRFJFUkRaZ09FUUFBQUFJQWJmL3BBNVFERndBVkFDRUFBQ1V5TmpjWEZqSStBUzhCUGdFM0xnRW5EZ0VISGdFM0xnRW5QZ0UzSGdFWERnRUJ0alJoSzhzT0tob0JEc29nSXdFRXVveU11Z01EdW94dGt3SUNrMjF0a3dNRGs0UWdIc3NPR3lrUHlpcGxPWXU3QXdPN2k0eTZRd09UYlcyU0F3T1NiVzJUQUFBQUFBRUFud0FYQTJFQzZBQWNBQUFsUGdFMUVTRStBVFFtSXlFUk5DWWlCaFVSSVNJR0ZCWVhJUkVVRmdJQUVCWUJGUkFXRmhEKzZ4WWdGdjdyRUJZV0VBRVZGaGNCRlE4QkhRRVdJQllCSGc4VkZRLys0aFlnRmdIKzR3OFZBQUFBQUFFQlFBQkFBc0FDd0FBRkFBQUJOd2tCSndFQlFFRUJQLzdCUVFEL0FuOUIvc0Qrd0VFQS93QUJBVUFBUUFMQUFzQUFCUUFBQVNjSkFUY0RBc0JCL3NFQlAwSC9BbjlCL3NEK3dFRUEvd0FBQVFDNEFJVURXZ0ovQUJjQUFBRVhGaFFIQVFZaUx3RW1ORDhCTmpJZkFSWXlOd0UyTWdORERRb0svbHdMSFF5MUN3c05DeDBMZFF3ZEN3RmpDeDBDZEEwTEhRditYQXNMdGdzZERBd0xDM1VLQ2dGakN3QUFBQUlBQy8rOUEvVURRd0FuQUQwQUFCY2hQZ0UxRVJjV0Z6STJOeVl2QVRVMEppY2pEZ0VkQVNjbUlnY0JCZ2NlQVRNMlB3RVJGQllCTkNZckFTSUdGUkVqSmljUkFUNEJGd0VSQmdjajV3SXpMakkzRFJJUUZBRUJESlVSRGpnT0Vhb1hPQmYrU3d3QkFSUVFFZzAzTXdIQ0VRKzJEeEtQS1FFQkpnY1FCd0VtQVNtUVF3RXhMUUdITWc0QkVnOFRDb2Y5RGhBQkFSQU9rWm9WRmY1eUNSTVBFZ0VPTXY1NUxqQUJZUThSRVEvKzR3RXFBYlVCREFZQkIvNzAva3NxQVFBQUFBQURBRXYveXdPMUF6VUFDd0FYQUN3QUFBVStBVGN1QVNjT0FRY2VBVGN1QVNjK0FUY2VBUmNPQVNVeVB3RTJNaDhCRmpJMkppY0RKaUlIQXdZVUZnSUF1UGdGQmZpNHVmY0ZCZmk0bTgwRUJNeWNtODBFQTg3K3RRc0dsQVlLQnBNSUZRMEJBNlFMS2dxbEF3dzFCZmk0dVBnRkJmaTR1UGhFQk15Y204MEVCTTJibk15SUI1UUZCWlFIRFJNSkFhTWFHdjVkQ0JRTkFBUUFWdi9UQTZ3REtnQXRBR1lBY2dCK0FBQWxOamMrQVRjMk55WTJOeVluQmlZM05TWW5Cd1lpTHdFSEZSWUdKeU1IRnhZVUR3RVdGek0yRmdjV0Z6NEJCeVluTnpZbUR3RW1KemMyTkM4Qk5qY1hGall2QVRZM0Z4WXlQd0VXRndjR0ZqOEJGaGNIQmhRZkFRWUhKeVlHSHdFR0J5Y21JZzhCRXo0Qk55NEJKdzRCQng0QkZ5NEJKejRCTng0QkZ3NEJBb1lQRHdKbFRRY0dOd0k0QkFaU2FRSUxEQUk2bHpvR0V3SnJVd29IQmowOUF3VUZCRkpyQVE0T09KR3NRenNDQVRvdk1TTVJKeUVoS1E4Z09DODZBUU00UGlVZ1V5QWlRRGNDQVRzdUxDTU9IaUlpSEJFbEpTODZBUUk4UkJrZ1V5QWNYeTgrQVFFK0x5OCtBUUUrTDBaZEFnSmRSa1pkQWdKZEd3WUhUV1VDRHc4NWtUZ09EZ0ZyVWdRRkJRTTlQUWNJQ2xOckFoTUdPcGM1QXd3TEFtbFNCZ1E0QW40T0l5d3ZPZ0VDTjBBaUlGTWdKVDQ0QXdFNkx6Z2dEeWtoSVNjUkl6RXZPZ0VDTzBNY0lGTWdHVVE4QWdFN0xpVWxFUndpSWg4QlB3RStMeTgrQVFFK0x5OCtPQUpkUmtaZEFnSmRSa1pkQUFBQUFBTUFQLysvQThFRFFRQVVBQ0FBTFFBQUJUSTJOd0UyTkNZaUJ3RU9BUlVVRmhjRkV4NEJBeVVtTkRjbE5qOEJCd1lIQXlJbkF3RStBVGNIQmdjREJnSlhGeUlNQVJrTUdDc2UvUjhjSkNnZkFUVmFDUnhyL3RnS0NRSkVHUmt4TGhjU21BUURXZ0VtRWlnUkZ3d0syd1JCSlI4QzNSNHJHQXorNVFvaEZ4MGNDVnIremlFcEFiMWFBd2dFMndvTUZ5VVRFdjE1Q2dFb0FTY1NNQll4R1JyOXZBa0FCQUJMLzhzRHRRTTFBQXNBRndBZ0FEa0FBQVUrQVRjdUFTY09BUWNlQVRjdUFTYytBVGNlQVJjT0FRTXlOalFtSWdZVUZnTXpQZ0UwSmlzQk5UUW1Ld0VpQmhRV093RVZJeUlHRkJZQ0FMajRCUVg0dUxuM0JRWDR1SnZOQkFUTW5Kdk5CQVBPbnhnZkh6QWZJREN1RGhFUkRqVVJFRkVORWhJTkxqVU9FUkUxQmZpNHVQZ0ZCZmk0dVBoRUJNeWNtODBFQk0yYm5Nd0NBU0F2SUNBdklQNTdBUkFhRWRvU0ZSRWFFY1VSR2hBQUFBQUFCQUJMLzhzRHRRTTFBQXNBRndBOEFFVUFBQVUrQVRjdUFTY09BUWNlQVRjdUFTYytBVGNlQVJjT0FRTStBVDBCTkRZM1BnRTNMZ0VPQVFjR0ZSUVdNekkyTnpZM0hnRVZGQVlIRGdFZEFSUVhQZ0UwSmlJR0ZCWUNBTGo0QlFYNHVMbjNCUVg0dUp2TkJBVE1uSnZOQkFQT3BCQVRGUllnSndFQ1RuQkZDUVFTQ3hJUENSVXJIU01iSEJnZUlSTWJHaWNiR3pVRitMaTQrQVVGK0xpNCtFUUV6SnlielFRRXpadWN6QUVQQVJFTkJSRWJEeE12SlRZNEFTc2VDd3NPRHhFTUpRRUJIUmtWSGhJUUp4OEdJb0FCR1NZWkdTWVpBQUFBQUFNQTBmL0xBeThETlFBVUFCd0FLd0FBQVNJR0J4VUdGUkVVRmpNaE1qWTFFVFFuTlM0QkJ6NEJNaFlYRlNFRk1oWVZFUlFHSXlFR05SRTBOak1DQUYyRkEwb3dNQUdlTURCS0E0WDlBbHFJV2dMK3dBRnREdzRPRC81bUhRNFBBeldCZzJJSlcvN0ZOREV4TkFFN1d3bGlnNEg3V2w5ZldtbEJEaEwrdkJJUEFTSUJSQklPQUFBR0FHUUJMZ09kQWRNQUNBQVNBQnNBSlFBdUFEZ0FBQUVlQVJRR0lpWTBOamNPQVJRV01qWTBKaWNGSGdFVUJpSW1ORFkzRGdFVUZqSTJOQ1luQlI0QkZBWWlKalEyTnc0QkZCWXlOalFtSndJQUZCb2FLQm9hRkNNdkwwWXZMeVArdGhNYkd5Y2FHaFFrTGk1SEx5OGpBcFVVR2hvbkd4c1RJeTh2Unk0dUpBR3ZBUm9vR2hvb0dpVUJMMFl2TDBZdkFTUUJHaWdhR2lnYUpRRXZSaTh2Umk4QkpBRWFLQm9hS0JvbEFTOUdMeTlHTHdFQUFBQUFBZ0NELzlzRGZRTWxBQ0VBTkFBQUZ6NEJOelUrQVRjZUFSY3lQZ0kzRVM0Qkl3NEJCeTRCSnlJT0FnY1JIZ0VCTGdFbklnWUhFVDRCTXg0QkZ6WTNFUTRCcEE0U0FRZzZNSE80YlRFMUxSb0JBUmtURDBBM2JyZDBNVFV0R2dFQkVnSTVaN2w0SkR3U0JEWXlicmh6Uml3Rk5TVUJFZzd1QkE4QkJVUUZDeFVrSFFHMEVSTUJFQUVGUkFVTEZTUWQvVGdPRWdFVkJVUUZDQWdCa3dzV0JFUUZBUTMrYndzV0FBQUFBQUlBQy8rOUEvVURRd0FoQURrQUFCTWVBVE0yTndFMk1oY0JGaGN5TmpjbUx3RTFOQ1luSXc0QkhRRW5KaUlIQVFZVEZCWVhNeEUwTmpjekhnRVZFVE0rQVRVUkFTWWlCd0VMQVJRUUVnMEJvZ2NRQndHaURSSVFGQUVCREpVUURqa09FYW9YT0JmK1N3eDZNeTJ1RWcrWER4S3RMakwrbEFjUEIvNlZBWU1QRWdFT0FYMEhCLzZERGdFU0R4TUtoLzBPRUFFQkVBNlNteFVWL25NSy9vWXRNUUVCTVE4UkFRRVJELzdQQVRFdEFUa0JTQWNIL3JZQUFBQUFBZ0JXLzlNRHJBTXFBRGdBUkFBQUJTWW5OelltRHdFbUp6YzJOQzhCTmpjWEZqWXZBVFkzRnhZeVB3RVdGd2NHRmo4QkZoY0hCaFFmQVFZSEp5WUdId0VHQnljbUlnOEJOejRCTnk0Qkp3NEJCeDRCQWFGRE93SUJPaTh4SXhFbklTRXBEeUE0THpvQkF6ZytKU0JUSUNKQU53SUJPeTRzSXc0ZUlpSWNFU1VsTHpvQkFqeEVHU0JUSUJ4ZlRtY0NBbWRPVG1jQ0FtY3NEaU1zTHpvQkFqZEFJaUJUSUNVK09BTUJPaTg0SUE4cElTRW5FU014THpvQkFqdERIQ0JUSUJsRVBBSUJPeTRsSlJFY0lpSWY5Z0puVGs1bkFnSm5UazVuQUFNQVMvL0xBN1VETlFBTEFCUUFMUUFBQlQ0Qk55NEJKdzRCQng0QkV5SW1ORFl5SGdFR0F5NEJORFk3QVRVaklpWTBOanNCTWhZZEFUTXlGaFFHQndJQXVQZ0ZCZmk0dWZjRkJmaTBGeUFmTUI4QklWNE9FUkVPTlM0TkVoSU5VUkFSTlE0UkVRNDFCZmk0dVBnRkJmaTR1UGdDU1NBdklDQXZJUDU3QVJBYUVjVVJHaEVWRXRvUkdoQUJBQUFBQUFNQVMvL0xBN1VETlFBTEFEQUFPUUFBQlQ0Qk55NEJKdzRCQng0QkV5STlBVFEyTno0Qk5UUW1Kd1lIRGdFaklpWW5ORGMrQWhZWERnRUhEZ0VkQVJRR0J5SW1ORFl5Rmc0QkFnQzQrQVVGK0xpNTl3VUYrTEFrSHhrZUhDUWZMUlVLRVJJTEV3RUVDVWwyVWdJQktTRVhHQklRRXh3Y0p4d0JIRFVGK0xpNCtBVUYrTGk0K0FGVEl3WWhLUkVUSUJZYUhnRUNKZzBSRUE4TEN5QXRBVHM0SnpFVkR4d1RCUTRTZ1JvcEdSa3BHZ0FBQUFNQVpBRXVBNTBCMHdBSkFCTUFIUUFBQVE0QkZCWXlOalFtSnlFT0FSUVdNalkwSmljaERnRVVGakkyTkNZbkFnQWpMeTlHTHk4ai9yWWtMaTVITHk4akFwVWpMeTlITGk0a0FkTUJMMFl2TDBZdkFRRXZSaTh2Umk4QkFTOUdMeTlHTHdFQUFBQUFCZ0JRQUJNRHNBTHNBQmdBSVFBNUFFSUFXd0JrQUFBQk1qWTNNekkyTkNZckFTNEJJZ1lISVNJT0FSWXpJUjRCTnk0Qk5EWXlGaFFHQlNJR0ZCWVhNeDRCTWpZM0lUNENKaWNoTGdFaUJnY1hJaVkwTmg0QkZBWUJQZ0UzTXpJMk5DWW5JeTRCSWdZSElRNEJIZ0V6SVI0Qk55SW1ORFl5SGdFR0Fwb2hOQXlVRFJNVERaUU1NMFEwQy80NkR4TUJGUTRCeGdzMEloWWNIU29jSFAzQ0RSTVREWmtMTkVRMEN3SEJEeE1CRlE3K1B3czBSRE1NWVJVZEhTc2NIQUVaSWpNTGxRMFRFdzJWQ3pSRE5BditPZzRWQVJNUEFjWUxOQ0lWSFJ3ckhBRWVBaDhsSHhRZEZCNG1KaDRVSFJRZkpUUUJIQ3NkSEN3Y3NoTWVFd0VlSmlVZkFSTWRGQUVlSlNVZVZSMHFIUUVjS3h6K3hRRWxIeE1lRXdFZkpDUWZBUlFkRXg4bE5CMHJIQndySFFBQUFBWUFVUUJIQTdBQ3VRQUlBQlFBSFFBcEFESUFQZ0FBRXo0Qk5DWU9BUlFXTnlFeU5qUW1KeUVPQVJRV0F6STJOQ1lpQmhRV055RStBUzRCSnlFT0FSUVdBejRCTkNZT0FSUVdOeUV5TmpRbUp5RU9BUlFXaGhZZ0lDMGVIdFVDU1E4VEV3Lzl0dzhURTY4V0lDQXRIaDdWQWtrT0ZRRVRELzIzRHhNVHJ4Y2ZJQzBlSHRVQ1NROFRFdy85dHc4VEV3Sk5BUjhzSUFFZUxoNFRFeDRUQVFFVEhoUCs2U0FzSUI4dUhoSUJGQjBUQVFFVEhoUCs2UUVlTFNBQkhpNGVFeE1lRXdFQkV4NFRBQUFBQUFNQWtnQ2xBMjBDV3dBTUFCa0FKZ0FBRXo0Qk15RXlGaFFHQnlFaUpoVStBVGNoSGdFVUJnY2hMZ0VWUGdFM0lSNEJGQVlqSVNJbWtnRVVFQUtTRUJRVUVQMXVEeFlCRkJBQ2toQVVGQkQ5Ymc4V0FSUVFBcElRRkJRUS9XNFBGZ0kzRHhVVkh4UUJGcWdRRkFFQkZDQVVBUUVWcUJBVUFRRVVIeFVWQUFBQUFnQUUvODhEL0FNWUFCMEFPd0FBQVNNdUFTY09BUWNHSGdFMk56NEJOeDRCRnlNaUJoOEJGakkvQVRZbUJUTWVBUmMrQVRjMkxnRUdCdzRCQnk0Qkp6TStBUzhCTGdFUEFRWVdBOW80RmVpbFg2TTdDd0laR2dzeWlVMkh3Uk05RmdzTVhBb2FDbDBNQy93MU9CWG9wVitqT3dzQ0dCc0tNSWxRaU1BVFBSWUxERndLR2dwZERBc0JuNkhVQkFGT1JBMGRFUVFNT1Q0QkE2cUdHUkdFRGc2REVobFlvZE1FQVU1RERoMFJCQXc0UHdFQ3FvWUJHQktERGdFUGd4RVpBQUFBQUFFQWF2KzNBNTBEVUFBekFBQUpBUVl1QWpjQlBnRVhGZ1lIQVFZdUFqY0JQZ0VtQmdjQkRnRVhGalkzQVRZMEp5NEJCd0VHRmhjZUFUY0JOaTRCQmdNbS9zVS9rRzBEUEFHdUpsNGxJZ1lsL2x3UUloY0REd0VsQ2dFVEdBcisyU0FCSGlCVElnR21QRFUxakQvK1VFNEVTRXZEVXdFOUNnRVRHZ0Z3L3NVOUJHMlBRQUd0SmdjakpWNG0vbHdRQkJjaEVRRWxDaGdUQVFyKzJpSlZIaUFDSVFHbVBvczJOQUU4L2xCVHcwdElCRTRCUFFvY0V3RUFBQUFBQXdBQUFDOEVBQUt5QUFzQUZ3QWdBQUFsTmlRM0ppUW5CZ1FIRmdRM0xnRW5QZ0UzSGdFWERnRW5NalkwSmlJR0ZCWUNBT2NCRlFRRS91cm01ZjdwQkFRQkdPUmFkd0lDZDFwYWR3SUNkMW9nTEN0QkxDd3ZEZTVIUnU0TkRlNUdSKzVpQTNkWlduWUNBblphV1hlRUxFQXJLMEFzQUFBQUFRQ01BSzhEZEFKUkFCQUFBRGNHRkJZeU53a0JGakkyTkNjQkppSUhsd3NXSWdzQk1RRXhDeUlXQy82MERDSU04UW9qRlFzQk9QN0lDeFVqQ2dGVURBd0FBQUFCQUl3QXJnTjBBbElBRVFBQUpUWTNBVFkwSmdZSENRRXVBUVlVRndFV0FnQVJEQUZNQ3hjZ0RQN1AvczhNSUJjTEFVd01yZ0VNQVZRTElCZ0JDLzdJQVRnTEFSZ2dEUDZ0REFBQUFRRXZBQXdDMFFMMEFCQUFBQ1VXTWpZMEp3a0JOalFtSWdjQkJoUVhBbzhMSWhVTC9zZ0JPQXNWSWd2K3JBd01Gd3NXSVF3Qk1RRXhEQ0VXQy82MERDSU1BQUFCQVM0QURBTFJBdlFBRVFBQUpUSTNBVFkwSndFbUlnWVdGd2tCQmhRV0FWWVFEQUZUREF6K3JRd2dHQUVMQVRqK3lBc1dEQXNCVEEwaERBRkxEQmNnRFA3UC9zOExJaFlBQUFBQUFRQzcvK3NEUlFNVkFCd0FBQVV5TmpVUkp4OEJGakkyTkNjQkppSUhBUVlVRmpJL0FnY1JGQllDQUJFVkE0QmlDeUFWRFA3a0RTQU0vdU1NRlNBTFlvQURGUlVWRVFJMFhJMWdDaFVmRFFFZERRMys0dzBmRlFwZ2pWejl6QkVWQUFBQUFBRUF1Ly9yQTBVREZRQWNBQUFCSWdZVkVSY3ZBU1lpQmhRWEFSWXlOd0UyTkNZaUR3STNFVFFtQWdBUkZRT0FZZ3NnRlF3QkhBMGdEQUVkREJVZ0MyS0FBeFVERlJVUi9jeGNqV0FLRlI4Ti91TU5EUUVkRFI4VkNtQ05YQUkwRVJVQUFBQUJBSElBT3dPT0FzWUFIQUFBRXhRWEFSWXlOalF2QWhjaE1qWTBKaU1oQno4Qk5pNENCd0VHY2cwQkhRMGZGUXBna1dnQ0hoRVZGUkg5NG1lUVlBc0JGUjhPL3VRTkFZQVFEZjdrREJVZ0MyS0RCaFVpRlFhRFlnc2dGUUVPL3VVTkFBQUFBUUJ5QURzRGpnTEdBQndBQUFFMEp3RW1EZ0VVSHdJbklTSUdGQll6SVRjUEFRWVVGakkzQVRZRGpnMys1QTRmRlFwZ2tXajk0aEVWRlJFQ0htaVJZQW9WSHcwQkhRMEJnQkFOQVJzT0FSVWdDMktEQmhVaUZRYURZZ3NnRlF3QkhBMEFBQUVCSGdBSEF0b0Mzd0FHQUFBbEV5TVJJeEVqQWZ6ZWtadVFCd0VvQWJEK1VBQUFBQVFBRGYvM0EvTURDUUFaQUM0QVJRQmJBQUFGTWpZMUVUUW1JeUlHRHdFR0t3RW1IUUVVTnpNeUh3RWVBU1VXTmpjK0FUUW1KeTRCRGdFWEhnRVVCZ2NHRmdVaUx3RXVBU3NCQmowQk5Ec0JNalkvQVRZeUZSRVVOeFkyTno0Qk5DWW5MZ0VIRGdFWEhnRVVCZ2NHRmdIMkZod2NGdzhhRWNrRUIzOWJXMzhIQk1rUUd3R0NEUnNLS2k4dUt3b2JHUU1KSkNnb0pBa0Qvb0VEQkw0SURnaVBHUm1QQ0E0SXZnTUsyZ3dhQ2hvY0hSa0tHZ3dPQXdvVEZSWVNDZ01KSEJZQ3F4Y2VEeEN5QkFGZ3EyQUJCTFFPRGxjSUJnMDdsNmFYUEEwRkVSc1BOSUdRZ2pNT0hBWUVxd2NGQVJxMUdRUUlyQU1HL2JBR2NBZ0ZEU0pkWmwwakRBVUhDaDBPR2tkT1J4b09IQUFBQmdBNS85OEQwZ01pQUNRQVRBQlFBR0lBWmdCeUFBQUJOREVtTHdFdUFRY2hKZ1lQQWdZVkhnRVhNekkyTng0Qk56WTNIZ0V6TVJZM1BnRUhCaXNCSWlZdkFRY0dCd1lISWlZdkFRY09BU3NCTGdFOUFUUS9BalkzSVRJV0h3SVdCZ2NtSndjWEl3WUhGU0UxSmljUkZCWXpJVEkyTlJFbEppY0hBU0VpSmpRMk55RWVBUlFHQTc0QkFrd0xOQ0g5NUNBeUMxTUJDUUZpU3djb1J4b3pqanNNQ2hwSEtDNHBPaStNRnhrRUdDb1BPRGdHQ0IwbUZ5b1BPVGdRS2hjR0xEb0ZBbElGRGdJbkJ3d0RUQUlNSE5vQ0FnUHhBaDhqL1pZbkloOFhBcEFYSC8zL0FnRURBV3YrUEJBV0ZoQUJ4QkFXRmdJVUFRVUV3UjhrQVFFaUg4Z0ZIQjVOWndNaUlEc01NQXNNSUNFQkZpRjVXZ3dVRTBSRUNBWVlBUlFUUkVVU0ZRSTlMZ0VTRVFYSERnRUtCOE1HS0VsckFRRUNDZzhHNE9FSEV2NzBGeHNiRndFS0J3RUJBZ0VBRlI4VUFRRVVIeFVBQUFBRkFFRC80QVBBQXlBQUN3QWZBRE1BU0FCZEFBQUJJU0ltTkRZeklUSVdGQVlESXlJbU5EWTdBVEkyUFFFME5qSVdIUUVPQVFVakxnRW5OVFEyTWhZZEFSUVdPd0V5RmhRR0F5SW1QUUUrQVRjek1oWVVCaXNCSWdZZEFSUUdJU0ltUFFFMEppc0JJaVkwTmpzQkhnRVhGUlFHQTZEOHdBNFNFZzREUUE0U0VtN0FEaElTRHNBT0VoSWNFZ0UyL2ZlZ0tUWUJFaHdTRWc2Z0RoSVM3ZzRTQVRZcG9BNFNFZzZnRGhJU0F2SU9FaElPd0E0U0VnN0FLVFlCRWdGZ0Vod1NFaHdTL29BU0hCSVNEcUFPRWhJT29DazJBUUUyS2FBT0VoSU9vQTRTRWh3U0FpQVNEcUFwTmdFU0hCSVNEcUFPRWhJT29BNFNFaHdTQVRZcG9BNFNBQUFBQUFFQU1mLzJBODhEQ1FBZ0FBQUZNalk5QVRNMkZoY2VBVGN5TmpjMkFpY2pOVFFtSXlJR0J3RUdGQmNCSGdFQjFSWWNEWHVuTnd3YkRoSVpBUUhWNWcwY0Z3OGFFZjZ1RnhjQlVoQWJDUndXcEFGUVp4UU5BUjBjOEFFUUE2SVdIZzhRL3NRWUxCait3UTRPQUFFQU1mLzJBODhEQ1FBZ0FBQUZNalkzQVRZMEp3RXVBU01pQmgwQkl3WUNGeDRCTXhZMk56NEJGek1WRkJZQ0t3OGNFQUZTRnhmK3JoSVpEeGNjRGViVkFRRVpFZzRiQ3ppbmV3MGNDUTRPQVQ4WUxCZ0JQQkFQSGhlaUF2N3c4QndkQVEwVGFGQUJwQlljQUFRQUNQL25BL2dER1FBYkFDY0FOUUJFQUFBWElUWTNFU1lyQVNJbUx3RXVBU3NCSWdZUEFRNEJLd0VpQnhFV0pTNEJKejRCTng0QkZ3NEJFeUltTlRRK0FUSWVBUlVPQVFjQk1qNENOQzRDSXc0QkJ4NEJqd0xpaGdFQmhtUVlHZzBqRHljaHF5QW9EeU1OR2hoaGhnRUJBZmRrZ3dNRGcyUmtnd01EZzlBWEhnNFpIQmtPQVI0Vy9zd2lQVEFhR2pBOUlraGZBZ0pmR1FHRUFjR0VEUkFtRWhNVEVpWVFEWVQrUDRTSUE0UmtaSVFDQW9Sa1pJUUJVUjRXRHhnT0RoZ1BGaDRCL3U4Wk1ENUVQakFaQWw5SVNHQUFBd0FSLzlzRDd3TWxBQ1VBTGdBM0FBQVRIZ0U3QVJNZUFUTWhNalkwSmlNaExnRXZBU0V5Tmo4Qk5qY3VBU01oSnk0Qkt3RWlCZ0VlQVRJMk5DWWlCZ1VVRmpJMk5DWWlCaEVCRWcyUlJRWXlMd0gwRFJJU0RmNFRFaFlEQndJZ0x6SUhJZ0VCQVJVUi9VUUlBeGtnbHcwU0FUZ0JKem9wS1RvbkFaQW9PeWdvT3lnREJRMFQvaWt1TlJJY0VnRVhGQzAxTHVNS0JoQVROeGdaRS8wT0hpY29PaWduSGg0bkp6d25Kd0FBQUFBRUFCTC8yd1B2QXlVQUpBQXJBRFFBUFFBQUpTRXlOalFtSXlFdUFTOEJJVEkyUHdFMk55NEJJeUVuTGdFckFTSUdGQlk3QVJNZUFRRUhEZ0VqSVNjVE1qWTBKaUlHRkJZaE1qWTBKaUlHRkJZQmJnSDBEUklTRGY0VEVoWURCd0lnTHpJSElnRUJBUlVSL1VRSUF4a2dsdzBTRWcyUlJRWXlBbWNmQWhZVC9kNGxleHdwS1Rvbkp3R3VIaWdvT3lnb3F4SWNFZ0VYRkMwMUx1TUtCaEFUTnhnWkV4b1QvaWt1TlFIUnpSUVgrUDFmS0Rvb0p6d25KenduSnp3bkFBQURBRW4veVFPM0F6Y0FGQUFnQUN3QUFBRVdGQThCQmlJdkFTWTBOaklmQVJZeVB3RTJNZ00rQVRjdUFTY09BUWNlQVJjdUFTYytBVGNlQVJjT0FRTEZDUW4wQ2hrSmFBa1RHUW83Q1JrS3lBb1p2SnZQQkFUUG01dlBCQVRQbTdyNEJRWDR1cnI0QlFYNEFoUUtHUXIwQ1FsbkNoa1RDam9LQ3NnSi9mVUV6NXViendRRXo1dWJ6MDBGK0xxNitBVUYrTHE2K0FBQUFBRUFTLy9MQTdVRE5RQUxBQUFGUGdFM0xnRW5EZ0VISGdFQ0FMajRCUVg0dUxuM0JRWDROUVg0dUxqNEJRWDR1TGo0QUFBRkFBQUFGZ1FBQXI0QUN3QWNBQzBBTmdBOEFBQWxGakkrQVNjQkpnNENGd0UrQVRjbUpDY0dCeGMyTXg0QkZ4UVBBVFkzSndZakxnRW5ORGNuRGdFSEZnUUJMZ01qSWdjWEp4NEJGek1uQXlRSkZ4QUJDZjJSQ0JnUUFRa0NrbGhnQVFQKzYraGZVbUltS1ZsMUFoRy9hRlppS3pGWmRRSVdnbDFtQVFRQkZnRmRBUkVpS3hnSEI0VHRBa016RDRZZkNSRVhDUUp2Q0FFUUdBajkrenQ3STBicURRRWNZUkVDZEZvckpPMEJIMk1XQW5aWE15cURQSDhsUmVvQk54Z3JJaEVCZ3c4eVF3R0dBQUFGQUFBQUdBUUFBcnNBQ3dBZEFDOEFOd0EvQUFBbEZqNEJOQ2NCSmc0Q0Z5VUdCeGMyTXg0QkZ4UUdCeGMrQVRjbUpBTTJOeWNHQnk0Qkp6NEJOeWNPQVFjV0JDVTJOUzRCSndZSEV6WTNBUVlWSGdFREh3b1dFUWo5bGdrWEVBRUlBVXRnVURBOVE4RDdCRmxPTGxoaEFRUCs3T2xuVmpCQ1M4RDdCQUZlVWk1ZFpnRUVBUllCcEJFQ2RWZ3NKVkV4S3Y3ckZRSjBJUWtCRUJjSkFtb0lBUkFYQ1JRQkhUQVRETWt0R1dNeExqeDhJMGJxL1pRQkhqRVZBUXZGTWhab015NDhmeVJGNjk4bUsxbDBBZ0VRL25NQkZRRVZLakpYZFFBQUJBQUFBQzhFQUFLeEFBc0FGd0FqQUN3QUFDVTJKRGNtSkNjR0JBY1dCRGN1QVNjK0FUY2VBUmNPQVNjK0FUY3VBU2NPQVFjZUFUY3VBVFEyTWhZVUJnSUE1d0VWQkFUKzYrZmsvdWdFQkFFWTVMNzhCQVQ4dnIzOUJBVDl2VnAyQWdKMldscDNBUUoyV2g0b0tEd25KeThNN2tkRzdnME43a1pIN2k4THlETXR6QTBOekMwenlDa0NlRmhhZFFJQ2RWcFllSW9CSnpzb0tEc25BQUFBQUFFQWcvL2JBMzBESlFBaEFBQVhQZ0UzTlQ0Qk54NEJGekkrQWpjUkxnRWpEZ0VITGdFbklnNENCeEVlQWFRT0VnRUlPakJ6dUcweE5TMGFBUUVaRXc5QU4yNjNkREUxTFJvQkFSSWxBUklPN2dRUEFRVkVCUXNWSkIwQnRCRVRBUkFCQlVRRkN4VWtIZjA0RGhJQUFBQUNBRlgvd3dPckF6d0FNZ0JBQUFBVERnRUhGaGNXQnc0QkZSUVhGZ2NPQVJVVUhnRU9BUlVVRmpzQkhnRVZEZ0VIRkJZek1qWTNQZ0UzUGdFM05DWW5JeUlCTGdFbkl4NEJCdzRCQnpNK0Fkd2FLQUVCQ2dRSEZCMFBCd3NQRWdrVEZnc3FJWmtkSXdSQUJDSWFGaDBNTVhRektpa0JycGs4VlFLckFXaFNUVG8zQVFNeEhqOUtZQU16QmlJZkdRMEpBd2trR2g0VENnY0lJaFlQSFJBUkhSSWdMQUViR0MrSFBCOGhIUmxlbTBJMmJrdDZtd1QrNjJPR0F5dDhTbEYxSXdLRkFBQUFBQU1BUFArZEE4UURZd0F3QUdrQWR3QUFBU01pQmdjT0FRY1dGdzRCRkJjT0FSVVVGd1lWSGdFWE16WVhEZ0VISGdFWE1qWTNQZ0UzTXo0Qk55NEJKeU11QVFjekhnRVhGZ1lIRGdFSERnRW5JaWMrQVRjdUFTc0JMZ0UxSmpZM05qUW5MZ0UxTkRjMk5UUW5MZ0UxSmpjMk5UUW5MZ0UxTkRjK0FRVWVBUmNPQVFjalBnRTFOQ1luQVo0N0tVSVlMRE1CQVFRV0dBb1BFUTRUQVQ4eG9oRUJCVUFFQVRVc0h5OFVKbVpNVVZKckFnSjFXSTByWlhZOGlhSUNBU1VyTW5ZeURCSUtJUUVGUUFRQk15ZVpGUnNCQ3cwR0JBc0pIUTBEQ1FnQkxnb0NDQVF2RXpvQnVEdFNBUUZKTkNjWUZpb25BMk1GQmdzNUtCQVBFQzgxRnc4cUZ5RVpHeWd4UUFJQkRpV0pSQzA0QVNNb1NwUmJBNWR3YjVZREZ4bEJBNGR2UkdrNVFKNWZHUkFCSlRlR05TVXBBUnNXRHhjTUJnMEZEeGNOSGhZSkN3VUVFUlFMSWhjRkNnTUZFaEFISVF3RkJUQURjVlJWY2dJdFlUZzhaeWdBQUFBQUFnQlYvOFFEcXdNOUFESUFRQUFBQlQ0Qk55WW5KamMrQVRjMEp5WTNQZ0UxTkM0QlBnRTFOQ1luSXlJbUp6NEJOelFtSXlJR0J3NEJCdzRCRlJRV0Z6TXlBUjRCRnpNdUFUYytBVGNqRGdFREl4c29BUUVLQlFnVUhBRVBDQXdQRWdvU0Znc3FJWmtlSWdFRlFBUWlHaFlkRERGME15b3FycGs4VlAxV0FXaFNUVG8zQVFNeEhqOUtZRE1HSWg4WURna0RDU1FhSGhNS0J3Z2lGZzhkRUJFZEVpQXJBUndZTDRjOEhpSWRHVjZjUVRadVRIbWJCQUVWWTRZREszdExVWFVqQW9VQUFBQUJBRmIvOXdPcUF3a0FGd0FBQlRJMk56WVNOeTRCSnlJR0J5NEJJdzRCQnhZU0Z4NEJBZ0FIRVFlNDBRSURobW85WFIwZFhqeHFoZ01DMExrSEVRa0hCSFFCQjRwempRSkFOemRBQW8xeml2NzNjZ1FIQUFBQUF3QTgvNTBEeEFOakFERUFhZ0I0QUFBRk16STJOejRCTnlZblBnRTBKejRCTlRRbUp6WTFMZ0VuSXlJblBnRTNMZ0VuSWdZSERnRUhJdzRCQng0QkZ6TWVBVGNuTGdFbkpqWTNQZ0UzUGdFWE1oY09BUWNlQVRzQkhnRVZGZ1lIQmhRWEhnRVZGQWNHRlFZWEhnRVZGZ2NHRlJRWEhnRVZGQWNPQVNVdUFTYytBVGN6RGdFVkZCWVhBbUk3S1VJWUxETUJBUVFXR0FvUEVRY0hFd0UvTWFJUkFRVkFCQUUxTEI4dkZDWm1URkZTYXdJQ2RWaU5LMlYyUEltaUFnRWxLekoyTWd3U0NpRUJCVUFFQVRNbm1SVWJBUXNOQmdRTENSME1BUU1KQ0FFdUNnSUlCQzhUT3Y1SU8xSUJBVWswSnhnV0tpZGpCUVlMT1NnUUR4QXZOaFlQS2hnUEhnd2JLREZBQWcwbGlVUXRPQUVqS0VxVVd3T1djVytXQXhjWlFRRUNoMjlFYVRsQW5sOFpFQUVsTm9jMUpTa0JHeFlQRnd3R0RRVVBGd3dmRmdrTEJBVVJGQXNpRndVS0F3VVNFQWNoREFVRk1BTnhWRlZ5QWkxaE9EeG5LQUFDQUZiLzl3T3FBd2tBRmdBd0FBQVRGaElYSGdFeU5qYzJFamN1QVNjaUJnY3VBU01PQVJjK0FUY2VBUmNlQVRJMk56NEJOeDRCRnc0QkJ3WWlKeTRCVmdMU3R3Y1JEaEVIdDlJQ0E0WnFQVjBkSFY0OGFvWkNBbDlOTzBvVkNBNE9EUWtWU2p0Tlh3SUZ6SXNIQlFhTHpBSUhpdjc2ZFFRSEJ3UjFBUWFLYzQwQ015d3NNd0tOYzFabUFRRTZJZ3dLQ2d3aU9nRUJabFo2N1Z3RkJWenRBQUFBQUFRQUtQL0RBOWdEUFFBWUFDRUFLZ0F6QUFBRk1qWS9BU0V5TmpVUk5DWW5JUTRCRlJFVUZqc0JGUlFXRXc0QklpWTBOaklXRnc0QklpWTBOaklXRnc0QklpWTBOaklXQVNZTkZnK2JBU0ZnWkdSZy9kaGdaR1JnRkJSWkFTVTFKQ00ySmRjQkpUUWxKRFVsMXdFa05TUWtOU1E5RGc2TlpWOEJTRjlsQVFGbFgvNjRYMlY4RlJjQi94c2tKRFVsSlJvYkpDUTFKU1VhR3lRa05TVWxBQUFDQUNiL213UGFBMlVBSWdBc0FBQVhBU2NtTndFK0FUSVdGd0VXRkE4QkFUWTFFVFltSndFdUFTSUdCd0VPQVJjUkZCY2hNamNCSmlJSEFSWXhBUlRvRFE0QmJoQVlHUllSQVc4SEIrWUJFZ29CRVJmK3B4Z3FMaW9YL3FZWEVRRjZBckkvR2Y2TEd6UWIvb2tWSHdFUjRSQUxBUndORFEwTi91UUZEd2ZoL3ZBU0xBR3lJaW9UQVFzVEZoWVQvdlVUS2lMK1RpMVlGd0Z4R3h2K2pSVUFCUUFtLzVVRDJnTnJBQk1BSXdBcEFEQUFPZ0FBRnlFeU5SRTJKaWNCTGdFaUJnY0JEZ0VYRVJRQkxnRWlCZzhCTFFFK0FUSVdGdzBDRVRjWEJ5WUJFUlFISnpjV0FTSWpBVFl5RndFaUk2MENwb1lCR0I3K3RSY3JMaW9YL3JVZUdRRUNNeFl0TFN3V0hQNy9BVUlQRnhzV0R3RkQvd0Q5OGdIMjhRWURNQVh3OUFIOUV3UUZBU3NiTWhzQktnVUZhNFVCcWkwMkZ3RUVFeFlXRS83OEZ6WXQvbGFGQVpzV0ZCUVdHLzM3REEwTkRQejgrd0cyRFBUc0RBSEkva29SRGUzeEJQNEJBU1ljSFA3YUFBQUFBQUlBMXYvT0F5b0RNZ0FVQUJ3QUFBRWlCZ2NWQmhVUkZCWXpJVEkyTlJFMEp6VXVBUWMrQVRJV0Z4VWhBZ0JkaFFORkt5b0JxaW9yUlFPRi9RSmFpRm9DL3NBRE1vR0Rad2RTL3JrdUt5c3VBVWhTQjJhRGdmdGFYMTlhYndBQUFBTUFRZi9VQTc0RExBQUhBQlFBSUFBQUJSRW5KaWNSRnhZbE1qOEJFUVlQQVFZWEVSUVdCVFkvQVRZMUVTWW5JZzhCQW5IVUN3M1lDdjRNRHhXMERBekxKd0VhQWxBR0IrQWxBVEFQRkw0c0FzMkJCd1A5S1hrRkNndGhBdGNGQjNVVkt2MnVHQmtNQVFWL0ZTb0NVekFCQzJrQUFnRmYvN29Db1FOR0FCTUFIQUFBQlRJMk54RStBVGN1QVNjT0FRY2VBUmNSSGdFRExnRTBOaklXRkFZQ0FBNFpBVFpDQVFKYVJVVmFBZ0ZETlFFWklCY2ZIeTRmSDBaa1lBR0tEMVU0UlZzQ0FsdEZPVlVPL25aZ1l3TGdBU0F1SHg4dUlBQUFBQUFEQUdmL3l3T1pBelVBRlFBZUFEZ0FBQ1V5TmpjMVBnRTNOQzRDSXc0QkJ4NEJGeFVlQVFNaUpqUTJNaFlVQmhNK0FUY3VBU2NWSGdFWERnRUhMZ0VuUGdFM05RNEJCeDRCQWdBT0dRRTJRZ0VZTGpzZ1JWb0NBVU0xQVJrZ0Z4OGZMaDhmRjhUVUFRakZZVVNKQmdLbmxaV25BZ2FKUkdIRkNBSFVhbVJmeWc5Vk9TQTdMaGdDVzBRNlZBL0tYMlFDSVNBdUlDQXVJUDFBQTJ4TFYyRUJRd0U3TURSR0FnRkhOREE3QVVNQllWZExiQUFDQUV2L3l3TzFBelVBQ3dBWEFBQUZQZ0UzTGdFbkRnRUhIZ0VUTGdFblBnRTNIZ0VYRGdFQ0FMajRCUVg0dUxuM0JRWDR1RGRNQVFGTU56aExBUUZMTlFYNHVMajRCUVg0dUxqNEFTd0JTemczU3dFQlN6YzRTd0FBQUFFQVAvKy9BOEVEUVFBZkFBQUZNalkzQVRZMEppSUhBUTRCRlJRV0h3RVdOamNCTmhZSEFRNEJId0VlQVFKWEZ5SU1BUmtNR0NzZS9SOGNKQ2dmNkJRYkRnSFdDUTRIL2tvTUJBZERDUnhCSlI4QzNSNHJHQXorNVFvaEZ4MGNDVVlHQXcwQnR3Y09DZjRvREJ3VjRpRXBBQUFBQXdBRy8vVUQrZ01MQUF3QUdBQXNBQUFYSVRJM0VTWW5JU0lIRVJZekV5NEJKejRCTng0QkZ3NEJBeTRCUFFFM05qTXlId0UzTmpJZkFSVVVCZ2VOQXVhR0FRR0cvUnFHQVFHR3V5MDhBUUU4TFN3OEFRRTg1aDhqZ3gwZUlCMVN6U0JKSU1Vakh3cUVBZ3lFQVlYOTlJVUJnUUU3TFMwOEFRRThMUzA3L3NNQkl4OGJjaG9iU2JZYkhMWkRIeUlCQUFBQUFBUUFBUC9BQkFBREFnQU9BQm9BSXdBNkFBQVRORFl6SVRVMEl5RWlGUkVVT3dFWElUSTFFVFFqSVNJWEVRWUJMZ0UwTmpJV0ZBWURJaVk5QVRjK0FUSVdId0UzUGdFeUZoOEJGUTRCSTQxVlV3SUplZjIxZW5vVHJnSkxlbnI5dFhvQkFRRVBKekl5VERNenZoc2NReG9rS0NjYUpYOGZNREl4SDJNQkhCb0IyVk5VQ25oNC9taDN1M2dCbkhkMy9tUjRBVW9CTTB3ek0wd3ovdk1kR2lBK0Z4d2NHQ0J5SFNNaUhsNVJHaDBBQkFBQS84QUVBQU1DQUJNQUlRQXpBRHdBQURjekZRWXpJVEkxRVRRckFUVTBJeUVpRlJFVU55SW5FVFkzSVJZWEZTRWlGeEVUTmpNaE1oY1JKeTRCRHdFbkppTWlEd0UzUGdFMEppSUdGQlo2U0FGNkFrdDZla2g1L2JWNmV6c0NBanNDU1RzQi9qdDZBVDRCT3dKSk93S09Ha0FicmtVWkhCa1paZEltTkRSTk16TjdRM2g0QVp4M1AzaDQvbWgzUGowQmtUd0JBVHc4ZC83bEFSYzlQZjY5aGhjQkdKby9GaFpZcVFFMFRUUTBUVFFBQWdCTC84c0R0UU0xQUFzQUlBQUFCVDRCTnk0Qkp3NEJCeDRCTnlJbU5EY1ROaklYRXhZVUJpSXZBU1lpRHdFR0FnQzQrQVVGK0xpNTl3VUYrQTRLREFPZkNpa0pud1FNRlFlUEJRb0Zqd2MxQmZpNHVQZ0ZCZmk0dVBqVkRCTUlBWlVaR2Y1ckNCTU1CbzhHQm84R0FBVUFlUC9FQTRjRFBBQUlBQlFBTlFCQkFFZ0FBQUVSTGdFbkRnRUhGUUVXTWpZMEp3RW1JZ1lVRnhNT0FSUVdNeUV5TmpRbUp5TTFOamNuQmdjdUFTYzFOQ1lpQmgwQkhnRVhGUUUwSmlJR0J4VVVCeGMyTlFjbkZSNEJGeklDYWdGR096bEhBUUhvQ2hzVEN2MDBDaHNVQ3A0TkV4TU5BWkFORXhNTnAxSTdMalZMWm53Q0VSMFJBb3AzQVVNUkhCRUJCVFVQNTcwQlJqb2pBYXdCQmoxTUFRRktPZ2Y5Y2dvVUdnc0N6QW9VR3dyOUZ3RVRHaE1UR2hNQlhnY3FMaU1CQW54a1pBOFJFUTlrZDVvTVhnSGZEeEVSRDJRWkdEUXZObnE5UXp4TkFRQUFBQU1BQVAvNEJBQURCQUFaQUM0QVJBQUFCVEkyTlJFMEppY2lCZzhCQmlzQklnY1ZGaGN6TWg4QkhnRWxGalkzUGdFMEppY3VBUTRCRng0QkZBWUhCaFluRmpZM1BnRTBKaWN1QVFjT0FSY2VBUlFHQndZV0Fkc1hHeHdXRUJrUnV3VUdmMXNCQVZ0L0JnVzdEeHdCcXd3YkNpb3VMaW9LR3hrRENpTW5KeVFKQko0TEd3b1pIQjBZQ2hvTURnUUxFaFVWRXdrRENCd1dBcVlXSFFFUEVMRUVZS1ZnQVFTekRnMVhDUVlOTzVhbGxUd01CaEVjRGpPQmpvRXpEaHhxQndVTUlseG1YQ0lOQlFnS0hBOFpSazFIR2c0Y0FBQUFBQUlBaFAreEEzMERUZ0FMQUM0QUFBRStBVElXRnpVMEppSUdGUmNSQno4QlBnRVdGQThCQmlJdkFTWTBOaklmQVNjUkl5WVZFUlEzSVRJbkVUWWpBZDRCRXh3VEFSUWNGRVVDRzBFSkhSSUxrQTBhRFpBTEVod0tYUVBUaG9ZQjdJY0JBWWNDV0EwVEV3M1ZEaE1URHJyKzhUNGRSUW9CRWhzS2pBd01qQW9iRWd0aVBnRVBBWVgrUjRVQmhBRzVoQUFBQUFBREFKSUFwUU51QWxzQUFBQU1BQjRBQUJNeklUSVZFUlFqSVNJMUVUUUZOejRCSGdFVkVSUU9BU1l2QVNZOUFUU1NTUUZ1U1VuK2tra0NNMjBKRkJRTEN4UVVDVzBPQWx0Si90eEpTUUVrU1lkWUJnTUpFZ3YrNGdzU0NRSUhXQXNSY0JFQUFnQ0UvNXdEZlFOa0FCb0FMZ0FBQVQ0QlBRRW5GeFl5TmpRdkFTWWlEd0VPQVJZeVB3RUhGUlFXQXlFMkp4RTJLd0VSRGdFaUpqVVJJeUlWRVJRQ0FBNFVBbDBLR3hJS2tRd2FESkVKQVJFY0NsNERGT2dCN0ljQkFZZktBUmtrR2N1R0FoNEJFZzZIUDJNS0VSb0pqQXdNakFrYUVRcGtRSWNPRXYxOUFZUUJtb1grelJJWUdCSUJNNFgrWm9VQUF3QkYvK1FEdXdNY0FCd0FLZ0E0QUFBM016STlBVDRCTng0QkZ4VVVPd0V5TmowQkxnRW5JdzRCQnhVVUZoY3pNalk5QVRRbUp5TUdCeFVXSVRNeVBRRTBKeU1PQVIwQkZCWmxGd3NDemFxcnpBSUxGdzRTQSt1K0hyN3JBeEtKS1Njckt5Y3BLd0VCQWtNb0xTMG9LQ29xamd2eG03TUJBYk9iOFFzUURlK3UwUU1EMGE3dkRSQ3FLQ1c1SmljQkFTdjhMQ3o4S3dFQkp5YTVKU2dBQUFVQWhQK3ZBM3dEVVFBZkFDa0FOZ0JEQUU4QUFCc0JIZ0V6SVRJMk54TXpNalkwSmljak5TNEJLd0VpQmdjVkl3NEJGQll6TnpRMk93RXlGaDBCSXhNdUFUVVRQZ0V5RmhVRERnRUZMZ0UxQXpRMk1oWVZFeFFHTnc0QklpWW5FVDRCTWhZVjFSc0NMU2dCY2lndEFod3hEUklTRGJBQk15dWRLak1Ccnc0U0VnN3BHQlNPRkJqbS9nd1FFZ0VRR0JBVEFRLyszZ3dQRkJFWUVCSVBuQUVSR0JBQkFSQVlFZ0owL1k0cEtpb3BBbklTSEJJQlBTd3pNeXc5QVJJY0VuNFNGeGNTUGYxUkFSSU9BZkVORWhJTi9nNE9FUUVCRVE0QjhnMFNFZzMrRHc0U0lBNFNFZzRCOFEwU0VnMEFBQUlBSFArNUJBa0RPd0JCQUZ3QUFDVTFNekkrQWpjdUFTOEJOelkxTGdFbklnWVBBU2NtRGdJZkFRY09BUWNVSGdJN0FSVWpMZ0VuUGdFM0pqNENGejRCTng0QkZ4UUhIZ0VYRGdFSEJSWS9BVFkwSmlJUEFUY1JOQ1lpQmhVUkZ5Y21EZ0VVSHdFV0Fvbk9GaWdmRUFFQkxpWTZCZ0VEZUZzMlhoNGNNUllxSXhNQkFUY3BNd0VTSXlzWndzSlJhZ0lCVVVBQklENUxKU2Q2UzNpZkF3RThUQUVDWkV6K3VnME1rUW9TR3dwZEFoUWNGQU5lQ2h3UUNwQU5wMFVRSUNnV0p6b0pEanNLQ2x0NEFqTXVLZzRHQ0JzbkZqa01DMEFyR0N3aUVrVUNhMUJGWkJBblJEQU9DenBGQVFPZmVBME5EMTVBVEdVQzdRRU1qQWtiRUFwalFBRktEaE1URHY2MlFHTUxBUkFiQ1l3TUFBSUFIQUFEQkFvRE93QWdBRHdBQUNVVkRnRW1KelVoTGdFblBnRTNKajRDRno0Qk54NEJGeFFISGdFWERnRUhBU1lQQVFZVUZqSS9BZ2NWSGdFeU5qYzFKeGNXTWpZMEx3RW1BallCSkNNQi91eFFhd0lCVVVBQklUNUtKaVo3UzNpZkF3STlTd0lDWlV6K3Vnd05rQW9SSEFsQkhRTUJFeDBUQVFOZUNoc1JDcEVNcDNzVUZSVVVld0pyVUVWa0VDZEVNQTRMT2tVQkE1OTREUTBQWGtCTVpRSUJhZ0VNakFrYkVRdEVIMEMyRGhNVERyWkFZd3NSR3dtTURBQUFBQUlBSEFBSUJBb0RPd0EvQUZvQUFDVTFNejRCTnk0Qkx3RTNOalV1QVNjaUJnOEJKeVlPQWg4QkJ3NEJGUlFlQWpzQkZTTXVBU2MrQVRjbVBnSVhQZ0UzSGdFWEZBY2VBUmNPQVFjQk5oOEJGaFFHSWk4QkZ4RU9BU0ltSnhFM0J3WWlKalEvQVRZQ2lzMHZQZ0VCTGlVNkJRRUNlVm8zWGg0Y01SVXJJeE1CQWpjcU14SWlMQmpEdzFCckFnRlJRQUVoUGtvbUpudExlSjhEQWoxTEFnSmxUUDY2RFF5UkNoRWJDbDREQVJNZEV3RURYZ2tjRVFxUURhZEZBVDR2SnpvSkRqc0tDbHQ0QWpNdUtnNEdDQnNuRmprTUMwQXJHQ3dpRWtVQ2ExQkZaQkFuUkRBT0N6cEZBUU9mZUEwTkQxNUFUR1VDQVdvQkRJd0pHeEVMWTBEK3RnNFRFdzRCU2tCakN4RWJDWXdNQUFBQUFBSUFIUCs1QkFrRE93QWpBRDRBQUNVMU5DNEJJZzRCSFFFaExnRW5QZ0UzSmo0Q0Z6NEJOeDRCRnhRSEhnRVhEZ0VIQlJZL0FUWTBKaUlQQVRjMU5DWWlCaDBCRnljbURnRVVId0VXQWowTUZCZ1VEUDcwVVdvQ0FWRkFBU0ErU3lVbmVrdDRud01CUEV3QkFtUk0vcm9OREpFS0Voc0tYUUlVSEJRRFhnb2NFQXFRRGFmeERCUU1EQlFNOFFKclVFVmtFQ2RFTUE0TE9rVUJBNTk0RFEwUFhrQk1aUUx0QVF5TUNSc1FDbU5BVHc0VEV3NVBRR01MQVJBYkNZd01BQUFBRWdEZUFBRUFBQUFBQUFBQUV3QW9BQUVBQUFBQUFBRUFDQUJPQUFFQUFBQUFBQUlBQndCbkFBRUFBQUFBQUFNQUZRQ2JBQUVBQUFBQUFBUUFDQUREQUFFQUFBQUFBQVVBT3dGRUFBRUFBQUFBQUFZQUNBR1NBQUVBQUFBQUFBb0FLd0h6QUFFQUFBQUFBQXNBRXdKSEFBTUFBUVFKQUFBQUpnQUFBQU1BQVFRSkFBRUFFQUE4QUFNQUFRUUpBQUlBRGdCWEFBTUFBUVFKQUFNQUtnQnZBQU1BQVFRSkFBUUFFQUN4QUFNQUFRUUpBQVVBZGdETUFBTUFBUVFKQUFZQUVBR0FBQU1BQVFRSkFBb0FWZ0diQUFNQUFRUUpBQXNBSmdJZkFFTUFjZ0JsQUdFQWRBQmxBR1FBSUFCaUFIa0FJQUJwQUdNQWJ3QnVBR1lBYndCdUFIUUFBRU55WldGMFpXUWdZbmtnYVdOdmJtWnZiblFBQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0FBZFc1cGFXTnZibk1BQUZJQVpRQm5BSFVBYkFCaEFISUFBRkpsWjNWc1lYSUFBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QTZBRllBWlFCeUFITUFhUUJ2QUc0QUlBQXhBQzRBTUFBd0FBQjFibWxwWTI5dWN6cFdaWEp6YVc5dUlERXVNREFBQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0FBZFc1cGFXTnZibk1BQUZZQVpRQnlBSE1BYVFCdkFHNEFJQUF4QUM0QU1BQXdBRHNBU2dCaEFHNEFkUUJoQUhJQWVRQWdBRE1BTEFBZ0FESUFNQUF5QURBQU93QkdBRzhBYmdCMEFFTUFjZ0JsQUdFQWRBQnZBSElBSUFBeEFESUFMZ0F3QUM0QU1BQXVBRElBTlFBekFEVUFJQUEyQURRQUxRQmlBR2tBZEFBQVZtVnljMmx2YmlBeExqQXdPMHBoYm5WaGNua2dNeXdnTWpBeU1EdEdiMjUwUTNKbFlYUnZjaUF4TWk0d0xqQXVNalV6TlNBMk5DMWlhWFFBQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0FBZFc1cGFXTnZibk1BQUVjQVpRQnVBR1VBY2dCaEFIUUFaUUJrQUNBQVlnQjVBQ0FBY3dCMkFHY0FNZ0IwQUhRQVpnQWdBR1lBY2dCdkFHMEFJQUJHQUc4QWJnQjBBR1VBYkFCc0FHOEFJQUJ3QUhJQWJ3QnFBR1VBWXdCMEFDNEFBRWRsYm1WeVlYUmxaQ0JpZVNCemRtY3lkSFJtSUdaeWIyMGdSbTl1ZEdWc2JHOGdjSEp2YW1WamRDNEFBR2dBZEFCMEFIQUFPZ0F2QUM4QVpnQnZBRzRBZEFCbEFHd0FiQUJ2QUM0QVl3QnZBRzBBQUdoMGRIQTZMeTltYjI1MFpXeHNieTVqYjIwQUFBQUFBQUlBQUFBQUFBQUFDUUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQWhnQUFBUUlBQWdFREFRUUJCUUVHQVFjQkNBRUpBUW9CQ3dFTUFRMEJEZ0VQQVJBQkVRRVNBUk1CRkFFVkFSWUJGd0VZQVJrQkdnRWJBUndCSFFFZUFSOEJJQUVoQVNJQkl3RWtBU1VCSmdFbkFBNEE3d0VvQVNrQktnRXJBU3dCTFFFdUFTOEJNQUV4QVRJQk13RTBBVFVCTmdFM0FUZ0JPUUU2QVRzQlBBRTlBVDRCUHdGQUFVRUJRZ0ZEQVVRQlJRRkdBVWNCU0FGSkFVb0JTd0ZNQVUwQlRnRlBBVkFCVVFGU0FWTUJWQUZWQVZZQlZ3RllBVmtCV2dGYkFWd0JYUUZlQVY4QllBRmhBV0lCWXdGa0FXVUJaZ0ZuQVdnQmFRRnFBV3NCYkFGdEFXNEJid0Z3QVhFQmNnRnpBWFFCZFFGMkFYY0JlQUY1QVhvQmV3RjhBWDBCZmdGL0FZQUJnUUdDQVlNSGRXNXBNREF3TUFkamIyNTBZV04wQm5CbGNuTnZiZ2x3WlhKemIyNWhaR1FOWTI5dWRHRmpkR1pwYkd4bFpBeHdaWEp6YjI1bWFXeHNaV1FQY0dWeWMyOXVZV1JrWm1sc2JHVmtCWEJvYjI1bEJXVnRZV2xzQ21Ob1lYUmlkV0ppYkdVSlkyaGhkR0p2ZUdWekMzQm9iMjVsWm1sc2JHVmtDMlZ0WVdsc1ptbHNiR1ZrRUdOb1lYUmlkV0ppYkdWbWFXeHNaV1FQWTJoaGRHSnZlR1Z6Wm1sc2JHVmtCWGRsYVdKdkJuZGxhWGhwYmd0d1pXNW5lVzkxY1hWaGJnUmphR0YwQW5GeENIWnBaR1Z2WTJGdEJtTmhiV1Z5WVFOdGFXTUliRzlqWVhScGIyNEpiV2xqWm1sc2JHVmtEbXh2WTJGMGFXOXVabWxzYkdWa0JtMXBZMjltWmdWcGJXRm5aUU50WVhBSFkyOXRjRzl6WlFWMGNtRnphQVoxY0d4dllXUUlaRzkzYm14dllXUUZZMnh2YzJVRWNtVmtid1IxYm1SdkIzSmxabkpsYzJnRWMzUmhjZ3QzYUdsMFpXTnBjbU5zWlFWamJHVmhjZzF5WldaeVpYTm9abWxzYkdWa0NuTjBZWEptYVd4c1pXUUtjR3gxYzJacGJHeGxaQXR0YVc1MWMyWnBiR3hsWkF4amFYSmpiR1ZtYVd4c1pXUU9ZMmhsWTJ0aWIzaG1hV3hzWldRS1kyeHZjMlZsYlhCMGVReHlaV1p5WlhOb1pXMXdkSGtHY21Wc2IyRmtDSE4wWVhKb1lXeG1ESE53YVc1dVpYSmplV05zWlFaelpXRnlZMmdKY0d4MWMyVnRjSFI1QjJadmNuZGhjbVFFWW1GamF3NWphR1ZqYTIxaGNtdGxiWEIwZVFSb2IyMWxDRzVoZG1sbllYUmxCR2RsWVhJS2NHRndaWEp3YkdGdVpRUnBibVp2QkdobGJIQUdiRzlqYTJWa0JHMXZjbVVFWm14aFp3cG9iMjFsWm1sc2JHVmtDbWRsWVhKbWFXeHNaV1FLYVc1bWIyWnBiR3hsWkFwb1pXeHdabWxzYkdWa0NtMXZjbVZtYVd4c1pXUUljMlYwZEdsdVozTUViR2x6ZEFSaVlYSnpCR3h2YjNBSmNHRndaWEpqYkdsd0NXVjVaV1pwYkd4bFpBeDFjSGRoY21SellYSnliM2NPWkc5M2JuZGhjbVJ6WVhKeWIzY09iR1ZtZEhkaGNtUnpZWEp5YjNjUGNtbG5hSFIzWVhKa2MyRnljbTkzQzJGeWNtOTNkR2hwYm5Wd0RXRnljbTkzZEdocGJtUnZkMjROWVhKeWIzZDBhR2x1YkdWbWRBNWhjbkp2ZDNSb2FXNXlhV2RvZEFod2RXeHNaRzkzYmdWemIzVnVaQVJ6YUc5d0JITmpZVzRLZFc1a2IyWnBiR3hsWkFweVpXUnZabWxzYkdWa0RHTmhiV1Z5WVdacGJHeGxaQXBqWVhKMFptbHNiR1ZrQkdOaGNuUUlZMmhsWTJ0aWIzZ1JjMjFoYkd4amFYSmpiR1ZtYVd4c1pXUU9aWGxsYzJ4aGMyaG1hV3hzWldRSVpYbGxjMnhoYzJnRFpYbGxDbVpzWVdkbWFXeHNaV1FWYUdGdVpIUm9kVzFpYzJSdmQyNWZabWxzYkdWa0RtaGhibVIwYUhWdFluTmtiM2R1RW1oaGJtUjBhSFZ0WW5OMWNHWnBiR3hsWkF0b1pXRnlkR1pwYkd4bFpBeG9ZVzVrZEdoMWJXSnpkWEFPWW14aFkydG9aV0Z5ZEhOMWFYUUtZMmhoZEdacGJHeGxaQTV0WVdsc2IzQmxibVpwYkd4bFpBaHRZV2xzYjNCbGJneHNiMk5yWldSbWFXeHNaV1FKYldGd1ptbHNiR1ZrQm0xaGNIQnBiZzF0WVhCd2FXNWxiR3hwY0hObEMzTnRZV3hzWTJseVkyeGxFSEJoY0dWeWNHeGhibVZtYVd4c1pXUUxhVzFoWjJWbWFXeHNaV1FNYVcxaFoyVnpabWxzYkdWa0JtbHRZV2RsY3c1dVlYWnBaMkYwWldacGJHeGxaQTV0YVdOemJHRnphR1pwYkd4bFpBdHpiM1Z1WkdacGJHeGxaQTVrYjNkdWJHOWhaR1pwYkd4bFpBNTJhV1JsYjJOaGJXWnBiR3hsWkF4MWNHeHZZV1JtYVd4c1pXUUthR1ZoWkhCb2IyNWxjd3QwY21GemFHWnBiR3hsWkExamJHOTFaR1J2ZDI1c2IyRmtFV05zYjNWa2RYQnNiMkZrWm1sc2JHVmtDMk5zYjNWa2RYQnNiMkZrRTJOc2IzVmtaRzkzYm14dllXUm1hV3hzWldRSGRXNXBNREF3T1FBQUFBQUIvLzhBQWdBQkFBQUFEQUFBQUJZQUFBQUNBQUVBQVFDRkFBRUFCQUFBQUFJQUFBQUFBQUFBQVFBQUFBRFZwQ2NJQUFBQUFOb3hFM01BQUFBQTJqU3BVQT09JykgZm9ybWF0KCd0cnVldHlwZScpO1xuXHR9XG5cblx0LyogI2VuZGlmICovXG5cblx0LnVuaS1pY29ucyB7XG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!********************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/icons.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  'contact': \"\\uE100\",\n  'person': \"\\uE101\",\n  'personadd': \"\\uE102\",\n  'contact-filled': \"\\uE130\",\n  'person-filled': \"\\uE131\",\n  'personadd-filled': \"\\uE132\",\n  'phone': \"\\uE200\",\n  'email': \"\\uE201\",\n  'chatbubble': \"\\uE202\",\n  'chatboxes': \"\\uE203\",\n  'phone-filled': \"\\uE230\",\n  'email-filled': \"\\uE231\",\n  'chatbubble-filled': \"\\uE232\",\n  'chatboxes-filled': \"\\uE233\",\n  'weibo': \"\\uE260\",\n  'weixin': \"\\uE261\",\n  'pengyouquan': \"\\uE262\",\n  'chat': \"\\uE263\",\n  'qq': \"\\uE264\",\n  'videocam': \"\\uE300\",\n  'camera': \"\\uE301\",\n  'mic': \"\\uE302\",\n  'location': \"\\uE303\",\n  'mic-filled': \"\\uE332\",\n  'speech': \"\\uE332\",\n  'location-filled': \"\\uE333\",\n  'micoff': \"\\uE360\",\n  'image': \"\\uE363\",\n  'map': \"\\uE364\",\n  'compose': \"\\uE400\",\n  'trash': \"\\uE401\",\n  'upload': \"\\uE402\",\n  'download': \"\\uE403\",\n  'close': \"\\uE404\",\n  'redo': \"\\uE405\",\n  'undo': \"\\uE406\",\n  'refresh': \"\\uE407\",\n  'star': \"\\uE408\",\n  'plus': \"\\uE409\",\n  'minus': \"\\uE410\",\n  'circle': \"\\uE411\",\n  'checkbox': \"\\uE411\",\n  'close-filled': \"\\uE434\",\n  'clear': \"\\uE434\",\n  'refresh-filled': \"\\uE437\",\n  'star-filled': \"\\uE438\",\n  'plus-filled': \"\\uE439\",\n  'minus-filled': \"\\uE440\",\n  'circle-filled': \"\\uE441\",\n  'checkbox-filled': \"\\uE442\",\n  'closeempty': \"\\uE460\",\n  'refreshempty': \"\\uE461\",\n  'reload': \"\\uE462\",\n  'starhalf': \"\\uE463\",\n  'spinner': \"\\uE464\",\n  'spinner-cycle': \"\\uE465\",\n  'search': \"\\uE466\",\n  'plusempty': \"\\uE468\",\n  'forward': \"\\uE470\",\n  'back': \"\\uE471\",\n  'left-nav': \"\\uE471\",\n  'checkmarkempty': \"\\uE472\",\n  'home': \"\\uE500\",\n  'navigate': \"\\uE501\",\n  'gear': \"\\uE502\",\n  'paperplane': \"\\uE503\",\n  'info': \"\\uE504\",\n  'help': \"\\uE505\",\n  'locked': \"\\uE506\",\n  'more': \"\\uE507\",\n  'flag': \"\\uE508\",\n  'home-filled': \"\\uE530\",\n  'gear-filled': \"\\uE532\",\n  'info-filled': \"\\uE534\",\n  'help-filled': \"\\uE535\",\n  'more-filled': \"\\uE537\",\n  'settings': \"\\uE560\",\n  'list': \"\\uE562\",\n  'bars': \"\\uE563\",\n  'loop': \"\\uE565\",\n  'paperclip': \"\\uE567\",\n  'eye': \"\\uE568\",\n  'arrowup': \"\\uE580\",\n  'arrowdown': \"\\uE581\",\n  'arrowleft': \"\\uE582\",\n  'arrowright': \"\\uE583\",\n  'arrowthinup': \"\\uE584\",\n  'arrowthindown': \"\\uE585\",\n  'arrowthinleft': \"\\uE586\",\n  'arrowthinright': \"\\uE587\",\n  'pulldown': \"\\uE588\",\n  'closefill': \"\\uE589\",\n  'sound': \"\\uE590\",\n  'scan': \"\\uE612\" };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktaWNvbnMvaWNvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNHQUFlO0FBQ2QsYUFBVyxRQURHO0FBRWQsWUFBVSxRQUZJO0FBR2QsZUFBYSxRQUhDO0FBSWQsb0JBQWtCLFFBSko7QUFLZCxtQkFBaUIsUUFMSDtBQU1kLHNCQUFvQixRQU5OO0FBT2QsV0FBUyxRQVBLO0FBUWQsV0FBUyxRQVJLO0FBU2QsZ0JBQWMsUUFUQTtBQVVkLGVBQWEsUUFWQztBQVdkLGtCQUFnQixRQVhGO0FBWWQsa0JBQWdCLFFBWkY7QUFhZCx1QkFBcUIsUUFiUDtBQWNkLHNCQUFvQixRQWROO0FBZWQsV0FBUyxRQWZLO0FBZ0JkLFlBQVUsUUFoQkk7QUFpQmQsaUJBQWUsUUFqQkQ7QUFrQmQsVUFBUSxRQWxCTTtBQW1CZCxRQUFNLFFBbkJRO0FBb0JkLGNBQVksUUFwQkU7QUFxQmQsWUFBVSxRQXJCSTtBQXNCZCxTQUFPLFFBdEJPO0FBdUJkLGNBQVksUUF2QkU7QUF3QmQsZ0JBQWMsUUF4QkE7QUF5QmQsWUFBVSxRQXpCSTtBQTBCZCxxQkFBbUIsUUExQkw7QUEyQmQsWUFBVSxRQTNCSTtBQTRCZCxXQUFTLFFBNUJLO0FBNkJkLFNBQU8sUUE3Qk87QUE4QmQsYUFBVyxRQTlCRztBQStCZCxXQUFTLFFBL0JLO0FBZ0NkLFlBQVUsUUFoQ0k7QUFpQ2QsY0FBWSxRQWpDRTtBQWtDZCxXQUFTLFFBbENLO0FBbUNkLFVBQVEsUUFuQ007QUFvQ2QsVUFBUSxRQXBDTTtBQXFDZCxhQUFXLFFBckNHO0FBc0NkLFVBQVEsUUF0Q007QUF1Q2QsVUFBUSxRQXZDTTtBQXdDZCxXQUFTLFFBeENLO0FBeUNkLFlBQVUsUUF6Q0k7QUEwQ2QsY0FBWSxRQTFDRTtBQTJDZCxrQkFBZ0IsUUEzQ0Y7QUE0Q2QsV0FBUyxRQTVDSztBQTZDZCxvQkFBa0IsUUE3Q0o7QUE4Q2QsaUJBQWUsUUE5Q0Q7QUErQ2QsaUJBQWUsUUEvQ0Q7QUFnRGQsa0JBQWdCLFFBaERGO0FBaURkLG1CQUFpQixRQWpESDtBQWtEZCxxQkFBbUIsUUFsREw7QUFtRGQsZ0JBQWMsUUFuREE7QUFvRGQsa0JBQWdCLFFBcERGO0FBcURkLFlBQVUsUUFyREk7QUFzRGQsY0FBWSxRQXRERTtBQXVEZCxhQUFXLFFBdkRHO0FBd0RkLG1CQUFpQixRQXhESDtBQXlEZCxZQUFVLFFBekRJO0FBMERkLGVBQWEsUUExREM7QUEyRGQsYUFBVyxRQTNERztBQTREZCxVQUFRLFFBNURNO0FBNkRkLGNBQVksUUE3REU7QUE4RGQsb0JBQWtCLFFBOURKO0FBK0RkLFVBQVEsUUEvRE07QUFnRWQsY0FBWSxRQWhFRTtBQWlFZCxVQUFRLFFBakVNO0FBa0VkLGdCQUFjLFFBbEVBO0FBbUVkLFVBQVEsUUFuRU07QUFvRWQsVUFBUSxRQXBFTTtBQXFFZCxZQUFVLFFBckVJO0FBc0VkLFVBQVEsUUF0RU07QUF1RWQsVUFBUSxRQXZFTTtBQXdFZCxpQkFBZSxRQXhFRDtBQXlFZCxpQkFBZSxRQXpFRDtBQTBFZCxpQkFBZSxRQTFFRDtBQTJFZCxpQkFBZSxRQTNFRDtBQTRFZCxpQkFBZSxRQTVFRDtBQTZFZCxjQUFZLFFBN0VFO0FBOEVkLFVBQVEsUUE5RU07QUErRWQsVUFBUSxRQS9FTTtBQWdGZCxVQUFRLFFBaEZNO0FBaUZkLGVBQWEsUUFqRkM7QUFrRmQsU0FBTyxRQWxGTztBQW1GZCxhQUFXLFFBbkZHO0FBb0ZkLGVBQWEsUUFwRkM7QUFxRmQsZUFBYSxRQXJGQztBQXNGZCxnQkFBYyxRQXRGQTtBQXVGZCxpQkFBZSxRQXZGRDtBQXdGZCxtQkFBaUIsUUF4Rkg7QUF5RmQsbUJBQWlCLFFBekZIO0FBMEZkLG9CQUFrQixRQTFGSjtBQTJGZCxjQUFZLFFBM0ZFO0FBNEZkLGVBQWEsUUE1RkM7QUE2RmQsV0FBUyxRQTdGSztBQThGZCxVQUFRLFFBOUZNLEUiLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cdCdjb250YWN0JzogJ1xcdWUxMDAnLFxuXHQncGVyc29uJzogJ1xcdWUxMDEnLFxuXHQncGVyc29uYWRkJzogJ1xcdWUxMDInLFxuXHQnY29udGFjdC1maWxsZWQnOiAnXFx1ZTEzMCcsXG5cdCdwZXJzb24tZmlsbGVkJzogJ1xcdWUxMzEnLFxuXHQncGVyc29uYWRkLWZpbGxlZCc6ICdcXHVlMTMyJyxcblx0J3Bob25lJzogJ1xcdWUyMDAnLFxuXHQnZW1haWwnOiAnXFx1ZTIwMScsXG5cdCdjaGF0YnViYmxlJzogJ1xcdWUyMDInLFxuXHQnY2hhdGJveGVzJzogJ1xcdWUyMDMnLFxuXHQncGhvbmUtZmlsbGVkJzogJ1xcdWUyMzAnLFxuXHQnZW1haWwtZmlsbGVkJzogJ1xcdWUyMzEnLFxuXHQnY2hhdGJ1YmJsZS1maWxsZWQnOiAnXFx1ZTIzMicsXG5cdCdjaGF0Ym94ZXMtZmlsbGVkJzogJ1xcdWUyMzMnLFxuXHQnd2VpYm8nOiAnXFx1ZTI2MCcsXG5cdCd3ZWl4aW4nOiAnXFx1ZTI2MScsXG5cdCdwZW5neW91cXVhbic6ICdcXHVlMjYyJyxcblx0J2NoYXQnOiAnXFx1ZTI2MycsXG5cdCdxcSc6ICdcXHVlMjY0Jyxcblx0J3ZpZGVvY2FtJzogJ1xcdWUzMDAnLFxuXHQnY2FtZXJhJzogJ1xcdWUzMDEnLFxuXHQnbWljJzogJ1xcdWUzMDInLFxuXHQnbG9jYXRpb24nOiAnXFx1ZTMwMycsXG5cdCdtaWMtZmlsbGVkJzogJ1xcdWUzMzInLFxuXHQnc3BlZWNoJzogJ1xcdWUzMzInLFxuXHQnbG9jYXRpb24tZmlsbGVkJzogJ1xcdWUzMzMnLFxuXHQnbWljb2ZmJzogJ1xcdWUzNjAnLFxuXHQnaW1hZ2UnOiAnXFx1ZTM2MycsXG5cdCdtYXAnOiAnXFx1ZTM2NCcsXG5cdCdjb21wb3NlJzogJ1xcdWU0MDAnLFxuXHQndHJhc2gnOiAnXFx1ZTQwMScsXG5cdCd1cGxvYWQnOiAnXFx1ZTQwMicsXG5cdCdkb3dubG9hZCc6ICdcXHVlNDAzJyxcblx0J2Nsb3NlJzogJ1xcdWU0MDQnLFxuXHQncmVkbyc6ICdcXHVlNDA1Jyxcblx0J3VuZG8nOiAnXFx1ZTQwNicsXG5cdCdyZWZyZXNoJzogJ1xcdWU0MDcnLFxuXHQnc3Rhcic6ICdcXHVlNDA4Jyxcblx0J3BsdXMnOiAnXFx1ZTQwOScsXG5cdCdtaW51cyc6ICdcXHVlNDEwJyxcblx0J2NpcmNsZSc6ICdcXHVlNDExJyxcblx0J2NoZWNrYm94JzogJ1xcdWU0MTEnLFxuXHQnY2xvc2UtZmlsbGVkJzogJ1xcdWU0MzQnLFxuXHQnY2xlYXInOiAnXFx1ZTQzNCcsXG5cdCdyZWZyZXNoLWZpbGxlZCc6ICdcXHVlNDM3Jyxcblx0J3N0YXItZmlsbGVkJzogJ1xcdWU0MzgnLFxuXHQncGx1cy1maWxsZWQnOiAnXFx1ZTQzOScsXG5cdCdtaW51cy1maWxsZWQnOiAnXFx1ZTQ0MCcsXG5cdCdjaXJjbGUtZmlsbGVkJzogJ1xcdWU0NDEnLFxuXHQnY2hlY2tib3gtZmlsbGVkJzogJ1xcdWU0NDInLFxuXHQnY2xvc2VlbXB0eSc6ICdcXHVlNDYwJyxcblx0J3JlZnJlc2hlbXB0eSc6ICdcXHVlNDYxJyxcblx0J3JlbG9hZCc6ICdcXHVlNDYyJyxcblx0J3N0YXJoYWxmJzogJ1xcdWU0NjMnLFxuXHQnc3Bpbm5lcic6ICdcXHVlNDY0Jyxcblx0J3NwaW5uZXItY3ljbGUnOiAnXFx1ZTQ2NScsXG5cdCdzZWFyY2gnOiAnXFx1ZTQ2NicsXG5cdCdwbHVzZW1wdHknOiAnXFx1ZTQ2OCcsXG5cdCdmb3J3YXJkJzogJ1xcdWU0NzAnLFxuXHQnYmFjayc6ICdcXHVlNDcxJyxcblx0J2xlZnQtbmF2JzogJ1xcdWU0NzEnLFxuXHQnY2hlY2ttYXJrZW1wdHknOiAnXFx1ZTQ3MicsXG5cdCdob21lJzogJ1xcdWU1MDAnLFxuXHQnbmF2aWdhdGUnOiAnXFx1ZTUwMScsXG5cdCdnZWFyJzogJ1xcdWU1MDInLFxuXHQncGFwZXJwbGFuZSc6ICdcXHVlNTAzJyxcblx0J2luZm8nOiAnXFx1ZTUwNCcsXG5cdCdoZWxwJzogJ1xcdWU1MDUnLFxuXHQnbG9ja2VkJzogJ1xcdWU1MDYnLFxuXHQnbW9yZSc6ICdcXHVlNTA3Jyxcblx0J2ZsYWcnOiAnXFx1ZTUwOCcsXG5cdCdob21lLWZpbGxlZCc6ICdcXHVlNTMwJyxcblx0J2dlYXItZmlsbGVkJzogJ1xcdWU1MzInLFxuXHQnaW5mby1maWxsZWQnOiAnXFx1ZTUzNCcsXG5cdCdoZWxwLWZpbGxlZCc6ICdcXHVlNTM1Jyxcblx0J21vcmUtZmlsbGVkJzogJ1xcdWU1MzcnLFxuXHQnc2V0dGluZ3MnOiAnXFx1ZTU2MCcsXG5cdCdsaXN0JzogJ1xcdWU1NjInLFxuXHQnYmFycyc6ICdcXHVlNTYzJyxcblx0J2xvb3AnOiAnXFx1ZTU2NScsXG5cdCdwYXBlcmNsaXAnOiAnXFx1ZTU2NycsXG5cdCdleWUnOiAnXFx1ZTU2OCcsXG5cdCdhcnJvd3VwJzogJ1xcdWU1ODAnLFxuXHQnYXJyb3dkb3duJzogJ1xcdWU1ODEnLFxuXHQnYXJyb3dsZWZ0JzogJ1xcdWU1ODInLFxuXHQnYXJyb3dyaWdodCc6ICdcXHVlNTgzJyxcblx0J2Fycm93dGhpbnVwJzogJ1xcdWU1ODQnLFxuXHQnYXJyb3d0aGluZG93bic6ICdcXHVlNTg1Jyxcblx0J2Fycm93dGhpbmxlZnQnOiAnXFx1ZTU4NicsXG5cdCdhcnJvd3RoaW5yaWdodCc6ICdcXHVlNTg3Jyxcblx0J3B1bGxkb3duJzogJ1xcdWU1ODgnLFxuXHQnY2xvc2VmaWxsJzogJ1xcdWU1ODknLFxuXHQnc291bmQnOiAnXFx1ZTU5MCcsXG5cdCdzY2FuJzogJ1xcdWU2MTInXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& */ 26);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-icons": {
    "fontFamily": "uniicons",
    "textDecoration": "none",
    "textAlign": "center"
  }
}

/***/ }),
/* 27 */
/*!******************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=script&lang=js& */ 28);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdpQixDQUFnQiwyakJBQUcsRUFBQyIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniStatusBar = _interopRequireDefault(__webpack_require__(/*! ../uni-status-bar/uni-status-bar.vue */ 10));\nvar _uniIcons = _interopRequireDefault(__webpack_require__(/*! ../uni-icons/uni-icons.vue */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { name: \"UniNavBar\", components: { uniStatusBar: _uniStatusBar.default, uniIcons: _uniIcons.default }, props: { title: { type: String, default: \"\" }, leftText: { type: String, default: \"\" }, rightText: { type: String, default: \"\" }, leftIcon: { type: String, default: \"\" }, rightIcon: { type: String, default: \"\" }, fixed: { type: [Boolean, String], default: false }, color: { type: String, default: \"#000000\" }, backgroundColor: { type: String, default: \"#FFFFFF\" }, statusBar: { type: [Boolean, String],\n      default: false },\n\n    shadow: {\n      type: [String, Boolean],\n      default: false },\n\n    border: {\n      type: [String, Boolean],\n      default: true } },\n\n\n  mounted: function mounted() {\n    if (uni.report && this.title !== '') {\n      uni.report('title', this.title);\n    }\n  },\n  methods: {\n    onClickLeft: function onClickLeft() {\n      this.$emit(\"clickLeft\");\n    },\n    onClickRight: function onClickRight() {\n      this.$emit(\"clickRight\");\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQTtBQUNBLGtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFQSxFQUNBLGlCQURBLEVBRUEsY0FDQSxtQ0FEQSxFQUVBLDJCQUZBLEVBRkEsRUFNQSxTQUNBLFNBQ0EsWUFEQSxFQUVBLFdBRkEsRUFEQSxFQUtBLFlBQ0EsWUFEQSxFQUVBLFdBRkEsRUFMQSxFQVNBLGFBQ0EsWUFEQSxFQUVBLFdBRkEsRUFUQSxFQWFBLFlBQ0EsWUFEQSxFQUVBLFdBRkEsRUFiQSxFQWlCQSxhQUNBLFlBREEsRUFFQSxXQUZBLEVBakJBLEVBcUJBLFNBQ0EsdUJBREEsRUFFQSxjQUZBLEVBckJBLEVBeUJBLFNBQ0EsWUFEQSxFQUVBLGtCQUZBLEVBekJBLEVBNkJBLG1CQUNBLFlBREEsRUFFQSxrQkFGQSxFQTdCQSxFQWlDQSxhQUNBLHVCQURBO0FBRUEsb0JBRkEsRUFqQ0E7O0FBcUNBO0FBQ0EsNkJBREE7QUFFQSxvQkFGQSxFQXJDQTs7QUF5Q0E7QUFDQSw2QkFEQTtBQUVBLG1CQUZBLEVBekNBLEVBTkE7OztBQW9EQSxTQXBEQSxxQkFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXhEQTtBQXlEQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxnQkFKQSwwQkFJQTtBQUNBO0FBQ0EsS0FOQSxFQXpEQSxFIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJcIj5cblx0XHQ8dmlldyA6Y2xhc3M9XCJ7ICd1bmktbmF2YmFyLS1maXhlZCc6IGZpeGVkLCAndW5pLW5hdmJhci0tc2hhZG93Jzogc2hhZG93LCAndW5pLW5hdmJhci0tYm9yZGVyJzogYm9yZGVyIH1cIiA6c3R5bGU9XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYmFja2dyb3VuZENvbG9yIH1cIlxuXHRcdCBjbGFzcz1cInVuaS1uYXZiYXJfX2NvbnRlbnRcIj5cblx0XHRcdDx1bmktc3RhdHVzLWJhciB2LWlmPVwic3RhdHVzQmFyXCIgLz5cblx0XHRcdDx2aWV3IDpzdHlsZT1cInsgY29sb3I6IGNvbG9yLGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH1cIiBjbGFzcz1cInVuaS1uYXZiYXJfX2hlYWRlciB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIj5cblx0XHRcdFx0PHZpZXcgQHRhcD1cIm9uQ2xpY2tMZWZ0XCIgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXItYnRucyB1bmktbmF2YmFyX19oZWFkZXItYnRucy1sZWZ0IHVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hdmJhcl9fY29udGVudF92aWV3XCIgdi1pZj1cImxlZnRJY29uLmxlbmd0aFwiPlxuXHRcdFx0XHRcdFx0PHVuaS1pY29ucyA6Y29sb3I9XCJjb2xvclwiIDp0eXBlPVwibGVmdEljb25cIiBzaXplPVwiMjRcIiAvPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7ICd1bmktbmF2YmFyLWJ0bi1pY29uLWxlZnQnOiAhbGVmdEljb24ubGVuZ3RoIH1cIiBjbGFzcz1cInVuaS1uYXZiYXItYnRuLXRleHQgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCJcblx0XHRcdFx0XHQgdi1pZj1cImxlZnRUZXh0Lmxlbmd0aFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgOnN0eWxlPVwieyBjb2xvcjogY29sb3IsIGZvbnRTaXplOiAnMTRweCcgfVwiPnt7IGxlZnRUZXh0IH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8c2xvdCBuYW1lPVwibGVmdFwiIC8+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXItY29udGFpbmVyIHVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hdmJhcl9faGVhZGVyLWNvbnRhaW5lci1pbm5lciB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIiB2LWlmPVwidGl0bGUubGVuZ3RoXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1uYXYtYmFyLXRleHRcIiA6c3R5bGU9XCJ7Y29sb3I6IGNvbG9yIH1cIj57eyB0aXRsZSB9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PCEtLSDmoIfpopjmj5Lmp70gLS0+XG5cdFx0XHRcdFx0PHNsb3QgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ0aXRsZS5sZW5ndGggPyAndW5pLW5hdmJhcl9faGVhZGVyLWJ0bnMtcmlnaHQnIDogJydcIiBAdGFwPVwib25DbGlja1JpZ2h0XCIgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXItYnRucyB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiIHYtaWY9XCJyaWdodEljb24ubGVuZ3RoXCI+XG5cdFx0XHRcdFx0XHQ8dW5pLWljb25zIDpjb2xvcj1cImNvbG9yXCIgOnR5cGU9XCJyaWdodEljb25cIiBzaXplPVwiMjRcIiAvPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8IS0tIOS8mOWFiOaYvuekuuWbvuaghyAtLT5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXItYnRuLXRleHQgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCIgdi1pZj1cInJpZ2h0VGV4dC5sZW5ndGggJiYgIXJpZ2h0SWNvbi5sZW5ndGhcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLW5hdi1iYXItcmlnaHQtdGV4dFwiPnt7IHJpZ2h0VGV4dCB9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cInJpZ2h0XCIgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX3BsYWNlaG9sZGVyXCIgdi1pZj1cImZpeGVkXCI+XG5cdFx0XHQ8dW5pLXN0YXR1cy1iYXIgdi1pZj1cInN0YXR1c0JhclwiIC8+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX3BsYWNlaG9sZGVyLXZpZXdcIiAvPlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHVuaVN0YXR1c0JhciBmcm9tIFwiLi4vdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlXCI7XG5cdGltcG9ydCB1bmlJY29ucyBmcm9tIFwiLi4vdW5pLWljb25zL3VuaS1pY29ucy52dWVcIjtcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogXCJVbmlOYXZCYXJcIixcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHR1bmlTdGF0dXNCYXIsXG5cdFx0XHR1bmlJY29uc1xuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxuXHRcdFx0fSxcblx0XHRcdGxlZnRUZXh0OiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0VGV4dDoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRsZWZ0SWNvbjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRyaWdodEljb246IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0Zml4ZWQ6IHtcblx0XHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3I6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiBcIiMwMDAwMDBcIlxuXHRcdFx0fSxcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiI0ZGRkZGRlwiXG5cdFx0XHR9LFxuXHRcdFx0c3RhdHVzQmFyOiB7XG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNoYWRvdzoge1xuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRib3JkZXI6IHtcblx0XHRcdFx0dHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgIGlmKHVuaS5yZXBvcnQgJiYgdGhpcy50aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgdW5pLnJlcG9ydCgndGl0bGUnLCB0aGlzLnRpdGxlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRvbkNsaWNrTGVmdCgpIHtcblx0XHRcdFx0dGhpcy4kZW1pdChcImNsaWNrTGVmdFwiKTtcblx0XHRcdH0sXG5cdFx0XHRvbkNsaWNrUmlnaHQoKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJjbGlja1JpZ2h0XCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdCRuYXYtaGVpZ2h0OiA0NHB4O1xuXHQudW5pLW5hdi1iYXItdGV4dCB7XG5cdFx0LyogI2lmZGVmIEFQUC1QTFVTICovXG5cdFx0Zm9udC1zaXplOiAzNHJweDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1sZztcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXHQudW5pLW5hdi1iYXItcmlnaHQtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xuXHR9XG5cblx0LnVuaS1uYXZiYXIge1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0Ly8gcG9zaXRpb246IGZpeGVkO1xuXHRcdC8vIHRvcDowcHg7XG5cdFx0ei1pbmRleDogMTAwMDAwMDAwMDAwMDA7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9fY29udGVudCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHVuaS1iZy1jb2xvcjtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG5cblx0LnVuaS1uYXZiYXJfX2NvbnRlbnRfdmlldyB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9faGVhZGVyIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0aGVpZ2h0OiAkbmF2LWhlaWdodDtcblx0XHRsaW5lLWhlaWdodDogJG5hdi1oZWlnaHQ7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9faGVhZGVyLWJ0bnMge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdHdpZHRoOiAxMjBycHg7XG5cdFx0cGFkZGluZzogMCA2cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXG5cdC51bmktbmF2YmFyX19oZWFkZXItYnRucy1sZWZ0IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHR3aWR0aDogMTUwcnB4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuXG5cdC51bmktbmF2YmFyX19oZWFkZXItYnRucy1yaWdodCB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0d2lkdGg6IDE1MHJweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAzMHJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHR9XG5cblx0LnVuaS1uYXZiYXJfX2hlYWRlci1jb250YWluZXIge1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9faGVhZGVyLWNvbnRhaW5lci1pbm5lciB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleDogMTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogJHVuaS1mb250LXNpemUtYmFzZTtcblx0fVxuXG5cblx0LnVuaS1uYXZiYXJfX3BsYWNlaG9sZGVyLXZpZXcge1xuXHRcdGhlaWdodDogJG5hdi1oZWlnaHQ7XG5cdH1cblxuXHQudW5pLW5hdmJhci0tZml4ZWQge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcblx0XHR6LWluZGV4OiA5OTg7XG5cdH1cblxuXHQudW5pLW5hdmJhci0tc2hhZG93IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0Ym94LXNoYWRvdzogMCAxcHggNnB4ICNjY2M7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cblxuXHQudW5pLW5hdmJhci0tYm9yZGVyIHtcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcnB4O1xuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICR1bmktYm9yZGVyLWNvbG9yO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& */ 30);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-nav-bar-text": {
    "fontSize": "34rpx"
  },
  "uni-nav-bar-right-text": {
    "fontSize": "28rpx"
  },
  "uni-navbar": {
    "width": "750rpx",
    "zIndex": 10000000000000
  },
  "uni-navbar__content": {
    "position": "relative",
    "width": "750rpx",
    "backgroundColor": "#ffffff",
    "overflow": "hidden"
  },
  "uni-navbar__content_view": {
    "alignItems": "center",
    "flexDirection": "row"
  },
  "uni-navbar__header": {
    "flexDirection": "row",
    "width": "750rpx",
    "height": "44",
    "lineHeight": "44",
    "fontSize": "16"
  },
  "uni-navbar__header-btns": {
    "flexWrap": "nowrap",
    "width": "120rpx",
    "paddingTop": 0,
    "paddingRight": "6",
    "paddingBottom": 0,
    "paddingLeft": "6",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "uni-navbar__header-btns-left": {
    "width": "150rpx",
    "justifyContent": "flex-start"
  },
  "uni-navbar__header-btns-right": {
    "width": "150rpx",
    "paddingRight": "30rpx",
    "justifyContent": "flex-end"
  },
  "uni-navbar__header-container": {
    "flex": 1
  },
  "uni-navbar__header-container-inner": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": "28rpx"
  },
  "uni-navbar__placeholder-view": {
    "height": "44"
  },
  "uni-navbar--fixed": {
    "position": "fixed",
    "zIndex": 998
  },
  "uni-navbar--border": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#c8c7cc"
  }
}

/***/ }),
/* 31 */
/*!***********************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _newsItem = _interopRequireDefault(__webpack_require__(/*! ./news-item.nvue */ 33));\nvar _uniIcons = _interopRequireDefault(__webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 缓存每页最多\nvar MAX_CACHE_DATA = 100; // 缓存页签数量\nvar MAX_CACHE_PAGE = 3;var newsData = { data0: { datetime: '40分钟前', article_type: 0, title: 'uni-app行业峰会频频亮相，开发者反响热烈!', source: 'DCloud', comment_count: 639, isVideo: false }, data1: { datetime: '一天前', article_type: 1, title: 'DCloud完成B2轮融资，uni-app震撼发布!', image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90', source: 'DCloud', comment_count: 11395, isVideo: false }, data2: { datetime: '一天前', article_type: 2, title: '中国技术界小奇迹：HBuilder开发者突破200万', image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90', source: 'DCloud', comment_count: 11395, isVideo: false }, data3: { article_type: 3, image_list: [{ url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90', width: 563, height: 316 }, { url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90', width: 641, height: 360 }, { url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90', width: 640, height: 360 }], datetime: '5分钟前', title: 'uni-app 支持使用 npm 安装第三方包，生态更趋丰富', source: 'DCloud', comment_count: 11, isVideo: false }, data4: { datetime: '2小时前', article_type: 4, title: 'uni-app 支持原生小程序自定义组件，更开放、更自由', image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90',\n    source: 'DCloud',\n    comment_count: 69,\n    isVideo: true } };var _default =\n\n\n\n{\n  components: {\n    mediaItem: _newsItem.default,\n    uniIcons: _uniIcons.default },\n\n  data: function data() {\n    return {\n      newsList: [],\n      cacheTab: [],\n      tabIndex: 0,\n      lastIndex: 0, //上一次的坐标\n      tabBars: [\n      {\n        name: '关注',\n        id: 'guanzhu' },\n\n      {\n        name: '推荐',\n        id: 'tuijian' },\n\n      {\n        name: '体育',\n        id: 'tiyu' }],\n\n\n      scrollInto: '',\n      showTips: false,\n      navigateFlag: false,\n      pulling: false,\n      refreshIcon:\n      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==' };\n\n  },\n  onLoad: function onLoad() {var _this = this;\n    setTimeout(function () {\n      _this.tabBars.forEach(function (tabBar) {\n        _this.newsList.push({\n          data: [],\n          isLoading: false,\n          refreshText: '',\n          loadingText: '加载更多...' });\n\n      });\n      _this.getList(0);\n    }, 350);\n  },\n  methods: {\n    isScroll: function isScroll(index) {\n      return this.tabIndex == index;\n    },\n    //新闻详情\n    goDetail: function goDetail(item, index) {\n      var data = {\n        id: index,\n        title: item.title,\n        author: '详情',\n        time: item.datetime };\n\n      //\tlet url = item.isVideo == true ? 'videoDetails' : 'details';\n      uni.navigateTo({\n        url: \"/pages/new/details?data=\".concat(JSON.stringify(data)) });\n\n    },\n    getList: function getList(index) {\n      var activeTab = this.newsList[index];\n      var list = [];\n      for (var i = 1; i <= 10; i++) {\n        var item = Object.assign({}, newsData['data' + Math.floor(Math.random() * 5)]);\n        item.id = this.newGuid();\n        list.push(item);\n      }\n      activeTab.data = activeTab.data.concat(list);\n    },\n    close: function close(index1, index2) {var _this2 = this;\n      uni.showModal({\n        content: '是否删除本条信息？',\n        success: function success(res) {\n          if (res.confirm) {\n            _this2.newsList[index1].data.splice(index2, 1);\n          }\n        } });\n\n    },\n    loadMore: function loadMore(e) {var _this3 = this;\n      setTimeout(function () {\n        _this3.getList(_this3.tabIndex);\n      }, 500);\n    },\n    ontabtap: function ontabtap(e) {\n      var index = e.target.dataset.current || e.currentTarget.dataset.current;\n      this.isLeft = this.switchTab(index);\n    },\n    ontabchange: function ontabchange(e) {\n      var index = e.target.current || e.detail.current;\n      this.switchTab(index);\n    },\n    switchTab: function switchTab(index) {\n      if (this.newsList[index].data.length === 0) {\n        this.getList(index);\n      }\n\n      if (this.tabIndex === index) {\n        return;\n      }\n\n      // 缓存 tabId\n      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {\n        var isExist = this.cacheTab.indexOf(this.tabIndex);\n        if (isExist < 0) {\n          this.cacheTab.push(this.tabIndex);\n          //console.log(\"cache index:: \" + this.tabIndex);\n        }\n      }\n\n      this.tabIndex = index;\n      __f__(\"log\", this.tabIndex, \" at pages/new/index.nvue:247\");\n      __f__(\"log\", this.lastIndex, \" at pages/new/index.nvue:248\");\n\n      if (this.tabIndex < 5 && this.lastIndex < this.tabIndex) {\n        this.lastIndex = this.tabIndex;\n        return;\n      } else if (index >= 5) {\n        this.scrollInto = this.tabBars[index - 5].id;\n      }\n      // this.scrollInto = this.tabBars[index].id;\n      this.lastIndex = this.tabIndex;\n      // 释放 tabId\n      if (this.cacheTab.length > MAX_CACHE_PAGE) {\n        var cacheIndex = this.cacheTab[0];\n        this.clearTabData(cacheIndex);\n        this.cacheTab.splice(0, 1);\n        //console.log(\"remove cache index:: \" + cacheIndex);\n      }\n    },\n    clearTabData: function clearTabData(e) {\n      this.newsList[e].data.length = 0;\n      this.newsList[e].loadingText = '加载更多...';\n    },\n    refreshData: function refreshData() {},\n    onrefresh: function onrefresh(e) {var _this4 = this;\n      var tab = this.newsList[this.tabIndex];\n      if (!tab.refreshFlag) {\n        return;\n      }\n      tab.refreshing = true;\n      tab.refreshText = '正在刷新...';\n\n      setTimeout(function () {\n        _this4.refreshData();\n        _this4.pulling = true;\n        tab.refreshing = false;\n        tab.refreshFlag = false;\n        tab.refreshText = '已刷新';\n        setTimeout(function () {\n          // TODO fix ios和Android 动画时间相反问题\n          _this4.pulling = false;\n        }, 500);\n      }, 2000);\n    },\n    onpullingdown: function onpullingdown(e) {\n      var tab = this.newsList[this.tabIndex];\n      if (tab.refreshing || this.pulling) {\n        return;\n      }\n      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {\n        tab.refreshFlag = true;\n        tab.refreshText = '释放立即刷新';\n      } else {\n        tab.refreshFlag = false;\n        tab.refreshText = '下拉可以刷新';\n      }\n    },\n    newGuid: function newGuid() {\n      var s4 = function s4() {\n        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);\n      };\n      return (s4() + s4() + '-' + s4() + '-4' + s4().substr(0, 3) + '-' + s4() + '-' + s4() + s4() + s4()).toUpperCase();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 15)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbmV3L2luZGV4Lm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQTtBQUNBLDRHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLHlCLENBQ0E7QUFDQSx1QkFFQSxpQkFDQSxTQUNBLGlCQURBLEVBRUEsZUFGQSxFQUdBLGlDQUhBLEVBSUEsZ0JBSkEsRUFLQSxrQkFMQSxFQU1BLGNBTkEsRUFEQSxFQVNBLFNBQ0EsZUFEQSxFQUVBLGVBRkEsRUFHQSxtQ0FIQSxFQUlBLHlHQUpBLEVBS0EsZ0JBTEEsRUFNQSxvQkFOQSxFQU9BLGNBUEEsRUFUQSxFQWtCQSxTQUNBLGVBREEsRUFFQSxlQUZBLEVBR0EsbUNBSEEsRUFJQSxxR0FKQSxFQUtBLGdCQUxBLEVBTUEsb0JBTkEsRUFPQSxjQVBBLEVBbEJBLEVBMkJBLFNBQ0EsZUFEQSxFQUVBLGFBQ0EsRUFDQSw4RkFEQSxFQUVBLFVBRkEsRUFHQSxXQUhBLEVBREEsRUFNQSxFQUNBLCtGQURBLEVBRUEsVUFGQSxFQUdBLFdBSEEsRUFOQSxFQVdBLEVBQ0EsbUdBREEsRUFFQSxVQUZBLEVBR0EsV0FIQSxFQVhBLENBRkEsRUFtQkEsZ0JBbkJBLEVBb0JBLHVDQXBCQSxFQXFCQSxnQkFyQkEsRUFzQkEsaUJBdEJBLEVBdUJBLGNBdkJBLEVBM0JBLEVBb0RBLFNBQ0EsZ0JBREEsRUFFQSxlQUZBLEVBR0EscUNBSEEsRUFJQSxvR0FKQTtBQUtBLG9CQUxBO0FBTUEscUJBTkE7QUFPQSxpQkFQQSxFQXBEQSxHOzs7O0FBK0RBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLCtCQUZBLEVBREE7O0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQTtBQUdBLGlCQUhBO0FBSUEsa0JBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBTEE7O0FBU0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBVEEsQ0FMQTs7O0FBbUJBLG9CQW5CQTtBQW9CQSxxQkFwQkE7QUFxQkEseUJBckJBO0FBc0JBLG9CQXRCQTtBQXVCQTtBQUNBLDBZQXhCQTs7QUEwQkEsR0FoQ0E7QUFpQ0EsUUFqQ0Esb0JBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSwwQkFGQTtBQUdBLHlCQUhBO0FBSUEsZ0NBSkE7O0FBTUEsT0FQQTtBQVFBO0FBQ0EsS0FWQSxFQVVBLEdBVkE7QUFXQSxHQTdDQTtBQThDQTtBQUNBLFlBREEsb0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQSxZQUxBLG9CQUtBLElBTEEsRUFLQSxLQUxBLEVBS0E7QUFDQTtBQUNBLGlCQURBO0FBRUEseUJBRkE7QUFHQSxvQkFIQTtBQUlBLDJCQUpBOztBQU1BO0FBQ0E7QUFDQSxvRUFEQTs7QUFHQSxLQWhCQTtBQWlCQSxXQWpCQSxtQkFpQkEsS0FqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkEsU0EzQkEsaUJBMkJBLE1BM0JBLEVBMkJBLE1BM0JBLEVBMkJBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTs7QUFRQSxLQXBDQTtBQXFDQSxZQXJDQSxvQkFxQ0EsQ0FyQ0EsRUFxQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQXpDQTtBQTBDQSxZQTFDQSxvQkEwQ0EsQ0ExQ0EsRUEwQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3Q0E7QUE4Q0EsZUE5Q0EsdUJBOENBLENBOUNBLEVBOENBO0FBQ0E7QUFDQTtBQUNBLEtBakRBO0FBa0RBLGFBbERBLHFCQWtEQSxLQWxEQSxFQWtEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdkZBO0FBd0ZBLGdCQXhGQSx3QkF3RkEsQ0F4RkEsRUF3RkE7QUFDQTtBQUNBO0FBQ0EsS0EzRkE7QUE0RkEsZUE1RkEseUJBNEZBLEVBNUZBO0FBNkZBLGFBN0ZBLHFCQTZGQSxDQTdGQSxFQTZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsR0FIQTtBQUlBLE9BVkEsRUFVQSxJQVZBO0FBV0EsS0FoSEE7QUFpSEEsaUJBakhBLHlCQWlIQSxDQWpIQSxFQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3SEE7QUE4SEEsV0E5SEEscUJBOEhBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBLEtBbklBLEVBOUNBLEUiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDx1bmktbmF2LWJhciBzdGF0dXMtYmFyPSdmYWxzZScgQGNsaWNrTGVmdD1cImJhY2soJy9wYWdlcy9pbmRleC9pbmRleCcpXCIgbGVmdC1pY29uPVwiYmFja1wiIGxlZnQtdGV4dD1cIui/lOWbnlwiIHRpdGxlPVwi5paw6Ze7XCI+XG5cdFx0XHQ8dmlldyBzbG90PVwicmlnaHRcIiBjbGFzcz0naW5mbyc+XG5cdFx0XHRcdFx0XHQgICA8bmF2aWdhdG9yIHVybD1cIi9wYWdlcy91bmktZmVlZGJhY2svdW5pLWZlZWRiYWNrXCIgb3Blbi10eXBlPVwibmF2aWdhdGVcIj5cblx0XHRcdFx0XHQgIDx1bmktaWNvbnMgIHR5cGU9XCJtb3JlXCIgc2l6ZT1cIjI0XCIgLz5cblx0XHRcdFx0XHRcdCAgIDwvbmF2aWdhdG9yPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdW5pLW5hdi1iYXI+XG5cdFx0XHRcblxuXHQ8dmlldyBjbGFzcz1cInRhYnNcIj5cblxuXHRcdDxzY3JvbGwtdmlldyBpZD1cInRhYi1iYXJcIiBjbGFzcz1cInNjcm9sbC1oXCIgOnNjcm9sbC14PVwidHJ1ZVwiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgOnNjcm9sbC1pbnRvLXZpZXc9XCJzY3JvbGxJbnRvXCI+XG5cdFx0XHQ8dmlldyB2LWZvcj1cIih0YWIsIGluZGV4KSBpbiB0YWJCYXJzXCIgOmtleT1cInRhYi5pZFwiIGNsYXNzPVwidW5pLXRhYi1pdGVtXCIgOmlkPVwidGFiLmlkXCIgOmRhdGEtY3VycmVudD1cImluZGV4XCIgQGNsaWNrPVwib250YWJ0YXBcIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktdGFiLWl0ZW0tdGl0bGVcIiA6Y2xhc3M9XCJpc1Njcm9sbChpbmRleCkgPyAndW5pLXRhYi1pdGVtLXRpdGxlLWFjdGl2ZScgOiAnJ1wiPnt7IHRhYi5uYW1lIH19PC90ZXh0PlxuXHRcdFx0XHQ8IS0tIOS4i+WIkue6vyAtLT5cblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgOmNsYXNzPVwiaXNTY3JvbGwoaW5kZXgpID8gJ3VuZGVybGluZWJveCcgOiAndW5kZXJsaW5lYm94LWFjdGl2ZSdcIj48dmlldyBjbGFzcz1cInVuZGVybGluZVwiPjwvdmlldz48L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC9zY3JvbGwtdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImxpbmUtaFwiPjwvdmlldz5cblx0XHQ8c3dpcGVyIDpjdXJyZW50PVwidGFiSW5kZXhcIiBjbGFzcz1cInN3aXBlci1ib3hcIiBzdHlsZT1cImZsZXg6IDE7XCIgOmR1cmF0aW9uPVwiMzAwXCIgQGNoYW5nZT1cIm9udGFiY2hhbmdlXCI+XG5cdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJzd2lwZXItaXRlbVwiIHYtZm9yPVwiKHRhYiwgaW5kZXgxKSBpbiBuZXdzTGlzdFwiIDprZXk9XCJpbmRleDFcIj5cblx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XG5cdFx0XHRcdDxsaXN0IGNsYXNzPVwic2Nyb2xsLXYgbGlzdFwiIGVuYWJsZUJhY2tUb1RvcD1cInRydWVcIiBzY3JvbGwteSBsb2FkbW9yZW9mZnNldD1cIjE1XCIgQGxvYWRtb3JlPVwibG9hZE1vcmUoaW5kZXgxKVwiPlxuXHRcdFx0XHRcdDxyZWZyZXNoIGNsYXNzPVwicmVmcmVzaFwiIEByZWZyZXNoPVwib25yZWZyZXNoKGluZGV4MSlcIiBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCIgOmRpc3BsYXk9XCJ0YWIucmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJlZnJlc2gtdmlld1wiPlxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInJlZnJlc2gtaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0OnNyYz1cInJlZnJlc2hJY29uXCJcblx0XHRcdFx0XHRcdFx0XHQ6c3R5bGU9XCJ7IHdpZHRoOiB0YWIucmVmcmVzaGluZyB8fCBwdWxsaW5nID8gMCA6ICczMHB4JyB9XCJcblx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJ7ICdyZWZyZXNoLWljb24tYWN0aXZlJzogdGFiLnJlZnJlc2hGbGFnIH1cIlxuXHRcdFx0XHRcdFx0XHQ+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0PGxvYWRpbmctaW5kaWNhdG9yIGNsYXNzPVwibG9hZGluZy1pY29uXCIgYW5pbWF0aW5nPVwidHJ1ZVwiIHYtaWY9XCJ0YWIucmVmcmVzaGluZ1wiPjwvbG9hZGluZy1pbmRpY2F0b3I+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9hZGluZy10ZXh0XCI+e3sgdGFiLnJlZnJlc2hUZXh0IH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9yZWZyZXNoPlxuXHRcdFx0XHRcdDxjZWxsIHYtZm9yPVwiKG5ld3NpdGVtLCBpbmRleDIpIGluIHRhYi5kYXRhXCIgOmtleT1cIm5ld3NpdGVtLmlkXCI+XG5cdFx0XHRcdFx0XHQ8bWVkaWEtaXRlbSA6b3B0aW9ucz1cIm5ld3NpdGVtXCIgQGNsb3NlPVwiY2xvc2UoaW5kZXgxLCBpbmRleDIpXCIgQGNsaWNrPVwiZ29EZXRhaWwobmV3c2l0ZW0sIGluZGV4MilcIj48L21lZGlhLWl0ZW0+XG5cdFx0XHRcdFx0PC9jZWxsPlxuXHRcdFx0XHRcdDxjZWxsIGNsYXNzPVwibG9hZGluZy1tb3JlXCIgdi1pZj1cInRhYi5pc0xvYWRpbmcgfHwgdGFiLmRhdGEubGVuZ3RoID4gNFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2FkaW5nLW1vcmUtdGV4dFwiPnt7IHRhYi5sb2FkaW5nVGV4dCB9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHRcdDwvbGlzdD5cblx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtTlZVRSAtLT5cblx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwic2Nyb2xsLXYgbGlzdFwiIGVuYWJsZUJhY2tUb1RvcD1cInRydWVcIiBzY3JvbGwteSBAc2Nyb2xsdG9sb3dlcj1cImxvYWRNb3JlKGluZGV4MSlcIj5cblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihuZXdzaXRlbSwgaW5kZXgyKSBpbiB0YWIuZGF0YVwiIDprZXk9XCJuZXdzaXRlbS5pZFwiPlxuXHRcdFx0XHRcdFx0PG1lZGlhLWl0ZW0gOm9wdGlvbnM9XCJuZXdzaXRlbVwiIEBjbG9zZT1cImNsb3NlKGluZGV4MSwgaW5kZXgyKVwiIEBjbGljaz1cImdvRGV0YWlsKG5ld3NpdGVtKVwiPjwvbWVkaWEtaXRlbT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nLW1vcmVcIiB2LWlmPVwidGFiLmlzTG9hZGluZyB8fCB0YWIuZGF0YS5sZW5ndGggPiA0XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxvYWRpbmctbW9yZS10ZXh0XCI+e3sgdGFiLmxvYWRpbmdUZXh0IH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cblx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxuXHRcdDwvc3dpcGVyPlxuXHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgbWVkaWFJdGVtIGZyb20gJy4vbmV3cy1pdGVtLm52dWUnO1xuaW1wb3J0IHVuaUljb25zIGZyb20gJ0AvY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZSc7XG4vLyDnvJPlrZjmr4/pobXmnIDlpJpcbmNvbnN0IE1BWF9DQUNIRV9EQVRBID0gMTAwO1xuLy8g57yT5a2Y6aG1562+5pWw6YePXG5jb25zdCBNQVhfQ0FDSEVfUEFHRSA9IDM7XG5cbmNvbnN0IG5ld3NEYXRhID0ge1xuXHRkYXRhMDoge1xuXHRcdGRhdGV0aW1lOiAnNDDliIbpkp/liY0nLFxuXHRcdGFydGljbGVfdHlwZTogMCxcblx0XHR0aXRsZTogJ3VuaS1hcHDooYzkuJrls7DkvJrpopHpopHkuq7nm7jvvIzlvIDlj5HogIXlj43lk43ng63ng4ghJyxcblx0XHRzb3VyY2U6ICdEQ2xvdWQnLFxuXHRcdGNvbW1lbnRfY291bnQ6IDYzOSxcblx0XHRpc1ZpZGVvOiBmYWxzZVxuXHR9LFxuXHRkYXRhMToge1xuXHRcdGRhdGV0aW1lOiAn5LiA5aSp5YmNJyxcblx0XHRhcnRpY2xlX3R5cGU6IDEsXG5cdFx0dGl0bGU6ICdEQ2xvdWTlrozmiJBCMui9ruiejei1hO+8jHVuaS1hcHDpnIfmkrzlj5HluIMhJyxcblx0XHRpbWFnZV91cmw6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi91bmlhcHAvaW1hZ2VzL3NodWlqaWFvLmpwZz9pbWFnZVZpZXcyLzMvdy8yMDAvaC8xMDAvcS85MCcsXG5cdFx0c291cmNlOiAnRENsb3VkJyxcblx0XHRjb21tZW50X2NvdW50OiAxMTM5NSxcblx0XHRpc1ZpZGVvOiBmYWxzZVxuXHR9LFxuXHRkYXRhMjoge1xuXHRcdGRhdGV0aW1lOiAn5LiA5aSp5YmNJyxcblx0XHRhcnRpY2xlX3R5cGU6IDIsXG5cdFx0dGl0bGU6ICfkuK3lm73mioDmnK/nlYzlsI/lpYfov7nvvJpIQnVpbGRlcuW8gOWPkeiAheeqgeegtDIwMOS4hycsXG5cdFx0aW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWctY2RuLXFpbml1LmRjbG91ZC5uZXQuY24vdW5pYXBwL2ltYWdlcy9tdXd1LmpwZz9pbWFnZVZpZXcyLzMvdy8yMDAvaC8xMDAvcS85MCcsXG5cdFx0c291cmNlOiAnRENsb3VkJyxcblx0XHRjb21tZW50X2NvdW50OiAxMTM5NSxcblx0XHRpc1ZpZGVvOiBmYWxzZVxuXHR9LFxuXHRkYXRhMzoge1xuXHRcdGFydGljbGVfdHlwZTogMyxcblx0XHRpbWFnZV9saXN0OiBbXG5cdFx0XHR7XG5cdFx0XHRcdHVybDogJ2h0dHBzOi8vaW1nLWNkbi1xaW5pdS5kY2xvdWQubmV0LmNuL3VuaWFwcC9pbWFnZXMvY2JkLmpwZz9pbWFnZVZpZXcyLzMvdy8yMDAvaC8xMDAvcS85MCcsXG5cdFx0XHRcdHdpZHRoOiA1NjMsXG5cdFx0XHRcdGhlaWdodDogMzE2XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR1cmw6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi91bmlhcHAvaW1hZ2VzL211d3UuanBnP2ltYWdlVmlldzIvMy93LzIwMC9oLzEwMC9xLzkwJyxcblx0XHRcdFx0d2lkdGg6IDY0MSxcblx0XHRcdFx0aGVpZ2h0OiAzNjBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHVybDogJ2h0dHBzOi8vaW1nLWNkbi1xaW5pdS5kY2xvdWQubmV0LmNuL3VuaWFwcC9pbWFnZXMvc2h1aWppYW8uanBnP2ltYWdlVmlldzIvMy93LzIwMC9oLzEwMC9xLzkwJyxcblx0XHRcdFx0d2lkdGg6IDY0MCxcblx0XHRcdFx0aGVpZ2h0OiAzNjBcblx0XHRcdH1cblx0XHRdLFxuXHRcdGRhdGV0aW1lOiAnNeWIhumSn+WJjScsXG5cdFx0dGl0bGU6ICd1bmktYXBwIOaUr+aMgeS9v+eUqCBucG0g5a6J6KOF56ys5LiJ5pa55YyF77yM55Sf5oCB5pu06LaL5Liw5a+MJyxcblx0XHRzb3VyY2U6ICdEQ2xvdWQnLFxuXHRcdGNvbW1lbnRfY291bnQ6IDExLFxuXHRcdGlzVmlkZW86IGZhbHNlXG5cdH0sXG5cdGRhdGE0OiB7XG5cdFx0ZGF0ZXRpbWU6ICcy5bCP5pe25YmNJyxcblx0XHRhcnRpY2xlX3R5cGU6IDQsXG5cdFx0dGl0bGU6ICd1bmktYXBwIOaUr+aMgeWOn+eUn+Wwj+eoi+W6j+iHquWumuS5iee7hOS7tu+8jOabtOW8gOaUvuOAgeabtOiHqueUsScsXG5cdFx0aW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWctY2RuLXFpbml1LmRjbG91ZC5uZXQuY24vdW5pYXBwL2ltYWdlcy9jYmQuanBnP2ltYWdlVmlldzIvMy93LzIwMC9oLzEwMC9xLzkwJyxcblx0XHRzb3VyY2U6ICdEQ2xvdWQnLFxuXHRcdGNvbW1lbnRfY291bnQ6IDY5LFxuXHRcdGlzVmlkZW86IHRydWVcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7XG5cdFx0bWVkaWFJdGVtLFxuXHRcdHVuaUljb25zXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5ld3NMaXN0OiBbXSxcblx0XHRcdGNhY2hlVGFiOiBbXSxcblx0XHRcdHRhYkluZGV4OiAwLFxuXHRcdFx0bGFzdEluZGV4OiAwLCAvL+S4iuS4gOasoeeahOWdkOagh1xuXHRcdFx0dGFiQmFyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ+WFs+azqCcsXG5cdFx0XHRcdFx0aWQ6ICdndWFuemh1J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ+aOqOiNkCcsXG5cdFx0XHRcdFx0aWQ6ICd0dWlqaWFuJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ+S9k+iCsicsXG5cdFx0XHRcdFx0aWQ6ICd0aXl1J1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0c2Nyb2xsSW50bzogJycsXG5cdFx0XHRzaG93VGlwczogZmFsc2UsXG5cdFx0XHRuYXZpZ2F0ZUZsYWc6IGZhbHNlLFxuXHRcdFx0cHVsbGluZzogZmFsc2UsXG5cdFx0XHRyZWZyZXNoSWNvbjpcblx0XHRcdFx0J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBQjVRVEZSRmNIQnczTnpjdDdlMzl2YjJ5Y25KaW9xSzdlM3RwcWFtMjl2Yi8vLy9EOG9LN3dBQUFBcDBVazVULy8vLy8vLy8vLy8vQUxMTUxNOEFBQUJ4U1VSQlZIamE3SlZCRG9BZ0RBU3JqcWovLzdDSkJpOTBpeVllT0hUUE13bUZackhqWXl5RllZVXkxYndVWnF0SklZVnhoZjFhNnUwUjdpVXZXc0NjckV0d0pIcDhNd01kdmgyYW1IZHVpWkQzcnBXSWQ5K0JnUGQ3Q2MyTElrUHlxdmxRdkt4S0JKLy9Rd3EvQ2FjQUF3RFV2MGEwWXVLaHpnQUFBQUJKUlU1RXJrSmdnZz09J1xuXHRcdH07XG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudGFiQmFycy5mb3JFYWNoKHRhYkJhciA9PiB7XG5cdFx0XHRcdHRoaXMubmV3c0xpc3QucHVzaCh7XG5cdFx0XHRcdFx0ZGF0YTogW10sXG5cdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRyZWZyZXNoVGV4dDogJycsXG5cdFx0XHRcdFx0bG9hZGluZ1RleHQ6ICfliqDovb3mm7TlpJouLi4nXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmdldExpc3QoMCk7XG5cdFx0fSwgMzUwKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGlzU2Nyb2xsKGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWJJbmRleCA9PSBpbmRleDtcblx0XHR9LFxuXHRcdC8v5paw6Ze76K+m5oOFXG5cdFx0Z29EZXRhaWwoaXRlbSwgaW5kZXgpIHtcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRpZDogaW5kZXgsXG5cdFx0XHRcdHRpdGxlOiBpdGVtLnRpdGxlLFxuXHRcdFx0XHRhdXRob3I6ICfor6bmg4UnLFxuXHRcdFx0XHR0aW1lOiBpdGVtLmRhdGV0aW1lXG5cdFx0XHR9O1xuXHRcdC8vXHRsZXQgdXJsID0gaXRlbS5pc1ZpZGVvID09IHRydWUgPyAndmlkZW9EZXRhaWxzJyA6ICdkZXRhaWxzJztcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiBgL3BhZ2VzL25ldy9kZXRhaWxzP2RhdGE9JHtKU09OLnN0cmluZ2lmeShkYXRhKX1gXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGdldExpc3QoaW5kZXgpIHtcblx0XHRcdGxldCBhY3RpdmVUYWIgPSB0aGlzLm5ld3NMaXN0W2luZGV4XTtcblx0XHRcdGxldCBsaXN0ID0gW107XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG5cdFx0XHRcdGxldCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3c0RhdGFbJ2RhdGEnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSldKTtcblx0XHRcdFx0aXRlbS5pZCA9IHRoaXMubmV3R3VpZCgpO1xuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0XHRhY3RpdmVUYWIuZGF0YSA9IGFjdGl2ZVRhYi5kYXRhLmNvbmNhdChsaXN0KTtcblx0XHR9LFxuXHRcdGNsb3NlKGluZGV4MSwgaW5kZXgyKSB7XG5cdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0Y29udGVudDogJ+aYr+WQpuWIoOmZpOacrOadoeS/oeaBr++8nycsXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5ld3NMaXN0W2luZGV4MV0uZGF0YS5zcGxpY2UoaW5kZXgyLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0bG9hZE1vcmUoZSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2V0TGlzdCh0aGlzLnRhYkluZGV4KTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fSxcblx0XHRvbnRhYnRhcChlKSB7XG5cdFx0XHRsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQgfHwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcblx0XHRcdHRoaXMuaXNMZWZ0ID0gdGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xuXHRcdH0sXG5cdFx0b250YWJjaGFuZ2UoZSkge1xuXHRcdFx0bGV0IGluZGV4ID0gZS50YXJnZXQuY3VycmVudCB8fCBlLmRldGFpbC5jdXJyZW50O1xuXHRcdFx0dGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xuXHRcdH0sXG5cdFx0c3dpdGNoVGFiKGluZGV4KSB7XG5cdFx0XHRpZiAodGhpcy5uZXdzTGlzdFtpbmRleF0uZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5nZXRMaXN0KGluZGV4KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudGFiSW5kZXggPT09IGluZGV4KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8g57yT5a2YIHRhYklkXG5cdFx0XHRpZiAodGhpcy5uZXdzTGlzdFt0aGlzLnRhYkluZGV4XS5kYXRhLmxlbmd0aCA+IE1BWF9DQUNIRV9EQVRBKSB7XG5cdFx0XHRcdGxldCBpc0V4aXN0ID0gdGhpcy5jYWNoZVRhYi5pbmRleE9mKHRoaXMudGFiSW5kZXgpO1xuXHRcdFx0XHRpZiAoaXNFeGlzdCA8IDApIHtcblx0XHRcdFx0XHR0aGlzLmNhY2hlVGFiLnB1c2godGhpcy50YWJJbmRleCk7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNhY2hlIGluZGV4OjogXCIgKyB0aGlzLnRhYkluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYkluZGV4KTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMubGFzdEluZGV4KTtcblxuXHRcdFx0aWYgKHRoaXMudGFiSW5kZXggPCA1ICYmIHRoaXMubGFzdEluZGV4IDwgdGhpcy50YWJJbmRleCkge1xuXHRcdFx0XHR0aGlzLmxhc3RJbmRleCA9IHRoaXMudGFiSW5kZXg7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPj0gNSkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbEludG8gPSB0aGlzLnRhYkJhcnNbaW5kZXggLSA1XS5pZDtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMuc2Nyb2xsSW50byA9IHRoaXMudGFiQmFyc1tpbmRleF0uaWQ7XG5cdFx0XHR0aGlzLmxhc3RJbmRleCA9IHRoaXMudGFiSW5kZXg7XG5cdFx0XHQvLyDph4rmlL4gdGFiSWRcblx0XHRcdGlmICh0aGlzLmNhY2hlVGFiLmxlbmd0aCA+IE1BWF9DQUNIRV9QQUdFKSB7XG5cdFx0XHRcdGxldCBjYWNoZUluZGV4ID0gdGhpcy5jYWNoZVRhYlswXTtcblx0XHRcdFx0dGhpcy5jbGVhclRhYkRhdGEoY2FjaGVJbmRleCk7XG5cdFx0XHRcdHRoaXMuY2FjaGVUYWIuc3BsaWNlKDAsIDEpO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwicmVtb3ZlIGNhY2hlIGluZGV4OjogXCIgKyBjYWNoZUluZGV4KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNsZWFyVGFiRGF0YShlKSB7XG5cdFx0XHR0aGlzLm5ld3NMaXN0W2VdLmRhdGEubGVuZ3RoID0gMDtcblx0XHRcdHRoaXMubmV3c0xpc3RbZV0ubG9hZGluZ1RleHQgPSAn5Yqg6L295pu05aSaLi4uJztcblx0XHR9LFxuXHRcdHJlZnJlc2hEYXRhKCkge30sXG5cdFx0b25yZWZyZXNoKGUpIHtcblx0XHRcdHZhciB0YWIgPSB0aGlzLm5ld3NMaXN0W3RoaXMudGFiSW5kZXhdO1xuXHRcdFx0aWYgKCF0YWIucmVmcmVzaEZsYWcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGFiLnJlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdFx0dGFiLnJlZnJlc2hUZXh0ID0gJ+ato+WcqOWIt+aWsC4uLic7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hEYXRhKCk7XG5cdFx0XHRcdHRoaXMucHVsbGluZyA9IHRydWU7XG5cdFx0XHRcdHRhYi5yZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRhYi5yZWZyZXNoRmxhZyA9IGZhbHNlO1xuXHRcdFx0XHR0YWIucmVmcmVzaFRleHQgPSAn5bey5Yi35pawJztcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gVE9ETyBmaXggaW9z5ZKMQW5kcm9pZCDliqjnlLvml7bpl7Tnm7jlj43pl67pophcblx0XHRcdFx0XHR0aGlzLnB1bGxpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0sIDIwMDApO1xuXHRcdH0sXG5cdFx0b25wdWxsaW5nZG93bihlKSB7XG5cdFx0XHR2YXIgdGFiID0gdGhpcy5uZXdzTGlzdFt0aGlzLnRhYkluZGV4XTtcblx0XHRcdGlmICh0YWIucmVmcmVzaGluZyB8fCB0aGlzLnB1bGxpbmcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1hdGguYWJzKGUucHVsbGluZ0Rpc3RhbmNlKSA+IE1hdGguYWJzKGUudmlld0hlaWdodCkpIHtcblx0XHRcdFx0dGFiLnJlZnJlc2hGbGFnID0gdHJ1ZTtcblx0XHRcdFx0dGFiLnJlZnJlc2hUZXh0ID0gJ+mHiuaUvueri+WNs+WIt+aWsCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWIucmVmcmVzaEZsYWcgPSBmYWxzZTtcblx0XHRcdFx0dGFiLnJlZnJlc2hUZXh0ID0gJ+S4i+aLieWPr+S7peWIt+aWsCc7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRuZXdHdWlkKCkge1xuXHRcdFx0bGV0IHM0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAoKDY1NTM2ICogKDEgKyBNYXRoLnJhbmRvbSgpKSkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiAoczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy00JyArIHM0KCkuc3Vic3RyKDAsIDMpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKSkudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmltZ3BsYXkge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA0MHB4O1xufVxuLmltZ3BsYXkgLmljb24ge1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0Zm9udC1zaXplOiAxMjBycHg7XG59XG4vKiDlpLTmnaHlsI/nqIvluo/nu4Tku7blhoXkuI3og73lvJXlhaXlrZfkvZMgKi9cbi8qICNpZmRlZiBNUC1UT1VUSUFPICovXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdHNyYzogdXJsKCd+QC9zdGF0aWMvdW5pLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbi8qICNlbmRpZiAqL1xuXG4vKiDpobbpg6jmoIfpopjmoI8gKi9cbi5wYWdlLWhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlYzcwNmI7XG59XG4ucGFnZS1oZWFkZXItd3JhcHBlciB7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQvKiAjaWZkZWYgQVBQLVBMVVMgKi9cblx0aGVpZ2h0OiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XG5cdC8qICNlbmRpZiAqL1xuXHRwYWRkaW5nOiAyMHVweCAxMHVweCAxNXVweCAxMHVweDtcblx0LyogYmFja2dyb3VuZC1jb2xvcjogI2VjNzA2YjsgKi9cblx0LyogbWFyZ2luLXRvcDogMzBweDsgKi9cbn1cblxuLnBhZ2UtaGVhZGVyLWxlZnQge1xuXHRvcGFjaXR5OiAwLjk7XG5cdGZsb2F0OiBsZWZ0O1xuXHRwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnBhZ2UtaGVhZGVyLWNlbnRlciB7XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmc6IDBweCAzMHB4IDAgMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOTk5OTk5O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiA3MHVweDtcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHBhZGRpbmctdG9wOiAxMHVweDtcblx0cGFkZGluZy1ib3R0b206IDEwdXB4O1xuXHRtYXJnaW4tdG9wOiA2MHVweDtcbn1cblxuLnBhZ2UtaGVhZGVyLXJpZ2h0IHtcblx0d2lkdGg6IDYzdXB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbG9hdDogcmlnaHQ7XG5cdHBhZGRpbmctdG9wOiA2MHVweDtcbn1cblxuLmNvbnRyaWJ1dGUtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMzJ1cHg7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4vKiAjaWZuZGVmIEFQUC1QTFVTICovXG5wYWdlIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qICNlbmRpZiAqL1xuXG4udGFicyB7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdC8qICNpZmRlZiBNUC1BTElQQVkgfHwgTVAtQkFJRFUgKi9cblx0aGVpZ2h0OiAxMDB2aDtcblx0LyogI2VuZGlmICovXG59XG5cbi5zY3JvbGwtaCB7XG5cdHdpZHRoOiA3NTBycHg7XG5cdGhlaWdodDogODBycHg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0LyogI2VuZGlmICovXG5cdC8qIGZsZXgtd3JhcDogbm93cmFwOyAqL1xuXHQvKiBib3JkZXItY29sb3I6ICNjY2NjY2M7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4OyAqL1xufVxuXG4ubGluZS1oIHtcblx0aGVpZ2h0OiAxcnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG4udW5pLXRhYi1pdGVtIHtcblx0d2lkdGg6MzMlO1xuXHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0LyogI2VuZGlmICovXG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHRwYWRkaW5nLWxlZnQ6IDM0cnB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAzNHJweDtcblxufVxuXG4udW5pLXRhYi1pdGVtLXRpdGxlIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LXNpemU6IDMwcnB4O1xuXHRoZWlnaHQ6IDgwcnB4O1xuXHRsaW5lLWhlaWdodDogODBycHg7XG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdC8qICNlbmRpZiAqL1xufVxuXG4udW5pLXRhYi1pdGVtLXRpdGxlLWFjdGl2ZSB7XG5cdGNvbG9yOiAjZWM3MDZiO1xufVxuXG4udW5kZXJsaW5lYm94IHtcblx0aGVpZ2h0OiAzcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGhlaWdodDogNHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWM3MDZiO1xuXHRtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi51bmRlcmxpbmVib3gtYWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cbi5zd2lwZXItYm94IHtcblx0ZmxleDogMTtcbn1cblxuLnN3aXBlci1pdGVtIHtcblx0ZmxleDogMTtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNjcm9sbC12IHtcblx0ZmxleDogMTtcblx0LyogI2lmbmRlZiBNUC1BTElQQVkgKi9cblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LyogI2VuZGlmICovXG5cdHdpZHRoOiA3NTBycHg7XG59XG5cbi51cGRhdGUtdGlwcyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiA0MXB4O1xuXHRyaWdodDogMDtcblx0cGFkZGluZy10b3A6IDVweDtcblx0cGFkZGluZy1ib3R0b206IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZkZGQ5Yjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwZGF0ZS10aXBzLXRleHQge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucmVmcmVzaCB7XG5cdHdpZHRoOiA3NTBycHg7XG5cdGhlaWdodDogNjRweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWZyZXNoLXZpZXcge1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWZyZXNoLWljb24ge1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiAxNXB4IDE1cHg7XG59XG5cbi5yZWZyZXNoLWljb24tYWN0aXZlIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmxvYWRpbmctaWNvbiB7XG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuXHRjb2xvcjogIzk5OTk5OTtcbn1cblxuLmxvYWRpbmctdGV4dCB7XG5cdG1hcmdpbi1sZWZ0OiAycHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICM5OTk5OTk7XG59XG5cbi5sb2FkaW5nLW1vcmUge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLW1vcmUtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMjhycHg7XG5cdGNvbG9yOiAjOTk5O1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!***************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-item.nvue?vue&type=template&id=41af1f6e& */ 34);\n/* harmony import */ var _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-item.nvue?vue&type=script&lang=js& */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 18);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./news-item.nvue?vue&type=style&index=0&lang=css& */ 38).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./news-item.nvue?vue&type=style&index=0&lang=css& */ 38).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"0e96acfb\",\n  false,\n  _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/new/news-item.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDFhZjFmNmUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjBlOTZhY2ZiXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL25ldy9uZXdzLWl0ZW0ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue?vue&type=template&id=41af1f6e& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-item.nvue?vue&type=template&id=41af1f6e& */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue?vue&type=template&id=41af1f6e& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.options.title
    ? _c(
        "view",
        {
          staticClass: ["media-item", "view"],
          attrs: { hoverClass: "media-item-hover" },
          on: { click: _vm.click }
        },
        [
          _c(
            "view",
            {
              staticClass: ["view"],
              style: {
                flexDirection:
                  _vm.options.article_type === 1 ||
                  _vm.options.article_type === 2
                    ? _vm.options.article_type === 2
                      ? "row"
                      : "row-reverse"
                    : "column"
              }
            },
            [
              _c(
                "u-text",
                {
                  staticClass: ["media-title"],
                  class: {
                    "media-title2":
                      _vm.options.article_type === 1 ||
                      _vm.options.article_type === 2
                  }
                },
                [_vm._v(_vm._s(_vm.options.title))]
              ),
              _vm.options.image_list || _vm.options.image_url
                ? _c(
                    "view",
                    {
                      staticClass: ["image-section", "flex-row"],
                      class: {
                        "image-section-right": _vm.options.article_type === 2,
                        "image-section-left": _vm.options.article_type === 1
                      },
                      style: { flexDirection: "row" }
                    },
                    [
                      _vm.options.image_url
                        ? _c("u-image", {
                            staticClass: ["image-list1"],
                            class: {
                              "image-list2":
                                _vm.options.article_type === 1 ||
                                _vm.options.article_type === 2
                            },
                            attrs: { src: _vm.options.image_url }
                          })
                        : _vm._e(),
                      _vm._l(_vm.options.image_list, function(source, i) {
                        return _vm.options.image_list
                          ? _c("u-image", {
                              key: i,
                              staticClass: ["image-list3"],
                              attrs: { src: source.url }
                            })
                          : _vm._e()
                      }),
                      _vm.options.isVideo == true
                        ? _c("u-image", {
                            staticClass: ["icon", "imgplay"],
                            attrs: { src: "../../static/img/play.png" }
                          })
                        : _vm._e()
                    ],
                    2
                  )
                : _vm._e()
            ]
          ),
          _c(
            "view",
            {
              staticClass: ["media-foot", "flex-row"],
              staticStyle: { flexDirection: "row" }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["media-info", "flex-row"],
                  staticStyle: { flexDirection: "row" }
                },
                [
                  _c("u-text", { staticClass: ["info-text"] }, [
                    _vm._v(_vm._s(_vm.options.source))
                  ]),
                  _c("u-text", { staticClass: ["info-text"] }, [
                    _vm._v(_vm._s(_vm.options.comment_count) + "条评论")
                  ]),
                  _c("u-text", { staticClass: ["info-text"] }, [
                    _vm._v(_vm._s(_vm.options.datetime))
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: ["max-close-view"], on: { click: _vm.close } },
                [
                  _c("view", { staticClass: ["close-l", "close-h"] }),
                  _c("view", { staticClass: ["close-l", "close-v"] })
                ]
              )
            ]
          ),
          _c("view", {
            staticClass: ["media-item-line"],
            staticStyle: { position: "absolute" }
          })
        ]
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!****************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-item.nvue?vue&type=script&lang=js& */ 37);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXVpQixDQUFnQiwwakJBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25ld3MtaXRlbS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default2 =\n{\n  props: {\n    options: {\n      type: Object,\n      default: function _default(e) {\n        return {};\n      } } },\n\n\n  methods: {\n    click: function click() {\n      this.$emit('click');\n    },\n    close: function close(e) {\n      this.$emit('close');\n    } } };exports.default = _default2;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbmV3L25ld3MtaXRlbS5udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQSxFQURBLEVBREE7OztBQVNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLFNBSkEsaUJBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQSxLQU5BLEVBVEEsRSIsImZpbGUiOiIzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PCEtLSByZW1vdmUgbGlzdC1jZWxsIGxheWVyIGZpeCBhbmRyb2lkIDQueCBvdmVyZmxvdyBsaW1pdCBlcnJvcjogMjggbGF5ZXJzISAtLT5cblx0PCEtLSA8dmlldyBjbGFzcz1cImxpc3QtY2VsbCB2aWV3XCIgQGNsaWNrPVwiY2xpY2tcIj48L3ZpZXc+IC0tPlxuXHQ8dmlldyBjbGFzcz1cIm1lZGlhLWl0ZW0gdmlld1wiIGhvdmVyLWNsYXNzPVwibWVkaWEtaXRlbS1ob3ZlclwiIHYtaWY9XCJvcHRpb25zLnRpdGxlXCIgQGNsaWNrPVwiY2xpY2tcIj5cblx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwidmlld1wiIDpzdHlsZT1cIm9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAyID8gJ2ZsZXgtZGlyZWN0aW9uOiByb3cnO1wiIDpjbGFzcz1cInsnbWVkaWEtaW1hZ2UtcmlnaHQnOiBvcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMiwgJ21lZGlhLWltYWdlLWxlZnQnOiBvcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMX1cIj4gLS0+XG5cdFx0PCEtLSBUT0RPIOWcqOaUr+S7mOWuneWwj+eoi+W6j+S4iyDpnIDopoHnlKggc3R5bGUg6KaG55uW5qCH562+55qE6buY6K6k5qC35byPIC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwidmlld1wiIDpzdHlsZT1cInsgZmxleERpcmVjdGlvbjogb3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDEgfHwgb3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDIgPyAob3B0aW9ucy5hcnRpY2xlX3R5cGUgPT09IDIgPyAncm93JyA6ICdyb3ctcmV2ZXJzZScpIDogJ2NvbHVtbicgfVwiPlxuXHRcdFx0PHRleHQgY2xhc3M9XCJtZWRpYS10aXRsZVwiIDpjbGFzcz1cInsgJ21lZGlhLXRpdGxlMic6IG9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAxIHx8IG9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAyIH1cIj57eyBvcHRpb25zLnRpdGxlIH19PC90ZXh0PlxuXHRcdFx0PHZpZXdcblx0XHRcdFx0di1pZj1cIm9wdGlvbnMuaW1hZ2VfbGlzdCB8fCBvcHRpb25zLmltYWdlX3VybFwiXG5cdFx0XHRcdGNsYXNzPVwiaW1hZ2Utc2VjdGlvbiBmbGV4LXJvd1wiXG5cdFx0XHRcdDpjbGFzcz1cInsgJ2ltYWdlLXNlY3Rpb24tcmlnaHQnOiBvcHRpb25zLmFydGljbGVfdHlwZSA9PT0gMiwgJ2ltYWdlLXNlY3Rpb24tbGVmdCc6IG9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAxIH1cIlxuXHRcdFx0XHQ6c3R5bGU9XCJ7IGZsZXhEaXJlY3Rpb246ICdyb3cnIH1cIlxuXHRcdFx0PlxuXHRcdFx0XHQ8aW1hZ2Vcblx0XHRcdFx0XHRjbGFzcz1cImltYWdlLWxpc3QxXCJcblx0XHRcdFx0XHQ6Y2xhc3M9XCJ7ICdpbWFnZS1saXN0Mic6IG9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAxIHx8IG9wdGlvbnMuYXJ0aWNsZV90eXBlID09PSAyIH1cIlxuXHRcdFx0XHRcdHYtaWY9XCJvcHRpb25zLmltYWdlX3VybFwiXG5cdFx0XHRcdFx0OnNyYz1cIm9wdGlvbnMuaW1hZ2VfdXJsXCJcblx0XHRcdFx0PjwvaW1hZ2U+XG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cImltYWdlLWxpc3QzXCIgdi1pZj1cIm9wdGlvbnMuaW1hZ2VfbGlzdFwiIDpzcmM9XCJzb3VyY2UudXJsXCIgdi1mb3I9XCIoc291cmNlLCBpKSBpbiBvcHRpb25zLmltYWdlX2xpc3RcIiA6a2V5PVwiaVwiIC8+XG5cdFx0XHRcdDxpbWFnZSBjbGFzcz1cImljb24gaW1ncGxheVwiIHYtaWY9XCJvcHRpb25zLmlzVmlkZW8gPT0gdHJ1ZVwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWcvcGxheS5wbmdcIj48L2ltYWdlPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cIm1lZGlhLWZvb3QgZmxleC1yb3dcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1lZGlhLWluZm8gZmxleC1yb3dcIiBzdHlsZT1cImZsZXgtZGlyZWN0aW9uOiByb3c7XCI+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaW5mby10ZXh0XCI+e3sgb3B0aW9ucy5zb3VyY2UgfX08L3RleHQ+XG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaW5mby10ZXh0XCI+e3sgb3B0aW9ucy5jb21tZW50X2NvdW50IH195p2h6K+E6K66PC90ZXh0PlxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImluZm8tdGV4dFwiPnt7IG9wdGlvbnMuZGF0ZXRpbWUgfX08L3RleHQ+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cIm1heC1jbG9zZS12aWV3XCIgQGNsaWNrLnN0b3A9XCJjbG9zZVwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImNsb3NlLWwgY2xvc2UtaFwiPjwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJjbG9zZS1sIGNsb3NlLXZcIj48L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuXHRcdDx2aWV3IGNsYXNzPVwibWVkaWEtaXRlbS1saW5lXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7XCI+PC92aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczoge1xuXHRcdG9wdGlvbnM6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGRlZmF1bHQ6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGNsaWNrKCkge1xuXHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKTtcblx0XHR9LFxuXHRcdGNsb3NlKGUpIHtcblx0XHRcdHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG5cdFx0fVxuXHR9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbi52aWV3IHtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZsZXgtcm93IHtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmZsZXgtY29sIHtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxpc3QtY2VsbCB7XG5cdHdpZHRoOiA3NTBycHg7XG5cdHBhZGRpbmc6IDAgMzBycHg7XG59XG5cbi51bmktbGlzdC1jZWxsLWhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbn1cblxuLm1lZGlhLWl0ZW0ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdC8qIGJvcmRlci1ib3R0b20td2lkdGg6IDFycHg7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2ViZWJlYjsgKi9cblx0cGFkZGluZzogMjBycHggMzBycHggMjFycHggMzBycHg7XG59XG5cbi5tZWRpYS1pdGVtLWhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLm1lZGlhLWl0ZW0tbGluZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMzBycHg7XG5cdHJpZ2h0OiAzMHJweDtcblx0Ym90dG9tOiAwO1xuXHRoZWlnaHQ6IDFycHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG59XG5cbi5tZWRpYS1pbWFnZS1yaWdodCB7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5tZWRpYS1pbWFnZS1sZWZ0IHtcblx0ZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4ubWVkaWEtdGl0bGUge1xuXHRmbGV4OiAxO1xufVxuXG4ubWVkaWEtdGl0bGUge1xuXHRsaW5lczogMztcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cdGZvbnQtc2l6ZTogMzBycHg7XG5cdGNvbG9yOiAjNTU1NTU1O1xufVxuXG4ubWVkaWEtdGl0bGUyIHtcblx0ZmxleDogMTtcblx0bWFyZ2luLXRvcDogNnJweDtcblx0bGluZS1oZWlnaHQ6IDQwcnB4O1xufVxuXG4uaW1hZ2Utc2VjdGlvbiB7XG5cdG1hcmdpbi10b3A6IDIwcnB4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbWFnZS1zZWN0aW9uLXJpZ2h0IHtcblx0bWFyZ2luLXRvcDogMHJweDtcblx0bWFyZ2luLWxlZnQ6IDEwcnB4O1xuXHR3aWR0aDogMjI1cnB4O1xuXHRoZWlnaHQ6IDE0NnJweDtcbn1cblxuLmltYWdlLXNlY3Rpb24tbGVmdCB7XG5cdG1hcmdpbi10b3A6IDBycHg7XG5cdG1hcmdpbi1yaWdodDogMTBycHg7XG5cdHdpZHRoOiAyMjVycHg7XG5cdGhlaWdodDogMTQ2cnB4O1xufVxuXG4uaW1hZ2UtbGlzdDEge1xuXHR3aWR0aDogNjkwcnB4O1xuXHRoZWlnaHQ6IDQ4MXJweDtcbn1cblxuLmltYWdlLWxpc3QyIHtcblx0d2lkdGg6IDIyNXJweDtcblx0aGVpZ2h0OiAxNDZycHg7XG59XG5cbi5pbWFnZS1saXN0MyB7XG5cdHdpZHRoOiAyMjVycHg7XG5cdGhlaWdodDogMTQ2cnB4O1xufVxuXG4ubWVkaWEtaW5mbyB7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pbmZvLXRleHQge1xuXHRtYXJnaW4tcmlnaHQ6IDIwcnB4O1xuXHRjb2xvcjogIzk5OTk5OTtcblx0Zm9udC1zaXplOiAyNHJweDtcbn1cblxuLm1lZGlhLWZvb3Qge1xuXHRtYXJnaW4tdG9wOiAyNXJweDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWF4LWNsb3NlLXZpZXcge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdHdpZHRoOiA0MHJweDtcblx0aGVpZ2h0OiAzMHJweDtcblx0bGluZS1oZWlnaHQ6IDMwcnB4O1xuXHRib3JkZXItd2lkdGg6IDFycHg7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1jb2xvcjogI2FhYWFhYTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2xvc2UtbCB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0d2lkdGg6IDE4cnB4O1xuXHRoZWlnaHQ6IDFycHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNhYWFhYWE7XG59XG5cbi5jbG9zZS1oIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4uY2xvc2UtdiB7XG5cdHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG59XG5cbi5pbWdwbGF5IHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR6LWluZGV4OiAxO1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0d2lkdGg6IDEyN3JweDtcblx0aGVpZ2h0OiAxMjdycHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHQvKiBtYXJnaW4tbGVmdDpjYWxjKDUwJS0xMDBweCk7ICovXG5cdC8qICNpZmRlZiBBUFAtUExVUyAqL1xuXHRtYXJnaW46MTAwcHggMTUwcHg7XG5cdC8qICNlbmRpZiAqL1xuXHRsZWZ0OiAxO1xufVxuPC9zdHlsZT4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./news-item.nvue?vue&type=style&index=0&lang=css& */ 39);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_news_item_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "view": {
    "flexDirection": "column"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-col": {
    "flexDirection": "column"
  },
  "list-cell": {
    "width": "750rpx",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "media-item": {
    "position": "relative",
    "flex": 1,
    "flexDirection": "column",
    "paddingTop": "20rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "21rpx",
    "paddingLeft": "30rpx"
  },
  "media-item-hover": {
    "backgroundColor": "#eeeeee"
  },
  "media-item-line": {
    "position": "absolute",
    "left": "30rpx",
    "right": "30rpx",
    "bottom": 0,
    "height": "1rpx",
    "backgroundColor": "#ebebeb"
  },
  "media-image-right": {
    "flexDirection": "row"
  },
  "media-image-left": {
    "flexDirection": "row-reverse"
  },
  "media-title": {
    "flex": 1,
    "lines": 3,
    "textOverflow": "ellipsis",
    "fontSize": "30rpx",
    "color": "#555555"
  },
  "media-title2": {
    "flex": 1,
    "marginTop": "6rpx",
    "lineHeight": "40rpx"
  },
  "image-section": {
    "marginTop": "20rpx",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "image-section-right": {
    "marginTop": "0rpx",
    "marginLeft": "10rpx",
    "width": "225rpx",
    "height": "146rpx"
  },
  "image-section-left": {
    "marginTop": "0rpx",
    "marginRight": "10rpx",
    "width": "225rpx",
    "height": "146rpx"
  },
  "image-list1": {
    "width": "690rpx",
    "height": "481rpx"
  },
  "image-list2": {
    "width": "225rpx",
    "height": "146rpx"
  },
  "image-list3": {
    "width": "225rpx",
    "height": "146rpx"
  },
  "media-info": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "info-text": {
    "marginRight": "20rpx",
    "color": "#999999",
    "fontSize": "24rpx"
  },
  "media-foot": {
    "marginTop": "25rpx",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "max-close-view": {
    "position": "relative",
    "alignItems": "center",
    "flexDirection": "row",
    "width": "40rpx",
    "height": "30rpx",
    "lineHeight": "30rpx",
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#aaaaaa",
    "borderRadius": "4",
    "justifyContent": "center",
    "textAlign": "center"
  },
  "close-l": {
    "position": "absolute",
    "width": "18rpx",
    "height": "1rpx",
    "backgroundColor": "#aaaaaa"
  },
  "close-h": {
    "transform": "rotate(45deg)"
  },
  "close-v": {
    "transform": "rotate(-45deg)"
  },
  "imgplay": {
    "position": "absolute",
    "zIndex": 1,
    "color": "#ffffff",
    "width": "127rpx",
    "height": "127rpx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "marginTop": "100",
    "marginRight": "150",
    "marginBottom": "100",
    "marginLeft": "150",
    "left": 1
  }
}

/***/ }),
/* 40 */
/*!*******************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 41);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "imgplay": {
    "textAlign": "center",
    "width": "40"
  },
  "page-header": {
    "backgroundColor": "#ec706b"
  },
  "page-header-wrapper": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingTop": "20upx",
    "paddingRight": "10upx",
    "paddingBottom": "15upx",
    "paddingLeft": "10upx"
  },
  "page-header-left": {
    "opacity": 0.9,
    "float": "left",
    "paddingTop": "20"
  },
  "page-header-center": {
    "flex": 1,
    "paddingTop": "0",
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "20",
    "textAlign": "center"
  },
  "search-input": {
    "height": "40",
    "fontSize": "14",
    "color": "#999999",
    "textAlign": "center",
    "lineHeight": "70upx",
    "borderRadius": "100",
    "backgroundColor": "#ffffff",
    "paddingTop": "10upx",
    "paddingBottom": "10upx",
    "marginTop": "60upx"
  },
  "page-header-right": {
    "width": "63upx",
    "alignItems": "center",
    "float": "right",
    "paddingTop": "60upx"
  },
  "contribute-text": {
    "fontSize": "32upx",
    "color": "#ffffff"
  },
  "tabs": {
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "backgroundColor": "#ffffff"
  },
  "scroll-h": {
    "width": "750rpx",
    "height": "80rpx",
    "flexDirection": "row"
  },
  "line-h": {
    "height": "1rpx",
    "backgroundColor": "#cccccc"
  },
  "uni-tab-item": {
    "width": 33,
    "flexWrap": "nowrap",
    "paddingLeft": "34rpx",
    "paddingRight": "34rpx"
  },
  "uni-tab-item-title": {
    "display": "flex",
    "justifyContent": "center",
    "color": "#555555",
    "fontSize": "30rpx",
    "height": "80rpx",
    "lineHeight": "80rpx",
    "flexWrap": "nowrap"
  },
  "uni-tab-item-title-active": {
    "color": "#ec706b"
  },
  "underlinebox": {
    "height": "4",
    "display": "flex",
    "alignContent": "center",
    "justifyContent": "center",
    "backgroundColor": "#ec706b",
    "marginTop": "-10"
  },
  "swiper-box": {
    "flex": 1
  },
  "swiper-item": {
    "flex": 1,
    "flexDirection": "row"
  },
  "scroll-v": {
    "flex": 1,
    "flexDirection": "column",
    "width": "750rpx"
  },
  "update-tips": {
    "position": "absolute",
    "left": 0,
    "top": "41",
    "right": 0,
    "paddingTop": "5",
    "paddingBottom": "5",
    "backgroundColor": "#fddd9b",
    "alignItems": "center",
    "justifyContent": "center",
    "textAlign": "center"
  },
  "update-tips-text": {
    "fontSize": "14",
    "color": "#ffffff"
  },
  "refresh": {
    "width": "750rpx",
    "height": "64",
    "justifyContent": "center"
  },
  "refresh-view": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "refresh-icon": {
    "width": "30",
    "height": "30",
    "transitionDuration": 500,
    "transitionProperty": "transform",
    "transform": "rotate(0deg)",
    "transformOrigin": "15px 15px"
  },
  "@TRANSITION": {
    "refresh-icon": {
      "duration": 500,
      "property": "transform"
    }
  },
  "refresh-icon-active": {
    "transform": "rotate(180deg)"
  },
  "loading-icon": {
    "width": "20",
    "height": "20",
    "marginRight": "5",
    "color": "#999999"
  },
  "loading-text": {
    "marginLeft": "2",
    "fontSize": "16",
    "color": "#999999"
  },
  "loading-more": {
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "10",
    "paddingBottom": "10",
    "textAlign": "center"
  },
  "loading-more-text": {
    "fontSize": "28rpx",
    "color": "#999999"
  }
}

/***/ })
/******/ ]);
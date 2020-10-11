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
      "src": "url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAOLkAAsAAAACJvgAAOKSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgDCFAqHrxiF6jABNgIkA5FMC4hoAAQgBYRtB7lUW2K/kUG08y9qGti+rQo89O8JP5lu7pTeLCHGf6ErKmRnD+NxgEK+TPb/////C5LFGPP+gAOAN61WrVyWNcjkUlFYUxMyuslDw72iSxUdZfLmUK7GD5hRZKcJfeHjKJqTPU1udD6jptN4x4Le8VNxsV7ii3tAveJm24xR7QioCf3WeWb3x2o8wKm4oj4wzOkPz81NDRhcVPHur5lt6Jm0fiikvHMq+4m66K5oQ9E+oneueC1eQ2YzkckKlpVdFW150Zz+viX7sFlBFwV/bV7pHOcc4ahgiQqygiQjSBDkHrRt6/Y2e3pfer0e7OuGlmBlC570+E8/UCJLKMd2lGhoqTOP++Sf7wfd+e+uHbOaoRQjCF0oclNUo3ZJUur7geb272J1vQbWoITUCCMZYdR3pDYTrMDEZoSRzOphI8bAKJCBGD2sgFkNRsEX+2dut0OsThKtQVv8iFkovKOEzWuFghij7Xuz1FTxR0UToREKKdAiMxcAw/Nz6/3/V/U3GPSCSHVstMTYRvSIjZZRowxAJCwGgmyKioUbBgMTMFCxAGXWnZ6g6JmnCFd6eieinl4Y9Dl64n/6pw727+1pqk2kiUUYaUz5/6nrPQNa0BN3xCTlUUgg8sLG/FunUH4XjZvSZWuffr9fj/r+dIZk1ogqUa+gK1qCaENKWULazSJ2BJWhcy0K1J/pchUJ9EtyNkxjO23GCPGhpBAvDzkEVGUqv5xS2CJAhWOEvFcWQMCgnr3fQIUGo976PiNHtomuExKxuP21IOojc1v/oRNqurhwzPTBuLkjBr+Z9pInPpBm7Ox7Y7tHGLrrI0pyyKlgobC7pmvTlMg/0q/0PgX2eCEw5kBhIbwHSUpkeAjLpvX67AuDUDfd273UpJBAe2Emnf9/bvZkZr6RbahGwAOhHkGs6u+9GytFqjKeDZy/I5vtN9mLeGghXYrDMGaYxUfggzT6unFpd46FGIYY8vvAdmPvSPxfTquqN7eqzuIHyZ5hQ2AB8SYwhGSn45l2B91cF+kqXy3LMMNGeRCTRbptBijIgQVyUJM9AG8VTQEYmQdAFdx+IEogcbxtvjbrg9O+B7teQpL/PdLyTaRtRbUvcIVrURBonQFv80nSNuJtJSu33Vdb9AVJ7BzA3E23R5jdLdptj/97nrCVWMSRPD6A8PemWqXdsqC0BpTGcNbcac5Sa3zld36NTdILovd/w/TvBih0g4QIgOAIhHgDEDLdAGcGIEgdaMQhJO0saEZDrbTG+m6C1HQTo6luQgYg1zQk3RapddQ6e8756Ooip7sk2iC8JJzLbtPsgvDCC+L8qP+4cZ5otgD27M8JWFfLmmVrPspYfixvFIUyj3yHPGZ7e2uvr2sIuWlSGvKSwtw+YQ6yC1HuuXuHZoVGev6+VLMrmiQkzYyDZhyjNsXDhZy0MR7X173tDf/9/xv8/3dQdwOku5tBDZCUAYYRGgwCSEndIEh1g6BMcjhTlOz1SuMob5Kz7E0DkBPIiZQ2x8tNnpNDvNz2ctR443FPx4UaoqUGnVKqFgEub39P3iwpTK60LdVrYQlBQhARERkkzJa7x3OHsVmH3i5ydZuFYjQgbdTn/7GZPVJWvPW0USDBdAYY++Obuz/ZrB/uuibfu1Pd3yI1rEgggYi+0P2JbX0+0I3mEEYWkJBIBQTJGYcyfp8CepYp4Anfzl1UTs8BcAOtIEjcMzQIAYfrkx0AZ9z7tIGw8QM+uPkBISDA79wlDohtNRCii7uGT/zRPx/MHiHAAA+Da82PEf09TK+hY8T61+bZtt+6ID7dFQjAK3ABuGZ0Y3djhv0ir8gTvY89zusE4I0eDtz/P2fLm+ub25tnhxU54qSzzr8ce3n75bcL/+va0PJWdvlVas/n7r8gNz6xp0uuP63q5ff0j9+2XJM/etf7DxhHe9Oox8LpyOs7YJ2wbvS2b3NFByJxkmY2L/e4ZVU3bdcvlsNqvdnu9ofz44kTQAARJlTVdMO0bMf1fIUNwihO0iwvyqpu2q4fxmle1m0/zut+3g/EouaR1bP3nH3tyXMCJ3ISJ3MKF+Ty8OHly48//qXSJgij3uz/n19e3969tNkdTpfb4/WBWNQ8snr2nmUjNmYOO2MTNmUuI+axGQPjzGdzJsqqbgYa7VCnH40tJpZTg9WsnVsvliub9cZ2u7Pb2zvAxeXh6hrnm1P0ze3d/cPzx6cXjOClUCSWvnr9RiZXwP+PqVXct+/eY+iD0Udjjonpp89f1F8DU2EUJ6b1BqPJnHrhp1mL9VqzvCjTVqp0NRvqNjaa2mxqtW22RTt1CBQGR+Q5KDSmMDU9MyvA4avzC+KGpCklU6i0lorBbK9q2Rwujy8QisQS6f/6xuaWU9ZoXLc7e+78haHhkYuXRk3AlT/xhmDkkT+VRmcwWWwOl8cXCEViCVYeeewJBrafBDuemfT8WUy51NaHcubax3ndz/v9AAjBCIrhBEnRDMvxgijJiqrpxtgIhqPxZAromC+Wq/Vmu9sfjqfz5Xq7P56v9+f7U0BZHCNIimZYjhdESVZUTTdMy/4tS2sYFkCO1+ockSBKsqJiojecOY7r+UEYbbZxY1OjAJBY1DyyevYeQIQJZVzIinS/XeAnSQK9V0Ky/S/0mtaCuyaK8RBiPIUZLxFGJYZRi2U04hiteEYngdFLZAySGG/JjI8UpplUprk0xlc64yeD8RdlAmQyLWQxgZoxQZozwbKZEC2YUC0Zo1ZMmNZMuDZQri04tYMK7aFSDpyTC1Xy4Lx8uKADXNQRLukEl3WGK7rAVV3hmm5wXXe4oQfc1BNczoNq54PQBXBLAdzWC+4ohLuK4J7ecF8feKAvPNQPHukPjw2AJwbCUxdCjUFQazC4DYFnhsJzxfDCMHipBF4phdfK4I3h8NYIeGckvDcKPhgNH42BT8bCZ+Pgi/FQZwLUmwhflcM3k+C7yfDDFPhpKvxSAb9Vwh/T4K/p0GAGNJoJ/5sF/8yGJnMYiIsYxFwGVcVg5jG4+QzPAoZvISOwiBGqZkQWM4QlDGkpQ1nG0JYzjIsZ1iUM51JG7DJGYgUjtZKRWcXIXc4orGaUroBT1sBpa+GMdVBqPZS5Es66ihS4mnwBXEO+BK4lXwEbyNdADfkG2Ei+BTaR74DryPfAZvKDLeRH15OfbCU/qyW/qCO/uoH85kbyu23kDzeRP91M/nIL+dt28o9byb9uI/+5nfzvDoC4ExA7AHUXYOoB1wA8O4HvbhC4ZxnZXgCR+4CwC0iNQNkNtD3AuB9YDwDnQRB7CCQeBqlHQGYvyO0ju7Of7MGjoPAY2ZPHyV48AUoHwMOTZG+eAk9Pk304CF6eIfvyLNmP50DleVB7ATQOkf05DFpHQOdF0HuJHMBRMGgCby+TA3kFfLwKzbxGDuJ1aO535GB+Tw7hDbISvAm+/gB+3gJ/xyDAcWjhbbIKvENWgxNkDXiXrOc9soE/QqD3IcgHEOxDCPERhPoYjD6BMH+CcJ9ChM/IRk6STXwOkU6RzZwmW/gz2cpfyHb+Ci39DVr5O7T2BdmBL8lO/IPszFezqddAduWfZCn4F7TxDbR1Btr5lgDOkmXgO2jvezLgB+jg32QB+JEsBD+RxeA/ZAk4Bx2LQKfiIKokspuaganmEF178iEoB2LKhdjyIK586FwH8hGoI/kY1Il8AupMPgV1IZ+BupLPQd2gS92JoB7k0HqSwzqPHN755IguIEdWAF3rBd0qhO4VQY96k6PqAz3rC73qR46uP/RuADmmgfBfF5JjGwR9GgzmhpDjGkqOrxjiGwYJlZATKiUnVkZOajg5uRHklEaSUxtFTms0Ob0xkNhYckbjyJmNJ2c1gZzdREiqHJKbBClNhr5NgX5NJedUQc6tkpzXNOjfdBjQDBjYTHJ+sz4GlVzQnIe3i8iFzSUXVUUubh65pPnk0hYc8xUCuaxF5PKqyRUtPjgqgQMqBXJly8hVLSdXdzG5pkvItV1Krusycn0ryA2tJDe2itzU5eTmVpNbugKGtgbSWgvprYNhrYfhXUlu7SpyW1fDiK6BkV1Lbm8DuaMacmcbyV1tInd3HbmnzeTetpD7up7c31byQLXkwerIQ6AbyMOgG3fsa4PlQZuAPAK6mTwKuoU8BtpOHgfdCqO6jTwBup08CbqDPAW6kzwN2kGeAd1FngXVk+dADeR50E7yAuhu8iLoHvIS6F7yMug+8gpoF3kV1EheA+0mr4P2kDdA95M3QQ+Qt0APkrdBD5G1ehhGt5+8A3oKxvQ0jO158i7oEHkPdJi8DzpCPgC9CON6Ccb3GkzodZjY7yGjN2BSb8Lk/gBTegumdowsh96Gaf0Rpvc+ZPYBzOhDmNlHMKuPYXafwJz+BHP7FOb1GWR1Eqx9DtmdgpxOQ25/hrz+AvP7Kyzob7Cwv8OivoDFfQlL+gcs7StY1tewvH/Civ4F+X0Dts7Ayr6FVZ2F1X0Ha/oe1vYDrOvfsL4fYUM/wcb+g/iC/Ua4P4j2F/EakKwR6f7nXmD/kAXII1BEooxCFY06Bk0s2jh0idEnwZAUYzJMyTGnwJISax7Y8sSeF45UOFPjSoM7LZ50eNPja8kdR8uBe4BW3q3tMnDfn4QLYkoQjgTjaAiOheJ4GE6E42QETkXidBTORONsDM7F4nwcLsTjYgIuJeJyEq4k42oKrqXiehpupONmBm5l4nYW7mTjbg7u5eJ+Hh7k42EBHhXicRGeFONpCZ6V4nlFvCjDy0p4VRmvq+BNVbythnfV8b4GPtTEx1r4VBuf6+BLXXyth2/18b0BfmiInxrhl8brNQFMa4oZzTCrOea0wLyWWNAKi1pjSRssa4sV7bCqPdZ0wLqO2NAJmzpjSxdsd8WubtjdHXt6YG9P7OuF/b1xoA92+uJgPxzq/8dhBicYPhj75c/vf/nrDlme2mGebgb+z/IDyUFdYI64y4Ll2q4gX82vQJCiMri7kMxC0g2sdg9IuNeC6Ape4B/oi5oXJjkPeAMr3BPqCjMcPkA6LEPLiCqruVDtgEB2dwwC4YakHzh4GxoEbRnp8hCkwOojwoUD13isgQuQwKvdbx9mQDxBQmZf667ujnHY8VRmgLShHpgB5qEeJkCHplC4KHahDi+qasMRLfQ239NsXwLwE1z4uAuWcWlzN1RG8hgOLjCL73iBcFw7jTQLoBj6rI4MQVs5U+6Om5FLOQbK0wh4yiIj+/X147ZnrKMIY8RBADrBCApExyeWEPrIn4qVa4RPvEigji0BwklWH4VXegfePlNrBVFukos2d4J4TeHWCuqBG2wgCiKsUV5/RulziotJohWJ3uXy2GwNmEe0R9xXqojgEehszlPMxlglCSjIKQ9Y7808S0c5C44JiBZDHosHPdBZCw4G1y1LhnrenwQQIgNxa0PpwCP3AoCYnXkEtnEhGLfbDDU1dUNUg6jtxtFvQz7IISKh9DCPOZT9OoDRcDkMPwTWQw+BMQGEHgtOgXCENEJ41WcZGwW2hwvHLYWtUKaYAApNoUoHaV1XDdQU4gfYezIGAAcTsB3+rYapDmX3wc7oCVX1/ZmP2d/C7zs/VFnBwd9WqQ8UHD0p4XfKkfMGcjpK7fZxLCbQgeXcC+XDroAam51LKgbC0Ju/PBysMSIkAqatwvcn8VTKKnc7Dl5VJIQRAiMWX/eQk4aE1gmA0uJ4QOy+t8AJllsr5W1XBGn0aWxEtCIK9GAUKJfglu3rFANiG1KWgLoYnRO8siWgiwFcHjduHocBw/a6ghAAzW/XceBAGSUIOAbPW/XTi9IIcsiJWnmHXm23YcgkHg1psuvLFW2fNh0HbAUxiPBosOQ6Qs8S/fMzJCCtZ914R6ibIM62bQd6B71dVR/ZA3e9x09S79PRWJ6BHc8AU0AWZUFLZypYYmGAIH53G4OALYnDcwRQGAAByg7l1sAKn+zAjnrogDmklPJqdS78SaSiaQ1gUeqQoFsICwvYe3Y48Pis2SbFjp6FWoEU54xa72fEkROzuzCLQrXamlCmRHulljlPPOZATGcxzDunY5IqgMxR9Ij5hjnmUMvk5iyxSMwwOs0XYvvJSGXggJE926CJ/s+rE5EjbM6P4ymxFty/lpQLB9GRqBiAB74FHjXf40Jkl5YJUHWpD7tMebZraeIUiTbxFi+O60ynIhZnkB0o1bi+UQ1/Zuxw9AoO8agUDxTIlusDSbYQBpSb1oxnM7ALPghe9MilqnGlWiXkvLh2aPTPp6I/TvdiOC2w0KDkkDQHAAuPc59zlu4Vhj267va/jgNIo1qvu9ePj+STSj2tU6AvLy4/Wz1Wxrt7BaCosoKLIuUciA52FOL492HMGLiS+636IdvlV1pdhNcJVJbvjz4FQV0e10wulsk+C4LHdgiM8gk47Py9tYnpLBDLrYxg+7iyrcKRPMnn2yrs1QA9FiLEQt9bpBVym3o8h/u9s3SDPg89TKQAcv5gUz41wncCwPh5R6s1bnHYw2IxLlUwoEWM4gWHHidQG/wJuChcF6pflw4BHeScp8BmETYVjy3HyhFwXgfCbSXupzQ9V5rgHPPx0DvmAkb/uNFxA3yjFITdZ9DASa8Qk9NRH9ZqVxShjQGLyHJLDbY7FfHV3vdm/SCms2mixI6WKZHB+5R4u9eewz1ySACLTtXnz8q0EOPwAUvQcgWwcS2zKIk28TFoJOI4HYHrjQQEtBFqFIlQRFZWrUEjwF5yQztKszZBGSlFhR2N2joiV/Qf5F/MUJ/VozsLToqPkOYAaBUN2EwQx3mBkZbfZt500rUj+gg/Nfk8FH4e9aGqE88Z95B7xMJzZ6Q1UTJ2vGh6i+LvO1AzoA0KAxBfnAPgcObNr3E8k+ve8xyKiKTnoQiEEcFg3e90irrdGaQtEHXfyqVUShbiliidI1pM0PcyJtKlp943N6o2TUdUc5TrPuzPIGt1sGrjdEy14WWxYsyky+WBs1X3QX8CFUPyyZNeiE9aE/rj7CdTro+szZqLekNswKnIGAikHQusn7j/BZj0SnBmmBAjfujXRRZnEsqyuxSPD50xlIVCKhMQucaFdqMxnApJf2M6yxk++6oj8KyYe8u+hSAQyxvvhSbmQ1vHrb8K1rv5N122eh5NeXAGmp34Igfbu92PriKaopXG08JFE2WzG06SGSwctQab2XVcWoAX57fibvkIz9HcUf2kXL6kT98awhiHX3ToOGOEv6EZME7meLtQi5MzPD5F03MyuzAisnaT4rO/za+IaCal101+KossXixE1u1eNgwikfTiD8OXsaZg9IUuo2yd4XLNSRxGpJlVpVvkGHPJAhfWbyl490hosqu08kDI155ON/ywwF1UQFPCbi+6LENZOAhggMT8/zS6ZLMSxbxA8GI7qDWABRKGIJB+JorWFWiCCvUkdCH3yoeShZKjDLlLRSbtsiqIJapTN8/cv5wAcZMVO/y6swLuFlK29sRAMf61S4OYTN1vfxD2tBv24n6UOgo5LCXohgWGUFe79cdnvql2chUL2vYhaMTmecCQbYuyU/flzs4VBombW2qn96AM+ZIYcKiY5P5EGTWaQvJ0TtUN7afc0yf02V+sTD39e/doHvzQ/GQL/fc2ucAyUzEToA0xPAYaEz+JjInYWwSX7X0/MgCuIHaE7rBvWUtYewwdLXBaREC4GkIMUBkBrHNBwUwu0FABor7SN9PqFqPebj4woZYFeRNg0SD5v3Yd0DqsNHgXet4tTKkzXAROwodMvcGHPjk2TRsbgBi7KI17t0KTSEX+Va1j64a9+hrra3W+ciuQtLLMZxO7JZW8FNrIoTC/VZGPcTC+Jcg78rwoRB/BwTU5r3l2Qu3V71RWbFXSJ9R7WDwtbyET+FZP0np4UtGt53MqIehTndcxAhPt7jO+QiqgrA91i7WdjIBtMtjK2F8LyA2izuSDI97BQxYcjMmff47zw0lRCtOMV3SeKPPwCNDuRNjt5QK93hN1uvYytVgvBEUuLQje6TlkJ9Rzdc9Ixqf76cTynbyk/p2SrVuhObVRKveondym1Lo68qtVxAzce8w9clpYpYyjDmwZpigrELQE1s02KKE04H5HwxUJz8n5EecubjMETrOZOwpDKfNDz3txhXNgbelfXvw6W1g7ltHOafu/hjvb9qyOxofgxu4D3CvHyrRw2VaADNQCz/zcaSoDar2UmNPu1Re18elJpL2oT6HJJdzN9QpTWbn79fx2V1TXOnuyKOXSTFR7tlq+V0q21vkKgtglAYbksyT1hDCCeHwYXs00m8aejaLxvDsdhgM/VK170RX0hIbYjgWbsymlTpqdAulzrKa7zHOvVuh777xhe3Ig1poQa1mm1llFjddWNG1t21zO0IL3yh/u+4MlgAnh4GilWlasRdftjosf6HGNxKOZ6IOEc8KwbrQuYk71WENqocblqlMtNIAYBZHCPbZwMtnIpBhuQJyCqpRtnKr3YZAxG0G8eyY8DFA51GDT+olyf73aq5f/TGCA1NriSTGe02Wm9is/HBpvxaFjHfbI2WDcm6dRP+6F6rHNs+P0MGCjHxo4l2qSBza6b9vG3TmPrM1h4OU/pSLov7a3wsk06/r+Td114O3rXLi9bJZJ6Ms1awPIoV75IkxLJ6fC7o7kXqWQQ5eu6HlLXuPM280QHdaCG3bJaLyaT4dCWeDv6Ic7IuUE+eJnk52hdrvdW1xreMJ+e0lpa5ZnQLPzEzWZX+Y9nuUdhuC//H+TGTAc7lzuSQRhG7dlQ5KEe9v2Z74wYWDAFXXmy/o/1V09k605jxuk/7fsvCXl9J4seY7bw8+bmUcG/0FeEsPSHho+rWNTYijKGvbj7SJFBgliW1k402/h9MraG7exV9EFucWNgS5C6BRaNuktytaFuwBpEoCl4T58y+OSv59vDiRfeP6j8yQ2p/0p5BBzVtpFyr0zDE3NbRScg6XWAoKo/9gMCTdps2lMVW0xX2yf2eKoUgnEUCo6FbLWx5sCbcqRmaG3mIfSm5NYHZjrc/4Z/KKUC8YlvQH+lj424Wq+KtwNT+WfJkcKlCtniJhFmrWX4qURsRKXJwf5ET3yejOXJRVv8EvAC3qtro64NSwg2mfFClM2AKLPbTEwRIWKEvQeNprtLif0uBT5e91y2ZdRRmTZ0GnLQMa6Gq6wreUoWVyujUyiIzTbuvGDfW9mwD/IulCyzrOvwSLNiCijsBdxLm6LZc17E2JkdBSCy9wWQBV8ciQaA+G2c3BukyaN2ZdSBiGpYdpIP2/cacpf8nRsdunVOG01KDEEKesuR8cfTkeuqGvsw4cfj9C3boPGYVox4iCbE51z0spIOkjxkyKB3NJAi0O98aDgpWJ3eNNkQ6g77A8v/VPIxa29N7e7D6yzTDon8vytlKGDRIOtw4z0URVsnHb+4EzzqSOIu1GSuD0XtJdlGLnF043LUmPfTv/WMQuE23m1YGuK6AjuEWsbCcsYLRANwf2yTUsRACJTyAwYYjLjUFJ///DxuVhhcoNLIbpy49RoZgXULWQXsyzzIKspJ70zH8vqfzZiQ3ud/OQVuAhQcPuR5Rw87uxFiMeOsj8HaNVBY1PNWQwjDXr0YukYYuKm6eOIASROOt7B89a8bYXel0DoSvn5DIMsrI2UsaLdEeH1DKaCdaY0XXHWFa1i+RJ8cpucSqu8TQ8V53JY53VJVhbqkTwpYfsEp0Tu74rPbp7dEgPICnOY/4jQVlZixESzEXPWnS5z/mMXjOdEpKo9mNAi9OW4cbwaASIIgqT0nxr+mYdUBvtsjmAyA6iErIazlTbQF5Pb/rBp5rDZt/Y+Ax5K8r2jwSX/YLzEzb2ugR7ZGD+TU1vWfODLu/MmUhzyI8LSkvc4b3Oh0bw/1BXRqr7jJygPXUX3pY/g3d3o4mtRQiJg4ADVJjQAKMHXmVRwb5A1gWhiih4SA7CqwhUXGRVdeHb7kJKDD9oM6Bunea08oWBztL5Tq5ue6q5VzEDl2JU97QnBFWg+8zadYSKS/M4cGkteK7zGq9CWFeGDCaCnBxNPqgzmc3N4yeWdU00m+Joc9qHkaOYvYh3jn1gC7GU3KfGf+TS4d+2mHO7c5mk+OWbevFPdS8xGFZJplWahUFutMQrXljN1KkaZ9e5X+Usiwm8d46TH9CfoS8WEVe5TxmPfS5ehsXTCMsIV3y+tJNo+rNOWAzwDJ1iNFpGJvQCAkb1skY+cDYqXnNJ+Bsr2IdK3Nxn++SAbWlt8ArQleTKBGPVfjh9tGk8TAsw3t4BR+1meWZsQiaGTmPGSJRsrR0bWxTLn1RZJoRNEAL98DMshdOjGEQFFV+KLcmTP+S7lP90LPF0blCJT7/GoG3/kbnMVYjb4GHmZyDhS+eR55hOvWh9qtG8p8SsfzxyRUy9nm0NBtVOeGvyVifvafn2Xj73EGRvbgolfM8b5OwSp9nOMMN2DgFffFU7mkGgVjpq5J0U2/9udrbmC0fqelJ2ExGCxtdOLLiUK5yiQwr2dCY5bG6R/VvYxVgEaM9qVjrmMGJcs8DSbRjjlz8SRzcNFq3XL/T048zIKO6+zqc8Zs6ZamzPvafAWei9cnormFlV1EaWaAAoqhlTo2ZmE9Tgij51ubkcUF330489wcOl57+DgSX0meI93n9QN6+J6/4BLnW9x5UFrQv+OtRMFg/e/fkfTMATSvj5L2jacf8bYNHxKHbNnKraeUk1HaWMo9xBNRFcfciGP7panauDcLWv5/j8xOJIpZ1EZzSCigvC0kXG4qtsksoLcjth3yDs0498ldjnJI8slxQGn5y8JTc+pNiPGziLmlEtwRsZIo/OLuBONhQgFEIsC5HF1FDCU2GskG6hRVup7FD/RBhMUF3AvTTQCWANoaj2773KeLW7tKWCaPDfHafFK5k8fC1CpJmknUdEGxkTxcpxTtf5kRpGn66d9PBzAlhZfd2eehsUXVfmwxwaXRotSr3yNYn6jYJGFFxQx9OfpFqQPGBdVMLjPit1CSkzSxmBDELWzNwa7nqHgTyb0KN0vUUgVeY5rO/E3vIPHrAkUduz31cZzbqf0l1NVSRtdV4B+p4TWNbORE68opVMzf0DckvKJLH8+/6DbhKJkUfCnCGWp81rxpVDpBkWWvuYWMafox6iWzinqUJT5yYO5qFYssmwUf4C4Eqibc6ZLvCJaedWPh7Sx4KxjtCvQYEbsiH4KyUwgkdDfVX3EkLhPLBUgqRhQuw0wHwkPJXqQe++xKzAnapB+VsyPGnQQiblSg4+ux0J0gQ3HqE1X6mHBumBoohcRc51Gbf9c/04H12I4sz/AvRsSvw8nT9hFJgKyNKVWTc6ZSKmHjGRb/SZLfNGDoWumhddNoShUPAD9NsQVJDF/n83RHzQa++LNfJuu5GYRr+nDJYYhJqr4c2xEUCKXwMOP7nLO8p9ZCWelzN/SWRN4Vw+xH7B4Vw8hQ3DBwrzHS1BSTti5O2kKosKZVoRR77a6QSO9bVO83RUCAevknuLKixuHmte5yGLdrhAqLG5HTysIJYujuoT5IBoE6qud1BMyJ1UGM5pYqvJRgj+xBcaT7s11U7Us6u/cHd6zYESzAwMkrynMJLkZRmQ8Yi7lNnrCo6jPOiKFAfxIcYbXqXwm+ly7VYsGYmTFpzknbyfX8KotHUTGoy68enifjRtyXsqLHG5M7ZleNBHTkSIihG21NCV7Yj/xafgoqIkuDm/UbXWs3gPkX7CdArRxDXQ90kx5yi5t0cGd92+zrQAzOwBIJGoDG+iSSA134ndZM/we7rMhmTEtp1HpsZqMnI/C9YNolU+dgQ4PrZtGurNwhpd0AsxPZH6SSi2/kbzOkddSrdVHnZvoilA9x5zGotwHB3o0tlQI66v/vzVvxk/79uZ0+8kW/zZtb2jkke4pfmZCtbrGH6T5oLJcVCW5PAJsQRfuU4sg+MrxoyOpQYIRKrnBWyiYe8P98LRzS3q/YyNziDQsLTXe7qdZ0h/l13hNZ7EcGz6FuP3B3T93eUxtf9vMTnOsg/xiaOZ0iJTtMXM4GCP1TD6hawiQ4DE+XpUD4AV5lhc1+6+cjH31koWwr+jbC80E8wHF0oZDEGFUI4KC8tlfodDOgTBL5w7U2IO7mmDtgXHoZLNtkKE0GA25Vyq5Eg1MzNtb8/jcjIjVZ49iuKZWHz6a+WBlirz3cNpGtqTpo8xnq3HyMLAfHhmvpBNE2b1lCEeTnfdXZ6+GKdECG+nkvTSz9tmKitmkKK3ij/oR4a33o5Q6Pl4OoII7hZoLVnOD+IUcruHfBi/M4Vz2UK1ujfX2XB6sUrxuyp5y/7f/NTYHLo8drjMkf36aphJmKG4eIyMx3xvaBbNfnMQLTEbGpBPQjhiZZfVKn9o8cn8eopV1VltdsgR0IwJhDesh6Nzy6FLyManCGdo6p2yosGp7jO+LSLF1nwYIsZVPUD5PLWtUgDBG76zk2ukjLDeFXTx+TdK6cZULT9IpXFwk1h7mmRXCbhdlB804yXnA2lWvf0ZIUQml1zq8syu8OUvVCPETYVZGsLwrXM3jSfekPnATAe0N4Xh0+BdzwHKgMnnFJ3liKs01s+7ssJNUORL0iAc23evoNDOoZNXYb2t1eYxGm8d6cBzmuNrx68yf5bBglq7nZNxwJLR2Mu5GgOIHh0Fhpe3JqxZkNb08kJz3eHLO8050cn4xbxs/v6NGycPC61EL94eYpmI8LmG34EuqvOvuRFAfQYniuRK8/+svKbrj1TueGxLa81pAbEx7QFMIYAhjmYp8PiRSlqaNRd3OY+7p6GUEyZH6UdoE5kIFinLWL6SCCKOOtH81wWHsAdhUS+oWzzJbvQe/FFShdnLt0NR2qqk0Ve/0H61oDcI93NZxq4LUUyQt8vyd0WpspLvMdSFfM632thBUCxpJx9h3mhVOqUIlWnAoOb/1G7UWGfIYE4VCkXZmrdanypi0IswfKQgC1giMYAbpC/d8HGlAi8p/tGzRmbVmRKDWyPrFdldeCUhYgo0Y+NZ23H+IZHE/ioHz+pOWlFVpTiSReJq7b0/b9hXKKBRZx2bCjA9RxgzgBdPj45dUHiPBrpy/80SHZ1+nUmGavDFiyMl6XOGlBmlWaKs/Smq8XWXJHYjlRsuMsrcU8nexWWJ9uBcO027BsEGw7MHPEoBtVDe0295L9VNp2ZCN+3ZM1kDSngxhsUaJSK2uCYNolWpckQluC6INPlA+Tet6KpE7FfldSG+iC4tNvxj6uATFuOjLC7OoZRzSq9c3Yl7ywhir9zvWGlY8lEaLbAeKsu5gQ2t7zYKaccvarO0yKmLu3LjQEeWVb8XCgnXg+rtV91b9w3o9ex4YJMrYZEe+bTXd1HKYTTHscrcki3Q1Jy35wCTN1cX1xFJNjfnldALpfDMvc2o15j6JFrn/LRtGa0nZEnPTZa6wyRFqAaHhlDAOsi6ynVzLUluXqnZxYaUzCWShBcw4OVUz+jlsljasrAksqM8onhBjA+qUX6pFltz22z6qSNxUxLNXislLacB/XlXZff6apOQQFuzuykIpANO10s71VJ91FFT7odooFZFU0RGp3t9bfnf3oWLPlJaEUr2i7xb9AlpXppq6PuCQo88jBjSvHtB71pKi0F2RstYF0yvr8sppoaWkS84cGyeQUxRkhcu+GMrCa/AGd3OCXaOnZioxL3US9VXU3fUdCmRr2No2eRdi8+w9E2XopsSOwGRUc31UXY0i7JiBcWeutlVZLXe2NTQqa1WWhztKRpo2uzu40jS8G0fPimrHucY6bZOsofjibP3idQ+lD+/+bf3B29G60labqqy0/wUn5gUr3rxPURil3BsK0Ru1TCmjD9V7q4PcDqIsxpr1cFBHstVMfSePRxel6O9pDwy1XHHjtqrrQWML3pJYOcbUtNr02bLj5Ltcak+lNH6Sg/1scXbJPTt9+xZHF2w84W5DFe1h6fIYQk7DhUK/nbTmVQb8FMgoLCbTq3fO3Lq+REgBGhusqENLdJSqh9WwXvYlqYKVvYu4KshjtYugD2TLDFnRG5mUYDUfSbqz6p2RDpgMlEzWJAFA5B9Vza+yfve2JYHgUV5koAoJ/9IFcLwPfBnIZfCBOou/UE/b2T70adkr1ZhC3YUXPijedqKtphhHY/jGmlQ1iN2VZwV2hZQS4lRYU6gbE5OXopCvFmb4kMk22dF1diJI5dQue4UJQyarNfJORu4ZjZqls1pn9848nxCsOAZNrMCkVMH6WO2K8TV2t3pgE7e4LyAMOYnIUgtsvo+ImG/lNnUCPzQZieTpq3B65vBZUR/aeRLvychUM8sN0yKlMNBtYEUJOCcBfjBah2ms7Qk2ovNdr6qe76gAM6NPfElLITytjd81kdqDuQs6UfkAJtxZZyjYKrK2fnIdVPfUZSEfBz1YD2qRWm+JKvCJ8U0AMKCgx3KPauOlKpJje0UNXCTYqgoyt38opfqIJyWIXH/moz/7sS6gAyZW+iPfcqOy6USfHvm/ep6XD3/bWXxv2MdvXdP1tS+fWWKkvuvM8J4yrj7E8EyrrJdBJfH6MwTHMAqou5BNFmMxjFM/LtXJKxpWP/MjSxQq6Rpy1Cr8mW0vJnTCqcGiq5m4jE6lJcZ8BklCXFZM7Ym2M2UkNIFMm9NllB0vj7xA+KCpmV5J/NKJxQutMdohFckS5ZvnqyrE0qY23X+n2wXMHbtw6OJ90ojnLGan7NyStpH6HZJ53v62j+E9TUMLvN1l20As5MfGhXubXCDWBPpinH4gL4cZMCqFy2+YH3Uu9RqdVi/VCS2W4NHgzaPtGuusYVF5JyZVkqLhwNXg3VrYzW495T7SOm2Bfp9psqZBrWFMLOfTtSq8Bwf91hDj+nV0wwPldoMx0efcnGoK2nSNzUWZqdlGsdOXV8qsc24jfygEBe8vOzgAV/7Gd39++2VxhQNl6oC9a1loqAhl72e3XhQoKDe5+NaP855nv5cRrzTqw9EMxo8njFExbZzYMzfaZrRrYZ5Or1NsL7pACteqRWXF+QQ+7vHbN5v0ZMvARRUWho7gFrxS5ILYE/mca9aMXMMJ0gAsrDPwao/BdKyF5fgl7joycwXKtSn6AjgNKXCfKqjjlE2WCi3Poo25pxOk3IRDl5vyXOUuSZCv+2A2gTy7JoYUgE+Re4NLEvjpOQ/ozyfvcW/Qh9kM0roBlxUy1Y8wl0wGSAu8PdNDNE2icdkZhLloMUQK0BYDav0K/UEtWTcHjVk2QLdqW5INE53XuQkX6F/mJWBoCcmDCQNamgEnCDKvC7kAwipNhVpe8XfFCkeP3xR7NjrDLfu+7e4HW/VLE1pa33qpdlGEMyla6cPfueCwWP7s99B1yvWRFEaJYiJ5dfckracYESvXx80zOdpkfX07R9e4J8uLSx7vqB9GO7uokxz0CjfTsXdfoI1fVwVcBOZmZjMg1zQZCGiWyhJOT9ud/X4mimD6w3374sA7YqaCTTmlLrhGVLSnc7509zkRJLztgmNiz7MXeGDgdD6xIV62uu7d1+Er5KbYS9zJn1yUpmAMWfDOklavyub/XNWtYMOihzvF5Ncxnw6wdpBnOyMhnRnzFzMyhOTGp6KRQy2Stb8oVVnNqtrivbq3qm3M5hx88Zma04rKyDppLrvMXUjw3I/WZZwWzfzD+RfmnmvsrirM29hQ6S8Xn2/Uiv9wKrNevbo+SRXhMahIFFIClRFxwA1V0nM2ZqKw/rjIolZzoE60Ht4D6dJGiQh7citfu69RC6XWRatg7+H4AiQrO998F4xjQE0VHGGAW9/FplShOr6KakRo+9b7kBnUUHz/hiyE1i+uu57OST9yhQFpDziXutKO7AndEu4cscgvfjWU0HPGN6F5HdFoFTlgduWjR8Xo1g0f9eBd335ORhCWq5g0GWSsLXFQFuQSReQHrSrhrm0YtfhJOsdTSqxN55x7mJ3gtxW+j7o2PUS/Qbe7OjkB3TYLD2ILk+2XRS5JGqPLHVrLD0x6KwfHh+Qd3d1P57TXFT7GXDQYIrU6LmiC+cSBkVNU+0BzSDEMxPJ3HY9sP30+m1E78C1j0dOdgixIC6arZtVOhk8aidrdPIjAqWl8mzsC3HXUDn8gP5q+wWBt/rtV67Q3xZcLd/6h7dhp3pfujsNHOeOfEXV2adLQuLKtMmiLiUOhejVI+0rxgLvfJezbkMhuvx0q0N+K3990WpiV2ciigomJPlDl3bl7PQa1ZXhDqN2LYp+xzQk4z4REzI3s3OEYd6R06X/CxunLM2R6Y1rs0zvpD/T1ZJL670E3awU0VQ8KsMalnpxun3/hDfYp2vyBCRiTF5Eie/rfc7tvbpHEZHFGldwbhLaawJmJq1AbrpZxI8CN+T5B3Fl2pTaioLQMQDeBoriBrjiYrjHqj2Q4lBFXhOgotOwfbQXkXU51URmhjOf07broOD0J36ybcUmdiC6+psBc3fvx2k37O9+ExlxOGX+n5xRv3/ibVFK7VBtO5+9B3spmgL553fxu9Ybz/fqeJffJXjhO3saiAs+JDVZ65PSpPu660xEwmsXg+IIhPlkhTWbMxOy5yGIfvSzIGKOoONbQWZSgzaNjQT5mUsp6j/Fnqz4UW1esZnV2o/O24smZu2yEVa1BUlEXtxutRi1Ja1ZzYJrRtaPNdLSgq9kpWjzZZ2mGEaJhcepSnabL5gj5putt+qPDJwR52XSvF7dgp3J/Ln9NMMN8xZ3km0/xfLP22c1DS5ckAUkiaf5vGMO6xYQT46Hh6v7o679uzrz0dzqvb3z69JCgogo0arrY192cuv7JRv7kaLf70caDrdkX/3aSpmDzs+KyxdxDyRghTjj4+vVxxuaDc2iZg3hWgRCaP1TQJktLr5YrGpcFLN/Pc/3WWZBNwD25ztfjv1UvMcXeUb4Hy2vBM+7eDfhTzkPisB+E+YkLA5pL32WGDa/8QyTxb7lwNcX3w01smCL0azrC37+QFrIxMVq1UP5rgSksOm+V9EwgtoQr4TwE91bLQocG39tiLGLo1ERQJgW8zpUw7cCkBdud98Ktzv2AxP0lQcsfWIPcWTPnyRL8VDl2CsKlw6d9xtFUDBQQhQctXDfcnTnAS/qhY8iMoAuKZCrwU99yeJY9hh4WJnEWui5OSFvRjGA8+8QkI7tiQtOZ9/RFhWkaE/eKRmfpBRAYC03glp+ww2XSD5pI4jAPvDrSfnxXbnYaIIJ1iTLbyYljSl4Qa+MABLF2GzhjVjdqstk7APR4zqkBBqKfF1JbMsQZMW5e6lRE7gm8I6ZgNHObAjGKJ/reh2cDA05zUe7gGu3Wub7YCbrf5WnuFEqv8xGnr7EelAo+Gae8GodFuBzOgbUOc1JKJKvLOWDebVMiP5anO89rwcTzimVfrzDsJubT/keDVbp8Mvp0D3P2XhYVTQdnsuR4GYLg/RIlwXdDpbsb3U9d4Ku/hYSxLKcvZdk7lne4Gd13mj3VckzmxVP4oUVbQme92LmU8PooS0J9an3rTXCNyVsi3t0ooZV9IxPxtH5cnOg+SF/UYi91cm9CTKWbhA9TL3+JsA7u1VKnr5euX9kRejhODl6wrDS9VRYHSi3RyeJs8YI/WFhj/JQ2v+TWxMKcF3ZOYwEtMlF5ArtcI9q9pXWoPXWDF6EF84+inQkDHrqxaRRsoi7eX+8gTFhfpzl3KWLsf1PE7uEa5bejhMGuXXhSms6nhmSVdCRbNqsfcqqzm4Sd+z7wt+lKF24i0VZS6rcli36h6oHfTdwR6I3TTqKpzsPepSu6z0EQEzuc3HBZN/x5wNqiKpvDfBHXkDMSO5fsvP0uSuMK48uX8JgNDM9JlyGArXcuG3fWyhA0JOos87SY6XCisdX9KhYz2hdc1wjeQpP7W421x22m+5JmEYvKehciO9M3JfSAHimn6kcIN3jqkJBAuDoobb2ch++IkvqESH6t35Zw8DkJtE/iaxJmMAGgfwkJcxCUlP9eqSqh4wPrwWP8BCWAxsL+1WBGLtglctTAieG5Le5TDXW8Yc0RGjxOflZX61MpizVTqAVcVSVP4CRv6Auhp2R7NZxikhzaW75DRB6JhtkH+ZeFXyVXF1qdc6RQtxrk45AgXwDnol3F/P6O3pG6xd5qMNzLXzSgT1mw15TdG70+tzMCGNZYL9ebHKRrKvT89GI007tihB+9aFGtOd2vNGs0EV0HItdmnwZDWfLwelwshX79fjDQujpfdONtr9nrk9Do90iAYw+R3GcmsKsBpTvX1d51R+KeP7FjlG7J0bgHX/6cR4f/Snv8qU/Yxl90D3dzdfpUdeWjdZuHri1TEdg2qt3mcCJS7QhR8pJ528YaUwTx1R5s5CtXeGhtAU3lyISQikcJQi4Sc6mC5YGEQXKMf+QBDIxDug+RsiCodBPY/FB8XzPbtZt7NIPuGalyKns7fhPfGt4Z8FIhQBBz52YtnhTq/xXcX1rWsJMvJXSFE8LoEcS+C6IghAuukEGUicKfD4rwGX9LIrbOCmOwPnXNZdNxvUlVbbU9bnWR3njS4tysqj1+4hVJSZFN7NJkX4Kl2bn7pSi5BPr9F7ivabDcRqm7ts5bE0+TRbXld7ZBm8p86VSK/pDPNx8qP9uhBAFnSXk3PbSt72Vl3T5C/m+IuZCfmBimbYzr48bRYc8Q9wF/cXUDYqlRA43e2dPQ+CB20GktR5+Plo1d7DYncn5rHoHVqY0tZdniADNUP5tKj+aFv7EpH3j61YuIqHP+WI0iDOGbbbIsj0wMf3m54svQhbgAhg54z7Zu0MW/2DIs6f6z0hofDPmQu8ca6KvMl9IVbjcUni0qljV1b2AfreZm/0lotUiUSumLbGilPU9wBJVi4yfUVR0jf2Z6FQQscJaP8KCF0OOTfig0TiNhLMyswizKzcQ2RXCUoyNEWYoaZ6ZWffyAK8SpaHbZJcz9bcQSxTmyQYC4Io1au/rXkB04ttSb5eEAPYiES6T5wWbjapj7yyIGjwUANKG+ILyriTJDpe644V+0VWMakOSkXJEbu3NgH9cw2qaFyW2JNsBRsfptaKkHOZu9nNzDNThVu9QIS5DauBw69SvfDnAci32DWgZ0I+otsfvb+gsKK/YN+6nqf0nVq1KFDt/Cn94UKI4iF6feU3//+M6GX57gpdJIarEBcf+BuNCctC0s7JqHS+3B0t7bGLoAPVnPKQ4VPz476WVZ3pOz/Gxd70jS+lk7CeQY9+v4Eiv0mV81ydw31bkhjaRbEV6HJZkvpdFqjhgNnrPHXF19dYes7yZgxg4T+3MCeioDDYdU6eLMXXPqtBqkz9/S8Xf4HL+Hrx0Z3dCs92yDwG0AOc79FF3VFBOvsxC5g0L5xuw682M5y69wYif25DjvzC1HFg4ufCBSTtVjoXjSwoKZHsr7Eir9D2RvSw89MiJUoPuWKZZirSus4k+ZE6hcKnFk1ZxSRxsMRBuxxbxOOeImrUY8xRlEgDmA8h1q4dB0wJMwcn2HGGMOIRTRlf+KCGGs7J6KY6UYlLRzEu1QBx8lRN1FdA98Qm3G+7joNoIcdF7Rd2CLx9flGVhF7MoSUkQBl4wK3WJNYiO2tmSaVVrXd33pETAmm332dN1PR0+f5vEKTc5rFRoL4NnV79PlyoquyLHfYNdk2+tzD4DxW8D6qHzkw1h1//GdFtHWii82UPTh2phbYojcHz/fELmRkBIXARhdl+7JxkfhCv3tORsj9uGxD6h70GHiYsE98OuSlxnr25TzOrw9NjjZx1ZlKsaRuTtOwsZDLoHUWGPpPmPHZXuNqyPTSsu2kPY0Ro4PeKY4jqt1c4FqvDe0V/OjmmgLudjBs3zl/9pOUx4t5n9LNA6zgWkLMMYY6fOMFRNRKLl9KJngSidEQCjuj15PR0OXzyTRCwWtdCxWE6jXGqbHwZJ1DxA6bEiVcAx3WE1U1dHqU3RQV4n0ztXkyi0rPmzmVuWAuSrvXO/hMwBDoR0RbOXz/2vb/O2hGu/l0eR+EX7UJdRfN6AuzCxFFFau7ytjRJUgnr6E5MMbr4rviHGy2y+WiwsW2jNEpOxdLPVW43VR3UQ36kBLwn2elOUCHtzBFnMFZavuwv6WXLS6mdbP7eOLF7iiv/2PcVdONOC5KH0Jb1kxb6LaM9TkSSHpFlKGzGGvmwjrTnaR9YDa573B+sxVoXbXquruNreVWOqepm4KVfWZmQeqFHnywaDXwusUd+JtXhzcir0+VkymX/lAa9jhiyrKCrIozgL8H6U5ko4ENdQYhp91ia4CZZ9p4LdixxFdngZncB9e7T7Ffg8/ckbFxvMxJaqB7vF453JPJg5sSan02a7IccK7chmYWfvTOyfJCyfK69R060BvmoYHPbDzhoeqsbCbnJIjFN3nCEhE3DuWsYOF4H4iIZhQ1FkseRx7RSYpQeMU9bh1NQQIdTu/aiOxkvqvOl3nhFH1Kieayp9Y/4oOzdAqjmP5xnR9FB/C4xwt8yfGt7GlFX4mgq8qxONwbE9O4MkEYt8+zsyytfN5ssbiR0y0W2lvizDofX5MoWdK1HzaGqbW0Ivss3MYj1dkp4TF/slj17vvcD1D4+l1d4KXIJW5xRtkpmi3r5OrPc00omyPYAVvxlvUEy1vCx+gZqcB4gLKPm9G2PUNLWpp2pQiRclVA0SDl4esCNJc+3gBMd8GfJ5lggb+xDdKNWQikDF86iCx85chvRAtD5FxMeGmjfHGuxYWtjmt3z/QvVaZpkrI1eQJypeW9X3jA6lmpCoe3C6xu/pg0vvLL6KFDHHmmsMWaAmbpZL2GfZsTWN3aJQxj3GH09VoGzS68uOXNetLf/sGpe8hVV0ylCW/ad1U+iLWmjjbV+Vlc+09xRYuijPEhHKhlMm53P+knZOWLOAn9LWgscal7+hYvFsfCaGmTsVKepH6xcduEyWp+8DSNOCgS8nzt9EXFRJhcttlED9KR1I499JQ/H9SSCTN3bvOkwU8eQSTE0Bd749CALNMQi9EMQcGeIkVp+zDI04zHFheddKrzvyqf3DQIC8GPctSA/Ahgr2O9GLlPHVUj9dXR1qYkwC5RAIVW60uLI0L27uA8gNAuMKFRpKBm3Dl2cELFLaZau2rjvSG+BW9OK+Be7//bCcLzBp2buvmYua3CFnLRTh4O1pFHzVm26nQkBgIdLTTdaVBcQSYzAG71oLvyjC1usUoje3mLXpyNNhKg0MmAiAdzlyPobpABnguUCGSL2dp8y9Gvl5eqsnTkCW/YvLrazsC15nE4SmdNKWbou2yD5qO9gYOiK7BTbq8JykpdhSN2Jf8+6VrmnLosKNpioP+9+kTrNLvM1qe9nDgg/QtYTTo42QABw14r9jC5qDfujO3YoAN5d/d5DGZa48/u+I3DemP+Dt+KnsTj7kbiyfdlqJlMDNNhmDW1HX8jRG0EJcROjOW9psoLfrR1/ieS1SuIEjR4UBq8b+4W7l9hURh3AI5txxl0MTtcTHXs2Uq1AIaMvHo3LL/8ZLkHYPW/VqOhJHX591lH9o/XTB7z9zqW20YE62+NU2NY2hoKKNodgqpJcDR4rq7rrh0Ma3UroUoL8nw1OLEQWRcBEtvRKJeQvggw4q4Xyk0p/TQSdT7rntwWyvqCKPuQj856UdhvXREb1jffEsCTZY5N1WCDAlRhCiUbGIEdHS7+l29rkRK1bDbEKsnV1e8Y+C3pWdz2jlKOwJgfR8ioew5UEFX1Fi7wtLY3XWNp2ecIWY9wDhVYX6fd8DjV7wZkc+JJoyL9DaYj7p4gbfoGiQv3GmFkMqUtcJFmDs0NTXuV7iGpU8TX8xEWdUmjjmcy7ZpySC/PbYPGoD94EhWUl8QQMbI0YPUWm64wBGiThBtwRRF6/Z8qrVbdDiHbiHXPWK6drK94FBXJ47GN3qOVHFdRlr01lapq3l+o0Zd7Vv101Gu3GJ3SyJ5G90KcX8r+E05oNRHuLXj/RfzuQ8Vr+VJGgBlYQeRSk4xgU4f0wBx+7FWaZ2Ov4j1ROLglWvQX1JmJCUEEO4ZeHm2M7BxW1dDJMDe2OElRds9va2xze3J5k02hyFjW13TQaJ5bHH0oF9sEEiqNOEa0LKVgjrPXWvLBLTq/EClYaeqQa2sIY4U550zfXYdAZ4EBEhngWuu9X6cgSiyqydX5CYttm2dFCQnDizVJcjntICS1u9LFpqda4hngVqDuOg2lGCFTJzi4w77Mv8sYiAjcIE/0GkcEgnynjP8By78ESxBD/DeQpCAGE1RYr/LDXKUudegSDHXQ+v6goRbYqruqXADR1R9OJQIFi1bnP7zAH2QeMb4ZOUaGQh4+1NjHU4T3W3Z7zAuIYaRxA8WMTpRedLstz4ptHi21Rji3QqjYlnt6TxHfb2ZNFYLBNGqn4qot8iYHP+7WDEmYskQ5iQTgyXY3tXPeNgLoGd0yps1VMG4wiLZhJTq1BXq4+TZ+6a9UZ8xVO+kKTXNGrp6Xf2uVEomTurcBh4WsO67wq2RwEsb+HXKHNTVM2QPDLBL2pO60pF7uteJK+vOs3Kg3jRMYoeBv3dVUQp8TRqhINoNGVnqduUBG4In3u4w9F6vdigZcNqXDUIOjZ+Y/PG90JcViA0Q2yKDvupA3xDQwqqemn6R9Vt8AK+2jIDQNcQHNC7JYpwDJb/PlxQe1bzmqNMtole6H4XvFnZ0t5p5+0i056c9jkYfD/Yg+DZcPk9iQKgoObwp88MDCqAM+X5WXOGcGVUWM3pX9krewXzbJ91/MNqTBy3X9J4KxTpBDlQ0iAGmuBzKqR2GIS9MMApLWvsxfQiTDN0lXNHChO++H5lUkGqvt5sXA7Zq+zlcvHiXnOZrut7eoIN5oQmI2MZZ7KdybKgpTmulaOMx6wd97TN9HhsuyIu38Q5aE8ykTe2lTR82VHG8zn3EQ515kU2cabFiCKguCFAR2LqWeEkiDD/XShGGuVMA2rKazilcKp6bdotz72ldobRTCb1amwsRfp1LDFEOudL2EhLzN12AZHuDzp+Dov9pB9S3LPxzpy3YCsNSoWbXxjEmKnSzuLZuIXdOun2HSh7vle0Grbmr/0pCoZpN+ZzMXxV3Env3QpYoCFSHKpFQphwVcSYgRVDlZw0QecTV5IuYR01vMh1wY5suOoPwBZFJFffOQemlukR5QUMLoSBSREdRiYtYtPjdeQSnHhRH0JjxtbtDN8RP/FLAP7Z1OP58LGl52iaDMGHGHVXAQGHnkUNwXRSpFkbfBzwu2WaUYWxdLGAQD3uPN4WSdri0x+F3do6HkhqBChB0+Cd7S4zWfgPjfFR5EfQGNvTla5+CfCcaetFYsR0PiVMeUgtDhtsQMZfTfioGyFFKftg0p5AL+ReV8H2K0frlqxzI563wFwZfnOg1yhzPiZ8aHy3IwhOO+rcRlJS6YN6YuGBHmviOmr8G1V9iammaWXU2LGtLppU5sX5kdIy3FvUW+m3pPwPlRKxqAOmkaSichZbP4NmdgmEiQbeAjH9kPotBa777Sh5ieoUHOhcegyPZFoh3B31iKDVsFrFEnZ73oucCbJNrthGjXp7jePMmi/U4uqvbpPLmADWrS0vCsBU4B7Oo8RvcddkMcvg3MFtkAsTWlqijvDpnmZ/DkbQKJ1nFr+uxmD7puJhF3u+iCP4hmKmZyngpcivBHjSkFAJqL8cUIBHrdkWK9HkyCKXKI/RyAQYF2RrDhh7z2KuTEsQlgexdhz799oBCB+IfBjjDGUws/ZyF3FRM/XnrwUqXFJB8NKyuPWAUPMBOfH5ZqQ5KOI/reC9DcL8/EyAYApRBYE4ygCDDGbT4Y/6p/XCu3BXkpnXdtNsce0XOSzh8YzgmE791w/dUuVnW4Hf6fVZ0msooC0Flm1rOYf98SWwU5ahxiTeO0m/oywSd4moWLGljmC/u9i0ZJqlTKy4OUhtAdmhzwL+c89vZRg1aECq9Pecjd4WYveU1HbOwAkxP7HBJLYwEIhgkGA+ZGxWHuN97zD7iV4eNtbFisGP2mti6dfyccZAUJXS3WyiF6Rx8DZmL4LG2BjZo8wPpaVwqfsfD6eXwW4APIzXGwmvCxH+v2aQ4MCeN7puQrs4xtdULDodSFFwE8SejC+qJ8SZ+qNBPv+pyyavfsQGOrxhfZ/JWzMTU2NUfMoWiSCaDbcdtBHeDqqLTUkPAwigK+ziK3a+fpsR13sDw7dN1uKLfP3LgXetmnI3omlWFhE+nCHK0oG1viXXgHuSg+03ho4gQA7CZexsCLoT6bqqTFBQKi3fmGtaL0csllM6FL2E1gVpmemVRlYeuqF98C61Gix5CkjlHbjR9MYt92sG5/1RWIslO1oN4Dvvq4xJ2tP6BgZQ5QLhHjJ8y/G41aB9xFzMpxf2KtPqKIVb/jCd9YKZrYfw4Ttbz7MnceC1Nn+TZepw8TogXk18IY9m3MCkpi1PhezD8+lDRH07MD9d9WleSygJ2i0d6wyleGdR9qimIjDLkUglk5+9BtPTogPpY+7yUd4FOKluAU/PjDMjrlHs1WP0TN9+J8bwB+h6rwZsGWGo76qeS3vbP08nxE1YpAYrXHoiNksVMMSgl0I7LCbHZ9ZlHbdXM5Q1DDPYonMwHI6kbkGIlJBlY1d9rAUHqqUmXQBoOcwxobv3pM9jTO9tKRraWjGrtBrf6WLuWVPngSVbbECkMLYEHB2nztez+u4FT2y9jSqFltlF/rvrlwobxfwg9znNAWV/qyIfRCL1XusSHLHaauXsxjNd6fIeVtBp6KuG8ggb3QBAt/LwYO2DUHwbLtXcIoMf7OIazTeMCpzbtI3mD2UnY5krk0COLgH9COjy92FG+wEfYLXiAhV5DFqcHOkDCsDcGSVzgXRySgeYl5+E+ER+DNBZdwVAeiHdDg+fpIwFzAKgXhzcEQpryXHg8PQyUlmboagZDj2DKsR2V4WQ2ZkhGYDDaGC/nO/n1wQhlFQUHHZkOrqTTEeTQY6m20CLq9RBQgIC5RqCXePkLeo9EqsAoCXV52dlwEH7ewKVCHEeVsCOAzEvA8b49CcOsDq3LbbPRG7ahzv0ZE+ehYukF8uO+HMiD3NWalwcFIADDya//8KWvW6IQxNb1MEDMVRmimKNlNb06FkKdJ6mawsckm48Zbo2/IdRxEy94j4c18BYvSiOqbHxdMGvKl7K/2O4es1jjzJHFL7oNyQLCQ/XOvu0CG0mwGiOPeShps0wEllLUIRh3N1eHxojHqSBXRfQyCxVK/7vC/21S2hRIgDEI/PtvFacb1d6bbkwqWi+U8CxfS9HOOo9FVLBso/61itpaY1z60APwJjVTxEuPP6toPlbA1hlLiIsOTWfeQ3EhU2n2f4r8/mp+QbWPtNYSvFKwOszqludxhWmgak4COmPVvFfMe8W5J3tHTxIC5U2lEabe4jQVE4VUNF7VEc9aflwcouIcmHjMvkJBTWFEY59SuSj0YsS3v7C/kq4/PhmpgmZ2LrkI2N3qxoHw6/wwwWz3q+Q+ChKfFLvGkXKQJie5+T9qTrlIRH1PZJzQ3JiREaOclOwVUAvmNQeVK32DGDRpB1msYBGg5DvuyRfwALSbtGRgjrRooFIC6OXKsC+bM+48IzOow8HZiBJWjbXRpbt4zeqrb2yxwk2h3pkY2C4fRGgK02fDQJg2w5xEvUXKZH/bKMDaxYwhu5fkfcy6IpuDanciKoSRdfczyJG3ey9Jj3u8O4TcguM9jkAZPUQDPoPM+0u+AISG1F901OzY9+PftnpUqgmAbA1gHrj7utgmrS94lQWRnUbDVj8CV52WOg4FUYDaba/ChwiAUikwtnnLXNW4uFeGAfdqLkH/3lQloU4jvzR5eDrZWRsEw8apmspwPxQX4GNC/eWqyL8lFTfY4DXkZ3OrgRx3hK72hsCAfw6a746B9xNohVvqhZtaKSWCJwc8Ziy2R5Iqy4njPmDavlLFolugzUOt0/+t74xa2/ucmSumxGmKiKj2XgvI/B1xtcZjp/xZsVTccbvglWLGAOvSltu/abMLDvafGX/xI9O/VyHW27+90n8o3tP3atCr9yffEQqGA9NvDKKkrmqPYDS4T/y8EK68b9QgKdSzUD9sAYb+KdaVVlFeUm2qCum7iKWD3Gyc5LofmvFdetZRyI9hA+pEtp+14Wcmb3sLlrFGocVQq6akdIXTbBVkz2sH/frn2sgHdHGFhO5LpiRILcY4SBUgmDR/fy/h5CEGQjeS0VobEYZ7hzsN597evvf0KDJGS8egtce4riXj+6fbWj9noTIOcmet0ydtotaTDsCduRrZeiFo9cQ/6PmdDnmnOUcZ7hEuN99udSrz3NnhaUrZtc9qE6RAqu3chTsjm63OneXUICzR1D+lzdQwLtJrj3IM0+8+Jo+ScbhERH2LoldlQtHf+PNR/9YHfx/EQ6j1rERHf1ZyvUQxsLpPpaw31qHn0BH6RHukhlw5eCjZid+1wKb4byrFHkX+ZNuxH2yNw8XQRNz2t/o0mtUuSM2M69U/jq00E/X+l9mcJodg0YnSTd89wD5H6Qlbs6nZuEq7cjb52i2kXevuNh+T87h9pOlbPrH1N1U7YAeoAXZ592zOaKciRQvDn9zxRG4hF5QcfcKAuBkRmn5pwC+WO9wxGCvgY3ymvt+rktY0b+GUdr24GqPFA1tQg0BQAKvBqmrY6xawxn4GQ1VYcD7i7YTM5O0x0hd7MbM46WwEOC6u67snM9ZYIR5j5aogxZuCZ4C51uEn/qx3WIuUwwrJdvLWMS158ywaWLO6+O/vYHOl5FB3y+rfsbbs44KdtJpzUHRT+XbNe1ddEsMAFqdKzp7ME+egYfBSjENamlubLdqG1a5ZaTUKVu8NNif/82mcTth2bT+tXq39I++xbQ964ALXeeO9BKlwPRYE5HB0wRCPFTXIlencs8+99tyLC8i1XXPGbnW/iq0OZ+jXm3hF6AqaSoWuVpNau2Sa4m0KPmng59Lq6RrSK7OfGYe4AZ/glAQcVd5fRQV3eb7FOK14orW8itW3hqUjqryVj2ll64a9kz4dOhrbFTXpREAhjyHgR5bDPjXedGTGqpT3IPypRQzlEFozUXQ0UNRh+K6bgYPK7N5OH6v82pRjlmLe5Y63jGKm9K6NQ43rI1UOHB9qqq9SP8q+4V0IgtTpoxXCf1VuO4oZXxEuK9H8QRoeRfzCOpaBpqre8BOWhtvINBbNt/rgJuox4ny1wuXlEA0EEDHTm1WY/N2AK0Tv+Mbrxoe4eZyJDUg1jt+8IY9xyQ9SRYZrZL0bJgIY4t3y6ewXWLtJDxAj4m2KeZT2pBvZNc2ET00p4MKPRVYIr4p0aTFtzbLUnHnOMJfky4BRxvlllG24R00GNzitV1j9G9/wsdDxanC0gabqADnIRVZ59MIai/Z4+Io8dsU52lRUUaaQ8ldPVFmLWoqMzURbraovhuQVa03W6te1l7d1goKcSQrq8QyP53E7Ym4NzFah2yOLNGZmqdlGlaRtTGaZmfA5bOV4Dg3vLs1JpJ3N1WW508VWI8cyP51zAeHINmX+U20r90sxAYTSE7WRFB26aX/HZMB8OGGqNxU9w8IJqnEpL1h4w/l22RY1XJ51dnIYl8drxx2lqjp5cXSKdlSFrCtXZRKqVUyUGfBdDWMLq7ZtJlMGKvsG2VT5g9plCxvTxR4zA19acwnHHLimwiNnb6X9CrSYgKSqOE3XHr5UaXHXTqbkReW4jnBNAchNYww3rj41gdop4tULz249c5n9RImj5+T8FvMWl26TyEsuluLOvPicAzC89ZprANjHd9opYojc2v0APw9x00kA282HIHrOPbC+ztGPYJLaHNh/MtsmWdjuCKpHagfHItNHU12W0xEEck7TA/YOuakrRUvsIEWgXBi6XBlicogXuaKe/nFNlxTWOcosvnUJ6yS3sPL+u0BY4YYitCgUs+9oUp0eI867dQT31djRGOB1NnNpCY8Qtyo/ewiYaqAaoyj9n7RhiepRS5pRVho4elAfnSNN7HJo+PgRzTOD0UWXqxCTW4Me589qyFyvILxzidY4oZcasTZKw/pEjogf/2aZsj3Z+FbXam0NtYAwXm1sHQnG/BAk0mGIVGeOZxfBjV6V4sIiPrZjDTX3afSXj83sEwnLCpUNF4jcK/4PBSJLP9hTMbWP5gQOQxcEgpM7DkG3tggREOQ7AyYqRvDibSK4vpY4LIMU5997OF2YJjXvLV6cWtWHzYKFkBQwpExfRMWhlMBsUjAzMI0Wu5VDVv3gh48WtROpVbnM6PYayU7pTpLdgJgPOkcJlJmHM2nGvIDyLGFS6s48fqJVaYIYrj0AjaJYzxvUFQsek04c1fkx4+c+TQa3lOEwF6Dm6AqTb8EuMVF/zBxln9+bUSy6NzZjhn1qKG/BvgSv4cStJ9clgUOdP2fzA/UFjsqAkDTTe8MFgvu3XDnOMSEWz27nxCnUSQKfN/qOMmIq1ILzFfZ5ew7z9h6dSvEc3H0o41SNvOFbshLmDVtZo8C3oLB+nhUfCkss3/ywK8OGf/A9uiJrKm9Ydxel5Z0qHwM4pvuCXnc+6Xo6r5uoYjPvFk4rFnMMumbxJ8rbRKr+ZMaFz0GrY1RR4IUI2zHWnhrIa2vzmAGzEZi/00VzxIz9bEQE4dvEeKpD1XI1EqHMCrsLMoBahN6p0tgblbSBcgyZknpkbUtBtIZejAAZMrZCupyUd9UAtO7SiVn7y1AvHo8JnO0LD3VozFi4RwUIbHMDDDm9AYJt2h8PJL3TTnKwN004bfqKUiIwZkvad+MnaVEGPjuHKVnVhmeNans3ClMsPyQUSrxpReAiKKpkKjXVx/IzDr42JlMl8UmGnoLSFuTD8LbwVqJPxUow+VkkdKR6pwBdmXeySWHpwyLY37g+lZbqzVUSoVBJAfyhIT7S8+BxT7DYAAzxL4TSNUJFsoKgYRecwsGtRwdbG4sCDNbPeXyThqpRmoYpHs1SxOa22NGWIiNGxmbCPfnwYjEUXVYM/O7Wm7XfHdoJC1LJrH0ixkmDjYqSy5ciVoPLIkSWy/o2rYAMDA5dkSwCo9EPVlpF2u95N2vShFlKI7afLazKkYbI8dZLNI/pzNWQRK1EJDbM7RQHzkBR0pyuMgl4392FFqHw2iNH1oYWfHgfshYt4hWhiPHug67GYgaUAsVhOmMEmoiqeZDBSORKpXAiTBuXsZmel4CaBuiJRi0MW1bGuKJKvgLEg9pMdkziCcKfUXZFxnqQ/22PZVH3Cv4oql5oP9yRKFE1qEK5g17ALUMfWJ9guHpMa3yi57rlCy7rz6Wlp+Q4NTjlFHhNkgvbkwlDXB+epX3f7L2WRVYEFLnYkNzbkYl94j4CRRHIKQDOB+tjDEePedwEHYcJ4VwdgzxMOnA0vpptCdusgLKzz+878wHWpPS7sICvEnnIq2kL4hJajldMyjsPBD9N2CIAc+pPt2boIlb9eknEktfq1WCVyoKxGr8atKaGWSMgRir1qv3ovSbV3wgfhbWStQ8PykhyBynh3KXF89cca1lDLcQOK/5WrHKFuPxDmL+AOK08mEsqZOtYgwUn2hlbc1NnqgGBiAExAIMOifmOUdYWamXxzGyUP7OwCm27xr6LWYTu+LFAJIDq1JncrYzEmVCTgEoYFnMfzschCG9+NDYsWIbYvV1tbVYdds56ex7Wp3jQ3HFrdOrbFbAHaf/ZPT1DY09xBqz9tIwPN78xQV/kXwrHi0GnD8ErUt9Gb3U0B32A+e3RL7SMA0zgVM2mOfk8sCdbTOIheB9e5Trrc2HVblGCPzQyJCwYG22xByTGuS+yWC3Psk6DEE6XzaF2u1pXZiQJJW1xv176McULi6hoodeOtzZTliz+KTbTihpeSohP2GAWxy5THdmSDPrffGpnt/OPBGLIJI1Gw76RBGJW6nkcn/qyNcCh5VO7RTuDX0ULDaiDeflHSZNEsGjSdrQdsSQ6QHk0+GiIIt8qnyFjvF7477FA6BqVdibxtYhpu9fOB2W+DcyGY8ZYxjV8HE8RH5PJdRHDiQAXyckGnX4YfO/e4gMRiyMBl1X/EGurxj7gPUzykJXYqTEP8QekmX2IAAoeF7AG0j0wuxisA9XT8N2RDLMOZiNOoqRxDfhWRivgikEeTsJcZ7YdEy0OrW5W1VFb2+QnWK8WA8cfd6iwS7C4VrpOvhinwpySmLNgC3VjonmdULAGp6W1/BpBSi8PCPO7B5pclb7rym3zQBJrzCDUCN34hTxTYLrleKKfxm3Ayxm2RP+GflZwPYDYPFKQHVphLLBJ/v46O11Cd0tL8+tSN1oVAL926nuaLYEh2jObvh2BI9hu+HyHclKII3ZTd8iFjHDy0ecp6kqH1E1PUQMZuIqTj0+7URdd7Xaq25aipgBwEfVtDCrG3JYgRtdueWkrZDwCmqJQim7NrqtrrVsdvnBMPmZephrHLsM9Q3PdvPDGvmZCO6Gmahc5w9dwdZQ6nFFIEBfhW/kcT8Mjr/1OXkutxd3lv1w5mGsAWeWQ1fbuYtzdSIUocx9gY7Nj6jX6si7w7B9zhfgjFktcnXt1S/1hHqPI/pGgV+gs2Ari6ZFpq9fK/4hW6C1seojpUlygOUhLzYGC8ecWNvu9dnH/FsPAV7kMedP1jeMyh5muM/99ik2xW0aMj99KNdy7uQcRZBU0Q0FcvNUy6/j47q0J8aRl7p4SOensr7fnEIDzQDxr8ZAQl0E/ZYYR/i/JDUq2KKxI0RSlqDUp7Yfvp9nHm3u9bRJZBj//M0bcYApD7VDMTEFrHWrAnBVOtLJDRKolieZoorA1pBpsdN0a2b1g2cbtUhwwFF0Vw5AGW0OuEWvEjGkgEliruZNou2GOUzPmDO3wJG9arGZwbWg7ytq/Ep7UjweMP/9a6S9efflklf2uEpvhY6ENCreKYLfgZLfkE0Vuhrjo9c4GtoTeBnPQI3bQcjBWOAOBKsJ2f2ZoSkj1NB1voA0CutJGj9BkDNqF8ztKB0+9YFYcsdtIqPZ35wW/uzyPmXLsGbfkmP4F/uL5ZwZznJcsRNrLR9vhLaipHDa2/QHHruBxLqfeNmqwk9mlbY5YXuKRkOhevNyjOCGh2H158W2GeI+S5Z7F8fFA89tffxEV/OZcVF3k9Fvz3Opcd4xPW0lJQFhZoLjszl2xY448OzInYdF+G27sNadrPblgo0MyHqxJ7IcRsoknHBi6cwKff+JioHQwYTE4g8xex+yAxHitTHCYikGYXcxwFBPOH+RzcEAlD2NFm2oHWyUVAHeR98JjEigjA5Ic2+OkVluBsk4HkmRlyKCB9gMmPTG+YOEpGZS16zqi3lmcoNePdMwq+5glDP9mZrv4zG/PWLdj1FnLWfCdmCSmkCnrN4pIolGlQpJw9ECmgt7P9dH7uMsjzafkz7ntjyTrrVjWzG9ctqOfkybnnhtx2ui4kW/mPfjc7XmLntstGtvAH1uDoNxJGV8U6R3h7et9RyoKWMku5vK4zmG74c600LSIkEuhW8/2P+M+K1opXVnMYKDqo1+MfeV/Ld0TvUcnQL9dbYsGLxseg4ZVj55r/pvUrH4EnJ084Ds8q2xRMKMIxc0f+rMPAz8vmocqUPz8SWAuvnlCkxDpF+2ZTA0Q1FG0/ABbSNpjMwmVelmN037Uy/p0lOt+tbzyJUO+y2YlrtoncoP7O9FPlWCyw2r5BfGnzP5x3MSi3mjRgc7faaxCAVBcHtLVvqo4M8sttrvNt9QpZc7SigucjRU+5wviiRJSHO/G+rK1Vd6EPq6XfkZhEdRp/IfQyXUS/nGvcSS4eJbgyyRPoFXIrjr3EcwFrYKCBS630a7IyoayXdwbZBxNlX/Bp3Ij53xFCjtcoTPbYtu5xSqOpfLz4OSGit1RLIOL3kWL7Qvb/JkTDrmfZd8cOo83J8bMn/B+0uvg/N/eNzt+xxP+Z8M48V1TVPGXZdPsk9095oGV+9eJavc3vvvf2SSuKFlwIZgVsPzfsGMkD+IWetHqcW3kvMyK6mfdgnf9INIwejQ7HRjzTjt4JgbvpFxB56u8MSVAcws+urIEUtUT+ZjVIUZXmKXl1qPwsM3K0kTemugIllt2VeM/Ao005ePH7ZSu7SiLpx7A8DKK8vLq2HPK9YmJ23fUWkwrQEDlnWifv+LYronsdmwMhtm2tec4cePt3329My7WldLCDuPaFEnsB/bKkMRINfONRB0dmTrAW5FKauOfys1nnMsIi41gZyd6qvXVxeT8U4R20jC0XRbjLfOSbFuvZk5KarZq51wsGFgQcOWwkvdaEnHLc2Ms5hofdw03AYdbM4yR2I2eI4W848wiicAgTH6M5eqxND7WcxlQSBAa3tLUTPXIsLCXRI3ISGRErkZzTQ3jza0cRupn5cdPRf01Tz8ZX7pUw6jBEYqZkzI/6z5mXhETy/YfSKNcpJUcDCeFepFKG/Bnx8SuFgDE/4A/Ai7eu0gcITHkEdFFYhj9JeMwnFEQnOpDWd6sBbCDJ0n/Z4Hzgv88ksiG3JMpdSRv4crleEwl2TAtkBD4oWPUZgRGLWlEPka4a2PG99xw8eRSKWlMPkKCwlIzxBhiJJSTA0VAkemPhOQ/VEaSXbs6xwQXpOIhabhAIJUikFiCksxMYSx6NKRza8jD5P07cRiF+BIlXtwj8FrRlCZdb7awIf0zmb0LOKuV5rtKIgqKWixP8F4L2zxyZWmZdShL5bPMe1kFawX6/S8jZbmWZmtKAkjWc2UrkrrNmleK66TLCeSOvHxr9paCovAw/b/xyWE7JpNGFCMkIY1dwaOiau6OHP7kaYl+I3lYPkJuGlVSdktWLq2sVDNnJOqSkibd8M60nanq3zlQ9GapXpJpO9+SQ61AmHAtsIQiPiGRvFZGMPbah7l4W9Z6QlL3BtycZa1btPH8V1t0n1VQ6qNjF5eGqnncHYpeeDPLngNCarKMAAiy5NQtrgDTF9hnDswFf5OZlifs8m92BR4Dd+TPhgDRLzeWPSKalNQyJ223TqLcSTOKnRSNo3bbm0QjUR5qnjyhjvfU9cf7pF/s3eaIF8tJtxS3CGFOsNwe+CJDhH8hEGWgOfihmMH4wmhAflvcrgODdtrgumu8cb99G976F0/SgQFmwR588LNnT+OeSqUVFbfin9JoF3td7OjYglj4xbiJa4pneiu+lW5sPCNTb8231mZmjrW2SqYN69cr9db6jg6dtY5O03vqKyrGLsaPjLlSG6uoMFivWSOV7t23U5BI2diYzlqr8v388zEXWLRmgkEbYRiuBqTdUhPctLZx7eTXz9ZUwogwVdNomaIshUI1lF3RUvW09lHS0I5S7Ck+XFng5BwPX7yGZvqT41ob3g9Ru2IF1/ohgzImfo7RKJNVQTAJFRqkBS4cVu7M3F/tQtAr62wyn7SXyTc6nHL86H8wN1FXvn5JSXk3dCiX7NT6aKB8Y8Ohkoc1Z+NGDxU/aipTr7lUVIXSuBZfOM33g1M0DMqouG1cK1KxUFFaQ6FOC005x4SlQo3XCIsqVO7MQgAz1O1hvgXfgrR+SMTW6VuVCnwlFhe3MvppeO+SvQkMvMLb2H1rxwXlWBgp7utQ+7dnyik3KTTyslC3zY1M0tN0CoLHHNzm/59t9QRKxYLcb8aQBPuEQLmWGqrIHMulcUnUFtTcBXLGWNwYQ+4ARS3CqJg8cK5JHEOgRP+ulHg5DQVbtlJZSn+/vEYd4ePinvosbN71aAz1XvK+P3ru/6jALpRkbfsqvbDCZfBY3ekVx3HzJYJlm8M1lL211FCFG39CHBAXpxbiA6p0sBQBmJ6IYdppbLLC/KQDmXJn1NKqTq7ElQ52AiQY7DzggoyiWQ+IC1wyKOAOSDeqPKEDFk3RAJXCoyEqTGVsKKrdhAAPUilcdQgx1TNVAhqx4R6J7CYzz0riwmYCrQCBzALIp5r8Snxy5dOX6wNfZpDr1OYzSSN/9ney9UMGzoiYwwE0lAndTvv0NCjWmsSu7fvvFSdDlpgJhgGY6z6DiadDUkiSfgkkQ7BSQjOuDUVJpDYcZYULZTnwmtXQIign4WAe7TnQIqU2fnxp257Z+7N72vY5Nx6j77OLSJ9JInvdsk776McgStdx+jqDp6Ardh0uBEqPAgCbt0tOuqZnAAW9IO60UlmSIeS1GgWhLjmpUgDkqwkKzeqkZCOA1EFjrVIJkOWQBeR31tJQZprXyacyKJtaBjZNdCusHrWTRQ0eX1NAkA+EbNH09FzvXG4MoXLbIjh2ORQZgkoAY8uZJUt4oiKRw6yE7yBSePOucnYul1CkmXoJcY2m/UylmkJDBUaKJBjNekQVnoKngpgyW6iurl85kchO33rC52mUeP00wOkwiny5Sf4HaYZB7r2dn1Pv7GGsPZ0JsOydRhYBKUnjFe8ZQYje2X5yQGRDjZVwo5x7vJexftqbFRDEkLBhLBl+YdUSscNLJfOKnqFSuvWsoOTQyViYzUriXh672uyANNxYJIfKy+EkQQblUJKM1ggyAw5GkSZl42RUZYzLx0VRkeTx3xTBElmJSQJwI+AY10qZ0z9dmfcMAk2W+2ArNY9OxsE4Rucc4sWTf5rhJP0+ca5VaYYE3QEKLTFNUGLTquJc+3zwEtZfJ1fHxKPhNkNgwWgJw1xH/M8/l4ozZV6MUawXd5TLk5iXdia1zjOwMP1fZ+GZQQoCwEXEFzFfvuDBXhwI3LLf8PgIBCecE+wpwP5f9iISZK8Zu139QpNvfXavL3NjA/dPh0zvTyPsDF3XYORrWMdMgNtgFPmJfKV+0vQfJGFObT/33o7PKXf2oGtUWUeDd6qpoogA8OqKyLT+5DxxhhW7gcs6cUXAafIP8u0mFYI+1z6BhS5HmMj6NFMCoGsRvHYNtAjKTbJoJVmzBs6FF/F5Bt79zupgr29huFT4kd86WFwU6m4icfsNxyCPF6jWb/m3hF0XBeHZU4w0shABwHrO8X79EBKzuQRb8u+W9ez1OyDXob7kObsDA4VOfiFxRw1HI38skK/f8k89tiQKdbEoGPhm48VEGdZvHbCrr85NdRZNcRcgIeKi7Z0u4ghN5Pp863YRpneiOhKd1L3JfBqYYNMGMTxUNYYphhMejkcxaGLuNoRl0eLuHhPQsHLKSuqcoopWpbCtpeUGY0hbIzzKwZbLWr+Y/cYbWndovSYC7LraCLRKqlCqxtrmYTFdhdLA1EPjjsMaYXOXzjtdRjBPNKVq1pzc6MLp3Xgr7rw6sZ5Yr1kDit92jSFFOG/sTZvXhLzGHR4AkYZQ0E4Ru2OvqprHrMdo1AO8gFjaZ8VKBYnWebIkbBG0di0Eu6gjcLNlGtixrRvqs5zTdqvzwPpxNzwGp7kedlLe651x/YrBswd59ADpbM8AXtsKMLQKzG1JoKFFY9zO4G6Ae3PZRbTkkgXFzgIi0tIijAUDWJLKjmJRVgodG9PsHiaPUNos7pU/XpTs45nihdnrsJpxU58ZFsNIihYkuPd54SRZKWnYLBWUt2pVHizUAUGF1RrLggrVPgrytovAodRiudNbJdPibfOdfMu1njEssUO3+0ap/R/1+U9HH8uPLFHayCPCYvRLgJP0eiW6J/sWlTzs8e1nMdMnUwr0mbZOka3mDFwOlcVtpq/R7XJ+YUuHrMGvpoMmTmFqYbAaJOys/QE8XOm24QglbwgVGwzR4Rn3+naepo2PMmEc44Kj9I2DPgOeOtjTwxUKvk0tjUnXWfOTkpQLCQtTKpVvvZqGMqs131B0mnB6eG4dlcfU2vAVit3YRc9yKp9ezkSLToc64wz0cu9y3ICu9dYBvdq7Gpfg6oyWQaF8+vylKjJ1OvXra/1gWHKAOQTYMiUoatsVTpWh3AODoHQsrtQ1Znrf57rP+6ZjXC8ppYFyqKz8zxWEZG/JIfmwHErc9FBdd4cv7RA9TH2APDICi42MlG9SpBuR/183StC6VO9BMBd6Ag4vymstdfLoN5YVySB5aMAcmF2euSZoy9afXe4XUtkIT1SUjx8R2xyyOen5jnhtefGhamIj+uoe5evPFEYk6FLJmxLAaG53xTJqBKchVDOaDQPh8uZr5ju9vBBn1qvsmnUj5uKgcM7vqWghV6MgFA/VWJ1FjOARFBrj7nKAMwPNHVBJcsDsfjfVE5NUhqubcx9wGQisncPgstfSFyVe0s6VkKoTfKpJfgzKhKbiVv8kfnYNkQv8bW9dcoxxZDzzJlpmzpV327rYdmfVzanMCY0iMDdVwcKy3TV/Os3gKbIy0OiN1drRKuMh6qi77h1Ro5u6PgIkm66xlibrPPBNJ27JmRu/m0jMpaI014jTMlq+USDkBQI9F50U+qUQmX6G6VXKjvYi2D8/Q8SU2eYbkRZl3VlMSyNdQt3F4KmxljqqmGkXdH4zlW1JRbmR4Cpctj4c0hUwGZgqY+cz6DA9LE0OLS5fsxUsDuMlumO+GhQ10wT6unQOvMFF0RstNmYkSD1jN4IkpPVIMWITnpXk5id6Zx0Chcj+B49erLiP7IfC7EMJ3hsibCosVB4RQAhL7UJ7PlACfGWJ8jZ5omw/NeVDT6hdgBOFQ7fRHKqlkpa4WCgoUUTFUyA4xmSaF+ZMJwkBB1Qsnq6EUkAJy9lJ29mQBgUZrAyDgzGb0Eo/G2+i8tQ8akJ5ukhMr/jMj1Ew4B/fbmMsIPH46eYYCS101XUM4HSdOY7tSvXXXvrry5f9+Mek0YD0iszr1/+binVHxHzoFjmdDZrgx9TMCyemvuX/En7Pe2X9ZDbs3AtB4elQpsIrNVzxuteURo0Xc88flN4tFYoU3nyHMwuX7Dr8JUvOOPC9nYYoqKt2Yl/42QwqQQGzWbkU1GlWxbpFRUDj6J8QmBqNdltSQ63sAUTqGTBinxNxASvIc1GAuy02YBtX3C31AFAEcwsS5SPIltJLmxFBIqnM6jV8b/7AwEmrZUjfs19zMPsCduI9MElWAs5lkY/4/KIoCZIzwFzWTQyFggn25kCQx0qaPeLZabCwjzoCN5v4R/6cgg532/MaE8OmsOZdChd/fsOXL3Lhja4oxPXFnsV1cMWlWbKy2DtwgxHOWxHXj8u6h+DGX+RvTt7AawVcXnIjY2j/fpMpDUGZ7e2UKDsPU2CwlDP0g+pSfkP5btclFbj4pOIp9fQNkgZ1AKNAfN+PYo9N9DM/Hg9C6o3GOlgvbbSDsNDarZjaUCy1T3bRUMZEo7RM4fGw1eEHvlU61yrWdh+3bC83zjafan8+pr39W4r52ywETnybx4VZhc5LEr2XbCAjZQfXT/rx65rXyf9lUsDytewGnFbgeJhEw9MLI/w++yqLliaC+M/toVNrBgLLyjAYGo8eNXgPOGSCePyJ8x6QjbcwtM/HJ29JzimctguBbOb9aSXuHNdan4p58mqBUbmNC8MoMgWhL+oguptosHawMkikGwy3Q0g7sm/vSsOqo9gekzDm0n374mPGE2L2lz8eE/9vxTY3WTFMpBtzhppRL63vey6Kg0XQhxixPqMR8Scoc+sBAi3g3VN3pNHBUudteaPbDe8mtXRoPCKy1GuOkzk0lA6iUcYf5hJZxf4aBT5IoNAs5CD0kFm/ax9M3H90c5T3t9XbJ517blUkKZOVSQotkDZ2LDsIfUsR49jhnLzcHFNuLieXLSPGU+C8+FXVUCWUuMqWd7b/vfg9dTbVIr4NLAvtQ63kCoXJLurU1XOKCKNxvR/nrp6yizYpUqySLCIxBUvj21IsK9wiXAFnlDpxisL5MORC7vLULi5fVZAU4bajdzY/9clEacjPBoUC/WQEvF4uAFUIg4yAjsrlNyz5DXlJRbmaNW5r/Bn+UeEaTW5RXhK/wfLGlJKYTk151NLmlaG54mM+yMvtKm9Zkl6WYemwaidy/TwCu3MgcMvKmL8WOB96BG/FBt6/HoDFOlAp5CUeiAjYemtVVG5z/daxP8vsAi3C0rd6dULAs+FsLU8zoXcrhuSQJ5T2kIEOQE1FfhV7NLdyXEbuTGtKp5Of6PXU1qEeLoPrFgDIZ4Xu3LxDuLWVE92eqhDTJ8WrfcDpbyoVFXVZmpWdKpXkULnAuTtv/4cVj2ZXbXL8cLzvmR7+7Re+Oy4T2P/p1YCRtfPL4+p0u2J91jzbvgFydGApOJsRKsc+PEWWuGiv0kPnV8LdBXCw9aNpJVKPIGBXoqgNHMY8K+yddBnzmxxq4+LhB1XuYTvg7y7kK3aHkR0M8DbgHdHuVSC0oZe3sw04ntUuHqtcFYdrcxiTBYNgmi6P9LGk+7YlPzgtchHPS42K4hBefCFpFxHS16wgVNwtX4XNM5kTBK1TkWg4ujK1o1Jhzv5U9eDlMQnx8ovA0Lu9SFI+g5vITQcMm9xcb4+Hmr2kGEfM6X+fzmD6sU/3LffbftgZamu24f7ZbXA3/qQa0esI4ho71Nd1pxPwSnLqLpC56NG5JBTxU31oSBCYUJ7OjUUuWrMWn+oZHNRZ6XAr1EnOXbOmpAd5dB+zH/sQMJeSOwMBc3cEWsHZpUo5pG2KiirY5GjbgVV2Ctqd1boSI6WiNDFy7WBUlKmV+R9eQQb/i4ZFyoWXjZ6eGnUEpE1hacP3mQmcKcVeJjbTuqJL49GYpIEpe7M+V67l/Wb5R+YjMOeOJsGQXww1wL35cJmfMPe3zyJmUonvwZ56D4i+mfTcsDvJ5WEze02QbxUQI603ThrgRuRSzsqdZn1uUJ3cj0Bcee3Hd9zyalZ7JM2HlC3VRVAhlEFYCctwGLM/X7Aj1kku8v6+dVPYA85auG89XCXowlo4UEvWI1WEBelnAJpJEXiu3HZ8vPL7jb83ya9tOLXo4NX9vldnbzh7rRScllueUi3+5dziG68u+1S91aGtEV2Xdv9PZx4uzzj3oo1o7JixakdDQHlwpsfdV23VXncrCQUJzme1N7TX21Y3G2yEJN2KnQbZ2dnUVDp92WanbRxOMuRPE4jhssCJOUEfYsKS0okmvBNFcfPat08u/pBTO58kgvEg3R8DOBwc4cgmKI5CbbEdbeAiqlgivNFMNHLlPvh0siDhUDbKiZiNch9aJOGPrjQDuzRMZPmqTNdcQaFnZWXhvIeCLLdVR1xUUR0HBhk8GU3Wpi8ESrYUgszbSsKu7vr6WjYNfklsDmm/jLLbgsZ5eX19a1qj4OC35EDoQbvJU4/2Xv/e6LgwaacSL/jDXJN3usR9ZiZZn3gURW6HTqXDoaZSav3UIZ/vTMEbaZSe5odJy20VCstpD4W54Mweydq10u5Bhzq2RzKoUsLu75CwIWDx4gBdp4HBOW73RnbKW3N6sZM+77YHh6zEkBgxTJWGsrbQjq+vCgWie2fmwsqDKe+28TbmC6kuYsKMkAm4SEgp5vNnPNgRELjl4i36fqgIJ1VwYqMDHoHdKPlj6+5qi0WC7R4I3HLkbi/ibtz8XwfuRtjvGyj7v9ynySJSrRDfqJb05T8/Jf2dTlAmpxK28JgYQ6mhMm8C98KdZZiegSnMv+rlCZC/tqfNPCs9dhN+dyBHCiMxI/g1KfXtur7rf/yux5t/Awm+eAv4SZRkL57QVKOzAnOh4Y4w8c17Lp2DIaFemERJ4nvx1jbqrIUavbr01Z9dp9uYGIggwgwPwH+qqkv1GqG1bm0jz4vvK/J72eYwvQgsvPsxiU9zy4Tb9QAINPUQzdXn9PjVm/NtmZ+E75rftRQQICpK48yC2NcujYNvUYSCl/DWJSZ8Ys63vXp5/DSr0+pu78D7txbRDxT2c5xfX1z88p/vljj9qevbf2SaBy8tuF/wY1bdxtpYDbqVBQDpVes6mOq9uWs359nyP08DDvu5uDpIb4OqjpWUtolRa8Persia6dqns3Kw1hWr+yFl9eJsCJcOSFt/+v85yML/oeVbtoCF2zgQZNZjaA+DT+c1bU68hGxUewmSzgkXAOAq427aJOMkOtQPOZxTMSs8vCDJy+4KjzD8I1U1R0MZrBc4rwdJVw6dlVjFSc3OnpOynQHb0jcZDwANZfrRSX0m9zkazuNyeTz42iNcoArnhCVw28SqXL1EuwRyL9v6NVlcO5t/ZWneLymzA2lm/5ILyZtKxJhzf7H5v6qgTGd/XI//zWElwQnDyDhHI/r2jjmPJDFpv6IraChzXGjIyCQYhP00Ssdk73EGHTfV9TqAylOjQAi4vcBOJJZ8gzI0kxFT+bSG4dH7rHk0KSGPJoQTR0cVfUZpnor350HzVhdxwm1WKYoNuQ25Sg4t8neDOGiiMR0ggaHj2MVUXpCGqiBBUPz2jUoQisHBZCAWx27trhec7C85ByBgmFS/Ij5Fr7gsuWCEdtKDrqEVGWWOzZ83zPjRSx4VicOu1CTVj2EnxYCeJqgiNWABP/HZUsRxLUlKERcapX7SBiMEpjhXA2Fukk+AzQWjHBi201WGDxd7eRvVmG8miKqiMhmubmKhSuPRxscUTsCHasgm2UqrqKiz0cYU5f6hArbpUUqGV960mjgUJCRVTOp5VzLyE5027pzWj04s27YuNcRQRL2gKORZ6QSq0MPZaTRJJVqb2pwbbVOCBa7BlHQlOaR9ie8a6TwBIQPunkCeU6V+thfMkwg5zjchN7TJjAxcHmDLGN8SuB2lPmvsT9nQyW5eKLkZg6X2J30arOmkhrYW8iaLCqzeV5/kUDiEUAfa1ET3w7GO5u7bNnXTWcgNmycAb0OfZlypkXaJdrQtMNtqtqCt2UG2r/hKDodyR7U3X7CT8ZTbuQBnhs0dijSqGt2dOQoAt5FjM+rLTqienPONRmk4fEV6JIgGlclwLI77BSvdVZ0HcqE9M5BCGgoNXfN3rD9C6DWMyX+i+LSJ4dHAlEwBSoqZ+FW91GOYgvFQipU1S+ocQC3mgWrKGm28/N49dOKnDk3MqlvVmnWlifur/l1h6YmmARJc39NTHyw8gBjjZtCK6oRtOWTBxM1Vw+2UvFV+9QR509ntJ0gtDEpvIRLfHyxgK4HZwP7/lA09hYUEHY/tD9SVVUUwaxi8bHkxLLXvlS0k5dHWRJvRHOhq+joGUxMNLoknUKrP1MjFNFL4Qvs+WApKqqqLAd6hlEEJl4I6IJr9tt0Aj+o+KMFOp/6D6UudvXyVlGyeBQWdBlzm4grmqUiX66h+dGmLbcbRqiMxFPS9lpeUd3owKtj0S4cKymtXarNONXCnvGkoU3F83SgJXtWzvx4RpACvOrSGGloTbb34xiO3V11shzejV083rRslr+8Gf1jTqONaaBy1S3Fkc4bP2NxM/n7gjYDBWcmPSqXWWh+ee2q55VrBkOuwKzWouB9IpA/B7z5DYI5D1afm9mbeXBsdHRWtp1KIeE1lFubRquLv6iFyB/DKK5T6kS5fPzFw7/DvbLbCMhrIX7I4H+BzQUFZkS/3QHQgNpvS2i0weX/iwTvwxvSYnK3h6eoJlOo9XRJDPllHldAvZHvX0+DEFF90jGB1DwalxSALRAW0fbGMpm9NTqcynNAe2ns4ESS5tUZlUnG/NjNAMaCgfGkBPn/xUlAAxTgafsVlULXd8NVbCu783L4dCuc0yp4Ab/K7gSxyuQiTz9iwXUjDlItueqZ6ijc8kXEaofDt7S+4sajILCMkiXSyniwFT4Z4LRawPNUXOlYMGM62c94dHshOom1M8KeicPWvlJRea5F1Z6UbbEQ2hkeP1Pe2McQeQ2r1xskk9LnRMUfssgYYK62fPqnDupgYSBCG7j3sBG+vuP/qlUePNkCKjf40t6xswxuYLOte2ZIzZ3Q24AQfj0e801pqbYAz2E0kbXn8RK8b6nz8mEFOUp88NljLiDoALvQGcCzIQSuN0FkZFMH9wSlHrPTS8BIgqxs62SEFtbJwHUGXTBl2FOqttdLwOl1pa27tOwVDsUMsNhz64GLrVBxGdjW9S51VDJ8MB6nvYBe1Y7GE7OL9rA30nzrZtyo5eUqfnEvtWM1b6b20DgRCqiHftiUNbWSM5jHGdpQyigQwVJc3BsZIzEy4QuPYGGI8X0VX/4jDCWoJMOlSPaW9+Vp0930dheevd8Vs23vvAt3xt+L2ZP//RFdMja6o+sLdt1jQQNYV3GD61OuMYoKiIqySHGuMsCyUhjJhVFVI0zUVXmia4Q3v8MzQkJ+Z6v+gplApczW7ouva8qRow7dBS6YYe6IKvbxWNWlOW0OeTNUQWbP/ur2K1U6I3PurVfKKwigSSxS/wlckW/26NZLQPpt1+yNrFVGTdzNkq1Oao4caX8Vsx0ddS2QR9zfOYo5rTn0SInBXRheHq45xf33BPbYZLY5m1qBPc1wvoiuYB9S54a+Z9lx79M8xo/rACiZ60WXdU5RZY9l2nPc4jIuPVMPcUaMK/wn2QU9ha26IOVHXpqfkTGnt/+VUPj1HM9VM6tRI5wjtjaz7fiO8yjjd5+Y4k/sYBOf9pQ89EHFgp3iX29+rDv/QbBXmXaGRXyG3PF5Ppu+Z6dbQIDWdtpsBMGMHgsP+3Cm2SO9aI3nAKXLTyXp/rTyJd/Z0xp2M4nBZf8GA/RsEeqMdAPdnT5HPdkPWe3VEY8DCdsquHS8F62MwtOD1J3zYiZx9AJOZ5Him9UjdNRknjqbnQ3cQ3InskCHqAjKv1T8bCLow1sEBnbWXNeAsGp8Q2glp4yxfw58WyK/TRO/09W90oLvs2wsdwf1pT/vW8/XGas7TofSamnQoA6qR8CPJEDFoA37L9tEVnoULoeWdhmp4OZxoDcZ2YiganNp++SiDsv6k+yowst4uOXliYtmoVNvduyogSCPfNlrkWUiySRnC1bDBVXNDZzUcBa5s24OSO/YJ/Jag4isy4HQ4HcG6ojBhs3ZPGoUa0VM7aPhYi2GzUFuJlk8HfsZttcVncHnQ6hydxIJ+/TxL3w3n6KDVuLziwdpVWd+lNvqr2FDEwqzIhe8aXJIF58q6M6qIn3XISLAJo+6b+N7hK4FXDt/zKRudlu8WVHbliH3Xox65q8EyOCW2Z+b6QVEOlA0djHzwf0wPnLLIIyttTU2ZewxYGuLjOVOzCcq9+dnytgzyVvR5J2kOSgd3C1euO6f9PQAZ+PDn6EDoA2Ygb0AszG+UzWuT5MRyvatZ05H5cVyuNstS8IaHFTA45FpiV3suzird0BEXedTXO5khwZnCePrFR/ybftFeVCwzJMYlxBmuMO7W9ley6kwvF/HS5aGkBgZpwHfCo/Bg9L8WGS7FvWAJsu34ZR2i+p6rhLfC0pK+bGc29P2emGrAMv9CXie/OGJAFwfdVx51tnVHdBIBYg50LutzQm2lN0CyCNYtKT6c4WKeTNreteVc+sOWs6laSQTBikGZGJJxVaJt9iaQC6/Ytncp3HW2b4VroNxFW+TW20fJUeb15cThm2NTq8HUXHiGg/DbZ69MR+FieEs+vNhuftZwkJh5UHiQHyK5655EhxcTtLvmOAO913td9rgIi+GksPmH/X/PPQsHx0PliyG559PKhcFqJjHwavtQmUM4dfQ3xTHa6nBLS4PTW7d+fVg6T+B9I3X+gAs8BLhIcBny5TGmp1/G7pSAFBGPKT7h5qXeRcEnf6mTWQ/j/nmEMeI9jY/rH199Z4Ti+Q1zkKaDhilVcUyDHbEi11nrRcT7yiAtfXey/9nm36MOyxbENIBIpPXB6YoseARpld+rwR4YYRQHBub4el8IlR3nmsQUYsR89kV/oVofFzX3Idy/j4Cf6uGRpptj1o1DxRPV7ZY773l9LrdfzAjLN69sISWnz5cmLshF1TTFvOBwy/j0kM95+PyvLw/PqOGWJqSX+q1mrjAvCg7OXE9Z3HZ8tY08nTLf2T5VsUTCdZaBzCxISpjf14d3Ewgi5RYsuhON/vTJ+07gRmULU5RY+1GUQcn2tnhbTTvqr3KSTsu8GzoaRNswbvVP5LbRiyP4PG8IZZ8jm0CQJGnFL5bBJpQHL82C/8PZR/Hy0sXGT80jLQEUJyEWD+fX69zETbpyxiINKGUAXluPG9q1d+748vSVe9+4rrXmW+kQWDaIR6gGFNZ5Zm6hoE7HXWztLgdel6fCsJ7mCgbjYNhgrvff9qbYb93n5k29ldA6QCGrGwcy3rwW2v02IH2t30QXL9MMuC4jO/ub87eoIEP/i9fEDOBXaaHKQfXWuhyVFaM7MiY22gA8mkztTpjhe7vUDusYXiJlD77waoQiUgS5wB94u/U7NTyPAh4RgNwCG5zteblhfFzcyBTugD8v4JcN6dk54XY56XVwfgDw6/HRN1pEiWm4K4e1OXk7AFFlrd5a/8crUS1SO1ZonMjhSAcpg7F1rnVtNFgthbklxSKY6PqMKlukv6+7jAYrfVeXoSihfQIqAHAS7euatoheXdxfttElb0wHa0PXXrWQw4j53du+t7MybWurVm89cW/O+7pETsCVHxZgGxBr1epaJ0/DuFfNB1101qfU3OfOz6P9jfNYkY5f2ef7KBffR9MKQWaR+/aNL0YMBp+jwtElOnRfit64T80DPleKc/GKCrFGgVdVKPFzAmXFJc0fsdXOI/9pIDlEySPPggTa4hvB15VJ8SjaHbTJg7RNnMpnkMWtiOtkec68qvw+KhNKmaOYtOYgOUejriHanK7UCgWh1JZ56jTBfmgW7raaeFRwuXIoDZCoGO284SjfDL3VoEe/T1RtR6Fwz9K3ikZmnOf1PTlB9LDopekti4QeRZrnTtvMO+Obnq9f5JURVX2cCqWofF7Ozge2ZrmBCb5R+owMCgYE9jReLYuzkMmlqaNbi+LmL90glLjusziY2iYV6hpcpXkDqaFJvpHMtHn312bPY0RP5lRbu6xSdEbUmrXxm4/krFisrhMhCmiJ+7XRho4zPSFJOEhAfA4IMAYdBkFQsOKfT/4hjjlhs5vXJhTApZ0Bc5dSlV8yP1szZ346WZB7C072kkm9xd29wBBG7nQMdDYsJKTuNAdt9+ejPeHD3OEfNPNz3qfP1qzPA77kpp2nE3dhZYkFazbP5oRx//JiGXh9NtxhB9kCt83p8O+Ycpc5uyA3vdcRdHUReu0O90lSyVGGTkdwRPRQlhXiT3822Hu/tLdWRPvPMMv37m1qXUhdMO8HVpK9NqS2habN9Dtt/84e4bh2rd218Z1JTVlLUZu+6sVWkf/pvyoXYnuZYmyGTxtPw7s5ytp3A502TntWguZE9jnegWblp4DWfIoJ5IOf4rDuU77+EoEvDC720kozsheIF99MA45saWvG87W7IlwpmTTmWdMvqzJlnV8a8tgZaeEZ6hXDsTwkFECTdgpUqtb6Jq+2F4izn6TNOlCZezsinE9l0kkylNnrFqTBjzXYPBZQC/6kCXvlm616nIas8hPJNWIMz8zKEjmd/vSU2Gnwun9kKgmbyK92WOYB/iTkU3khC2pPydrq2y7Ob/QryM/FSX5y20HEYLxvNCAHV5/0snP/mpcuLqrm8u7tB816BT8ae80W9QsD7NPRo9PPaaP0c/f8efbP+exO3+t0tLU0vWvtrJZzjZquoY4yz927F2I/L2KdjqOfaJjWctZyDPbfV3U4EphJk8ZJ+/kCV6/rcAiWDL+TO99+iXZHnvPJroTvL66zgKtHDgP+FnlDEWsEjPuzV/XZyGw6/8WtXi3JS54FddY8TSs0y5lHX7UazANm5vSDWp1FmQVQnTXarm/3zvO2J+dJgDmBH/z+iRzFOvBQM6rDv7ZPnHRq3H3GE+5+Lyo9cJtht4Kv6Nwd200B1Cc0oDQvJMqr11uTtWFV2gCd2gzj35MpLUu0VqiVttPYqmoVcrlaS76l9M8Cu4J4CZCCAXtNAoCkYIAgQAwwKQgQx1c8effXuyeqv6lzdEClk51CnnNkp0nS5vicTNMcBYahpMnNzCRnn7m5/VAzTIoAZaAyQHEkyBAjN1AuECzCXjTCvl0UoOaaLBqY2kxpOsZTn+36xgY3023lzag34GqGGyjKHvk2sVLmLwi8kd2b3po6ZLbZh59GwB5YLiWsnOdaIn7S28PoCXgcXu8ptDKUScDTdJDGIpC6B3U2uCZf1ix6Bq1O9/bR8q0NuladTrPM7WJ+xWpdKyZn6LRfgP/1tlaxVUcQeXqubIzPIqN1L91tdfmOg4W7f4YlL//d56rW2EZUIwDc9lqY5ia5dv3ajXm2zId/o4CTpk44qtVzONI3vcPqlHuvT+SKnXleu5c8T9UwYz2v7872pIujlqY158x3L2x447jVXB/X+FyV8Cj1kqCJ87J3NF+fxaKAeN/Ijox0CoJfv8wi7/H7/oQMNq6+AYycfsPJ7Ocz1veJW2ik6Hc88uohYtePNplriBgEFZ2Fq3/WWRl4L++fwcqL2JtGL5O5SaBOYuDrFjiblaqiTrecplNUX12P+/N7+P7HXZ/XzJHQamct7AR8GLwefsAxt6+J9hOpXx+3YwFVcwxKSt4XL0YPw+tLUt4XdHI6xBi9TIB0R0d9YZNlELeBasbsWq09IRmB5DXPgydoNNFlXvu8M+v23ENdQ+uV0wEjakB2j6bPFyC+r+X+OsWd1sIxMD5y1Fof+o+DMNQFIIKhpXx4PPqoYcMfEkbsK0NpeWyvuSbqgoH9NL/TISSsZwXB4zVe2BT10ZFqGPaEqB2Lgx6Y9BQdYwDHGMG14nQ+NZAKvSnVRpd65mzKyBWbci6PjMt8DSbw0+bLpJa9/itPdvFlBRzxGtxK/9x1G/42uqUACRDPS+8eOJq9mCwQ1ZtHNkNKQSqZ1xPDGg3RKZ2QGmCK0X3+BlQ2lyFKqfryUe0Bbbxk9dQt/QNLj51s4qtHR7OnQ6tjZUUX6UT0lTPZHaXqaG4SjkrEUjpv7oxzjyrbkCKjT+a0zK9/dX9IpjOio/H4Ja2YkHoPrR3CO7GVPHnNpAjg2nPAQFaSGiALCG+em+DGkOwreV77bzhIRhNOT+K8/26JkId6M80RTAVeK5hgmMwdD/RyCUqw04HWGSfZYlcFaDYXZDpy1DElWUcUXKV4wg3Jyf0O+00eLCvI32IXLjWE96ixgnhS8wDPWGGG+Q+GFP9XBCkrnuevjhAJvcCnt6IIoV9JgsMiEulVG16K2Q8RmZ4xXIIkkmBYaCasIJembXaNYBvNpGlwhPPZXdmCfM3WBblZ+rPhjqmwWSzb6BqxuTRNQZ6PQ/Cj49xIUAevWbxBoyBICApNE2LOFwmVEZgmnpbQDXz+gcryCYpTGs53LmSN2IiJFWLjPUu9djRgwCWNWAPsG+aJ4aU14Q0vZofpS6g1E+8naqhL6MOS2HVT7fewtSZ8z6gIm9OnJTYhmbf6Yd+3z/375b0K29d0g3syjYRLzndRu/xeQr9R24cFvhCbBfSrgmFBJh+9ygJ72B6Z4zIZc0hV8Z6lY5sFGtIXy5Q7PgSy3C4l+bJ7FCh3ErPdJkTFTqIVju6XE5PtUmjEd91KScNEx5Q7+iDQj/eK6t2N+S4AimR6k2ioBqKxqFkXxjdUDuKhO8NxzcJ11obUkC2pRzTy8NahUx2y1lE69Ab4TKkweofTvjxWrZeNrngs1QAjph+Eg4ZSnGIwk4Z65hsE+VUB03oZilalYYJD6CCkASuamzN85+bGe0nTZeoZqpRHJM8+1BgiFGpuifAiotmLo/BopK8GbDavwlFwbBHBZsRubHDE74fAPxGoy/KD9RSC5Z/1GJnDGP6vzu98rTHJrsWWxIuYDSqhV9LhRY3lq1wFokM/k+0V/AezO150WBZ4aA6ZwxZhrn1GgCc/AVgtT81MvNQ9fExgthK+mSXK0N8iCL3akW/F9Yn+rQNIJIC9dktzfHdJPoll8ybNHWgJZWKsePCMJyNjbxah/XLEEf9fn6FbT0bkZyHhn57q+3vNLtIbO6XkC80jBdBvnfK3upMHLa7FWO09jm+ocmUvoikfRWaZkJ7wZ3kxlfl9L4lPL/Nfjd7/ZgdFeDMoMxOS4SkvdBB0a1iT3MkctrD5sPeLuhUcLnUckx0YGlC1+OEjATHOtrq//983PfvgRgH0Ak9pTq8MspTJJSkDW4ti6ZyUF7WXSqG9HkGSfyI1RO4bZfd8sMZOj/6r0cplZUMNi9OrENiDU1H71Znatd2bbP+XOgS6uwiKpKLkoiT64tDS8QNh4zyIAZsaxIDKY6ar133TDDp+FJdGQvFoqmIURkqvwWzdu3UH8j1/8UoZ6nsGHju2/iWKRQTIc6/Ae+ltLtTm+YPensR0tViQiP9MemH7megz2XZPmKfYmQ5bodO+pK8etruFy1Pp3Nd6Qq4w9GRJ8xkbPAs0pKUqATumQNbji4q9cHExQhNVhRi8odIMqN7//u3p7VrkcyywnAZYoLzzBczxWtW4tcAYtZk70vt3LwHBiEGBCW3dw4bc3CsUwcL6qDqT9AaNm6dbroo8jqlyt7EHx7vYqxRRdQixLcn9FsznlQRvB6lkKgjyjwVyAhQhO2oF0avSD1cT0a0ekojV7m1rPfzmSfYySCsOR5UNl43M5clXwIQa1x1KGGCGtRjoPceV3d0r4SuuFgGS4pukjlmOa3eYFdl89xyhUDyVlf1bViC4XdIvK6HcNWtyg4UGAkn26jU5GKKz9Tful+T0mBK1JN1Ew/PLTRpTQy43iZFQByoXcrumj+ncd9X5nJI01Ql3uYuqDDWey9nL60XSxh9GJ9yU60B6XXVIB8tgfjA+QwTuwMpyD9Yw4gNV8kBGzUDFCtq84/QKBD5DAMkpb+z+yDaX5exlxcskWOj10zThNum2Ot8d0qr/SNzxmGfG8ZC3347Uz++Ftv8kN9G832UJl/TFNWWEun2wBxakizkC8fKxtdSiLg4WtI1Bi0M1m/FhOBvzqIdha/4Cg84FSA59ceeNkPyAsbh8xSd+hYpMjbx+Ja/EvMbMal5Tnsm0HE6ogcMhddy6D2bqYrO8Kw8y4u8lrbFMuTxLCWPcXBKxFMoE0jHtGJCmOy8euMEIo0KmxLWWSQLAm0MAdZkuZgNRaNNFHjvFjozRT3s0H8PzYZqxYObh89ql41VWQi6K4ZcM6ZZRrZbW7tHZ8Nv12lODC2KiTiKoZyu/ZezqhsK5EhAJG9XcxMuJWo88N2PSx6viyzRhyStKIqEoUJkPZzS9JZuw2l3NU4SDizGV28P7OWLKLXPt0x+sw5C6ruYiEAfWJfKlWbWrasr3FwYvTKgrhDPCaG3fD4Bz8PkERCLuOYnZvykjKGrII5Hzk2tU3FZwew6Jtg6MYWvE0WZfK1EjmfxhlCyyzatMt5PwGLsaG2ugf98hRvErSRQnYE1Stq3ECz3XaL3nejb2iBKNtHaPZGsmxn1z1BuXdam4dQEjehMuCMJCaeALVOJgGmSP0IJNp59fLGV5qSp2vMmBeyeRnybXjkV+wVmww1wSG0Fi/cEmvyBh8NNu2MEqCjHIHuHdU/2AEPq6e7o8fl0do4+j2Kosqvo3r8Dg6mDjzi91i6tX58J0DoVQuEhwmDg+w4nPAwQ9wH8hOaEao7Np1r1v4YPVCP4lH7jVN+xCcF02hpStdIEQJkqmOPdpcmmKFU+miNYcHaNnuFUU/usT5Rbt5qXCatYUVlhRMsbU4rXeBpZizktFVIXNFcXPjBXhn7aaa1p4K8CeObi8vb0c7seZ3waXg3BpRZWcV72OlWFz9lQkfuQ9i/Zp1BBSDm/KHyntV8PDyjqLvybQP9iTuRQix5VWaFahvGRpAoHGCaK+O6WIisMSouP6njS4h109u76+vKSDNB7rQaXgfqlKbfb8Lu+R/7mFJ4Izr3lSKLgr9xYypNFLQWC+irLAudgsuak4DWL1gxpHnova8DOdbhuUHB4CNgCZmLtauJ5NdVEQ1esf2aEV6znZoNSXy6CE4qI4iNUbKiqG4tofGpZ9saTAioj/+jnLRGNoGTRT8pcNhFXbk8c9WfevxbsEz4wquRAVqqZee0NEDJ7emZZ/6MqVmWCX+LH7LM/xhO10QN/PVx0o8stYX1FCDnR6U4xaxvweVYFqZ0+nvci+d+dO9bbQW0ZB0JwDSw807W+2DjniQOrfYzUHPf5zq47njPL1WrfatXdX6hWD3ULICG3ecOI/ZoLR0HYp/qpI1p5ydgRiWLe/JKLu5Ohbr9a/cFgZlhbU7S81NApdDf/5bIr1sc5fmZ3+G8bPUExdte7COtftNgpPamR9lZsZ6Tff231LS3UtBkuRpWFqtN6WZTkL6H3w7Z6+uJWWnxZPX3ojiu6gkK2/Urz5cKzTyZxOx2wOgy0WZbmRw4VGSMPbC1f6NYk3dPcKVt8Dw/4O/5M43jxao1P0ildqZitWGIh8T315eSEJ1JtHNExbRc+zfFuLxyX8vFUP6nn0mlU6Is9LV1RWVp6eyMutK8xyUagO5Azck2d5bjHwGeCeNWpJn0haOyNzr2XIGJ9471koDhyl5hS/icI5XiDwugd4Jd9QGaP63s24IZ8lqxjAIlz9qsArsqC/Ll+aNbUSiYzNEASrc7UZJAvvovwZxEx0jl2Vn6tfgSUZeFrBQLNzh6Rmgc5JSrcYd1HYE+72dGxLVb+KTyUysdjykjabs5lu5UigpLeXKK61vi72ejpbVshqIInBan7e912UjecubIbb0atlpM1B0jX4VmbH66BVe8jWEpMhSbqT07XY0SVbL7y9aiIWKi6CEkBsUXECFAepi6B4WKT6btfi+R7uZFit21gKl0AbFkOlYUGlvFTbqgY03TbtKrZTmRV0Ll8GpgHNXv9b+47u363PuUlSxqv8U720o8clFQOvrZ0Ga92tH857N717/9Mw2HNlg3iw6dvXxVbBJ0j2p6+r33EaARGTEc4jTQi9bPk4coHXfQ0LqIr3EQTBFiM/+v9HJLO2NL+PhIuNlN11YHr3XsLxPY6g0+vw5deVW9tb9ZZmjUfGjt04dqTRzFK/p/WG81Lun34+c+dMOHv0yO1Fb7BWebzjgs6v/3RXq48kXJgrdqVNtOvk5GrujOBAz0Q8qsFrx4lzb9yHmImAa/31Gx8qnhY3cNwgA4o7pEMEc2jEoKnLVKHGm+5J1N8kUP4RQkVp06xPD5X2ezCmtxjJMmmUeOow88rygJXv/KBMceXGnE8poRsrx/bZizP3cPcE7HAR4Y3kVmDv8BWNk1wD6XnBHIdh1XV25vapA0K4JJkCWnP06Eb25VnzxfKtvHzATYRryLRA02qPXsdxALijHObbT10BXZ3AtTQsJ2b+S2xwjTAguCONoUFpwVj3a0pKh+zgqubXS4cNc0pch6Hn18TAz1nnMwSTe29viFlR4w4ghEF/wHPhKLbqOnuEUHrg+tnml1HnVkQWj9vYVUaqtBjlGiBiuFH1dx/EN93KMHoJXLo07Ol7cL8UtQkJetqvAQCY48FshnVEzMJ5FTKUvAG+JAxFu7v11oa8PK2NtlYqPRV3ZWbqrS+VyzbomOib7vzlqU+GobHYcrCV0CQVMcPDx2cuQ6kkICrqS82tB4OwOIwR5gAcWMyrnTzzXib2p6WBNOXwx6WtZsv7FMWWoW8+f7BUK4dkti5u8hfy/vR0kJ4xhF2iN6vu75fZuHCefHyDWIwsNq3rHTtTeJEab+4vLCaR1Pzt4gTqrQiedWSUngqo+t4JWmtdRIQ1jF6nY7HPDWSyLTQ+5LPAOkqq+vh4nbUOBKiy7j/IvGBCvGHvuQdG8QStjeo+Yhp/f4VDB20IeXks2lu5lgpRtb0TNLVIJS6BkatNfuohuP1vVFBrQcUSbF//DCg9bTjKi3Z3kdn2qS3UH2behKgtizrNltcuxQ6nKEFaWn/uwyoPsyqLLYoxf318wnUOt+3rZ1WDEEgjgrAYp7jtc8d2QIK8O9k2GIIsEGsMsQcYZulS336MbGUiwAIA1tS6STSj7pGSGAcBKNj6XN8I6RbP1wc3IojqjbAhWIPpsgdUJP16HbZWT0URYa8got2hopC4lx+5GTSSTHmk6YNNp36ZogMKz5NLz6G501kSoiGIIxrcPUBq3H9q/RrcOTmjuR0nMBReJC1pF+Ny8GqferYF8QS469QTe2mY7vD+G9u9FDw9mA9hmBgfYCSxKodye9zh0IpBSONZTB1VFI+Z7nTZtieU6iPhGRmVSYWXpg0VVJyXXP2Ae/48086uLspGQYJCBiJ095yUXjCLFvmvAK2ek77i9zK6sYGCcLYu4J+Mwc09SvwpIrTlKaYdy4/Orm4eUAb9bHCdfOn22386jTIpG/YlKYFk8TdzkR5yC/z1SyA3TwHROXD+JszrBRGhTxJv4uaevnD/7QnPebpvUOa32Q0RoV4IvAlN7E6Gmn2/fOnFkQ06HW5uA1hs6xmiplUxJWhBI+Kk1tlL0ahOUAbVQyKvL0gGgoTDgGfC3Su/2TOicpbKJyFZeroMMjC0dstl17R3LYz+uMtG7AJFpGfLoAypvb0b2WWqxakHQZQpR7Q0cK+N7QBu+ttvW4MfVL0sdPHw19g4JZcqA4osKMrFWlz7IDi6K+R/mrJVGhhNmYAHZzoEK9SFAev8I7Z3qo15H26GspmaljMtpbXsxma8g1rmQLOLWc5cse2nUo/70iyiFKs7YjRbsyI1yT64GZbAMIDqpeuOYYpBd8/vXqlaVJadbIsNU2EI38ddcrTKHXTx0W2s+LXaGY89eK6QdGeV6M2+m8SeBSUNDnUuuzEfUrlBFj3SXVAqUbe0xFKT8//S+AJQ+QqGw3yyPw24R2VTPly5i3rOdyk3eiv+VSoWfIgoQRCIT8MQH9MuHsoQ188IB8Esk3SlpOk4Rg0f2PXilg6u8VzXIJuzIHcRFFFdl676u/fOVvuq6d5jmOE5XVT5sUt7aIcO7xRC3C/6GO15qXt93m0NgqZJeKJLa5sE9J/5O0B3YBjqzjgX34f55ddvcU1j4y7gJUm3y6vMsU1ed4JkhFNfo83EjbHm7tHWaF4kh/9EbGRy3lnATcf3mCAbMXU+mungX6LpM3XTM3T86358WXR+o2Vy0/wG+9UXFJxehFgeEWGOa9MKW+OXc5kJ+X+mv8Zb/KThft1qfpFzQ3E26HvsO+xsR/PHwBrZ9wsIfm+izbhnZ2iEV/150pj8JsukpgUNnDYXTGREWFJEBMZ1KcerNWE5ykzM+zPjf9dFKe7XQ+Yj4Ib5ueDvfDqQ/Zhlle37eR9noHkBK6ts+D58kuWzHASHND3zsjDTU+h07bzvv3e/81ZIkJbspc170ltqyiskF7MKQWV0xATw53sQxoQaEZLbsDYXZg6Bh3E4l6gR3hIxhAHHjSntZwOUzlB8sToOYvoPQnExFEfUyF5zrUzy6bxs0pB0iJS9Yz+ZmbkLMGqZ5P1rtLbm04ddeKHafY2uqM/9YOETNdC0rfthio5HO7E8Lscl555DAXXn6KTdLhEBAtuCP39/a684cbqICk+IqUaia9/B3cidm8juFq3wRJ/Q8rQFri86B6zLPt9hia8QqvgtwS6Vocjum3c8vl7fwYyaYYQaFHSk/WIxeYEMGBQWdY8mM6AQFQTjS2BxsGuntn2wUZPBbqDzwuv7kW0H4sLY62hhYaYOahgXjIl6ROqIxDf8ZQreL2ENQIbsuXl7d7DY0IT3eLjYhvR8sGOawZqifg0XF+0rQjSsIONPmMIp4NNPLIvPdll0l1tAa56Z3OkSHhA2kPznjxSHgTcuFOOfH+5fyUjDJTq3N66/gBNTAIEUGErWTbyy+yeDruKiPNbJY1Gqcii1O1jOLQd+VWmjo9JBnGlU/kBAHR1eVbU8l/PUZnSyxfQcaTouvoGo/HajwlxoT1i8oUHSM+hQDJOvAjKTk7cFVVUFbTvgUHAWHnhWb2oYBaPEYSvQDBNNG1bS20crCBEBxBF1L5C94ycJqxKQW3T54dp69x+YMdlaWTpbb82yomFx2omegW2uOMyB8yyx0mc7pdkt+M9PnRYv2zZ3dAfkM9zyExdt387BlAaUAtU8TrR9YpenBXborcaROoBTLvQrBXnzu/QRFvXRa2OFnTuxU5rl/TNbWCfxMbJ3l9IiZcYNfGxhwZC8oYairx01FCqH2AV8TpnoPN6H9B6ExBaL+nnoh78nHhNZ9E3c+vv2rq0Yyw3vxmYWuYS8ibS8zcmAQEguPOrDWzgqxdajsm96DdzzMggoXNrQNTqgG1tiFSPFPVsO6MAO2k6D7IDW8JUcIl8VpvVg7sv/1lTiGmKqBtuE/rXq7bYwObY9bisi030eDsDLKdEa2JG6roT4lJoo+bhTIseSUt7v3DZNXkML8tlAa8j2dmS9c78DiZ+atqxrx8rDXsFi+NUwZuHcoT9gwiLQNar9CXVz2tyeFHPnsR35+SP9ySvsjjikNf59T5Icb5tnkR/0RxmtsPGjJY/wzz40kmEv3eCQ7pSZC7Ik+y6p7dQHIwqb/s5JoHnE3Ptvrde+51D9/Pmx7cm/dX8JiM7DphBiVcQbl6NIdB76591/7K3pzjQAdBzdGkmb4TzNjSnK5jKbJw2WDk0G9SHvx4lBj/vzSENN/X1ehcBA3P3liUc6/0ansD+WP9c38V11T7SsBTne9am33hTxpwRWDACFy7BZwm9dhIXXXJ9jpMqINwKSxTDJihlXRmvQcu58UwJPQPh3LzOCYR+1xYZORe6K6QnfVYn8f4epzAQwn0PFTJgKA54LfADBpbzAlDjmIdKdKj+iIOfGxrbqSrKcFKpkjEJAXsf8EtwDHS4pFWUinh9SxpJlW9/VA2CkGJc7Q89Ygc7lvRrkzO4oUdbOzTVeDYMMLAEnJJMCORUDvo6gTHccyCH/DwickMSRMv+G76Aq6vc6ZSVBM3BTKN9D9bprQ2N5ezddzBWzOVI6sGPQpeKCjgwcTJCVruhXIJZTMfyJcRSGtNwsKhAi+Ja6ijJdUBCalJQV2j1N6YeTeDid/yUjWN2/pNGn69bd0yzn8+3VW7li5Kw3h5i4gRuaR8DzPXZFRcVFoe6ZUmwUWFj5sFGYF5QXCoXoHriw0fsc5/DT0prl7SURnJRo0hDhTw1cbyEfcWIGCq1bxqZpNP+W90L4s62GX4g+olPA98LYSPCdxJDoV30a158wAkKYi9Z399QUS9kB14P0nLZ4fj63vdO63GJLJQaEclaN7F4JmUnReqh4w4biYKFRBBXLdai4gUbK63oT1r3v4lYvkkWVU8MSAYYI7o8K6EgHRhe0QLTepLIXtzKMKyYX7TmX+NUdwzBzma3MDp52p/WXhQoABG7Y1mx5c9kuUr90mMjMZGaz2hlcTBjcvp8UnxClIB4ghmRDpN3jChVEQcxZSinb6TW2iPUWAnqSSh2IxGEXHy7irMEhCC9Itl5GvcWkLfCustsb8tDt2j4MRoiubLK97V6fKsEPrvHpU1mCVPlRC9xk8CQfAHENSkKYz2kQFKjfqVe7L613W7p4Be2ZTmnmoCp1zHVRgkGkaPYHEOHkmFfusIit5IyY+ax2Xbow1H0ZhUgc4ZQ/ZO7Z5a4Jj/Pa8N+xW1olZ7xefXNPiK8hNX5+21juzZQQTB6aXLo2cHdvYKef2DdfDV3kFMIj9VY+mwzebS5OydYtwS/5dxXWrMFGbInGrLawWB2JO8GP2tSjnr3FUPaMR9wsuB2WIFNjip8cjxfWpkWR28vV0BhXdCfXPJdsudsoyBLIYp2WDMyry/zvbPokdR64wx1sgDfH53A7u7J9v9UXWx2dYZaz64LPTLuSUlRGcmUl9napRoW8wyfQ6RNBgpTc7P0hbYhPMpZ2nH09ShpGj959sV7fec8sdFBiJuflbwKZTdeWerjHUFZ+m5xXZLelk73YSg238G4QUwHn0W/vPDL/R1EV/Sgcu8fDsi0C242HLymsvbOAifGoTa/NwYbnHzxqmrDQpN5pyPDfEo8cfflrP0aQtSJHsf6Xv/UjKqBwa0rUYArjnNIM8Ng1xIB1Xhs3rBY5dhXphNiFrQVKhtIBt7dAjfbTQSC000Tqk/WRQPUHvw5Sv2gHIW3fQUw9I8QdrqPkHcIx7es1Rm9ih6hf1k+I/sFhEv2h7i+SCllb20F3oJ2H08PzGwLCU+VfNXtDLK+As32P9RJ8w+K6RO6qIZroK2AGA7TaBxerSbuhBMrRLT54i9RP6Eteml44huwt+s7pJ/qlt3oo2Y9r2Bt0WBDtU00Rj9kYSH2tjCcWYj8IGkAB4QCbmpGK6W54NEI7nuERphuSs/XKgOaKRtuuvBHJQ7a8HO2H+9Bfy5Etglx4H4zwch65LI/2PvuPo7B+QjPEUtDIezsa8tovq1YT9WYE+98jYNeAxarRMbEai91U8IytwSIItoYxJi4C3tDOQLe0D7u1gBA8eA8gHqAkGQOvZHu4rmd/fbDwCCF1ULIp8Avtt+6xKbfatLVtC+WtGTI8Iq4e6ilA62E1UacYgjHqJAwm/fD6R9Pt6rcVDmxqQtt+axnmFTFEvOaD/aJh6B4W/dgxAjhtwns8d6QeFua9BcKtsS65nz62vtnPOgLSfFRGPNzvegix4XivBm5CTxThGkPWkbKPtkJiiJoIV+v1VbCgQyRxmXkhif68gGxq2cUfOaGBOCo3s/7wVBLh/ObmfGPhASgBqXTxpgzL2pVo+gd12opBTcyCzspaQOqXjj+cXwiOo9Vu4elTAhRbsZeIdk8oAl6/JE9o//66k/nYnXBd68Iwcu6aYcMHZP8TDV1bDKs5db5KLtHFKBRtGBJxQUGAXp0gA95wOak/S0rVMcXMOkiD1DL/3B8zfxrnMA02KxALZjF3oj/udhFj3m1JJWOSVQcvVLDuh5s8YoTwxz5T2jJQTDxs2AeExkBxReq4cUBBDYmiukiusKgoOI6UkGDUJCaQSPHxRmNC/AOae24t7861MgGzlbGTsQICsBZKi7NaqeAdBpBvjjsFdCR7m68FwKKG9SkBNDtNYUbcWd4bJN+bpfMLBky8eY/9e7sOeyidzr47bT2J2RAkCYPQ6DDUool3Jv6Dy2xiCp2++s7aiXjC44gbrY/NkTWpMGR6U0hnaJdtePVyYjibeySq3dUa89mNobk0A0DuImVxaYHXTs/MylQSTV5S8gORo0PZLtlipEi1JB4GlpiGqQ/oYady4Bb1EXXUdb5gxu/vsBgPEYowdzT2eRtk8GkKPpfvnr+Dli4N+Kn9ro8zUOL6rOnNf6W4NspIfcQV0bAoDmpFtnlE5sSy6D2lSbvAQ9ARVKFekL7/wxvrYw5NmJPp6bgkh1qHwGvEQ9t6GJZFoJvX1X1hkUmEkGpyj3XBpD3Ncj0VSDqGSUImFm4AuQNnDBWThnSiQ4SYiG4qHAPhvQ/Kw8oeyitQMpUFBecPb98DcsxnzeeG4xtLkoNdtL5OXAAAaSOsBDrmoPL29sVwOZwQeiA+sV7CVdiubjHPxq+tLCXz2JTub36MabfdK4cy6ur+2Za7auvgDEEazIQyoLo6hpx4FPlBiMRgs0pBIohv9YrBt5+xJPZPagmXU+kR8lMP+r1i3QsZ+xhFE8xoMYqpalAt9aiGa8FE0FSnRY80WpX7XOhhkeVgyn26MLQ3ZB1H9w1IXcAfnkfjeUQBWNTQsAhGU69vgBcRm2hmQ3vqTKW+qZYCP9bsOA2h4ug3iMQVF8dDKMWHHyxfuZoxrFk/7hU/UFAYwap7w2Z2I1rt2DymJo2AhzvHLK0lsYnakqWAu5tGICkxulGLFYhTVF60g4q7YxFQixVMRadOSDOz3MFRKoA/P1I2EXLbrOl7Sl4kDYvKny5cOWFkcW7BxVIStieybr+iO4MqljQnhheMlpGw+yPqDiR3RX4sPJDotiTuDvv5/V1Pq1m7aOiE8I/ROCocDN3JrB33bQPqEPR4yt8uKV11+3V5pQWjkblVfC/ENDq1u25/CbV9dMFFC3kmOMLdDS9a23ComBmCWesffj+msgeNd+xT4w5mhTv0tINBOGamIwXurVaWmc+2FVxJicIKgACvX1osOPUrr+BRTLz1wpiyRz87dNutj2g9dNR5xlOws3LnD0t/qGjR6DtayM51e3rrI9s0wU3T/uRIW5l9zFbWX5Wt3msMCPoEAHktvDB18RGxinb3i/uqPM61TMqyQ5lapjufFGtC7ycmLBYiI/fx1TVW4OlMYekf7wg8ny2nfAbkMYNsEEtjeehevWL06usAr6Sd/Pef1YxxsdKc2RVqAjBLljKCFs1+0IdUAsxU8CVEosLMrPoKz872rhHC8bOz6q11FUcglYewIeAi845iZmfxQQFo7ZaPQ6Y4n5nin8ulAjhqhrqlZX2L0idShJq3qBmT4ghtV0sNY1xfuWV9OABcB4+zmJnPmCga/Oxpz5m6tww3u4+hbGnRtqjRi6TIG6JcIuCe+acGGuaYddADpJbxoLEgD9JL7X6LB0aAPMDogrvNFvVAGHAzIA+akeADrtbWUVS3M5vN5jK6gn//GfID5sD9AGAB1LqVkPpEHifvkx7ED8tJfYSHSGEzNEYQh3ChhXwGD7XQmVWL+bAtyl+vrn8G7mrJQ9IBAzmzT4YlmeONjjBzRwSYkQJw4fl1GMCI4onS9iL8tSVMxBZT16qRY758QSTu+iUh4kri8cTtShYCmRGBKH8OlwH17OI7KvciSETrcp5mzms2DHjRp131Nvcjv71E+rvaeXI4ZKFHaWD299SnzT3Ip9uxA09bnFrIXnjqwcYOHW6nY6fNPCgGOyyN89y4gLdwyVCzh4nCWY02/t+j2lvjiyQhIuHeVmKNyd1xplP9EWun1V98jMDOoXPcXzM49qvuqXTUw7xtc+D0NnEpgm2VefyzNiyI7fhjArEgDJ/l//qIrSONXz/xvuIj+MXGr9pG4u9CKTOHq4aLoFwONoXIenXvJ9SK7tUkxK7xnslBSausInGJ5iRZoKMNK5FgEesuaV+OcVyOJcyFzwnhz4ArEo9gvv7nb8P/pz/y/33Bh/DhP5+NgzWWHRk3J2LYjz9RPBQnGQolsGSzfvystuwotlBPuU6kKFgWBKza4IUjNa/nu5l73HviyT4J7Gyuqbn6uevdXwN0XnjSjoX8WosZj11zVAtp8cOAs9CLf/+Ttvr4FLsasC0d2KEnNrXnsN1QFlM2sCMWy1nWZoxz8XBGBzNpPv3/L6VZL/M4oFQw6+cHS3e0Y1RhRQHy/dcBI27M+mRFLdc3WVRFF06MeEpirao3YhVLlCSjexPWpIln0tLiCJeyuucH93cWU5oMR+IYHX8jU4qDwvkFiKblN/sNUhqkqKhQhB2qrPg5ichvyHOsdecF53XWOGmCNC8vXpPGbY9HMuGEdpPzroBfd3Y05NbmSSgULksiZGIp03qa7Ajj/3sjvN5p4M/nbzOMx1AQqSyfp3yuZPAAN0yG2PkdecOwwTGPqyL6SJyZ28QxPzNdxG62cvnlu+sncgrRNXr2V3HUNqbzbRmSNno6GR/n0yVRotxSdjbkduz/NXCXk8kWh8mEEtu5qcl4GvofH03BQSBqYmZ2+pGLgn9L6cqjUTx4DtLv34+AkaaFZhnSL+Oa9SOzsF8cRn6Uo0w5hhdLEGPrwk4rcKd02JVYAdZn5Ar6kG0sV8Gd1k4T/DiqgZK9fx9HMdBFSNsO3R8LemuaPWOtn2bw50P7FMcuNnwJaB2uHjbIKhpfefNY8ITgRjzFyP0Y6//j4gdhpyR63Q01q8YMMsez9WOSUIWDUOfd7sb34mnTt0uuYtklH9X8SJQPYQGfyrSnrvObq7k8yXdcYYZ4tM+64Q5QLAusZXaaR94NIgriRoyRRfwUstZll7phF70QpUeAaPaYIgfE6GnlvdGYtm1b3EZBdNeQhNgppBuPTxuykjpLqwZ+mD4Wlx9NWLHawQiLS9JW2JC7qxjwXMpreQ3x2U06uL8ht7l9+lhpwC7nQo70opRoqwIvDi+tD535brhD8Hk4X69hEMfsmu8KbEKvpbhS8kUXumVP6bFpzY6HBGjgTG/1Cc0WfW16LGWXzIV+aiJTLG26QzK66UDTUOidyRpQsGXpNICP0DpobgG7I3QuM6npL8pe9w5Cz23/F9flP78KhcUU+UtdYFnuOi434ogUurpSMGyKLTbjHVgLG6nBe9alQ9XVjmkhAX55DHH5cvodgl0+DIFR4gDilH1anXRzWcYEEIfS2mmWBLEc+FnhrGCg+7KsUFV0T144dPU8X5zMD1NodVPT2wLy/JZVKdP97tTeHO4TsaYtYq1m9x/b9cPImnhRrsjs1KdJ4pA47NfL4ynYBH4N3wL4Hp9+g+XR2LBUwvcH1b8Pxs/KwbthGgXdhlHyWXGbftMYXXK3Rlbtv2OlW+K2emKmR1mWJ3HltkS3lTtXBPyImO3HiBHQ84gxfdTSYF8sBzm7RI4hUImxlbgUy0pYIi8R2uYh2KX4CDDK/susVD3DZmOfWZTyv9jrtw0OzFjMOAaN3yy+nU3SIlFnjhyk3ipnSPog+c3yG2ub8aBaN88pyynfTlSCEuN64jIMK3GJs7ebMcvU3iiUFpO8LOykUvliFAjzb8Ry++ifQO9s7GwvL5XQL+7Hg6kmR9UMKaoEfr8fIOcvHc4LEj3i51f/HeGEQ466qgh94j7iPH3f5p/a6Er04mDdVrDzILq2WFfy3+k74HQvQ80AQggidHozMI+ROsucTWL8ifTVBAPXRyjlaKetp2fQ3tHqFvVZxCkk9PF+kZvSPQASxNROm08v5PhztPAqRjj6AYA1Q8Hw+sihAhnDSBqTcYbAV3XG6mmD9cjT9NC1CWtz/vu/9P9pyZOPz37yHwkYmcihh7DgC3645kKk8nxAPQZe2ry9AD6ZmvD334s9ecDNALwUEzDzfFTaT+eB78l0E4MGetckFWV+BDfl7HcF/t4Oq22BRYRdwBdZWuUi3M8MI/Txjds1+QQak8YESNs2b92Pbr1KucHwaQrNjTqdcaCF0r5Il+ZMoPFcWFjTs2fAS7VvZvfuGfvtHkbk4V0k2O7hMf5yYlz3LyqWsasGbnYMNCOCDkcAXfeoB375uUImD5cr5KkfQEUqAsbI2DSQH9PO9+ZS2weMTG+mDyzy9keGjcR7mW2/Da3dnwpsANXV21Ni2+ddaf3N9nFruZ+upNCt6it67Mk0q1A2Z7eSYEFD1mCyEGy4fd55gbnYhgECt+5bVePQ8sr51XzHlSv67RQ7b+lzUmqWvdqu/Svr5FBRKjeJZks1YfkWhYqPNSVrUEKRgldB/9nERDyVR3/Wy4XYAgoKgd1dq+v8srk8mXd1bZ+94uDYNya0Bic0G77Yq4KG0l/0KiFu9bPX23V99uB/nwSotARKhBKSJKyQjACQJorE4eEIZhExspmxpJIA2L9BTk4zCwRzGd0Z7J8m21f9xM7orpjDkzTkC8NJfy0yGdWDX4sb4+mpig87LPx9IM1rDeochT8BuFq82ZKXiMGPeyGA35XlniBUvGYmHo44MfGLfBcpcCq4mb3dC4PgWKqBQDl265YzCxojMT/JuuXIT7WmjpjuxaTFO5xZf7h4UGIXvQW+VI5sxracvbRFXNHRs/CWmAW1Uzq8zsDc16e3YhBAYOX9I1c23OFyNj0a2AK7LzrgfIJqv5ez+eGJdtht0cYCXy3DAaA+pHQ0jZegWn7qvFe+/Dro9CrrGqu2bT9v4LIdVNTqZcT+tO8K26M3KQySnBRMLw2JX+UB/KdpbGr8Nol3SiFxlkC/ELs0kbIPp/FUDAoodkRWHTqwGlmDpMXwqjDf5W5ZXkt7ccU48ozyGwVBOELeUkO6w9FIpljy7G5DaUCN84FCqDkXzheQUQgXwC25UD7AlRSEHthxbSI1QLGwKKDw5H0XehYfMO03HW4rHCXr+R9bbPF0kxsESZlG1JbNYXZlNDyQF0d+Ln9OimyigA0jnFBkWKJBjmKSBAHkScUDXILwanOtZF43q+ApGRsYSnqE8Jz53bAJ81m5SWhqWbcd4ylmN5gFBDp2EQDiJPf8/E7ljW7j7wLerHBmPjOc5W32CdA/eElobCk8HVMxHpBJEIdV+BlngjK9wULeKzML5zLts4YLBBU1/+NdpCfHL12bZ8b8Xfja+rpxObriNdPTbPTquLXlQQaK5jv+XlH+8uWVMqfftZ3Gg085CPdIVt7t3NtL4Z8MwEvj7NRnmzrQ5+zo4NhrJ7PtdHQ6o322CluNtc4ufQOptn0g4EpB70Dngw/gS6GtjNzpxeZ7eSXRkoRewhmmkwSi/LPrGxa5vWH9IpcUP3quaokn9iVVni4w0nHaBC7SGDaUCi6NgAlgA9GKjNQqKYACLo6CH2ktBSLJYMvabLc3tGTbWxqykfR7wskgR18+wyuZEuaF8g4f0FoxNNotm2icTA2DYDvef6ZqsbvZF1e5uxhT1YJWTS2Nk79Jq2FYaQ8f4KFeYZ2Wihl8R986ArhiHKBbATUYR5PRI2jqrOR/A/Uecett8zsrgRA0zrn35+GuwvG99m6tyLYx4vYsGhGJL16aSBRIfgda5I0tN33MY+Q4HHMBAsnzXasl8ntAez432loGYPkCHxR2KE3DqRgnaFwdm2iFwKsiYWcBemLgD0CG5LObykDg3fs2deaRp/fQZr/U1WyIP4vRqRwvtdLAGEMKGMMQ5pFBtrlKRjAIXi20d5Zw2laH2cdJ7FevXqblFd4vhHpxYOzC/9+aFTu8JAWblWZ//KlQKYWPOPWlmf/zt10MmMtx7J49Uw7HDiIX4YvQt1fEKTgJtb8L3gPJTKmUZ2p4o39CI5/7vPu/dp5UymRKZVyuKcNWeTO7WS+tAomMyWz9BNyTf+9dzoZNToNpcGuB2HwiGoF6o9bMV+Wfv8FuIB4Ihg8xAL68AFMT9YhBXRMmUKoljTIOzjqrWdrFDGG4PCCvETOwTym69w+4ew8UEExAIfjCpk3bjrIbJ36+GiIk1C0IxhGHNtLaF7ZGOuG3zwCff3eCjwfe+X9vVTnghHwHCzK3j6Fg7Jq8GASaKiTg6hkI5DTNd3qN3y77+/42cEmuByPt72F63m8gU5gqOlhU6kcElyaB98/ffbj/R8OIFMsw+8SmLqE4ys/ypQtdwdPhdF9WxM5jRMHHKbOUxVQHVk4XMY6MiNF2oKuoc55zdA0GNaXLUYxns5vTxT0VlFmrQ42TKTumLRN493x6Judh1xXlpwIliYXdKb+lkSOWdcdIG1hv9sclMKDdNtJEYbHoYozxdt2Y9sd2SCzmMMgGLuO7Jw5edAXfLB2Z4LBqZv4brnOmCkiK4z9T5qilFmObnYGixT3mqAR16YDPlYbzs330Oba37kvqV/DLbKEiu4/Om4DUKCSFTAgdAU2AGmxY8waPnB2YsXxLnaXeesxU5JyNHU8JFxvSqglQVRtr0p5vXlYKnLCkKeP67Kx8VY3gNuuLLF3MLoPz9qB78qEylzIoX7KgBLa4LL7pB5WUwZVtrOdkvsu10Fp2bSuh/+0vR5EB/PW7AEGvbgCTC3oSAmQSRwiY4chz1PRsj03hqXr41lVED+DTw5Af5PcZ12ay6ezMmJhWMuAi5Jr4uFo2CEwuR+aMRsEc9hSp/AsBL8EzVuhel2EDWE9aPot49jhNaZnDkyAIrF2mtRPYTPfkRF8OxLVxVi5W05ubHO20drE8/xqrcI5vq40HuRfZpWyXn6BTuNYYFAVgru0o9DQVjoFj038Uku2xcIz0cB/+dM8uWGABPE4qN4QAsII1I1eDuu0EwqABmBECMa8XVZo9lxcBoQsS+9OifkjA3SKxLjzo0jTuG3kxqN1OxFul8RRTcdKkBl6uSMxPuf3AwPogMS4i4ANfPVDvswNGaA6eB+PA6lkH5v4iNSSGYBD6C/YBFvGXW9LUm/md49C4B9avRz9cOkY5wxAdx85AosSGgwNikDpGbl/24Pc+7ktqYK64lgfPhq3j5YmPhVE3dSeXlxDR/U8GRwBEJHc3wtmUSHyV/04ill3VsDQTBxLt3K1xCb/JGcanWzvUWgwE8QR1SHuay0dx3qDMkvzVGsJhOdO8pafDZUeepRKSIektD60rTAEW9VS69WLYLHT1soW5ITWOkM5rloJhZ5Spl61M2A6WpNglmAMg4n8ZzZ3D45BZbqlgGovDvI030TZ4+5NIyWV2NQyd4NNkGEx0bxIXA7BhcKh9WoOH77PEMZGSlZMFmeHEi1xRklyZWsRQ7l4D8nJZOdAD3QMkh58D3dffR3KyPcrJgbJVjINMPpgjGXvHk4jLZmy3WVlbgUzg9kkgASyQQ17p526spmxhjl3qSPESGbWkCUJrf16QKP654mW+H2WZBN/Nfu1iyF+AhpPFfW79bsNuQ0D0y2O/4r657xNDZfK9VAdPoDqpj2nO9+cKBW3clI4bxyaanHkTQDoQMOpgWwCDsE6Gu3N+MgmWw4vD9y6+6b4sMskqPr59n+5FJMWaN3ohMSFuDX9NwpP1Dio7MQm4UGYt5xwuZLqN+rCwVPw/+NNUyRhyfiDPeQVP+4D/+8xnOB72TtIwhKJAcBPQCEjuYQDv6SIbL5ywzPawH7LWuHoHCqUKhVAnKndDC1gbhmLQDLzrGkK5PG753rvAKAhCBgJP7lldS3qY5b9ax1pVY7DlL7+l27UewzDv/JcuYuP5n+V/d8oZmOYYCYlKUhpsLe/OU9YvN5PtsqXMkbkuounXnBiEWJSBudZXJeSS4zcxWejleSokz4G/GMYmxW4WC6XLCRwhtTd8cTy5E6MxvOgUqJCF1Bq7fnAIpA5SS/OeSEgXlB3AF+DJBP//LpEQhMMvKt+h4O+OYHLFw6YGf/8qrzLsulSwZh6cqyZNgwqCzsgG1gJvyVrbVC4VnVi/6WlueGjiMvN0U/0ylMaNswXDoNDm0cI46nyJuMHKzKcGZT62LuTdSsj8L+s/0ohwvmj4Rea9CEEYw7OjHANVG+riC0ljhMcqj/ZbdSNZ/2lukeaXFTO0MEx5h2cYI0Jwb7+2Om0VcdhmrkUaEQHf9jZATr9sMam4Yg3KyxlXFJMRVzDksgtXUKENXqzjVVrwRL4zb+fh8BIAVQsaR1hHGwFcA4HGY8yjhGEEqoEY2UdZI40AYumj/T8DqNY4bj5p3woea6oxXguwjRh5Uj4ej1oe3QfQTe4ZMorD8YOcm+ipKTEIZpTdKJCfyGYywi/4BCt0l04Lf9xF3/2VMciYRC7hcM6g/aA1PRbG69QJmsi9d9qBdoLho5cvtCgFkI3EKLubL3++lj3MTvX8h1BRaG6YGQSiGjyMYMzbr53cdSmf79m6486c2RCWYAsuQQ3PtEaYCGADyGwqgID3ssvNFWAZyKjPMgiral9XAQkMjlSkZEN3fLz1L+voRPHAp/qZLqK+MamR4fsBP/H+9QkMkGjtlqWdpzuQG5cQ2I6OwM0qMSezNA1rtZaohb64tRufpRZ/wxoAxAYNML7GQ+waV8rdvrJR7pLiBw8tLeViL13KdcGHlBYUtnmzV3t8CtVeG7biRI16547lhZdrOGH21PgU2vMIvl98+KlT8ihnPv9bBzr2R0610mhcqWL8yKMHBaKhERYSyG9I+qOubqlbThmURn4bgTRJEgpTBPmHgFqQn0XeVErAUHJyGEKeIennkjxjFs2LLTpLI03asV7RNgvzX5rw/z86s1g8Pxjutb8h7yHf2C8ib7Z5Nh9eT8HlEZBmDAPCYK8+eLfQsKq44NHurVQdHURkkBpXziYvfLGTiIAvbnG4DIMsW5iXDcFYviIVgOvYcUVXjPn5JHbyBSRzH3uS9z92UvG7YpznLe5zjYWKCkEMiC0qiIViIEqBWBBTVHhdiNY6sLeMygbgizLWkLHhtN0R4x4WRKtYEGTgWYKTE24dgN4TW3A64VlsgEzwOsaFzj6QscbkDDlPM4KtMHwSEtTSkvaTyIsPmEFKGAG2m4kjAMxBJb864a2rC+RYXmI4p/1xoZXPccyrN5hjgqzT8f+98237m/grer9lM6mw66DvNy+A8POl0RRk94XbOxGcgXfzIpx/lK7cxA1b2IGKQKy4lLrNPTFByUHmFuZm54emAsrE41RYVRYGZGJwefjcjC7IVg2/Xzivr6dklmnOsGvDeMja7FjmfODfWMYwgRUwsY9UXHqICqwB1U/ZJant4vHvQr+Kj91F7SJURqT2fzb+3YQwj29RYS223Po9lXX6gJ146SR4xO2nkT8+ImdpL2rH9pEMhIFIPjS7VYzFCpLsxsdFkgHkz3fICUGeLzILFaTbDi0X1pz/ls2jIZbjznVxAZ7jHUNB9lya6EBwu3k/XIKx3dXxQ9oJ7qlQNN+yAe8pSKFdLrZPwXsos93PJxHjo/CxeGwyokyCJEgF+l5wrj0tSV4gqOVI3k2nMGJQnk2GdXohgyVDxzojDEqCMNatnCtWuKbmFPBcmTmrxaUqAI+JvgGBRa1FDY+09+5YF9KDPXmI7BdklT2IAuyK8BNLHR0AC0ulD7jb/m0KigYbkAun4A0Avg0I5Dxpeh7YWos5Za1MVjsAMTBya5eIWgsQqCJfLWVWuNWEIntcExdEQUdrdjeAQemq+R68K6dhaAVxgKUSX85YB584BDf7usMnfE0ojLyA4+CrwARUOgVYAwqdCsZYv1Unq1NmY1Bo8Ocy0cXPpfpX84047mwubnfzZ9tXJTh/RgX/b/jfFPznIa3GF+b4aZ01Z1owEWq9YEvDCfiPS5idEBPeEiYqSvB8f8bFS9FKwSX1FwaMH8D+dgGzA9/59sbJ9RC8Vcc/43QO8RHzADqY7HNjs0e5D7L6+0MdcIf0IasxePMwfQ1pWmfFoJPoDE8OEDb1N65McvuqxmSXFD90ZGkpD3vpMq4DspfyKu0YMq6Mw38hEg9YFH72gYmhVjap3dZYjqKzbsD7m68N9VYHa1/yjGKG8JUcGqFtk1GzYoAoizJDtpMzdhYefuH9AnOuy4HbMNJMHnt2AnSjZSN5GcqHplkTllS1h9lWhWnEQHUsYZqcLK6O/+aEI002dZmeYPx+N7o8Ffd9Lt8TaHoiETzk+nA+kC4kGEAjlJL5gYmFVpNyAux+IUerAB6GmrcQt3fDLKxfjvi+PvS0jTHhNnEzwfl/pHBOaqpsCVKYBmhiNbzUzL/+sDTp2YVHD5+ck6UcocO/eKClLdstWSKHSYJ0gYNf+P6N6r19m0LihVxBAQlSFlXHQVBKcssahzUthSdrVlcNLItK94fhEVzY6fSv3xbZKWz116//ROHpvCg/7Tl623DSBsvOL1djMAJTDL4W+etsExHD/dvJ8uuVKg2DYZrgbvWmjRES7/+FYG0xCfa/J3jekh45FJJZzv3nYtujeI8O2+N706InWzJ3kBi3yqGTvPp8ojixs/tTXRWBfvnwCiRkTlg+wTTmRY7tuioC9WzHhyvXfFxHZggXrjzs+XOvEQHM2DzMZTKKYmHqjg08hLq9MN3LxwvTZsB4DkKXc9FqfdwGBXd42+bs7ysPWXRYHPrPPfevs9z1yRu2wJVEEIc35K1TeEc2HrFapDd/npnLQrium50/bT/7n7tqcoIU0UNxLJu1mchiri1O8fvi55wUFsTfT/mVgAGpr9SfV+n9gT5hsOHR6DThh3zuo63UV+Yv85WeJ+kFfulh87HPVykB/4oiPfUtzVfx7aUYpoqTJh/DJwr1+wAuwnUgr97fIpV6NwZhLo8F5wH0PZBnPN+SN2BgynIKFl2kMuhiKkMFKMUUUPmFexSBfjHS+PdwWP4P+BmAHzviWBjvaxVAid4Rq9HLnBpZonQf4Oz+AD3TfzVM4MiiF7PPoCvz4xCM8EIpXTH7w6yCMcJY1A8C28VrqoT3EqIHV4MFTmq6rqcwq3E49yG4BsDVliwEI7pYiirQ0wwFcKvDOI0qWOtogOpNAxsGk86gOl2AGq8C0hlZliaOKvIPgWA94ztvHXnKuiZQlAog13XBhloShrvWFSBo/hbUhqtWqDm235r/uNSGhqml0zKFgn4mgsv9ap7DqRaZxRWfmiXPkStoInfmtIiuoovc68+rDc+Ru03AscwRiBvEAFlJngNh1eGG+gS31zckuKRZnDNqzQG7dux67boqYF57/hTwnZ3SRijPYjYkWoKzznBVh6ECXgaPauEqEOck3kxu2Bv+W+VSW7fluRA8u1j7rfXb6mkYyr1bvdRWgFDr94r+Kgt3KVZftkt2uSlCBD1YH2LdqgMcD9s0o9srpHaMDLh2JZQNZRHKgDNlq7PsQr+HVAQ5jxZcjGFtswqwSy4ave9tMy9sl5PIGl2LLL5oQdtAbXBbKKVOjmpV6xLYwfffus1xF1h63HwscMRj2ONWxEtG6x6c1tI+0zfhS84X++Uip6uZNQBIIHOOUcMcF9cyW9bJ0X0vMCOBY4G3Aoe7zaWVAH5w0caNt56hdqJ71RA0Tzh/Uy0Zw+V76vl3qx0o6PVrzvamgu51denp/f0ZGX3DqcCuhhKEjwHR+6lKW8VKVY9DEeVZlqE3PEi8lkt1wGaxcEGdRhmsTdbGxVn+rIYmYn9nRYws2M7C9dxjumWT8a2A/viEv4V9dnW2vYX/uRvafowHF10s7IJldtNgzu4E8qq9h0Rrt6xM+GvF5siqMCyMDWvye2jUYoF5TUFBHemr5Veibv8Q1pgDLAjgTUQopjHtmUSqey/V9j+L/T+1Gu6cUqkmOod9P44N/HO1CqipxNp27HRnEazyz4OFKXSrZ6wGedtfF/nj/EZNyyt/6Zxtp2wfHfh6dd4CDVlYt9Df36+AKbV6YU6jMee6pgtuLbr5S/LPNxkOigWua5g0edoLK6mDzOp3O1905lyXTK+hXTcn5HeetA6lCVzWMOnytN+tZCrNRFKynV1S0t27yUk/ojdp2Y6AaO7FAIQ9fV366K71t3+lL6q8Jf9EnDaNWDygBrgzIUDeVzfQW1TcFXsHmFaddSsN08jExnojdFoBLmKfnJMq/0rBYO3mzb9zCk7jN1JVJAhIVnopEW7r1ayUu32lRu6S4gcPLinlYi9dwnWBvKiIq3fRO/MqzIYJIY1CE2kchNXBBz8vM6/wOHsL2SohlFBQEgO1fzJ/Y5NHxFlaRcQmkd6QgPyGUMENWlhNeq54TizwSrNLXHXnq29uIJRZV5cJZUHNCigzBOk/NdV2PCyNr/Ynv5FPkkT30cnJxe7tAgGjssg9KekaDCRNGmn5G9RhaW8PyaDsbEgGhRtaYxlgZVgH/JNf3Rb94TdueBV5B0oEYiZUwrgd+Ydh0u+PSEE+BqAl4I7olff492iEQHXbsN1v0vs0eJsr8d6xxHsJOPJ3ZhmenKcuL7IoK8rqLNRl6nwSrjyTQJzxdx5ZlPAKl6HIWPR3Rk5Oxkc3qczAvgLvgUjikPWUpo/wUthnveU6XWkTlKef1XDOtTxraGhs48ZO6Cz9cYp+yJ++o/bmAQrUedJWMnSBD84nx5En5c/JONKM/I3LXYaUP5dPvoyMMx6oaI9LyfBN4K5gWGQYJU8qJq2nvVG82e3lzjKsSViYdLcIUsaTMl166acK7Y+4nETt+14Mny7kjBT5a/ksDN7AhgNZtqjMYPOxwCH2dBr/0TtAbRHsq8Oh41xRUlgRGiFJjkBBQNJvpDFiu9TA6uPpbZ+b59qHzUZII0aA6cSB4LQYYHaJxg7zB044uChri6qEJ07c2VIjbq3TYmrfJsrnVYWJExPDwtaGePa4g54eD6jU1rYE7KLRpxU5/SuWQ43ocRu8LESs3mWfVe59LcCWPrECwOptrd6pqIwvcxjkD16PZQpqjt5873Uf4JyO1WVEO7ftF4pkcwyOKiweDE+dx479ZWF6RgaF58GnMMMtvXZRUA9mU4qxDANzXucwf/+NB3vOELhlZQ1r3TrfqjAMjAmr8n1oqJG3MnVW5jbCM8Uz4bbdnNrsLQas11HBM4cZdAJDcs7MPrvXbCohE8gIMFla1m3JMjPKamXc1reyhnFgN2zynkRuYf0byhOmK82xMNInqWWeYlHHYWYt9xSjljmUAh46jCM/4HDc4PTDy9WxTMwP0A/IzIWMG1wtNITUogpbmfQG8gwhImYU30gR+U1tNfCGHN+fReLLD+nsAPMiFRLIXEuk+Oi3fyWLEdZozMRiEsaMtAKhMaatyRuhmhnIndQeBp0glbMBAO/DMv4UoXjb3/ct+dvx8ZMwFRv7JwYqZtI6AAhFCdEr9Sv5h/WH+/vrMTtG//0tfJdhV39fPbJx5phIAppJdBmD4AJ+qZO3qbFv+/vfpHx1eJ44FRvzxb2NsrNvindiVJkBXDyCvX/Wk1KGN/0UK2JlxnGzcTsQQdvCuE4v5rdjx+EoWcLzaIXWjRMPeJJJSPLSSjkRmL0Q0iLOa244mselm2O5zZOXAf+WlIppsEtikxtnKQPxQl/AtPmD491jeByObKcFm9KBM5FWTP8Hz3KsCakeBBAMQJIGc7b+3fGI4+/fYWfFf5U13r1Ly6jlPsNqr3/fym61H8Fi1jN97YUhMOdpBwF2G8RfOGPXJi1u0MobapF8f512yHtHLJYagrNnLtTC48ba769r2droWysYR2sBF1lg4vQs30FPv4Ji5qTFLXXsOvVJSfHwBfC6AS9LlMn5wFYXiY7g5VxVgPOrknU3S3XtOZe548TSkf1dTpPc+Esz+otKdct4yGD99pTrNPmGhSNrR3fAU3rVtYa7TPC1zlWmut4onNLfna7dbxxnOk2qDqfQJFeKmlnN8RtcCS3lsI3TpPfkTqN2/eUprrAx73rmixB2PcHrFnaDtfCkvnXn9jq2dsf2Vu4kCrhuakHtM5QYEAw4bMwDAtt7iuHa7Tu1bP22nS5Ua1t163WtXOCfn7X+jdQ6ZGvfjOnZ2u1mGuDdyKfPfNeFiWGseF3EyRU3djOeOAG6yH95fiGNjhMrmTqePEnu4FsA+gQJ+GU4DGEQJjD5DB4CxOts00EiBJJpoP216FJjJGXlqoDNEITHIg6R+VwESiaNyccIF59i55PI1r+WpQuIJFamEyf4MNelHFudWoHXez5ct/+aXmp/VXVAFrjcJWt+1WF8mQehoGpvpsNYVxZfttvU4PKqrsd1ULP/IOnfQV/wKmyc96SQlHZwi/uabMOE12Stfj5iHnMhlY6+wQI8k56wuxBin3iI2CO6mPaM3doJVFtlCP6XpP8jCKSXGLY1RNCeuRpaxgYVBkZnBaZ6JWF/dvJ9i8TGveVn/VsAWTQxD/p2/11jkg77CWbHQQTnuthCd9wnq4vt67nPrCwMzkCwL/XWsVkDZ9W+TFBI/JfYyW4QzmzOuEZZy1CAg0DB2Oukp5vRhS/9RailhPzL7VAC/jDfiUtQFjonyq6lhjq3F6UUtTsEVH5XGeCgeUwe7bCcC+Vk4y3fhr41vrxHQsOa11+T5bmavjb9zTcXGpUNgHoVgnxKb80R2fI5M4HGTqPdUVmXy0L/aEb7LgLTPJv2NLO1elO6lWpQb8Ei0fZJJ6YyQjZSNFc9Y88s4PX3R1uwAFwAtZbOivq7NVweNpHLgPWrqL9tmckoytuqZ2+c4WFXyvlUpTZrH5p+8V71eWOXtNiQKyWFQ/U4Ehu0IgaHMyytsdpnX1Ct3bOGSsJNzTauuvhQ4ap1j1xFEq7BOHGnX2ms4wkVGTjNvhY4V4z0eERbrIxaKkepcHMeRY5SozpgNbmlfRs914YaUJM67Na64KyXdD212LWj0VygcVwv26SVfBGnrVQ9g9p36+n/MwYr1mj1YEfcBbaCKgtaKshdJOOalKsOJhYvk68SauQ87hlTFHF9y26KZslxWtvYW1txStuqC2SMkrmqDp25yVnQK3ugUXDlwSQbSoo62C31V7izTvY/a/8G+XaOfadg9Hm5KGySuCnllqqlgSJ7zlmOKP+ZrPjyv0pYYqwuajDblS16QNnn2QijSVUrPKDZLYy9XgUF1JAaej16pAgoqjxqtGtkN1yphxSc9QK5BORSe5iKEwcqvUqjcYV5aZ4P9rVOoOp5C2fWIXfEdqjWVJBG2dp1JaflZ1IBZY/TUwYLg0VlvVseagGgvlhzRB/OBoAqvJlI2Vk9GScF9CPJKwq/Fd2zKDZC+z5XXG0/uUgMYUNlKdp6UMtIgXWDXLmDsUC4L1axR+xLC7o9ewZybNl53GDHKmoRwMW6W9y/TKnRlfnWLk3R41uXBo2uMvaoDWOueXtnoyqnJfTebIn4C2ERhY2OTm75mSXnojhgeI6cknJYd4kdGPc0W3PMmaZGBT23HmYFLbFyy/f+abK8KDDCyDNZMktkzTImylD0h7Tx3xGeojJrxOJcRBVZM6ph5hip2omfTtoIj8QJdI6yuR5glwos9+Dh586aUU8wF7IkNUmPuL0doXIFxVhkj9VKrLrjclbpuSB7uJ2kN5gsKxG5ikzFrL2DTDklp4ajiRpeMHPVOW4JwOGzrUiaeVDuvqPkYi1xg1W5N1jybAAqehR5BYVN1nI2TmfRpd3ogHrCZ+5xw4GlyCEUHnSSqXcwTgtkacdRqKiSHuiFVRK0fXfpll07bPTcUUTLsS12Wh5hslM5zRKulSrutPXzDQIzljEKUURxN0Gv9Z87BM+QUxpGUYDlTIC1MfJcyLTX7GXxxE3YJc2zJx9dTgWwPW8xelcvFAvMzkc/sVecyZBKNCBFh2ZbC7A7T2705IXjFAA74NB9ZyMpgWgRSkp3JNC6yIYr48EZiYraatQzpqWiPizlCqAN4KSRckRHsOidYXoX/XUlajr2VHCkgR5ELaCcW69NRwo150cnl0qFhcZquTpRJFhiGojStkpylOngcVWupiuVAYLsqRo1QjQ7XfXmsqzfYObtq3ZDEYVVZK+W0zMBjmJrqSIsG/DMFe8sPgez5eD5v+zuITS5y1BmVT1zRXbVuBPkNCIK+0u8BHt01nnBdjjOnDp2bPfKccGgx/qK9DGacki4B48eJwHYpvwzeVEn0qH+p3a1rdEKYKtOng2KsoqG9fLRwoqGrTtOkaajZxoscqbwpVr3n2NQgJ3pyS8ishdel3b0Xff0ReOffo321bBLcguMk5ef0XiPNUvFvTYLqqeVKYIyU8SFsOPUcf7bztcrq3c6b1qpc4l3dFqSWQ/O7eELsJ8tU1ITN57bY9t2O+05YwmzI6PDn/3QiNx8UDOA/RiR0CLZxlui2XX10DAyjaN/UDbUtKo/mlqjrdWX31ZWtzN08dK4ti8MqB1NO1brsUxJucXn9o0uSrT+KMqh7Vne+rabQONuyF86FKOy1aVdEe/vk1a+FApNR7QDPpEdcrAX0ZNyERK7SvgBUEkvI0YlkZT/Fr7klzu2jJBjxZLbA4eFovQdinoBNdp7arKMDr2kxyLtXq7sMf+idcnRcE3rkpat/22PLNplFY+TplO6+n615PS1ge+VdXPuvMMPl4wD4NeOw8zy3laY5h5QADJ5L1rOwDsC7Pf1/UyvByYC/77EuyRyT+BcqFaFYKWOPPcEzrWI478zL/tyACYCHhXjABgAt5s14D3uGX5Uc/5Rnsn4gQkb8hQcGRCA5kgghGbSJRl05A5IiDxyBSFEHblBoK5P/QBSkwEDBBcBeDFfOIIA5/ARFBgoP4IB57qEJ58e4YHCpyN84A52ZBegwHv6LDWUHnc+aAGrmlm1JkU898kqn/0Gridd63L2xi+o3I6p3XxBe+oaItRl7MKD24ugwpqCuhL+aECUVK6pAyNrL5LPNgvUQ3+GtUnhZAU/VgFNAEtpzMn3bxlJhBcWq85z/wY4PaLVMTXt7/8FVKz96JWdte0U0rWIU9Xclko2cPZEKiAFMTMJlCvJBhSMJ0oe3q4DDLHm5yhkZzZSI5xWrNevhv1vYecbcjj/qEwE7R+xh/KP2P+aHZjujwMYGEUxnj/DUPxplcn9OGj97M4X+PxguIC/v8fB4AdD9HjvB3xh3HN5887Xx0HWR/T9PR/P5c8/LZ8fFcjxWp0jz54rEKOMQXSGRoMu0X8UuBUoGp3nfyzEouaR1bP3ACJMKOPimt7FqJpumJadSKbSmeyZrx8nhWKpXKnW6o1mq93p9vqD4Wg8mc7mi+Vq7bieH4TRGzCvcAyAEIygGE6QFM2wHC+Ikqyomm6Ylu24h33+qw7CKE7SLC/Kqm7arh/GaV7WbT/O637e7wcQYUJVTTdMy3Zczw/CKE7SLC/Kqm7arh/GaV7WbT/O637eD8Si5pHVB4CVjuYi6vh5a0Wl1mh19Ojq1aef/iRFMwKhSCyRyli5QqlSa7Q6vYWlwcraxtbO3sG5o5MLl/MM9FZmqcgpdSERC0/ibV3OO74tnsqE/CCMK5DB6SnkFdhypfqHcGpdyr0Yh27wr9ef8qdAnjcprtBPAe4jvwTPcqWdH9EWni3w+JEu/PK41vh0wvNrnguBPB09i6xyAa7wgvngPhPzDJKtpis1Uz8L3BFX8hhihFGVwVULlWR1Y1Q8vrYSTSkJA52b4/+/mIRtGE0Pandemsq3YskK46gpUMWOsXjgcXAdpL1UXb1i7WP/7MbGM6cLofcFjbUZuRe9FPL8U1DxSNWVNkdRclSPsTgqAfhKoF3RYBnr6wI2qjoY65k7slrEuYiDwMoVmj3SeGyX8Dk5WNAB29TBaTeyKAdvlgxpOVthHHKlb4xx3t5eytwlLhN5PHti/AirgrURU/KU8hk9+PN+F5HFUbCPAY9sIX75/QtIs+gx49u6fbGYpAczsGIER51qBmOmiQxkAqZRmcD387TgLGIJ+fmZpvzR+XrlFVOCGSuZzXiHEPyBNDURUILPoRxDFzvJUsKLUpgq1xZjK++Iq6INYBbMWBsR6xXIkMhbKfQerPhDUy52w9BJmEUVBAEBBekC9geZddUcITkDjF3eeEmPfV4LQjs6lAsNX8RGRTY+TeSJHVPp7OmQozxgTMLt04e9SEovAo7vhUuTxnPGlCuK9pKsKcQgFxcYIQ4lJtVSh+iU92hyYHQN5GOPWcyAlop9+3UtTHkjWN+gpWTkhnHr9YyWm00pSEKtb3qrMcQdnMgnDPz9z/+yO7SexziSdtxJZNTIBAarfyXxjeJ7jVSPsa7FB1lqm5LhhUU7rnIhj8EJY2ddtgL5QWfJJ7RMmphkyWRyYvVUO5C1oFcBHWj4orSk+OS//xmxRMp6SdqbHnGKmFyW6QkhGtf6QwY4ZspEzJ1+ygyBQYNI4sTsIqInsAZGOlUnZRP3Fzm4L0jMrVbrezdA69wEE+ZtiN0pYW46wIGoW2bsD/zUEkQZH3ytkBy9iNp1utEoCCmNJ5pR18aP7ZZ7EM/DujwOa5+I9As20toxxaEBxMKmJgdUNYqXdxbgUNojnqpmsnkNipdC7WRZCjx/a2fkoxY5KRee/Q2HL1yrbBNnoQU6FCAQIW5yNM1CLl6BsQOBZADd344oGzDxMn2ebzGzqF+tCjwbV6oZSdQTRl5zAT+YchjHP1bDhU9HAxcxRNOB8o5LyoZNEE9RM2dmPN7zHmltLtrDhV7Cc30YD+pvq2RoKcB6jK2LV85kN+EKDcSbaCf4IV/s8mrBcKhfgHJcGfW3ryyX0lh4vpSe2UDN2nm0up+6f9/2Z4uu+ugePB38pnmmNimnPZjzPeF9CxHwhmeR8bbT4F5pZKP8Dbr9pE8gzVXgQTxqlmcCOKcc9G2jkFUXUfPwjmMjUcTwVA/ixogscL+Is5RU5Qc7dvCPkj8aKw5l0GUgAOHhu4C0M4IEwT9SehzG1FvxQwaq8q2PqYJa/UdG1AC13w3l3JELjf2d9GDqz6xRN4lqcTUwUCZrsJXDAJdzaJZgt47G/mIvCQEQ8EsizS5joKhhbmLUwsplcJRmdTuhR0XWQWQp3SQGlqI8c+znngHkHCX+iCaWWsDZ8sJZtUBMbAj9m9epLUZl7emGUcMXfIGMu6ytYrOtuCQ0glkwa6NkwGKqiJSrkIjVQ5b14mFWGspgakLTAa6LY1z+3Ji47jKmxUgOkTjvJEHn8d7KnRtnqAQ1CUDlVNmUbv7EvQ8l7VrY1kYxj01pIxajh1ZSmhx7qdwykcfaZ8VRv2JsIIh5RGe2aL+G8CqCr76Ypenv23XsBoLWK9ON8rbHJpymcJ9KQ8rgTp9glZKa15LaRWxq/zExIecjvwtEVBSlgaM9StR6oA0TIcZTDrDdJf4lvEmJF7Kc3Mnbg94hoiHgy7hu70kSwGHD14iDOB/kAFNUTRmItic7f5NYT6TVih1vZLASBK82HN7BlITyjClpbOADC+zNHqfcYiXO6yruHq+chZXeIemgGAag9vygEpwICL5b9eII8QA5AhS7G4BZe/1kZJXSW0jfL7twXNrS9Eowr/MF8b0VPglKNAfY7r5N7VpKUD45gkCuyknEP40lucij6bcXsAOM31OcZscq5IaDSpA2cy13BqJ2RSt6gNVexbD/bXkLJ4lJNasSP/JeylfwNLt8pBN/NHqHKRs14tmpnlLuo++pE6ryRbujwhhh11X6IwK2u+9YwY/yEMK4XbjR4LCJ4F0fEWdSBnT4O7HjEhfBvDMomv7C0bgMlJbzgx2AIx/lA4j1+wD94NHKMCrS1l7LC1h93SrhXR+tge6xMFD6PQj+GG31adPpiEAhqucEKC/9QD9nHO3gpHrVYR9I3rCREKDuh1paPNALCYh+hgLd0d4KBMOTayKeBzkC6JhCycBpGIhXxRLn/koZSiJbGe8gcvzGn0oPUzpxwSCH6TaYBOBXLDIZsTeLgtfZ3BlrbfTM59hXJCjQWaXPRixLKF3yfEEs5aVYQJq0ZpoR722pBQaGgXbMv46XRFw0FApQS3O/ZkUuyXdNtvTpif0hzgG2BjILWjQpsFnX28w0XzYCNuoHHO5ZNMMlaSGuLMUlRqKNkPk2lP+SjI9M8q+QI3CaMMrRE466o9zJ4JRd2cNWCU9P2VTnEvnQtIA1kIw+oK1KPSthMW5bwUm5hpdcqeUjPKr7Rb6xylO7k7aiCVyR1nmyshRglUUP4nlYFml4sZXeceijq532HjuMlVHMlc86aWdOjdEp6pa6kpFAVatSXxVgrK/lp050KV58qsbptNOhDPCl/PrOff8e15FRWPlFuuiAPsCSDzk4LYPHyMDTla2T2iOhUOJ1/UZKogVn5AmsD0YoNcv0oRSUywOeACFzSek9/CmGd8AEIUnglEA8Xwn2exF0I+jv4Ya2AvzjVwe4MmHBwO/zEPBngFeQxTPKKrKMvsrL9ziJMa56aQjxJP1bwyCQo8oreyJbgqYjiDlb7rFIpYFzPXHvALPfsUE/xJDDyiWwoDEFC3DDcFXxsVCRLtDc2wZRciSCHBF3tohwvEPE0iMLet56WCmAOLzBQznw3hvkibejKIR/N4klhXVCf5dwbHyTo+LA6wELsndD9MEWD1WB9zwIUOqQa5kSFwI29j3FgAZp8rXhuZPYFWrlhj4hm+mLO/4DsBUOUVbcFZSkDnQNJocMz+PTUQdfQ1eCspLyQ13HIMzmT+QNetBUs/HQ6yhsUjTfGF3V5jfKsloqze9lr0f7Ad4o0GGizEAStxaU5hfOkQ4PVdF2m6IsKp1XVAfVB/G/J/2SvlkffA9vjJqgRnii2VSve1KYFK3zpsihMaqycaoqxql9P0IyLRMAAA==') format('woff2')"
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=74edcfb4&mpType=page */ 5);\n/* harmony import */ var _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 40).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./index.nvue?vue&type=style&index=0&lang=css&mpType=page */ 40).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"77f53a66\",\n  false,\n  _index_nvue_vue_type_template_id_74edcfb4_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/new/index.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0ZWRjZmI0Jm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2luZGV4Lm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI3N2Y1M2E2NlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9uZXcvaW5kZXgubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

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
  uniIcons: __webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 18).default
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-nav-bar.vue?vue&type=template&id=4afea59e&scoped=true& */ 8);\n/* harmony import */ var _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-nav-bar.vue?vue&type=script&lang=js& */ 26);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& */ 28).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& */ 28).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4afea59e\",\n  \"6d387a60\",\n  false,\n  _uni_nav_bar_vue_vue_type_template_id_4afea59e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-nav-bar/uni-nav-bar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0k7QUFDcEk7QUFDK0Q7QUFDTDtBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHFGQUE2RTtBQUNqSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMscUZBQTZFO0FBQ3RJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGlGQUFNO0FBQ1IsRUFBRSxrR0FBTTtBQUNSLEVBQUUsMkdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGFmZWE1OWUmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTRhZmVhNTllJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NGFmZWE1OWUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRhZmVhNTllXCIsXG4gIFwiNmQzODdhNjBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

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
  uniIcons: __webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 18).default
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-status-bar.vue?vue&type=template&id=86f9f2b8&scoped=true& */ 11);\n/* harmony import */ var _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-status-bar.vue?vue&type=script&lang=js& */ 13);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& */ 15).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& */ 15).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_status_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"86f9f2b8\",\n  \"f6541354\",\n  false,\n  _uni_status_bar_vue_vue_type_template_id_86f9f2b8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-status-bar/uni-status-bar.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUk7QUFDdkk7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHdGQUFnRjtBQUNwSSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsd0ZBQWdGO0FBQ3pJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSxxR0FBTTtBQUNSLEVBQUUsOEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg2ZjlmMmI4JnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXN0YXR1cy1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktc3RhdHVzLWJhci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04NmY5ZjJiOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1zdGF0dXMtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg2ZjlmMmI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI4NmY5ZjJiOFwiLFxuICBcImY2NTQxMzU0XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

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
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n\nvar statusBarHeight = uni.getSystemInfoSync().statusBarHeight + 'px';var _default =\n{\n  name: 'UniStatusBar',\n  data: function data() {\n    return {\n      statusBarHeight: statusBarHeight };\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc3RhdHVzLWJhci91bmktc3RhdHVzLWJhci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BLHFFO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLHNDQURBOztBQUdBLEdBTkEsRSIsImZpbGUiOiIxNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgOnN0eWxlPVwieyBoZWlnaHQ6IHN0YXR1c0JhckhlaWdodCB9XCIgY2xhc3M9XCJ1bmktc3RhdHVzLWJhclwiPlxuXHRcdDxzbG90IC8+XG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdHZhciBzdGF0dXNCYXJIZWlnaHQgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQgKyAncHgnXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnVW5pU3RhdHVzQmFyJyxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OiBzdGF0dXNCYXJIZWlnaHRcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdC51bmktc3RhdHVzLWJhciB7XG5cdFx0d2lkdGg6IDc1MHJweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0Ly8gaGVpZ2h0OiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XG5cdH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*********************************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-status-bar/uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-status-bar.vue?vue&type=style&index=0&id=86f9f2b8&lang=scss&scoped=true& */ 16);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_status_bar_vue_vue_type_style_index_0_id_86f9f2b8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
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
/* 17 */
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
/* 18 */
/*!*************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=0bf90c00&scoped=true& */ 19);\n/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 21);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& */ 24).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& */ 24).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"0bf90c00\",\n  \"6ad09232\",\n  false,\n  _uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"components/uni-icons/uni-icons.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBa0k7QUFDbEk7QUFDNkQ7QUFDTDtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxnR0FBTTtBQUNSLEVBQUUseUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsb0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmY5MGMwMCZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGJmOTBjMDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGJmOTBjMDAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiZjkwYzAwXCIsXG4gIFwiNmFkMDkyMzJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!********************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=template&id=0bf90c00&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=template&id=0bf90c00&scoped=true& */ 20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_0bf90c00_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 20 */
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
/* 21 */
/*!**************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 22);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNpQixDQUFnQix5akJBQUcsRUFBQyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\nvar _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.js */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\nvar domModule = weex.requireModule('dom');domModule.addRule('fontFace', { 'fontFamily': \"uniicons\",\n  'src': \"url('data:font/truetype;charset=utf-8;base64,AAEAAAAQAQAABAAARkZUTYj43ssAAHbYAAAAHEdERUYAJwBmAAB2uAAAAB5PUy8yWWlcqgAAAYgAAABgY21hcGBhbBUAAAK0AAACQmN2dCAMpf40AAAPKAAAACRmcGdtMPeelQAABPgAAAmWZ2FzcAAAABAAAHawAAAACGdseWZsfgfZAAAQEAAAYQxoZWFkFof6/wAAAQwAAAA2aGhlYQd+AyYAAAFEAAAAJGhtdHgkeBuYAAAB6AAAAMpsb2NhPEknLgAAD0wAAADCbWF4cAIjA3IAAAFoAAAAIG5hbWXWOTtUAABxHAAAAdRwb3N0TJE4igAAcvAAAAO/cHJlcKW5vmYAAA6QAAAAlQABAAAAAQAACV/OOV8PPPUAHwQAAAAAANmqW7kAAAAA2apcCQAA/yAEAAMgAAAACAACAAAAAAAAAAEAAAMg/yAAXAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAFAAEAAABgAXoADAAAAAAAAgBGAFQAbAAAAQQBogAAAAAABAP/AZAABgAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAIABgMAAAAAAAAAAAABEAAAAAAAAAAAAAAAUEZFRAGAAB3mEgMs/ywAXAMgAOAAAAABAAAAAAMYAs0AAAAgAAEBdgAiAAAAAAFVAAAD6QAsBAAAYADAAMAAYADAAMAAoACAAIAAYACgAIAAgABgALMAQABAAAUAVwBeAIABAAD0AQAA9AEAAEAAVgCgAOAAwADAAFEAfgCAAGAAQABgAGAAYAA+AFEAYABAAGAAYAA0AGAAPgFAAQAAgABAAAAAJQCBAQABQAFAASwAgABgAIAAwABgAGAAwADBAQAAgACAAGAAYADBAEAARABAABcBXwATAMAAwAFAAUABQAFAAMAAwAEeAF8AVQBAAAAAAAADAAAAAwAAABwAAQAAAAABPAADAAEAAAAcAAQBIAAAAEQAQAAFAAQAAAAdAHjhAuEy4gPiM+Jk4wPjM+Ng42TkCeQR5BPkNOQ55EPkZuRo5HLlCOUw5TLlNeU35WDlY+Vl5WjlieWQ5hL//wAAAAAAHQB44QDhMOIA4jDiYOMA4zLjYONj5ADkEOQT5DTkN+RA5GDkaORw5QDlMOUy5TTlN+Vg5WLlZeVn5YDlkOYS//8AAf/k/4sfBB7XHgod3h2yHRcc6Ry9HLscIBwaHBkb+Rv3G/Eb1RvUG80bQBsZGxgbFxsWGu4a7RrsGusa1BrOGk0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBgAAAQAAAAAAAAABAgAAAAIAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywCCNCsAcjQrAAI0KwAEOwB0NRWLAIQyuyAAEAQ2BCsBZlHFktsAUssABDIEUgsAJFY7ABRWJgRC2wBiywAEMgRSCwACsjsQQEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERC2wByyxBQVFsAFhRC2wCCywAWAgILAKQ0qwAFBYILAKI0JZsAtDSrAAUlggsAsjQlktsAksILgEAGIguAQAY4ojYbAMQ2AgimAgsAwjQiMtsAosS1RYsQcBRFkksA1lI3gtsAssS1FYS1NYsQcBRFkbIVkksBNlI3gtsAwssQANQ1VYsQ0NQ7ABYUKwCStZsABDsAIlQrIAAQBDYEKxCgIlQrELAiVCsAEWIyCwAyVQWLAAQ7AEJUKKiiCKI2GwCCohI7ABYSCKI2GwCCohG7AAQ7ACJUKwAiVhsAgqIVmwCkNHsAtDR2CwgGIgsAJFY7ABRWJgsQAAEyNEsAFDsAA+sgEBAUNgQi2wDSyxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAOLLEADSstsA8ssQENKy2wECyxAg0rLbARLLEDDSstsBIssQQNKy2wEyyxBQ0rLbAULLEGDSstsBUssQcNKy2wFiyxCA0rLbAXLLEJDSstsBgssAcrsQAFRVRYALANI0IgYLABYbUODgEADABCQopgsQwEK7BrKxsiWS2wGSyxABgrLbAaLLEBGCstsBsssQIYKy2wHCyxAxgrLbAdLLEEGCstsB4ssQUYKy2wHyyxBhgrLbAgLLEHGCstsCEssQgYKy2wIiyxCRgrLbAjLCBgsA5gIEMjsAFgQ7ACJbACJVFYIyA8sAFgI7ASZRwbISFZLbAkLLAjK7AjKi2wJSwgIEcgILACRWOwAUViYCNhOCMgilVYIEcgILACRWOwAUViYCNhOBshWS2wJiyxAAVFVFgAsAEWsCUqsAEVMBsiWS2wJyywByuxAAVFVFgAsAEWsCUqsAEVMBsiWS2wKCwgNbABYC2wKSwAsANFY7ABRWKwACuwAkVjsAFFYrAAK7AAFrQAAAAAAEQ+IzixKAEVKi2wKiwgPCBHILACRWOwAUViYLAAQ2E4LbArLC4XPC2wLCwgPCBHILACRWOwAUViYLAAQ2GwAUNjOC2wLSyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsiwBARUUKi2wLiywABawBCWwBCVHI0cjYbAGRStlii4jICA8ijgtsC8ssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAlDIIojRyNHI2EjRmCwBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhIyAgsAQmI0ZhOBsjsAlDRrACJbAJQ0cjRyNhYCCwBEOwgGJgIyCwACsjsARDYLAAK7AFJWGwBSWwgGKwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbAwLLAAFiAgILAFJiAuRyNHI2EjPDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvB3VuaUU2MTIAAAEAAf//AA8AAQAAAAwAAAAWAAAAAgABAAEAXwABAAQAAAACAAAAAAAAAAEAAAAA1aQnCAAAAADZqlu5AAAAANmqXAk=')\" });var _default =\n\n\n{\n  name: 'UniIcons',\n  props: {\n    type: {\n      type: String,\n      default: '' },\n\n    color: {\n      type: String,\n      default: '#333333' },\n\n    size: {\n      type: [Number, String],\n      default: 16 } },\n\n\n  data: function data() {\n    return {\n      icons: _icons.default };\n\n  },\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('click');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBLCtFOzs7O0FBRUEsMENBQ0EsZ0NBQ0Esd0JBREE7QUFFQSxzdHZDQUZBLEk7OztBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQUxBOztBQVNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQVRBLEVBRkE7OztBQWdCQSxNQWhCQSxrQkFnQkE7QUFDQTtBQUNBLDJCQURBOztBQUdBLEdBcEJBO0FBcUJBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0EsS0FIQSxFQXJCQSxFIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dGV4dCA6c3R5bGU9XCJ7IGNvbG9yOiBjb2xvciwgJ2ZvbnQtc2l6ZSc6IHNpemUgKyAncHgnIH1cIiBjbGFzcz1cInVuaS1pY29uc1wiIEBjbGljaz1cIl9vbkNsaWNrXCI+e3tpY29uc1t0eXBlXX19PC90ZXh0PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMuanMnO1xuXHQvLyAjaWZkZWYgQVBQLU5WVUVcblx0dmFyIGRvbU1vZHVsZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcblx0XHQnZm9udEZhbWlseSc6IFwidW5paWNvbnNcIixcblx0XHQnc3JjJzogXCJ1cmwoJ2RhdGE6Zm9udC90cnVldHlwZTtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBUUFRQUFCQUFBUmtaVVRZajQzc3NBQUhiWUFBQUFIRWRFUlVZQUp3Qm1BQUIydUFBQUFCNVBVeTh5V1dsY3FnQUFBWWdBQUFCZ1kyMWhjR0JoYkJVQUFBSzBBQUFDUW1OMmRDQU1wZjQwQUFBUEtBQUFBQ1JtY0dkdE1QZWVsUUFBQlBnQUFBbVdaMkZ6Y0FBQUFCQUFBSGF3QUFBQUNHZHNlV1pzZmdmWkFBQVFFQUFBWVF4b1pXRmtGb2Y2L3dBQUFRd0FBQUEyYUdobFlRZCtBeVlBQUFGRUFBQUFKR2h0ZEhna2VCdVlBQUFCNkFBQUFNcHNiMk5oUEVrbkxnQUFEMHdBQUFEQ2JXRjRjQUlqQTNJQUFBRm9BQUFBSUc1aGJXWFdPVHRVQUFCeEhBQUFBZFJ3YjNOMFRKRTRpZ0FBY3ZBQUFBTy9jSEpsY0tXNXZtWUFBQTZRQUFBQWxRQUJBQUFBQVFBQUNWL09PVjhQUFBVQUh3UUFBQUFBQU5tcVc3a0FBQUFBMmFwY0NRQUEveUFFQUFNZ0FBQUFDQUFDQUFBQUFBQUFBQUVBQUFNZy95QUFYQVFBQUFBQUFBUUFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUVBQUFCZ0FYb0FEQUFBQUFBQUFnQkdBRlFBYkFBQUFRUUJvZ0FBQUFBQUJBUC9BWkFBQmdBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUlBQmdNQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFVRVpGUkFHQUFCM21FZ01zL3l3QVhBTWdBT0FBQUFBQkFBQUFBQU1ZQXMwQUFBQWdBQUVCZGdBaUFBQUFBQUZWQUFBRDZRQXNCQUFBWUFEQUFNQUFZQURBQU1BQW9BQ0FBSUFBWUFDZ0FJQUFnQUJnQUxNQVFBQkFBQVVBVndCZUFJQUJBQUQwQVFBQTlBRUFBRUFBVmdDZ0FPQUF3QURBQUZFQWZnQ0FBR0FBUUFCZ0FHQUFZQUErQUZFQVlBQkFBR0FBWUFBMEFHQUFQZ0ZBQVFBQWdBQkFBQUFBSlFDQkFRQUJRQUZBQVN3QWdBQmdBSUFBd0FCZ0FHQUF3QURCQVFBQWdBQ0FBR0FBWUFEQkFFQUFSQUJBQUJjQlh3QVRBTUFBd0FGQUFVQUJRQUZBQU1BQXdBRWVBRjhBVlFCQUFBQUFBQUFEQUFBQUF3QUFBQndBQVFBQUFBQUJQQUFEQUFFQUFBQWNBQVFCSUFBQUFFUUFRQUFGQUFRQUFBQWRBSGpoQXVFeTRnUGlNK0prNHdQak0rTmc0MlRrQ2VRUjVCUGtOT1E1NUVQa1p1Um81SExsQ09VdzVUTGxOZVUzNVdEbFkrVmw1V2psaWVXUTVoTC8vd0FBQUFBQUhRQjQ0UURoTU9JQTRqRGlZT01BNHpMallPTmo1QURrRU9RVDVEVGtOK1JBNUdEa2FPUnc1UURsTU9VeTVUVGxOK1ZnNVdMbFplVm41WURsa09ZUy8vOEFBZi9rLzRzZkJCN1hIZ29kM2gyeUhSY2M2Unk5SExzY0lCd2FIQmtiK1J2M0cvRWIxUnZVRzgwYlFCc1pHeGdiRnhzV0d1NGE3UnJzR3VzYTFCck9HazBBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQmdBQUFRQUFBQUFBQUFBQkFnQUFBQUlBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBc0FBc3NDQmdaaTJ3QVN3Z1pDQ3d3RkN3QkNaYXNBUkZXMWdoSXlFYmlsZ2dzRkJRV0NHd1FGa2JJTEE0VUZnaHNEaFpXU0N3Q2tWaFpMQW9VRmdoc0FwRklMQXdVRmdoc0RCWkd5Q3d3RkJZSUdZZ2lvcGhJTEFLVUZoZ0d5Q3dJRkJZSWJBS1lCc2dzRFpRV0NHd05tQWJZRmxaV1J1d0FDdFpXU093QUZCWVpWbFpMYkFDTENCRklMQUVKV0ZrSUxBRlExQllzQVVqUXJBR0kwSWJJU0Zac0FGZ0xiQURMQ01oSXlFZ1pMRUZZa0lnc0FZalFySUtBQUlxSVNDd0JrTWdpaUNLc0FBcnNUQUZKWXBSV0dCUUcyRlNXVmdqV1NFZ3NFQlRXTEFBS3hzaHNFQlpJN0FBVUZobFdTMndCQ3l3Q0NOQ3NBY2pRckFBSTBLd0FFT3dCME5SV0xBSVF5dXlBQUVBUTJCQ3NCWmxIRmt0c0FVc3NBQkRJRVVnc0FKRlk3QUJSV0pnUkMyd0JpeXdBRU1nUlNDd0FDc2pzUVFFSldBZ1JZb2pZU0JrSUxBZ1VGZ2hzQUFic0RCUVdMQWdHN0JBV1ZranNBQlFXR1Zac0FNbEkyRkVSQzJ3Qnl5eEJRVkZzQUZoUkMyd0NDeXdBV0FnSUxBS1EwcXdBRkJZSUxBS0kwSlpzQXREU3JBQVVsZ2dzQXNqUWxrdHNBa3NJTGdFQUdJZ3VBUUFZNG9qWWJBTVEyQWdpbUFnc0F3alFpTXRzQW9zUzFSWXNRY0JSRmtrc0ExbEkzZ3RzQXNzUzFGWVMxTllzUWNCUkZrYklWa2tzQk5sSTNndHNBd3NzUUFOUTFWWXNRME5RN0FCWVVLd0NTdFpzQUJEc0FJbFFySUFBUUJEWUVLeENnSWxRckVMQWlWQ3NBRVdJeUN3QXlWUVdMQUFRN0FFSlVLS2lpQ0tJMkd3Q0NvaEk3QUJZU0NLSTJHd0NDb2hHN0FBUTdBQ0pVS3dBaVZoc0FncUlWbXdDa05Ic0F0RFIyQ3dnR0lnc0FKRlk3QUJSV0pnc1FBQUV5TkVzQUZEc0FBK3NnRUJBVU5nUWkyd0RTeXhBQVZGVkZnQXNBMGpRaUJnc0FGaHRRNE9BUUFNQUVKQ2ltQ3hEQVFyc0dzckd5SlpMYkFPTExFQURTc3RzQThzc1FFTkt5MndFQ3l4QWcwckxiQVJMTEVERFNzdHNCSXNzUVFOS3kyd0V5eXhCUTByTGJBVUxMRUdEU3N0c0JVc3NRY05LeTJ3Rml5eENBMHJMYkFYTExFSkRTc3RzQmdzc0FjcnNRQUZSVlJZQUxBTkkwSWdZTEFCWWJVT0RnRUFEQUJDUW9wZ3NRd0VLN0JyS3hzaVdTMndHU3l4QUJnckxiQWFMTEVCR0NzdHNCc3NzUUlZS3kyd0hDeXhBeGdyTGJBZExMRUVHQ3N0c0I0c3NRVVlLeTJ3SHl5eEJoZ3JMYkFnTExFSEdDc3RzQ0Vzc1FnWUt5MndJaXl4Q1JnckxiQWpMQ0Jnc0E1Z0lFTWpzQUZnUTdBQ0piQUNKVkZZSXlBOHNBRmdJN0FTWlJ3YklTRlpMYkFrTExBaks3QWpLaTJ3SlN3Z0lFY2dJTEFDUldPd0FVVmlZQ05oT0NNZ2lsVllJRWNnSUxBQ1JXT3dBVVZpWUNOaE9Cc2hXUzJ3Sml5eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndKeXl3Qnl1eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndLQ3dnTmJBQllDMndLU3dBc0FORlk3QUJSV0t3QUN1d0FrVmpzQUZGWXJBQUs3QUFGclFBQUFBQUFFUStJeml4S0FFVktpMndLaXdnUENCSElMQUNSV093QVVWaVlMQUFRMkU0TGJBckxDNFhQQzJ3TEN3Z1BDQkhJTEFDUldPd0FVVmlZTEFBUTJHd0FVTmpPQzJ3TFN5eEFnQVdKU0F1SUVld0FDTkNzQUlsU1lxS1J5TkhJMkVnV0dJYklWbXdBU05Dc2l3QkFSVVVLaTJ3TGl5d0FCYXdCQ1d3QkNWSEkwY2pZYkFHUlN0bGlpNGpJQ0E4aWpndHNDOHNzQUFXc0FRbHNBUWxJQzVISTBjallTQ3dCQ05Dc0FaRkt5Q3dZRkJZSUxCQVVWaXpBaUFESUJ1ekFpWURHbGxDUWlNZ3NBbERJSW9qUnlOSEkyRWpSbUN3QkVPd2dHSmdJTEFBS3lDS2ltRWdzQUpEWUdRanNBTkRZV1JRV0xBQ1EyRWJzQU5EWUZtd0F5V3dnR0poSXlBZ3NBUW1JMFpoT0JzanNBbERSckFDSmJBSlEwY2pSeU5oWUNDd0JFT3dnR0pnSXlDd0FDc2pzQVJEWUxBQUs3QUZKV0d3QlNXd2dHS3dCQ1poSUxBRUpXQmtJN0FESldCa1VGZ2hHeU1oV1NNZ0lMQUVKaU5HWVRoWkxiQXdMTEFBRmlBZ0lMQUZKaUF1UnlOSEkyRWpQRGd0c0RFc3NBQVdJTEFKSTBJZ0lDQkdJMGV3QUNzallUZ3RzRElzc0FBV3NBTWxzQUlsUnlOSEkyR3dBRlJZTGlBOEl5RWJzQUlsc0FJbFJ5TkhJMkVnc0FVbHNBUWxSeU5ISTJHd0JpV3dCU1ZKc0FJbFliQUJSV01qSUZoaUd5RlpZN0FCUldKZ0l5NGpJQ0E4aWpnaklWa3RzRE1zc0FBV0lMQUpReUF1UnlOSEkyRWdZTEFnWUdhd2dHSWpJQ0E4aWpndHNEUXNJeUF1UnJBQ0pVWlNXQ0E4V1M2eEpBRVVLeTJ3TlN3aklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTJMQ01nTGthd0FpVkdVbGdnUEZraklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTNMTEF1S3lNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkNzdHNEZ3NzQzhyaWlBZ1BMQUVJMEtLT0NNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkN1d0JFTXVzQ1FyTGJBNUxMQUFGckFFSmJBRUppQXVSeU5ISTJHd0JrVXJJeUE4SUM0ak9MRWtBUlFyTGJBNkxMRUpCQ1ZDc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBWkZLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdSN0FFUTdDQVltQWdzQUFySUlxS1lTQ3dBa05nWkNPd0EwTmhaRkJZc0FKRFlSdXdBME5nV2JBREpiQ0FZbUd3QWlWR1lUZ2pJRHdqT0JzaElDQkdJMGV3QUNzallUZ2hXYkVrQVJRckxiQTdMTEF1S3k2eEpBRVVLeTJ3UEN5d0x5c2hJeUFnUExBRUkwSWpPTEVrQVJRcnNBUkRMckFrS3kyd1BTeXdBQlVnUjdBQUkwS3lBQUVCRlJRVExyQXFLaTJ3UGl5d0FCVWdSN0FBSTBLeUFBRUJGUlFUTHJBcUtpMndQeXl4QUFFVUU3QXJLaTJ3UUN5d0xTb3RzRUVzc0FBV1JTTWdMaUJHaWlOaE9MRWtBUlFyTGJCQ0xMQUpJMEt3UVNzdHNFTXNzZ0FBT2lzdHNFUXNzZ0FCT2lzdHNFVXNzZ0VBT2lzdHNFWXNzZ0VCT2lzdHNFY3NzZ0FBT3lzdHNFZ3NzZ0FCT3lzdHNFa3NzZ0VBT3lzdHNFb3NzZ0VCT3lzdHNFc3NzZ0FBTnlzdHNFd3NzZ0FCTnlzdHNFMHNzZ0VBTnlzdHNFNHNzZ0VCTnlzdHNFOHNzZ0FBT1NzdHNGQXNzZ0FCT1NzdHNGRXNzZ0VBT1NzdHNGSXNzZ0VCT1NzdHNGTXNzZ0FBUENzdHNGUXNzZ0FCUENzdHNGVXNzZ0VBUENzdHNGWXNzZ0VCUENzdHNGY3NzZ0FBT0NzdHNGZ3NzZ0FCT0NzdHNGa3NzZ0VBT0NzdHNGb3NzZ0VCT0NzdHNGc3NzREFyTHJFa0FSUXJMYkJjTExBd0s3QTBLeTJ3WFN5d01DdXdOU3N0c0Y0c3NBQVdzREFyc0RZckxiQmZMTEF4S3k2eEpBRVVLeTJ3WUN5d01TdXdOQ3N0c0dFc3NERXJzRFVyTGJCaUxMQXhLN0EyS3kyd1l5eXdNaXN1c1NRQkZDc3RzR1Fzc0RJcnNEUXJMYkJsTExBeUs3QTFLeTJ3Wml5d01pdXdOaXN0c0djc3NETXJMckVrQVJRckxiQm9MTEF6SzdBMEt5MndhU3l3TXl1d05Tc3RzR29zc0RNcnNEWXJMYkJyTEN1d0NHV3dBeVJRZUxBQkZUQXRBQUJMdUFESVVsaXhBUUdPV2JrSUFBZ0FZeUN3QVNORUlMQURJM0N3RGtVZ0lFdTRBQTVSUzdBR1UxcFlzRFFic0NoWllHWWdpbFZZc0FJbFliQUJSV01qWXJBQ0kwU3pDZ2tGQkN1ekNnc0ZCQ3V6RGc4RkJDdFpzZ1FvQ1VWU1JMTUtEUVlFSzdFR0FVU3hKQUdJVVZpd1FJaFlzUVlEUkxFbUFZaFJXTGdFQUloWXNRWUJSRmxaV1ZtNEFmK0ZzQVNOc1FVQVJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFNZ0F5QXhqLzRRTWcveUFER1AvaEF5RC9JQUFBQUNnQUtBQW9BV1FDQ2dPMEJZb0dEZ2FpQjRnSWdBaklDWFlKOEFwNkNyUUxHQXRzRFBnTjNBNTBEMXdSeWhJeUV6QVRuaFFhRkhJVXZCVkFGZUlYSEJkOEdFb1lrQmpXR1RJWmpCbm9HbUFhb2hzQ0cxUWJsQnZxSENnY2VoeWlIT0FkREIxcUhhUWQ2aDRJSGtZZW5oN1lIemdnbWlEa0lRd2hKQ0U4SVZ3aHZpSWNKR1lraUNUMEpZWW1BQ1o0SjNZbnRpakVLUTRwZWltNktzUXNFQ3crTEx3dFNDM2VMZll1RGk0bUxqNHVpQzdRTHhZdlhDOTRMNW93QmpDR0FBQUFBZ0FpQUFBQk1nS3FBQU1BQndBcFFDWUFBQUFEQWdBRFZ3QUNBUUVDU3dBQ0FnRlBCQUVCQWdGREFBQUhCZ1VFQUFNQUF4RUZEeXN6RVNFUkp6TVJJeUlCRU83TXpBS3EvVllpQW1ZQUFBQUZBQ3ovNFFPOEF4Z0FGZ0F3QURvQVVnQmVBWGRMc0JOUVdFQktBZ0VBRFE0TkFBNW1BQU1PQVE0RFhnQUJDQWdCWEJBQkNRZ0tCZ2xlRVFFTUJnUUdERjRBQ3dRTGFROEJDQUFHREFnR1dBQUtCd1VDQkFzS0JGa1NBUTRPRFZFQURRMEtEa0liUzdBWFVGaEFTd0lCQUEwT0RRQU9aZ0FERGdFT0ExNEFBUWdJQVZ3UUFRa0lDZ2dKQ21ZUkFRd0dCQVlNWGdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWh0THNCaFFXRUJNQWdFQURRNE5BQTVtQUFNT0FRNERYZ0FCQ0FnQlhCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FodEFUZ0lCQUEwT0RRQU9aZ0FERGdFT0F3Rm1BQUVJRGdFSVpCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FsbFpXVUFvVTFNN096SXhGeGRUWGxOZVcxZzdVanRTUzBNM05URTZNam9YTUJjd1VSRXhHQkVvRlVBVEZpc0JCaXNCSWc0Q0hRRWhOVFFtTlRRdUFpc0JGU0VGRlJRV0ZBNENJd1ltS3dFbklRY3JBU0luSWk0Q1BRRVhJZ1lVRmpNeU5qUW1Gd1lIRGdNZUFUc0dNalluTGdFbkppY0JOVFErQWpzQk1oWWRBUUVaR3hwVEVpVWNFZ09RQVFvWUp4NkYva29Db2dFVkh5TU9EaDhPSUMzK1NTd2RJaFFaR1NBVENIY01FaElNRFJJU2pBZ0dCUXNFQWdRUERpVkRVVkJBSkJjV0NRVUpCUVVHL3FRRkR4b1Z2QjhwQWg4QkRCa25Ha3dwRUJ3RURTQWJFbUdJTkJjNk9pVVhDUUVCZ0lBQkV4c2dEcWMvRVJvUkVSb1JmQm9XRXlRT0VBMElHQm9OSXhFVEZBRjM1QXNZRXd3ZEp1TUFBQUlBWVArQUE2QUN3QUFIQUZjQVNFQkZTa2xET1RnMkp5WWNHUmNXREFRRFR3OENBUVFDUUFBRUF3RURCQUZtQUFBRkFRSURBQUpaQUFNRUFRTk5BQU1EQVZFQUFRTUJSUWtJVEVzd0xRaFhDVmNURUFZUUt3QWdCaEFXSURZUUpUSWVBaFVVQnlZbkxnRTFORGMxTmo4RFBnRTNOamMyTnpZdkFUVW1OelltSnlZbkl3WUhEZ0VYRmdjVUJ4VU9BUmNlQVJjV0Z4WVZNQlVVQmhRUEFSUWpEZ0VISmpVMFBnUUNyUDZvOVBRQldQVCtZRTJPWmp4WVVXa0VBZ0VCQVFJQ0FnRUNBZzBGRXdnSENBRUVDZ1FPRXloTkkwd29GQTRFQ2dRQkJBRUVCUTRJQkE0SUFRRUNBU2x3SEZrYk1VZFRZd0xBOVA2bzlQUUJXTkU4Wm81Tmltb2hId0VHRGdNREJnTURCZ1lHQXdVREhTSVdMQ01VQWdFVk9STTZHak1GQlRNYU9oTTVGUUVCQVFvVEdoa2dDU0VlRUNBSUF3VUNBUUVCRENnTWFvczBZMU5ITVJzQUFBQUFBd0RBLytBRFFBSmdBQUFBVXdEQUFUWkxzQXRRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQ2dBRFFCdExzQXhRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQndBRFFCdEFISk9TaFFBRUFRdWVtcFdFZWdVQUFhbW5jMEpBUHhFS0NBb0FBMEJaV1V1d0MxQllRRFVEQVFFTEFBc0JBR1lFQVFBS0N3QUtaQUFLQndzS0IyUUpDQUlIQmdzSEJtUUFBZ0FMQVFJTFdRd0JCZ1lGVUFBRkJRc0ZRaHRMc0F4UVdFQXZBd0VCQ3dBTEFRQm1CQUVBQndzQUIyUUtDUWdEQndZTEJ3WmtBQUlBQ3dFQ0Mxa01BUVlHQlZBQUJRVUxCVUliUURVREFRRUxBQXNCQUdZRUFRQUtDd0FLWkFBS0J3c0tCMlFKQ0FJSEJnc0hCbVFBQWdBTEFRSUxXUXdCQmdZRlVBQUZCUXNGUWxsWlFCNVZWSXVLWldSaVlWOWVYVnhVd0ZYQVRrMDVPQzh1SnlVZkhoTVNEUTRyQ1FFdUFTY21KeTRCUHdFMk56NEROVGN5UGdFM1BnRTFOQzRESXpjK0FUYzJKaU1pRGdFVkhnRWZBU0lIRkJZWEhnTVhNeFlYRmg4REJnY09BUWNPQkFjR0ZTRTBMZ01ISVRZM05qYytBVGN5TmpJK0FUSStBVEkzTmpjMkp6MENOQ1k5QXljdUFTY21Md0V1QWljbUp5WStBVGMxSmljbU56WXlGeFlIRGdJSE1RWVZIZ0VIQmdjVURnRVZCdzRDQnc0QkR3RWRBUVlkQVJRR0ZSUVhIZ0lYRmhjZUFSY1dGeDRDRndHVkFVSVFSQU1lQ2dNQkFRRU1CZ0lFQkFNQkFnVUpBd0VMQXdNREFnRURBZ1lCQVZCR0wwWWdBUVlDQXdzQkN3RUNCUVFGQVFJSEJ3TUZCd01CQVFJRkdBc0dFeEVURWdocEFvQVNGeUVVNHY3dEJRd1dJQWtaRVFFRkF3UURCQU1FQXdJcEVBd0JBUVVEQ2dNRkJ3RUJDQWtCQkFRQ0FnY0JDUUVCSFNCeUlCMEJBUVVEQVFFQkN3TUVCUWtKQVFJRUJRRURDZ01GQVFFTUJ4d1BCd2dZRVJrSklSVUVCUVVDQVkzK3V3WUxBUVlNQkNrU0V4TVJCUkFSRHdVRkFRd0xCeVlMQlFjRUFnRUpCaXdhTmxFb1BDTWFLZ2tJRXdza0NRWUtCUUlCTGhFSENROEZSQXNEQlFvREFRTURCQVFESlVNU0lSVVVDRVFIQ0JBTEJBVUNBUUVCQVFFQkNSUU9NZ2dKQndRRkFnTUNDQWNGRWdnT0tnY0VCUVFERXhJTUNBa0REQnN3S1IwaElSMHBGU1lOQXdVR0FoSU5FaE1EQkFVRUJ3a1dGUVFJRUFjSENBSURCQWtFREFZeURna09CUUVDQkFJRkJBc1FBd1FGQXdBQUJBREEvK0FEUUFKZ0FBc0FEQUJmQU13QmNrdXdDMUJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dRQmdOQUcwdXdERkJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dOQmdOQUcwQWNuNTZSREFRSEJLcW1vWkNHQlFZSHRiTi9Ua3hMSFJZSUVBWURRRmxaUzdBTFVGaEFSd2tCQndRR0JBY0daZ29CQmhBRUJoQmtBQkFOQkJBTlpBOE9BZzBNQkEwTVpBQUlBQkVCQ0JGWkFnRUFCUUVEQkFBRFZ3QUJBQVFIQVFSWEVnRU1EQXRRQUFzTEN3dENHMHV3REZCWVFFRUpBUWNFQmdRSEJtWUtBUVlOQkFZTlpCQVBEZ01OREFRTkRHUUFDQUFSQVFnUldRSUJBQVVCQXdRQUExY0FBUUFFQndFRVZ4SUJEQXdMVUFBTEN3c0xRaHRBUndrQkJ3UUdCQWNHWmdvQkJoQUVCaEJrQUJBTkJCQU5aQThPQWcwTUJBME1aQUFJQUJFQkNCRlpBZ0VBQlFFREJBQURWd0FCQUFRSEFRUlhFZ0VNREF0UUFBc0xDd3RDV1ZsQUpHRmdsNVp4Y0c1dGEycHBhR0RNWWN4YVdVVkVPem96TVNzcUh4NFJFUkVSRVJBVEZDc0JJelVqRlNNVk14VXpOVE1GQVM0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd2NoTmpjMk56NEJOekkyTWo0Qk1qNEJNamMyTnpZblBRSTBKajBESnk0Qkp5WXZBUzRDSnlZbkpqNEJOelVtSnlZM05qSVhGZ2NPQWdjeEJoVWVBUWNHQnhRT0FSVUhEZ0lIRGdFUEFSMEJCaDBCRkFZVkZCY2VBaGNXRng0QkZ4WVhIZ0lYQTBBeUhESXlIREwrVlFGQ0VFUURIZ29EQVFFQkRBWUNCQVFEQVFJRkNRTUJDd01EQXdJQkF3SUdBUUZRUmk5R0lBRUdBZ01MQVFzQkFnVUVCUUVDQndjREJRY0RBUUVDQlJnTEJoTVJFeElJYVFLQUVoY2hGT0wrN1FVTUZpQUpHUkVCQlFNRUF3UURCQU1DS1JBTUFRRUZBd29EQlFjQkFRZ0pBUVFFQWdJSEFRa0JBUjBnY2lBZEFRRUZBd0VCQVFzREJBVUpDUUVDQkFVQkF3b0RCUUVCREFjY0R3Y0lHQkVaQ1NFVkJBVUZBZ0h1TWpJY01qSkYvcnNHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFoRUJ3Z1FDd1FGQWdFQkFRRUJBUWtVRGpJSUNRY0VCUUlEQWdnSEJSSUlEaW9IQkFVRUF4TVNEQWdKQXd3Yk1Da2RJU0VkS1JVbURRTUZCZ0lTRFJJVEF3UUZCQWNKRmhVRUNCQUhCd2dDQXdRSkJBd0dNZzRKRGdVQkFnUUNCUVFMRUFNRUJRTUFBQUlBWVArQUE2QUN3QUFIQUVRQU1rQXZRUnNhQ3dRQ0F3RkFBQUFBQXdJQUExa0VBUUlCQVFKTkJBRUNBZ0ZSQUFFQ0FVVUpDQ2NrQ0VRSlJCTVFCUkFyQUNBR0VCWWdOaEFCSWlZblBnRTNQZ0UxTkNjbUp5WW5KajhCTlRZbUp5WStBamMyTnpNV0Z4NEJCd1lYTUJjZUFRY09BUWNPQlJVVUZoY1dGdzRDQXF6K3FQVDBBVmowL21CV21UVWNjQ2dFQWdnT0JCTUpCd2dCQWdRRUFnSUdEZ29vVENOTktCUU9CQW9FQVFRQkJBVVBCd0lHQndnRkJBSURhVkVqV20wQ3dQVCtxUFQwQVZqOTEwaEFEQ2dNQVFZT0lCQWVJUlV0SXhRQkFnY3hGZ2NaR2g4T013VUZNeG82RXprVkF3b1RHaGtnQ1FzWUZCQU9FUWdPQmdFZklTczlJUUFBQUFFQXdQL2dBMEFDWUFCU0FEZEFORUUvUGhBSkJRVUFBVUFEQVFFQ0FBSUJBR1lFQVFBRkFnQUZaQUFDQWdWUEFBVUZDd1ZDVFV3NE55NHRKaVFlSFJJUkJnNHJKUzRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3TFhFRVFESGdvREFRRUJEQVlDQkFRREFRSUZDUU1CQ3dNREF3SUJBd0lHQVFGUVJpOUdJQUVHQWdNTEFRc0JBZ1VFQlFFQ0J3Y0RCUWNEQVFFQ0JSZ0xCaE1SRXhJSWFRS0FFaGNoRkVnR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBZ0FBQUFBQWdEQS8rQURRQUpnQUFzQVhnREFRQXBOUzBvY0ZRVUxCZ0ZBUzdBTFVGaEFMZ0FJQVFBSVhBa0JCd1FHQUFkZUNnRUdDd1FHQzJRQ0FRQUZBUU1FQUFOWUFBRUFCQWNCQkZjQUN3c0xDMEliUzdBTVVGaEFMUUFJQVFob0NRRUhCQVlBQjE0S0FRWUxCQVlMWkFJQkFBVUJBd1FBQTFnQUFRQUVCd0VFVndBTEN3c0xRaHRBTGdBSUFRaG9DUUVIQkFZRUJ3Wm1DZ0VHQ3dRR0MyUUNBUUFGQVFNRUFBTllBQUVBQkFjQkJGY0FDd3NMQzBKWldVQVVXVmhFUXpvNU1qQXFLUjRkRVJFUkVSRVFEQlFyQVNNMUl4VWpGVE1WTXpVekF5NEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdOQU1od3lNaHd5YVJCRUF4NEtBd0VCQVF3R0FnUUVBd0VDQlFrREFRc0RBd01DQVFNQ0JnRUJVRVl2UmlBQkJnSURDd0VMQVFJRkJBVUJBZ2NIQXdVSEF3RUJBZ1VZQ3dZVEVSTVNDR2tDZ0JJWElSUUI3akl5SERJeS9uWUdDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWdBQUFJQW9QL0FBM2NDZ0FCSkFJd0FYRUJaWWdFR0IzbDNFaEFFQUFZQ1FBQURBZ2NDQXdkbUFBWUhBQWNHQUdZQUFnQUhCZ0lIV1FBQUFBa0JBQWxaQUFFQUNBVUJDRmtBQlFRRUJVMEFCUVVFVVFBRUJRUkZoWU9BZm1WallXQlBUVUpBTFN3cUtDUWlDaEFySlM0Qkl5SU9BUWNHSXlJbUx3RW1Md0VtTHdFdUF5OEJMZ0kxTkQ0Q056WW5KaThCSmlNaUJ3WWpCdzRDQnc0QkZCNEJGeDRCRng0QkZ4NEJNekkrQWpjMkp5WUhCZ2NHSXlJbkxnRW5MZ1kyTnpZM01EY3lOVFl6TWhZZkFSNEJCd1lYSGdJZkFSNEJGeFlYRmg4QkZoOEJGak15TmpjMk16SWVBaGNXQndZRFFCdG5KUVlNQ2dRd0NnUUtDd0lsRmdRQkFnUUdCZzBRREFFS0NBZ0NCZ2tISVI0UU1RSWRKaHdrQVFFQkRoY1BCQVFFQ0JRUUkwZ3pMRG8yTldFa0ZoWWpJQkkyS3dZZEpDWUtGVUJvTkRrckdTZ2xJU01UQkFNRUNTRUNBUjBUREJVTEFpNGpGU0FDQVFvTERBRVhGUXNCQWdNQkF4WW5BaHdSRFI4ZkJnb1BLeWtqQ2hzR0JJRWJPd0lFQWg4SENnSWZHQU1DQXdNR0J3MFREUUVMQ2d3RUF3Z0xEZ2tzUHlFN0F5UVhBUUVKRmhnTURSWWlKRE1kUUdFMUxqQW5KaW9DQ2hvV1FUY0dhU3NFQVVvbUx5MFpMekkxUHpNbUdBNGNGUUVCRWd3TkFqbEtIQ3dZQ1JNT0RnRVpGd3NCQXdJQkJCY2lBaGdQRkFRUkdCb0tHeFlSQUFBREFJQUFJQU9BQWlBQUF3QUdBQk1BUEVBNUVoRU9EUXdKQ0FRSUF3SUJRQVFCQVFBQ0F3RUNWd1VCQXdBQUEwc0ZBUU1EQUU4QUFBTUFRd2NIQUFBSEV3Y1RCZ1VBQXdBREVRWVBLeE1SSVJFQkpTRUJFUmNIRnpjWE54YzNKemNSZ0FNQS9vRCt1Z0tNL1ZybWlBU2VZR0NlQklqbUFpRCtBQUlBL3VqNC9rQUJySytiQkl0SlNZc0VtNi8rVkFBQ0FJRC80QU9BQW1BQUp3QlZBR3BBWnpReUlRTUVBQlFCQVFKS0FRZ0JUaGdDREFrL0FRY01CVUFBQkFBQ0FBUUNaZ1VEQWdJQkFBSUJaQXNLQWdnQkNRRUlDV1lBQ1F3QkNReGtBQVlBQUFRR0FGa0FBUUFNQndFTVdRQUhCd3NIUWxGUFRVdEpTRVpGUlVRK1BDa29FUklSSVNZUURSUXJBREllQVJVVUJ3WWpJaWNpSXljakppY2lCeU1IRGdFUEFUNEROVFFuSmljbUp5WTFORFlrSWc0QkZSUVhIZ0lYSmpVeEZoVVVCd1lXRnpNeVB3STJQd0V6SXpZM01oY1ZNeklWRmpNeVBnRTBKZ0dodnFOZVkyV1dWRGNCQWdFQ0R3NFJFQUVFQlFzQ1R3c0xCUUVOQWdFREFUVmVBV3JRc1djOUFRTUNBUUlISkFJSkNBWURCQU5sQVFvSkFRRUxDd3NLQWdFOVdtaXdabWNDUUVxQVMyOU1UeE1CQkFFR0FnRUVBU01oSkJNRkFoWVRBd0VFQVVOUFMzOXFVNDVVV2t3QkJBUUJBd0VMREFKeUJnd0NBUUVzQVFNRUF3RURBUUVVVFlxbmpnQUFBQUFEQUdEL2dBT2dBc0FBQ1FBUkFCZ0FuclVVQVFZRkFVQkxzQXBRV0VBNkFBRUFDQUFCQ0dZQUJnVUZCbDBBQWdBQUFRSUFWd3dCQ0FBTEJBZ0xWd0FFQUFNSkJBTlhDZ0VKQlFVSlN3b0JDUWtGVHdjQkJRa0ZReHRBT1FBQkFBZ0FBUWhtQUFZRkJta0FBZ0FBQVFJQVZ3d0JDQUFMQkFnTFZ3QUVBQU1KQkFOWENnRUpCUVVKU3dvQkNRa0ZUd2NCQlFrRlExbEFGZ29LR0JjV0ZSTVNDaEVLRVJFUkVoRVJFUkVRRFJZckV5RVZNelVoRVRNMUl6Y1JJUmN6TlRNUkF5TVZKeUVSSVlBQ0FDRDl3T0RBNEFGRmdCdGdJR0J1L3M0Q0FBS2d3T0QrUUNDZy9rQ0FnQUhBL21CdGJRR0FBQUFBQVFDZy84QURkd0tBQUVrQU5rQXpFaEFDQUFNQlFBQUNBd0pvQUFNQUEyZ0FBUUFFQUFFRVpnQUFBUVFBVFFBQUFBUlJBQVFBQkVWQ1FDMHNLaWdrSWdVUUt5VXVBU01pRGdFSEJpTWlKaThCSmk4QkppOEJMZ012QVM0Q05UUStBamMySnlZdkFTWWpJZ2NHSXdjT0FnY09BUlFlQVJjZUFSY2VBUmNlQVRNeVBnSTNOaWNtQTBBYlp5VUdEQW9FTUFvRUNnc0NKUllFQVFJRUJnWU5FQXdCQ2dnSUFnWUpCeUVlRURFQ0hTWWNKQUVCQVE0WER3UUVCQWdVRUNOSU15dzZOalZoSkJZV0l5QVNOaXNHZ1JzN0FnUUNId2NLQWg4WUF3SURBd1lIRFJNTkFRc0tEQVFEQ0FzT0NTdy9JVHNESkJjQkFRa1dHQXdORmlJa014MUFZVFV1TUNjbUtnSUtHaFpCTndZQUFBQUFBZ0NBQUNBRGdBSWdBQXdBRHdBclFDZ1BDd29IQmdVQ0FRZ0FBUUZBQUFFQUFBRkxBQUVCQUU4Q0FRQUJBRU1BQUE0TkFBd0FEQU1PS3lVUkJSY0hKd2NuQnljM0pSRUJJUUVEZ1A3NmlBU2VZR0NlQklqKytnTHYvU0VCY0NBQjVNZWJCSXRKU1lzRW04ZitIQUlBL3VnQUFBQUJBSUQvNEFPQUFtQUFMUUJCUUQ0aURBb0RBZ0FtQVFZREZ3RUJCZ05BQlFRQ0FnQURBQUlEWmdBREJnQURCbVFBQUFBR0FRQUdXUUFCQVFzQlFpa25KU01oSUI0ZEhSd1dGQkFIRHlzQUlnNEJGUlFYSGdJWEpqVXhGaFVVQndZV0Z6TXlQd0kyUHdFekl6WTNNaGNWTXpJVkZqTXlQZ0UwSmdKbzBMRm5QUUVEQWdFQ0J5UUNDUWdHQXdRRFpRRUtDUUVCQ3dzTENnSUJQVnBvc0dabkFtQlRqbFJhVEFFRUJBRURBUXNNQW5JR0RBSUJBU3dCQXdRREFRTUJBUlJOaXFlT0FBQUFBQUlBWVArQUE2QUN3QUFGQUEwQWJVdXdDbEJZUUNrQUFRWURCZ0VEWmdBRUF3TUVYUUFBQUFJR0FBSlhCd0VHQVFNR1N3Y0JCZ1lEVHdVQkF3WURReHRBS0FBQkJnTUdBUU5tQUFRREJHa0FBQUFDQmdBQ1Z3Y0JCZ0VEQmtzSEFRWUdBMDhGQVFNR0EwTlpRQTRHQmdZTkJnMFJFUklSRVJBSUZDc0JJUkV6TlNFRkVTRVhNelV6RVFLZy9jRGdBV0Qrd0FGRmdCdGdBc0QrUU9BZy9rQ0FnQUhBQUFBQUFBY0FzLy9oQXlnQ1p3QTNBRVlBV0FCbUFIRUFqd0M3QVFCQUlaa0JDd2taRkJNREFBZDJBUVFBQlFFTUEwd3BBZ0lNQlVCK0FRVWxBUTBDUDB1d0MxQllRRlFBQ1FnTENBa0xaZ0FLQ3dFTENnRm1BQUFIQkFFQVhnOEJCQTBIQkExa0FBMERCdzBEWkFBTUF3SUREQUptRGdFQ0FtY0FDQUFMQ2dnTFdRQUJCUU1CVFFZQkJRQUhBQVVIV1FBQkFRTlJBQU1CQTBVYlFGVUFDUWdMQ0FrTFpnQUtDd0VMQ2dGbUFBQUhCQWNBQkdZUEFRUU5Cd1FOWkFBTkF3Y05BMlFBREFNQ0F3d0NaZzRCQWdKbkFBZ0FDd29JQzFrQUFRVURBVTBHQVFVQUJ3QUZCMWtBQVFFRFVRQURBUU5GV1VBbWMzSTVPTFcwc3JHa282Q2ZtSmVVa29TRGdIOTlmSEtQYzQ5QlB6aEdPVVllSFJFUUVBNHJBUzRDTmo4Qk5pY3VBUTRCRHdFT0FTSW1KelVtUGdJM05DNENCZ2NPQkJVT0FSMEJIZ1FYRmo0Q056WW5KZ01HTGdJMU5EWTNOaFlWRkFjR0p3NERGeFVVSGdFWEZqWTNQZ0V1QVFjR0pqVTBOamMySGdJVkZBWTNCaVluSmpZM05oWVhGamN5UGdFM05UWXVCQThCSWdZVkZETTJIZ01PQVJVVUZ4WW5MZ0VHSWc0QkJ5TVBBUVlWRkI0Qk16WTNOakllQXhjV0J3NENGUlFXTWpZM016NEJMZ01DaFFjSUFRRUJBUmdkQ2lBZ0hRa0tCUWdHQXdFQkFRRUNBUU1NRlNVWkdUTW5JQkFYRndRaUx6ODZJU2RYVDBJUEpFQVE2eVZGTWg1dFRVOXNRalZZSFNnUUNBRUJEZzB2VWhvTUFoSXpQZzhVRXc0SURna0dGUzhGQ3dJREFnVUdDd0lHOUFRSEJRRUNCeEFWRmhJRkJnY0tFUkFXRGdZREFRRU9BZ3NKRXhFT0R3WUZBUUVCRWdjTEJ3RVZBdzRWR1JrWkNSTUxBUUVERGhVTUFRRUpBUkFaSVNJQkxnRUdCZ1lDQWpJbERBa0hDZ1VGQWdJQkF3UURDQWNNQkE0WEdnNEJDd3NyTHl3YkFTaFBGQlFzUlNzZkRnTUVFaWRDS21NMERmN21BaFVuT1NGQlh3VUVURUZLTnl2N0JTQW5KZzBOQlE0Z0NCNFlLUlE4TnlLMEFoTVBFQnNDQVFVSkRRZ1FHVUVGQVFZRkVBUUZBUVlOdEFVSUJnSWVMUmtSQkFFQkFRd0pGZ1lIQ1JZUEZBY0NFd0lCL2dNREFRTUNBUUVCQmhnSkRna0JCZ0VDQ3hBZUV6Y3lBZ1lRQncwUENoQXFTamN1SHhRQUFBWUFRUCtrQThBQ213QU9BQmtBUEFCSEFFOEFjd0NKUUlaU0FRUUxabDRDRFFCZk9qRURCZzBEUURrMEFnWTlDZ0VIQ0FzSUJ3dG1FUUVMQkFnTEJHUVFBZzhEQUFFTkFRQU5aZzRCRFFZQkRRWmtBQVlHWndBTUNRRUlCd3dJV1FVQkJBRUJCRTBGQVFRRUFWRURBUUVFQVVWUlVCQVBBUUJ0YW1sb1ZsUlFjMUZ6VFV4SlNFTkJQajB3TGlJZkhoMFdGUThaRUJrR0JBQU9BUTRTRGlzbElpWTBOak15SGdNVkZBNEJJeUl1QVRVME5qSVdGQVlGTkM0Qkp5WXJBU0lPQmhVVUZ4NEJNekkzRnpBWEhnRStBVFVuUGdFQUlpWTBOak15SGdFVkZEWXlGaFFHSWlZMEZ6SVhMZ0VqSWc0REZSUVdGd2NVQmhRZUFUOEJIZ0V6TURzQ0xnRTFORDRCQXc0UUZ4Y1FCZ3dLQndRTEVkTUtFZ3NYSUJjWEFXcEVkVWNHQlFrZE5qSXNKaDRWQ3dnWGxXRkJPajRCQWdVRUF4SXNNdjFVSUJjWEVBc1NDcjBoRmhZaEZ0b0dDeEcwZHpWaFR6c2hQVFlZQVFVSkNsZ2NPeUFEQkFNRUJGQ0k0UmNoRndRSUNRd0hDaElMQ3hJS0VSY1hJUmM0UDJ0Q0JBRUtFaG9oSnlvd0dSMGRUMmdaS2dFQkFRRUhCa0lpWGdGRUZ5QVhDaElMRURjWElCY1hJRUVCWm9nY00wVlZMVUJ2SjFrQkJBb0RBd1E5Q2dvUEhROUhlRVlBQUFnQVFQOWhBOEVDNGdBSEFCQUFGQUFZQUIwQUpnQXZBRGNBWmtCak1DQVRBd0lFTmlFQ0FRSTNIUXdCQkFBQkxSd0NBd0FzSnhvWEJBVURCVUFBQVFJQUFnRUFaZ0FBQXdJQUEyUUlBUVFHQVFJQkJBSlhCd0VEQlFVRFN3Y0JBd01GVVFBRkF3VkZIeDRWRlJFUktpZ2VKaDhtRlJnVkdCRVVFUlFTRlFrUUt5VUJCaFVVRnlFbUFTRVdGd0UrQVRVMEp5WW5Cd0VXRno4QkVUWTNKd01pQnhFQkxnTURGak15TmpjUkJnY0JEZ1FIRndGZC92Y1VHQUVQQmdKSS92RUZCUUVKQ2dvMVJJSy8vbTVFZ0wvYmYwQy8wMHBHQVJNUUh5RWlsRUJESmtnaUJRWCtweGd1S1NRZkRMNmNBUWxBUkVwR0JnRWJCUWIrOXg5Q0lrdUlnRURBL2xwL1A3N0Uvb05FZ2I4QnlSais4UUVUQlFjRkEveVRGQXdNQVE0RkJBSXZEU0FtS2k4WnZnQUFBQUFGQUFYL1FnUDdBd0FBSVFBMEFFQUFVQUJnQU1GQURnZ0JBZ1VXQVFFQ0FrQVFBUUU5UzdBTFVGaEFLUW9CQUFBREJBQURXUTBJREFZRUJBa0hBZ1VDQkFWWkN3RUNBUUVDVFFzQkFnSUJVUUFCQWdGRkcwdXdGbEJZUUNJTkNBd0dCQVFKQndJRkFnUUZXUXNCQWdBQkFnRlZBQU1EQUZFS0FRQUFDZ05DRzBBcENnRUFBQU1FQUFOWkRRZ01CZ1FFQ1FjQ0JRSUVCVmtMQVFJQkFRSk5Dd0VDQWdGUkFBRUNBVVZaV1VBbVVsRkNRU01pQVFCYldWRmdVbUJLU0VGUVFsQThPelkxTFNzaU5DTTBHaGdBSVFFaERnNHJBU0lPQWhVVUZoY1dEZ1FQQVQ0RU54NEJNekkrQWpVMExnRURJaTRCTlRRK0F6TXlIZ0lWRkE0QkFpSUdGUlFlQVRJK0FUVTBKU0lPQWhVVUZqTXlQZ0kxTkNZaElnWVZGQjRETXpJK0FUUXVBUUlGWjcyS1VtbGJBUWdPRXhJUUJRVUlIVkJHVUJnYU54eG51b1pQaHVlS2RNRjBLMUJvZ2tSVm0yOUNjTDVQUFNvVUlTY2lGUDdPRHhvVERDb2VEeHNVRENzQnNSOHBCdzBTRmd3VUlSUVVJUU1BUkhTZ1dHV3lQQmN0SkNFWUVRVUVBUVlURmlRVUJRVkVkS0JZZGNoei9QUlRtMkU2YmxsREpUcGhoVWxobWxRQnB5Y2ZGU01WRlNNVkh5Y0tFaHNQSUMwTUZSd1FIeWNuSHcwWEV3NElGU01xSUJFQUFBRUFWLzl1QTZrQzBRRjVBYUpCalFGaUFJWUFkQUJ5QUhFQWJnQnRBR3dBYXdCcUFHa0FZQUFoQUJRQUV3QVNBQkVBRUFBTUFBc0FDZ0FGQUFRQUF3QUNBQUVBQUFBYkFBc0FBQUZIQVVZQlJRQURBQUlBQ3dGZ0FWMEJYQUZiQVZvQldRRllBVW9BcUFDbkFKMEFrQUNQQUk0QWpRQ01BQkFBRFFBQ0FKc0FtZ0NaQUpRQWt3Q1NBQVlBQVFBTkFTNEJMUUVxQUxVQXRBQ3pBQVlBQ1FBQkFTY0JKZ0VsQVNRQkl3RWlBU0VCSUFFZkFSNEJIUUVjQVJzQkdnRVpBUmdCRmdFVkFSUUJFd0VTQVJFQkVBRVBBUTRCRFFFTUFPMEF6QURMQU1rQXlBREhBTVlBeEFEREFNSUF3UURBQUw4QXZnQzlBTHdBS3dBRkFBa0JDZ0RvQU9jQTB3QUVBQU1BQlFBSEFFQUJSQUNIQUFJQUN3Q2NBSkVBQWdBTkFRc0FBUUFGQUFNQVAwQkZEQUVMQUFJQUN3Sm1BQUlOQUFJTlpBQU5BUUFOQVdRQUFRa0FBUWxrQ2dFSkJRQUpCV1FFQVFNRkJ3VURCMllJQVFjSFp3QUFDd1VBU3dBQUFBVlBCZ0VGQUFWRFFSNEJWd0ZVQVVNQlFnRkJBVDhCTEFFckFTa0JLQUQ5QVBvQStBRDNBT3dBNndEcUFPa0Eyd0RhQU5rQTJBQ21BS1VBbUFDVkFEa0FOd0FPQUE0ckV5OENOVDhGTlQ4SE5UOGlPd0VmTVJVSEZROERIUUVmRVJVUERTc0NMd3dqRHd3ZkRSVVhCeDBCQnhVUER5TUhJeThOSXljakp3OEpJdzhCS3dJdkZEVTNOVGM5QVQ4UE16OEJNelV2RVNzQk5TTVBBUlVQRFNzQ0x3ZzFQeGZSQWdFQkFnRURBZ1FGQVFFQ0FnSUNBZ01CQWdNRUFnTURCQVFFQlFZREF3Y0hCd2tKQ1FzSUNBa0tDUXNMQ3dzTUN3ME5HUTBuRFEwT0RBME5EUTBNREF3TEN3a0ZCQWtJQndjR0J3VUZCZ1FIQkFNREFnSUNCQU1DQVFJQkFnVURBZ1FEQWdJQ0FRRUJBUU1DQWdNTUNRUUdCUVlHQndRREF3TUNBd0lEQVFFQkFnUUJBZ0lDQXdJREFnUURBZ01EQkFJQ0F3SUVCQVFEQkFVRkFRRUNBZ0lFQlFjR0JnY0hBd1VLQVFFRkZna0pDUWdFQWdNREFRSUJBUUlDQkFNREF3WUdCd2dKQkFRS0Nnc0xEQXNsRGd3TkRRNE9EUTBPRFFjR0JBUUxEQWNJQlFjS0N3Y0dFQWdJREFnSUNBb25GaFlMQ3dvS0Nna0pDQWdHQndJREFnSUNBUUlCQVFFQkFnRURBZ0VFQXdRQ0JRTUZCUVVHQmdjSEFnRUJCQW9HQ0FjSUNRUUVCQU1GQXdRREF3SUJBUUVEQVFFQkJRSUVBd1VFQlFVR0JnVUhCd0VDQVFJQ0FnSUJBUUlCQVFFQ0FRTURBd01FQlFVRkJ3Y0hCZ2NJQkFVR0J3c0lBVXNGQndRT0JnWUhCd2dIQlFVSEJ3a0RCQVFDRXdvTERRNEhDUWNJQ2dnSkNRVUVDZ29KQ2drS0NnY0dCd1VGQlFVRUF3UURBZ0lFQVFJQkF3TURCQVFGQmdVSEJ3WUVBd2NJQndnSUNBa0lDUWdSQ1FnSkNBY0pEdzBNQ2hBQ0F3Z0ZCZ1lIQ0FnSUJBWUVCQVlGQ2dVR0FnRUZFUTBJQ2dvTERBNEpDQWtJQ1FnUEVBNFRCd3dMQ2dRRUJBUUNCQU1DQVFJREFRRURBZ1FHQmdVR0Nnc0JBZ01EQ3c4UkNRb0tDZ1VGQ2dFQkF3c0ZCUWNHQXdRRUJBUUVCQVFEQXdNREFnTUZCUU1DQlFNRUF3UUJBUU1DQWdJQ0FRRUNBUUlFQWdRRkJBSUNBZ0VCQVFVRUJRWURBd1lDQWdNQkFRSUNBZ0VDQXdJRUF3UUVCUUlEQWdNREF3WURBd01FQkFNSEJBVUVCUUlEQlFJQ0F3RUNBZ0lDQVFFQkFRRUNBZ2dGQndjS0NnWUdCd2NIQ0FrSkNBc0JBUUlDQWdNSUJRUUZCZ1FGQlFNRUFnSURBUVlFQkFVRkN3Y1dFQWdKQ1FnS0Nna0tDUXNKQ3drS0NBZ0lCQVVHQlFvR0FBQUFCQUJlQUNBRG9nSWdBQk1BS0FBc0FERUFOMEEwTVRBdkxpd3JLaWtJQWdNQlFBUUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllMQ0FBVEFoTUZEaXNCSVNJT0FSVVJGQll6SVRJMk5SRTBMZ01URkFZaklTSXVCVFVSTkRZekJUSVdGUmNWRnhFSEVTYzFOd0pmL2tZU0lSUXJIQUc2SENjSERCQVVGUk1PL2tZRUNBY0hCUVFDRmc4QnVnNFRYc1FpZ0lBQ0lCRWVFdjZJSENzcUhRRjRDeFFRREFiK1J3OFdBZ1FGQndjSUJBRjREUklCRVExcHEyc0JnRHorOTBPRVF3QUFBQVlBZ0FBQUE0QUNRQUFmQUVrQVVRQlpBRjBBWlFEZlM3QW9VRmhBVWdBUEN3NEhEMTRBRUE0U0RoQVNaZ0FCQ1FFSUF3RUlXUUFEQUFjRFN3UUNFd01BQ2dFSEN3QUhXUUFMQUE0UUN3NVpBQklBRVEwU0VWa0FEUUFNQmcwTVdRQUdCUVVHVFFBR0JnVlNBQVVHQlVZYlFGTUFEd3NPQ3c4T1pnQVFEaElPRUJKbUFBRUpBUWdEQVFoWkFBTUFCd05MQkFJVEF3QUtBUWNMQUFkWkFBc0FEaEFMRGxrQUVnQVJEUklSV1FBTkFBd0dEUXhaQUFZRkJRWk5BQVlHQlZJQUJRWUZSbGxBTEFFQVpXUmhZRjFjVzFwWFZsTlNUMDVMU2taRU9qZzNOaTh0SmlNYUZ4SVFEdzROREFnRkFCOEJIeFFPS3dFakppY3VBU3NCSWdZSEJnY2pOU01WSXlJR0ZSRVVGak1oTWpZMUVUUW1FeFFPQVNNaElpWTFFVFErQWpzQk56NEJOelkvQVRNd093RWVBaGNlQXg4Qk16SWVBUlVrSWdZVUZqSTJOQVlpSmpRMk1oWVVOek1WSXdRVUZqSTJOQ1lpQTBON0F3WXdKQkN4RUNNdUNBUWJSQnNiS0NrYUFvQWFJeU1EQnc0SS9ZQU5GZ1lKRFFlSUNRUVBBeVlORExFQkFRRURCUU1GRHhnU0NnbUtDUTBIL3VlT1pHU09aSEYwVVZGMFVUVWlJdjhBSlRZbEpUWUI0QU1ITlNFZk5BZ0ZJQ0FrR2Y2Z0d5Z29Hd0ZnR2lQK1l3b1BDaFlOQVdBR0N3Y0ZCZ1VUQkNvTUNBRUNBd01GRVJ3VUN3WUhEZ2dDWkk1a1pJN1NVWFJSVVhUZ0ltazJKU1UySlFBREFRRC9ZQU1BQXVBQUN3QVhBREVBVFVCS0RBc0NCUU1DQXdVQ1pnQUFBQU1GQUFOWkFBSUFBUVFDQVZrQUJBb0JCZ2NFQmxrSkFRY0lDQWRMQ1FFSEJ3aFBBQWdIQ0VNWUdCZ3hHREV1TFN3ckVSRVRFeWNWRnhVUURSY3JBQ0lHRlJFVUZqSTJOUkUwQXhRR0lpWTFFVFEyTWhZVkZ4VVVEZ0VqSWlZOUFTTVZGQllYRlNNVklUVWpOVDRCUFFFQ1FZSmRYWUpkSUVwb1NrcG9TbUE3Wmp0YWdpYUxaWklCUW9wamh3TGdZa1greTBWaVlrVUJOVVgraGpoUFR6Z0JOVGhQVHppWm56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFCQUQwLzJBRERBTGdBQklBSkFBc0FEa0FSa0JERmhRVERBb0dCZ01FQVVBWUNBSURQUUFBQUFFQ0FBRlpBQUlBQlFRQ0JWa0dBUVFEQXdSTkJnRUVCQU5SQUFNRUEwVXVMVFF6TFRrdU9Tb3BKaVVoSUJBSER5c0FJZ1lWRkI4Q0d3RTNOajhCUGdJMU5BY1ZCZzhCQ3dFbUp5NEJOVFEyTWhZVkZDWWlCaFFXTWpZMEJ5SW1OVFErQVRJZUFSUU9BUUp2M3AwVEFRUDE5UUVCQVFFR0NRUXlBUUVDMXRnQkFRZ0tpc1NLdDJwTFMycExnQ2MzR1N3eUxCa1pMQUxnbTI0ek1nTUcvZmNDQ1FJREFRTVFJU0lSYjhnQkFRTUUvamtCeXdNQkZpNFhZWWlJWVM2M1MycExTMnFUTnljWkxCa1pMRElzR1FBQ0FRRC9ZQU1BQXVBQUN3QWxBRUZBUGdvSkFnTUJBQUVEQUdZQUFRQUFBZ0VBV1FBQ0NBRUVCUUlFV1FjQkJRWUdCVXNIQVFVRkJrOEFCZ1VHUXd3TURDVU1KUkVSRVJFVEV5a1ZFQXNYS3lReU5qVVJOQ1lpQmhVUkZDVVZGQTRCSXlJbVBRRWpGUlFXRnhVakZTRTFJelUrQVQwQkFiK0NYVjJDWFFGOE8yWTdXb0ltaTJXU0FVS0tZNGRkWWtVQk5VVmlZa1greTBYaG56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFBQUlBOVA5Z0F3d0M0QUFTQUI4QUswQW9EQW9JQmdRQlBRTUJBUUlCYVFBQUFnSUFUUUFBQUFKUkFBSUFBa1VVRXhvWkV4OFVIeEFFRHlzQUlnWVZGQjhDR3dFM05qOEJQZ0kxTkFVaUpqVTBQZ0V5SGdFVURnRUNiOTZkRXdFRDlmVUJBUUVCQmdrRS92UW5OeGtzTWl3WkdTd0M0SnR1TXpJREJ2MzNBZ2tDQXdFREVDRWlFVy9ETnljWkxCa1pMRElzR1FBRkFRRC9ZQU13QXVBQUF3QUtBQlVBSFFBMUFGOUFYQWNCQWdFY0d4UUdCQUFDSVFFRUFDQUJBd1FFUUFVQkFnRUFBUUlBWmdBQkNnRUFCQUVBV1FBRUJnRURCd1FEV1FrQkJ3Z0lCMHNKQVFjSENFOEFDQWNJUXdVRU5UUXpNakV3THk0cktpUWlIeDRZRnhBT0JBb0ZDZ3NPS3dFM0FRY2xNamNERlJRV054RTBKaU1pRGdFSEFUWTNOU01WRkFjWE5nYzJOeWNHSXlJdUF6MEJJeFVVRmhjVkl4VWhOU01CRVJ3Q0F4eis3Q1VnNDEzZlhFSVpMeVlQQVJJSllpSWlGRERxTWkwVExUTWpRellwRnlhTFpaSUJRb29DMEJEOGtCRDlFUUdCNjBWaXB3RTFSV0lRSFJQK0xSb2FuNTlBTlNKRHF3TVhJQllXS1RWREk2Q2ZaWk1IZmlRa0FBQURBRUQvb0FQQUFxQUFCd0FYQURvQWtFQUxNUUVCQnpvd0FnTUZBa0JMc0JoUVdFQXdBQVlCQUFFR0FHWUFCQUFGQlFSZUNBRUNBQWNCQWdkWkFBRUFBQVFCQUZrQUJRTURCVTBBQlFVRFVnQURCUU5HRzBBeEFBWUJBQUVHQUdZQUJBQUZBQVFGWmdnQkFnQUhBUUlIV1FBQkFBQUVBUUJaQUFVREF3Vk5BQVVGQTFJQUF3VURSbGxBRkFvSU5qTXVMQ1VqR3hrU0R3Z1hDaGNURUFrUUt3QXlOalFtSWdZVUFTRWlCaFVSRkJZeklUSTJOUkUwSmdNbUl5SUdEd0VPQkNNaUp5NENMd0VtSXlJSEF4RStBVE1oTWg0QkZSTUN1RkE0T0ZBNEFRajg4QmNoSVJjREVCY2hJZVVMRHdjTEJ5WUNCQVVFQlFNTkNRRURBd0ZzRFJRVUR2MENEZ29DekFZTUJ3RUJZRGhRT0RoUUFRZ2hHUDF5R0NFaEdBS09HQ0grZFF3R0JTQUNBZ01CQVFnQkFnUUJkQThQL3M4Q0NRb05CZ3NIL2ZjQUFBQUlBRmIvUFFPM0Fza0FLUUEyQUZVQVl3QnhBSUFBa1FDZEFMSkFyM0lCQnd4TkFRWUhjQUVMQ1RnM0lCTUVBZ1ZNUlVRWkJBQUNLZ0VCQUFaQVZWUk9Bd1FNUGdBR0J3a0hCZ2xtQUFVT0FnNEZBbVlBQWdBT0FnQmtBQUFCRGdBQlpBQUJBV2NBREFBTEJBd0xXUUFKQUFvRENRcFpBQVFBQXcwRUExa1NBUTBBRUFnTkVGa1JBUWNBQ0E4SENGa0FEdzRPRDAwQUR3OE9VUUFPRHc1RmdvRlhWcGlXazVLS2lJR1JncEYvZm5kMmJXeGxaRjFjVm1OWFkxRlFTVWhBUGpJd0l5SWRIQmNWRXc0ckFTY1BBU2NtRHdFT0FSVVJGQjRETmo4QkZ4WXpNajhCRmhjV01qYzJOeGNXTWpZM05qVVJOQUV1QVRVMFBnRXpNaFlWRkFZM0p6NEJOVFF1QVNNaUJoVVVGd2NuTGdFakJnOEJFVGNYRmpJMlB3RVhCU0lHRlJFVUZqSTJOUkUwTGdFWElnNENIUUVVRmpJMlBRRW1OeFVVSGdFeVBnRTlBVFF1QVNNR0F5SU9BaFVVRmpNeVBnSTFOQzRCQmlJbU5EWXpNaDRDRlJRRHFiY0wyOGtIQjlNR0JnSUVCQVlHQTgzS0F3UUVBeDR2UXdVVUJXUXNUZ01HQlFJSC92dzJYQ2RES0QxV1hha3pCZ1V4VkRKTWF5WVd5UUlEQWdRRHVzSEtBZ1VGQXR5aS9hb0lDd3NQQ3dVSXpBUUhCUU1MRHdzRHhBVUlDZ2tGQlFrRkR6QU9HUklMS0J3T0dSTUxFeDhHR2hNVERRY0xDUVVDbnlvQlpGUURBMUlDQ1FiOXZBTUdCUU1DQVFGUVZRRUNEVjVtQ0FpWGJoSUJBZ0lHQ0FKRkR2elZWYlVxSjBRblZqd3F0Wm9NRVJ3TU1WVXhiRXNwVWdwVUFRRUJBVWdDSEV4VkFRRUJaQ1UxQ3dmK2tBZ0xDd2dCY0FVSUJVY0RCUWNEalFjTEN3ZU5EMUs2QlFrRUJBa0Z1Z1VJQlFQK25Rc1NHUTRjS0FvVEdRNFNJQkprRXhvVEJRa01CZzBBQUFBQUF3Q2cvK0FEZ0FLZ0FBa0FFZ0FqQUVGQVBoNFNFUTBNQlFJR0Rna0lBd1FCQWtBQUJRWUZhQUFHQWdab0FBUUJBQUVFQUdZQUFnQUJCQUlCVndBQUFBTlBBQU1EQ3dOQ0VpY1lFUkVSRUFjVkt5a0JFU0UzSVJFaEVRY0ZKd0VuQVJVekFTYzNKeTRDSXlJUEFUTWZBVGMrQVRVMEF1RDk0QUdnSVA0Z0FtQWcvdnNUQVZZVy9waEFBV2tYUmhrQ0J3Y0VDd2daQVJZcUdBUUVBZ0FnL2NBQndDQ1lFd0ZYRi82WVFRRm9GMEFaQXdNQ0NCZ1hLaGtFQ2dVTUFBQUFCZ0RnLzZBRElBS2dBQ0FBTHdCQ0FFWUFTZ0JPQUxoQUMwQTVPREFlRUFZSUN3RkFTN0FVVUZoQVFRQUtBd3dEQ2w0T0FRd05Bd3dOWkE4QkRRc0REUXRrQUFzSUNBdGNBQUVBQmdBQkJsa0hBZ0lBQ1FVQ0F3b0FBMWNBQ0FRRUNFMEFDQWdFVWdBRUNBUkdHMEJEQUFvRERBTUtER1lPQVF3TkF3d05aQThCRFFzRERRdGtBQXNJQXdzSVpBQUJBQVlBQVFaWkJ3SUNBQWtGQWdNS0FBTlhBQWdFQkFoTkFBZ0lCRklBQkFnRVJsbEFHVTVOVEV0S1NVaEhSa1ZFUTBKQk5CWTFHak1SRlRNUUVCY3JBU00xTkNZckFTSU9BaDBCSXhVekV4UVdNeUV5UGdjMUV6TWxORDRDT3dFeUhnTWRBU01CRlJRR0l5RWlKaThCTGdROUFRTWhCek1SSXhNakF6TURJeE16QXlDZ0lobUxDeFlRQ2FBcUx5TVlBUm9GQ3drSkNBWUZCQUl1S2Y1OUJRZ0xCWXNGQ1FjR0E4WUJEaEVNL3VZREJnTUVBd1FEQWdFd0FiUG9IQnlPSFJZZXpoMFZIZ0k5S0JraUNSQVdEQ2dkL2JzWklnSURCZ1lJQ0FvS0JnSkZSUVlMQ0FVREJnY0pCU2o5bndFTkVRRUNBZ0lFQlFVR0F3RUNSRUQrSGdIaS9oNEI0djRlQUFBQUFBSUF3UCtnQTBBQzRBQUxBQlFBUDBBOEZCRVFEdzROREFjRFBnQUdBQUVBQmdGbUJ3VUNBd0lCQUFZREFGY0FBUVFFQVVzQUFRRUVVQUFFQVFSRUFBQVRFZ0FMQUFzUkVSRVJFUWdUS3dFVk14RWhFVE0xSVJFaEVTVW5OeGNISnhFakVRSkE0UDNBNFA4QUFvRCtRaGVWbFJkdUlBSUFJUDNnQWlBZy9hQUNZRFFYbFpVWGJmNGFBZVlBQWdEQS82QURRQUtnQUFzQUZBQStRRHNVRVJBUERnME1Cd0VBQVVBQUJnTUdhQWNGQWdNQ0FRQUJBd0JYQUFFRUJBRkxBQUVCQkZBQUJBRUVSQUFBRXhJQUN3QUxFUkVSRVJFSUV5c0JGVE1SSVJFek5TRVJJUkVGQnhjM0p3Y1JJeEVDUU9EOXdPRC9BQUtBL2tJWGxaVVhiaUFDQUNEOTRBSWdJUDJnQW1EWkY1V1ZGMjBCNXY0YUFBQURBRkgvY1FPdkFzQUFEZ0FkQUNrQUowQWtLU2duSmlVa0l5SWhJQjhlREFFOUFBQUJBUUJOQUFBQUFWRUFBUUFCUlJrWUVnSVBLd0V1QVNJR0J3NEJIZ0krQWlZRERnRXVBalkzUGdFeUZoY1dFQU1ISndjWEJ4YzNGemNuTndNbVBKdWVtenhRT1RtZzF0YWdPVGxvU2NYRmtqUTBTVGVQa0k4M2I5V29xQmlvcUJpb3FCaXBxUUpHUEQ0K1BGRFcxcUE1T2FEVzF2NGNTVFEwa3NYRlNUWTVPVFp3L3NRQlhxaW5GNmlvRjZlb0dLaW9BQUFBQWdCK0FBQURnQUpnQUJNQUlnQkJRRDRXQ2dJREJCc1hFaEFKQlFBQkFrQVZDd0lDUGdBQUFRQnBBQUlGQVFRREFnUlpBQU1CQVFOTkFBTURBVkVBQVFNQlJSUVVGQ0lVSWhzVUZoQUdFaXM3QVRjMk56NENOeFVKQVJVR0J3WVhNQlV3QVRVTkFUVWlCZ2NtUGdXQUZTWktUaHdyUUNZQmdQNkF0MmhqQWdHZ0FTaisySXl2UlFFQkRCZzRUNE0rZHlNTUR3d0JvQUVBQVFDaENHaGtwUVlCWUlIQndvSmNkd2NaUmtCT09DY0FBQUFBQWdDQUFBQURnQUpnQUI4QUtnQTZRRGNsREFJREJDUWdEUUFFQWdFQ1FDWUxBZ0ErQUFJQkFta0FBQUFFQXdBRVdRQURBUUVEVFFBREF3RlJBQUVEQVVVVUhCWVVHUVVUS3lVd05UUXVBaWN1QVNjMUNRRTFIZ0VYSGdFZkFUTXdQUWNuTGdFakZTMEJGU0FYRmdPQUF4QXNJeldMWHY2QUFZQTNUQ29yU2lNbUZTQkZyNHorMkFFb0FRUlpJMEFHR2lwUlVTTTFOd1NoL3dEL0FLQUNFeE1VVGpnK0J3Y0lCd2NJQmdnVGQxeUN3c0dCdEVrQUFBTUFZUCtBQTZBQ3dBQVZBQjBBTGdCZFFGb05BUUlJQ3dFRUFRSkFEQUVCQVQ4SkFRUUJBQUVFQUdZQUJRQUlBZ1VJV1FBQ0FBRUVBZ0ZaQUFBQUF3Y0FBMWtLQVFjR0JnZE5DZ0VIQndaUkFBWUhCa1VmSGdBQUp5WWVMaDh1R3hvWEZnQVZBQlVURkJVaUN4SXJBUlFHSXlJdUFUUStBVE1WTnljVklnWVVGakkyTlFJZ0JoQVdJRFlRQVNJdUFUVTBQZ0l5SGdJVURnSUMySDVhTzJNNk9tTTd3TUJxbHBiVWxsVCtxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQVNCYWZqcGpkbU02YjIrQVdKYlVscFZyQWFEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFBQUFJQVFQK0FBOEFDd0FBSkFCTUFMa0FyRUFJQ0FENFREUXdMQ2drSUJ3WUZDZ0k5QVFFQUFnSUFTd0VCQUFBQ1R3TUJBZ0FDUXhJYUVoQUVFaXNCSVFzQklRVURKUVVERnljSE55Y2hOeGNoQndQQS9xbHBhZjZwQVJodEFSVUJGVzR1MWRWVjJBRUdVbElCQnRnQmdnRSsvc0xFL3NMRnhRRSs2SmlZOVpYMzk1VUFBQU1BWVArQUE2QUN3QUFIQUJvQUpnQkhRRVFBQUFBREJBQURXUWtCQlFnQkJnY0ZCbGNBQkFBSEFnUUhWd29CQWdFQkFrMEtBUUlDQVZFQUFRSUJSUWtJSmlVa0l5SWhJQjhlSFJ3YkVBNElHZ2thRXhBTEVDc0FJQVlRRmlBMkVBRWlMZ0UwUGdFek1oNEVGUlFPQWdNakZTTVZNeFV6TlRNMUl3S3MvcWowOUFGWTlQNWdaN0JtWnJCbk5HTlRSekViUEdhT1BTSHY3eUh3OEFMQTlQNm85UFFCV1AzWFpyRE9zR1liTVVkVFl6Uk5qbVk4QW4zd0llL3ZJUUFBQUFNQVlQK0FBNkFDd0FBSEFCZ0FIQUE4UURrQUJBTUZBd1FGWmdBRkFnTUZBbVFBQUFBREJBQURXUVlCQWdFQkFrMEdBUUlDQVZJQUFRSUJSZ2tJSEJzYUdSRVFDQmdKR0JNUUJ4QXJBQ0FHRUJZZ05oQUJJaTRCTlRRK0FqSWVBaFFPQWdFaEZTRUNyUDZvOVBRQldQVCtZR2V3Wmp4bWpwcU9aanc4Wm83K3N3SUEvZ0FDd1BUK3FQVDBBVmo5MTJhd1owMk9aanc4Wm82YWptWThBWTBpQUFBQUFnQmcvNEFEb0FMQUFBY0FHQUFwUUNZQUFBQURBZ0FEV1FRQkFnRUJBazBFQVFJQ0FWRUFBUUlCUlFrSUVSQUlHQWtZRXhBRkVDc0FJQVlRRmlBMkVBRWlMZ0UxTkQ0Q01oNENGQTRDQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9Bc0QwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUNBRDcvWGdQQ0F1SUFFUUFyQUNwQUp3UUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllNQ1FBUkFoRUZEaXNCSVNJT0FoVVJGQll6SVRJMk5SRTBKaE1VRGdJaklTSXVCVFVSTkRZeklUSWVBeFVEVy8xS0ZTWWNFRHdyQXJZclBEd1BDQTRUQ3YwOEJnc0tDUWNGQXg0VkFzUUlFQXdLQlFMaUVCd21GZjFLS3p3OEt3SzJLeno4M0FvVERnZ0RCUWNKQ2dzR0FzUVZIZ1VLREJBSUFBQUFBZ0JSLzNFRHJ3TEFBQTRBR2dBWlFCWWFHUmdYRmhVVUV4SVJFQThNQUQwQUFBQmZFZ0VQS3dFdUFTSUdCdzRCSGdJK0FpWURCeWNISnpjbk54YzNGd2NESmp5Ym5wczhVRGs1b05iV29EazV0aGlvcUJpb3FCaW9xQmlwQWtZOFBqNDhVTmJXb0RrNW9OYlcvb0lZcUtjWHFLZ1hwNmdZcUFBQUFBSUFZUCtBQTZBQ3dBQUhBQndBUTBCQURnRURBQkFCQmdRQ1FBOEJCQUUvQUFZRUJRUUdCV1lBQUFBREJBQURXUUFFQUFVQ0JBVlpBQUlCQVFKTkFBSUNBVkVBQVFJQlJSSVZGQk1URXhBSEZTc0FJQVlRRmlBMkVBQWlKalEyTXpVWEJ6VWlEZ0VWRkJZeU5qVXpGQUtzL3FqMDlBRlk5UDdLMUphV2FzREFPMk02ZjdOK0tBTEE5UDZvOVBRQldQNVVsdFNXV0lCdmJ6cGpPMWwvZmxwcUFBQUFBUUJBLzRBRHdBTEFBQWtBR0VBVkFnRUFQZ2tJQndZRkJRQTlBUUVBQUY4U0VBSVFLd0VoQ3dFaEJRTWxCUU1Ed1A2cGFXbitxUUVZYlFFVkFSVnVBWUlCUHY3Q3hQN0N4Y1VCUGdBQUFBQUNBR0QvZ0FPZ0FzQUFCd0FUQURaQU13Y0JCUVlDQmdVQ1pnUUJBZ01HQWdOa0FBQUFCZ1VBQmxjQUF3RUJBMHNBQXdNQlVnQUJBd0ZHRVJFUkVSRVRFeEFJRmlzQUlBWVFGaUEyRUFjakZTTTFJelV6TlRNVk13S3MvcWowOUFGWTlLRHdJdTd1SXZBQ3dQVCtxUFQwQVZpKzd1NGk4UEFBQUFBQUFnQmcvNEFEb0FMQUFBY0FDd0FoUUI0QUFBQURBZ0FEVndBQ0FRRUNTd0FDQWdGUkFBRUNBVVVSRXhNUUJCSXJBQ0FHRUJZZ05oQUhJVFVoQXF6K3FQVDBBVmowb1A0QUFnQUN3UFQrcVBUMEFWaStJZ0FBQUFNQU5QOVRBODBDN0FBSEFCZ0FLZ0E1UURZQUFRUUFCQUVBWmdBQUJRUUFCV1FBQXdZQkJBRURCRmtBQlFJQ0JVMEFCUVVDVWdBQ0JRSkdHaGtqSVJrcUdpb1hGUk1TQnhJckFCUVdNalkwSmlJRkZBNENJaTRDTkQ0Q01oNENBU0lPQWhVVUhnRXpNajRDTlRRdUFRRXVmSzU3ZTY0Q0kwaDhxcnlyZTBsSmU2dThxbnhJL2pSUmxHdEFhN2h0VVpSclAydTRBWGV2ZTN1dmU5TmRxM3RKU1h1cnU2dDdTVWw3cXdFeVFHcVVVbXk0YXo5cmxGRnR1R3NBQWdCZy80QURvQUxBQUFjQUVnQW5RQ1FTRVJBUERnVUNBQUZBQUFBQ0FHZ0FBZ0VCQWswQUFnSUJVZ0FCQWdGR0pCTVFBeEVyQUNBR0VCWWdOaEFCQmlNaUppOEJOeGMzRndLcy9xajA5QUZZOVA0Z0NRa0VDZ1J3SkY3Nkl3TEE5UDZvOVBRQldQN0JDUVVFY0NOZSt5UUFBQUFDQUQ3L1hnUENBdUlBRkFBY0FDcEFKeHdiR2hrWUZnWUJBQUZBQWdFQUFRRUFUUUlCQUFBQlVRQUJBQUZGQWdBS0J3QVVBaFFERGlzQklTSUdGUkVVRmpNaE1qWTFFVFF1QlFFbkJ5YzNGd0VYQTF2OVNpczhQQ3NDdGlzOEJRc09FaFFYL2tRRkJjb2dyd0ZqSUFMaVBDdjlTaXM4UENzQ3Rnd1hGUkVPQ3dYOWJ3VUZ5aUN2QVdNZ0FBRUJRQUJnQXNBQjRBQUxBQWF6Q0FBQkppc0JCeWNIRndjWE54YzNKemNDcUtpb0dLaW9HS2lvR0ttcEFlQ3BxQmVvcUJlbnFCZXBxQUFBQUFFQkFBQWdBd0FDZUFBVUFEbEFOZ2dCQkFJQlFBY0JBZ0UvQmdFQlBnQUVBZ01DQkFObUFBRUFBZ1FCQWxrQUF3QUFBMDBBQXdNQVVRQUFBd0JGRWhVVUV4QUZFeXNrSWlZME5qTTFGd2MxSWc0QkZSUVdNalkxTXhRQ2F0U1dsbXJBd0R0ak9uK3pmaWdnbHRTV1dJQnZienBqTzFsL2ZscHFBQUFCQUlEL29BUUFBcUFBSmdBNFFEVWJHZ29KQ0FjR0JRUUpBZ0VCUUFRQkFBQUJBZ0FCV1FBQ0F3TUNUUUFDQWdOUkFBTUNBMFVCQUI4ZEZ4VVFEZ0FtQVNZRkRpc0JNaDRCRlRjWEJ5YzNGelF1QWlNaURnRVVIZ0V6TWo0Qk54Y09BU01pTGdFMU5ENENBZ0Jvc1dkdUVvMkZFbVk1WUlSSllhVmdZS1ZoVFl0akdCa255SDFvc1djOVo0NENvR2F4YUdrU2lJZ1NhVW1FWURoZ3BjS2xZRDV1UndkMGttZXhhRTZPWnowQUFBSUFRUCtBQThBQ3dBQUpBQThBS2tBbkNnY0NBRDRQRGcwRUF3SUJBQWdDUFFFQkFBSUNBRXNCQVFBQUFrOEFBZ0FDUXhJU0ZRTVJLeVVESlFVREpTRUxBU0VsRnlFSEZ5Y0JXRzBCRlFFVmJRRVkvcWxwYWY2cEFjQlNBUWJZVmRXKy9zTEZ4UUUreEFFKy9zTFU5cFgxbHdBQUFnQUEveUFFQUFNZ0FCUUFLd0E4UURrQUJRRUNBUVVDWmdBQ0JBRUNCR1FBQkFjQkF3UURWUUFCQVFCUkJnRUFBQW9CUWhZVkFRQW1KU0VmRlNzV0t3OE9DZ2dBRkFFVUNBNHJBU0lPQWdjK0FqTXlFaFVVRmpJMk5UUXVBUU15UGdNM0RnTWpJZ0kxTkNZaUJoVVVIZ0VDQUdlN2lWSURBM0MrYjZ6ME9GQTRpZXlMVXB0OFh6WUNBa1J2bUZPczlEaFFPSW5zQXlCUGhybG1kOGwwL3ZxNktEZzRLSXZzaWZ3QU1sMTZtVkpab25SRkFRYTZLRGc0S0l2c2lRQUFEQUFsLzBRRDJ3TDZBQThBSFFBdUFEd0FUZ0JmQUhBQWdBQ1ZBS2NBdEFEREFHMUFhcFdCY0FNQkFFNDlBZ1lCTGg0Q0JRYTFBUWtLbGdFQ0NRVkFBQW9GQ1FVS0NXWUFDUUlGQ1FKa0N3RUFBQUVHQUFGWkNBRUdCd0VGQ2dZRldRUUJBZ01EQWswRUFRSUNBMUVBQXdJRFJRRUF1TGVZbHpzNE5ERXJLQ01nSFJ3WEZoRVFDZ2tBRHdFUERBNHJBVEllQXgwQkZBWWlKajBCTkRZVE1oWWRBUlFHSWlZOUFUUTJNd0VVQmlzQklpNEJOVFEyT3dFeUhnRVZJUlFHS3dFaUpqVTBOanNCTWhZbEZoUUdEd0VHSmljbU5qOEJQZ0VlQVJjQkZnWVBBUTRCTGdFbkpqWS9BVFlXRndFZUFROEJEZ0VuTGdFL0FUNENGaGNCSGdFUEFRNEJKeTRCTmo4QlBnRVhBejRCSGdFZkFSWUdCd1ltTHdFdUFUNEROd0UyTWhZZkFSWUdCdzRCTGdFdkFTWTJOd0UrQVI4QkhnRU9BUzhCTGdFQlBnRXlId0VlQVE0Qkx3RXVBVGNDQUFVSkJ3WURFaGdTRWd3TUVoSVlFaElNQWRzU0RINElEZ2dTREg0SURnajlCQklNZmd3U0VneCtEQklDdkFRSUIyMEtHQWNHQndwdEJnd0tDZ1A5YWdZR0MyMEZEQXNKQXdjSEMyd0xHQVlCNkFzR0JqOEdHQW9MQndjL0F3a0xEQVgrZ2dzR0JqOEdHQXNIQ0FFRFB3Y1lDbDBHREFzSkF6OEdCZ3NLR0FjL0FnSUJBZ01HQXdGL0J3OE9CRDhHQmdzRkRBc0pBejhIQnd2OTFBWVlDbTBMQmd3WUMyd0xCd0tjQlE0UEIyMExCZ3dZQzIwS0J3WUMrZ01GQ0FrRmZRMFJFUTE5RFJIOUJCRU5mZ3dTRWd4K0RSRUJJUXdSQ0EwSURSRUlEUWtNRVJFTURSRVI0UWdQRGdRL0JnWUxDeGdHUHdNQkF3Y0Yvb0lMR0FZL0F3RURCd1VMR0FZL0JnY0tBaXdHR0F0dEN3WUdCaGdMYlFVSEF3RUQvV29HR0F0dEN3WUdCQTRRQjIwTEJnWUNsZ01CQXdjRmJRc1lCZ1lHQzIwRENBZ0hCd1lDL1dvRUNBZHRDeGdHQXdFREJ3VnRDeGdHQWVnTEJnWS9CaGdXQmdZL0JoaitqUWNJQkQ4R0dCWUdCajhHR0FzQUFnQ0IvNkFEZ1FLZ0FBOEFJQUF0UUNvT0FRSURBZ0ZBRHdBQ0FUMEFBQUFDQXdBQ1dRQURBUUVEVFFBREF3RlJBQUVEQVVVb0dDTW1CQklyQlNjMk5UUXVBU01pQmhRV016STNGd0V1QVRVME5qSVdGUlFPQkNNaUE0SGpRMUtNVW42eXNuNXJWT0w5bmlZcG4rR2dFeU0wUFVVa2NUSGlWR3RTalZHeS9MTkU0d0VQSm1RMmNhQ2ZjU1ZGUFRRakV3QUFBQUVCQUFBZ0F3QUNJQUFMQUNWQUlnQUVBd0VFU3dVQkF3SUJBQUVEQUZjQUJBUUJUd0FCQkFGREVSRVJFUkVRQmhRckFTTVZJelVqTlRNMU14VXpBd0R3SXU3dUl2QUJEdTd1SXZEd0FBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0UzQ1FFbkFRRkFRUUUvL3NGQkFQOENIMEgrd1A3QVFRRC9BQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFbkNRRTNBd0xBUWY3QkFUOUIvd0lmUWY3QS9zQkJBUDhBQUFBQUFRRXNBSVFDeXdHOUFBb0FFa0FQQ2drSUJ3WUZBRDRBQUFCZklRRVBLeVVHSXlJbUx3RTNGemNYQWNBSkNRUUtCSEFrWHZvampRa0ZCSEFqWHZza0FBUUFnUCtnQTRBQ29BQUlBQkVBR3dBZkFFeEFTUjBjR3hvWUZ4WVRFUkFQQ0FFTkJBY0JRQUFCQndFL0dSSUNCajRBQmdBSEJBWUhWd0FFQUFFREJBRlhCUUVEQUFBRFN3VUJBd01BVHdJQkFBTUFReGtXRVJFU0VSRVNDQllyQ1FFUk14RXpFVE1SQXlNUklSRWpFU1VGQVFjMUl4VUhGUWtCTlNVSE5UTUNBUDdBNE1EZ0lLRC9BS0FCSUFFZy91REFnRUFCZ0FHQS9hQkFRQUpBL3dEK1lBRUEvd0FCb1A2QUFRRC9BQUZ4NXVZQmI1cGF3RE1wQVRQK3pTbUFNNFlBQUFBREFHRC9nQU9nQXNBQUdRQWhBQ1VBUGtBN0lnRUVBQ1VCQVFRQ1FBQUVBQUVBQkFGbUFBSUZBUUFFQWdCWkFBRURBd0ZOQUFFQkExRUFBd0VEUlFFQUpDTWZIaHNhRUE0QUdRRVpCZzRyQVRJZUFSY2VBUlFHQnc0RUl5SXVBU2N1QVRRK0F5QUdFQllnTmhBbkJTRVJBZ0F6WVZja05qbzZOaFl4TlRrN0h6TmhWeVEyT2pwdGkvbitxUFQwQVZqMDRQNUJBUDhDbnhveUpEZUxtb3MzRlNRYkV3a2FNaVEzaTVxTWJEb2g5UDZvOVBRQldCVEEvd0FBQUFRQWdQK2dBNEFDb0FBU0FCNEFwZ0UzQVc1THNDWlFXRUJoQUFjQUhRVUhIVmtKQVFVZkd3SWFCZ1VhV1FnQkJoNEJIQUFHSEZraEFRQUFBd1FBQTFrS0lnSUVJQUVaRWdRWldSZ0JFaEVCQ3dJU0Mxa0FBZ0FCRkFJQldSWUJGQThCRFJNVURWa0FGUUFPRlE1VkZ3RVRFd3hSRUFFTURBc01RaHRBWndBSEFCMEZCeDFaQ1FFRkh4c0NHZ1lGR2xrSUFRWWVBUndBQmh4WklRRUFBQU1FQUFOWkNpSUNCQ0FCR1JJRUdWa1lBUklSQVFzQ0VndFpBQUlBQVJRQ0FWa1dBUlFQQVEwVEZBMVpGd0VURUFFTUZSTU1XUUFWRGc0VlRRQVZGUTVSQUE0VkRrVlpRVXdBSVFBZkFBRUFBQUUyQVRNQkl3RWlBUjRCSEFFUUFRMEJCZ0VFQVA4QS9RRDhBUHNBN3dEc0FPY0E1QURaQU5jQTB3RFJBTXNBeUFEQkFMOEF2QUM2QUt3QXFRQ2ZBSndBa2dDUkFJNEFqQUNIQUlRQWZ3QjlBSGtBZHdCcUFHY0FXZ0JYQUV3QVNnQkdBRVFBUEFBNUFEUUFNZ0F0QUNzQUh3Q21BQ0VBcGdBYUFCa0FGQUFUQUEwQURBQUFBQklBQVFBU0FDTUFEaXNCSWc0Q0J3WVZGQjRCRnhZeU5qVTBKeVlDSWlZMU5ENEJNaDRCRlJRM0l5SW1OVFEvQVRZMEx3RW1JeUlQQVE0Q0l5SW1QUUUwSmlzQklnWWRBUlFPQXlNaUppOEJKaU1pRHdFR0ZCOEJGaFVVRGdFckFTSU9BZzhCRGdNZEFSUVdPd0V5SGdFVkZBNEJEd0VHRkI4QkZqTXlQd0UrQVRNeUZoMEJGQlk3QVRJMlBRRTBOak15SHdFV01qOEJOalF2QVNZMU5EWTdBVEkyUFFJMExnRVhGUlFyQVNJSERnSVZGQjRCSHdFV0R3RUdJeUl2QVNZaklnWWRBUlFPQWlzQklpWTlBVFFuSmlNaUJnOEJCaU1pTHdFbU5EOEJOalUwSnlZckFTSW1QUUUwTmpzQk1qYzJOVFFtTHdFbU5EOEJOak13TXpJZUFSOEJGak15UGdFM05qMEJORHNCTWg0QkhRRVVId0VlQkRNeVB3RStBVElXSHdFZUFSVVVEd0VHRlJRZUFSY1dPd0V5RlFJQ0ZDVWlJQTA0RFJrU09KOXhPVGdOaFYwcVNsZEtLNjhlRXhzUEZBNE9MUTRWRlE0VEJBc05CaE1kSEJROEZSMEZDQXdPQ0FrUkJ4TU9GUlVPTFE0T0V3OE1GUXdmQkFrSUNBTUdBd1FEQWg0VUh3d1ZEQU1IQlJNT0RpME5GaFFQRXdZUkNoTWNIUlE5RkI0YkV4UU9FdzRxRGkwT0RoUVBHeE1lRkJzTUZnSVBIaUFYQndvR0Jnc0lFdzBOTEFVSUNBUVRHQ0VmTHdNRkJnUThCd3NYR0I4UUhnc1NCUWdJQkMwRkJSSWFGeFloSHdjTEN3Y2ZJQmNXRFF3U0JRVXNCUWdEQWdNREFSTVhJUXNURWdjWUVUMEVDQVFZQ0FRSkNRb0tCaUVZRWdJSEJ3Y0NMUUlEQlJNWkJRb0lGaUVlRHdIZ0J3OFZEVGhRR2pBc0VqaHdVRTg1T1A2Z1hrSXJTaXNyU2l0Q2toc1RGQTBURHlrT0xBNE9FZ1VIQkJzVEhoUWVIaFFmQnc0TENBVUlCeE1PRGl3T0tROFNEaFFNRmd3Q0F3UURCZ01IQ0FrRlBCVWREQllNQnd3S0JSSVBLUTRzRGc0VEJ3Z2JFeDRWSFIwVkhoTWJFQk1PRGkwT0tROFREUlFUSEJ3VUh4NE9GdzFRSGhBWUJ4SVVDd29WRWdjVERBd3RCUVVTR2kwaEhnUUhCQU1LQ0I0Z0Z4Y05EQk1GQlMwRkRnVVNHQ0VnRnhjTEJqMEhDeGNYSUJBZUN4SUZEZ1V0QkFFQ0FSTVpCUW9IRnlBZkVnVUlCUjhmR0FZREJRUURBUmtTQXdJQ0FpMENCZ1FIQlJNWElRc1RFUWdYRWdBQUF3REEvK0FEUUFKZ0FBTUFCZ0FKQUFxM0NBY0dCUU1DQXlZckV4OEJDUUlERXdFbndPbHpBU1QraUFFNDV1TCt0cVlCTFdmbUFvRCtid0ZNL2c4QjlmN0dTUUFFQUdEL2dBT2dBc0FBQndBUkFCa0FLZ0JSUUU0QUJ3QUtBUWNLV1FBQkFBQUNBUUJaQUFJQUF3UUNBMWNMQmdJRUFBVUpCQVZYREFFSkNBZ0pUUXdCQ1FrSVVRQUlDUWhGR3hvSUNDTWlHaW9iS2hjV0V4SUlFUWdSRVJFUkVoTVNEUlFyQUJRV01qWTBKaUlURVNNVk14VWpGVE0xRWlBR0VCWWdOaEFCSWk0Qk5UUStBakllQWhRT0FnSFBGeUlYRnlJNllDQWdnR3orcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0Fka2lGeGNpRi82QUFRQVE4QkFRQWxEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFFQUdEL2dBT2dBc0FBQndBWUFETUFRQUJlUUZzQUJRWUhCZ1VIWmdBSENBWUhDR1FBQUFBREJBQURXUXNCQkFBR0JRUUdXUXdCQ0FBSkFnZ0pXUW9CQWdFQkFrMEtBUUlDQVZFQUFRSUJSVFUwR2hrSkNEazRORUExUUNzcUlSOGVIUmt6R2pNUkVBZ1lDUmdURUEwUUt3QWdCaEFXSURZUUFTSXVBVFUwUGdJeUhnSVVEZ0lESWc0QkZUTW1NeklXRlJRR0J3NENCek0rQVRjK0FUVTBKZ01pQmhRV01qWTFOQzREQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9SaXM4SUNZQ1lTUXlGUklYR1FzQkpnRU5JQm9hUmpFUEV4UWNGQVFHQ0FzQ3dQVCtxUFQwQVZqOTEyYXdaMDJPWmp3OFpvNmFqbVk4QWxrYk9DbGRMU01XSlJFVkppa2RLaUVmR0M0Zk1qditpeE1jRkJRT0JRc0lCZ01BQUFBQUJRREEvNEFEUUFMQUFBc0FFd0FYQUNrQU1RQllRRlVuSUFJSkNnRkFBQUFBQkFFQUJGa0ZEQU1EQVFBSENBRUhWd0FJQUFzS0NBdFpBQW9BQ1FZS0NWa0FCZ0lDQmtzQUJnWUNUd0FDQmdKREFBQXZMaXNxSkNNYkdoY1dGUlFURWc4T0FBc0FDeEVURXcwUkt3RTFOQ1lpQmgwQkl4RWhFU1UwTmpJV0hRRWhBU0VSSVFjMEppSUdGUlFXRnhVVUZqSTJQUUUrQVFZaUpqUTJNaFlVQXRCNnJIcHdBb0QrRUdlU1ovNmdBZEQ5d0FKQTRDVTJKUnNWQ1E0SkZSc3pHaE1UR2hNQllKQldlbnBXa1A0Z0FlQ1FTV2RuU1pEK1FBR2dvQnNsSlJzV0l3VlNCd2tKQjFJRkl3b1RHaE1UR2dBQUFBWUF3UURnQTBBQllBQUhBQThBSGdBbkFDOEFOd0JGUUVJS0RRWURBZ2dNQkFNQUFRSUFXUWtGQWdFREF3Rk5DUVVDQVFFRFVRc0hBZ01CQTBVZ0h4RVFOVFF4TUMwc0tTZ2tJeDhuSUNjWUZoQWVFUjRURXhNUURoSXJBRElXRkFZaUpqUTJJZ1lVRmpJMk5DVXlIZ0VWRkFZaklpNENOVFEyTnlJR0ZCWXlOalFtQkRJV0ZBWWlKalEySWdZVUZqSTJOQUh4SGhVVkhoVS9OaVVsTmlYK3dRb1FDaFVQQnc0SkJoVVBHeVVsTlNZbUFkWWVGUlVlRlQ4MkpTVTJKUUZFRlI0VkZSNHhKVFlsSlRZSkNoQUtEeFVHQ1E0SER4VWNKVFlsSlRZbEhCVWVGUlVlTVNVMkpTVTJBQUFBQUFJQkFQL2dBd0FDWUFBd0FFc0JJVXV3QzFCWVFCNHZGd0lKQTBzK0Fnb0JQUUVGQ0RFQkJ3VXRLZ0lHQndWQUd3RUhBVDhiUzdBTVVGaEFIaThYQWdrRFN6NENDZ0k5QVFVSU1RRUhCUzBxQWdZSEJVQWJBUWNCUHh0QUhpOFhBZ2tEU3o0Q0NnRTlBUVVJTVFFSEJTMHFBZ1lIQlVBYkFRY0JQMWxaUzdBTFVGaEFMd0FBQ1FFSkFBRm1BQU1BQ1FBRENWa0NBUUVBQ2dnQkNsa0FDQUFGQndnRldRQUhBQVlFQndaWkFBUUVDd1JDRzB1d0RGQllRQzhCQVFBSkFna0FBbVlBQXdBSkFBTUpXUUFDQUFvSUFncFpBQWdBQlFjSUJWa0FCd0FHQkFjR1dRQUVCQXNFUWh0QUx3QUFDUUVKQUFGbUFBTUFDUUFEQ1ZrQ0FRRUFDZ2dCQ2xrQUNBQUZCd2dGV1FBSEFBWUVCd1paQUFRRUN3UkNXVmxBRDBwSVFrQWtMRFFqRmlreEVoQUxGeXNCSWc0RUl5SXVBUzhCSmljdUFpTWlEZ0VQQVJrQk14RStBVE15SGdFWEZqTXlQZ00zUGdFM0VUVUdBd1lqSWljdUFpTWlEZ0VIRVQ0Qk16SVhIZ1F6TWpjQzRBSVNDQkVNRHdjT0doNEpHeElISENFekZpcEFFZ1VISUEwektCTXFOUTVhTVFnUkVnc1VBd29QQnd3VU54WXVWdzAzTFJVWUtoc0xEVE1vTFZNR0p4SWdIQTRYT0FKQUF3RUJBUUVDQlFJR0JBRUdCd1lMQ0FNRi9yZis1QUVmQlFnSUR3TVRBUUlCQWdFQkFnRUJPaUVDL3NNSEVnTVBDUVFGQXdFVEJRZ1NBUWtEQmdJSEFBQUNBSUQvb0FPQUFxQUFDQUFTQURWQU1oSVJEdzROQ2dnQkFBa0JBd0ZBRUFrQ0F6NEFBUU1BQXdFQVpnQURBUUFEU3dBREF3QlBBZ0VBQXdCREZCRVJFZ1FTS3drQkVUTVJNeEV6RVFFSE5TTVZCeFVKQVRVQ0FQN0E0TURnL3NEQWdFQUJnQUdBQWtEL0FQNWdBUUQvQUFHZ0FXQ2FXc0F6S1FFei9zMHBBQUlBZ1ArZ0E0QUNvQUNCQUk0QXBMYUlod0lIQUFGQVM3QW1VRmhBTVFBREFBOEFBdzlaQmhBQ0FBMEJCdzRBQjFrRUFRSUxBUWtJQWdsWkFBNEFDZzRLVlFVQkFRRUlVUXdCQ0FnTENFSWJRRGNBQXdBUEFBTVBXUVlRQWdBTkFRY09BQWRaQUE0SkNnNU5CQUVDQ3dFSkNBSUpXUVVCQVF3QkNBb0JDRmtBRGc0S1VRQUtEZ3BGV1VBbUFnQ01pNFdFZTNocmFtZGxYMXhYVlZGUFJVSThPU3dxSlNNYkdCTVJEUXdBZ1FLQkVRNHJBU01pSmpVMFB3RTJOQzhCSmlJUEFRNEJJeUltUFFFMEppc0JJZzRCSFFFVURnSWpJaTRCTHdFbUl5SVBBUVlVSHdFZUF4VVVCaXNCSWc0QkhRRVVGanNCTWhZVkZBOEJCaFFmQVJZek1qOEJQZ0V6TWhZZEFSUVdPd0V5TmowQk5ENEJNeklmQVJZeVB3RStBVFFtTHdFbU5UUStBVHNCTWpZOUFqWW1CeFFHSWlZMU1UUStBVEllQVFOUkhoTWJEeFFPRGkwT0tnNFRCeEVLRXh3ZEZEME5GZzBJRFJFSkJ3d0tCUk1PRlJVT0xRNE9Fd1FGQkFJYkVoOE5GdzRlRkI4U0d3OFREZzR0RFJZVUR4TUdFZ2tUSEIwVVBSUWREUlVORXc4VERpa1BMQWNJQ0FjVER3d1ZEQjhVR2dFYncxNkZYU3BLVjBvckFXOGNFeE1PRXc0cER5d09EaE1IQ0JzU0h4UWVEaGNOSHdrUURRY0RCd1VURGc0c0Rpa1BFZ1FJQ0FrRkV4d05GZzQ4RlJ3Y0V4UU9FZzhwRGl3T0RoTUhDQnNUSGhRZUhSVWVEQlVORUJJT0Rpd0hFeElUQnhNTkZBMFZEUndVSHg0VkhFOUNYbDVDSzBvckswb0FBQU1BWVArQUE2QUN3QUFIQUJFQUd3QTNRRFFBQUFBQ0F3QUNXUUFEQUFjR0F3ZFhBQVlJQVFVRUJnVlhBQVFCQVFSTEFBUUVBVkVBQVFRQlJSRVJFUkVVRkJNVEVBa1hLd0FnQmhBV0lEWVFKRElXRlJRR0lpWTFOQk1qTlRNMUl6VXpFVE1DclA2bzlQUUJXUFQrUmlJWEZ5SVhjWUFnSUdBZ0FzRDAvcWowOUFGWUpCY1JFQmdZRUJIK2h4RHdFUDhBQUFBREFHRC9nQU9nQXNBQUJ3QVVBQzRBU0VCRkFBVUhCZ2NGQm1ZQUJnUUhCZ1JrQUFBQUJ3VUFCMWtBQkFBREFnUURXZ2dCQWdFQkFrMElBUUlDQVZJQUFRSUJSZ2tJS2lnbkppVWpHUmdOREFnVUNSUVRFQWtRS3dBZ0JoQVdJRFlRQVNJbU5EWXlGaFVVRGdNM0RnRUhJelErQWpjK0FUVTBKaU1pRnlNMk16SVdGUlFHQXF6K3FQVDBBVmowL21rUEV4TWRGQVFHQ0FzK0lBMEJKZ2NPRmhFU0ZUSWtZUUltQVlZelJob0N3UFQrcVBUMEFWaitlQlFjRXhNT0Jnb0lCd1BuSUNFcUZpRWZHeEFSSmhVakxWMThPekllTHdBREFNRUE0QU5BQVdBQUJ3QVFBQmdBSzBBb0JBWUNBd0FCQVFCTkJBWUNBd0FBQVZFRkF3SUJBQUZGQ1FnV0ZSSVJEUXdJRUFrUUV4QUhFQ3NBSWdZVUZqSTJOQ1VpQmhRV01qWTBKaUFpQmhRV01qWTBBaHMySlNVMkpmN0JHeVVsTlNZbUFnQTJKU1UySlFGZ0pUWWxKVFlsSlRZbEpUWWxKVFlsSlRZQUFBd0FRUC9RQThBQ2NBQUhBQThBRndBZkFDY0FMd0ExQURzQVF3QkxBRk1BV3dFRVM3QWhVRmhBWWdBQ0FBSm9BQU1CQ2dFRENtWUFDZ2dCQ2doa0FBc0pCZ2tMQm1ZQUJnUUpCZ1JrQUFjRkIya1lGd0lVRmdFVkFSUVZWd0FBQUFFREFBRlpEd0VNRGdFTkNRd05XQUFJQUFrTENBbFpFd0VRRWdFUkJSQVJXQUFFQkFWUkFBVUZDd1ZDRzBCbkFBSUFBbWdBQXdFS0FRTUtaZ0FLQ0FFS0NHUUFDd2tHQ1FzR1pnQUdCQWtHQkdRQUJ3VUhhUmdYQWhRV0FSVUJGQlZYQUFBQUFRTUFBVmtQQVF3T0FRMEpEQTFZQUFnQUNRc0lDVmtBQkJBRkJFMFRBUkFTQVJFRkVCRllBQVFFQlZFQUJRUUZSVmxBTFZSVVZGdFVXMXBaVDA1TlRFcEpTRWMvUGowOE96bzVPRE15TVRBdExDa29KU1FURXhNVEV4TVRFeEFaRnlzQU1oWVVCaUltTkRZaUJoUVdNalkwQWpJV0ZBWWlKalEySWdZVUZqSTJOQUF5RmhRR0lpWTBOaUlHRkJZeU5qUVhJUlVoTmpRaUZCY2pOVE1CTXhVak5qVTBKZ2NVRmhVaE5TRUdFek1WSXpZMU5DWW5CaFVVRmhVaE5RS3pHaE1UR2hNNk5DWW1OQ1pOR2hNVEdoTTZOQ1ltTkNiK014b1RFeG9UT2pRbUpqUW1Id0loL2Q4QndBR2hvUUkrb2FFQkFiOEIvZDhDSVFHL29hRUJBYjRCQWYzZkFsQVRHaE1UR2pNbU5DWW1OUDNtRXhvVEV4b3pKalFtSmpRQkZoTWFFeE1hTXlZMEppWTBDaUFJRUJBSUlQN3dJQWdJQkFnTUJBZ0VJQWdDS0NBSUNBUUlCQWdJQkFnRUlBQUpBRVFBSUFPOEFzc0FGUUFuQURNQVJBQlFBRjBBY1FCK0FJd0JFa3V3Q2xCWVFGNFhBUXdMQXdvTVhnQU5BZ29MRFY0QUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGRzBCZ0Z3RU1Dd01MREFObUFBMENDZ0lOQ21ZQUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGV1VCR2dIOXpjbDllVWxFMU5Db29HQllDQUlTRGY0eUFqSGw0Y241emZtbG5YbkZmY1ZoWFVWMVNYVXhMUmtVOU96UkVOVVF3TFNnektqTWhIaFluR0NjT0N3QVZBaFVhRGlzQklTSXVCVFUwTmpNaE1oNERGUlFHQnlFaUxnSTFORFl6SVRJZUFoVVVCZ2NoSWlZME5qTWhNaFlVQmdFaUpqVTBQZ0l6TWg0QkZSUU9BaVlpRGdFVUhnRXlQZ0UwSmdNaUpqVTBQZ0V5SGdFVURnRW5JZzRCRlJRZUF6TXlQZ0UxTkM0REF5SW1OVFErQVRJZUFSUU9BU2NpQmhRV01qWTFOQzRFQTVyOTNRUUhCd1lGQXdJVURnSWpCUXNJQmdRVUR2M2RCZzBKQmhRT0FpTUhEQWtHRkE3OTNRNFVGQTRDSXc0VUZQMERLendSR3lZVkd6QWJFQndtQ3hNUENRa1BFeEFKQ1JrclBCd3ZOekFiR3pBYkNnOEpBd1lKQ2dZSkVBa0VCZ2dMQlNzOEhDODNNQnNiTUJzT0ZCUWNGQU1FQmdnSkFrSUNBd1VHQndjRURoUURCZ2tLQmc0VTd3WUpEQWNPRkFVSkRRY09GTzhVSFJRVUhSUUJtandxRlNZYkVSd3ZIQlVsSEJDSUNROFRFQWtKRUJNUC9wSThLaHd2SEJ3dk56QWJpQWtQQ2dVTENBWUVDUkFKQmdvSkJnUCtpVHdxSEM4Y0hDODNNQnVKRkIwVUZBNEZDUWNIQkFNQUF3QkEvK0VEdndKbkFBTUFCd0FMQUNaQUl3QUNBQU1BQWdOWEFBQUFBUVFBQVZjQUJBUUZUd0FGQlFzRlFoRVJFUkVSRUFZVUt4TWhGU0VSSVJVaEVTRVZJVUFEZi95QkEzLzhnUU4vL0lFQlBEQUJXekQ5MlM4QUFBQUVBQmYvaUFQcEFyZ0FCUUFpQURrQVB3QTlRRG8vUGowOE96bzVMU3dqSWlFZkhoUVRCZ1VFQXdJQkFCY0NBUUZBQUFBQUFRSUFBVmtBQWdNREFrMEFBZ0lEVVFBREFnTkZMeDRYTFFRU0t3RUhKd2NYTnljd1BRRXVBeU1pRGdJSEZ6NEJNaDRCRnhVVUJnY1hOalV4Qnc0QklpNEJOVFEyTnljR0hRTWVBak15TmpjQkJ4YzNGemNEMDFOVkZXcHBVUUZCYlpkU04ybGNUUnNjTXJETXJHVUJBUUVnQWxBeXNNeXRaUUVCSUFJQ2I3cHRic0EyL1J4cEZsTlRGZ0VnVTFNV2Fta1lBUUpUbFd4QUhUWk5NQkJaWjJTc1pnNEdEZ2NFRlJhNFdXZGtyV1lLRkFvRUZSWUNCQU5zdUd0d1lBRklhUmRUVXhjQUFBQUJBVi8vbndLZ0FxQUFTUUJMUUVnNkFRQUZSeDhLQXdJREFrQUFCUUFGYUFjQkFBTUFhQUFEQWdOb0FBSUFCQUVDQkZrQUFRWUdBVTBBQVFFR1VnQUdBUVpHQVFCRFFUYzJMU3NsSXgwYkNBY0FTUUZKQ0E0ckFTSU9BUlVSRkFZaUpqY3dFVFEyTnpZWEhnRVZFUlFPQWdjR0l5SW1OVEFSTkNZaklnNEJGUU1VRmpNV056NENOUk0wSnlZaUJ3WUhNQjBEQmhZekZqYzJOUkUySmdLSkJnc0dSVnRGQVJJUUl5TVFFUUlDQkFJR0NBa05EUWtIQ2dZQktSd2RGQVlKQkFFNEd6OGFPQUVCWUVCRExpOEJEUUhxQmdzRy9ubzlRVU05QWRZWEl3a1ZGUW9qRi80L0Jnb0lDQU1IRmhNQldnb05CZ3NHL3FjcUx3RVpDQlFYRFFIQlN5SVFEeUZMZUkxOVZGRmVBUzh3VHdHRkNnNEFBd0FULy9ZRDdRSkpBQmNBSXdBeEFKcExzQTlRV0VBaUJ3RUVBZ1VDQkY0QUJRTURCVndBQVFZQkFnUUJBbGtBQXdNQVVnQUFBQXNBUWh0THNCaFFXRUFrQndFRUFnVUNCQVZtQUFVREFnVURaQUFCQmdFQ0JBRUNXUUFEQXdCU0FBQUFDd0JDRzBBcEJ3RUVBZ1VDQkFWbUFBVURBZ1VEWkFBQkJnRUNCQUVDV1FBREFBQURUUUFEQXdCU0FBQURBRVpaV1VBVUpTUVpHQ3NxSkRFbE1TQWZHQ01aSXlrbUNCQXJBUlFPQkNNaUxnTTBQZ016TWhjV0Z4WWxJZzRDRlJRV01qWTBKZ2NpRGdFVkZCWXlOalUwTGdJRDdTRThXbXFHUmxHZGRWc3ZMMXQybkZISW5XTWRDUDRUTUZoQUpZdkZpNHRqS1VZb1dINVlHQ2c0QVNBWVBrTS9NeDhyUkZCTlBFMVFSQ3B3UjBzVzRpWkNXakZsam83S2psZ3BTQ3BBVzF0QUlEa3FHQUFBQVFEQUFHQURRQUhnQUFVQUJyTUNBQUVtS3lVM0NRRVhBUU1aSi83QS9zQW5BUmxnS1FGWC9xa3BBUzBBQUFBQUFRREFBR0FEUUFIZ0FBVUFCck1DQUFFbUt3RVhDUUUzQVFNWkovN0Evc0FuQVJrQjRDbitxUUZYS2Y3VEFBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0VuQ1FFM0FRTEFLZjZwQVZjcC90TUNPU2Yrd1A3QUp3RVpBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFM0NRRW5BUUZBS1FGWC9xa3BBUzBDT1NmK3dQN0FKd0VaQUFBQUFRRkEvK0FDd0FKZ0FDRUFKVUFpR1JnVEN3UUZBQUlCUUFBQUFnRUNBQUZtQUFJQ0FWRUFBUUVMQVVJc0ZSRURFU3NCQmlJdkFSRVVCaUltTlJFSEJpY21ORGMyTnpZek1oWWZBUjRCSHdFZUFSVVVBcnNFRFFXVkNRNEpsUXdLQlFXdUFnWUZBd1VCQWdGWUxDc0RBZ0drQkFTRi9jY0hDUWtIQWptRUN3b0ZEZ1NmQVFVQ0FRSUJVQ2duQWdZREJ3QUFBQUVCUVAvZ0FzQUNZQUFnQUNSQUlSZ1RDd1FFQWdBQlFBQUFBUUlCQUFKbUFBRUJBbEVBQWdJTEFrSXNGUkVERVNzbEppSVBBUkUwSmlJR0ZSRW5KZ2NHRkJjV0Z4WXpNalkzUGdFL0FUNEJOVFFDdXdRTkJaVUpEZ21WREFvRkJhNENCZ1VFQmdFQldDd3JBd0tjQkFTRkFqa0hDUWtIL2NlRUN3b0ZEZ1NmQVFVREFnRlFLQ2NDQmdNSEFBQUFBQUVBd0FCZ0EwQUI0QUFkQUNwQUp4WVNBZ0FCQVVBQUFnRUNhQUFEQUFOcEFBRUFBQUZOQUFFQkFGSUFBQUVBUmh3VUl5TUVFaXNsTmk4QklUSTJOQ1lqSVRjMkp5WWlCd1lIQmhVVUZ4NEJId0VXTXpZQmZBb0toUUk1QndrSkIvM0hoQXNLQlE0RW53RUZCUUZRS0NjRUJ3ZGxDZ3lWQ1E0SmxRd0tCUVd1QWdZRkJ3UUJXQ3dyQlFFQUFRREFBR0FEUUFIaEFCNEFKVUFpRnhNQ0FBRUJRQUFDQUFKcEFBRUFBQUZOQUFFQkFGRUFBQUVBUlIwY0l5TURFQ3NsSmo4QklTSW1ORFl6SVNjbU56NEJGaGNXRnhZVkZBY09BUThCQmlNbUFvUUtDb1g5eHdjSkNRY0NPWVFMQ2dNSkNBT2ZBUVVGQVZBb0p3UUhCMlVLREpVSkRnbVZEQW9EQXdJRXJnSUdCUWNFQVZnc0t3VUJBQUFCQVI3L3B3TGFBbjhBQmdBV1FCTUFBUUE5QUFFQUFXZ0NBUUFBWHhFUkVRTVJLd1VUSXhFakVTTUIvTjZSbTVCWkFTZ0JzUDVRQUFFQVgvOTdBNkVDdlFBTEFBQUpBZ2NKQVJjSkFUY0pBUU50L3BMK2xEUUJiZjZUTkFGc0FXNDAvcEVCYndLOS9wSUJiRFArbFA2VU13RnMvcEl6QVc0QmJRQUFCQUJWLzNFRHFnTElBQk1BSndBK0FFUUFBQVVHTGdFME56NEJOQ1luSmpRK0FSY2VBUlFHSnc0QkpqUTNQZ0UwSmljbU5EWVdGeDRCRkFZREp5TWlKaWNSUGdFM016YytBUjRCRlJFVURnRW1KemNSQnlNUk13TXdDQmdRQ1RJMk5USUpFQmdKT2o0L3JBZ1lFUWdZR1JnWENCRVlDQjhnSXVISXB4Y2hBUUVoRjZmRkRoOGVFQkFiSHc0ZjFMcTRGQWtCRWhnSk5JYVhoVFFKR0JJQkNUeWNzSnhTQ0FFU0Z3a1pQa1UrR1FrWEVRRUlJVk5jVS83Z2dpRVlBYmtYSVFHVENnTVBHeEQ5SEJBYUR3RUlNQUxrbi81SEFBQUFCUUJBLzN3RHdBSzhBQXNBSHdBekFFZ0FYUUFBSlNFaUpqUTJNeUV5RmhRR0F5TWlKalEyT3dFeU5qMEJORFl5RmgwQkRnRUZJeTRCSnpVME5qSVdIUUVVRmpzQk1oWVVCZ01pSmowQlBnRTNNeklXRkFZckFTSUdIUUVVQmlFaUpqMEJOQ1lyQVNJbU5EWTdBUjRCRnhVVUJnT2cvTUFPRWhJT0EwQU9FaEp1d0E0U0VnN0FEaElTSEJJQk52MzNvQ2syQVJJY0VoSU9vQTRTRXU0T0VnRTJLYUFPRWhJT29BNFNFZ0x5RGhJU0RzQU9FaElPd0NrMkFSTDhFaHdTRWh3Uy9vQVNIQklTRHFBT0VoSU9vQ2syQVFFMkthQU9FaElPb0E0U0Vod1NBaUFTRHFBcE5nRVNIQklTRHFBT0VoSU9vQTRTRWh3U0FUWXBvQTRTQUFBQURBQ1dBQUVBQUFBQUFBRUFDQUFTQUFFQUFBQUFBQUlBQUFBaEFBRUFBQUFBQUFNQUZnQlVBQUVBQUFBQUFBUUFDUUNEQUFFQUFBQUFBQVVBTUFEdkFBRUFBQUFBQUFZQUNRRTBBQU1BQVFRSkFBRUFFQUFBQUFNQUFRUUpBQUlBQkFBYkFBTUFBUVFKQUFNQU1BQWlBQU1BQVFRSkFBUUFGZ0JyQUFNQUFRUUpBQVVBWUFDTkFBTUFBUVFKQUFZQUVnRWdBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QUFkVzVwYVdOdmJuTUFYamlKeEFBQUFBQjFBRzRBYVFCcEFHTUFid0J1QUhNQUlGNDRpY1FBT2dCV0FHVUFjZ0J6QUdrQWJ3QnVBQ0FBTVFBdUFEQUFNQUFBZFc1cGFXTnZibk1nT2xabGNuTnBiMjRnTVM0d01BQUFkUUJ1QUdrQWFRQmpBRzhBYmdCekFDQmVPSW5FQUFCMWJtbHBZMjl1Y3lBQUFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUF3QUNBQVV3QmxBSEFBZEFCbEFHMEFZZ0JsQUhJQUlBQXlBREFBTEFBZ0FESUFNQUF4QURrQUxBQWdBR2tBYmdCcEFIUUFhUUJoQUd3QUlBQnlBR1VBYkFCbEFHRUFjd0JsQUFCV1pYSnphVzl1SURFdU1EQWdVMlZ3ZEdWdFltVnlJREl3TENBeU1ERTVMQ0JwYm1sMGFXRnNJSEpsYkdWaGMyVUFBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QXRBQUIxYm1scFkyOXVjeTBBQUFJQUFBQUFBQUQvSHdBeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZQUFBQUFFQUFnQmJBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBUlFCRlFFV0FSY0JHQUVaQVJvQkd3RWNBUjBCSGdFZkFTQUJJUUVpQVNNQkpBRWxBU1lCSndFb0FTa0JLZ0VyQVN3QkxRRXVBUzhCTUFFeEFUSUJNd0UwQVRVQk5nRTNBVGdCT1FFNkFUc0JQQUU5QVQ0QlB3RkFBVUVCUWdGREFVUUJSUUZHQVVjQlNBRkpBVW9CU3dGTUFVMEJUZ0ZQQVZBQlVRRlNBVk1CVkFGVkFWWUJWd0ZZQVZrQldnRmJBVndCWFFkMWJtbEZNVEF3QjNWdWFVVXhNREVIZFc1cFJURXdNZ2QxYm1sRk1UTXdCM1Z1YVVVeE16RUhkVzVwUlRFek1nZDFibWxGTWpBd0IzVnVhVVV5TURFSGRXNXBSVEl3TWdkMWJtbEZNakF6QjNWdWFVVXlNekFIZFc1cFJUSXpNUWQxYm1sRk1qTXlCM1Z1YVVVeU16TUhkVzVwUlRJMk1BZDFibWxGTWpZeEIzVnVhVVV5TmpJSGRXNXBSVEkyTXdkMWJtbEZNalkwQjNWdWFVVXpNREFIZFc1cFJUTXdNUWQxYm1sRk16QXlCM1Z1YVVVek1ETUhkVzVwUlRNek1nZDFibWxGTXpNekIzVnVhVVV6TmpBSGRXNXBSVE0yTXdkMWJtbEZNelkwQjNWdWFVVTBNREFIZFc1cFJUUXdNUWQxYm1sRk5EQXlCM1Z1YVVVME1ETUhkVzVwUlRRd05BZDFibWxGTkRBMUIzVnVhVVUwTURZSGRXNXBSVFF3TndkMWJtbEZOREE0QjNWdWFVVTBNRGtIZFc1cFJUUXhNQWQxYm1sRk5ERXhCM1Z1YVVVME1UTUhkVzVwUlRRek5BZDFibWxGTkRNM0IzVnVhVVUwTXpnSGRXNXBSVFF6T1FkMWJtbEZORFF3QjNWdWFVVTBOREVIZFc1cFJUUTBNZ2QxYm1sRk5EUXpCM1Z1YVVVME5qQUhkVzVwUlRRMk1RZDFibWxGTkRZeUIzVnVhVVUwTmpNSGRXNXBSVFEyTkFkMWJtbEZORFkxQjNWdWFVVTBOallIZFc1cFJUUTJPQWQxYm1sRk5EY3dCM1Z1YVVVME56RUhkVzVwUlRRM01nZDFibWxGTlRBd0IzVnVhVVUxTURFSGRXNXBSVFV3TWdkMWJtbEZOVEF6QjNWdWFVVTFNRFFIZFc1cFJUVXdOUWQxYm1sRk5UQTJCM1Z1YVVVMU1EY0hkVzVwUlRVd09BZDFibWxGTlRNd0IzVnVhVVUxTXpJSGRXNXBSVFV6TkFkMWJtbEZOVE0xQjNWdWFVVTFNemNIZFc1cFJUVTJNQWQxYm1sRk5UWXlCM1Z1YVVVMU5qTUhkVzVwUlRVMk5RZDFibWxGTlRZM0IzVnVhVVUxTmpnSGRXNXBSVFU0TUFkMWJtbEZOVGd4QjNWdWFVVTFPRElIZFc1cFJUVTRNd2QxYm1sRk5UZzBCM1Z1YVVVMU9EVUhkVzVwUlRVNE5nZDFibWxGTlRnM0IzVnVhVVUxT0RnSGRXNXBSVFU0T1FSRmRYSnZCM1Z1YVVVMk1USUFBQUVBQWYvL0FBOEFBUUFBQUF3QUFBQVdBQUFBQWdBQkFBRUFYd0FCQUFRQUFBQUNBQUFBQUFBQUFBRUFBQUFBMWFRbkNBQUFBQURacWx1NUFBQUFBTm1xWEFrPScpXCJcblx0fSk7XG5cdC8vICNlbmRpZlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ1VuaUljb25zJyxcblx0XHRwcm9wczoge1xuXHRcdFx0dHlwZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3I6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnIzMzMzMzMydcblx0XHRcdH0sXG5cdFx0XHRzaXplOiB7XG5cdFx0XHRcdHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IDE2XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0aWNvbnM6IGljb25zXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRfb25DbGljaygpIHtcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRAZm9udC1mYWNlIHtcblx0XHRmb250LWZhbWlseTogdW5paWNvbnM7XG5cdFx0c3JjOiB1cmwoJ2RhdGE6Zm9udC90cnVldHlwZTtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxBQUVBQUFBUUFRQUFCQUFBUmtaVVRZajQzc3NBQUhiWUFBQUFIRWRFUlVZQUp3Qm1BQUIydUFBQUFCNVBVeTh5V1dsY3FnQUFBWWdBQUFCZ1kyMWhjR0JoYkJVQUFBSzBBQUFDUW1OMmRDQU1wZjQwQUFBUEtBQUFBQ1JtY0dkdE1QZWVsUUFBQlBnQUFBbVdaMkZ6Y0FBQUFCQUFBSGF3QUFBQUNHZHNlV1pzZmdmWkFBQVFFQUFBWVF4b1pXRmtGb2Y2L3dBQUFRd0FBQUEyYUdobFlRZCtBeVlBQUFGRUFBQUFKR2h0ZEhna2VCdVlBQUFCNkFBQUFNcHNiMk5oUEVrbkxnQUFEMHdBQUFEQ2JXRjRjQUlqQTNJQUFBRm9BQUFBSUc1aGJXWFdPVHRVQUFCeEhBQUFBZFJ3YjNOMFRKRTRpZ0FBY3ZBQUFBTy9jSEpsY0tXNXZtWUFBQTZRQUFBQWxRQUJBQUFBQVFBQUNWL09PVjhQUFBVQUh3UUFBQUFBQU5tcVc3a0FBQUFBMmFwY0NRQUEveUFFQUFNZ0FBQUFDQUFDQUFBQUFBQUFBQUVBQUFNZy95QUFYQVFBQUFBQUFBUUFBQUVBQUFBQUFBQUFBQUFBQUFBQUFBQUZBQUVBQUFCZ0FYb0FEQUFBQUFBQUFnQkdBRlFBYkFBQUFRUUJvZ0FBQUFBQUJBUC9BWkFBQmdBQUFwa0N6QUFBQUk4Q21RTE1BQUFCNndBekFRa0FBQUlBQmdNQUFBQUFBQUFBQUFBQkVBQUFBQUFBQUFBQUFBQUFVRVpGUkFHQUFCM21FZ01zL3l3QVhBTWdBT0FBQUFBQkFBQUFBQU1ZQXMwQUFBQWdBQUVCZGdBaUFBQUFBQUZWQUFBRDZRQXNCQUFBWUFEQUFNQUFZQURBQU1BQW9BQ0FBSUFBWUFDZ0FJQUFnQUJnQUxNQVFBQkFBQVVBVndCZUFJQUJBQUQwQVFBQTlBRUFBRUFBVmdDZ0FPQUF3QURBQUZFQWZnQ0FBR0FBUUFCZ0FHQUFZQUErQUZFQVlBQkFBR0FBWUFBMEFHQUFQZ0ZBQVFBQWdBQkFBQUFBSlFDQkFRQUJRQUZBQVN3QWdBQmdBSUFBd0FCZ0FHQUF3QURCQVFBQWdBQ0FBR0FBWUFEQkFFQUFSQUJBQUJjQlh3QVRBTUFBd0FGQUFVQUJRQUZBQU1BQXdBRWVBRjhBVlFCQUFBQUFBQUFEQUFBQUF3QUFBQndBQVFBQUFBQUJQQUFEQUFFQUFBQWNBQVFCSUFBQUFFUUFRQUFGQUFRQUFBQWRBSGpoQXVFeTRnUGlNK0prNHdQak0rTmc0MlRrQ2VRUjVCUGtOT1E1NUVQa1p1Um81SExsQ09VdzVUTGxOZVUzNVdEbFkrVmw1V2psaWVXUTVoTC8vd0FBQUFBQUhRQjQ0UURoTU9JQTRqRGlZT01BNHpMallPTmo1QURrRU9RVDVEVGtOK1JBNUdEa2FPUnc1UURsTU9VeTVUVGxOK1ZnNVdMbFplVm41WURsa09ZUy8vOEFBZi9rLzRzZkJCN1hIZ29kM2gyeUhSY2M2Unk5SExzY0lCd2FIQmtiK1J2M0cvRWIxUnZVRzgwYlFCc1pHeGdiRnhzV0d1NGE3UnJzR3VzYTFCck9HazBBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCQmdBQUFRQUFBQUFBQUFBQkFnQUFBQUlBQUFBQUFBQUFBQUFBQUFBQUFBQUJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBd0FBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBc0FBc3NDQmdaaTJ3QVN3Z1pDQ3d3RkN3QkNaYXNBUkZXMWdoSXlFYmlsZ2dzRkJRV0NHd1FGa2JJTEE0VUZnaHNEaFpXU0N3Q2tWaFpMQW9VRmdoc0FwRklMQXdVRmdoc0RCWkd5Q3d3RkJZSUdZZ2lvcGhJTEFLVUZoZ0d5Q3dJRkJZSWJBS1lCc2dzRFpRV0NHd05tQWJZRmxaV1J1d0FDdFpXU093QUZCWVpWbFpMYkFDTENCRklMQUVKV0ZrSUxBRlExQllzQVVqUXJBR0kwSWJJU0Zac0FGZ0xiQURMQ01oSXlFZ1pMRUZZa0lnc0FZalFySUtBQUlxSVNDd0JrTWdpaUNLc0FBcnNUQUZKWXBSV0dCUUcyRlNXVmdqV1NFZ3NFQlRXTEFBS3hzaHNFQlpJN0FBVUZobFdTMndCQ3l3Q0NOQ3NBY2pRckFBSTBLd0FFT3dCME5SV0xBSVF5dXlBQUVBUTJCQ3NCWmxIRmt0c0FVc3NBQkRJRVVnc0FKRlk3QUJSV0pnUkMyd0JpeXdBRU1nUlNDd0FDc2pzUVFFSldBZ1JZb2pZU0JrSUxBZ1VGZ2hzQUFic0RCUVdMQWdHN0JBV1ZranNBQlFXR1Zac0FNbEkyRkVSQzJ3Qnl5eEJRVkZzQUZoUkMyd0NDeXdBV0FnSUxBS1EwcXdBRkJZSUxBS0kwSlpzQXREU3JBQVVsZ2dzQXNqUWxrdHNBa3NJTGdFQUdJZ3VBUUFZNG9qWWJBTVEyQWdpbUFnc0F3alFpTXRzQW9zUzFSWXNRY0JSRmtrc0ExbEkzZ3RzQXNzUzFGWVMxTllzUWNCUkZrYklWa2tzQk5sSTNndHNBd3NzUUFOUTFWWXNRME5RN0FCWVVLd0NTdFpzQUJEc0FJbFFySUFBUUJEWUVLeENnSWxRckVMQWlWQ3NBRVdJeUN3QXlWUVdMQUFRN0FFSlVLS2lpQ0tJMkd3Q0NvaEk3QUJZU0NLSTJHd0NDb2hHN0FBUTdBQ0pVS3dBaVZoc0FncUlWbXdDa05Ic0F0RFIyQ3dnR0lnc0FKRlk3QUJSV0pnc1FBQUV5TkVzQUZEc0FBK3NnRUJBVU5nUWkyd0RTeXhBQVZGVkZnQXNBMGpRaUJnc0FGaHRRNE9BUUFNQUVKQ2ltQ3hEQVFyc0dzckd5SlpMYkFPTExFQURTc3RzQThzc1FFTkt5MndFQ3l4QWcwckxiQVJMTEVERFNzdHNCSXNzUVFOS3kyd0V5eXhCUTByTGJBVUxMRUdEU3N0c0JVc3NRY05LeTJ3Rml5eENBMHJMYkFYTExFSkRTc3RzQmdzc0FjcnNRQUZSVlJZQUxBTkkwSWdZTEFCWWJVT0RnRUFEQUJDUW9wZ3NRd0VLN0JyS3hzaVdTMndHU3l4QUJnckxiQWFMTEVCR0NzdHNCc3NzUUlZS3kyd0hDeXhBeGdyTGJBZExMRUVHQ3N0c0I0c3NRVVlLeTJ3SHl5eEJoZ3JMYkFnTExFSEdDc3RzQ0Vzc1FnWUt5MndJaXl4Q1JnckxiQWpMQ0Jnc0E1Z0lFTWpzQUZnUTdBQ0piQUNKVkZZSXlBOHNBRmdJN0FTWlJ3YklTRlpMYkFrTExBaks3QWpLaTJ3SlN3Z0lFY2dJTEFDUldPd0FVVmlZQ05oT0NNZ2lsVllJRWNnSUxBQ1JXT3dBVVZpWUNOaE9Cc2hXUzJ3Sml5eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndKeXl3Qnl1eEFBVkZWRmdBc0FFV3NDVXFzQUVWTUJzaVdTMndLQ3dnTmJBQllDMndLU3dBc0FORlk3QUJSV0t3QUN1d0FrVmpzQUZGWXJBQUs3QUFGclFBQUFBQUFFUStJeml4S0FFVktpMndLaXdnUENCSElMQUNSV093QVVWaVlMQUFRMkU0TGJBckxDNFhQQzJ3TEN3Z1BDQkhJTEFDUldPd0FVVmlZTEFBUTJHd0FVTmpPQzJ3TFN5eEFnQVdKU0F1SUVld0FDTkNzQUlsU1lxS1J5TkhJMkVnV0dJYklWbXdBU05Dc2l3QkFSVVVLaTJ3TGl5d0FCYXdCQ1d3QkNWSEkwY2pZYkFHUlN0bGlpNGpJQ0E4aWpndHNDOHNzQUFXc0FRbHNBUWxJQzVISTBjallTQ3dCQ05Dc0FaRkt5Q3dZRkJZSUxCQVVWaXpBaUFESUJ1ekFpWURHbGxDUWlNZ3NBbERJSW9qUnlOSEkyRWpSbUN3QkVPd2dHSmdJTEFBS3lDS2ltRWdzQUpEWUdRanNBTkRZV1JRV0xBQ1EyRWJzQU5EWUZtd0F5V3dnR0poSXlBZ3NBUW1JMFpoT0JzanNBbERSckFDSmJBSlEwY2pSeU5oWUNDd0JFT3dnR0pnSXlDd0FDc2pzQVJEWUxBQUs3QUZKV0d3QlNXd2dHS3dCQ1poSUxBRUpXQmtJN0FESldCa1VGZ2hHeU1oV1NNZ0lMQUVKaU5HWVRoWkxiQXdMTEFBRmlBZ0lMQUZKaUF1UnlOSEkyRWpQRGd0c0RFc3NBQVdJTEFKSTBJZ0lDQkdJMGV3QUNzallUZ3RzRElzc0FBV3NBTWxzQUlsUnlOSEkyR3dBRlJZTGlBOEl5RWJzQUlsc0FJbFJ5TkhJMkVnc0FVbHNBUWxSeU5ISTJHd0JpV3dCU1ZKc0FJbFliQUJSV01qSUZoaUd5RlpZN0FCUldKZ0l5NGpJQ0E4aWpnaklWa3RzRE1zc0FBV0lMQUpReUF1UnlOSEkyRWdZTEFnWUdhd2dHSWpJQ0E4aWpndHNEUXNJeUF1UnJBQ0pVWlNXQ0E4V1M2eEpBRVVLeTJ3TlN3aklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTJMQ01nTGthd0FpVkdVbGdnUEZraklDNUdzQUlsUmxCWUlEeFpMckVrQVJRckxiQTNMTEF1S3lNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkNzdHNEZ3NzQzhyaWlBZ1BMQUVJMEtLT0NNZ0xrYXdBaVZHVWxnZ1BGa3VzU1FCRkN1d0JFTXVzQ1FyTGJBNUxMQUFGckFFSmJBRUppQXVSeU5ISTJHd0JrVXJJeUE4SUM0ak9MRWtBUlFyTGJBNkxMRUpCQ1ZDc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBWkZLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdSN0FFUTdDQVltQWdzQUFySUlxS1lTQ3dBa05nWkNPd0EwTmhaRkJZc0FKRFlSdXdBME5nV2JBREpiQ0FZbUd3QWlWR1lUZ2pJRHdqT0JzaElDQkdJMGV3QUNzallUZ2hXYkVrQVJRckxiQTdMTEF1S3k2eEpBRVVLeTJ3UEN5d0x5c2hJeUFnUExBRUkwSWpPTEVrQVJRcnNBUkRMckFrS3kyd1BTeXdBQlVnUjdBQUkwS3lBQUVCRlJRVExyQXFLaTJ3UGl5d0FCVWdSN0FBSTBLeUFBRUJGUlFUTHJBcUtpMndQeXl4QUFFVUU3QXJLaTJ3UUN5d0xTb3RzRUVzc0FBV1JTTWdMaUJHaWlOaE9MRWtBUlFyTGJCQ0xMQUpJMEt3UVNzdHNFTXNzZ0FBT2lzdHNFUXNzZ0FCT2lzdHNFVXNzZ0VBT2lzdHNFWXNzZ0VCT2lzdHNFY3NzZ0FBT3lzdHNFZ3NzZ0FCT3lzdHNFa3NzZ0VBT3lzdHNFb3NzZ0VCT3lzdHNFc3NzZ0FBTnlzdHNFd3NzZ0FCTnlzdHNFMHNzZ0VBTnlzdHNFNHNzZ0VCTnlzdHNFOHNzZ0FBT1NzdHNGQXNzZ0FCT1NzdHNGRXNzZ0VBT1NzdHNGSXNzZ0VCT1NzdHNGTXNzZ0FBUENzdHNGUXNzZ0FCUENzdHNGVXNzZ0VBUENzdHNGWXNzZ0VCUENzdHNGY3NzZ0FBT0NzdHNGZ3NzZ0FCT0NzdHNGa3NzZ0VBT0NzdHNGb3NzZ0VCT0NzdHNGc3NzREFyTHJFa0FSUXJMYkJjTExBd0s3QTBLeTJ3WFN5d01DdXdOU3N0c0Y0c3NBQVdzREFyc0RZckxiQmZMTEF4S3k2eEpBRVVLeTJ3WUN5d01TdXdOQ3N0c0dFc3NERXJzRFVyTGJCaUxMQXhLN0EyS3kyd1l5eXdNaXN1c1NRQkZDc3RzR1Fzc0RJcnNEUXJMYkJsTExBeUs3QTFLeTJ3Wml5d01pdXdOaXN0c0djc3NETXJMckVrQVJRckxiQm9MTEF6SzdBMEt5MndhU3l3TXl1d05Tc3RzR29zc0RNcnNEWXJMYkJyTEN1d0NHV3dBeVJRZUxBQkZUQXRBQUJMdUFESVVsaXhBUUdPV2JrSUFBZ0FZeUN3QVNORUlMQURJM0N3RGtVZ0lFdTRBQTVSUzdBR1UxcFlzRFFic0NoWllHWWdpbFZZc0FJbFliQUJSV01qWXJBQ0kwU3pDZ2tGQkN1ekNnc0ZCQ3V6RGc4RkJDdFpzZ1FvQ1VWU1JMTUtEUVlFSzdFR0FVU3hKQUdJVVZpd1FJaFlzUVlEUkxFbUFZaFJXTGdFQUloWXNRWUJSRmxaV1ZtNEFmK0ZzQVNOc1FVQVJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFNZ0F5QXhqLzRRTWcveUFER1AvaEF5RC9JQUFBQUNnQUtBQW9BV1FDQ2dPMEJZb0dEZ2FpQjRnSWdBaklDWFlKOEFwNkNyUUxHQXRzRFBnTjNBNTBEMXdSeWhJeUV6QVRuaFFhRkhJVXZCVkFGZUlYSEJkOEdFb1lrQmpXR1RJWmpCbm9HbUFhb2hzQ0cxUWJsQnZxSENnY2VoeWlIT0FkREIxcUhhUWQ2aDRJSGtZZW5oN1lIemdnbWlEa0lRd2hKQ0U4SVZ3aHZpSWNKR1lraUNUMEpZWW1BQ1o0SjNZbnRpakVLUTRwZWltNktzUXNFQ3crTEx3dFNDM2VMZll1RGk0bUxqNHVpQzdRTHhZdlhDOTRMNW93QmpDR0FBQUFBZ0FpQUFBQk1nS3FBQU1BQndBcFFDWUFBQUFEQWdBRFZ3QUNBUUVDU3dBQ0FnRlBCQUVCQWdGREFBQUhCZ1VFQUFNQUF4RUZEeXN6RVNFUkp6TVJJeUlCRU83TXpBS3EvVllpQW1ZQUFBQUZBQ3ovNFFPOEF4Z0FGZ0F3QURvQVVnQmVBWGRMc0JOUVdFQktBZ0VBRFE0TkFBNW1BQU1PQVE0RFhnQUJDQWdCWEJBQkNRZ0tCZ2xlRVFFTUJnUUdERjRBQ3dRTGFROEJDQUFHREFnR1dBQUtCd1VDQkFzS0JGa1NBUTRPRFZFQURRMEtEa0liUzdBWFVGaEFTd0lCQUEwT0RRQU9aZ0FERGdFT0ExNEFBUWdJQVZ3UUFRa0lDZ2dKQ21ZUkFRd0dCQVlNWGdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWh0THNCaFFXRUJNQWdFQURRNE5BQTVtQUFNT0FRNERYZ0FCQ0FnQlhCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FodEFUZ0lCQUEwT0RRQU9aZ0FERGdFT0F3Rm1BQUVJRGdFSVpCQUJDUWdLQ0FrS1poRUJEQVlFQmd3RVpnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FsbFpXVUFvVTFNN096SXhGeGRUWGxOZVcxZzdVanRTUzBNM05URTZNam9YTUJjd1VSRXhHQkVvRlVBVEZpc0JCaXNCSWc0Q0hRRWhOVFFtTlRRdUFpc0JGU0VGRlJRV0ZBNENJd1ltS3dFbklRY3JBU0luSWk0Q1BRRVhJZ1lVRmpNeU5qUW1Gd1lIRGdNZUFUc0dNalluTGdFbkppY0JOVFErQWpzQk1oWWRBUUVaR3hwVEVpVWNFZ09RQVFvWUp4NkYva29Db2dFVkh5TU9EaDhPSUMzK1NTd2RJaFFaR1NBVENIY01FaElNRFJJU2pBZ0dCUXNFQWdRUERpVkRVVkJBSkJjV0NRVUpCUVVHL3FRRkR4b1Z2QjhwQWg4QkRCa25Ha3dwRUJ3RURTQWJFbUdJTkJjNk9pVVhDUUVCZ0lBQkV4c2dEcWMvRVJvUkVSb1JmQm9XRXlRT0VBMElHQm9OSXhFVEZBRjM1QXNZRXd3ZEp1TUFBQUlBWVArQUE2QUN3QUFIQUZjQVNFQkZTa2xET1RnMkp5WWNHUmNXREFRRFR3OENBUVFDUUFBRUF3RURCQUZtQUFBRkFRSURBQUpaQUFNRUFRTk5BQU1EQVZFQUFRTUJSUWtJVEVzd0xRaFhDVmNURUFZUUt3QWdCaEFXSURZUUpUSWVBaFVVQnlZbkxnRTFORGMxTmo4RFBnRTNOamMyTnpZdkFUVW1OelltSnlZbkl3WUhEZ0VYRmdjVUJ4VU9BUmNlQVJjV0Z4WVZNQlVVQmhRUEFSUWpEZ0VISmpVMFBnUUNyUDZvOVBRQldQVCtZRTJPWmp4WVVXa0VBZ0VCQVFJQ0FnRUNBZzBGRXdnSENBRUVDZ1FPRXloTkkwd29GQTRFQ2dRQkJBRUVCUTRJQkE0SUFRRUNBU2x3SEZrYk1VZFRZd0xBOVA2bzlQUUJXTkU4Wm81Tmltb2hId0VHRGdNREJnTURCZ1lHQXdVREhTSVdMQ01VQWdFVk9STTZHak1GQlRNYU9oTTVGUUVCQVFvVEdoa2dDU0VlRUNBSUF3VUNBUUVCRENnTWFvczBZMU5ITVJzQUFBQUFBd0RBLytBRFFBSmdBQUFBVXdEQUFUWkxzQXRRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQ2dBRFFCdExzQXhRV0VBY2s1S0ZBQVFCQzU2YWxZUjZCUUFCcWFkelFrQS9FUW9JQndBRFFCdEFISk9TaFFBRUFRdWVtcFdFZWdVQUFhbW5jMEpBUHhFS0NBb0FBMEJaV1V1d0MxQllRRFVEQVFFTEFBc0JBR1lFQVFBS0N3QUtaQUFLQndzS0IyUUpDQUlIQmdzSEJtUUFBZ0FMQVFJTFdRd0JCZ1lGVUFBRkJRc0ZRaHRMc0F4UVdFQXZBd0VCQ3dBTEFRQm1CQUVBQndzQUIyUUtDUWdEQndZTEJ3WmtBQUlBQ3dFQ0Mxa01BUVlHQlZBQUJRVUxCVUliUURVREFRRUxBQXNCQUdZRUFRQUtDd0FLWkFBS0J3c0tCMlFKQ0FJSEJnc0hCbVFBQWdBTEFRSUxXUXdCQmdZRlVBQUZCUXNGUWxsWlFCNVZWSXVLWldSaVlWOWVYVnhVd0ZYQVRrMDVPQzh1SnlVZkhoTVNEUTRyQ1FFdUFTY21KeTRCUHdFMk56NEROVGN5UGdFM1BnRTFOQzRESXpjK0FUYzJKaU1pRGdFVkhnRWZBU0lIRkJZWEhnTVhNeFlYRmg4REJnY09BUWNPQkFjR0ZTRTBMZ01ISVRZM05qYytBVGN5TmpJK0FUSStBVEkzTmpjMkp6MENOQ1k5QXljdUFTY21Md0V1QWljbUp5WStBVGMxSmljbU56WXlGeFlIRGdJSE1RWVZIZ0VIQmdjVURnRVZCdzRDQnc0QkR3RWRBUVlkQVJRR0ZSUVhIZ0lYRmhjZUFSY1dGeDRDRndHVkFVSVFSQU1lQ2dNQkFRRU1CZ0lFQkFNQkFnVUpBd0VMQXdNREFnRURBZ1lCQVZCR0wwWWdBUVlDQXdzQkN3RUNCUVFGQVFJSEJ3TUZCd01CQVFJRkdBc0dFeEVURWdocEFvQVNGeUVVNHY3dEJRd1dJQWtaRVFFRkF3UURCQU1FQXdJcEVBd0JBUVVEQ2dNRkJ3RUJDQWtCQkFRQ0FnY0JDUUVCSFNCeUlCMEJBUVVEQVFFQkN3TUVCUWtKQVFJRUJRRURDZ01GQVFFTUJ4d1BCd2dZRVJrSklSVUVCUVVDQVkzK3V3WUxBUVlNQkNrU0V4TVJCUkFSRHdVRkFRd0xCeVlMQlFjRUFnRUpCaXdhTmxFb1BDTWFLZ2tJRXdza0NRWUtCUUlCTGhFSENROEZSQXNEQlFvREFRTURCQVFESlVNU0lSVVVDRVFIQ0JBTEJBVUNBUUVCQVFFQkNSUU9NZ2dKQndRRkFnTUNDQWNGRWdnT0tnY0VCUVFERXhJTUNBa0REQnN3S1IwaElSMHBGU1lOQXdVR0FoSU5FaE1EQkFVRUJ3a1dGUVFJRUFjSENBSURCQWtFREFZeURna09CUUVDQkFJRkJBc1FBd1FGQXdBQUJBREEvK0FEUUFKZ0FBc0FEQUJmQU13QmNrdXdDMUJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dRQmdOQUcwdXdERkJZUUJ5Zm5wRU1CQWNFcXFhaGtJWUZCZ2UxczM5T1RFc2RGZ2dOQmdOQUcwQWNuNTZSREFRSEJLcW1vWkNHQlFZSHRiTi9Ua3hMSFJZSUVBWURRRmxaUzdBTFVGaEFSd2tCQndRR0JBY0daZ29CQmhBRUJoQmtBQkFOQkJBTlpBOE9BZzBNQkEwTVpBQUlBQkVCQ0JGWkFnRUFCUUVEQkFBRFZ3QUJBQVFIQVFSWEVnRU1EQXRRQUFzTEN3dENHMHV3REZCWVFFRUpBUWNFQmdRSEJtWUtBUVlOQkFZTlpCQVBEZ01OREFRTkRHUUFDQUFSQVFnUldRSUJBQVVCQXdRQUExY0FBUUFFQndFRVZ4SUJEQXdMVUFBTEN3c0xRaHRBUndrQkJ3UUdCQWNHWmdvQkJoQUVCaEJrQUJBTkJCQU5aQThPQWcwTUJBME1aQUFJQUJFQkNCRlpBZ0VBQlFFREJBQURWd0FCQUFRSEFRUlhFZ0VNREF0UUFBc0xDd3RDV1ZsQUpHRmdsNVp4Y0c1dGEycHBhR0RNWWN4YVdVVkVPem96TVNzcUh4NFJFUkVSRVJBVEZDc0JJelVqRlNNVk14VXpOVE1GQVM0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd2NoTmpjMk56NEJOekkyTWo0Qk1qNEJNamMyTnpZblBRSTBKajBESnk0Qkp5WXZBUzRDSnlZbkpqNEJOelVtSnlZM05qSVhGZ2NPQWdjeEJoVWVBUWNHQnhRT0FSVUhEZ0lIRGdFUEFSMEJCaDBCRkFZVkZCY2VBaGNXRng0QkZ4WVhIZ0lYQTBBeUhESXlIREwrVlFGQ0VFUURIZ29EQVFFQkRBWUNCQVFEQVFJRkNRTUJDd01EQXdJQkF3SUdBUUZRUmk5R0lBRUdBZ01MQVFzQkFnVUVCUUVDQndjREJRY0RBUUVDQlJnTEJoTVJFeElJYVFLQUVoY2hGT0wrN1FVTUZpQUpHUkVCQlFNRUF3UURCQU1DS1JBTUFRRUZBd29EQlFjQkFRZ0pBUVFFQWdJSEFRa0JBUjBnY2lBZEFRRUZBd0VCQVFzREJBVUpDUUVDQkFVQkF3b0RCUUVCREFjY0R3Y0lHQkVaQ1NFVkJBVUZBZ0h1TWpJY01qSkYvcnNHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFoRUJ3Z1FDd1FGQWdFQkFRRUJBUWtVRGpJSUNRY0VCUUlEQWdnSEJSSUlEaW9IQkFVRUF4TVNEQWdKQXd3Yk1Da2RJU0VkS1JVbURRTUZCZ0lTRFJJVEF3UUZCQWNKRmhVRUNCQUhCd2dDQXdRSkJBd0dNZzRKRGdVQkFnUUNCUVFMRUFNRUJRTUFBQUlBWVArQUE2QUN3QUFIQUVRQU1rQXZRUnNhQ3dRQ0F3RkFBQUFBQXdJQUExa0VBUUlCQVFKTkJBRUNBZ0ZSQUFFQ0FVVUpDQ2NrQ0VRSlJCTVFCUkFyQUNBR0VCWWdOaEFCSWlZblBnRTNQZ0UxTkNjbUp5WW5KajhCTlRZbUp5WStBamMyTnpNV0Z4NEJCd1lYTUJjZUFRY09BUWNPQlJVVUZoY1dGdzRDQXF6K3FQVDBBVmowL21CV21UVWNjQ2dFQWdnT0JCTUpCd2dCQWdRRUFnSUdEZ29vVENOTktCUU9CQW9FQVFRQkJBVVBCd0lHQndnRkJBSURhVkVqV20wQ3dQVCtxUFQwQVZqOTEwaEFEQ2dNQVFZT0lCQWVJUlV0SXhRQkFnY3hGZ2NaR2g4T013VUZNeG82RXprVkF3b1RHaGtnQ1FzWUZCQU9FUWdPQmdFZklTczlJUUFBQUFFQXdQL2dBMEFDWUFCU0FEZEFORUUvUGhBSkJRVUFBVUFEQVFFQ0FBSUJBR1lFQVFBRkFnQUZaQUFDQWdWUEFBVUZDd1ZDVFV3NE55NHRKaVFlSFJJUkJnNHJKUzRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3TFhFRVFESGdvREFRRUJEQVlDQkFRREFRSUZDUU1CQ3dNREF3SUJBd0lHQVFGUVJpOUdJQUVHQWdNTEFRc0JBZ1VFQlFFQ0J3Y0RCUWNEQVFFQ0JSZ0xCaE1SRXhJSWFRS0FFaGNoRkVnR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBZ0FBQUFBQWdEQS8rQURRQUpnQUFzQVhnREFRQXBOUzBvY0ZRVUxCZ0ZBUzdBTFVGaEFMZ0FJQVFBSVhBa0JCd1FHQUFkZUNnRUdDd1FHQzJRQ0FRQUZBUU1FQUFOWUFBRUFCQWNCQkZjQUN3c0xDMEliUzdBTVVGaEFMUUFJQVFob0NRRUhCQVlBQjE0S0FRWUxCQVlMWkFJQkFBVUJBd1FBQTFnQUFRQUVCd0VFVndBTEN3c0xRaHRBTGdBSUFRaG9DUUVIQkFZRUJ3Wm1DZ0VHQ3dRR0MyUUNBUUFGQVFNRUFBTllBQUVBQkFjQkJGY0FDd3NMQzBKWldVQVVXVmhFUXpvNU1qQXFLUjRkRVJFUkVSRVFEQlFyQVNNMUl4VWpGVE1WTXpVekF5NEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdOQU1od3lNaHd5YVJCRUF4NEtBd0VCQVF3R0FnUUVBd0VDQlFrREFRc0RBd01DQVFNQ0JnRUJVRVl2UmlBQkJnSURDd0VMQVFJRkJBVUJBZ2NIQXdVSEF3RUJBZ1VZQ3dZVEVSTVNDR2tDZ0JJWElSUUI3akl5SERJeS9uWUdDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWdBQUFJQW9QL0FBM2NDZ0FCSkFJd0FYRUJaWWdFR0IzbDNFaEFFQUFZQ1FBQURBZ2NDQXdkbUFBWUhBQWNHQUdZQUFnQUhCZ0lIV1FBQUFBa0JBQWxaQUFFQUNBVUJDRmtBQlFRRUJVMEFCUVVFVVFBRUJRUkZoWU9BZm1WallXQlBUVUpBTFN3cUtDUWlDaEFySlM0Qkl5SU9BUWNHSXlJbUx3RW1Md0VtTHdFdUF5OEJMZ0kxTkQ0Q056WW5KaThCSmlNaUJ3WWpCdzRDQnc0QkZCNEJGeDRCRng0QkZ4NEJNekkrQWpjMkp5WUhCZ2NHSXlJbkxnRW5MZ1kyTnpZM01EY3lOVFl6TWhZZkFSNEJCd1lYSGdJZkFSNEJGeFlYRmg4QkZoOEJGak15TmpjMk16SWVBaGNXQndZRFFCdG5KUVlNQ2dRd0NnUUtDd0lsRmdRQkFnUUdCZzBRREFFS0NBZ0NCZ2tISVI0UU1RSWRKaHdrQVFFQkRoY1BCQVFFQ0JRUUkwZ3pMRG8yTldFa0ZoWWpJQkkyS3dZZEpDWUtGVUJvTkRrckdTZ2xJU01UQkFNRUNTRUNBUjBUREJVTEFpNGpGU0FDQVFvTERBRVhGUXNCQWdNQkF4WW5BaHdSRFI4ZkJnb1BLeWtqQ2hzR0JJRWJPd0lFQWg4SENnSWZHQU1DQXdNR0J3MFREUUVMQ2d3RUF3Z0xEZ2tzUHlFN0F5UVhBUUVKRmhnTURSWWlKRE1kUUdFMUxqQW5KaW9DQ2hvV1FUY0dhU3NFQVVvbUx5MFpMekkxUHpNbUdBNGNGUUVCRWd3TkFqbEtIQ3dZQ1JNT0RnRVpGd3NCQXdJQkJCY2lBaGdQRkFRUkdCb0tHeFlSQUFBREFJQUFJQU9BQWlBQUF3QUdBQk1BUEVBNUVoRU9EUXdKQ0FRSUF3SUJRQVFCQVFBQ0F3RUNWd1VCQXdBQUEwc0ZBUU1EQUU4QUFBTUFRd2NIQUFBSEV3Y1RCZ1VBQXdBREVRWVBLeE1SSVJFQkpTRUJFUmNIRnpjWE54YzNKemNSZ0FNQS9vRCt1Z0tNL1ZybWlBU2VZR0NlQklqbUFpRCtBQUlBL3VqNC9rQUJySytiQkl0SlNZc0VtNi8rVkFBQ0FJRC80QU9BQW1BQUp3QlZBR3BBWnpReUlRTUVBQlFCQVFKS0FRZ0JUaGdDREFrL0FRY01CVUFBQkFBQ0FBUUNaZ1VEQWdJQkFBSUJaQXNLQWdnQkNRRUlDV1lBQ1F3QkNReGtBQVlBQUFRR0FGa0FBUUFNQndFTVdRQUhCd3NIUWxGUFRVdEpTRVpGUlVRK1BDa29FUklSSVNZUURSUXJBREllQVJVVUJ3WWpJaWNpSXljakppY2lCeU1IRGdFUEFUNEROVFFuSmljbUp5WTFORFlrSWc0QkZSUVhIZ0lYSmpVeEZoVVVCd1lXRnpNeVB3STJQd0V6SXpZM01oY1ZNeklWRmpNeVBnRTBKZ0dodnFOZVkyV1dWRGNCQWdFQ0R3NFJFQUVFQlFzQ1R3c0xCUUVOQWdFREFUVmVBV3JRc1djOUFRTUNBUUlISkFJSkNBWURCQU5sQVFvSkFRRUxDd3NLQWdFOVdtaXdabWNDUUVxQVMyOU1UeE1CQkFFR0FnRUVBU01oSkJNRkFoWVRBd0VFQVVOUFMzOXFVNDVVV2t3QkJBUUJBd0VMREFKeUJnd0NBUUVzQVFNRUF3RURBUUVVVFlxbmpnQUFBQUFEQUdEL2dBT2dBc0FBQ1FBUkFCZ0FuclVVQVFZRkFVQkxzQXBRV0VBNkFBRUFDQUFCQ0dZQUJnVUZCbDBBQWdBQUFRSUFWd3dCQ0FBTEJBZ0xWd0FFQUFNSkJBTlhDZ0VKQlFVSlN3b0JDUWtGVHdjQkJRa0ZReHRBT1FBQkFBZ0FBUWhtQUFZRkJta0FBZ0FBQVFJQVZ3d0JDQUFMQkFnTFZ3QUVBQU1KQkFOWENnRUpCUVVKU3dvQkNRa0ZUd2NCQlFrRlExbEFGZ29LR0JjV0ZSTVNDaEVLRVJFUkVoRVJFUkVRRFJZckV5RVZNelVoRVRNMUl6Y1JJUmN6TlRNUkF5TVZKeUVSSVlBQ0FDRDl3T0RBNEFGRmdCdGdJR0J1L3M0Q0FBS2d3T0QrUUNDZy9rQ0FnQUhBL21CdGJRR0FBQUFBQVFDZy84QURkd0tBQUVrQU5rQXpFaEFDQUFNQlFBQUNBd0pvQUFNQUEyZ0FBUUFFQUFFRVpnQUFBUVFBVFFBQUFBUlJBQVFBQkVWQ1FDMHNLaWdrSWdVUUt5VXVBU01pRGdFSEJpTWlKaThCSmk4QkppOEJMZ012QVM0Q05UUStBamMySnlZdkFTWWpJZ2NHSXdjT0FnY09BUlFlQVJjZUFSY2VBUmNlQVRNeVBnSTNOaWNtQTBBYlp5VUdEQW9FTUFvRUNnc0NKUllFQVFJRUJnWU5FQXdCQ2dnSUFnWUpCeUVlRURFQ0hTWWNKQUVCQVE0WER3UUVCQWdVRUNOSU15dzZOalZoSkJZV0l5QVNOaXNHZ1JzN0FnUUNId2NLQWg4WUF3SURBd1lIRFJNTkFRc0tEQVFEQ0FzT0NTdy9JVHNESkJjQkFRa1dHQXdORmlJa014MUFZVFV1TUNjbUtnSUtHaFpCTndZQUFBQUFBZ0NBQUNBRGdBSWdBQXdBRHdBclFDZ1BDd29IQmdVQ0FRZ0FBUUZBQUFFQUFBRkxBQUVCQUU4Q0FRQUJBRU1BQUE0TkFBd0FEQU1PS3lVUkJSY0hKd2NuQnljM0pSRUJJUUVEZ1A3NmlBU2VZR0NlQklqKytnTHYvU0VCY0NBQjVNZWJCSXRKU1lzRW04ZitIQUlBL3VnQUFBQUJBSUQvNEFPQUFtQUFMUUJCUUQ0aURBb0RBZ0FtQVFZREZ3RUJCZ05BQlFRQ0FnQURBQUlEWmdBREJnQURCbVFBQUFBR0FRQUdXUUFCQVFzQlFpa25KU01oSUI0ZEhSd1dGQkFIRHlzQUlnNEJGUlFYSGdJWEpqVXhGaFVVQndZV0Z6TXlQd0kyUHdFekl6WTNNaGNWTXpJVkZqTXlQZ0UwSmdKbzBMRm5QUUVEQWdFQ0J5UUNDUWdHQXdRRFpRRUtDUUVCQ3dzTENnSUJQVnBvc0dabkFtQlRqbFJhVEFFRUJBRURBUXNNQW5JR0RBSUJBU3dCQXdRREFRTUJBUlJOaXFlT0FBQUFBQUlBWVArQUE2QUN3QUFGQUEwQWJVdXdDbEJZUUNrQUFRWURCZ0VEWmdBRUF3TUVYUUFBQUFJR0FBSlhCd0VHQVFNR1N3Y0JCZ1lEVHdVQkF3WURReHRBS0FBQkJnTUdBUU5tQUFRREJHa0FBQUFDQmdBQ1Z3Y0JCZ0VEQmtzSEFRWUdBMDhGQVFNR0EwTlpRQTRHQmdZTkJnMFJFUklSRVJBSUZDc0JJUkV6TlNFRkVTRVhNelV6RVFLZy9jRGdBV0Qrd0FGRmdCdGdBc0QrUU9BZy9rQ0FnQUhBQUFBQUFBY0FzLy9oQXlnQ1p3QTNBRVlBV0FCbUFIRUFqd0M3QVFCQUlaa0JDd2taRkJNREFBZDJBUVFBQlFFTUEwd3BBZ0lNQlVCK0FRVWxBUTBDUDB1d0MxQllRRlFBQ1FnTENBa0xaZ0FLQ3dFTENnRm1BQUFIQkFFQVhnOEJCQTBIQkExa0FBMERCdzBEWkFBTUF3SUREQUptRGdFQ0FtY0FDQUFMQ2dnTFdRQUJCUU1CVFFZQkJRQUhBQVVIV1FBQkFRTlJBQU1CQTBVYlFGVUFDUWdMQ0FrTFpnQUtDd0VMQ2dGbUFBQUhCQWNBQkdZUEFRUU5Cd1FOWkFBTkF3Y05BMlFBREFNQ0F3d0NaZzRCQWdKbkFBZ0FDd29JQzFrQUFRVURBVTBHQVFVQUJ3QUZCMWtBQVFFRFVRQURBUU5GV1VBbWMzSTVPTFcwc3JHa282Q2ZtSmVVa29TRGdIOTlmSEtQYzQ5QlB6aEdPVVllSFJFUUVBNHJBUzRDTmo4Qk5pY3VBUTRCRHdFT0FTSW1KelVtUGdJM05DNENCZ2NPQkJVT0FSMEJIZ1FYRmo0Q056WW5KZ01HTGdJMU5EWTNOaFlWRkFjR0p3NERGeFVVSGdFWEZqWTNQZ0V1QVFjR0pqVTBOamMySGdJVkZBWTNCaVluSmpZM05oWVhGamN5UGdFM05UWXVCQThCSWdZVkZETTJIZ01PQVJVVUZ4WW5MZ0VHSWc0QkJ5TVBBUVlWRkI0Qk16WTNOakllQXhjV0J3NENGUlFXTWpZM016NEJMZ01DaFFjSUFRRUJBUmdkQ2lBZ0hRa0tCUWdHQXdFQkFRRUNBUU1NRlNVWkdUTW5JQkFYRndRaUx6ODZJU2RYVDBJUEpFQVE2eVZGTWg1dFRVOXNRalZZSFNnUUNBRUJEZzB2VWhvTUFoSXpQZzhVRXc0SURna0dGUzhGQ3dJREFnVUdDd0lHOUFRSEJRRUNCeEFWRmhJRkJnY0tFUkFXRGdZREFRRU9BZ3NKRXhFT0R3WUZBUUVCRWdjTEJ3RVZBdzRWR1JrWkNSTUxBUUVERGhVTUFRRUpBUkFaSVNJQkxnRUdCZ1lDQWpJbERBa0hDZ1VGQWdJQkF3UURDQWNNQkE0WEdnNEJDd3NyTHl3YkFTaFBGQlFzUlNzZkRnTUVFaWRDS21NMERmN21BaFVuT1NGQlh3VUVURUZLTnl2N0JTQW5KZzBOQlE0Z0NCNFlLUlE4TnlLMEFoTVBFQnNDQVFVSkRRZ1FHVUVGQVFZRkVBUUZBUVlOdEFVSUJnSWVMUmtSQkFFQkFRd0pGZ1lIQ1JZUEZBY0NFd0lCL2dNREFRTUNBUUVCQmhnSkRna0JCZ0VDQ3hBZUV6Y3lBZ1lRQncwUENoQXFTamN1SHhRQUFBWUFRUCtrQThBQ213QU9BQmtBUEFCSEFFOEFjd0NKUUlaU0FRUUxabDRDRFFCZk9qRURCZzBEUURrMEFnWTlDZ0VIQ0FzSUJ3dG1FUUVMQkFnTEJHUVFBZzhEQUFFTkFRQU5aZzRCRFFZQkRRWmtBQVlHWndBTUNRRUlCd3dJV1FVQkJBRUJCRTBGQVFRRUFWRURBUUVFQVVWUlVCQVBBUUJ0YW1sb1ZsUlFjMUZ6VFV4SlNFTkJQajB3TGlJZkhoMFdGUThaRUJrR0JBQU9BUTRTRGlzbElpWTBOak15SGdNVkZBNEJJeUl1QVRVME5qSVdGQVlGTkM0Qkp5WXJBU0lPQmhVVUZ4NEJNekkzRnpBWEhnRStBVFVuUGdFQUlpWTBOak15SGdFVkZEWXlGaFFHSWlZMEZ6SVhMZ0VqSWc0REZSUVdGd2NVQmhRZUFUOEJIZ0V6TURzQ0xnRTFORDRCQXc0UUZ4Y1FCZ3dLQndRTEVkTUtFZ3NYSUJjWEFXcEVkVWNHQlFrZE5qSXNKaDRWQ3dnWGxXRkJPajRCQWdVRUF4SXNNdjFVSUJjWEVBc1NDcjBoRmhZaEZ0b0dDeEcwZHpWaFR6c2hQVFlZQVFVSkNsZ2NPeUFEQkFNRUJGQ0k0UmNoRndRSUNRd0hDaElMQ3hJS0VSY1hJUmM0UDJ0Q0JBRUtFaG9oSnlvd0dSMGRUMmdaS2dFQkFRRUhCa0lpWGdGRUZ5QVhDaElMRURjWElCY1hJRUVCWm9nY00wVlZMVUJ2SjFrQkJBb0RBd1E5Q2dvUEhROUhlRVlBQUFnQVFQOWhBOEVDNGdBSEFCQUFGQUFZQUIwQUpnQXZBRGNBWmtCak1DQVRBd0lFTmlFQ0FRSTNIUXdCQkFBQkxSd0NBd0FzSnhvWEJBVURCVUFBQVFJQUFnRUFaZ0FBQXdJQUEyUUlBUVFHQVFJQkJBSlhCd0VEQlFVRFN3Y0JBd01GVVFBRkF3VkZIeDRWRlJFUktpZ2VKaDhtRlJnVkdCRVVFUlFTRlFrUUt5VUJCaFVVRnlFbUFTRVdGd0UrQVRVMEp5WW5Cd0VXRno4QkVUWTNKd01pQnhFQkxnTURGak15TmpjUkJnY0JEZ1FIRndGZC92Y1VHQUVQQmdKSS92RUZCUUVKQ2dvMVJJSy8vbTVFZ0wvYmYwQy8wMHBHQVJNUUh5RWlsRUJESmtnaUJRWCtweGd1S1NRZkRMNmNBUWxBUkVwR0JnRWJCUWIrOXg5Q0lrdUlnRURBL2xwL1A3N0Uvb05FZ2I4QnlSais4UUVUQlFjRkEveVRGQXdNQVE0RkJBSXZEU0FtS2k4WnZnQUFBQUFGQUFYL1FnUDdBd0FBSVFBMEFFQUFVQUJnQU1GQURnZ0JBZ1VXQVFFQ0FrQVFBUUU5UzdBTFVGaEFLUW9CQUFBREJBQURXUTBJREFZRUJBa0hBZ1VDQkFWWkN3RUNBUUVDVFFzQkFnSUJVUUFCQWdGRkcwdXdGbEJZUUNJTkNBd0dCQVFKQndJRkFnUUZXUXNCQWdBQkFnRlZBQU1EQUZFS0FRQUFDZ05DRzBBcENnRUFBQU1FQUFOWkRRZ01CZ1FFQ1FjQ0JRSUVCVmtMQVFJQkFRSk5Dd0VDQWdGUkFBRUNBVVZaV1VBbVVsRkNRU01pQVFCYldWRmdVbUJLU0VGUVFsQThPelkxTFNzaU5DTTBHaGdBSVFFaERnNHJBU0lPQWhVVUZoY1dEZ1FQQVQ0RU54NEJNekkrQWpVMExnRURJaTRCTlRRK0F6TXlIZ0lWRkE0QkFpSUdGUlFlQVRJK0FUVTBKU0lPQWhVVUZqTXlQZ0kxTkNZaElnWVZGQjRETXpJK0FUUXVBUUlGWjcyS1VtbGJBUWdPRXhJUUJRVUlIVkJHVUJnYU54eG51b1pQaHVlS2RNRjBLMUJvZ2tSVm0yOUNjTDVQUFNvVUlTY2lGUDdPRHhvVERDb2VEeHNVRENzQnNSOHBCdzBTRmd3VUlSUVVJUU1BUkhTZ1dHV3lQQmN0SkNFWUVRVUVBUVlURmlRVUJRVkVkS0JZZGNoei9QUlRtMkU2YmxsREpUcGhoVWxobWxRQnB5Y2ZGU01WRlNNVkh5Y0tFaHNQSUMwTUZSd1FIeWNuSHcwWEV3NElGU01xSUJFQUFBRUFWLzl1QTZrQzBRRjVBYUpCalFGaUFJWUFkQUJ5QUhFQWJnQnRBR3dBYXdCcUFHa0FZQUFoQUJRQUV3QVNBQkVBRUFBTUFBc0FDZ0FGQUFRQUF3QUNBQUVBQUFBYkFBc0FBQUZIQVVZQlJRQURBQUlBQ3dGZ0FWMEJYQUZiQVZvQldRRllBVW9BcUFDbkFKMEFrQUNQQUk0QWpRQ01BQkFBRFFBQ0FKc0FtZ0NaQUpRQWt3Q1NBQVlBQVFBTkFTNEJMUUVxQUxVQXRBQ3pBQVlBQ1FBQkFTY0JKZ0VsQVNRQkl3RWlBU0VCSUFFZkFSNEJIUUVjQVJzQkdnRVpBUmdCRmdFVkFSUUJFd0VTQVJFQkVBRVBBUTRCRFFFTUFPMEF6QURMQU1rQXlBREhBTVlBeEFEREFNSUF3UURBQUw4QXZnQzlBTHdBS3dBRkFBa0JDZ0RvQU9jQTB3QUVBQU1BQlFBSEFFQUJSQUNIQUFJQUN3Q2NBSkVBQWdBTkFRc0FBUUFGQUFNQVAwQkZEQUVMQUFJQUN3Sm1BQUlOQUFJTlpBQU5BUUFOQVdRQUFRa0FBUWxrQ2dFSkJRQUpCV1FFQVFNRkJ3VURCMllJQVFjSFp3QUFDd1VBU3dBQUFBVlBCZ0VGQUFWRFFSNEJWd0ZVQVVNQlFnRkJBVDhCTEFFckFTa0JLQUQ5QVBvQStBRDNBT3dBNndEcUFPa0Eyd0RhQU5rQTJBQ21BS1VBbUFDVkFEa0FOd0FPQUE0ckV5OENOVDhGTlQ4SE5UOGlPd0VmTVJVSEZROERIUUVmRVJVUERTc0NMd3dqRHd3ZkRSVVhCeDBCQnhVUER5TUhJeThOSXljakp3OEpJdzhCS3dJdkZEVTNOVGM5QVQ4UE16OEJNelV2RVNzQk5TTVBBUlVQRFNzQ0x3ZzFQeGZSQWdFQkFnRURBZ1FGQVFFQ0FnSUNBZ01CQWdNRUFnTURCQVFFQlFZREF3Y0hCd2tKQ1FzSUNBa0tDUXNMQ3dzTUN3ME5HUTBuRFEwT0RBME5EUTBNREF3TEN3a0ZCQWtJQndjR0J3VUZCZ1FIQkFNREFnSUNCQU1DQVFJQkFnVURBZ1FEQWdJQ0FRRUJBUU1DQWdNTUNRUUdCUVlHQndRREF3TUNBd0lEQVFFQkFnUUJBZ0lDQXdJREFnUURBZ01EQkFJQ0F3SUVCQVFEQkFVRkFRRUNBZ0lFQlFjR0JnY0hBd1VLQVFFRkZna0pDUWdFQWdNREFRSUJBUUlDQkFNREF3WUdCd2dKQkFRS0Nnc0xEQXNsRGd3TkRRNE9EUTBPRFFjR0JBUUxEQWNJQlFjS0N3Y0dFQWdJREFnSUNBb25GaFlMQ3dvS0Nna0pDQWdHQndJREFnSUNBUUlCQVFFQkFnRURBZ0VFQXdRQ0JRTUZCUVVHQmdjSEFnRUJCQW9HQ0FjSUNRUUVCQU1GQXdRREF3SUJBUUVEQVFFQkJRSUVBd1VFQlFVR0JnVUhCd0VDQVFJQ0FnSUJBUUlCQVFFQ0FRTURBd01FQlFVRkJ3Y0hCZ2NJQkFVR0J3c0lBVXNGQndRT0JnWUhCd2dIQlFVSEJ3a0RCQVFDRXdvTERRNEhDUWNJQ2dnSkNRVUVDZ29KQ2drS0NnY0dCd1VGQlFVRUF3UURBZ0lFQVFJQkF3TURCQVFGQmdVSEJ3WUVBd2NJQndnSUNBa0lDUWdSQ1FnSkNBY0pEdzBNQ2hBQ0F3Z0ZCZ1lIQ0FnSUJBWUVCQVlGQ2dVR0FnRUZFUTBJQ2dvTERBNEpDQWtJQ1FnUEVBNFRCd3dMQ2dRRUJBUUNCQU1DQVFJREFRRURBZ1FHQmdVR0Nnc0JBZ01EQ3c4UkNRb0tDZ1VGQ2dFQkF3c0ZCUWNHQXdRRUJBUUVCQVFEQXdNREFnTUZCUU1DQlFNRUF3UUJBUU1DQWdJQ0FRRUNBUUlFQWdRRkJBSUNBZ0VCQVFVRUJRWURBd1lDQWdNQkFRSUNBZ0VDQXdJRUF3UUVCUUlEQWdNREF3WURBd01FQkFNSEJBVUVCUUlEQlFJQ0F3RUNBZ0lDQVFFQkFRRUNBZ2dGQndjS0NnWUdCd2NIQ0FrSkNBc0JBUUlDQWdNSUJRUUZCZ1FGQlFNRUFnSURBUVlFQkFVRkN3Y1dFQWdKQ1FnS0Nna0tDUXNKQ3drS0NBZ0lCQVVHQlFvR0FBQUFCQUJlQUNBRG9nSWdBQk1BS0FBc0FERUFOMEEwTVRBdkxpd3JLaWtJQWdNQlFBUUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllMQ0FBVEFoTUZEaXNCSVNJT0FSVVJGQll6SVRJMk5SRTBMZ01URkFZaklTSXVCVFVSTkRZekJUSVdGUmNWRnhFSEVTYzFOd0pmL2tZU0lSUXJIQUc2SENjSERCQVVGUk1PL2tZRUNBY0hCUVFDRmc4QnVnNFRYc1FpZ0lBQ0lCRWVFdjZJSENzcUhRRjRDeFFRREFiK1J3OFdBZ1FGQndjSUJBRjREUklCRVExcHEyc0JnRHorOTBPRVF3QUFBQVlBZ0FBQUE0QUNRQUFmQUVrQVVRQlpBRjBBWlFEZlM3QW9VRmhBVWdBUEN3NEhEMTRBRUE0U0RoQVNaZ0FCQ1FFSUF3RUlXUUFEQUFjRFN3UUNFd01BQ2dFSEN3QUhXUUFMQUE0UUN3NVpBQklBRVEwU0VWa0FEUUFNQmcwTVdRQUdCUVVHVFFBR0JnVlNBQVVHQlVZYlFGTUFEd3NPQ3c4T1pnQVFEaElPRUJKbUFBRUpBUWdEQVFoWkFBTUFCd05MQkFJVEF3QUtBUWNMQUFkWkFBc0FEaEFMRGxrQUVnQVJEUklSV1FBTkFBd0dEUXhaQUFZRkJRWk5BQVlHQlZJQUJRWUZSbGxBTEFFQVpXUmhZRjFjVzFwWFZsTlNUMDVMU2taRU9qZzNOaTh0SmlNYUZ4SVFEdzROREFnRkFCOEJIeFFPS3dFakppY3VBU3NCSWdZSEJnY2pOU01WSXlJR0ZSRVVGak1oTWpZMUVUUW1FeFFPQVNNaElpWTFFVFErQWpzQk56NEJOelkvQVRNd093RWVBaGNlQXg4Qk16SWVBUlVrSWdZVUZqSTJOQVlpSmpRMk1oWVVOek1WSXdRVUZqSTJOQ1lpQTBON0F3WXdKQkN4RUNNdUNBUWJSQnNiS0NrYUFvQWFJeU1EQnc0SS9ZQU5GZ1lKRFFlSUNRUVBBeVlORExFQkFRRURCUU1GRHhnU0NnbUtDUTBIL3VlT1pHU09aSEYwVVZGMFVUVWlJdjhBSlRZbEpUWUI0QU1ITlNFZk5BZ0ZJQ0FrR2Y2Z0d5Z29Hd0ZnR2lQK1l3b1BDaFlOQVdBR0N3Y0ZCZ1VUQkNvTUNBRUNBd01GRVJ3VUN3WUhEZ2dDWkk1a1pJN1NVWFJSVVhUZ0ltazJKU1UySlFBREFRRC9ZQU1BQXVBQUN3QVhBREVBVFVCS0RBc0NCUU1DQXdVQ1pnQUFBQU1GQUFOWkFBSUFBUVFDQVZrQUJBb0JCZ2NFQmxrSkFRY0lDQWRMQ1FFSEJ3aFBBQWdIQ0VNWUdCZ3hHREV1TFN3ckVSRVRFeWNWRnhVUURSY3JBQ0lHRlJFVUZqSTJOUkUwQXhRR0lpWTFFVFEyTWhZVkZ4VVVEZ0VqSWlZOUFTTVZGQllYRlNNVklUVWpOVDRCUFFFQ1FZSmRYWUpkSUVwb1NrcG9TbUE3Wmp0YWdpYUxaWklCUW9wamh3TGdZa1greTBWaVlrVUJOVVgraGpoUFR6Z0JOVGhQVHppWm56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFCQUQwLzJBRERBTGdBQklBSkFBc0FEa0FSa0JERmhRVERBb0dCZ01FQVVBWUNBSURQUUFBQUFFQ0FBRlpBQUlBQlFRQ0JWa0dBUVFEQXdSTkJnRUVCQU5SQUFNRUEwVXVMVFF6TFRrdU9Tb3BKaVVoSUJBSER5c0FJZ1lWRkI4Q0d3RTNOajhCUGdJMU5BY1ZCZzhCQ3dFbUp5NEJOVFEyTWhZVkZDWWlCaFFXTWpZMEJ5SW1OVFErQVRJZUFSUU9BUUp2M3AwVEFRUDE5UUVCQVFFR0NRUXlBUUVDMXRnQkFRZ0tpc1NLdDJwTFMycExnQ2MzR1N3eUxCa1pMQUxnbTI0ek1nTUcvZmNDQ1FJREFRTVFJU0lSYjhnQkFRTUUvamtCeXdNQkZpNFhZWWlJWVM2M1MycExTMnFUTnljWkxCa1pMRElzR1FBQ0FRRC9ZQU1BQXVBQUN3QWxBRUZBUGdvSkFnTUJBQUVEQUdZQUFRQUFBZ0VBV1FBQ0NBRUVCUUlFV1FjQkJRWUdCVXNIQVFVRkJrOEFCZ1VHUXd3TURDVU1KUkVSRVJFVEV5a1ZFQXNYS3lReU5qVVJOQ1lpQmhVUkZDVVZGQTRCSXlJbVBRRWpGUlFXRnhVakZTRTFJelUrQVQwQkFiK0NYVjJDWFFGOE8yWTdXb0ltaTJXU0FVS0tZNGRkWWtVQk5VVmlZa1greTBYaG56eGtPNEJibjU5bGt3ZCtKQ1IrQjVObG53QUFBQUlBOVA5Z0F3d0M0QUFTQUI4QUswQW9EQW9JQmdRQlBRTUJBUUlCYVFBQUFnSUFUUUFBQUFKUkFBSUFBa1VVRXhvWkV4OFVIeEFFRHlzQUlnWVZGQjhDR3dFM05qOEJQZ0kxTkFVaUpqVTBQZ0V5SGdFVURnRUNiOTZkRXdFRDlmVUJBUUVCQmdrRS92UW5OeGtzTWl3WkdTd0M0SnR1TXpJREJ2MzNBZ2tDQXdFREVDRWlFVy9ETnljWkxCa1pMRElzR1FBRkFRRC9ZQU13QXVBQUF3QUtBQlVBSFFBMUFGOUFYQWNCQWdFY0d4UUdCQUFDSVFFRUFDQUJBd1FFUUFVQkFnRUFBUUlBWmdBQkNnRUFCQUVBV1FBRUJnRURCd1FEV1FrQkJ3Z0lCMHNKQVFjSENFOEFDQWNJUXdVRU5UUXpNakV3THk0cktpUWlIeDRZRnhBT0JBb0ZDZ3NPS3dFM0FRY2xNamNERlJRV054RTBKaU1pRGdFSEFUWTNOU01WRkFjWE5nYzJOeWNHSXlJdUF6MEJJeFVVRmhjVkl4VWhOU01CRVJ3Q0F4eis3Q1VnNDEzZlhFSVpMeVlQQVJJSllpSWlGRERxTWkwVExUTWpRellwRnlhTFpaSUJRb29DMEJEOGtCRDlFUUdCNjBWaXB3RTFSV0lRSFJQK0xSb2FuNTlBTlNKRHF3TVhJQllXS1RWREk2Q2ZaWk1IZmlRa0FBQURBRUQvb0FQQUFxQUFCd0FYQURvQWtFQUxNUUVCQnpvd0FnTUZBa0JMc0JoUVdFQXdBQVlCQUFFR0FHWUFCQUFGQlFSZUNBRUNBQWNCQWdkWkFBRUFBQVFCQUZrQUJRTURCVTBBQlFVRFVnQURCUU5HRzBBeEFBWUJBQUVHQUdZQUJBQUZBQVFGWmdnQkFnQUhBUUlIV1FBQkFBQUVBUUJaQUFVREF3Vk5BQVVGQTFJQUF3VURSbGxBRkFvSU5qTXVMQ1VqR3hrU0R3Z1hDaGNURUFrUUt3QXlOalFtSWdZVUFTRWlCaFVSRkJZeklUSTJOUkUwSmdNbUl5SUdEd0VPQkNNaUp5NENMd0VtSXlJSEF4RStBVE1oTWg0QkZSTUN1RkE0T0ZBNEFRajg4QmNoSVJjREVCY2hJZVVMRHdjTEJ5WUNCQVVFQlFNTkNRRURBd0ZzRFJRVUR2MENEZ29DekFZTUJ3RUJZRGhRT0RoUUFRZ2hHUDF5R0NFaEdBS09HQ0grZFF3R0JTQUNBZ01CQVFnQkFnUUJkQThQL3M4Q0NRb05CZ3NIL2ZjQUFBQUlBRmIvUFFPM0Fza0FLUUEyQUZVQVl3QnhBSUFBa1FDZEFMSkFyM0lCQnd4TkFRWUhjQUVMQ1RnM0lCTUVBZ1ZNUlVRWkJBQUNLZ0VCQUFaQVZWUk9Bd1FNUGdBR0J3a0hCZ2xtQUFVT0FnNEZBbVlBQWdBT0FnQmtBQUFCRGdBQlpBQUJBV2NBREFBTEJBd0xXUUFKQUFvRENRcFpBQVFBQXcwRUExa1NBUTBBRUFnTkVGa1JBUWNBQ0E4SENGa0FEdzRPRDAwQUR3OE9VUUFPRHc1RmdvRlhWcGlXazVLS2lJR1JncEYvZm5kMmJXeGxaRjFjVm1OWFkxRlFTVWhBUGpJd0l5SWRIQmNWRXc0ckFTY1BBU2NtRHdFT0FSVVJGQjRETmo4QkZ4WXpNajhCRmhjV01qYzJOeGNXTWpZM05qVVJOQUV1QVRVMFBnRXpNaFlWRkFZM0p6NEJOVFF1QVNNaUJoVVVGd2NuTGdFakJnOEJFVGNYRmpJMlB3RVhCU0lHRlJFVUZqSTJOUkUwTGdFWElnNENIUUVVRmpJMlBRRW1OeFVVSGdFeVBnRTlBVFF1QVNNR0F5SU9BaFVVRmpNeVBnSTFOQzRCQmlJbU5EWXpNaDRDRlJRRHFiY0wyOGtIQjlNR0JnSUVCQVlHQTgzS0F3UUVBeDR2UXdVVUJXUXNUZ01HQlFJSC92dzJYQ2RES0QxV1hha3pCZ1V4VkRKTWF5WVd5UUlEQWdRRHVzSEtBZ1VGQXR5aS9hb0lDd3NQQ3dVSXpBUUhCUU1MRHdzRHhBVUlDZ2tGQlFrRkR6QU9HUklMS0J3T0dSTUxFeDhHR2hNVERRY0xDUVVDbnlvQlpGUURBMUlDQ1FiOXZBTUdCUU1DQVFGUVZRRUNEVjVtQ0FpWGJoSUJBZ0lHQ0FKRkR2elZWYlVxSjBRblZqd3F0Wm9NRVJ3TU1WVXhiRXNwVWdwVUFRRUJBVWdDSEV4VkFRRUJaQ1UxQ3dmK2tBZ0xDd2dCY0FVSUJVY0RCUWNEalFjTEN3ZU5EMUs2QlFrRUJBa0Z1Z1VJQlFQK25Rc1NHUTRjS0FvVEdRNFNJQkprRXhvVEJRa01CZzBBQUFBQUF3Q2cvK0FEZ0FLZ0FBa0FFZ0FqQUVGQVBoNFNFUTBNQlFJR0Rna0lBd1FCQWtBQUJRWUZhQUFHQWdab0FBUUJBQUVFQUdZQUFnQUJCQUlCVndBQUFBTlBBQU1EQ3dOQ0VpY1lFUkVSRUFjVkt5a0JFU0UzSVJFaEVRY0ZKd0VuQVJVekFTYzNKeTRDSXlJUEFUTWZBVGMrQVRVMEF1RDk0QUdnSVA0Z0FtQWcvdnNUQVZZVy9waEFBV2tYUmhrQ0J3Y0VDd2daQVJZcUdBUUVBZ0FnL2NBQndDQ1lFd0ZYRi82WVFRRm9GMEFaQXdNQ0NCZ1hLaGtFQ2dVTUFBQUFCZ0RnLzZBRElBS2dBQ0FBTHdCQ0FFWUFTZ0JPQUxoQUMwQTVPREFlRUFZSUN3RkFTN0FVVUZoQVFRQUtBd3dEQ2w0T0FRd05Bd3dOWkE4QkRRc0REUXRrQUFzSUNBdGNBQUVBQmdBQkJsa0hBZ0lBQ1FVQ0F3b0FBMWNBQ0FRRUNFMEFDQWdFVWdBRUNBUkdHMEJEQUFvRERBTUtER1lPQVF3TkF3d05aQThCRFFzRERRdGtBQXNJQXdzSVpBQUJBQVlBQVFaWkJ3SUNBQWtGQWdNS0FBTlhBQWdFQkFoTkFBZ0lCRklBQkFnRVJsbEFHVTVOVEV0S1NVaEhSa1ZFUTBKQk5CWTFHak1SRlRNUUVCY3JBU00xTkNZckFTSU9BaDBCSXhVekV4UVdNeUV5UGdjMUV6TWxORDRDT3dFeUhnTWRBU01CRlJRR0l5RWlKaThCTGdROUFRTWhCek1SSXhNakF6TURJeE16QXlDZ0lobUxDeFlRQ2FBcUx5TVlBUm9GQ3drSkNBWUZCQUl1S2Y1OUJRZ0xCWXNGQ1FjR0E4WUJEaEVNL3VZREJnTUVBd1FEQWdFd0FiUG9IQnlPSFJZZXpoMFZIZ0k5S0JraUNSQVdEQ2dkL2JzWklnSURCZ1lJQ0FvS0JnSkZSUVlMQ0FVREJnY0pCU2o5bndFTkVRRUNBZ0lFQlFVR0F3RUNSRUQrSGdIaS9oNEI0djRlQUFBQUFBSUF3UCtnQTBBQzRBQUxBQlFBUDBBOEZCRVFEdzROREFjRFBnQUdBQUVBQmdGbUJ3VUNBd0lCQUFZREFGY0FBUVFFQVVzQUFRRUVVQUFFQVFSRUFBQVRFZ0FMQUFzUkVSRVJFUWdUS3dFVk14RWhFVE0xSVJFaEVTVW5OeGNISnhFakVRSkE0UDNBNFA4QUFvRCtRaGVWbFJkdUlBSUFJUDNnQWlBZy9hQUNZRFFYbFpVWGJmNGFBZVlBQWdEQS82QURRQUtnQUFzQUZBQStRRHNVRVJBUERnME1Cd0VBQVVBQUJnTUdhQWNGQWdNQ0FRQUJBd0JYQUFFRUJBRkxBQUVCQkZBQUJBRUVSQUFBRXhJQUN3QUxFUkVSRVJFSUV5c0JGVE1SSVJFek5TRVJJUkVGQnhjM0p3Y1JJeEVDUU9EOXdPRC9BQUtBL2tJWGxaVVhiaUFDQUNEOTRBSWdJUDJnQW1EWkY1V1ZGMjBCNXY0YUFBQURBRkgvY1FPdkFzQUFEZ0FkQUNrQUowQWtLU2duSmlVa0l5SWhJQjhlREFFOUFBQUJBUUJOQUFBQUFWRUFBUUFCUlJrWUVnSVBLd0V1QVNJR0J3NEJIZ0krQWlZRERnRXVBalkzUGdFeUZoY1dFQU1ISndjWEJ4YzNGemNuTndNbVBKdWVtenhRT1RtZzF0YWdPVGxvU2NYRmtqUTBTVGVQa0k4M2I5V29xQmlvcUJpb3FCaXBxUUpHUEQ0K1BGRFcxcUE1T2FEVzF2NGNTVFEwa3NYRlNUWTVPVFp3L3NRQlhxaW5GNmlvRjZlb0dLaW9BQUFBQWdCK0FBQURnQUpnQUJNQUlnQkJRRDRXQ2dJREJCc1hFaEFKQlFBQkFrQVZDd0lDUGdBQUFRQnBBQUlGQVFRREFnUlpBQU1CQVFOTkFBTURBVkVBQVFNQlJSUVVGQ0lVSWhzVUZoQUdFaXM3QVRjMk56NENOeFVKQVJVR0J3WVhNQlV3QVRVTkFUVWlCZ2NtUGdXQUZTWktUaHdyUUNZQmdQNkF0MmhqQWdHZ0FTaisySXl2UlFFQkRCZzRUNE0rZHlNTUR3d0JvQUVBQVFDaENHaGtwUVlCWUlIQndvSmNkd2NaUmtCT09DY0FBQUFBQWdDQUFBQURnQUpnQUI4QUtnQTZRRGNsREFJREJDUWdEUUFFQWdFQ1FDWUxBZ0ErQUFJQkFta0FBQUFFQXdBRVdRQURBUUVEVFFBREF3RlJBQUVEQVVVVUhCWVVHUVVUS3lVd05UUXVBaWN1QVNjMUNRRTFIZ0VYSGdFZkFUTXdQUWNuTGdFakZTMEJGU0FYRmdPQUF4QXNJeldMWHY2QUFZQTNUQ29yU2lNbUZTQkZyNHorMkFFb0FRUlpJMEFHR2lwUlVTTTFOd1NoL3dEL0FLQUNFeE1VVGpnK0J3Y0lCd2NJQmdnVGQxeUN3c0dCdEVrQUFBTUFZUCtBQTZBQ3dBQVZBQjBBTGdCZFFGb05BUUlJQ3dFRUFRSkFEQUVCQVQ4SkFRUUJBQUVFQUdZQUJRQUlBZ1VJV1FBQ0FBRUVBZ0ZaQUFBQUF3Y0FBMWtLQVFjR0JnZE5DZ0VIQndaUkFBWUhCa1VmSGdBQUp5WWVMaDh1R3hvWEZnQVZBQlVURkJVaUN4SXJBUlFHSXlJdUFUUStBVE1WTnljVklnWVVGakkyTlFJZ0JoQVdJRFlRQVNJdUFUVTBQZ0l5SGdJVURnSUMySDVhTzJNNk9tTTd3TUJxbHBiVWxsVCtxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQVNCYWZqcGpkbU02YjIrQVdKYlVscFZyQWFEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFBQUFJQVFQK0FBOEFDd0FBSkFCTUFMa0FyRUFJQ0FENFREUXdMQ2drSUJ3WUZDZ0k5QVFFQUFnSUFTd0VCQUFBQ1R3TUJBZ0FDUXhJYUVoQUVFaXNCSVFzQklRVURKUVVERnljSE55Y2hOeGNoQndQQS9xbHBhZjZwQVJodEFSVUJGVzR1MWRWVjJBRUdVbElCQnRnQmdnRSsvc0xFL3NMRnhRRSs2SmlZOVpYMzk1VUFBQU1BWVArQUE2QUN3QUFIQUJvQUpnQkhRRVFBQUFBREJBQURXUWtCQlFnQkJnY0ZCbGNBQkFBSEFnUUhWd29CQWdFQkFrMEtBUUlDQVZFQUFRSUJSUWtJSmlVa0l5SWhJQjhlSFJ3YkVBNElHZ2thRXhBTEVDc0FJQVlRRmlBMkVBRWlMZ0UwUGdFek1oNEVGUlFPQWdNakZTTVZNeFV6TlRNMUl3S3MvcWowOUFGWTlQNWdaN0JtWnJCbk5HTlRSekViUEdhT1BTSHY3eUh3OEFMQTlQNm85UFFCV1AzWFpyRE9zR1liTVVkVFl6Uk5qbVk4QW4zd0llL3ZJUUFBQUFNQVlQK0FBNkFDd0FBSEFCZ0FIQUE4UURrQUJBTUZBd1FGWmdBRkFnTUZBbVFBQUFBREJBQURXUVlCQWdFQkFrMEdBUUlDQVZJQUFRSUJSZ2tJSEJzYUdSRVFDQmdKR0JNUUJ4QXJBQ0FHRUJZZ05oQUJJaTRCTlRRK0FqSWVBaFFPQWdFaEZTRUNyUDZvOVBRQldQVCtZR2V3Wmp4bWpwcU9aanc4Wm83K3N3SUEvZ0FDd1BUK3FQVDBBVmo5MTJhd1owMk9aanc4Wm82YWptWThBWTBpQUFBQUFnQmcvNEFEb0FMQUFBY0FHQUFwUUNZQUFBQURBZ0FEV1FRQkFnRUJBazBFQVFJQ0FWRUFBUUlCUlFrSUVSQUlHQWtZRXhBRkVDc0FJQVlRRmlBMkVBRWlMZ0UxTkQ0Q01oNENGQTRDQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9Bc0QwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUNBRDcvWGdQQ0F1SUFFUUFyQUNwQUp3UUJBQUFEQWdBRFdRQUNBUUVDVFFBQ0FnRlJBQUVDQVVVQ0FDWWpHUllNQ1FBUkFoRUZEaXNCSVNJT0FoVVJGQll6SVRJMk5SRTBKaE1VRGdJaklTSXVCVFVSTkRZeklUSWVBeFVEVy8xS0ZTWWNFRHdyQXJZclBEd1BDQTRUQ3YwOEJnc0tDUWNGQXg0VkFzUUlFQXdLQlFMaUVCd21GZjFLS3p3OEt3SzJLeno4M0FvVERnZ0RCUWNKQ2dzR0FzUVZIZ1VLREJBSUFBQUFBZ0JSLzNFRHJ3TEFBQTRBR2dBWlFCWWFHUmdYRmhVVUV4SVJFQThNQUQwQUFBQmZFZ0VQS3dFdUFTSUdCdzRCSGdJK0FpWURCeWNISnpjbk54YzNGd2NESmp5Ym5wczhVRGs1b05iV29EazV0aGlvcUJpb3FCaW9xQmlwQWtZOFBqNDhVTmJXb0RrNW9OYlcvb0lZcUtjWHFLZ1hwNmdZcUFBQUFBSUFZUCtBQTZBQ3dBQUhBQndBUTBCQURnRURBQkFCQmdRQ1FBOEJCQUUvQUFZRUJRUUdCV1lBQUFBREJBQURXUUFFQUFVQ0JBVlpBQUlCQVFKTkFBSUNBVkVBQVFJQlJSSVZGQk1URXhBSEZTc0FJQVlRRmlBMkVBQWlKalEyTXpVWEJ6VWlEZ0VWRkJZeU5qVXpGQUtzL3FqMDlBRlk5UDdLMUphV2FzREFPMk02ZjdOK0tBTEE5UDZvOVBRQldQNVVsdFNXV0lCdmJ6cGpPMWwvZmxwcUFBQUFBUUJBLzRBRHdBTEFBQWtBR0VBVkFnRUFQZ2tJQndZRkJRQTlBUUVBQUY4U0VBSVFLd0VoQ3dFaEJRTWxCUU1Ed1A2cGFXbitxUUVZYlFFVkFSVnVBWUlCUHY3Q3hQN0N4Y1VCUGdBQUFBQUNBR0QvZ0FPZ0FzQUFCd0FUQURaQU13Y0JCUVlDQmdVQ1pnUUJBZ01HQWdOa0FBQUFCZ1VBQmxjQUF3RUJBMHNBQXdNQlVnQUJBd0ZHRVJFUkVSRVRFeEFJRmlzQUlBWVFGaUEyRUFjakZTTTFJelV6TlRNVk13S3MvcWowOUFGWTlLRHdJdTd1SXZBQ3dQVCtxUFQwQVZpKzd1NGk4UEFBQUFBQUFnQmcvNEFEb0FMQUFBY0FDd0FoUUI0QUFBQURBZ0FEVndBQ0FRRUNTd0FDQWdGUkFBRUNBVVVSRXhNUUJCSXJBQ0FHRUJZZ05oQUhJVFVoQXF6K3FQVDBBVmowb1A0QUFnQUN3UFQrcVBUMEFWaStJZ0FBQUFNQU5QOVRBODBDN0FBSEFCZ0FLZ0E1UURZQUFRUUFCQUVBWmdBQUJRUUFCV1FBQXdZQkJBRURCRmtBQlFJQ0JVMEFCUVVDVWdBQ0JRSkdHaGtqSVJrcUdpb1hGUk1TQnhJckFCUVdNalkwSmlJRkZBNENJaTRDTkQ0Q01oNENBU0lPQWhVVUhnRXpNajRDTlRRdUFRRXVmSzU3ZTY0Q0kwaDhxcnlyZTBsSmU2dThxbnhJL2pSUmxHdEFhN2h0VVpSclAydTRBWGV2ZTN1dmU5TmRxM3RKU1h1cnU2dDdTVWw3cXdFeVFHcVVVbXk0YXo5cmxGRnR1R3NBQWdCZy80QURvQUxBQUFjQUVnQW5RQ1FTRVJBUERnVUNBQUZBQUFBQ0FHZ0FBZ0VCQWswQUFnSUJVZ0FCQWdGR0pCTVFBeEVyQUNBR0VCWWdOaEFCQmlNaUppOEJOeGMzRndLcy9xajA5QUZZOVA0Z0NRa0VDZ1J3SkY3Nkl3TEE5UDZvOVBRQldQN0JDUVVFY0NOZSt5UUFBQUFDQUQ3L1hnUENBdUlBRkFBY0FDcEFKeHdiR2hrWUZnWUJBQUZBQWdFQUFRRUFUUUlCQUFBQlVRQUJBQUZGQWdBS0J3QVVBaFFERGlzQklTSUdGUkVVRmpNaE1qWTFFVFF1QlFFbkJ5YzNGd0VYQTF2OVNpczhQQ3NDdGlzOEJRc09FaFFYL2tRRkJjb2dyd0ZqSUFMaVBDdjlTaXM4UENzQ3Rnd1hGUkVPQ3dYOWJ3VUZ5aUN2QVdNZ0FBRUJRQUJnQXNBQjRBQUxBQWF6Q0FBQkppc0JCeWNIRndjWE54YzNKemNDcUtpb0dLaW9HS2lvR0ttcEFlQ3BxQmVvcUJlbnFCZXBxQUFBQUFFQkFBQWdBd0FDZUFBVUFEbEFOZ2dCQkFJQlFBY0JBZ0UvQmdFQlBnQUVBZ01DQkFObUFBRUFBZ1FCQWxrQUF3QUFBMDBBQXdNQVVRQUFBd0JGRWhVVUV4QUZFeXNrSWlZME5qTTFGd2MxSWc0QkZSUVdNalkxTXhRQ2F0U1dsbXJBd0R0ak9uK3pmaWdnbHRTV1dJQnZienBqTzFsL2ZscHFBQUFCQUlEL29BUUFBcUFBSmdBNFFEVWJHZ29KQ0FjR0JRUUpBZ0VCUUFRQkFBQUJBZ0FCV1FBQ0F3TUNUUUFDQWdOUkFBTUNBMFVCQUI4ZEZ4VVFEZ0FtQVNZRkRpc0JNaDRCRlRjWEJ5YzNGelF1QWlNaURnRVVIZ0V6TWo0Qk54Y09BU01pTGdFMU5ENENBZ0Jvc1dkdUVvMkZFbVk1WUlSSllhVmdZS1ZoVFl0akdCa255SDFvc1djOVo0NENvR2F4YUdrU2lJZ1NhVW1FWURoZ3BjS2xZRDV1UndkMGttZXhhRTZPWnowQUFBSUFRUCtBQThBQ3dBQUpBQThBS2tBbkNnY0NBRDRQRGcwRUF3SUJBQWdDUFFFQkFBSUNBRXNCQVFBQUFrOEFBZ0FDUXhJU0ZRTVJLeVVESlFVREpTRUxBU0VsRnlFSEZ5Y0JXRzBCRlFFVmJRRVkvcWxwYWY2cEFjQlNBUWJZVmRXKy9zTEZ4UUUreEFFKy9zTFU5cFgxbHdBQUFnQUEveUFFQUFNZ0FCUUFLd0E4UURrQUJRRUNBUVVDWmdBQ0JBRUNCR1FBQkFjQkF3UURWUUFCQVFCUkJnRUFBQW9CUWhZVkFRQW1KU0VmRlNzV0t3OE9DZ2dBRkFFVUNBNHJBU0lPQWdjK0FqTXlFaFVVRmpJMk5UUXVBUU15UGdNM0RnTWpJZ0kxTkNZaUJoVVVIZ0VDQUdlN2lWSURBM0MrYjZ6ME9GQTRpZXlMVXB0OFh6WUNBa1J2bUZPczlEaFFPSW5zQXlCUGhybG1kOGwwL3ZxNktEZzRLSXZzaWZ3QU1sMTZtVkpab25SRkFRYTZLRGc0S0l2c2lRQUFEQUFsLzBRRDJ3TDZBQThBSFFBdUFEd0FUZ0JmQUhBQWdBQ1ZBS2NBdEFEREFHMUFhcFdCY0FNQkFFNDlBZ1lCTGg0Q0JRYTFBUWtLbGdFQ0NRVkFBQW9GQ1FVS0NXWUFDUUlGQ1FKa0N3RUFBQUVHQUFGWkNBRUdCd0VGQ2dZRldRUUJBZ01EQWswRUFRSUNBMUVBQXdJRFJRRUF1TGVZbHpzNE5ERXJLQ01nSFJ3WEZoRVFDZ2tBRHdFUERBNHJBVEllQXgwQkZBWWlKajBCTkRZVE1oWWRBUlFHSWlZOUFUUTJNd0VVQmlzQklpNEJOVFEyT3dFeUhnRVZJUlFHS3dFaUpqVTBOanNCTWhZbEZoUUdEd0VHSmljbU5qOEJQZ0VlQVJjQkZnWVBBUTRCTGdFbkpqWS9BVFlXRndFZUFROEJEZ0VuTGdFL0FUNENGaGNCSGdFUEFRNEJKeTRCTmo4QlBnRVhBejRCSGdFZkFSWUdCd1ltTHdFdUFUNEROd0UyTWhZZkFSWUdCdzRCTGdFdkFTWTJOd0UrQVI4QkhnRU9BUzhCTGdFQlBnRXlId0VlQVE0Qkx3RXVBVGNDQUFVSkJ3WURFaGdTRWd3TUVoSVlFaElNQWRzU0RINElEZ2dTREg0SURnajlCQklNZmd3U0VneCtEQklDdkFRSUIyMEtHQWNHQndwdEJnd0tDZ1A5YWdZR0MyMEZEQXNKQXdjSEMyd0xHQVlCNkFzR0JqOEdHQW9MQndjL0F3a0xEQVgrZ2dzR0JqOEdHQXNIQ0FFRFB3Y1lDbDBHREFzSkF6OEdCZ3NLR0FjL0FnSUJBZ01HQXdGL0J3OE9CRDhHQmdzRkRBc0pBejhIQnd2OTFBWVlDbTBMQmd3WUMyd0xCd0tjQlE0UEIyMExCZ3dZQzIwS0J3WUMrZ01GQ0FrRmZRMFJFUTE5RFJIOUJCRU5mZ3dTRWd4K0RSRUJJUXdSQ0EwSURSRUlEUWtNRVJFTURSRVI0UWdQRGdRL0JnWUxDeGdHUHdNQkF3Y0Yvb0lMR0FZL0F3RURCd1VMR0FZL0JnY0tBaXdHR0F0dEN3WUdCaGdMYlFVSEF3RUQvV29HR0F0dEN3WUdCQTRRQjIwTEJnWUNsZ01CQXdjRmJRc1lCZ1lHQzIwRENBZ0hCd1lDL1dvRUNBZHRDeGdHQXdFREJ3VnRDeGdHQWVnTEJnWS9CaGdXQmdZL0JoaitqUWNJQkQ4R0dCWUdCajhHR0FzQUFnQ0IvNkFEZ1FLZ0FBOEFJQUF0UUNvT0FRSURBZ0ZBRHdBQ0FUMEFBQUFDQXdBQ1dRQURBUUVEVFFBREF3RlJBQUVEQVVVb0dDTW1CQklyQlNjMk5UUXVBU01pQmhRV016STNGd0V1QVRVME5qSVdGUlFPQkNNaUE0SGpRMUtNVW42eXNuNXJWT0w5bmlZcG4rR2dFeU0wUFVVa2NUSGlWR3RTalZHeS9MTkU0d0VQSm1RMmNhQ2ZjU1ZGUFRRakV3QUFBQUVCQUFBZ0F3QUNJQUFMQUNWQUlnQUVBd0VFU3dVQkF3SUJBQUVEQUZjQUJBUUJUd0FCQkFGREVSRVJFUkVRQmhRckFTTVZJelVqTlRNMU14VXpBd0R3SXU3dUl2QUJEdTd1SXZEd0FBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0UzQ1FFbkFRRkFRUUUvL3NGQkFQOENIMEgrd1A3QVFRRC9BQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFbkNRRTNBd0xBUWY3QkFUOUIvd0lmUWY3QS9zQkJBUDhBQUFBQUFRRXNBSVFDeXdHOUFBb0FFa0FQQ2drSUJ3WUZBRDRBQUFCZklRRVBLeVVHSXlJbUx3RTNGemNYQWNBSkNRUUtCSEFrWHZvampRa0ZCSEFqWHZza0FBUUFnUCtnQTRBQ29BQUlBQkVBR3dBZkFFeEFTUjBjR3hvWUZ4WVRFUkFQQ0FFTkJBY0JRQUFCQndFL0dSSUNCajRBQmdBSEJBWUhWd0FFQUFFREJBRlhCUUVEQUFBRFN3VUJBd01BVHdJQkFBTUFReGtXRVJFU0VSRVNDQllyQ1FFUk14RXpFVE1SQXlNUklSRWpFU1VGQVFjMUl4VUhGUWtCTlNVSE5UTUNBUDdBNE1EZ0lLRC9BS0FCSUFFZy91REFnRUFCZ0FHQS9hQkFRQUpBL3dEK1lBRUEvd0FCb1A2QUFRRC9BQUZ4NXVZQmI1cGF3RE1wQVRQK3pTbUFNNFlBQUFBREFHRC9nQU9nQXNBQUdRQWhBQ1VBUGtBN0lnRUVBQ1VCQVFRQ1FBQUVBQUVBQkFGbUFBSUZBUUFFQWdCWkFBRURBd0ZOQUFFQkExRUFBd0VEUlFFQUpDTWZIaHNhRUE0QUdRRVpCZzRyQVRJZUFSY2VBUlFHQnc0RUl5SXVBU2N1QVRRK0F5QUdFQllnTmhBbkJTRVJBZ0F6WVZja05qbzZOaFl4TlRrN0h6TmhWeVEyT2pwdGkvbitxUFQwQVZqMDRQNUJBUDhDbnhveUpEZUxtb3MzRlNRYkV3a2FNaVEzaTVxTWJEb2g5UDZvOVBRQldCVEEvd0FBQUFRQWdQK2dBNEFDb0FBU0FCNEFwZ0UzQVc1THNDWlFXRUJoQUFjQUhRVUhIVmtKQVFVZkd3SWFCZ1VhV1FnQkJoNEJIQUFHSEZraEFRQUFBd1FBQTFrS0lnSUVJQUVaRWdRWldSZ0JFaEVCQ3dJU0Mxa0FBZ0FCRkFJQldSWUJGQThCRFJNVURWa0FGUUFPRlE1VkZ3RVRFd3hSRUFFTURBc01RaHRBWndBSEFCMEZCeDFaQ1FFRkh4c0NHZ1lGR2xrSUFRWWVBUndBQmh4WklRRUFBQU1FQUFOWkNpSUNCQ0FCR1JJRUdWa1lBUklSQVFzQ0VndFpBQUlBQVJRQ0FWa1dBUlFQQVEwVEZBMVpGd0VURUFFTUZSTU1XUUFWRGc0VlRRQVZGUTVSQUE0VkRrVlpRVXdBSVFBZkFBRUFBQUUyQVRNQkl3RWlBUjRCSEFFUUFRMEJCZ0VFQVA4QS9RRDhBUHNBN3dEc0FPY0E1QURaQU5jQTB3RFJBTXNBeUFEQkFMOEF2QUM2QUt3QXFRQ2ZBSndBa2dDUkFJNEFqQUNIQUlRQWZ3QjlBSGtBZHdCcUFHY0FXZ0JYQUV3QVNnQkdBRVFBUEFBNUFEUUFNZ0F0QUNzQUh3Q21BQ0VBcGdBYUFCa0FGQUFUQUEwQURBQUFBQklBQVFBU0FDTUFEaXNCSWc0Q0J3WVZGQjRCRnhZeU5qVTBKeVlDSWlZMU5ENEJNaDRCRlJRM0l5SW1OVFEvQVRZMEx3RW1JeUlQQVE0Q0l5SW1QUUUwSmlzQklnWWRBUlFPQXlNaUppOEJKaU1pRHdFR0ZCOEJGaFVVRGdFckFTSU9BZzhCRGdNZEFSUVdPd0V5SGdFVkZBNEJEd0VHRkI4QkZqTXlQd0UrQVRNeUZoMEJGQlk3QVRJMlBRRTBOak15SHdFV01qOEJOalF2QVNZMU5EWTdBVEkyUFFJMExnRVhGUlFyQVNJSERnSVZGQjRCSHdFV0R3RUdJeUl2QVNZaklnWWRBUlFPQWlzQklpWTlBVFFuSmlNaUJnOEJCaU1pTHdFbU5EOEJOalUwSnlZckFTSW1QUUUwTmpzQk1qYzJOVFFtTHdFbU5EOEJOak13TXpJZUFSOEJGak15UGdFM05qMEJORHNCTWg0QkhRRVVId0VlQkRNeVB3RStBVElXSHdFZUFSVVVEd0VHRlJRZUFSY1dPd0V5RlFJQ0ZDVWlJQTA0RFJrU09KOXhPVGdOaFYwcVNsZEtLNjhlRXhzUEZBNE9MUTRWRlE0VEJBc05CaE1kSEJROEZSMEZDQXdPQ0FrUkJ4TU9GUlVPTFE0T0V3OE1GUXdmQkFrSUNBTUdBd1FEQWg0VUh3d1ZEQU1IQlJNT0RpME5GaFFQRXdZUkNoTWNIUlE5RkI0YkV4UU9FdzRxRGkwT0RoUVBHeE1lRkJzTUZnSVBIaUFYQndvR0Jnc0lFdzBOTEFVSUNBUVRHQ0VmTHdNRkJnUThCd3NYR0I4UUhnc1NCUWdJQkMwRkJSSWFGeFloSHdjTEN3Y2ZJQmNXRFF3U0JRVXNCUWdEQWdNREFSTVhJUXNURWdjWUVUMEVDQVFZQ0FRSkNRb0tCaUVZRWdJSEJ3Y0NMUUlEQlJNWkJRb0lGaUVlRHdIZ0J3OFZEVGhRR2pBc0VqaHdVRTg1T1A2Z1hrSXJTaXNyU2l0Q2toc1RGQTBURHlrT0xBNE9FZ1VIQkJzVEhoUWVIaFFmQnc0TENBVUlCeE1PRGl3T0tROFNEaFFNRmd3Q0F3UURCZ01IQ0FrRlBCVWREQllNQnd3S0JSSVBLUTRzRGc0VEJ3Z2JFeDRWSFIwVkhoTWJFQk1PRGkwT0tROFREUlFUSEJ3VUh4NE9GdzFRSGhBWUJ4SVVDd29WRWdjVERBd3RCUVVTR2kwaEhnUUhCQU1LQ0I0Z0Z4Y05EQk1GQlMwRkRnVVNHQ0VnRnhjTEJqMEhDeGNYSUJBZUN4SUZEZ1V0QkFFQ0FSTVpCUW9IRnlBZkVnVUlCUjhmR0FZREJRUURBUmtTQXdJQ0FpMENCZ1FIQlJNWElRc1RFUWdYRWdBQUF3REEvK0FEUUFKZ0FBTUFCZ0FKQUFxM0NBY0dCUU1DQXlZckV4OEJDUUlERXdFbndPbHpBU1QraUFFNDV1TCt0cVlCTFdmbUFvRCtid0ZNL2c4QjlmN0dTUUFFQUdEL2dBT2dBc0FBQndBUkFCa0FLZ0JSUUU0QUJ3QUtBUWNLV1FBQkFBQUNBUUJaQUFJQUF3UUNBMWNMQmdJRUFBVUpCQVZYREFFSkNBZ0pUUXdCQ1FrSVVRQUlDUWhGR3hvSUNDTWlHaW9iS2hjV0V4SUlFUWdSRVJFUkVoTVNEUlFyQUJRV01qWTBKaUlURVNNVk14VWpGVE0xRWlBR0VCWWdOaEFCSWk0Qk5UUStBakllQWhRT0FnSFBGeUlYRnlJNllDQWdnR3orcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0Fka2lGeGNpRi82QUFRQVE4QkFRQWxEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFFQUdEL2dBT2dBc0FBQndBWUFETUFRQUJlUUZzQUJRWUhCZ1VIWmdBSENBWUhDR1FBQUFBREJBQURXUXNCQkFBR0JRUUdXUXdCQ0FBSkFnZ0pXUW9CQWdFQkFrMEtBUUlDQVZFQUFRSUJSVFUwR2hrSkNEazRORUExUUNzcUlSOGVIUmt6R2pNUkVBZ1lDUmdURUEwUUt3QWdCaEFXSURZUUFTSXVBVFUwUGdJeUhnSVVEZ0lESWc0QkZUTW1NeklXRlJRR0J3NENCek0rQVRjK0FUVTBKZ01pQmhRV01qWTFOQzREQXF6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9SaXM4SUNZQ1lTUXlGUklYR1FzQkpnRU5JQm9hUmpFUEV4UWNGQVFHQ0FzQ3dQVCtxUFQwQVZqOTEyYXdaMDJPWmp3OFpvNmFqbVk4QWxrYk9DbGRMU01XSlJFVkppa2RLaUVmR0M0Zk1qditpeE1jRkJRT0JRc0lCZ01BQUFBQUJRREEvNEFEUUFMQUFBc0FFd0FYQUNrQU1RQllRRlVuSUFJSkNnRkFBQUFBQkFFQUJGa0ZEQU1EQVFBSENBRUhWd0FJQUFzS0NBdFpBQW9BQ1FZS0NWa0FCZ0lDQmtzQUJnWUNUd0FDQmdKREFBQXZMaXNxSkNNYkdoY1dGUlFURWc4T0FBc0FDeEVURXcwUkt3RTFOQ1lpQmgwQkl4RWhFU1UwTmpJV0hRRWhBU0VSSVFjMEppSUdGUlFXRnhVVUZqSTJQUUUrQVFZaUpqUTJNaFlVQXRCNnJIcHdBb0QrRUdlU1ovNmdBZEQ5d0FKQTRDVTJKUnNWQ1E0SkZSc3pHaE1UR2hNQllKQldlbnBXa1A0Z0FlQ1FTV2RuU1pEK1FBR2dvQnNsSlJzV0l3VlNCd2tKQjFJRkl3b1RHaE1UR2dBQUFBWUF3UURnQTBBQllBQUhBQThBSGdBbkFDOEFOd0JGUUVJS0RRWURBZ2dNQkFNQUFRSUFXUWtGQWdFREF3Rk5DUVVDQVFFRFVRc0hBZ01CQTBVZ0h4RVFOVFF4TUMwc0tTZ2tJeDhuSUNjWUZoQWVFUjRURXhNUURoSXJBRElXRkFZaUpqUTJJZ1lVRmpJMk5DVXlIZ0VWRkFZaklpNENOVFEyTnlJR0ZCWXlOalFtQkRJV0ZBWWlKalEySWdZVUZqSTJOQUh4SGhVVkhoVS9OaVVsTmlYK3dRb1FDaFVQQnc0SkJoVVBHeVVsTlNZbUFkWWVGUlVlRlQ4MkpTVTJKUUZFRlI0VkZSNHhKVFlsSlRZSkNoQUtEeFVHQ1E0SER4VWNKVFlsSlRZbEhCVWVGUlVlTVNVMkpTVTJBQUFBQUFJQkFQL2dBd0FDWUFBd0FFc0JJVXV3QzFCWVFCNHZGd0lKQTBzK0Fnb0JQUUVGQ0RFQkJ3VXRLZ0lHQndWQUd3RUhBVDhiUzdBTVVGaEFIaThYQWdrRFN6NENDZ0k5QVFVSU1RRUhCUzBxQWdZSEJVQWJBUWNCUHh0QUhpOFhBZ2tEU3o0Q0NnRTlBUVVJTVFFSEJTMHFBZ1lIQlVBYkFRY0JQMWxaUzdBTFVGaEFMd0FBQ1FFSkFBRm1BQU1BQ1FBRENWa0NBUUVBQ2dnQkNsa0FDQUFGQndnRldRQUhBQVlFQndaWkFBUUVDd1JDRzB1d0RGQllRQzhCQVFBSkFna0FBbVlBQXdBSkFBTUpXUUFDQUFvSUFncFpBQWdBQlFjSUJWa0FCd0FHQkFjR1dRQUVCQXNFUWh0QUx3QUFDUUVKQUFGbUFBTUFDUUFEQ1ZrQ0FRRUFDZ2dCQ2xrQUNBQUZCd2dGV1FBSEFBWUVCd1paQUFRRUN3UkNXVmxBRDBwSVFrQWtMRFFqRmlreEVoQUxGeXNCSWc0RUl5SXVBUzhCSmljdUFpTWlEZ0VQQVJrQk14RStBVE15SGdFWEZqTXlQZ00zUGdFM0VUVUdBd1lqSWljdUFpTWlEZ0VIRVQ0Qk16SVhIZ1F6TWpjQzRBSVNDQkVNRHdjT0doNEpHeElISENFekZpcEFFZ1VISUEwektCTXFOUTVhTVFnUkVnc1VBd29QQnd3VU54WXVWdzAzTFJVWUtoc0xEVE1vTFZNR0p4SWdIQTRYT0FKQUF3RUJBUUVDQlFJR0JBRUdCd1lMQ0FNRi9yZis1QUVmQlFnSUR3TVRBUUlCQWdFQkFnRUJPaUVDL3NNSEVnTVBDUVFGQXdFVEJRZ1NBUWtEQmdJSEFBQUNBSUQvb0FPQUFxQUFDQUFTQURWQU1oSVJEdzROQ2dnQkFBa0JBd0ZBRUFrQ0F6NEFBUU1BQXdFQVpnQURBUUFEU3dBREF3QlBBZ0VBQXdCREZCRVJFZ1FTS3drQkVUTVJNeEV6RVFFSE5TTVZCeFVKQVRVQ0FQN0E0TURnL3NEQWdFQUJnQUdBQWtEL0FQNWdBUUQvQUFHZ0FXQ2FXc0F6S1FFei9zMHBBQUlBZ1ArZ0E0QUNvQUNCQUk0QXBMYUlod0lIQUFGQVM3QW1VRmhBTVFBREFBOEFBdzlaQmhBQ0FBMEJCdzRBQjFrRUFRSUxBUWtJQWdsWkFBNEFDZzRLVlFVQkFRRUlVUXdCQ0FnTENFSWJRRGNBQXdBUEFBTVBXUVlRQWdBTkFRY09BQWRaQUE0SkNnNU5CQUVDQ3dFSkNBSUpXUVVCQVF3QkNBb0JDRmtBRGc0S1VRQUtEZ3BGV1VBbUFnQ01pNFdFZTNocmFtZGxYMXhYVlZGUFJVSThPU3dxSlNNYkdCTVJEUXdBZ1FLQkVRNHJBU01pSmpVMFB3RTJOQzhCSmlJUEFRNEJJeUltUFFFMEppc0JJZzRCSFFFVURnSWpJaTRCTHdFbUl5SVBBUVlVSHdFZUF4VVVCaXNCSWc0QkhRRVVGanNCTWhZVkZBOEJCaFFmQVJZek1qOEJQZ0V6TWhZZEFSUVdPd0V5TmowQk5ENEJNeklmQVJZeVB3RStBVFFtTHdFbU5UUStBVHNCTWpZOUFqWW1CeFFHSWlZMU1UUStBVEllQVFOUkhoTWJEeFFPRGkwT0tnNFRCeEVLRXh3ZEZEME5GZzBJRFJFSkJ3d0tCUk1PRlJVT0xRNE9Fd1FGQkFJYkVoOE5GdzRlRkI4U0d3OFREZzR0RFJZVUR4TUdFZ2tUSEIwVVBSUWREUlVORXc4VERpa1BMQWNJQ0FjVER3d1ZEQjhVR2dFYncxNkZYU3BLVjBvckFXOGNFeE1PRXc0cER5d09EaE1IQ0JzU0h4UWVEaGNOSHdrUURRY0RCd1VURGc0c0Rpa1BFZ1FJQ0FrRkV4d05GZzQ4RlJ3Y0V4UU9FZzhwRGl3T0RoTUhDQnNUSGhRZUhSVWVEQlVORUJJT0Rpd0hFeElUQnhNTkZBMFZEUndVSHg0VkhFOUNYbDVDSzBvckswb0FBQU1BWVArQUE2QUN3QUFIQUJFQUd3QTNRRFFBQUFBQ0F3QUNXUUFEQUFjR0F3ZFhBQVlJQVFVRUJnVlhBQVFCQVFSTEFBUUVBVkVBQVFRQlJSRVJFUkVVRkJNVEVBa1hLd0FnQmhBV0lEWVFKRElXRlJRR0lpWTFOQk1qTlRNMUl6VXpFVE1DclA2bzlQUUJXUFQrUmlJWEZ5SVhjWUFnSUdBZ0FzRDAvcWowOUFGWUpCY1JFQmdZRUJIK2h4RHdFUDhBQUFBREFHRC9nQU9nQXNBQUJ3QVVBQzRBU0VCRkFBVUhCZ2NGQm1ZQUJnUUhCZ1JrQUFBQUJ3VUFCMWtBQkFBREFnUURXZ2dCQWdFQkFrMElBUUlDQVZJQUFRSUJSZ2tJS2lnbkppVWpHUmdOREFnVUNSUVRFQWtRS3dBZ0JoQVdJRFlRQVNJbU5EWXlGaFVVRGdNM0RnRUhJelErQWpjK0FUVTBKaU1pRnlNMk16SVdGUlFHQXF6K3FQVDBBVmowL21rUEV4TWRGQVFHQ0FzK0lBMEJKZ2NPRmhFU0ZUSWtZUUltQVlZelJob0N3UFQrcVBUMEFWaitlQlFjRXhNT0Jnb0lCd1BuSUNFcUZpRWZHeEFSSmhVakxWMThPekllTHdBREFNRUE0QU5BQVdBQUJ3QVFBQmdBSzBBb0JBWUNBd0FCQVFCTkJBWUNBd0FBQVZFRkF3SUJBQUZGQ1FnV0ZSSVJEUXdJRUFrUUV4QUhFQ3NBSWdZVUZqSTJOQ1VpQmhRV01qWTBKaUFpQmhRV01qWTBBaHMySlNVMkpmN0JHeVVsTlNZbUFnQTJKU1UySlFGZ0pUWWxKVFlsSlRZbEpUWWxKVFlsSlRZQUFBd0FRUC9RQThBQ2NBQUhBQThBRndBZkFDY0FMd0ExQURzQVF3QkxBRk1BV3dFRVM3QWhVRmhBWWdBQ0FBSm9BQU1CQ2dFRENtWUFDZ2dCQ2doa0FBc0pCZ2tMQm1ZQUJnUUpCZ1JrQUFjRkIya1lGd0lVRmdFVkFSUVZWd0FBQUFFREFBRlpEd0VNRGdFTkNRd05XQUFJQUFrTENBbFpFd0VRRWdFUkJSQVJXQUFFQkFWUkFBVUZDd1ZDRzBCbkFBSUFBbWdBQXdFS0FRTUtaZ0FLQ0FFS0NHUUFDd2tHQ1FzR1pnQUdCQWtHQkdRQUJ3VUhhUmdYQWhRV0FSVUJGQlZYQUFBQUFRTUFBVmtQQVF3T0FRMEpEQTFZQUFnQUNRc0lDVmtBQkJBRkJFMFRBUkFTQVJFRkVCRllBQVFFQlZFQUJRUUZSVmxBTFZSVVZGdFVXMXBaVDA1TlRFcEpTRWMvUGowOE96bzVPRE15TVRBdExDa29KU1FURXhNVEV4TVRFeEFaRnlzQU1oWVVCaUltTkRZaUJoUVdNalkwQWpJV0ZBWWlKalEySWdZVUZqSTJOQUF5RmhRR0lpWTBOaUlHRkJZeU5qUVhJUlVoTmpRaUZCY2pOVE1CTXhVak5qVTBKZ2NVRmhVaE5TRUdFek1WSXpZMU5DWW5CaFVVRmhVaE5RS3pHaE1UR2hNNk5DWW1OQ1pOR2hNVEdoTTZOQ1ltTkNiK014b1RFeG9UT2pRbUpqUW1Id0loL2Q4QndBR2hvUUkrb2FFQkFiOEIvZDhDSVFHL29hRUJBYjRCQWYzZkFsQVRHaE1UR2pNbU5DWW1OUDNtRXhvVEV4b3pKalFtSmpRQkZoTWFFeE1hTXlZMEppWTBDaUFJRUJBSUlQN3dJQWdJQkFnTUJBZ0VJQWdDS0NBSUNBUUlCQWdJQkFnRUlBQUpBRVFBSUFPOEFzc0FGUUFuQURNQVJBQlFBRjBBY1FCK0FJd0JFa3V3Q2xCWVFGNFhBUXdMQXdvTVhnQU5BZ29MRFY0QUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGRzBCZ0Z3RU1Dd01MREFObUFBMENDZ0lOQ21ZQUJ3QUlBUWNJV1FBQkVnRUFDUUVBV1FBSkZRRUdDd2tHV1FBREV3RUNEUU1DV1FBTEZnRUtEd3NLV1FBUEdRRVFCUThRV1FBRkZBRUVFUVVFV1FBUkRnNFJUUUFSRVE1UkdBRU9FUTVGV1VCR2dIOXpjbDllVWxFMU5Db29HQllDQUlTRGY0eUFqSGw0Y241emZtbG5YbkZmY1ZoWFVWMVNYVXhMUmtVOU96UkVOVVF3TFNnektqTWhIaFluR0NjT0N3QVZBaFVhRGlzQklTSXVCVFUwTmpNaE1oNERGUlFHQnlFaUxnSTFORFl6SVRJZUFoVVVCZ2NoSWlZME5qTWhNaFlVQmdFaUpqVTBQZ0l6TWg0QkZSUU9BaVlpRGdFVUhnRXlQZ0UwSmdNaUpqVTBQZ0V5SGdFVURnRW5JZzRCRlJRZUF6TXlQZ0UxTkM0REF5SW1OVFErQVRJZUFSUU9BU2NpQmhRV01qWTFOQzRFQTVyOTNRUUhCd1lGQXdJVURnSWpCUXNJQmdRVUR2M2RCZzBKQmhRT0FpTUhEQWtHRkE3OTNRNFVGQTRDSXc0VUZQMERLendSR3lZVkd6QWJFQndtQ3hNUENRa1BFeEFKQ1JrclBCd3ZOekFiR3pBYkNnOEpBd1lKQ2dZSkVBa0VCZ2dMQlNzOEhDODNNQnNiTUJzT0ZCUWNGQU1FQmdnSkFrSUNBd1VHQndjRURoUURCZ2tLQmc0VTd3WUpEQWNPRkFVSkRRY09GTzhVSFJRVUhSUUJtandxRlNZYkVSd3ZIQlVsSEJDSUNROFRFQWtKRUJNUC9wSThLaHd2SEJ3dk56QWJpQWtQQ2dVTENBWUVDUkFKQmdvSkJnUCtpVHdxSEM4Y0hDODNNQnVKRkIwVUZBNEZDUWNIQkFNQUF3QkEvK0VEdndKbkFBTUFCd0FMQUNaQUl3QUNBQU1BQWdOWEFBQUFBUVFBQVZjQUJBUUZUd0FGQlFzRlFoRVJFUkVSRUFZVUt4TWhGU0VSSVJVaEVTRVZJVUFEZi95QkEzLzhnUU4vL0lFQlBEQUJXekQ5MlM4QUFBQUVBQmYvaUFQcEFyZ0FCUUFpQURrQVB3QTlRRG8vUGowOE96bzVMU3dqSWlFZkhoUVRCZ1VFQXdJQkFCY0NBUUZBQUFBQUFRSUFBVmtBQWdNREFrMEFBZ0lEVVFBREFnTkZMeDRYTFFRU0t3RUhKd2NYTnljd1BRRXVBeU1pRGdJSEZ6NEJNaDRCRnhVVUJnY1hOalV4Qnc0QklpNEJOVFEyTnljR0hRTWVBak15TmpjQkJ4YzNGemNEMDFOVkZXcHBVUUZCYlpkU04ybGNUUnNjTXJETXJHVUJBUUVnQWxBeXNNeXRaUUVCSUFJQ2I3cHRic0EyL1J4cEZsTlRGZ0VnVTFNV2Fta1lBUUpUbFd4QUhUWk5NQkJaWjJTc1pnNEdEZ2NFRlJhNFdXZGtyV1lLRkFvRUZSWUNCQU5zdUd0d1lBRklhUmRUVXhjQUFBQUJBVi8vbndLZ0FxQUFTUUJMUUVnNkFRQUZSeDhLQXdJREFrQUFCUUFGYUFjQkFBTUFhQUFEQWdOb0FBSUFCQUVDQkZrQUFRWUdBVTBBQVFFR1VnQUdBUVpHQVFCRFFUYzJMU3NsSXgwYkNBY0FTUUZKQ0E0ckFTSU9BUlVSRkFZaUpqY3dFVFEyTnpZWEhnRVZFUlFPQWdjR0l5SW1OVEFSTkNZaklnNEJGUU1VRmpNV056NENOUk0wSnlZaUJ3WUhNQjBEQmhZekZqYzJOUkUySmdLSkJnc0dSVnRGQVJJUUl5TVFFUUlDQkFJR0NBa05EUWtIQ2dZQktSd2RGQVlKQkFFNEd6OGFPQUVCWUVCRExpOEJEUUhxQmdzRy9ubzlRVU05QWRZWEl3a1ZGUW9qRi80L0Jnb0lDQU1IRmhNQldnb05CZ3NHL3FjcUx3RVpDQlFYRFFIQlN5SVFEeUZMZUkxOVZGRmVBUzh3VHdHRkNnNEFBd0FULy9ZRDdRSkpBQmNBSXdBeEFKcExzQTlRV0VBaUJ3RUVBZ1VDQkY0QUJRTURCVndBQVFZQkFnUUJBbGtBQXdNQVVnQUFBQXNBUWh0THNCaFFXRUFrQndFRUFnVUNCQVZtQUFVREFnVURaQUFCQmdFQ0JBRUNXUUFEQXdCU0FBQUFDd0JDRzBBcEJ3RUVBZ1VDQkFWbUFBVURBZ1VEWkFBQkJnRUNCQUVDV1FBREFBQURUUUFEQXdCU0FBQURBRVpaV1VBVUpTUVpHQ3NxSkRFbE1TQWZHQ01aSXlrbUNCQXJBUlFPQkNNaUxnTTBQZ016TWhjV0Z4WWxJZzRDRlJRV01qWTBKZ2NpRGdFVkZCWXlOalUwTGdJRDdTRThXbXFHUmxHZGRWc3ZMMXQybkZISW5XTWRDUDRUTUZoQUpZdkZpNHRqS1VZb1dINVlHQ2c0QVNBWVBrTS9NeDhyUkZCTlBFMVFSQ3B3UjBzVzRpWkNXakZsam83S2psZ3BTQ3BBVzF0QUlEa3FHQUFBQVFEQUFHQURRQUhnQUFVQUJyTUNBQUVtS3lVM0NRRVhBUU1aSi83QS9zQW5BUmxnS1FGWC9xa3BBUzBBQUFBQUFRREFBR0FEUUFIZ0FBVUFCck1DQUFFbUt3RVhDUUUzQVFNWkovN0Evc0FuQVJrQjRDbitxUUZYS2Y3VEFBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0VuQ1FFM0FRTEFLZjZwQVZjcC90TUNPU2Yrd1A3QUp3RVpBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFM0NRRW5BUUZBS1FGWC9xa3BBUzBDT1NmK3dQN0FKd0VaQUFBQUFRRkEvK0FDd0FKZ0FDRUFKVUFpR1JnVEN3UUZBQUlCUUFBQUFnRUNBQUZtQUFJQ0FWRUFBUUVMQVVJc0ZSRURFU3NCQmlJdkFSRVVCaUltTlJFSEJpY21ORGMyTnpZek1oWWZBUjRCSHdFZUFSVVVBcnNFRFFXVkNRNEpsUXdLQlFXdUFnWUZBd1VCQWdGWUxDc0RBZ0drQkFTRi9jY0hDUWtIQWptRUN3b0ZEZ1NmQVFVQ0FRSUJVQ2duQWdZREJ3QUFBQUVCUVAvZ0FzQUNZQUFnQUNSQUlSZ1RDd1FFQWdBQlFBQUFBUUlCQUFKbUFBRUJBbEVBQWdJTEFrSXNGUkVERVNzbEppSVBBUkUwSmlJR0ZSRW5KZ2NHRkJjV0Z4WXpNalkzUGdFL0FUNEJOVFFDdXdRTkJaVUpEZ21WREFvRkJhNENCZ1VFQmdFQldDd3JBd0tjQkFTRkFqa0hDUWtIL2NlRUN3b0ZEZ1NmQVFVREFnRlFLQ2NDQmdNSEFBQUFBQUVBd0FCZ0EwQUI0QUFkQUNwQUp4WVNBZ0FCQVVBQUFnRUNhQUFEQUFOcEFBRUFBQUZOQUFFQkFGSUFBQUVBUmh3VUl5TUVFaXNsTmk4QklUSTJOQ1lqSVRjMkp5WWlCd1lIQmhVVUZ4NEJId0VXTXpZQmZBb0toUUk1QndrSkIvM0hoQXNLQlE0RW53RUZCUUZRS0NjRUJ3ZGxDZ3lWQ1E0SmxRd0tCUVd1QWdZRkJ3UUJXQ3dyQlFFQUFRREFBR0FEUUFIaEFCNEFKVUFpRnhNQ0FBRUJRQUFDQUFKcEFBRUFBQUZOQUFFQkFGRUFBQUVBUlIwY0l5TURFQ3NsSmo4QklTSW1ORFl6SVNjbU56NEJGaGNXRnhZVkZBY09BUThCQmlNbUFvUUtDb1g5eHdjSkNRY0NPWVFMQ2dNSkNBT2ZBUVVGQVZBb0p3UUhCMlVLREpVSkRnbVZEQW9EQXdJRXJnSUdCUWNFQVZnc0t3VUJBQUFCQVI3L3B3TGFBbjhBQmdBV1FCTUFBUUE5QUFFQUFXZ0NBUUFBWHhFUkVRTVJLd1VUSXhFakVTTUIvTjZSbTVCWkFTZ0JzUDVRQUFFQVgvOTdBNkVDdlFBTEFBQUpBZ2NKQVJjSkFUY0pBUU50L3BMK2xEUUJiZjZUTkFGc0FXNDAvcEVCYndLOS9wSUJiRFArbFA2VU13RnMvcEl6QVc0QmJRQUFCQUJWLzNFRHFnTElBQk1BSndBK0FFUUFBQVVHTGdFME56NEJOQ1luSmpRK0FSY2VBUlFHSnc0QkpqUTNQZ0UwSmljbU5EWVdGeDRCRkFZREp5TWlKaWNSUGdFM016YytBUjRCRlJFVURnRW1KemNSQnlNUk13TXdDQmdRQ1RJMk5USUpFQmdKT2o0L3JBZ1lFUWdZR1JnWENCRVlDQjhnSXVISXB4Y2hBUUVoRjZmRkRoOGVFQkFiSHc0ZjFMcTRGQWtCRWhnSk5JYVhoVFFKR0JJQkNUeWNzSnhTQ0FFU0Z3a1pQa1UrR1FrWEVRRUlJVk5jVS83Z2dpRVlBYmtYSVFHVENnTVBHeEQ5SEJBYUR3RUlNQUxrbi81SEFBQUFCUUJBLzN3RHdBSzhBQXNBSHdBekFFZ0FYUUFBSlNFaUpqUTJNeUV5RmhRR0F5TWlKalEyT3dFeU5qMEJORFl5RmgwQkRnRUZJeTRCSnpVME5qSVdIUUVVRmpzQk1oWVVCZ01pSmowQlBnRTNNeklXRkFZckFTSUdIUUVVQmlFaUpqMEJOQ1lyQVNJbU5EWTdBUjRCRnhVVUJnT2cvTUFPRWhJT0EwQU9FaEp1d0E0U0VnN0FEaElTSEJJQk52MzNvQ2syQVJJY0VoSU9vQTRTRXU0T0VnRTJLYUFPRWhJT29BNFNFZ0x5RGhJU0RzQU9FaElPd0NrMkFSTDhFaHdTRWh3Uy9vQVNIQklTRHFBT0VoSU9vQ2syQVFFMkthQU9FaElPb0E0U0Vod1NBaUFTRHFBcE5nRVNIQklTRHFBT0VoSU9vQTRTRWh3U0FUWXBvQTRTQUFBQURBQ1dBQUVBQUFBQUFBRUFDQUFTQUFFQUFBQUFBQUlBQUFBaEFBRUFBQUFBQUFNQUZnQlVBQUVBQUFBQUFBUUFDUUNEQUFFQUFBQUFBQVVBTUFEdkFBRUFBQUFBQUFZQUNRRTBBQU1BQVFRSkFBRUFFQUFBQUFNQUFRUUpBQUlBQkFBYkFBTUFBUVFKQUFNQU1BQWlBQU1BQVFRSkFBUUFGZ0JyQUFNQUFRUUpBQVVBWUFDTkFBTUFBUVFKQUFZQUVnRWdBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QUFkVzVwYVdOdmJuTUFYamlKeEFBQUFBQjFBRzRBYVFCcEFHTUFid0J1QUhNQUlGNDRpY1FBT2dCV0FHVUFjZ0J6QUdrQWJ3QnVBQ0FBTVFBdUFEQUFNQUFBZFc1cGFXTnZibk1nT2xabGNuTnBiMjRnTVM0d01BQUFkUUJ1QUdrQWFRQmpBRzhBYmdCekFDQmVPSW5FQUFCMWJtbHBZMjl1Y3lBQUFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUF3QUNBQVV3QmxBSEFBZEFCbEFHMEFZZ0JsQUhJQUlBQXlBREFBTEFBZ0FESUFNQUF4QURrQUxBQWdBR2tBYmdCcEFIUUFhUUJoQUd3QUlBQnlBR1VBYkFCbEFHRUFjd0JsQUFCV1pYSnphVzl1SURFdU1EQWdVMlZ3ZEdWdFltVnlJREl3TENBeU1ERTVMQ0JwYm1sMGFXRnNJSEpsYkdWaGMyVUFBSFVBYmdCcEFHa0FZd0J2QUc0QWN3QXRBQUIxYm1scFkyOXVjeTBBQUFJQUFBQUFBQUQvSHdBeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZQUFBQUFFQUFnQmJBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBUlFCRlFFV0FSY0JHQUVaQVJvQkd3RWNBUjBCSGdFZkFTQUJJUUVpQVNNQkpBRWxBU1lCSndFb0FTa0JLZ0VyQVN3QkxRRXVBUzhCTUFFeEFUSUJNd0UwQVRVQk5nRTNBVGdCT1FFNkFUc0JQQUU5QVQ0QlB3RkFBVUVCUWdGREFVUUJSUUZHQVVjQlNBRkpBVW9CU3dGTUFVMEJUZ0ZQQVZBQlVRRlNBVk1CVkFGVkFWWUJWd0ZZQVZrQldnRmJBVndCWFFkMWJtbEZNVEF3QjNWdWFVVXhNREVIZFc1cFJURXdNZ2QxYm1sRk1UTXdCM1Z1YVVVeE16RUhkVzVwUlRFek1nZDFibWxGTWpBd0IzVnVhVVV5TURFSGRXNXBSVEl3TWdkMWJtbEZNakF6QjNWdWFVVXlNekFIZFc1cFJUSXpNUWQxYm1sRk1qTXlCM1Z1YVVVeU16TUhkVzVwUlRJMk1BZDFibWxGTWpZeEIzVnVhVVV5TmpJSGRXNXBSVEkyTXdkMWJtbEZNalkwQjNWdWFVVXpNREFIZFc1cFJUTXdNUWQxYm1sRk16QXlCM1Z1YVVVek1ETUhkVzVwUlRNek1nZDFibWxGTXpNekIzVnVhVVV6TmpBSGRXNXBSVE0yTXdkMWJtbEZNelkwQjNWdWFVVTBNREFIZFc1cFJUUXdNUWQxYm1sRk5EQXlCM1Z1YVVVME1ETUhkVzVwUlRRd05BZDFibWxGTkRBMUIzVnVhVVUwTURZSGRXNXBSVFF3TndkMWJtbEZOREE0QjNWdWFVVTBNRGtIZFc1cFJUUXhNQWQxYm1sRk5ERXhCM1Z1YVVVME1UTUhkVzVwUlRRek5BZDFibWxGTkRNM0IzVnVhVVUwTXpnSGRXNXBSVFF6T1FkMWJtbEZORFF3QjNWdWFVVTBOREVIZFc1cFJUUTBNZ2QxYm1sRk5EUXpCM1Z1YVVVME5qQUhkVzVwUlRRMk1RZDFibWxGTkRZeUIzVnVhVVUwTmpNSGRXNXBSVFEyTkFkMWJtbEZORFkxQjNWdWFVVTBOallIZFc1cFJUUTJPQWQxYm1sRk5EY3dCM1Z1YVVVME56RUhkVzVwUlRRM01nZDFibWxGTlRBd0IzVnVhVVUxTURFSGRXNXBSVFV3TWdkMWJtbEZOVEF6QjNWdWFVVTFNRFFIZFc1cFJUVXdOUWQxYm1sRk5UQTJCM1Z1YVVVMU1EY0hkVzVwUlRVd09BZDFibWxGTlRNd0IzVnVhVVUxTXpJSGRXNXBSVFV6TkFkMWJtbEZOVE0xQjNWdWFVVTFNemNIZFc1cFJUVTJNQWQxYm1sRk5UWXlCM1Z1YVVVMU5qTUhkVzVwUlRVMk5RZDFibWxGTlRZM0IzVnVhVVUxTmpnSGRXNXBSVFU0TUFkMWJtbEZOVGd4QjNWdWFVVTFPRElIZFc1cFJUVTRNd2QxYm1sRk5UZzBCM1Z1YVVVMU9EVUhkVzVwUlRVNE5nZDFibWxGTlRnM0IzVnVhVVUxT0RnSGRXNXBSVFU0T1FSRmRYSnZCM1Z1YVVVMk1USUFBQUVBQWYvL0FBOEFBUUFBQUF3QUFBQVdBQUFBQWdBQkFBRUFYd0FCQUFRQUFBQUNBQUFBQUFBQUFBRUFBQUFBMWFRbkNBQUFBQURacWx1NUFBQUFBTm1xWEFrPScpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcblx0fVxuXG5cdC8qICNlbmRpZiAqL1xuXG5cdC51bmktaWNvbnMge1xuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!********************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/icons.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default = {\n  'contact': \"\\uE100\",\n  'person': \"\\uE101\",\n  'personadd': \"\\uE102\",\n  'contact-filled': \"\\uE130\",\n  'person-filled': \"\\uE131\",\n  'personadd-filled': \"\\uE132\",\n  'phone': \"\\uE200\",\n  'email': \"\\uE201\",\n  'chatbubble': \"\\uE202\",\n  'chatboxes': \"\\uE203\",\n  'phone-filled': \"\\uE230\",\n  'email-filled': \"\\uE231\",\n  'chatbubble-filled': \"\\uE232\",\n  'chatboxes-filled': \"\\uE233\",\n  'weibo': \"\\uE260\",\n  'weixin': \"\\uE261\",\n  'pengyouquan': \"\\uE262\",\n  'chat': \"\\uE263\",\n  'qq': \"\\uE264\",\n  'videocam': \"\\uE300\",\n  'camera': \"\\uE301\",\n  'mic': \"\\uE302\",\n  'location': \"\\uE303\",\n  'mic-filled': \"\\uE332\",\n  'speech': \"\\uE332\",\n  'location-filled': \"\\uE333\",\n  'micoff': \"\\uE360\",\n  'image': \"\\uE363\",\n  'map': \"\\uE364\",\n  'compose': \"\\uE400\",\n  'trash': \"\\uE401\",\n  'upload': \"\\uE402\",\n  'download': \"\\uE403\",\n  'close': \"\\uE404\",\n  'redo': \"\\uE405\",\n  'undo': \"\\uE406\",\n  'refresh': \"\\uE407\",\n  'star': \"\\uE408\",\n  'plus': \"\\uE409\",\n  'minus': \"\\uE410\",\n  'circle': \"\\uE411\",\n  'checkbox': \"\\uE411\",\n  'close-filled': \"\\uE434\",\n  'clear': \"\\uE434\",\n  'refresh-filled': \"\\uE437\",\n  'star-filled': \"\\uE438\",\n  'plus-filled': \"\\uE439\",\n  'minus-filled': \"\\uE440\",\n  'circle-filled': \"\\uE441\",\n  'checkbox-filled': \"\\uE442\",\n  'closeempty': \"\\uE460\",\n  'refreshempty': \"\\uE461\",\n  'reload': \"\\uE462\",\n  'starhalf': \"\\uE463\",\n  'spinner': \"\\uE464\",\n  'spinner-cycle': \"\\uE465\",\n  'search': \"\\uE466\",\n  'plusempty': \"\\uE468\",\n  'forward': \"\\uE470\",\n  'back': \"\\uE471\",\n  'left-nav': \"\\uE471\",\n  'checkmarkempty': \"\\uE472\",\n  'home': \"\\uE500\",\n  'navigate': \"\\uE501\",\n  'gear': \"\\uE502\",\n  'paperplane': \"\\uE503\",\n  'info': \"\\uE504\",\n  'help': \"\\uE505\",\n  'locked': \"\\uE506\",\n  'more': \"\\uE507\",\n  'flag': \"\\uE508\",\n  'home-filled': \"\\uE530\",\n  'gear-filled': \"\\uE532\",\n  'info-filled': \"\\uE534\",\n  'help-filled': \"\\uE535\",\n  'more-filled': \"\\uE537\",\n  'settings': \"\\uE560\",\n  'list': \"\\uE562\",\n  'bars': \"\\uE563\",\n  'loop': \"\\uE565\",\n  'paperclip': \"\\uE567\",\n  'eye': \"\\uE568\",\n  'arrowup': \"\\uE580\",\n  'arrowdown': \"\\uE581\",\n  'arrowleft': \"\\uE582\",\n  'arrowright': \"\\uE583\",\n  'arrowthinup': \"\\uE584\",\n  'arrowthindown': \"\\uE585\",\n  'arrowthinleft': \"\\uE586\",\n  'arrowthinright': \"\\uE587\",\n  'pulldown': \"\\uE588\",\n  'closefill': \"\\uE589\",\n  'sound': \"\\uE590\",\n  'scan': \"\\uE612\" };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktaWNvbnMvaWNvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InNHQUFlO0FBQ2QsYUFBVyxRQURHO0FBRWQsWUFBVSxRQUZJO0FBR2QsZUFBYSxRQUhDO0FBSWQsb0JBQWtCLFFBSko7QUFLZCxtQkFBaUIsUUFMSDtBQU1kLHNCQUFvQixRQU5OO0FBT2QsV0FBUyxRQVBLO0FBUWQsV0FBUyxRQVJLO0FBU2QsZ0JBQWMsUUFUQTtBQVVkLGVBQWEsUUFWQztBQVdkLGtCQUFnQixRQVhGO0FBWWQsa0JBQWdCLFFBWkY7QUFhZCx1QkFBcUIsUUFiUDtBQWNkLHNCQUFvQixRQWROO0FBZWQsV0FBUyxRQWZLO0FBZ0JkLFlBQVUsUUFoQkk7QUFpQmQsaUJBQWUsUUFqQkQ7QUFrQmQsVUFBUSxRQWxCTTtBQW1CZCxRQUFNLFFBbkJRO0FBb0JkLGNBQVksUUFwQkU7QUFxQmQsWUFBVSxRQXJCSTtBQXNCZCxTQUFPLFFBdEJPO0FBdUJkLGNBQVksUUF2QkU7QUF3QmQsZ0JBQWMsUUF4QkE7QUF5QmQsWUFBVSxRQXpCSTtBQTBCZCxxQkFBbUIsUUExQkw7QUEyQmQsWUFBVSxRQTNCSTtBQTRCZCxXQUFTLFFBNUJLO0FBNkJkLFNBQU8sUUE3Qk87QUE4QmQsYUFBVyxRQTlCRztBQStCZCxXQUFTLFFBL0JLO0FBZ0NkLFlBQVUsUUFoQ0k7QUFpQ2QsY0FBWSxRQWpDRTtBQWtDZCxXQUFTLFFBbENLO0FBbUNkLFVBQVEsUUFuQ007QUFvQ2QsVUFBUSxRQXBDTTtBQXFDZCxhQUFXLFFBckNHO0FBc0NkLFVBQVEsUUF0Q007QUF1Q2QsVUFBUSxRQXZDTTtBQXdDZCxXQUFTLFFBeENLO0FBeUNkLFlBQVUsUUF6Q0k7QUEwQ2QsY0FBWSxRQTFDRTtBQTJDZCxrQkFBZ0IsUUEzQ0Y7QUE0Q2QsV0FBUyxRQTVDSztBQTZDZCxvQkFBa0IsUUE3Q0o7QUE4Q2QsaUJBQWUsUUE5Q0Q7QUErQ2QsaUJBQWUsUUEvQ0Q7QUFnRGQsa0JBQWdCLFFBaERGO0FBaURkLG1CQUFpQixRQWpESDtBQWtEZCxxQkFBbUIsUUFsREw7QUFtRGQsZ0JBQWMsUUFuREE7QUFvRGQsa0JBQWdCLFFBcERGO0FBcURkLFlBQVUsUUFyREk7QUFzRGQsY0FBWSxRQXRERTtBQXVEZCxhQUFXLFFBdkRHO0FBd0RkLG1CQUFpQixRQXhESDtBQXlEZCxZQUFVLFFBekRJO0FBMERkLGVBQWEsUUExREM7QUEyRGQsYUFBVyxRQTNERztBQTREZCxVQUFRLFFBNURNO0FBNkRkLGNBQVksUUE3REU7QUE4RGQsb0JBQWtCLFFBOURKO0FBK0RkLFVBQVEsUUEvRE07QUFnRWQsY0FBWSxRQWhFRTtBQWlFZCxVQUFRLFFBakVNO0FBa0VkLGdCQUFjLFFBbEVBO0FBbUVkLFVBQVEsUUFuRU07QUFvRWQsVUFBUSxRQXBFTTtBQXFFZCxZQUFVLFFBckVJO0FBc0VkLFVBQVEsUUF0RU07QUF1RWQsVUFBUSxRQXZFTTtBQXdFZCxpQkFBZSxRQXhFRDtBQXlFZCxpQkFBZSxRQXpFRDtBQTBFZCxpQkFBZSxRQTFFRDtBQTJFZCxpQkFBZSxRQTNFRDtBQTRFZCxpQkFBZSxRQTVFRDtBQTZFZCxjQUFZLFFBN0VFO0FBOEVkLFVBQVEsUUE5RU07QUErRWQsVUFBUSxRQS9FTTtBQWdGZCxVQUFRLFFBaEZNO0FBaUZkLGVBQWEsUUFqRkM7QUFrRmQsU0FBTyxRQWxGTztBQW1GZCxhQUFXLFFBbkZHO0FBb0ZkLGVBQWEsUUFwRkM7QUFxRmQsZUFBYSxRQXJGQztBQXNGZCxnQkFBYyxRQXRGQTtBQXVGZCxpQkFBZSxRQXZGRDtBQXdGZCxtQkFBaUIsUUF4Rkg7QUF5RmQsbUJBQWlCLFFBekZIO0FBMEZkLG9CQUFrQixRQTFGSjtBQTJGZCxjQUFZLFFBM0ZFO0FBNEZkLGVBQWEsUUE1RkM7QUE2RmQsV0FBUyxRQTdGSztBQThGZCxVQUFRLFFBOUZNLEUiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG5cdCdjb250YWN0JzogJ1xcdWUxMDAnLFxuXHQncGVyc29uJzogJ1xcdWUxMDEnLFxuXHQncGVyc29uYWRkJzogJ1xcdWUxMDInLFxuXHQnY29udGFjdC1maWxsZWQnOiAnXFx1ZTEzMCcsXG5cdCdwZXJzb24tZmlsbGVkJzogJ1xcdWUxMzEnLFxuXHQncGVyc29uYWRkLWZpbGxlZCc6ICdcXHVlMTMyJyxcblx0J3Bob25lJzogJ1xcdWUyMDAnLFxuXHQnZW1haWwnOiAnXFx1ZTIwMScsXG5cdCdjaGF0YnViYmxlJzogJ1xcdWUyMDInLFxuXHQnY2hhdGJveGVzJzogJ1xcdWUyMDMnLFxuXHQncGhvbmUtZmlsbGVkJzogJ1xcdWUyMzAnLFxuXHQnZW1haWwtZmlsbGVkJzogJ1xcdWUyMzEnLFxuXHQnY2hhdGJ1YmJsZS1maWxsZWQnOiAnXFx1ZTIzMicsXG5cdCdjaGF0Ym94ZXMtZmlsbGVkJzogJ1xcdWUyMzMnLFxuXHQnd2VpYm8nOiAnXFx1ZTI2MCcsXG5cdCd3ZWl4aW4nOiAnXFx1ZTI2MScsXG5cdCdwZW5neW91cXVhbic6ICdcXHVlMjYyJyxcblx0J2NoYXQnOiAnXFx1ZTI2MycsXG5cdCdxcSc6ICdcXHVlMjY0Jyxcblx0J3ZpZGVvY2FtJzogJ1xcdWUzMDAnLFxuXHQnY2FtZXJhJzogJ1xcdWUzMDEnLFxuXHQnbWljJzogJ1xcdWUzMDInLFxuXHQnbG9jYXRpb24nOiAnXFx1ZTMwMycsXG5cdCdtaWMtZmlsbGVkJzogJ1xcdWUzMzInLFxuXHQnc3BlZWNoJzogJ1xcdWUzMzInLFxuXHQnbG9jYXRpb24tZmlsbGVkJzogJ1xcdWUzMzMnLFxuXHQnbWljb2ZmJzogJ1xcdWUzNjAnLFxuXHQnaW1hZ2UnOiAnXFx1ZTM2MycsXG5cdCdtYXAnOiAnXFx1ZTM2NCcsXG5cdCdjb21wb3NlJzogJ1xcdWU0MDAnLFxuXHQndHJhc2gnOiAnXFx1ZTQwMScsXG5cdCd1cGxvYWQnOiAnXFx1ZTQwMicsXG5cdCdkb3dubG9hZCc6ICdcXHVlNDAzJyxcblx0J2Nsb3NlJzogJ1xcdWU0MDQnLFxuXHQncmVkbyc6ICdcXHVlNDA1Jyxcblx0J3VuZG8nOiAnXFx1ZTQwNicsXG5cdCdyZWZyZXNoJzogJ1xcdWU0MDcnLFxuXHQnc3Rhcic6ICdcXHVlNDA4Jyxcblx0J3BsdXMnOiAnXFx1ZTQwOScsXG5cdCdtaW51cyc6ICdcXHVlNDEwJyxcblx0J2NpcmNsZSc6ICdcXHVlNDExJyxcblx0J2NoZWNrYm94JzogJ1xcdWU0MTEnLFxuXHQnY2xvc2UtZmlsbGVkJzogJ1xcdWU0MzQnLFxuXHQnY2xlYXInOiAnXFx1ZTQzNCcsXG5cdCdyZWZyZXNoLWZpbGxlZCc6ICdcXHVlNDM3Jyxcblx0J3N0YXItZmlsbGVkJzogJ1xcdWU0MzgnLFxuXHQncGx1cy1maWxsZWQnOiAnXFx1ZTQzOScsXG5cdCdtaW51cy1maWxsZWQnOiAnXFx1ZTQ0MCcsXG5cdCdjaXJjbGUtZmlsbGVkJzogJ1xcdWU0NDEnLFxuXHQnY2hlY2tib3gtZmlsbGVkJzogJ1xcdWU0NDInLFxuXHQnY2xvc2VlbXB0eSc6ICdcXHVlNDYwJyxcblx0J3JlZnJlc2hlbXB0eSc6ICdcXHVlNDYxJyxcblx0J3JlbG9hZCc6ICdcXHVlNDYyJyxcblx0J3N0YXJoYWxmJzogJ1xcdWU0NjMnLFxuXHQnc3Bpbm5lcic6ICdcXHVlNDY0Jyxcblx0J3NwaW5uZXItY3ljbGUnOiAnXFx1ZTQ2NScsXG5cdCdzZWFyY2gnOiAnXFx1ZTQ2NicsXG5cdCdwbHVzZW1wdHknOiAnXFx1ZTQ2OCcsXG5cdCdmb3J3YXJkJzogJ1xcdWU0NzAnLFxuXHQnYmFjayc6ICdcXHVlNDcxJyxcblx0J2xlZnQtbmF2JzogJ1xcdWU0NzEnLFxuXHQnY2hlY2ttYXJrZW1wdHknOiAnXFx1ZTQ3MicsXG5cdCdob21lJzogJ1xcdWU1MDAnLFxuXHQnbmF2aWdhdGUnOiAnXFx1ZTUwMScsXG5cdCdnZWFyJzogJ1xcdWU1MDInLFxuXHQncGFwZXJwbGFuZSc6ICdcXHVlNTAzJyxcblx0J2luZm8nOiAnXFx1ZTUwNCcsXG5cdCdoZWxwJzogJ1xcdWU1MDUnLFxuXHQnbG9ja2VkJzogJ1xcdWU1MDYnLFxuXHQnbW9yZSc6ICdcXHVlNTA3Jyxcblx0J2ZsYWcnOiAnXFx1ZTUwOCcsXG5cdCdob21lLWZpbGxlZCc6ICdcXHVlNTMwJyxcblx0J2dlYXItZmlsbGVkJzogJ1xcdWU1MzInLFxuXHQnaW5mby1maWxsZWQnOiAnXFx1ZTUzNCcsXG5cdCdoZWxwLWZpbGxlZCc6ICdcXHVlNTM1Jyxcblx0J21vcmUtZmlsbGVkJzogJ1xcdWU1MzcnLFxuXHQnc2V0dGluZ3MnOiAnXFx1ZTU2MCcsXG5cdCdsaXN0JzogJ1xcdWU1NjInLFxuXHQnYmFycyc6ICdcXHVlNTYzJyxcblx0J2xvb3AnOiAnXFx1ZTU2NScsXG5cdCdwYXBlcmNsaXAnOiAnXFx1ZTU2NycsXG5cdCdleWUnOiAnXFx1ZTU2OCcsXG5cdCdhcnJvd3VwJzogJ1xcdWU1ODAnLFxuXHQnYXJyb3dkb3duJzogJ1xcdWU1ODEnLFxuXHQnYXJyb3dsZWZ0JzogJ1xcdWU1ODInLFxuXHQnYXJyb3dyaWdodCc6ICdcXHVlNTgzJyxcblx0J2Fycm93dGhpbnVwJzogJ1xcdWU1ODQnLFxuXHQnYXJyb3d0aGluZG93bic6ICdcXHVlNTg1Jyxcblx0J2Fycm93dGhpbmxlZnQnOiAnXFx1ZTU4NicsXG5cdCdhcnJvd3RoaW5yaWdodCc6ICdcXHVlNTg3Jyxcblx0J3B1bGxkb3duJzogJ1xcdWU1ODgnLFxuXHQnY2xvc2VmaWxsJzogJ1xcdWU1ODknLFxuXHQnc291bmQnOiAnXFx1ZTU5MCcsXG5cdCdzY2FuJzogJ1xcdWU2MTInXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-icons/uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icons.vue?vue&type=style&index=0&id=0bf90c00&lang=scss&scoped=true& */ 25);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_0bf90c00_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
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
/* 26 */
/*!******************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=script&lang=js& */ 27);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXdpQixDQUFnQiwyakJBQUcsRUFBQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniStatusBar = _interopRequireDefault(__webpack_require__(/*! ../uni-status-bar/uni-status-bar.vue */ 10));\nvar _uniIcons = _interopRequireDefault(__webpack_require__(/*! ../uni-icons/uni-icons.vue */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { name: \"UniNavBar\", components: { uniStatusBar: _uniStatusBar.default, uniIcons: _uniIcons.default }, props: { title: { type: String, default: \"\" }, leftText: { type: String, default: \"\" }, rightText: { type: String, default: \"\" }, leftIcon: { type: String, default: \"\" }, rightIcon: { type: String, default: \"\" }, fixed: { type: [Boolean, String], default: false }, color: { type: String, default: \"#000000\" }, backgroundColor: { type: String, default: \"#FFFFFF\" }, statusBar: { type: [Boolean, String],\n      default: false },\n\n    shadow: {\n      type: [String, Boolean],\n      default: false },\n\n    border: {\n      type: [String, Boolean],\n      default: true } },\n\n\n  mounted: function mounted() {\n    if (uni.report && this.title !== '') {\n      uni.report('title', this.title);\n    }\n  },\n  methods: {\n    onClickLeft: function onClickLeft() {\n      this.$emit(\"clickLeft\");\n    },\n    onClickRight: function onClickRight() {\n      this.$emit(\"clickRight\");\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktbmF2LWJhci91bmktbmF2LWJhci52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDQTtBQUNBLGtHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFFQSxFQUNBLGlCQURBLEVBRUEsY0FDQSxtQ0FEQSxFQUVBLDJCQUZBLEVBRkEsRUFNQSxTQUNBLFNBQ0EsWUFEQSxFQUVBLFdBRkEsRUFEQSxFQUtBLFlBQ0EsWUFEQSxFQUVBLFdBRkEsRUFMQSxFQVNBLGFBQ0EsWUFEQSxFQUVBLFdBRkEsRUFUQSxFQWFBLFlBQ0EsWUFEQSxFQUVBLFdBRkEsRUFiQSxFQWlCQSxhQUNBLFlBREEsRUFFQSxXQUZBLEVBakJBLEVBcUJBLFNBQ0EsdUJBREEsRUFFQSxjQUZBLEVBckJBLEVBeUJBLFNBQ0EsWUFEQSxFQUVBLGtCQUZBLEVBekJBLEVBNkJBLG1CQUNBLFlBREEsRUFFQSxrQkFGQSxFQTdCQSxFQWlDQSxhQUNBLHVCQURBO0FBRUEsb0JBRkEsRUFqQ0E7O0FBcUNBO0FBQ0EsNkJBREE7QUFFQSxvQkFGQSxFQXJDQTs7QUF5Q0E7QUFDQSw2QkFEQTtBQUVBLG1CQUZBLEVBekNBLEVBTkE7OztBQW9EQSxTQXBEQSxxQkFvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXhEQTtBQXlEQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxnQkFKQSwwQkFJQTtBQUNBO0FBQ0EsS0FOQSxFQXpEQSxFIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJcIj5cblx0XHQ8dmlldyA6Y2xhc3M9XCJ7ICd1bmktbmF2YmFyLS1maXhlZCc6IGZpeGVkLCAndW5pLW5hdmJhci0tc2hhZG93Jzogc2hhZG93LCAndW5pLW5hdmJhci0tYm9yZGVyJzogYm9yZGVyIH1cIiA6c3R5bGU9XCJ7ICdiYWNrZ3JvdW5kLWNvbG9yJzogYmFja2dyb3VuZENvbG9yIH1cIlxuXHRcdCBjbGFzcz1cInVuaS1uYXZiYXJfX2NvbnRlbnRcIj5cblx0XHRcdDx1bmktc3RhdHVzLWJhciB2LWlmPVwic3RhdHVzQmFyXCIgLz5cblx0XHRcdDx2aWV3IDpzdHlsZT1cInsgY29sb3I6IGNvbG9yLGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH1cIiBjbGFzcz1cInVuaS1uYXZiYXJfX2hlYWRlciB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIj5cblx0XHRcdFx0PHZpZXcgQHRhcD1cIm9uQ2xpY2tMZWZ0XCIgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXItYnRucyB1bmktbmF2YmFyX19oZWFkZXItYnRucy1sZWZ0IHVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hdmJhcl9fY29udGVudF92aWV3XCIgdi1pZj1cImxlZnRJY29uLmxlbmd0aFwiPlxuXHRcdFx0XHRcdFx0PHVuaS1pY29ucyA6Y29sb3I9XCJjb2xvclwiIDp0eXBlPVwibGVmdEljb25cIiBzaXplPVwiMjRcIiAvPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7ICd1bmktbmF2YmFyLWJ0bi1pY29uLWxlZnQnOiAhbGVmdEljb24ubGVuZ3RoIH1cIiBjbGFzcz1cInVuaS1uYXZiYXItYnRuLXRleHQgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCJcblx0XHRcdFx0XHQgdi1pZj1cImxlZnRUZXh0Lmxlbmd0aFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgOnN0eWxlPVwieyBjb2xvcjogY29sb3IsIGZvbnRTaXplOiAnMTRweCcgfVwiPnt7IGxlZnRUZXh0IH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8c2xvdCBuYW1lPVwibGVmdFwiIC8+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXItY29udGFpbmVyIHVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiPlxuXHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLW5hdmJhcl9faGVhZGVyLWNvbnRhaW5lci1pbm5lciB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIiB2LWlmPVwidGl0bGUubGVuZ3RoXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS1uYXYtYmFyLXRleHRcIiA6c3R5bGU9XCJ7Y29sb3I6IGNvbG9yIH1cIj57eyB0aXRsZSB9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PCEtLSDmoIfpopjmj5Lmp70gLS0+XG5cdFx0XHRcdFx0PHNsb3QgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHQ8dmlldyA6Y2xhc3M9XCJ0aXRsZS5sZW5ndGggPyAndW5pLW5hdmJhcl9faGVhZGVyLWJ0bnMtcmlnaHQnIDogJydcIiBAdGFwPVwib25DbGlja1JpZ2h0XCIgY2xhc3M9XCJ1bmktbmF2YmFyX19oZWFkZXItYnRucyB1bmktbmF2YmFyX19jb250ZW50X3ZpZXdcIj5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX2NvbnRlbnRfdmlld1wiIHYtaWY9XCJyaWdodEljb24ubGVuZ3RoXCI+XG5cdFx0XHRcdFx0XHQ8dW5pLWljb25zIDpjb2xvcj1cImNvbG9yXCIgOnR5cGU9XCJyaWdodEljb25cIiBzaXplPVwiMjRcIiAvPlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8IS0tIOS8mOWFiOaYvuekuuWbvuaghyAtLT5cblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXItYnRuLXRleHQgdW5pLW5hdmJhcl9fY29udGVudF92aWV3XCIgdi1pZj1cInJpZ2h0VGV4dC5sZW5ndGggJiYgIXJpZ2h0SWNvbi5sZW5ndGhcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLW5hdi1iYXItcmlnaHQtdGV4dFwiPnt7IHJpZ2h0VGV4dCB9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cInJpZ2h0XCIgLz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX3BsYWNlaG9sZGVyXCIgdi1pZj1cImZpeGVkXCI+XG5cdFx0XHQ8dW5pLXN0YXR1cy1iYXIgdi1pZj1cInN0YXR1c0JhclwiIC8+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1uYXZiYXJfX3BsYWNlaG9sZGVyLXZpZXdcIiAvPlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHVuaVN0YXR1c0JhciBmcm9tIFwiLi4vdW5pLXN0YXR1cy1iYXIvdW5pLXN0YXR1cy1iYXIudnVlXCI7XG5cdGltcG9ydCB1bmlJY29ucyBmcm9tIFwiLi4vdW5pLWljb25zL3VuaS1pY29ucy52dWVcIjtcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogXCJVbmlOYXZCYXJcIixcblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHR1bmlTdGF0dXNCYXIsXG5cdFx0XHR1bmlJY29uc1xuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxuXHRcdFx0fSxcblx0XHRcdGxlZnRUZXh0OiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogXCJcIlxuXHRcdFx0fSxcblx0XHRcdHJpZ2h0VGV4dDoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRsZWZ0SWNvbjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcblx0XHRcdH0sXG5cdFx0XHRyaWdodEljb246IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiBcIlwiXG5cdFx0XHR9LFxuXHRcdFx0Zml4ZWQ6IHtcblx0XHRcdFx0dHlwZTogW0Jvb2xlYW4sIFN0cmluZ10sXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0Y29sb3I6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiBcIiMwMDAwMDBcIlxuXHRcdFx0fSxcblx0XHRcdGJhY2tncm91bmRDb2xvcjoge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6IFwiI0ZGRkZGRlwiXG5cdFx0XHR9LFxuXHRcdFx0c3RhdHVzQmFyOiB7XG5cdFx0XHRcdHR5cGU6IFtCb29sZWFuLCBTdHJpbmddLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNoYWRvdzoge1xuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRib3JkZXI6IHtcblx0XHRcdFx0dHlwZTogW1N0cmluZywgQm9vbGVhbl0sXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgIGlmKHVuaS5yZXBvcnQgJiYgdGhpcy50aXRsZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgdW5pLnJlcG9ydCgndGl0bGUnLCB0aGlzLnRpdGxlKVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRvbkNsaWNrTGVmdCgpIHtcblx0XHRcdFx0dGhpcy4kZW1pdChcImNsaWNrTGVmdFwiKTtcblx0XHRcdH0sXG5cdFx0XHRvbkNsaWNrUmlnaHQoKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJjbGlja1JpZ2h0XCIpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdCRuYXYtaGVpZ2h0OiA0NHB4O1xuXHQudW5pLW5hdi1iYXItdGV4dCB7XG5cdFx0LyogI2lmZGVmIEFQUC1QTFVTICovXG5cdFx0Zm9udC1zaXplOiAzNHJweDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1sZztcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxuXHQudW5pLW5hdi1iYXItcmlnaHQtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAkdW5pLWZvbnQtc2l6ZS1iYXNlO1xuXHR9XG5cblx0LnVuaS1uYXZiYXIge1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0Ly8gcG9zaXRpb246IGZpeGVkO1xuXHRcdC8vIHRvcDowcHg7XG5cdFx0ei1pbmRleDogMTAwMDAwMDAwMDAwMDA7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9fY29udGVudCB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJHVuaS1iZy1jb2xvcjtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHR9XG5cblx0LnVuaS1uYXZiYXJfX2NvbnRlbnRfdmlldyB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9faGVhZGVyIHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdHdpZHRoOiA3NTBycHg7XG5cdFx0aGVpZ2h0OiAkbmF2LWhlaWdodDtcblx0XHRsaW5lLWhlaWdodDogJG5hdi1oZWlnaHQ7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9faGVhZGVyLWJ0bnMge1xuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdC8qICNlbmRpZiAqL1xuXHRcdGZsZXgtd3JhcDogbm93cmFwO1xuXHRcdHdpZHRoOiAxMjBycHg7XG5cdFx0cGFkZGluZzogMCA2cHg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0fVxuXG5cdC51bmktbmF2YmFyX19oZWFkZXItYnRucy1sZWZ0IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHQvKiAjZW5kaWYgKi9cblx0XHR3aWR0aDogMTUwcnB4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuXG5cdC51bmktbmF2YmFyX19oZWFkZXItYnRucy1yaWdodCB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0d2lkdGg6IDE1MHJweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAzMHJweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHR9XG5cblx0LnVuaS1uYXZiYXJfX2hlYWRlci1jb250YWluZXIge1xuXHRcdGZsZXg6IDE7XG5cdH1cblxuXHQudW5pLW5hdmJhcl9faGVhZGVyLWNvbnRhaW5lci1pbm5lciB7XG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0ZmxleDogMTtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGZvbnQtc2l6ZTogJHVuaS1mb250LXNpemUtYmFzZTtcblx0fVxuXG5cblx0LnVuaS1uYXZiYXJfX3BsYWNlaG9sZGVyLXZpZXcge1xuXHRcdGhlaWdodDogJG5hdi1oZWlnaHQ7XG5cdH1cblxuXHQudW5pLW5hdmJhci0tZml4ZWQge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHRcblx0XHR6LWluZGV4OiA5OTg7XG5cdH1cblxuXHQudW5pLW5hdmJhci0tc2hhZG93IHtcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXG5cdFx0Ym94LXNoYWRvdzogMCAxcHggNnB4ICNjY2M7XG5cdFx0LyogI2VuZGlmICovXG5cdH1cblxuXHQudW5pLW5hdmJhci0tYm9yZGVyIHtcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAxcnB4O1xuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6ICR1bmktYm9yZGVyLWNvbG9yO1xuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/components/uni-nav-bar/uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-nav-bar.vue?vue&type=style&index=0&id=4afea59e&lang=scss&scoped=true& */ 29);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_nav_bar_vue_vue_type_style_index_0_id_4afea59e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
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
/* 30 */
/*!***********************************************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.nvue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThpQixDQUFnQixpa0JBQUcsRUFBQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/index.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _newsItem = _interopRequireDefault(__webpack_require__(/*! ./news-item.nvue */ 33));\nvar _uniIcons = _interopRequireDefault(__webpack_require__(/*! @/components/uni-icons/uni-icons.vue */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n// 缓存每页最多\nvar MAX_CACHE_DATA = 100; // 缓存页签数量\nvar MAX_CACHE_PAGE = 3;var newsData = { data0: { datetime: '40分钟前', article_type: 0, title: 'uni-app行业峰会频频亮相，开发者反响热烈!', source: 'DCloud', comment_count: 639, isVideo: false }, data1: { datetime: '一天前', article_type: 1, title: 'DCloud完成B2轮融资，uni-app震撼发布!', image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90', source: 'DCloud', comment_count: 11395, isVideo: false }, data2: { datetime: '一天前', article_type: 2, title: '中国技术界小奇迹：HBuilder开发者突破200万', image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90', source: 'DCloud', comment_count: 11395, isVideo: false }, data3: { article_type: 3, image_list: [{ url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90', width: 563, height: 316 }, { url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg?imageView2/3/w/200/h/100/q/90', width: 641, height: 360 }, { url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg?imageView2/3/w/200/h/100/q/90', width: 640, height: 360 }], datetime: '5分钟前', title: 'uni-app 支持使用 npm 安装第三方包，生态更趋丰富', source: 'DCloud', comment_count: 11, isVideo: false }, data4: { datetime: '2小时前', article_type: 4, title: 'uni-app 支持原生小程序自定义组件，更开放、更自由', image_url: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg?imageView2/3/w/200/h/100/q/90',\n    source: 'DCloud',\n    comment_count: 69,\n    isVideo: true } };var _default =\n\n\n\n{\n  components: {\n    mediaItem: _newsItem.default,\n    uniIcons: _uniIcons.default },\n\n  data: function data() {\n    return {\n      newsList: [],\n      cacheTab: [],\n      tabIndex: 0,\n      lastIndex: 0, //上一次的坐标\n      tabBars: [\n      {\n        name: '关注',\n        id: 'guanzhu' },\n\n      {\n        name: '推荐',\n        id: 'tuijian' },\n\n      {\n        name: '体育',\n        id: 'tiyu' }],\n\n\n      scrollInto: '',\n      showTips: false,\n      navigateFlag: false,\n      pulling: false,\n      refreshIcon:\n      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAB5QTFRFcHBw3Nzct7e39vb2ycnJioqK7e3tpqam29vb////D8oK7wAAAAp0Uk5T////////////ALLMLM8AAABxSURBVHja7JVBDoAgDASrjqj//7CJBi90iyYeOHTPMwmFZrHjYyyFYYUy1bwUZqtJIYVxhf1a6u0R7iUvWsCcrEtwJHp8MwMdvh2amHduiZD3rpWId9+BgPd7Cc2LIkPyqvlQvKxKBJ//Qwq/CacAAwDUv0a0YuKhzgAAAABJRU5ErkJggg==' };\n\n  },\n  onLoad: function onLoad() {var _this = this;\n    setTimeout(function () {\n      _this.tabBars.forEach(function (tabBar) {\n        _this.newsList.push({\n          data: [],\n          isLoading: false,\n          refreshText: '',\n          loadingText: '加载更多...' });\n\n      });\n      _this.getList(0);\n    }, 350);\n  },\n  methods: {\n    isScroll: function isScroll(index) {\n      return this.tabIndex == index;\n    },\n    //新闻详情\n    goDetail: function goDetail(item, index) {\n      var data = {\n        id: index,\n        title: item.title,\n        author: '详情',\n        time: item.datetime };\n\n      //\tlet url = item.isVideo == true ? 'videoDetails' : 'details';\n      uni.navigateTo({\n        url: \"/pages/new/details?data=\".concat(JSON.stringify(data)) });\n\n    },\n    getList: function getList(index) {\n      var activeTab = this.newsList[index];\n      var list = [];\n      for (var i = 1; i <= 10; i++) {\n        var item = Object.assign({}, newsData['data' + Math.floor(Math.random() * 5)]);\n        item.id = this.newGuid();\n        list.push(item);\n      }\n      activeTab.data = activeTab.data.concat(list);\n    },\n    close: function close(index1, index2) {var _this2 = this;\n      uni.showModal({\n        content: '是否删除本条信息？',\n        success: function success(res) {\n          if (res.confirm) {\n            _this2.newsList[index1].data.splice(index2, 1);\n          }\n        } });\n\n    },\n    loadMore: function loadMore(e) {var _this3 = this;\n      setTimeout(function () {\n        _this3.getList(_this3.tabIndex);\n      }, 500);\n    },\n    ontabtap: function ontabtap(e) {\n      var index = e.target.dataset.current || e.currentTarget.dataset.current;\n      this.isLeft = this.switchTab(index);\n    },\n    ontabchange: function ontabchange(e) {\n      var index = e.target.current || e.detail.current;\n      this.switchTab(index);\n    },\n    switchTab: function switchTab(index) {\n      if (this.newsList[index].data.length === 0) {\n        this.getList(index);\n      }\n\n      if (this.tabIndex === index) {\n        return;\n      }\n\n      // 缓存 tabId\n      if (this.newsList[this.tabIndex].data.length > MAX_CACHE_DATA) {\n        var isExist = this.cacheTab.indexOf(this.tabIndex);\n        if (isExist < 0) {\n          this.cacheTab.push(this.tabIndex);\n          //console.log(\"cache index:: \" + this.tabIndex);\n        }\n      }\n\n      this.tabIndex = index;\n      __f__(\"log\", this.tabIndex, \" at pages/new/index.nvue:247\");\n      __f__(\"log\", this.lastIndex, \" at pages/new/index.nvue:248\");\n\n      if (this.tabIndex < 5 && this.lastIndex < this.tabIndex) {\n        this.lastIndex = this.tabIndex;\n        return;\n      } else if (index >= 5) {\n        this.scrollInto = this.tabBars[index - 5].id;\n      }\n      // this.scrollInto = this.tabBars[index].id;\n      this.lastIndex = this.tabIndex;\n      // 释放 tabId\n      if (this.cacheTab.length > MAX_CACHE_PAGE) {\n        var cacheIndex = this.cacheTab[0];\n        this.clearTabData(cacheIndex);\n        this.cacheTab.splice(0, 1);\n        //console.log(\"remove cache index:: \" + cacheIndex);\n      }\n    },\n    clearTabData: function clearTabData(e) {\n      this.newsList[e].data.length = 0;\n      this.newsList[e].loadingText = '加载更多...';\n    },\n    refreshData: function refreshData() {},\n    onrefresh: function onrefresh(e) {var _this4 = this;\n      var tab = this.newsList[this.tabIndex];\n      if (!tab.refreshFlag) {\n        return;\n      }\n      tab.refreshing = true;\n      tab.refreshText = '正在刷新...';\n\n      setTimeout(function () {\n        _this4.refreshData();\n        _this4.pulling = true;\n        tab.refreshing = false;\n        tab.refreshFlag = false;\n        tab.refreshText = '已刷新';\n        setTimeout(function () {\n          // TODO fix ios和Android 动画时间相反问题\n          _this4.pulling = false;\n        }, 500);\n      }, 2000);\n    },\n    onpullingdown: function onpullingdown(e) {\n      var tab = this.newsList[this.tabIndex];\n      if (tab.refreshing || this.pulling) {\n        return;\n      }\n      if (Math.abs(e.pullingDistance) > Math.abs(e.viewHeight)) {\n        tab.refreshFlag = true;\n        tab.refreshText = '释放立即刷新';\n      } else {\n        tab.refreshFlag = false;\n        tab.refreshText = '下拉可以刷新';\n      }\n    },\n    newGuid: function newGuid() {\n      var s4 = function s4() {\n        return (65536 * (1 + Math.random()) | 0).toString(16).substring(1);\n      };\n      return (s4() + s4() + '-' + s4() + '-4' + s4().substr(0, 3) + '-' + s4() + '-' + s4() + s4() + s4()).toUpperCase();\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 32)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbmV3L2luZGV4Lm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQTtBQUNBLDRHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBLHlCLENBQ0E7QUFDQSx1QkFFQSxpQkFDQSxTQUNBLGlCQURBLEVBRUEsZUFGQSxFQUdBLGlDQUhBLEVBSUEsZ0JBSkEsRUFLQSxrQkFMQSxFQU1BLGNBTkEsRUFEQSxFQVNBLFNBQ0EsZUFEQSxFQUVBLGVBRkEsRUFHQSxtQ0FIQSxFQUlBLHlHQUpBLEVBS0EsZ0JBTEEsRUFNQSxvQkFOQSxFQU9BLGNBUEEsRUFUQSxFQWtCQSxTQUNBLGVBREEsRUFFQSxlQUZBLEVBR0EsbUNBSEEsRUFJQSxxR0FKQSxFQUtBLGdCQUxBLEVBTUEsb0JBTkEsRUFPQSxjQVBBLEVBbEJBLEVBMkJBLFNBQ0EsZUFEQSxFQUVBLGFBQ0EsRUFDQSw4RkFEQSxFQUVBLFVBRkEsRUFHQSxXQUhBLEVBREEsRUFNQSxFQUNBLCtGQURBLEVBRUEsVUFGQSxFQUdBLFdBSEEsRUFOQSxFQVdBLEVBQ0EsbUdBREEsRUFFQSxVQUZBLEVBR0EsV0FIQSxFQVhBLENBRkEsRUFtQkEsZ0JBbkJBLEVBb0JBLHVDQXBCQSxFQXFCQSxnQkFyQkEsRUFzQkEsaUJBdEJBLEVBdUJBLGNBdkJBLEVBM0JBLEVBb0RBLFNBQ0EsZ0JBREEsRUFFQSxlQUZBLEVBR0EscUNBSEEsRUFJQSxvR0FKQTtBQUtBLG9CQUxBO0FBTUEscUJBTkE7QUFPQSxpQkFQQSxFQXBEQSxHOzs7O0FBK0RBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLCtCQUZBLEVBREE7O0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQTtBQUdBLGlCQUhBO0FBSUEsa0JBSkEsRUFJQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLHFCQUZBLEVBTEE7O0FBU0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBLEVBVEEsQ0FMQTs7O0FBbUJBLG9CQW5CQTtBQW9CQSxxQkFwQkE7QUFxQkEseUJBckJBO0FBc0JBLG9CQXRCQTtBQXVCQTtBQUNBLDBZQXhCQTs7QUEwQkEsR0FoQ0E7QUFpQ0EsUUFqQ0Esb0JBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSwwQkFGQTtBQUdBLHlCQUhBO0FBSUEsZ0NBSkE7O0FBTUEsT0FQQTtBQVFBO0FBQ0EsS0FWQSxFQVVBLEdBVkE7QUFXQSxHQTdDQTtBQThDQTtBQUNBLFlBREEsb0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQSxZQUxBLG9CQUtBLElBTEEsRUFLQSxLQUxBLEVBS0E7QUFDQTtBQUNBLGlCQURBO0FBRUEseUJBRkE7QUFHQSxvQkFIQTtBQUlBLDJCQUpBOztBQU1BO0FBQ0E7QUFDQSxvRUFEQTs7QUFHQSxLQWhCQTtBQWlCQSxXQWpCQSxtQkFpQkEsS0FqQkEsRUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkEsU0EzQkEsaUJBMkJBLE1BM0JBLEVBMkJBLE1BM0JBLEVBMkJBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FOQTs7QUFRQSxLQXBDQTtBQXFDQSxZQXJDQSxvQkFxQ0EsQ0FyQ0EsRUFxQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQXpDQTtBQTBDQSxZQTFDQSxvQkEwQ0EsQ0ExQ0EsRUEwQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3Q0E7QUE4Q0EsZUE5Q0EsdUJBOENBLENBOUNBLEVBOENBO0FBQ0E7QUFDQTtBQUNBLEtBakRBO0FBa0RBLGFBbERBLHFCQWtEQSxLQWxEQSxFQWtEQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBdkZBO0FBd0ZBLGdCQXhGQSx3QkF3RkEsQ0F4RkEsRUF3RkE7QUFDQTtBQUNBO0FBQ0EsS0EzRkE7QUE0RkEsZUE1RkEseUJBNEZBLEVBNUZBO0FBNkZBLGFBN0ZBLHFCQTZGQSxDQTdGQSxFQTZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUhBLEVBR0EsR0FIQTtBQUlBLE9BVkEsRUFVQSxJQVZBO0FBV0EsS0FoSEE7QUFpSEEsaUJBakhBLHlCQWlIQSxDQWpIQSxFQWlIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E3SEE7QUE4SEEsV0E5SEEscUJBOEhBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQUNBLEtBbklBLEVBOUNBLEUiLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDx2aWV3PlxuXHRcdDx1bmktbmF2LWJhciBzdGF0dXMtYmFyPSdmYWxzZScgQGNsaWNrTGVmdD1cImJhY2soJy9wYWdlcy9pbmRleC9pbmRleCcpXCIgbGVmdC1pY29uPVwiYmFja1wiIGxlZnQtdGV4dD1cIui/lOWbnlwiIHRpdGxlPVwi5paw6Ze7XCI+XG5cdFx0XHQ8dmlldyBzbG90PVwicmlnaHRcIiBjbGFzcz0naW5mbyc+XG5cdFx0XHRcdFx0XHQgICA8bmF2aWdhdG9yIHVybD1cIi9wYWdlcy91bmktZmVlZGJhY2svdW5pLWZlZWRiYWNrXCIgb3Blbi10eXBlPVwibmF2aWdhdGVcIj5cblx0XHRcdFx0XHQgIDx1bmktaWNvbnMgIHR5cGU9XCJtb3JlXCIgc2l6ZT1cIjI0XCIgLz5cblx0XHRcdFx0XHRcdCAgIDwvbmF2aWdhdG9yPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdW5pLW5hdi1iYXI+XG5cdFx0XHRcblxuXHQ8dmlldyBjbGFzcz1cInRhYnNcIj5cblxuXHRcdDxzY3JvbGwtdmlldyBpZD1cInRhYi1iYXJcIiBjbGFzcz1cInNjcm9sbC1oXCIgOnNjcm9sbC14PVwidHJ1ZVwiIDpzaG93LXNjcm9sbGJhcj1cImZhbHNlXCIgOnNjcm9sbC1pbnRvLXZpZXc9XCJzY3JvbGxJbnRvXCI+XG5cdFx0XHQ8dmlldyB2LWZvcj1cIih0YWIsIGluZGV4KSBpbiB0YWJCYXJzXCIgOmtleT1cInRhYi5pZFwiIGNsYXNzPVwidW5pLXRhYi1pdGVtXCIgOmlkPVwidGFiLmlkXCIgOmRhdGEtY3VycmVudD1cImluZGV4XCIgQGNsaWNrPVwib250YWJ0YXBcIj5cblx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktdGFiLWl0ZW0tdGl0bGVcIiA6Y2xhc3M9XCJpc1Njcm9sbChpbmRleCkgPyAndW5pLXRhYi1pdGVtLXRpdGxlLWFjdGl2ZScgOiAnJ1wiPnt7IHRhYi5uYW1lIH19PC90ZXh0PlxuXHRcdFx0XHQ8IS0tIOS4i+WIkue6vyAtLT5cblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDoxMDAlXCIgOmNsYXNzPVwiaXNTY3JvbGwoaW5kZXgpID8gJ3VuZGVybGluZWJveCcgOiAndW5kZXJsaW5lYm94LWFjdGl2ZSdcIj48dmlldyBjbGFzcz1cInVuZGVybGluZVwiPjwvdmlldz48L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0PC9zY3JvbGwtdmlldz5cblx0XHQ8dmlldyBjbGFzcz1cImxpbmUtaFwiPjwvdmlldz5cblx0XHQ8c3dpcGVyIDpjdXJyZW50PVwidGFiSW5kZXhcIiBjbGFzcz1cInN3aXBlci1ib3hcIiBzdHlsZT1cImZsZXg6IDE7XCIgOmR1cmF0aW9uPVwiMzAwXCIgQGNoYW5nZT1cIm9udGFiY2hhbmdlXCI+XG5cdFx0XHQ8c3dpcGVyLWl0ZW0gY2xhc3M9XCJzd2lwZXItaXRlbVwiIHYtZm9yPVwiKHRhYiwgaW5kZXgxKSBpbiBuZXdzTGlzdFwiIDprZXk9XCJpbmRleDFcIj5cblx0XHRcdFx0PCEtLSAjaWZkZWYgQVBQLU5WVUUgLS0+XG5cdFx0XHRcdDxsaXN0IGNsYXNzPVwic2Nyb2xsLXYgbGlzdFwiIGVuYWJsZUJhY2tUb1RvcD1cInRydWVcIiBzY3JvbGwteSBsb2FkbW9yZW9mZnNldD1cIjE1XCIgQGxvYWRtb3JlPVwibG9hZE1vcmUoaW5kZXgxKVwiPlxuXHRcdFx0XHRcdDxyZWZyZXNoIGNsYXNzPVwicmVmcmVzaFwiIEByZWZyZXNoPVwib25yZWZyZXNoKGluZGV4MSlcIiBAcHVsbGluZ2Rvd249XCJvbnB1bGxpbmdkb3duXCIgOmRpc3BsYXk9XCJ0YWIucmVmcmVzaGluZyA/ICdzaG93JyA6ICdoaWRlJ1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJlZnJlc2gtdmlld1wiPlxuXHRcdFx0XHRcdFx0XHQ8aW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cInJlZnJlc2gtaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0OnNyYz1cInJlZnJlc2hJY29uXCJcblx0XHRcdFx0XHRcdFx0XHQ6c3R5bGU9XCJ7IHdpZHRoOiB0YWIucmVmcmVzaGluZyB8fCBwdWxsaW5nID8gMCA6ICczMHB4JyB9XCJcblx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJ7ICdyZWZyZXNoLWljb24tYWN0aXZlJzogdGFiLnJlZnJlc2hGbGFnIH1cIlxuXHRcdFx0XHRcdFx0XHQ+PC9pbWFnZT5cblx0XHRcdFx0XHRcdFx0PGxvYWRpbmctaW5kaWNhdG9yIGNsYXNzPVwibG9hZGluZy1pY29uXCIgYW5pbWF0aW5nPVwidHJ1ZVwiIHYtaWY9XCJ0YWIucmVmcmVzaGluZ1wiPjwvbG9hZGluZy1pbmRpY2F0b3I+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibG9hZGluZy10ZXh0XCI+e3sgdGFiLnJlZnJlc2hUZXh0IH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9yZWZyZXNoPlxuXHRcdFx0XHRcdDxjZWxsIHYtZm9yPVwiKG5ld3NpdGVtLCBpbmRleDIpIGluIHRhYi5kYXRhXCIgOmtleT1cIm5ld3NpdGVtLmlkXCI+XG5cdFx0XHRcdFx0XHQ8bWVkaWEtaXRlbSA6b3B0aW9ucz1cIm5ld3NpdGVtXCIgQGNsb3NlPVwiY2xvc2UoaW5kZXgxLCBpbmRleDIpXCIgQGNsaWNrPVwiZ29EZXRhaWwobmV3c2l0ZW0sIGluZGV4MilcIj48L21lZGlhLWl0ZW0+XG5cdFx0XHRcdFx0PC9jZWxsPlxuXHRcdFx0XHRcdDxjZWxsIGNsYXNzPVwibG9hZGluZy1tb3JlXCIgdi1pZj1cInRhYi5pc0xvYWRpbmcgfHwgdGFiLmRhdGEubGVuZ3RoID4gNFwiPlxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJsb2FkaW5nLW1vcmUtdGV4dFwiPnt7IHRhYi5sb2FkaW5nVGV4dCB9fTwvdGV4dD5cblx0XHRcdFx0XHQ8L2NlbGw+XG5cdFx0XHRcdDwvbGlzdD5cblx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtTlZVRSAtLT5cblx0XHRcdFx0PHNjcm9sbC12aWV3IGNsYXNzPVwic2Nyb2xsLXYgbGlzdFwiIGVuYWJsZUJhY2tUb1RvcD1cInRydWVcIiBzY3JvbGwteSBAc2Nyb2xsdG9sb3dlcj1cImxvYWRNb3JlKGluZGV4MSlcIj5cblx0XHRcdFx0XHQ8dmlldyB2LWZvcj1cIihuZXdzaXRlbSwgaW5kZXgyKSBpbiB0YWIuZGF0YVwiIDprZXk9XCJuZXdzaXRlbS5pZFwiPlxuXHRcdFx0XHRcdFx0PG1lZGlhLWl0ZW0gOm9wdGlvbnM9XCJuZXdzaXRlbVwiIEBjbG9zZT1cImNsb3NlKGluZGV4MSwgaW5kZXgyKVwiIEBjbGljaz1cImdvRGV0YWlsKG5ld3NpdGVtKVwiPjwvbWVkaWEtaXRlbT5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJsb2FkaW5nLW1vcmVcIiB2LWlmPVwidGFiLmlzTG9hZGluZyB8fCB0YWIuZGF0YS5sZW5ndGggPiA0XCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImxvYWRpbmctbW9yZS10ZXh0XCI+e3sgdGFiLmxvYWRpbmdUZXh0IH19PC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cblx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XG5cdFx0XHQ8L3N3aXBlci1pdGVtPlxuXHRcdDwvc3dpcGVyPlxuXHQ8L3ZpZXc+XG5cdFx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5pbXBvcnQgbWVkaWFJdGVtIGZyb20gJy4vbmV3cy1pdGVtLm52dWUnO1xuaW1wb3J0IHVuaUljb25zIGZyb20gJ0AvY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZSc7XG4vLyDnvJPlrZjmr4/pobXmnIDlpJpcbmNvbnN0IE1BWF9DQUNIRV9EQVRBID0gMTAwO1xuLy8g57yT5a2Y6aG1562+5pWw6YePXG5jb25zdCBNQVhfQ0FDSEVfUEFHRSA9IDM7XG5cbmNvbnN0IG5ld3NEYXRhID0ge1xuXHRkYXRhMDoge1xuXHRcdGRhdGV0aW1lOiAnNDDliIbpkp/liY0nLFxuXHRcdGFydGljbGVfdHlwZTogMCxcblx0XHR0aXRsZTogJ3VuaS1hcHDooYzkuJrls7DkvJrpopHpopHkuq7nm7jvvIzlvIDlj5HogIXlj43lk43ng63ng4ghJyxcblx0XHRzb3VyY2U6ICdEQ2xvdWQnLFxuXHRcdGNvbW1lbnRfY291bnQ6IDYzOSxcblx0XHRpc1ZpZGVvOiBmYWxzZVxuXHR9LFxuXHRkYXRhMToge1xuXHRcdGRhdGV0aW1lOiAn5LiA5aSp5YmNJyxcblx0XHRhcnRpY2xlX3R5cGU6IDEsXG5cdFx0dGl0bGU6ICdEQ2xvdWTlrozmiJBCMui9ruiejei1hO+8jHVuaS1hcHDpnIfmkrzlj5HluIMhJyxcblx0XHRpbWFnZV91cmw6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi91bmlhcHAvaW1hZ2VzL3NodWlqaWFvLmpwZz9pbWFnZVZpZXcyLzMvdy8yMDAvaC8xMDAvcS85MCcsXG5cdFx0c291cmNlOiAnRENsb3VkJyxcblx0XHRjb21tZW50X2NvdW50OiAxMTM5NSxcblx0XHRpc1ZpZGVvOiBmYWxzZVxuXHR9LFxuXHRkYXRhMjoge1xuXHRcdGRhdGV0aW1lOiAn5LiA5aSp5YmNJyxcblx0XHRhcnRpY2xlX3R5cGU6IDIsXG5cdFx0dGl0bGU6ICfkuK3lm73mioDmnK/nlYzlsI/lpYfov7nvvJpIQnVpbGRlcuW8gOWPkeiAheeqgeegtDIwMOS4hycsXG5cdFx0aW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWctY2RuLXFpbml1LmRjbG91ZC5uZXQuY24vdW5pYXBwL2ltYWdlcy9tdXd1LmpwZz9pbWFnZVZpZXcyLzMvdy8yMDAvaC8xMDAvcS85MCcsXG5cdFx0c291cmNlOiAnRENsb3VkJyxcblx0XHRjb21tZW50X2NvdW50OiAxMTM5NSxcblx0XHRpc1ZpZGVvOiBmYWxzZVxuXHR9LFxuXHRkYXRhMzoge1xuXHRcdGFydGljbGVfdHlwZTogMyxcblx0XHRpbWFnZV9saXN0OiBbXG5cdFx0XHR7XG5cdFx0XHRcdHVybDogJ2h0dHBzOi8vaW1nLWNkbi1xaW5pdS5kY2xvdWQubmV0LmNuL3VuaWFwcC9pbWFnZXMvY2JkLmpwZz9pbWFnZVZpZXcyLzMvdy8yMDAvaC8xMDAvcS85MCcsXG5cdFx0XHRcdHdpZHRoOiA1NjMsXG5cdFx0XHRcdGhlaWdodDogMzE2XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHR1cmw6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi91bmlhcHAvaW1hZ2VzL211d3UuanBnP2ltYWdlVmlldzIvMy93LzIwMC9oLzEwMC9xLzkwJyxcblx0XHRcdFx0d2lkdGg6IDY0MSxcblx0XHRcdFx0aGVpZ2h0OiAzNjBcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdHVybDogJ2h0dHBzOi8vaW1nLWNkbi1xaW5pdS5kY2xvdWQubmV0LmNuL3VuaWFwcC9pbWFnZXMvc2h1aWppYW8uanBnP2ltYWdlVmlldzIvMy93LzIwMC9oLzEwMC9xLzkwJyxcblx0XHRcdFx0d2lkdGg6IDY0MCxcblx0XHRcdFx0aGVpZ2h0OiAzNjBcblx0XHRcdH1cblx0XHRdLFxuXHRcdGRhdGV0aW1lOiAnNeWIhumSn+WJjScsXG5cdFx0dGl0bGU6ICd1bmktYXBwIOaUr+aMgeS9v+eUqCBucG0g5a6J6KOF56ys5LiJ5pa55YyF77yM55Sf5oCB5pu06LaL5Liw5a+MJyxcblx0XHRzb3VyY2U6ICdEQ2xvdWQnLFxuXHRcdGNvbW1lbnRfY291bnQ6IDExLFxuXHRcdGlzVmlkZW86IGZhbHNlXG5cdH0sXG5cdGRhdGE0OiB7XG5cdFx0ZGF0ZXRpbWU6ICcy5bCP5pe25YmNJyxcblx0XHRhcnRpY2xlX3R5cGU6IDQsXG5cdFx0dGl0bGU6ICd1bmktYXBwIOaUr+aMgeWOn+eUn+Wwj+eoi+W6j+iHquWumuS5iee7hOS7tu+8jOabtOW8gOaUvuOAgeabtOiHqueUsScsXG5cdFx0aW1hZ2VfdXJsOiAnaHR0cHM6Ly9pbWctY2RuLXFpbml1LmRjbG91ZC5uZXQuY24vdW5pYXBwL2ltYWdlcy9jYmQuanBnP2ltYWdlVmlldzIvMy93LzIwMC9oLzEwMC9xLzkwJyxcblx0XHRzb3VyY2U6ICdEQ2xvdWQnLFxuXHRcdGNvbW1lbnRfY291bnQ6IDY5LFxuXHRcdGlzVmlkZW86IHRydWVcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRjb21wb25lbnRzOiB7XG5cdFx0bWVkaWFJdGVtLFxuXHRcdHVuaUljb25zXG5cdH0sXG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG5ld3NMaXN0OiBbXSxcblx0XHRcdGNhY2hlVGFiOiBbXSxcblx0XHRcdHRhYkluZGV4OiAwLFxuXHRcdFx0bGFzdEluZGV4OiAwLCAvL+S4iuS4gOasoeeahOWdkOagh1xuXHRcdFx0dGFiQmFyczogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ+WFs+azqCcsXG5cdFx0XHRcdFx0aWQ6ICdndWFuemh1J1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ+aOqOiNkCcsXG5cdFx0XHRcdFx0aWQ6ICd0dWlqaWFuJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0bmFtZTogJ+S9k+iCsicsXG5cdFx0XHRcdFx0aWQ6ICd0aXl1J1xuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdFx0c2Nyb2xsSW50bzogJycsXG5cdFx0XHRzaG93VGlwczogZmFsc2UsXG5cdFx0XHRuYXZpZ2F0ZUZsYWc6IGZhbHNlLFxuXHRcdFx0cHVsbGluZzogZmFsc2UsXG5cdFx0XHRyZWZyZXNoSWNvbjpcblx0XHRcdFx0J2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBREFBQUFBd0NBTUFBQUJnM0FtMUFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBQjVRVEZSRmNIQnczTnpjdDdlMzl2YjJ5Y25KaW9xSzdlM3RwcWFtMjl2Yi8vLy9EOG9LN3dBQUFBcDBVazVULy8vLy8vLy8vLy8vQUxMTUxNOEFBQUJ4U1VSQlZIamE3SlZCRG9BZ0RBU3JqcWovLzdDSkJpOTBpeVllT0hUUE13bUZackhqWXl5RllZVXkxYndVWnF0SklZVnhoZjFhNnUwUjdpVXZXc0NjckV0d0pIcDhNd01kdmgyYW1IZHVpWkQzcnBXSWQ5K0JnUGQ3Q2MyTElrUHlxdmxRdkt4S0JKLy9Rd3EvQ2FjQUF3RFV2MGEwWXVLaHpnQUFBQUJKUlU1RXJrSmdnZz09J1xuXHRcdH07XG5cdH0sXG5cdG9uTG9hZCgpIHtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdHRoaXMudGFiQmFycy5mb3JFYWNoKHRhYkJhciA9PiB7XG5cdFx0XHRcdHRoaXMubmV3c0xpc3QucHVzaCh7XG5cdFx0XHRcdFx0ZGF0YTogW10sXG5cdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZSxcblx0XHRcdFx0XHRyZWZyZXNoVGV4dDogJycsXG5cdFx0XHRcdFx0bG9hZGluZ1RleHQ6ICfliqDovb3mm7TlpJouLi4nXG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLmdldExpc3QoMCk7XG5cdFx0fSwgMzUwKTtcblx0fSxcblx0bWV0aG9kczoge1xuXHRcdGlzU2Nyb2xsKGluZGV4KSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50YWJJbmRleCA9PSBpbmRleDtcblx0XHR9LFxuXHRcdC8v5paw6Ze76K+m5oOFXG5cdFx0Z29EZXRhaWwoaXRlbSwgaW5kZXgpIHtcblx0XHRcdGxldCBkYXRhID0ge1xuXHRcdFx0XHRpZDogaW5kZXgsXG5cdFx0XHRcdHRpdGxlOiBpdGVtLnRpdGxlLFxuXHRcdFx0XHRhdXRob3I6ICfor6bmg4UnLFxuXHRcdFx0XHR0aW1lOiBpdGVtLmRhdGV0aW1lXG5cdFx0XHR9O1xuXHRcdC8vXHRsZXQgdXJsID0gaXRlbS5pc1ZpZGVvID09IHRydWUgPyAndmlkZW9EZXRhaWxzJyA6ICdkZXRhaWxzJztcblx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiBgL3BhZ2VzL25ldy9kZXRhaWxzP2RhdGE9JHtKU09OLnN0cmluZ2lmeShkYXRhKX1gXG5cdFx0XHR9KTtcblx0XHR9LFxuXHRcdGdldExpc3QoaW5kZXgpIHtcblx0XHRcdGxldCBhY3RpdmVUYWIgPSB0aGlzLm5ld3NMaXN0W2luZGV4XTtcblx0XHRcdGxldCBsaXN0ID0gW107XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG5cdFx0XHRcdGxldCBpdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgbmV3c0RhdGFbJ2RhdGEnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSldKTtcblx0XHRcdFx0aXRlbS5pZCA9IHRoaXMubmV3R3VpZCgpO1xuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0XHRhY3RpdmVUYWIuZGF0YSA9IGFjdGl2ZVRhYi5kYXRhLmNvbmNhdChsaXN0KTtcblx0XHR9LFxuXHRcdGNsb3NlKGluZGV4MSwgaW5kZXgyKSB7XG5cdFx0XHR1bmkuc2hvd01vZGFsKHtcblx0XHRcdFx0Y29udGVudDogJ+aYr+WQpuWIoOmZpOacrOadoeS/oeaBr++8nycsXG5cdFx0XHRcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHR0aGlzLm5ld3NMaXN0W2luZGV4MV0uZGF0YS5zcGxpY2UoaW5kZXgyLCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sXG5cdFx0bG9hZE1vcmUoZSkge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuZ2V0TGlzdCh0aGlzLnRhYkluZGV4KTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fSxcblx0XHRvbnRhYnRhcChlKSB7XG5cdFx0XHRsZXQgaW5kZXggPSBlLnRhcmdldC5kYXRhc2V0LmN1cnJlbnQgfHwgZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcblx0XHRcdHRoaXMuaXNMZWZ0ID0gdGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xuXHRcdH0sXG5cdFx0b250YWJjaGFuZ2UoZSkge1xuXHRcdFx0bGV0IGluZGV4ID0gZS50YXJnZXQuY3VycmVudCB8fCBlLmRldGFpbC5jdXJyZW50O1xuXHRcdFx0dGhpcy5zd2l0Y2hUYWIoaW5kZXgpO1xuXHRcdH0sXG5cdFx0c3dpdGNoVGFiKGluZGV4KSB7XG5cdFx0XHRpZiAodGhpcy5uZXdzTGlzdFtpbmRleF0uZGF0YS5sZW5ndGggPT09IDApIHtcblx0XHRcdFx0dGhpcy5nZXRMaXN0KGluZGV4KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMudGFiSW5kZXggPT09IGluZGV4KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8g57yT5a2YIHRhYklkXG5cdFx0XHRpZiAodGhpcy5uZXdzTGlzdFt0aGlzLnRhYkluZGV4XS5kYXRhLmxlbmd0aCA+IE1BWF9DQUNIRV9EQVRBKSB7XG5cdFx0XHRcdGxldCBpc0V4aXN0ID0gdGhpcy5jYWNoZVRhYi5pbmRleE9mKHRoaXMudGFiSW5kZXgpO1xuXHRcdFx0XHRpZiAoaXNFeGlzdCA8IDApIHtcblx0XHRcdFx0XHR0aGlzLmNhY2hlVGFiLnB1c2godGhpcy50YWJJbmRleCk7XG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcImNhY2hlIGluZGV4OjogXCIgKyB0aGlzLnRhYkluZGV4KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnRhYkluZGV4ID0gaW5kZXg7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnRhYkluZGV4KTtcblx0XHRcdGNvbnNvbGUubG9nKHRoaXMubGFzdEluZGV4KTtcblxuXHRcdFx0aWYgKHRoaXMudGFiSW5kZXggPCA1ICYmIHRoaXMubGFzdEluZGV4IDwgdGhpcy50YWJJbmRleCkge1xuXHRcdFx0XHR0aGlzLmxhc3RJbmRleCA9IHRoaXMudGFiSW5kZXg7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH0gZWxzZSBpZiAoaW5kZXggPj0gNSkge1xuXHRcdFx0XHR0aGlzLnNjcm9sbEludG8gPSB0aGlzLnRhYkJhcnNbaW5kZXggLSA1XS5pZDtcblx0XHRcdH1cblx0XHRcdC8vIHRoaXMuc2Nyb2xsSW50byA9IHRoaXMudGFiQmFyc1tpbmRleF0uaWQ7XG5cdFx0XHR0aGlzLmxhc3RJbmRleCA9IHRoaXMudGFiSW5kZXg7XG5cdFx0XHQvLyDph4rmlL4gdGFiSWRcblx0XHRcdGlmICh0aGlzLmNhY2hlVGFiLmxlbmd0aCA+IE1BWF9DQUNIRV9QQUdFKSB7XG5cdFx0XHRcdGxldCBjYWNoZUluZGV4ID0gdGhpcy5jYWNoZVRhYlswXTtcblx0XHRcdFx0dGhpcy5jbGVhclRhYkRhdGEoY2FjaGVJbmRleCk7XG5cdFx0XHRcdHRoaXMuY2FjaGVUYWIuc3BsaWNlKDAsIDEpO1xuXHRcdFx0XHQvL2NvbnNvbGUubG9nKFwicmVtb3ZlIGNhY2hlIGluZGV4OjogXCIgKyBjYWNoZUluZGV4KTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGNsZWFyVGFiRGF0YShlKSB7XG5cdFx0XHR0aGlzLm5ld3NMaXN0W2VdLmRhdGEubGVuZ3RoID0gMDtcblx0XHRcdHRoaXMubmV3c0xpc3RbZV0ubG9hZGluZ1RleHQgPSAn5Yqg6L295pu05aSaLi4uJztcblx0XHR9LFxuXHRcdHJlZnJlc2hEYXRhKCkge30sXG5cdFx0b25yZWZyZXNoKGUpIHtcblx0XHRcdHZhciB0YWIgPSB0aGlzLm5ld3NMaXN0W3RoaXMudGFiSW5kZXhdO1xuXHRcdFx0aWYgKCF0YWIucmVmcmVzaEZsYWcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGFiLnJlZnJlc2hpbmcgPSB0cnVlO1xuXHRcdFx0dGFiLnJlZnJlc2hUZXh0ID0gJ+ato+WcqOWIt+aWsC4uLic7XG5cblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZnJlc2hEYXRhKCk7XG5cdFx0XHRcdHRoaXMucHVsbGluZyA9IHRydWU7XG5cdFx0XHRcdHRhYi5yZWZyZXNoaW5nID0gZmFsc2U7XG5cdFx0XHRcdHRhYi5yZWZyZXNoRmxhZyA9IGZhbHNlO1xuXHRcdFx0XHR0YWIucmVmcmVzaFRleHQgPSAn5bey5Yi35pawJztcblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gVE9ETyBmaXggaW9z5ZKMQW5kcm9pZCDliqjnlLvml7bpl7Tnm7jlj43pl67pophcblx0XHRcdFx0XHR0aGlzLnB1bGxpbmcgPSBmYWxzZTtcblx0XHRcdFx0fSwgNTAwKTtcblx0XHRcdH0sIDIwMDApO1xuXHRcdH0sXG5cdFx0b25wdWxsaW5nZG93bihlKSB7XG5cdFx0XHR2YXIgdGFiID0gdGhpcy5uZXdzTGlzdFt0aGlzLnRhYkluZGV4XTtcblx0XHRcdGlmICh0YWIucmVmcmVzaGluZyB8fCB0aGlzLnB1bGxpbmcpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0aWYgKE1hdGguYWJzKGUucHVsbGluZ0Rpc3RhbmNlKSA+IE1hdGguYWJzKGUudmlld0hlaWdodCkpIHtcblx0XHRcdFx0dGFiLnJlZnJlc2hGbGFnID0gdHJ1ZTtcblx0XHRcdFx0dGFiLnJlZnJlc2hUZXh0ID0gJ+mHiuaUvueri+WNs+WIt+aWsCc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0YWIucmVmcmVzaEZsYWcgPSBmYWxzZTtcblx0XHRcdFx0dGFiLnJlZnJlc2hUZXh0ID0gJ+S4i+aLieWPr+S7peWIt+aWsCc7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRuZXdHdWlkKCkge1xuXHRcdFx0bGV0IHM0ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAoKDY1NTM2ICogKDEgKyBNYXRoLnJhbmRvbSgpKSkgfCAwKS50b1N0cmluZygxNikuc3Vic3RyaW5nKDEpO1xuXHRcdFx0fTtcblx0XHRcdHJldHVybiAoczQoKSArIHM0KCkgKyAnLScgKyBzNCgpICsgJy00JyArIHM0KCkuc3Vic3RyKDAsIDMpICsgJy0nICsgczQoKSArICctJyArIHM0KCkgKyBzNCgpICsgczQoKSkudG9VcHBlckNhc2UoKTtcblx0XHR9XG5cdH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuLmltZ3BsYXkge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA0MHB4O1xufVxuLmltZ3BsYXkgLmljb24ge1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0Zm9udC1zaXplOiAxMjBycHg7XG59XG4vKiDlpLTmnaHlsI/nqIvluo/nu4Tku7blhoXkuI3og73lvJXlhaXlrZfkvZMgKi9cbi8qICNpZmRlZiBNUC1UT1VUSUFPICovXG5AZm9udC1mYWNlIHtcblx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG5cdHNyYzogdXJsKCd+QC9zdGF0aWMvdW5pLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cbi8qICNlbmRpZiAqL1xuXG4vKiDpobbpg6jmoIfpopjmoI8gKi9cbi5wYWdlLWhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlYzcwNmI7XG59XG4ucGFnZS1oZWFkZXItd3JhcHBlciB7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHQvKiAjaWZkZWYgQVBQLVBMVVMgKi9cblx0aGVpZ2h0OiB2YXIoLS1zdGF0dXMtYmFyLWhlaWdodCk7XG5cdC8qICNlbmRpZiAqL1xuXHRwYWRkaW5nOiAyMHVweCAxMHVweCAxNXVweCAxMHVweDtcblx0LyogYmFja2dyb3VuZC1jb2xvcjogI2VjNzA2YjsgKi9cblx0LyogbWFyZ2luLXRvcDogMzBweDsgKi9cbn1cblxuLnBhZ2UtaGVhZGVyLWxlZnQge1xuXHRvcGFjaXR5OiAwLjk7XG5cdGZsb2F0OiBsZWZ0O1xuXHRwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnBhZ2UtaGVhZGVyLWNlbnRlciB7XG5cdGZsZXg6IDE7XG5cdHBhZGRpbmc6IDBweCAzMHB4IDAgMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VhcmNoLWlucHV0IHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjOTk5OTk5O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGxpbmUtaGVpZ2h0OiA3MHVweDtcblx0Ym9yZGVyLXJhZGl1czogMTAwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHBhZGRpbmctdG9wOiAxMHVweDtcblx0cGFkZGluZy1ib3R0b206IDEwdXB4O1xuXHRtYXJnaW4tdG9wOiA2MHVweDtcbn1cblxuLnBhZ2UtaGVhZGVyLXJpZ2h0IHtcblx0d2lkdGg6IDYzdXB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmbG9hdDogcmlnaHQ7XG5cdHBhZGRpbmctdG9wOiA2MHVweDtcbn1cblxuLmNvbnRyaWJ1dGUtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMzJ1cHg7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG4vKiAjaWZuZGVmIEFQUC1QTFVTICovXG5wYWdlIHtcblx0d2lkdGg6IDEwMCU7XG5cdG1pbi1oZWlnaHQ6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi8qICNlbmRpZiAqL1xuXG4udGFicyB7XG5cdGZsZXg6IDE7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG5cdC8qICNpZmRlZiBNUC1BTElQQVkgfHwgTVAtQkFJRFUgKi9cblx0aGVpZ2h0OiAxMDB2aDtcblx0LyogI2VuZGlmICovXG59XG5cbi5zY3JvbGwtaCB7XG5cdHdpZHRoOiA3NTBycHg7XG5cdGhlaWdodDogODBycHg7XG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdC8qICNpZm5kZWYgQVBQLVBMVVMgKi9cblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0LyogI2VuZGlmICovXG5cdC8qIGZsZXgtd3JhcDogbm93cmFwOyAqL1xuXHQvKiBib3JkZXItY29sb3I6ICNjY2NjY2M7XG5cdFx0Ym9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4OyAqL1xufVxuXG4ubGluZS1oIHtcblx0aGVpZ2h0OiAxcnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xufVxuXG4udW5pLXRhYi1pdGVtIHtcblx0d2lkdGg6MzMlO1xuXHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0LyogI2VuZGlmICovXG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHRwYWRkaW5nLWxlZnQ6IDM0cnB4O1xuXHRwYWRkaW5nLXJpZ2h0OiAzNHJweDtcblxufVxuXG4udW5pLXRhYi1pdGVtLXRpdGxlIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGNvbG9yOiAjNTU1O1xuXHRmb250LXNpemU6IDMwcnB4O1xuXHRoZWlnaHQ6IDgwcnB4O1xuXHRsaW5lLWhlaWdodDogODBycHg7XG5cdGZsZXgtd3JhcDogbm93cmFwO1xuXHQvKiAjaWZuZGVmIEFQUC1QTFVTICovXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdC8qICNlbmRpZiAqL1xufVxuXG4udW5pLXRhYi1pdGVtLXRpdGxlLWFjdGl2ZSB7XG5cdGNvbG9yOiAjZWM3MDZiO1xufVxuXG4udW5kZXJsaW5lYm94IHtcblx0aGVpZ2h0OiAzcHg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRyYW5zaXRpb246IDAuNXM7XG5cdGhlaWdodDogNHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWM3MDZiO1xuXHRtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi51bmRlcmxpbmVib3gtYWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbn1cbi5zd2lwZXItYm94IHtcblx0ZmxleDogMTtcbn1cblxuLnN3aXBlci1pdGVtIHtcblx0ZmxleDogMTtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLnNjcm9sbC12IHtcblx0ZmxleDogMTtcblx0LyogI2lmbmRlZiBNUC1BTElQQVkgKi9cblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0LyogI2VuZGlmICovXG5cdHdpZHRoOiA3NTBycHg7XG59XG5cbi51cGRhdGUtdGlwcyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0bGVmdDogMDtcblx0dG9wOiA0MXB4O1xuXHRyaWdodDogMDtcblx0cGFkZGluZy10b3A6IDVweDtcblx0cGFkZGluZy1ib3R0b206IDVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZkZGQ5Yjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVwZGF0ZS10aXBzLXRleHQge1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiAjZmZmZmZmO1xufVxuXG4ucmVmcmVzaCB7XG5cdHdpZHRoOiA3NTBycHg7XG5cdGhlaWdodDogNjRweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWZyZXNoLXZpZXcge1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRmbGV4LXdyYXA6IG5vd3JhcDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yZWZyZXNoLWljb24ge1xuXHR3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xuXHR0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG5cdHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuXHR0cmFuc2Zvcm0tb3JpZ2luOiAxNXB4IDE1cHg7XG59XG5cbi5yZWZyZXNoLWljb24tYWN0aXZlIHtcblx0dHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmxvYWRpbmctaWNvbiB7XG5cdHdpZHRoOiAyMHB4O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuXHRjb2xvcjogIzk5OTk5OTtcbn1cblxuLmxvYWRpbmctdGV4dCB7XG5cdG1hcmdpbi1sZWZ0OiAycHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Y29sb3I6ICM5OTk5OTk7XG59XG5cbi5sb2FkaW5nLW1vcmUge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDEwcHg7XG5cdHBhZGRpbmctYm90dG9tOiAxMHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FkaW5nLW1vcmUtdGV4dCB7XG5cdGZvbnQtc2l6ZTogMjhycHg7XG5cdGNvbG9yOiAjOTk5O1xufVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
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
/* 33 */
/*!***************************************************************************************!*\
  !*** /Users/duchengjie/Bosc-Voice-Assistant/voice-assistant/pages/new/news-item.nvue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./news-item.nvue?vue&type=template&id=41af1f6e& */ 34);\n/* harmony import */ var _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news-item.nvue?vue&type=script&lang=js& */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./news-item.nvue?vue&type=style&index=0&lang=css& */ 38).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./news-item.nvue?vue&type=style&index=0&lang=css& */ 38).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _news_item_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"0e96acfb\",\n  false,\n  _news_item_nvue_vue_type_template_id_41af1f6e___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/new/news-item.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUg7QUFDdkg7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDJEQUFtRDtBQUN2RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsMkRBQW1EO0FBQzVHOztBQUVBOztBQUVBO0FBQzZNO0FBQzdNLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUseUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDFhZjFmNmUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmV3cy1pdGVtLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9uZXdzLWl0ZW0ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjBlOTZhY2ZiXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL25ldy9uZXdzLWl0ZW0ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///33\n");

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
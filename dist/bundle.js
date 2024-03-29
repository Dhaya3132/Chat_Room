/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\r\n\r\n\r\n\r\nconst firebaseConfig = {\r\n\r\n    \r\n\r\n};\r\n\r\n(0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\r\n\r\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)();\r\n\r\nconst collectionReference = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(db, 'chat_room');\r\n\r\n//adding document to the firebase.\r\nconst newchat = document.querySelector('.new-chat');\r\nnewchat.addEventListener(\"submit\", (e) => {\r\n    e.preventDefault();\r\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(collectionReference, {\r\n        Message: newchat.message.value,\r\n        Username: newchat.name.value,\r\n    })\r\n    newchat.reset()\r\n});\r\n\r\n//getting document from fire.\r\nconst chatlist = document.querySelector('.chat-list');\r\n(0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(collectionReference).then((snapshot) => {\r\n    const datas = [];\r\n    snapshot.docs.forEach((doc) => {\r\n        datas.push({ ...doc.data() })\r\n    })\r\n    datas.forEach((dataui) => {\r\n        const html =\r\n            `\r\n            <li>\r\n                <h5>${dataui.Message}</h5>\r\n                <p>${dataui.Username}</p>\r\n            </li>\r\n       `;\r\n\r\n        chatlist.innerHTML += html;\r\n\r\n    });\r\n}).catch((err) => {\r\n    console.log(err.Message);\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://chat_room/./src/index.js?");

/***/ }),

/***/ "./node_modules/firebase/app/dist/esm/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
  \*********************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Workspace\\\\Chat_Room\\\\node_modules\\\\firebase\\\\app\\\\dist\\\\esm\\\\index.esm.js'\");\n\n//# sourceURL=webpack://chat_room/./node_modules/firebase/app/dist/esm/index.esm.js?");

/***/ }),

/***/ "./node_modules/firebase/firestore/dist/esm/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/firebase/firestore/dist/esm/index.esm.js ***!
  \***************************************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Workspace\\\\Chat_Room\\\\node_modules\\\\firebase\\\\firestore\\\\dist\\\\esm\\\\index.esm.js'\");\n\n//# sourceURL=webpack://chat_room/./node_modules/firebase/firestore/dist/esm/index.esm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
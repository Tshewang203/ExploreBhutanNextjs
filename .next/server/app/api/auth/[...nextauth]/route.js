"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var D_Tshewang_Lhamo_02220251_Project01_Copy_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"D:\\\\Tshewang Lhamo\\\\02220251_Project01 - Copy\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: D_Tshewang_Lhamo_02220251_Project01_Copy_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1EJTNBJTVDVHNoZXdhbmclMjBMaGFtbyU1QzAyMjIwMjUxX1Byb2plY3QwMSUyMC0lMjBDb3B5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1EJTNBJTVDVHNoZXdhbmclMjBMaGFtbyU1QzAyMjIwMjUxX1Byb2plY3QwMSUyMC0lMjBDb3B5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzJDO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmh1dGFuLXRyYXZlbC8/OWY0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJEOlxcXFxUc2hld2FuZyBMaGFtb1xcXFwwMjIyMDI1MV9Qcm9qZWN0MDEgLSBDb3B5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJEOlxcXFxUc2hld2FuZyBMaGFtb1xcXFwwMjIyMDI1MV9Qcm9qZWN0MDEgLSBDb3B5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.js\");\n/* harmony import */ var _models_Registration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Registration */ \"(rsc)/./src/models/Registration.js\");\n// src/app/api/auth/[...nextauth]/route.js\n\n\n\n\n\nconst ADMIN_USERNAME = process.env.ADMIN_USERNAME || \"admin\";\nconst ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || \"$2b$10$sHscwNjG0kDUwQE06eUPIOt59HnOEu3Ae4Dd7cOYrEHRZ6gnJzxeW\";\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"Credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"you@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.username || !credentials?.password) {\n                    throw new Error(\"Missing username or password\");\n                }\n                // Admin login\n                if (credentials.username === ADMIN_USERNAME) {\n                    const isAdmin = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compare(credentials.password, ADMIN_PASSWORD_HASH);\n                    if (!isAdmin) throw new Error(\"Invalid credentials\");\n                    return {\n                        id: \"admin-id\",\n                        name: \"Administrator\",\n                        email: ADMIN_USERNAME,\n                        role: \"admin\"\n                    };\n                }\n                // Regular user login\n                await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                const user = await _models_Registration__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                    email: credentials.username\n                });\n                if (!user) throw new Error(\"No user found with that email\");\n                const isValidUser = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compare(credentials.password, user.password);\n                if (!isValidUser) throw new Error(\"Invalid credentials\");\n                return {\n                    id: user._id.toString(),\n                    name: `${user.firstName} ${user.lastName}`,\n                    email: user.email,\n                    role: \"user\"\n                };\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\",\n        error: \"/login?error\"\n    },\n    callbacks: {\n        async jwt ({ token, user }) {\n            if (user) {\n                token.role = user.role;\n                token.name = user.name;\n                token.email = user.email;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.user = {\n                name: token.name,\n                email: token.email,\n                id: token.id,\n                role: token.role\n            };\n            return session;\n        },\n        async redirect ({ url, baseUrl, token }) {\n            if (token?.role === \"admin\") return `${baseUrl}/admin`;\n            return `${baseUrl}/home`;\n        }\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n// Export HTTP method handlers for App Router\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\nconst GET = handler;\nconst POST = handler;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMENBQTBDO0FBRVQ7QUFDaUM7QUFDcEM7QUFDVTtBQUNTO0FBRWpELE1BQU1LLGlCQUFpQkMsUUFBUUMsR0FBRyxDQUFDRixjQUFjLElBQUk7QUFDckQsTUFBTUcsc0JBQ0pGLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CLElBQy9CO0FBRUssTUFBTUMsY0FBYztJQUN6QkMsV0FBVztRQUNUVCwyRUFBbUJBLENBQUM7WUFDbEJVLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBUUMsYUFBYTtnQkFBa0I7Z0JBQ3pFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVztnQkFDekIsSUFBSSxDQUFDQSxhQUFhQyxZQUFZLENBQUNELGFBQWFLLFVBQVU7b0JBQ3BELE1BQU0sSUFBSUUsTUFBTTtnQkFDbEI7Z0JBRUEsY0FBYztnQkFDZCxJQUFJUCxZQUFZQyxRQUFRLEtBQUtSLGdCQUFnQjtvQkFDM0MsTUFBTWUsVUFBVSxNQUFNbEIsd0RBQWMsQ0FDbENVLFlBQVlLLFFBQVEsRUFDcEJUO29CQUVGLElBQUksQ0FBQ1ksU0FBUyxNQUFNLElBQUlELE1BQU07b0JBRTlCLE9BQU87d0JBQ0xHLElBQUk7d0JBQ0pYLE1BQU07d0JBQ05ZLE9BQU9sQjt3QkFDUG1CLE1BQU07b0JBQ1I7Z0JBQ0Y7Z0JBRUEscUJBQXFCO2dCQUNyQixNQUFNckIsMERBQVNBO2dCQUNmLE1BQU1zQixPQUFPLE1BQU1yQiw0REFBWUEsQ0FBQ3NCLE9BQU8sQ0FBQztvQkFBRUgsT0FBT1gsWUFBWUMsUUFBUTtnQkFBQztnQkFDdEUsSUFBSSxDQUFDWSxNQUFNLE1BQU0sSUFBSU4sTUFBTTtnQkFFM0IsTUFBTVEsY0FBYyxNQUFNekIsd0RBQWMsQ0FDdENVLFlBQVlLLFFBQVEsRUFDcEJRLEtBQUtSLFFBQVE7Z0JBRWYsSUFBSSxDQUFDVSxhQUFhLE1BQU0sSUFBSVIsTUFBTTtnQkFFbEMsT0FBTztvQkFDTEcsSUFBSUcsS0FBS0csR0FBRyxDQUFDQyxRQUFRO29CQUNyQmxCLE1BQU0sQ0FBQyxFQUFFYyxLQUFLSyxTQUFTLENBQUMsQ0FBQyxFQUFFTCxLQUFLTSxRQUFRLENBQUMsQ0FBQztvQkFDMUNSLE9BQU9FLEtBQUtGLEtBQUs7b0JBQ2pCQyxNQUFNO2dCQUNSO1lBQ0Y7UUFDRjtLQUNEO0lBRURRLE9BQU87UUFDTEMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFFQUMsV0FBVztRQUNULE1BQU1DLEtBQUksRUFBRUMsS0FBSyxFQUFFWixJQUFJLEVBQUU7WUFDdkIsSUFBSUEsTUFBTTtnQkFDUlksTUFBTWIsSUFBSSxHQUFHQyxLQUFLRCxJQUFJO2dCQUN0QmEsTUFBTTFCLElBQUksR0FBR2MsS0FBS2QsSUFBSTtnQkFDdEIwQixNQUFNZCxLQUFLLEdBQUdFLEtBQUtGLEtBQUs7Z0JBQ3hCYyxNQUFNZixFQUFFLEdBQUdHLEtBQUtILEVBQUU7WUFDcEI7WUFDQSxPQUFPZTtRQUNUO1FBRUEsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUVELEtBQUssRUFBRTtZQUM5QkMsUUFBUWIsSUFBSSxHQUFHO2dCQUNiZCxNQUFNMEIsTUFBTTFCLElBQUk7Z0JBQ2hCWSxPQUFPYyxNQUFNZCxLQUFLO2dCQUNsQkQsSUFBSWUsTUFBTWYsRUFBRTtnQkFDWkUsTUFBTWEsTUFBTWIsSUFBSTtZQUNsQjtZQUNBLE9BQU9jO1FBQ1Q7UUFFQSxNQUFNQyxVQUFTLEVBQUVDLEdBQUcsRUFBRUMsT0FBTyxFQUFFSixLQUFLLEVBQUU7WUFDcEMsSUFBSUEsT0FBT2IsU0FBUyxTQUFTLE9BQU8sQ0FBQyxFQUFFaUIsUUFBUSxNQUFNLENBQUM7WUFDdEQsT0FBTyxDQUFDLEVBQUVBLFFBQVEsS0FBSyxDQUFDO1FBQzFCO0lBQ0Y7SUFFQUgsU0FBUztRQUNQSSxVQUFVO1FBQ1ZDLFFBQVEsS0FBSyxLQUFLO0lBQ3BCO0lBRUFDLFFBQVF0QyxRQUFRQyxHQUFHLENBQUNzQyxlQUFlO0FBQ3JDLEVBQUU7QUFFRiw2Q0FBNkM7QUFDN0MsTUFBTUMsVUFBVTlDLGdEQUFRQSxDQUFDUztBQUNsQixNQUFNc0MsTUFBTUQsUUFBUTtBQUNwQixNQUFNRSxPQUFPRixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmh1dGFuLXRyYXZlbC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcz8yMzJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1xuXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvbGliL2RiQ29ubmVjdCc7XG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJ0AvbW9kZWxzL1JlZ2lzdHJhdGlvbic7XG5cbmNvbnN0IEFETUlOX1VTRVJOQU1FID0gcHJvY2Vzcy5lbnYuQURNSU5fVVNFUk5BTUUgfHwgJ2FkbWluJztcbmNvbnN0IEFETUlOX1BBU1NXT1JEX0hBU0ggPVxuICBwcm9jZXNzLmVudi5BRE1JTl9QQVNTV09SRF9IQVNIIHx8XG4gICckMmIkMTAkc0hzY3dOakcwa0RVd1FFMDZlVVBJT3Q1OUhuT0V1M0FlNERkN2NPWXJFSFJaNmduSnp4ZVcnO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAndGV4dCcsIHBsYWNlaG9sZGVyOiAneW91QGV4YW1wbGUuY29tJyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9LFxuICAgICAgfSxcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy51c2VybmFtZSB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIHVzZXJuYW1lIG9yIHBhc3N3b3JkJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZG1pbiBsb2dpblxuICAgICAgICBpZiAoY3JlZGVudGlhbHMudXNlcm5hbWUgPT09IEFETUlOX1VTRVJOQU1FKSB7XG4gICAgICAgICAgY29uc3QgaXNBZG1pbiA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgICBBRE1JTl9QQVNTV09SRF9IQVNIXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIWlzQWRtaW4pIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcmVkZW50aWFscycpO1xuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiAnYWRtaW4taWQnLFxuICAgICAgICAgICAgbmFtZTogJ0FkbWluaXN0cmF0b3InLFxuICAgICAgICAgICAgZW1haWw6IEFETUlOX1VTRVJOQU1FLFxuICAgICAgICAgICAgcm9sZTogJ2FkbWluJyxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVndWxhciB1c2VyIGxvZ2luXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgUmVnaXN0cmF0aW9uLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMudXNlcm5hbWUgfSk7XG4gICAgICAgIGlmICghdXNlcikgdGhyb3cgbmV3IEVycm9yKCdObyB1c2VyIGZvdW5kIHdpdGggdGhhdCBlbWFpbCcpO1xuXG4gICAgICAgIGNvbnN0IGlzVmFsaWRVc2VyID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoXG4gICAgICAgICAgY3JlZGVudGlhbHMucGFzc3dvcmQsXG4gICAgICAgICAgdXNlci5wYXNzd29yZFxuICAgICAgICApO1xuICAgICAgICBpZiAoIWlzVmFsaWRVc2VyKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JlZGVudGlhbHMnKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlkOiB1c2VyLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgIG5hbWU6IGAke3VzZXIuZmlyc3ROYW1lfSAke3VzZXIubGFzdE5hbWV9YCxcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICByb2xlOiAndXNlcicsXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2xvZ2luJyxcbiAgICBlcnJvcjogJy9sb2dpbj9lcnJvcicsXG4gIH0sXG5cbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIgfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4ucm9sZSA9IHVzZXIucm9sZTtcbiAgICAgICAgdG9rZW4ubmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgdG9rZW4uZW1haWwgPSB1c2VyLmVtYWlsO1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcblxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBzZXNzaW9uLnVzZXIgPSB7XG4gICAgICAgIG5hbWU6IHRva2VuLm5hbWUsXG4gICAgICAgIGVtYWlsOiB0b2tlbi5lbWFpbCxcbiAgICAgICAgaWQ6IHRva2VuLmlkLFxuICAgICAgICByb2xlOiB0b2tlbi5yb2xlLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG5cbiAgICBhc3luYyByZWRpcmVjdCh7IHVybCwgYmFzZVVybCwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuPy5yb2xlID09PSAnYWRtaW4nKSByZXR1cm4gYCR7YmFzZVVybH0vYWRtaW5gO1xuICAgICAgcmV0dXJuIGAke2Jhc2VVcmx9L2hvbWVgO1xuICAgIH0sXG4gIH0sXG5cbiAgc2Vzc2lvbjoge1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgICBtYXhBZ2U6IDI0ICogNjAgKiA2MCxcbiAgfSxcblxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbn07XG5cbi8vIEV4cG9ydCBIVFRQIG1ldGhvZCBoYW5kbGVycyBmb3IgQXBwIFJvdXRlclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKGF1dGhPcHRpb25zKTtcbmV4cG9ydCBjb25zdCBHRVQgPSBoYW5kbGVyO1xuZXhwb3J0IGNvbnN0IFBPU1QgPSBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImRiQ29ubmVjdCIsIlJlZ2lzdHJhdGlvbiIsIkFETUlOX1VTRVJOQU1FIiwicHJvY2VzcyIsImVudiIsIkFETUlOX1BBU1NXT1JEX0hBU0giLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsIkVycm9yIiwiaXNBZG1pbiIsImNvbXBhcmUiLCJpZCIsImVtYWlsIiwicm9sZSIsInVzZXIiLCJmaW5kT25lIiwiaXNWYWxpZFVzZXIiLCJfaWQiLCJ0b1N0cmluZyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwic2Vzc2lvbiIsInJlZGlyZWN0IiwidXJsIiwiYmFzZVVybCIsInN0cmF0ZWd5IiwibWF4QWdlIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.js":
/*!******************************!*\
  !*** ./src/lib/dbConnect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQjtRQUNsQjtRQUVBTixPQUFPRyxPQUFPLEdBQUdSLHVEQUFnQixDQUFDQyxhQUFhUyxNQUFNRyxJQUFJLENBQUMsQ0FBQ2I7WUFDekQsT0FBT0E7UUFDVDtJQUNGO0lBRUEsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHO1FBQ2pCLE1BQU1NO0lBQ1I7SUFFQSxPQUFPVCxPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaHV0YW4tdHJhdmVsLy4vc3JjL2xpYi9kYkNvbm5lY3QuanM/OGE1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuXHJcbmlmICghTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52Jyk7XHJcbn1cclxuXHJcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XHJcblxyXG5pZiAoIWNhY2hlZCkge1xyXG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkYkNvbm5lY3QoKSB7XHJcbiAgaWYgKGNhY2hlZC5jb25uKSB7XHJcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XHJcbiAgfVxyXG5cclxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XHJcbiAgICBjb25zdCBvcHRzID0ge1xyXG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcclxuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XHJcbiAgICB0aHJvdyBlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/Registration.js":
/*!************************************!*\
  !*** ./src/models/Registration.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    firstName: {\n        type: String,\n        required: [\n            true,\n            \"First name is required\"\n        ],\n        trim: true\n    },\n    lastName: {\n        type: String,\n        required: [\n            true,\n            \"Last name is required\"\n        ],\n        trim: true\n    },\n    email: {\n        type: String,\n        required: [\n            true,\n            \"Email is required\"\n        ],\n        unique: true,\n        lowercase: true,\n        trim: true,\n        match: [\n            /.+@.+\\..+/,\n            \"Please enter a valid email address\"\n        ]\n    },\n    password: {\n        type: String,\n        required: [\n            true,\n            \"Password is required\"\n        ],\n        minlength: [\n            6,\n            \"Password must be at least 6 characters long\"\n        ]\n    }\n}, {\n    timestamps: true\n});\n// Hash password before saving\nUserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) return next();\n    try {\n        const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].genSalt(10);\n        this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hash(this.password, salt);\n        next();\n    } catch (err) {\n        next(err);\n    }\n});\n// Method to compare passwords\nUserSchema.methods.matchPassword = async function(enteredPassword) {\n    return await bcryptjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].compare(enteredPassword, this.password);\n};\nconst Registration = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Registration || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Registration\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Registration);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1JlZ2lzdHJhdGlvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBQ0Y7QUFFOUIsTUFBTUUsYUFBYSxJQUFJRix3REFBZSxDQUFDO0lBQ3JDSSxXQUFXO1FBQ1RDLE1BQU1DO1FBQ05DLFVBQVU7WUFBQztZQUFNO1NBQXlCO1FBQzFDQyxNQUFNO0lBQ1I7SUFDQUMsVUFBVTtRQUNSSixNQUFNQztRQUNOQyxVQUFVO1lBQUM7WUFBTTtTQUF3QjtRQUN6Q0MsTUFBTTtJQUNSO0lBQ0FFLE9BQU87UUFDTEwsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBb0I7UUFDckNJLFFBQVE7UUFDUkMsV0FBVztRQUNYSixNQUFNO1FBQ05LLE9BQU87WUFBQztZQUFhO1NBQXFDO0lBQzVEO0lBQ0FDLFVBQVU7UUFDUlQsTUFBTUM7UUFDTkMsVUFBVTtZQUFDO1lBQU07U0FBdUI7UUFDeENRLFdBQVc7WUFBQztZQUFHO1NBQThDO0lBQy9EO0FBQ0YsR0FBRztJQUNEQyxZQUFZO0FBQ2Q7QUFFQSw4QkFBOEI7QUFDOUJkLFdBQVdlLEdBQUcsQ0FBQyxRQUFRLGVBQWdCQyxJQUFJO0lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUNDLFVBQVUsQ0FBQyxhQUFhLE9BQU9EO0lBQ3pDLElBQUk7UUFDRixNQUFNRSxPQUFPLE1BQU1uQix3REFBYyxDQUFDO1FBQ2xDLElBQUksQ0FBQ2EsUUFBUSxHQUFHLE1BQU1iLHFEQUFXLENBQUMsSUFBSSxDQUFDYSxRQUFRLEVBQUVNO1FBQ2pERjtJQUNGLEVBQUUsT0FBT0ssS0FBSztRQUNaTCxLQUFLSztJQUNQO0FBQ0Y7QUFFQSw4QkFBOEI7QUFDOUJyQixXQUFXc0IsT0FBTyxDQUFDQyxhQUFhLEdBQUcsZUFBZ0JDLGVBQWU7SUFDaEUsT0FBTyxNQUFNekIsd0RBQWMsQ0FBQ3lCLGlCQUFpQixJQUFJLENBQUNaLFFBQVE7QUFDNUQ7QUFFQSxNQUFNYyxlQUNKNUIsd0RBQWUsQ0FBQzRCLFlBQVksSUFBSTVCLHFEQUFjLENBQUMsZ0JBQWdCRTtBQUVqRSxpRUFBZTBCLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaHV0YW4tdHJhdmVsLy4vc3JjL21vZGVscy9SZWdpc3RyYXRpb24uanM/YjVlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICBmaXJzdE5hbWU6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0ZpcnN0IG5hbWUgaXMgcmVxdWlyZWQnXSxcclxuICAgIHRyaW06IHRydWUsXHJcbiAgfSxcclxuICBsYXN0TmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnTGFzdCBuYW1lIGlzIHJlcXVpcmVkJ10sXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIHR5cGU6IFN0cmluZyxcclxuICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ0VtYWlsIGlzIHJlcXVpcmVkJ10sXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgICBsb3dlcmNhc2U6IHRydWUsXHJcbiAgICB0cmltOiB0cnVlLFxyXG4gICAgbWF0Y2g6IFsvLitALitcXC4uKy8sICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzJ10sXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGFzc3dvcmQgaXMgcmVxdWlyZWQnXSxcclxuICAgIG1pbmxlbmd0aDogWzYsICdQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyBsb25nJ10sXHJcbiAgfSxcclxufSwge1xyXG4gIHRpbWVzdGFtcHM6IHRydWUsXHJcbn0pO1xyXG5cclxuLy8gSGFzaCBwYXNzd29yZCBiZWZvcmUgc2F2aW5nXHJcblVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcclxuICBpZiAoIXRoaXMuaXNNb2RpZmllZCgncGFzc3dvcmQnKSkgcmV0dXJuIG5leHQoKTtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcclxuICAgIHRoaXMucGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaCh0aGlzLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgIG5leHQoKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIG5leHQoZXJyKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gTWV0aG9kIHRvIGNvbXBhcmUgcGFzc3dvcmRzXHJcblVzZXJTY2hlbWEubWV0aG9kcy5tYXRjaFBhc3N3b3JkID0gYXN5bmMgZnVuY3Rpb24gKGVudGVyZWRQYXNzd29yZCkge1xyXG4gIHJldHVybiBhd2FpdCBiY3J5cHQuY29tcGFyZShlbnRlcmVkUGFzc3dvcmQsIHRoaXMucGFzc3dvcmQpO1xyXG59O1xyXG5cclxuY29uc3QgUmVnaXN0cmF0aW9uID1cclxuICBtb25nb29zZS5tb2RlbHMuUmVnaXN0cmF0aW9uIHx8IG1vbmdvb3NlLm1vZGVsKCdSZWdpc3RyYXRpb24nLCBVc2VyU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiYmNyeXB0IiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImZpcnN0TmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInRyaW0iLCJsYXN0TmFtZSIsImVtYWlsIiwidW5pcXVlIiwibG93ZXJjYXNlIiwibWF0Y2giLCJwYXNzd29yZCIsIm1pbmxlbmd0aCIsInRpbWVzdGFtcHMiLCJwcmUiLCJuZXh0IiwiaXNNb2RpZmllZCIsInNhbHQiLCJnZW5TYWx0IiwiaGFzaCIsImVyciIsIm1ldGhvZHMiLCJtYXRjaFBhc3N3b3JkIiwiZW50ZXJlZFBhc3N3b3JkIiwiY29tcGFyZSIsIlJlZ2lzdHJhdGlvbiIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Registration.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=D%3A%5CTshewang%20Lhamo%5C02220251_Project01%20-%20Copy&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();
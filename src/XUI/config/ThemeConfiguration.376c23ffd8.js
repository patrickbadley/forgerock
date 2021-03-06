webpackJsonp([118,364],{

/***/ 1501:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9b192e7f9c50c12bf94d2dbac92eccb4.png";

/***/ }),

/***/ 1502:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/2a5ced16cb51e0f182860c6af0bc4003.png";

/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/structure.css";

/***/ }),

/***/ 1504:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "css/theme.css";

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Copyright 2015-2018 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

module.exports = function () {
    var LogoHorizontalImage = __webpack_require__(1501);

    var LoginLogoImage = __webpack_require__(1502);

    var LoginLogoWhiteImage = __webpack_require__(704);

    var BootstrapCustomStyle = __webpack_require__(181);

    var StructureStyle = __webpack_require__(1503);

    var ThemeStyle = __webpack_require__(1504);

    return {
        themes: {
            // There must be a theme named "default".
            "default": {
                // An ordered list of URLs to stylesheets that will be applied to every page.
                stylesheets: [BootstrapCustomStyle, StructureStyle, ThemeStyle],
                // A path that is prepended to every relative URL when fetching resources (including images, stylesheets and
                // HTML template files).
                path: "",
                // A URL to a favicon icon
                icon: "favicon.ico",
                settings: {
                    // This logo is displayed on user profile pages.
                    logo: {
                        // The URL of the image.
                        src: LogoHorizontalImage,
                        // The title attribute used on <img> tags.
                        title: "ForgeRock",
                        // The alt attribute used on <img> tags.
                        alt: "ForgeRock",
                        // The width of the logo as a CSS length.
                        width: "202px"
                    },
                    // This logo is displayed on login pages.
                    loginLogo: {
                        // The URL of the image.
                        src: LoginLogoImage,
                        // The title attribute used on <img> tags.
                        title: "ForgeRock",
                        // The alt attribute used on <img> tags.
                        alt: "ForgeRock",
                        // The height of the logo as a CSS length.
                        height: "104px",
                        // The width of the logo as a CSS length.
                        width: "210px"
                    },
                    // The footer is displayed on every page.
                    footer: {
                        // A contact email address.
                        mailto: "info@forgerock.com",
                        // A contact phone number. If empty, it will not be displayed.
                        phone: ""
                    }
                }
            },
            "fr-dark-theme": {
                // An ordered list of URLs to stylesheets that will be applied to every page.
                stylesheets: ["themes/dark/css/bootstrap.min.css", StructureStyle, "themes/dark/css/theme-dark.css"],
                settings: {
                    loginLogo: {
                        src: "themes/dark/images/login-logo-white.png",
                        title: "ForgeRock",
                        alt: "ForgeRock",
                        height: "228px",
                        width: "220px"
                    }
                }
            }
        },
        // Each mapping will be tested in order. The theme from the first matching mapping will be used. If no mapping
        // matches then the theme "default" will be used.
        mappings: [
            // Use the theme with the key "my-theme" if the realm is either /my-realm or /my/sub-realm.
            //{ theme: "my-theme", realms: ["/my-realm", "/my/sub-realm"] }
            // Use the theme "my-second-theme" if the realm starts with /a. e.g. /ab or /a/c.
            //{ theme: "my-second-theme", realms: [/^\/a/] }
            // Use the theme "my-third-theme" if the realm is /a and the authentication chain is auth-chain-1.
            //{ theme: "my-third-theme", realms: ["/a"], authenticationChains: ["auth-chain-1"] }
            // Use the theme "my-fourth-theme" if the default authentication chain is in use.
            //{ theme: "my-fourth-theme", authenticationChains: [""] }
        ]
    };
}();

/***/ }),

/***/ 704:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/b9eae7755a3dcb26a4ef426cf6376635.png";

/***/ })

});
//# sourceMappingURL=ThemeConfiguration.376c23ffd8.js.map
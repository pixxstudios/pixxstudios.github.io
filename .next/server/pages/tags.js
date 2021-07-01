(function() {
var exports = {};
exports.id = 165;
exports.ids = [165,195];
exports.modules = {

/***/ 9373:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": function() { return /* binding */ getAllTags; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9064);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1085);
/* harmony import */ var _utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7668);





const root = process.cwd();
async function getAllTags(type) {
  const files = await (0,_mdx__WEBPACK_IMPORTED_MODULE_3__/* .getFiles */ .bE)(type);
  let tagCount = {}; // Iterate through each post, putting all found tags into `tags`

  files.forEach(file => {
    const source = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(root, 'data', type, file), 'utf8');
    const {
      data
    } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(source);

    if (data.tags && data.draft !== true) {
      data.tags.forEach(tag => {
        const formattedTag = (0,_utils_kebabCase__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(tag);

        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1;
        } else {
          tagCount[formattedTag] = 1;
        }
      });
    }
  });
  return tagCount;
}

/***/ }),

/***/ 2712:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Tags; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1890);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4629);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8542);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7300);
/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9373);
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7668);









async function getStaticProps() {
  const tags = await (0,_lib_tags__WEBPACK_IMPORTED_MODULE_5__/* .getAllTags */ .Y)('blog');
  return {
    props: {
      tags
    }
  };
}
function Tags({
  tags
}) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSeo */ .Is, {
      title: `Tags - ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__/* .author */ .v}`,
      description: "Things I blog about",
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__/* .siteUrl */ .or}/tags`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pt-6 pb-8 space-x-2 md:space-y-5",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6",
          children: "Tags"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-wrap max-w-lg",
        children: [Object.keys(tags).length === 0 && 'No tags found.', sortedTags.map(t => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "mt-2 mb-2 mr-5",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
              text: t
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
              href: `/tags/${(0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z)(t)}`,
              className: "-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300",
              children: ` (${tags[t]})`
            })]
          }, t);
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 307:
/***/ (function(module) {

"use strict";
module.exports = require("@mapbox/rehype-prism");;

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 1616:
/***/ (function(module) {

"use strict";
module.exports = require("image-size");;

/***/ }),

/***/ 2581:
/***/ (function(module) {

"use strict";
module.exports = require("next-mdx-remote/serialize");;

/***/ }),

/***/ 2364:
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9353:
/***/ (function(module) {

"use strict";
module.exports = require("reading-time");;

/***/ }),

/***/ 3315:
/***/ (function(module) {

"use strict";
module.exports = require("rehype-katex");;

/***/ }),

/***/ 9706:
/***/ (function(module) {

"use strict";
module.exports = require("remark-autolink-headings");;

/***/ }),

/***/ 9989:
/***/ (function(module) {

"use strict";
module.exports = require("remark-code-titles");;

/***/ }),

/***/ 6684:
/***/ (function(module) {

"use strict";
module.exports = require("remark-math");;

/***/ }),

/***/ 3524:
/***/ (function(module) {

"use strict";
module.exports = require("remark-slug");;

/***/ }),

/***/ 2148:
/***/ (function(module) {

"use strict";
module.exports = require("unist-util-visit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664,675,629,890,612,358], function() { return __webpack_exec__(2712); });
module.exports = __webpack_exports__;

})();
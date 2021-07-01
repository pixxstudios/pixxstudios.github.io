(function() {
var exports = {};
exports.id = 405;
exports.ids = [405,195];
exports.modules = {

/***/ 6124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1890);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4629);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8542);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7300);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1085);








const MAX_DISPLAY = 5;
const postDateTemplate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
async function getStaticProps() {
  const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getAllFilesFrontMatter */ .sj)('blog');
  return {
    props: {
      posts
    }
  };
}
function Home({
  posts
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_2__/* .PageSeo */ .Is, {
      title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__/* .title */ .TN,
      description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__/* .description */ .WL,
      url: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__/* .siteUrl */ .or
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "divide-y divide-gray-200 dark:divide-gray-700",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pt-6 pb-8 space-y-2 md:space-y-5",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
          children: "Latest"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "text-lg leading-7 text-gray-500 dark:text-gray-400",
          children: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__/* .description */ .WL
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        className: "divide-y divide-gray-200 dark:divide-gray-700",
        children: [!posts.length && 'No posts found.', posts.slice(0, MAX_DISPLAY).map(frontMatter => {
          const {
            slug,
            date,
            title,
            summary,
            tags
          } = frontMatter;
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
            className: "py-12",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Published on"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("time", {
                      dateTime: date,
                      children: new Date(date).toLocaleDateString(_data_siteMetadata__WEBPACK_IMPORTED_MODULE_4__/* .locale */ .SP, postDateTemplate)
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "space-y-5 xl:col-span-3",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "space-y-6",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-2xl font-bold leading-8 tracking-tight",
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                          href: `/blog/${slug}`,
                          className: "text-gray-900 dark:text-gray-100",
                          children: title
                        })
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-wrap",
                        children: tags.map(tag => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
                          text: tag
                        }, tag))
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                      className: "prose text-gray-500 max-w-none dark:text-gray-400",
                      children: summary
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-base font-medium leading-6",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
                      href: `/blog/${slug}`,
                      className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                      "aria-label": `Read "${title}"`,
                      children: "Read more \u2192"
                    })
                  })]
                })]
              })
            })
          }, slug);
        })]
      })]
    }), posts.length > MAX_DISPLAY && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "flex justify-end text-base font-medium leading-6",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        href: "/blog",
        className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
        "aria-label": "all posts",
        children: "All Posts \u2192"
      })
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
var __webpack_exports__ = __webpack_require__.X(0, [374,664,675,629,890,612,358], function() { return __webpack_exec__(6124); });
module.exports = __webpack_exports__;

})();
(function() {
var exports = {};
exports.id = 51;
exports.ids = [51,195];
exports.modules = {

/***/ 4522:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ PostPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4629);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7300);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1085);
/* harmony import */ var _layouts_ListLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2807);
/* harmony import */ var _blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2695);








async function getStaticPaths() {
  const totalPosts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_3__/* .getAllFilesFrontMatter */ .sj)('blog');
  const totalPages = Math.ceil(totalPosts.length / _blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE);
  const paths = Array.from({
    length: totalPages
  }, (_, i) => ({
    params: {
      page: (i + 1).toString()
    }
  }));
  return {
    paths,
    fallback: false
  };
}
async function getStaticProps(context) {
  const {
    params: {
      page
    }
  } = context;
  const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_3__/* .getAllFilesFrontMatter */ .sj)('blog');
  const pageNumber = parseInt(page);
  const initialDisplayPosts = posts.slice(_blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE * (pageNumber - 1), _blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE * pageNumber);
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / _blog__WEBPACK_IMPORTED_MODULE_5__.POSTS_PER_PAGE)
  };
  return {
    props: {
      posts,
      initialDisplayPosts,
      pagination
    }
  };
}
function PostPage({
  posts,
  initialDisplayPosts,
  pagination
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_1__/* .PageSeo */ .Is, {
      title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN,
      description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL,
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or}/blog/${pagination.currentPage}`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ListLayout__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      posts: posts,
      initialDisplayPosts: initialDisplayPosts,
      pagination: pagination,
      title: "All Posts"
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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664,675,629,890,612,358,807,695], function() { return __webpack_exec__(4522); });
module.exports = __webpack_exports__;

})();
(function() {
var exports = {};
exports.id = 176;
exports.ids = [176,195];
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

/***/ 4438:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4629);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7300);
/* harmony import */ var _layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2807);
/* harmony import */ var _lib_generate_rss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1085);
/* harmony import */ var _lib_tags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9373);
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7668);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);












const root = process.cwd();
async function getStaticPaths() {
  const tags = await (0,_lib_tags__WEBPACK_IMPORTED_MODULE_6__/* .getAllTags */ .Y)('blog');
  return {
    paths: Object.keys(tags).map(tag => ({
      params: {
        tag
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const allPosts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_5__/* .getAllFilesFrontMatter */ .sj)('blog');
  const filteredPosts = allPosts.filter(post => post.draft !== true && post.tags.map(t => (0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(t)).includes(params.tag)); // rss

  const rss = (0,_lib_generate_rss__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(filteredPosts, `tags/${params.tag}/index.xml`);
  const rssPath = path__WEBPACK_IMPORTED_MODULE_8___default().join(root, 'public', 'tags', params.tag);
  fs__WEBPACK_IMPORTED_MODULE_7___default().mkdirSync(rssPath, {
    recursive: true
  });
  fs__WEBPACK_IMPORTED_MODULE_7___default().writeFileSync(path__WEBPACK_IMPORTED_MODULE_8___default().join(rssPath, 'index.xml'), rss);
  return {
    props: {
      posts: filteredPosts,
      tag: params.tag
    }
  };
}
function Tag({
  posts,
  tag
}) {
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_1__/* .PageSeo */ .Is, {
      title: `${tag} - ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN}`,
      description: `${tag} tags - ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN}`,
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or}/tags/${tag}`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      posts: posts,
      title: title
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664,675,629,890,612,358,807,22], function() { return __webpack_exec__(4438); });
module.exports = __webpack_exports__;

})();
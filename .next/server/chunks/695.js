exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 2695:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "POSTS_PER_PAGE": function() { return /* binding */ POSTS_PER_PAGE; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ Blog; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_mdx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1085);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7300);
/* harmony import */ var _layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2807);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4629);







const POSTS_PER_PAGE = 10;
async function getStaticProps() {
  const posts = await (0,_lib_mdx__WEBPACK_IMPORTED_MODULE_1__/* .getAllFilesFrontMatter */ .sj)('blog');
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  };
  return {
    props: {
      initialDisplayPosts,
      posts,
      pagination
    }
  };
}
function Blog({
  posts,
  initialDisplayPosts,
  pagination
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_SEO__WEBPACK_IMPORTED_MODULE_4__/* .PageSeo */ .Is, {
      title: `Blog - ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .author */ .v}`,
      description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL,
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or}/blog`
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_ListLayout__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      posts: posts,
      initialDisplayPosts: initialDisplayPosts,
      pagination: pagination,
      title: "All Posts"
    })]
  });
}

/***/ })

};
;
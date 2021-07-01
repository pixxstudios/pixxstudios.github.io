(function() {
var exports = {};
exports.id = 94;
exports.ids = [94,195];
exports.modules = {

/***/ 9648:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ SectionContainer; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SectionContainer({
  children
}) {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: "max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0",
    children: children
  });
}

/***/ }),

/***/ 3070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Blog; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
;// CONCATENATED MODULE: external "next-mdx-remote"
var external_next_mdx_remote_namespaceObject = require("next-mdx-remote");;
// EXTERNAL MODULE: ./components/MDXComponents.js
var MDXComponents = __webpack_require__(8802);
;// CONCATENATED MODULE: ./components/PageTitle.js

function PageTitle({
  children
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("h1", {
    className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14",
    children: children
  });
}
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(1890);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(9648);
// EXTERNAL MODULE: ./components/SEO.js
var SEO = __webpack_require__(4629);
// EXTERNAL MODULE: ./components/Image.js
var Image = __webpack_require__(612);
// EXTERNAL MODULE: ./components/Tag.js
var Tag = __webpack_require__(8542);
// EXTERNAL MODULE: ./data/siteMetadata.json
var siteMetadata = __webpack_require__(7300);
;// CONCATENATED MODULE: ./layouts/PostLayout.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const editUrl = fileName => `${siteMetadata/* siteRepo */.Vm}/blob/master/data/blog/${fileName}`;

const discussUrl = slug => `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata/* siteUrl */.or}/blog/${slug}`)}`;

const postDateTemplate = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
function PostLayout({
  children,
  frontMatter,
  next,
  prev
}) {
  const {
    slug,
    fileName,
    date,
    title,
    tags
  } = frontMatter;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(SectionContainer/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(SEO/* BlogSeo */.JV, _objectSpread({
      url: `${siteMetadata/* siteUrl */.or}/blog/${slug}`
    }, frontMatter)), /*#__PURE__*/jsx_runtime_.jsx("article", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700",
        children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
          className: "pt-6 xl:pb-6",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "space-y-1 text-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("dl", {
              className: "space-y-10",
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                  className: "sr-only",
                  children: "Published on"
                }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                  className: "text-base font-medium leading-6 text-gray-500 dark:text-gray-400",
                  children: /*#__PURE__*/jsx_runtime_.jsx("time", {
                    dateTime: date,
                    children: new Date(date).toLocaleDateString(siteMetadata/* locale */.SP, postDateTemplate)
                  })
                })]
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx(PageTitle, {
                children: title
              })
            })]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "pb-8 divide-y divide-gray-200 xl:divide-y-0 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6",
          style: {
            gridTemplateRows: 'auto 1fr'
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
            className: "pt-6 pb-10 xl:pt-11 xl:border-b xl:border-gray-200 xl:dark:border-gray-700",
            children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
              className: "sr-only",
              children: "Authors"
            }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: "flex justify-center space-x-8 xl:block sm:space-x-12 xl:space-x-0 xl:space-y-8",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                  className: "flex items-center space-x-2",
                  children: [/*#__PURE__*/jsx_runtime_.jsx(Image/* default */.Z, {
                    src: siteMetadata/* image */.BH,
                    width: "38px",
                    height: "38px",
                    alt: "avatar",
                    className: "w-10 h-10 rounded-full"
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
                    className: "text-sm font-medium leading-5 whitespace-nowrap",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                      className: "sr-only",
                      children: "Name"
                    }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                      className: "text-gray-900 dark:text-gray-100",
                      children: siteMetadata/* author */.v
                    }), typeof siteMetadata/* twitter */.km === 'string' && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("dt", {
                        className: "sr-only",
                        children: "Twitter"
                      }), /*#__PURE__*/jsx_runtime_.jsx("dd", {
                        children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                          href: siteMetadata/* twitter */.km,
                          className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                          children: siteMetadata/* twitter.replace */.km.replace('https://twitter.com/', '@')
                        })
                      })]
                    })]
                  })]
                })
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "divide-y divide-gray-200 dark:divide-gray-700 xl:pb-0 xl:col-span-3 xl:row-span-2",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "pt-10 pb-8 prose dark:prose-dark max-w-none",
              children: children
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300",
              children: [/*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                href: discussUrl(slug),
                rel: "nofollow",
                children: 'Discuss on Twitter'
              }), ` • `, /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                href: editUrl(fileName),
                children: 'View on GitHub'
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-sm font-medium leading-5 divide-gray-200 xl:divide-y dark:divide-gray-700 xl:col-start-1 xl:row-start-2",
              children: [tags && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "py-4 xl:py-8",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                  className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                  children: "Tags"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "flex flex-wrap",
                  children: tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
                    text: tag
                  }, tag))
                })]
              }), (next || prev) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between py-4 xl:block xl:space-y-8 xl:py-8",
                children: [prev && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                    children: "Previous Article"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                    children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                      href: `/blog/${prev.slug}`,
                      children: prev.title
                    })
                  })]
                }), next && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
                    className: "text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400",
                    children: "Next Article"
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                    children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                      href: `/blog/${next.slug}`,
                      children: next.title
                    })
                  })]
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "pt-4 xl:pt-8",
              children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                href: "/blog",
                className: "text-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                children: "\u2190 Back to the blog"
              })
            })]
          })]
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: ./lib/generate-rss.js + 1 modules
var generate_rss = __webpack_require__(22);
// EXTERNAL MODULE: ./lib/mdx.js + 1 modules
var mdx = __webpack_require__(1085);
;// CONCATENATED MODULE: ./pages/blog/[...slug].js




function _slug_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _slug_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _slug_ownKeys(Object(source), true).forEach(function (key) { _slug_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _slug_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slug_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








async function getStaticPaths() {
  const posts = (0,mdx/* getFiles */.bE)('blog');
  return {
    paths: posts.map(p => ({
      params: {
        slug: (0,mdx/* formatSlug */.gf)(p).split('/')
      }
    })),
    fallback: false
  };
}
async function getStaticProps({
  params
}) {
  const allPosts = await (0,mdx/* getAllFilesFrontMatter */.sj)('blog');
  const postIndex = allPosts.findIndex(post => (0,mdx/* formatSlug */.gf)(post.slug) === params.slug.join('/'));
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await (0,mdx/* getFileBySlug */.x7)('blog', params.slug.join('/')); // rss

  const rss = (0,generate_rss/* default */.Z)(allPosts);
  external_fs_default().writeFileSync('./public/index.xml', rss);
  return {
    props: {
      post,
      prev,
      next
    }
  };
}
function Blog({
  post,
  prev,
  next
}) {
  const {
    mdxSource,
    frontMatter
  } = post;
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: frontMatter.draft !== true ? /*#__PURE__*/jsx_runtime_.jsx(PostLayout, {
      frontMatter: frontMatter,
      prev: prev,
      next: next,
      children: /*#__PURE__*/jsx_runtime_.jsx(external_next_mdx_remote_namespaceObject.MDXRemote, _slug_objectSpread(_slug_objectSpread({}, mdxSource), {}, {
        components: MDXComponents/* default */.Z
      }))
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-24 text-center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PageTitle, {
        children: ["Under Construction", ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
          role: "img",
          "aria-label": "roadwork sign",
          children: "\uD83D\uDEA7"
        })]
      })
    })
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
var __webpack_exports__ = __webpack_require__.X(0, [374,664,675,629,890,612,358,22], function() { return __webpack_exec__(3070); });
module.exports = __webpack_exports__;

})();
exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 2807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ListLayout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(1890);
// EXTERNAL MODULE: ./components/Tag.js
var Tag = __webpack_require__(8542);
// EXTERNAL MODULE: ./data/siteMetadata.json
var siteMetadata = __webpack_require__(7300);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/Pagination.js



function Pagination({
  totalPages,
  currentPage
}) {
  const prevPage = parseInt(currentPage) - 1 > 0;
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "pt-6 pb-8 space-y-2 md:space-y-5",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "flex justify-between",
      children: [!prevPage && /*#__PURE__*/jsx_runtime_.jsx("button", {
        rel: "previous",
        className: "cursor-auto disabled:opacity-50",
        disabled: !prevPage,
        children: "Previous"
      }), prevPage && /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
        href: currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          rel: "previous",
          children: "Previous"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: [currentPage, " of ", totalPages]
      }), !nextPage && /*#__PURE__*/jsx_runtime_.jsx("button", {
        rel: "next",
        className: "cursor-auto disabled:opacity-50",
        disabled: !nextPage,
        children: "Next"
      }), nextPage && /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
        href: `/blog/page/${currentPage + 1}`,
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          rel: "next",
          children: "Next"
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./layouts/ListLayout.js








const postDateTemplate = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination
}) {
  const {
    0: searchValue,
    1: setSearchValue
  } = (0,external_react_.useState)('');
  const filteredBlogPosts = posts.filter(frontMatter => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ');
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  }); // If initialDisplayPosts exist, display it if no searchValue is specified

  const displayPosts = initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "divide-y",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "pt-6 pb-8 space-y-2 md:space-y-5",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14",
          children: title
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative max-w-lg",
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            "aria-label": "Search articles",
            type: "text",
            onChange: e => setSearchValue(e.target.value),
            placeholder: "Search articles",
            className: "block w-full px-4 py-2 text-gray-900 bg-white border border-gray-300 rounded-md dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
          }), /*#__PURE__*/jsx_runtime_.jsx("svg", {
            className: "absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            children: /*#__PURE__*/jsx_runtime_.jsx("path", {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: 2,
              d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        children: [!filteredBlogPosts.length && 'No posts found.', displayPosts.map(frontMatter => {
          const {
            slug,
            date,
            title,
            summary,
            tags
          } = frontMatter;
          return /*#__PURE__*/jsx_runtime_.jsx("li", {
            className: "py-4",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("article", {
              className: "space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("dl", {
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
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "space-y-3 xl:col-span-3",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    className: "text-2xl font-bold leading-8 tracking-tight",
                    children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
                      href: `/blog/${slug}`,
                      className: "text-gray-900 dark:text-gray-100",
                      children: title
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "flex flex-wrap",
                    children: tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(Tag/* default */.Z, {
                      text: tag
                    }, tag))
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "prose text-gray-500 max-w-none dark:text-gray-400",
                  children: summary
                })]
              })]
            })
          }, slug);
        })]
      })]
    }), pagination && pagination.totalPages > 1 && !searchValue && /*#__PURE__*/jsx_runtime_.jsx(Pagination, {
      currentPage: pagination.currentPage,
      totalPages: pagination.totalPages
    })]
  });
}

/***/ })

};
;
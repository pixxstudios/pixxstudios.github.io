exports.id = 629;
exports.ids = [629];
exports.modules = {

/***/ 7300:
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"TN":"Next.js Starter Blog","v":"Tails Azimuth","r9":"TailwindBlog","WL":"A blog created with Next.js and Tailwind.css","dK":"en-us","or":"https://tailwind-nextjs-starter-blog.vercel.app","Vm":"https://github.com/timlrx/tailwind-nextjs-starter-blog","BH":"/static/images/avatar.png","Ao":"/static/images/twitter-card.png","Do":"address@yoursite.com","bW":"https://github.com","km":"https://twitter.com/Twitter","qv":"https://facebook.com","ZB":"https://youtube.com","kG":"https://www.linkedin.com","SP":"en-US"}');

/***/ }),

/***/ 4629:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HJ": function() { return /* binding */ SEO; },
/* harmony export */   "Is": function() { return /* binding */ PageSeo; },
/* harmony export */   "JV": function() { return /* binding */ BlogSeo; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2364);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7300);





const SEO = {
  title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN,
  description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL,
  openGraph: {
    type: 'website',
    locale: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .language */ .dK,
    url: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or,
    title: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN,
    description: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .description */ .WL,
    images: [{
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or}${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .socialBanner */ .Ao}`,
      alt: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN,
      width: 1200,
      height: 600
    }]
  },
  twitter: {
    handle: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .twitter */ .km,
    site: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .twitter */ .km,
    cardType: 'summary_large_image'
  },
  additionalMetaTags: [{
    name: 'author',
    content: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .author */ .v
  }]
};
const PageSeo = ({
  title,
  description,
  url
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
    title: `${title} – ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN}`,
    description: description,
    canonical: url,
    openGraph: {
      url,
      title,
      description
    }
  });
};
const BlogSeo = ({
  title,
  summary,
  date,
  lastmod,
  url,
  tags,
  images = []
}) => {
  const publishedAt = new Date(date).toISOString();
  const modifiedAt = new Date(lastmod || date).toISOString();
  let imagesArr = images.length === 0 ? [_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .socialBanner */ .Ao] : typeof images === 'string' ? [images] : images;
  const featuredImages = imagesArr.map(img => {
    return {
      url: `${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or}${img}`,
      alt: title
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
      title: `${title} – ${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .title */ .TN}`,
      description: summary,
      canonical: url,
      openGraph: {
        type: 'article',
        article: {
          publishedTime: publishedAt,
          modifiedTime: modifiedAt,
          authors: [`${_data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .siteUrl */ .or}/about`],
          tags
        },
        url,
        title,
        description: summary,
        images: featuredImages
      },
      additionalMetaTags: [{
        name: 'twitter:image',
        content: featuredImages[0].url
      }]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.ArticleJsonLd, {
      authorName: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .author */ .v,
      dateModified: modifiedAt,
      datePublished: publishedAt,
      description: summary,
      images: featuredImages,
      publisherName: _data_siteMetadata__WEBPACK_IMPORTED_MODULE_2__/* .author */ .v,
      title: title,
      url: url
    })]
  });
};

/***/ })

};
;
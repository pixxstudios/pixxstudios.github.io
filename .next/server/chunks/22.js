exports.id = 22;
exports.ids = [22];
exports.modules = {

/***/ 22:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ generate_rss; }
});

;// CONCATENATED MODULE: ./lib/utils/htmlEscaper.js
const {
  replace
} = ''; // escape

const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
const ca = /[&<>'"]/g;
const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;'
};

const pe = m => esca[m];
/**
 * Safely escape HTML entities such as `&`, `<`, `>`, `"`, and `'`.
 * @param {string} es the input to safely escape
 * @returns {string} the escaped input, and it **throws** an error if
 *  the input type is unexpected, except for boolean and numbers,
 *  converted as string.
 */


const htmlEscaper_escape = es => replace.call(es, ca, pe);
// EXTERNAL MODULE: ./data/siteMetadata.json
var siteMetadata = __webpack_require__(7300);
;// CONCATENATED MODULE: ./lib/generate-rss.js



const generateRssItem = post => `
  <item>
    <guid>${siteMetadata/* siteUrl */.or}/blog/${post.slug}</guid>
    <title>${htmlEscaper_escape(post.title)}</title>
    <link>${siteMetadata/* siteUrl */.or}/blog/${post.slug}</link>
    <description>${htmlEscaper_escape(post.summary)}</description>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata/* email */.Do} (${siteMetadata/* author */.v})</author>
    ${post.tags.map(t => `<category>${t}</category>`).join('')}
  </item>
`;

const generateRss = (posts, page = 'index.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${htmlEscaper_escape(siteMetadata/* title */.TN)}</title>
      <link>${siteMetadata/* siteUrl */.or}/blog</link>
      <description>${htmlEscaper_escape(siteMetadata/* description */.WL)}</description>
      <language>${siteMetadata/* language */.dK}</language>
      <managingEditor>${siteMetadata/* email */.Do} (${siteMetadata/* author */.v})</managingEditor>
      <webMaster>${siteMetadata/* email */.Do} (${siteMetadata/* author */.v})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata/* siteUrl */.or}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

/* harmony default export */ var generate_rss = (generateRss);

/***/ })

};
;
exports.id = 358;
exports.ids = [358];
exports.modules = {

/***/ 8802:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(612);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1890);


const MDXComponents = {
  Image: _Image__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z,
  a: _Link__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
};
/* harmony default export */ __webpack_exports__["Z"] = (MDXComponents);

/***/ }),

/***/ 8542:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7668);




const Tag = ({
  text
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: `/tags/${(0,_lib_utils_kebabCase__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z)(text)}`,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
      className: "mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400",
      children: text.split(' ').join('-')
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Tag);

/***/ }),

/***/ 1119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const visit = __webpack_require__(2148);

const sizeOf = __webpack_require__(1616);

const fs = __webpack_require__(5747);

module.exports = options => tree => {
  visit(tree, // only visit p tags that contain an img element
  node => node.type === 'paragraph' && node.children.some(n => n.type === 'image'), node => {
    const imageNode = node.children.find(n => n.type === 'image'); // only local files

    if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
      const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`); // Convert original node to next/image

      imageNode.type = 'jsx';
      imageNode.value = `<Image
          alt={\`${imageNode.alt}\`} 
          src={\`${imageNode.url}\`}
          width={${dimensions.width}}
          height={${dimensions.height}}
      />`; // Change node type from p to div to avoid nesting error

      node.type = 'div';
      node.children = [imageNode];
    }
  });
};

/***/ }),

/***/ 1085:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gf": function() { return /* binding */ formatSlug; },
  "sj": function() { return /* binding */ getAllFilesFrontMatter; },
  "x7": function() { return /* binding */ getFileBySlug; },
  "bE": function() { return /* binding */ getFiles; }
});

// UNUSED EXPORTS: dateSortDesc

// EXTERNAL MODULE: ./components/MDXComponents.js
var MDXComponents = __webpack_require__(8802);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: external "next-mdx-remote/serialize"
var serialize_ = __webpack_require__(2581);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "reading-time"
var external_reading_time_ = __webpack_require__(9353);
var external_reading_time_default = /*#__PURE__*/__webpack_require__.n(external_reading_time_);
// EXTERNAL MODULE: external "unist-util-visit"
var external_unist_util_visit_ = __webpack_require__(2148);
var external_unist_util_visit_default = /*#__PURE__*/__webpack_require__.n(external_unist_util_visit_);
// EXTERNAL MODULE: ./lib/img-to-jsx.js
var img_to_jsx = __webpack_require__(1119);
var img_to_jsx_default = /*#__PURE__*/__webpack_require__.n(img_to_jsx);
;// CONCATENATED MODULE: ./lib/utils/files.js



const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const flattenArray = input => input.reduce((acc, item) => [...acc, ...(Array.isArray(item) ? item : [item])], []);

const map = fn => input => input.map(fn);

const walkDir = fullPath => {
  return external_fs_default().statSync(fullPath).isFile() ? fullPath : getAllFilesRecursively(fullPath);
};

const pathJoinPrefix = prefix => extraPath => external_path_default().join(prefix, extraPath);

const getAllFilesRecursively = folder => pipe((external_fs_default()).readdirSync, map(pipe(pathJoinPrefix(folder), walkDir)), flattenArray)(folder);

/* harmony default export */ var utils_files = (getAllFilesRecursively);
;// CONCATENATED MODULE: ./lib/mdx.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const root = process.cwd();
const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  deleted: 'text-code-red',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  keyword: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic'
};
function getFiles(type) {
  const prefixPaths = external_path_default().join(root, 'data', type);
  const files = utils_files(prefixPaths); // Only want to return blog/path and ignore root, replace is needed to work on Windows

  return files.map(file => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'));
}
function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '');
}
function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}
async function getFileBySlug(type, slug) {
  const mdxPath = external_path_default().join(root, 'data', type, `${slug}.mdx`);
  const mdPath = external_path_default().join(root, 'data', type, `${slug}.md`);
  const source = external_fs_default().existsSync(mdxPath) ? external_fs_default().readFileSync(mdxPath, 'utf8') : external_fs_default().readFileSync(mdPath, 'utf8');
  const {
    data,
    content
  } = external_gray_matter_default()(source);
  const mdxSource = await (0,serialize_.serialize)(content, {
    components: MDXComponents/* default */.Z,
    mdxOptions: {
      remarkPlugins: [__webpack_require__(3524), __webpack_require__(9706), __webpack_require__(9989), __webpack_require__(6684), (img_to_jsx_default())],
      inlineNotes: true,
      rehypePlugins: [__webpack_require__(3315), __webpack_require__(307), () => {
        return tree => {
          external_unist_util_visit_default()(tree, 'element', (node, index, parent) => {
            let [token, type] = node.properties.className || [];

            if (token === 'token') {
              node.properties.className = [tokenClassNames[type]];
            }
          });
        };
      }]
    }
  });
  return {
    mdxSource,
    frontMatter: _objectSpread({
      readingTime: external_reading_time_default()(content),
      slug: slug || null,
      fileName: external_fs_default().existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`
    }, data)
  };
}
async function getAllFilesFrontMatter(folder) {
  const prefixPaths = external_path_default().join(root, 'data', folder);
  const files = utils_files(prefixPaths);
  const allFrontMatter = [];
  files.forEach(file => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/'); // Remove Unexpected File

    if (external_path_default().extname(fileName) !== '.md' && external_path_default().extname(fileName) !== '.mdx') {
      return;
    }

    const source = external_fs_default().readFileSync(file, 'utf8');
    const {
      data
    } = external_gray_matter_default()(source);

    if (data.draft !== true) {
      allFrontMatter.push(_objectSpread(_objectSpread({}, data), {}, {
        slug: formatSlug(fileName)
      }));
    }
  });
  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}

/***/ }),

/***/ 7668:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
const kebabCase = str => str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');

/* harmony default export */ __webpack_exports__["Z"] = (kebabCase);

/***/ })

};
;
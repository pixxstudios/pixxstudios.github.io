(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
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

/***/ 5154:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next-themes"
var external_next_themes_namespaceObject = require("next-themes");;
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__(2364);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./components/SEO.js
var SEO = __webpack_require__(4629);
// EXTERNAL MODULE: ./data/siteMetadata.json
var siteMetadata = __webpack_require__(7300);
;// CONCATENATED MODULE: ./data/headerNavLinks.js
const headerNavLinks = [{
  href: '/blog',
  title: 'Blog'
}, {
  href: '/tags',
  title: 'Tags'
}, {
  href: '/projects',
  title: 'Projects'
}, {
  href: '/about',
  title: 'About'
}];
/* harmony default export */ var data_headerNavLinks = (headerNavLinks);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./data/logo.svg
var _defs, _use, _use2;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgLogo(props) {
  return /*#__PURE__*/external_react_.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "344.564 330.278 111.737 91.218",
    width: 53.87,
    height: 43.61
  }, props), _defs || (_defs = /*#__PURE__*/external_react_.createElement("defs", null, /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "logo_svg__b",
    gradientUnits: "userSpaceOnUse",
    x1: 420.97,
    y1: 331.28,
    x2: 420.97,
    y2: 418.5
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: "0%",
    stopColor: "#06b6d4"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: "100%",
    stopColor: "#67e8f9"
  })), /*#__PURE__*/external_react_.createElement("linearGradient", {
    id: "logo_svg__d",
    gradientUnits: "userSpaceOnUse",
    x1: 377.89,
    y1: 331.28,
    x2: 377.89,
    y2: 418.5
  }, /*#__PURE__*/external_react_.createElement("stop", {
    offset: "0%",
    stopColor: "#06b6d4"
  }), /*#__PURE__*/external_react_.createElement("stop", {
    offset: "100%",
    stopColor: "#67e8f9"
  })), /*#__PURE__*/external_react_.createElement("path", {
    d: "M453.3 331.28v28.57l-64.66 58.65v-30.08l64.66-57.14z",
    id: "logo_svg__a"
  }), /*#__PURE__*/external_react_.createElement("path", {
    d: "M410.23 331.28v28.57l-64.67 58.65v-30.08l64.67-57.14z",
    id: "logo_svg__c"
  }))), _use || (_use = /*#__PURE__*/external_react_.createElement("use", {
    xlinkHref: "#logo_svg__a",
    fill: "url(#logo_svg__b)"
  })), _use2 || (_use2 = /*#__PURE__*/external_react_.createElement("use", {
    xlinkHref: "#logo_svg__c",
    fill: "url(#logo_svg__d)"
  })));
}

/* harmony default export */ var logo = (SvgLogo);
// EXTERNAL MODULE: ./components/Link.js
var Link = __webpack_require__(1890);
// EXTERNAL MODULE: ./components/SectionContainer.js
var SectionContainer = __webpack_require__(9648);
// EXTERNAL MODULE: ./components/social-icons/index.js + 6 modules
var social_icons = __webpack_require__(9840);
;// CONCATENATED MODULE: ./components/Footer.js





function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx("footer", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-center mt-16",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex mb-3 space-x-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(social_icons/* default */.Z, {
          kind: "mail",
          href: `mailto:${siteMetadata/* email */.Do}`,
          size: "6"
        }), /*#__PURE__*/jsx_runtime_.jsx(social_icons/* default */.Z, {
          kind: "github",
          href: siteMetadata/* github */.bW,
          size: "6"
        }), /*#__PURE__*/jsx_runtime_.jsx(social_icons/* default */.Z, {
          kind: "facebook",
          href: siteMetadata/* facebook */.qv,
          size: "6"
        }), /*#__PURE__*/jsx_runtime_.jsx(social_icons/* default */.Z, {
          kind: "youtube",
          href: siteMetadata/* youtube */.ZB,
          size: "6"
        }), /*#__PURE__*/jsx_runtime_.jsx(social_icons/* default */.Z, {
          kind: "linkedin",
          href: siteMetadata/* linkedin */.kG,
          size: "6"
        }), /*#__PURE__*/jsx_runtime_.jsx(social_icons/* default */.Z, {
          kind: "twitter",
          href: siteMetadata/* twitter */.km,
          size: "6"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: siteMetadata/* author */.v
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: ` • `
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: `© ${new Date().getFullYear()}`
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: ` • `
        }), /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
          href: "/",
          children: siteMetadata/* title */.TN
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mb-8 text-sm text-gray-500 dark:text-gray-400",
        children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
          href: "https://github.com/timlrx/tailwind-nextjs-starter-blog",
          children: "Tailwind Nextjs Theme"
        })
      })]
    })
  });
}
;// CONCATENATED MODULE: ./components/MobileNav.js






const MobileNav = () => {
  const {
    0: navShow,
    1: setNavShow
  } = (0,external_react_.useState)(false);

  const onToggleNav = () => {
    setNavShow(status => {
      if (status) {
        document.body.style.overflow = 'auto';
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden';
      }

      return !status;
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "sm:hidden",
    children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
      type: "button",
      className: "w-8 h-8 ml-1 mr-1 rounded",
      "aria-label": "Toggle Menu",
      onClick: onToggleNav,
      children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        className: "text-gray-900 dark:text-gray-100",
        children: navShow ? /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
          clipRule: "evenodd"
        }) : /*#__PURE__*/jsx_runtime_.jsx("path", {
          fillRule: "evenodd",
          d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
          clipRule: "evenodd"
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: `fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${navShow ? 'translate-x-0' : 'translate-x-full'}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        type: "button",
        "aria-label": "toggle modal",
        className: "fixed w-full h-full cursor-auto focus:outline-none",
        onClick: onToggleNav
      }), /*#__PURE__*/jsx_runtime_.jsx("nav", {
        className: "fixed h-full mt-8",
        children: data_headerNavLinks.map(link => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "px-12 py-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: link.href,
            className: "text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100",
            onClick: onToggleNav,
            children: link.title
          })
        }, link.title))
      })]
    })]
  });
};

/* harmony default export */ var components_MobileNav = (MobileNav);
;// CONCATENATED MODULE: ./components/ThemeSwitch.js




const ThemeSwitch = () => {
  const {
    0: mounted,
    1: setMounted
  } = (0,external_react_.useState)(false);
  const {
    theme,
    setTheme,
    resolvedTheme
  } = (0,external_next_themes_namespaceObject.useTheme)(); // When mounted on client, now we can show the UI

  (0,external_react_.useEffect)(() => setMounted(true), []);
  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    "aria-label": "Toggle Dark Mode",
    type: "button",
    className: "w-8 h-8 p-1 ml-1 mr-1 rounded sm:ml-4",
    onClick: () => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark'),
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      className: "text-gray-900 dark:text-gray-100",
      children: mounted && (theme === 'dark' || resolvedTheme === 'dark') ? /*#__PURE__*/jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
        clipRule: "evenodd"
      }) : /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
      })
    })
  });
};

/* harmony default export */ var components_ThemeSwitch = (ThemeSwitch);
;// CONCATENATED MODULE: ./components/LayoutWrapper.js











const LayoutWrapper = ({
  children
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(SectionContainer/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col justify-between h-screen",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
        className: "flex items-center justify-between py-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
            href: "/",
            "aria-label": "Tailwind CSS Blog",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "flex items-center justify-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "mr-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(logo, {})
              }), typeof siteMetadata/* headerTitle */.r9 === 'string' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "hidden h-6 text-2xl font-semibold sm:block",
                children: siteMetadata/* headerTitle */.r9
              }) : siteMetadata/* headerTitle */.r9]
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center text-base leading-5",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "hidden sm:block",
            children: data_headerNavLinks.map(link => /*#__PURE__*/jsx_runtime_.jsx(Link/* default */.Z, {
              href: link.href,
              className: "p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100",
              children: link.title
            }, link.title))
          }), /*#__PURE__*/jsx_runtime_.jsx(components_ThemeSwitch, {}), /*#__PURE__*/jsx_runtime_.jsx(components_MobileNav, {})]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("main", {
        className: "mb-auto",
        children: children
      }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
    })
  });
};

/* harmony default export */ var components_LayoutWrapper = (LayoutWrapper);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_next_themes_namespaceObject.ThemeProvider, {
    attribute: "class",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("meta", {
        content: "width=device-width, initial-scale=1",
        name: "viewport"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_.DefaultSeo, _objectSpread({}, SEO/* SEO */.HJ)), /*#__PURE__*/jsx_runtime_.jsx(components_LayoutWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
    })]
  });
}

/***/ }),

/***/ 2364:
/***/ (function(module) {

"use strict";
module.exports = require("next-seo");;

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

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [374,664,629,890,840], function() { return __webpack_exec__(5154); });
module.exports = __webpack_exports__;

})();
!function(e,n,t,r,i){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30,l=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(n,t){if(!l[n]){if(!e[n]){var r="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30;if(!t&&r)return r(n,!0);if(a)return a(n,!0);if(u&&"string"==typeof n)return u(n);var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}s.resolve=function(t){return e[n][1][t]||t},s.cache={};var f=l[n]=new c.Module(n);e[n][0].call(f.exports,s,f,f.exports,this)}return l[n].exports;function s(e){return c(s.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=a,c.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(c,"root",{get:function(){return o.parcelRequireeb30}}),o.parcelRequireeb30=c;for(var f=0;f<n.length;f++)c(n[f])}({cYMlZ:[function(e,n,t){n.exports=function(e){var n={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{aliases:["golang"],keywords:n,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,{begin:"'",end:"[^\\\\]'"},{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:/\s*\{/,excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}},{}]},[]);
//# sourceMappingURL=go.eb2b6a7c.js.map
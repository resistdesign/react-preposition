!function(e,n,i,r,t){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o.parcelRequire3ee6&&o.parcelRequire3ee6,c=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,i){if(!c[n]){if(!e[n]){var r="function"==typeof o.parcelRequire3ee6&&o.parcelRequire3ee6;if(!i&&r)return r(n,!0);if(a)return a(n,!0);if(u&&"string"==typeof n)return u(n);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}f.resolve=function(i){return e[n][1][i]||i},f.cache={};var l=c[n]=new s.Module(n);e[n][0].call(l.exports,f,l,l.exports,this)}return c[n].exports;function f(e){return s(f.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=c,s.parent=a,s.register=function(n,i){e[n]=[function(e,n){n.exports=i},{}]},Object.defineProperty(s,"root",{get:function(){return o.parcelRequire3ee6}}),o.parcelRequire3ee6=s;for(var l=0;l<n.length;l++)s(n[l])}({"4uPxv":[function(e,n,i){n.exports=function(e){var n={begin:/\(/,end:/\)/,relevance:0},i={begin:/\[/,end:/\]/},r={className:"comment",begin:/%/,end:/$/,contains:[e.PHRASAL_WORDS_MODE]},t={className:"string",begin:/`/,end:/`/,contains:[e.BACKSLASH_ESCAPE]},o=[{begin:/[a-z][A-Za-z0-9_]*/,relevance:0},{className:"symbol",variants:[{begin:/[A-Z][a-zA-Z0-9_]*/},{begin:/_[A-Za-z0-9_]*/}],relevance:0},n,{begin:/:-/},i,r,e.C_BLOCK_COMMENT_MODE,e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,t,{className:"string",begin:/0\'(\\\'|.)/},{className:"string",begin:/0\'\\s/},e.C_NUMBER_MODE];return n.contains=o,i.contains=o,{contains:o.concat([{begin:/\.$/}])}}},{}]},[]);
//# sourceMappingURL=prolog.430b0642.js.map
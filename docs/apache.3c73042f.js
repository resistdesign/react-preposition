!function(e,n,r,o,t){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i.parcelRequireeb30&&i.parcelRequireeb30,l=a.cache||{},s="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(n,r){if(!l[n]){if(!e[n]){var o="function"==typeof i.parcelRequireeb30&&i.parcelRequireeb30;if(!r&&o)return o(n,!0);if(a)return a(n,!0);if(s&&"string"==typeof n)return s(n);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}d.resolve=function(r){return e[n][1][r]||r},d.cache={};var c=l[n]=new u.Module(n);e[n][0].call(c.exports,d,c,c.exports,this)}return l[n].exports;function d(e){return u(d.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=a,u.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(u,"root",{get:function(){return i.parcelRequireeb30}}),i.parcelRequireeb30=u;for(var c=0;c<n.length;c++)u(n[c])}({"1cini":[function(e,n,r){n.exports=function(e){var n={className:"number",begin:"[\\$%]\\d+"};return{aliases:["apacheconf"],case_insensitive:!0,contains:[e.HASH_COMMENT_MODE,{className:"section",begin:"</?",end:">"},{className:"attribute",begin:/\w+/,relevance:0,keywords:{nomarkup:"order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"},starts:{end:/$/,relevance:0,keywords:{literal:"on off all"},contains:[{className:"meta",begin:"\\s\\[",end:"\\]$"},{className:"variable",begin:"[\\$%]\\{",end:"\\}",contains:["self",n]},n,e.QUOTE_STRING_MODE]}}],illegal:/\S/}}},{}]},[]);
//# sourceMappingURL=apache.3c73042f.js.map
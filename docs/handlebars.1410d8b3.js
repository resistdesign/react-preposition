!function(e,n,t,i,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30,l=a.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,t){if(!l[n]){if(!e[n]){var i="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30;if(!t&&i)return i(n,!0);if(a)return a(n,!0);if(u&&"string"==typeof n)return u(n);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}f.resolve=function(t){return e[n][1][t]||t},f.cache={};var c=l[n]=new s.Module(n);e[n][0].call(c.exports,f,c,c.exports,this)}return l[n].exports;function f(e){return s(f.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=l,s.parent=a,s.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(s,"root",{get:function(){return o.parcelRequireeb30}}),o.parcelRequireeb30=s;for(var c=0;c<n.length;c++)s(n[c])}({OksZv:[function(e,n,t){n.exports=function(e){var n={"builtin-name":"each in with if else unless bindattr action collection debugger log outlet template unbound view yield"};return{aliases:["hbs","html.hbs","html.handlebars"],case_insensitive:!0,subLanguage:"xml",contains:[e.COMMENT("{{!(--)?","(--)?}}"),{className:"template-tag",begin:/\{\{[#\/]/,end:/\}\}/,contains:[{className:"name",begin:/[a-zA-Z\.-]+/,keywords:n,starts:{endsWithParent:!0,relevance:0,contains:[e.QUOTE_STRING_MODE]}}]},{className:"template-variable",begin:/\{\{/,end:/\}\}/,keywords:n}]}}},{}]},[]);
//# sourceMappingURL=handlebars.1410d8b3.js.map
!function(e,n,i,r,a){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof t.parcelRequireeb30&&t.parcelRequireeb30,o=s.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(n,i){if(!o[n]){if(!e[n]){var r="function"==typeof t.parcelRequireeb30&&t.parcelRequireeb30;if(!i&&r)return r(n,!0);if(s)return s(n,!0);if(l&&"string"==typeof n)return l(n);var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}u.resolve=function(i){return e[n][1][i]||i},u.cache={};var c=o[n]=new d.Module(n);e[n][0].call(c.exports,u,c,c.exports,this)}return o[n].exports;function u(e){return d(u.resolve(e))}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=o,d.parent=s,d.register=function(n,i){e[n]=[function(e,n){n.exports=i},{}]},Object.defineProperty(d,"root",{get:function(){return t.parcelRequireeb30}}),t.parcelRequireeb30=d;for(var c=0;c<n.length;c++)d(n[c])}({"5dxMd":[function(e,n,i){n.exports=function(e){var n={className:"string",variants:[e.inherit(e.QUOTE_STRING_MODE,{begin:'((u8?|U)|L)?"'}),{begin:'(u8?|U)?R"',end:'"',contains:[e.BACKSLASH_ESCAPE]},{begin:"'\\\\?.",end:"'",illegal:"."}]},i={className:"number",variants:[{begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef ifdef ifndef"},contains:[{begin:/\\\n/,relevance:0},{beginKeywords:"include",end:"$",keywords:{"meta-keyword":"include"},contains:[e.inherit(n,{className:"meta-string"}),{className:"meta-string",begin:"<",end:">",illegal:"\\n"}]},n,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},a={className:"variable",begin:"\\&[a-z\\d_]*\\b"},t={className:"meta-keyword",begin:"/[a-z][a-z\\d-]*/"},s={className:"symbol",begin:"^\\s*[a-zA-Z_][a-zA-Z\\d_]*:"},o={className:"params",begin:"<",end:">",contains:[i,a]},l={className:"class",begin:/[a-zA-Z_][a-zA-Z\d_@]*\s{/,end:/[{;=]/,returnBegin:!0,excludeEnd:!0};return{keywords:"",contains:[{className:"class",begin:"/\\s*{",end:"};",relevance:10,contains:[a,t,s,l,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,n]},a,t,s,l,o,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,i,n,r,{begin:e.IDENT_RE+"::",keywords:""}]}}},{}]},[]);
//# sourceMappingURL=dts.ddb3b9fa.js.map
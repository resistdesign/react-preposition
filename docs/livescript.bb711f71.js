!function(e,n,i,t,r){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof s.parcelRequire3ee6&&s.parcelRequire3ee6,a=o.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function d(n,i){if(!a[n]){if(!e[n]){var t="function"==typeof s.parcelRequire3ee6&&s.parcelRequire3ee6;if(!i&&t)return t(n,!0);if(o)return o(n,!0);if(l&&"string"==typeof n)return l(n);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}u.resolve=function(i){return e[n][1][i]||i},u.cache={};var c=a[n]=new d.Module(n);e[n][0].call(c.exports,u,c,c.exports,this)}return a[n].exports;function u(e){return d(u.resolve(e))}}d.isParcelRequire=!0,d.Module=function(e){this.id=e,this.bundle=d,this.exports={}},d.modules=e,d.cache=a,d.parent=o,d.register=function(n,i){e[n]=[function(e,n){n.exports=i},{}]},Object.defineProperty(d,"root",{get:function(){return s.parcelRequire3ee6}}),s.parcelRequire3ee6=d;for(var c=0;c<n.length;c++)d(n[c])}({"4GtYm":[function(e,n,i){n.exports=function(e){var n={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf",literal:"true false null undefined yes no on off it that void",built_in:"npm require console print module global window document"},i="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",t=e.inherit(e.TITLE_MODE,{begin:i}),r={className:"subst",begin:/#\{/,end:/}/,keywords:n},s={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:n},o=[e.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,r,s]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,r,s]},{begin:/\\/,end:/(\s|$)/,excludeEnd:!0}]},{className:"regexp",variants:[{begin:"//",end:"//[gim]*",contains:[r,e.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{begin:"@"+i},{begin:"``",end:"``",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];r.contains=o;var a={className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(o)}]};return{aliases:["ls"],keywords:n,illegal:/\/\*/,contains:o.concat([e.COMMENT("\\/\\*","\\*\\/"),e.HASH_COMMENT_MODE,{className:"function",contains:[t,a],returnBegin:!0,variants:[{begin:"("+i+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",end:"\\->\\*?"},{begin:"("+i+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+i+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[t]},t]},{begin:i+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}},{}]},[]);
//# sourceMappingURL=livescript.bb711f71.js.map
!function(e,n,i,r,t){var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s="function"==typeof a.parcelRequireeb30&&a.parcelRequireeb30,l=s.cache||{},o="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(n,i){if(!l[n]){if(!e[n]){var r="function"==typeof a.parcelRequireeb30&&a.parcelRequireeb30;if(!i&&r)return r(n,!0);if(s)return s(n,!0);if(o&&"string"==typeof n)return o(n);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}d.resolve=function(i){return e[n][1][i]||i},d.cache={};var u=l[n]=new c.Module(n);e[n][0].call(u.exports,d,u,u.exports,this)}return l[n].exports;function d(e){return c(d.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=l,c.parent=s,c.register=function(n,i){e[n]=[function(e,n){n.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return a.parcelRequireeb30}}),a.parcelRequireeb30=c;for(var u=0;u<n.length;u++)c(n[u])}({"1j7Jn":[function(e,n,i){n.exports=function(e){return{case_insensitive:!0,aliases:["cos","cls"],keywords:"property parameter class classmethod clientmethod extends as break catch close continue do d|0 else elseif for goto halt hang h|0 if job j|0 kill k|0 lock l|0 merge new open quit q|0 read r|0 return set s|0 tcommit throw trollback try tstart use view while write w|0 xecute x|0 zkill znspace zn ztrap zwrite zw zzdump zzwrite print zbreak zinsert zload zprint zremove zsave zzprint mv mvcall mvcrt mvdim mvprint zquit zsync ascii",contains:[{className:"number",begin:"\\b(\\d+(\\.\\d*)?|\\.\\d+)",relevance:0},{className:"string",variants:[{begin:'"',end:'"',contains:[{begin:'""',relevance:0}]}]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"comment",begin:/;/,end:"$",relevance:0},{className:"built_in",begin:/(?:\$\$?|\.\.)\^?[a-zA-Z]+/},{className:"built_in",begin:/\$\$\$[a-zA-Z]+/},{className:"built_in",begin:/%[a-z]+(?:\.[a-z]+)*/},{className:"symbol",begin:/\^%?[a-zA-Z][\w]*/},{className:"keyword",begin:/##class|##super|#define|#dim/},{begin:/&sql\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,subLanguage:"sql"},{begin:/&(js|jscript|javascript)</,end:/>/,excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"},{begin:/&html<\s*</,end:/>\s*>/,subLanguage:"xml"}]}}},{}]},[]);
//# sourceMappingURL=cos.9f78d5a2.js.map
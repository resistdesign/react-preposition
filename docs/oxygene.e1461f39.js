!function(e,r,n,t,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i.parcelRequire3ee6&&i.parcelRequire3ee6,s=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(r,n){if(!s[r]){if(!e[r]){var t="function"==typeof i.parcelRequire3ee6&&i.parcelRequire3ee6;if(!n&&t)return t(r,!0);if(a)return a(r,!0);if(l&&"string"==typeof r)return l(r);var o=new Error("Cannot find module '"+r+"'");throw o.code="MODULE_NOT_FOUND",o}d.resolve=function(n){return e[r][1][n]||n},d.cache={};var u=s[r]=new c.Module(r);e[r][0].call(u.exports,d,u,u.exports,this)}return s[r].exports;function d(e){return c(d.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=s,c.parent=a,c.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]},Object.defineProperty(c,"root",{get:function(){return i.parcelRequire3ee6}}),i.parcelRequire3ee6=c;for(var u=0;u<r.length;u++)c(r[u])}({"6RX8m":[function(e,r,n){r.exports=function(e){var r="abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained",n=e.COMMENT("{","}",{relevance:0}),t=e.COMMENT("\\(\\*","\\*\\)",{relevance:10}),o={className:"string",begin:"'",end:"'",contains:[{begin:"''"}]},i={className:"string",begin:"(#\\d+)+"},a={className:"function",beginKeywords:"function constructor destructor procedure method",end:"[:;]",keywords:"function constructor|10 destructor|10 procedure|10 method|10",contains:[e.TITLE_MODE,{className:"params",begin:"\\(",end:"\\)",keywords:r,contains:[o,i]},n,t]};return{case_insensitive:!0,lexemes:/\.?\w+/,keywords:r,illegal:'("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',contains:[n,t,e.C_LINE_COMMENT_MODE,o,i,e.NUMBER_MODE,a,{className:"class",begin:"=\\bclass\\b",end:"end;",keywords:r,contains:[o,i,n,t,e.C_LINE_COMMENT_MODE,a]}]}}},{}]},[]);
//# sourceMappingURL=oxygene.e1461f39.js.map
!function(e,n,r,i,t){var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof s.parcelRequireeb30&&s.parcelRequireeb30,a=o.cache||{},d="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,r){if(!a[n]){if(!e[n]){var i="function"==typeof s.parcelRequireeb30&&s.parcelRequireeb30;if(!r&&i)return i(n,!0);if(o)return o(n,!0);if(d&&"string"==typeof n)return d(n);var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}u.resolve=function(r){return e[n][1][r]||r},u.cache={};var c=a[n]=new l.Module(n);e[n][0].call(c.exports,u,c,c.exports,this)}return a[n].exports;function u(e){return l(u.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=o,l.register=function(n,r){e[n]=[function(e,n){n.exports=r},{}]},Object.defineProperty(l,"root",{get:function(){return s.parcelRequireeb30}}),s.parcelRequireeb30=l;for(var c=0;c<n.length;c++)l(n[c])}({IiAxH:[function(e,n,r){n.exports=function(e){var n="[A-Za-z](_?[A-Za-z0-9.])*",r="[]{}%#'\"",i=e.COMMENT("--","$"),t={begin:"\\s+:\\s+",end:"\\s*(:=|;|\\)|=>|$)",illegal:r,contains:[{beginKeywords:"loop for declare others",endsParent:!0},{className:"keyword",beginKeywords:"not null constant access function procedure in out aliased exception"},{className:"type",begin:n,endsParent:!0,relevance:0}]};return{case_insensitive:!0,keywords:{keyword:"abort else new return abs elsif not reverse abstract end accept entry select access exception of separate aliased exit or some all others subtype and for out synchronized array function overriding at tagged generic package task begin goto pragma terminate body private then if procedure type case in protected constant interface is raise use declare range delay limited record when delta loop rem while digits renames with do mod requeue xor",literal:"True False"},contains:[i,{className:"string",begin:/"/,end:/"/,contains:[{begin:/""/,relevance:0}]},{className:"string",begin:/'.'/},{className:"number",begin:"\\b(\\d(_|\\d)*#\\w+(\\.\\w+)?#([eE][-+]?\\d(_|\\d)*)?|\\d(_|\\d)*(\\.\\d(_|\\d)*)?([eE][-+]?\\d(_|\\d)*)?)",relevance:0},{className:"symbol",begin:"'"+n},{className:"title",begin:"(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?",end:"(is|$)",keywords:"package body",excludeBegin:!0,excludeEnd:!0,illegal:r},{begin:"(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+",end:"(\\bis|\\bwith|\\brenames|\\)\\s*;)",keywords:"overriding function procedure with is renames return",returnBegin:!0,contains:[i,{className:"title",begin:"(\\bwith\\s+)?\\b(function|procedure)\\s+",end:"(\\(|\\s+|$)",excludeBegin:!0,excludeEnd:!0,illegal:r},t,{className:"type",begin:"\\breturn\\s+",end:"(\\s+|;|$)",keywords:"return",excludeBegin:!0,excludeEnd:!0,endsParent:!0,illegal:r}]},{className:"type",begin:"\\b(sub)?type\\s+",end:"\\s+",keywords:"type",excludeBegin:!0,illegal:r},t]}}},{}]},[]);
//# sourceMappingURL=ada.7b1b7ad1.js.map
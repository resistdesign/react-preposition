!function(e,t,r,n,o){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof i.parcelRequire3ee6&&i.parcelRequire3ee6,s=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(t,r){if(!s[t]){if(!e[t]){var n="function"==typeof i.parcelRequire3ee6&&i.parcelRequire3ee6;if(!r&&n)return n(t,!0);if(a)return a(t,!0);if(l&&"string"==typeof t)return l(t);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}f.resolve=function(r){return e[t][1][r]||r},f.cache={};var u=s[t]=new c.Module(t);e[t][0].call(u.exports,f,u,u.exports,this)}return s[t].exports;function f(e){return c(f.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=s,c.parent=a,c.register=function(t,r){e[t]=[function(e,t){t.exports=r},{}]},Object.defineProperty(c,"root",{get:function(){return i.parcelRequire3ee6}}),i.parcelRequire3ee6=c;for(var u=0;u<t.length;u++)c(t[u])}({"3rTbG":[function(e,t,r){t.exports=function(e){var t=e.inherit(e.QUOTE_STRING_MODE,{illegal:""}),r={className:"params",begin:"\\(",end:"\\)",contains:["self",e.C_NUMBER_MODE,t]},n=e.COMMENT("--","$"),o=[n,e.COMMENT("\\(\\*","\\*\\)",{contains:["self",n]}),e.HASH_COMMENT_MODE];return{aliases:["osascript"],keywords:{keyword:"about above after against and around as at back before beginning behind below beneath beside between but by considering contain contains continue copy div does eighth else end equal equals error every exit fifth first for fourth from front get given global if ignoring in into is it its last local me middle mod my ninth not of on onto or over prop property put ref reference repeat returning script second set seventh since sixth some tell tenth that the|0 then third through thru timeout times to transaction try until where while whose with without",literal:"AppleScript false linefeed return pi quote result space tab true",built_in:"alias application boolean class constant date file integer list number real record string text activate beep count delay launch log offset read round run say summarize write character characters contents day frontmost id item length month name paragraph paragraphs rest reverse running time version weekday word words year"},contains:[t,e.C_NUMBER_MODE,{className:"built_in",begin:"\\b(clipboard info|the clipboard|info for|list (disks|folder)|mount volume|path to|(close|open for) access|(get|set) eof|current date|do shell script|get volume settings|random number|set volume|system attribute|system info|time to GMT|(load|run|store) script|scripting components|ASCII (character|number)|localized string|choose (application|color|file|file name|folder|from list|remote application|URL)|display (alert|dialog))\\b|^\\s*return\\b"},{className:"literal",begin:"\\b(text item delimiters|current application|missing value)\\b"},{className:"keyword",begin:"\\b(apart from|aside from|instead of|out of|greater than|isn't|(doesn't|does not) (equal|come before|come after|contain)|(greater|less) than( or equal)?|(starts?|ends|begins?) with|contained by|comes (before|after)|a (ref|reference)|POSIX file|POSIX path|(date|time) string|quoted form)\\b"},{beginKeywords:"on",illegal:"[${=;\\n]",contains:[e.UNDERSCORE_TITLE_MODE,r]}].concat(o),illegal:"//|->|=>|\\[\\["}}},{}]},[]);
//# sourceMappingURL=applescript.ca2f2bdb.js.map
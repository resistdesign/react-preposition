!function(e,n,i,a,r){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof t.parcelRequire3ee6&&t.parcelRequire3ee6,s=l.cache||{},o="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(n,i){if(!s[n]){if(!e[n]){var a="function"==typeof t.parcelRequire3ee6&&t.parcelRequire3ee6;if(!i&&a)return a(n,!0);if(l)return l(n,!0);if(o&&"string"==typeof n)return o(n);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}u.resolve=function(i){return e[n][1][i]||i},u.cache={};var d=s[n]=new c.Module(n);e[n][0].call(d.exports,u,d,d.exports,this)}return s[n].exports;function u(e){return c(u.resolve(e))}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=e,c.cache=s,c.parent=l,c.register=function(n,i){e[n]=[function(e,n){n.exports=i},{}]},Object.defineProperty(c,"root",{get:function(){return t.parcelRequire3ee6}}),t.parcelRequire3ee6=c;for(var d=0;d<n.length;d++)c(n[d])}({C76iD:[function(e,n,i){n.exports=function(e){var n={keyword:"abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",literal:"null false true"},i={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},a={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},r=e.inherit(a,{illegal:/\n/}),t={className:"subst",begin:"{",end:"}",keywords:n},l=e.inherit(t,{illegal:/\n/}),s={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},e.BACKSLASH_ESCAPE,l]},o={className:"string",begin:/\$@"/,end:'"',contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},t]},c=e.inherit(o,{illegal:/\n/,contains:[{begin:"{{"},{begin:"}}"},{begin:'""'},l]});t.contains=[o,s,a,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_BLOCK_COMMENT_MODE],l.contains=[c,s,r,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.inherit(e.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];var d={variants:[o,s,a,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},u=e.IDENT_RE+"(<"+e.IDENT_RE+"(\\s*,\\s*"+e.IDENT_RE+")*>)?(\\[\\])?";return{aliases:["csharp","c#"],keywords:n,illegal:/::/,contains:[e.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"\x3c!--|--\x3e"},{begin:"</?",end:">"}]}]}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},d,i,{beginKeywords:"class interface",end:/[{;=]/,illegal:/[^\s:,]/,contains:[e.TITLE_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",end:/[{;=]/,illegal:/[^\s:]/,contains:[e.inherit(e.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"meta-string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+u+"\\s+)+"+e.IDENT_RE+"\\s*\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:n,contains:[{begin:e.IDENT_RE+"\\s*\\(",returnBegin:!0,contains:[e.TITLE_MODE],relevance:0},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,relevance:0,contains:[d,i,e.C_BLOCK_COMMENT_MODE]},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE]}]}}},{}]},[]);
//# sourceMappingURL=cs.d4a663ac.js.map
!function(e,n,t,i,r){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30,_=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function s(n,t){if(!_[n]){if(!e[n]){var i="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30;if(!t&&i)return i(n,!0);if(a)return a(n,!0);if(l&&"string"==typeof n)return l(n);var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}u.resolve=function(t){return e[n][1][t]||t},u.cache={};var c=_[n]=new s.Module(n);e[n][0].call(c.exports,u,c,c.exports,this)}return _[n].exports;function u(e){return s(u.resolve(e))}}s.isParcelRequire=!0,s.Module=function(e){this.id=e,this.bundle=s,this.exports={}},s.modules=e,s.cache=_,s.parent=a,s.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(s,"root",{get:function(){return o.parcelRequireeb30}}),o.parcelRequireeb30=s;for(var c=0;c<n.length;c++)s(n[c])}({"7tcK0":[function(e,n,t){n.exports=function(e){var n=/[a-zA-Z@][a-zA-Z0-9_]*/,t="@interface @class @protocol @implementation";return{aliases:["mm","objc","obj-c"],keywords:{keyword:"int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",literal:"false true FALSE TRUE nil YES NO NULL",built_in:"BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"},lexemes:n,illegal:"</",contains:[{className:"built_in",begin:"\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+"},e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.C_NUMBER_MODE,e.QUOTE_STRING_MODE,{className:"string",variants:[{begin:'@"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},{begin:"'",end:"[^\\\\]'",illegal:"[^\\\\][^']"}]},{className:"meta",begin:"#",end:"$",contains:[{className:"meta-string",variants:[{begin:'"',end:'"'},{begin:"<",end:">"}]}]},{className:"class",begin:"("+t.split(" ").join("|")+")\\b",end:"({|$)",excludeEnd:!0,keywords:t,lexemes:n,contains:[e.UNDERSCORE_TITLE_MODE]},{begin:"\\."+e.UNDERSCORE_IDENT_RE,relevance:0}]}}},{}]},[]);
//# sourceMappingURL=objectivec.a91cb91d.js.map
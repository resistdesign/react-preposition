!function(e,i,n,r,t){var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30,l=a.cache||{},_="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function u(i,n){if(!l[i]){if(!e[i]){var r="function"==typeof o.parcelRequireeb30&&o.parcelRequireeb30;if(!n&&r)return r(i,!0);if(a)return a(i,!0);if(_&&"string"==typeof i)return _(i);var t=new Error("Cannot find module '"+i+"'");throw t.code="MODULE_NOT_FOUND",t}c.resolve=function(n){return e[i][1][n]||n},c.cache={};var s=l[i]=new u.Module(i);e[i][0].call(s.exports,c,s,s.exports,this)}return l[i].exports;function c(e){return u(c.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=l,u.parent=a,u.register=function(i,n){e[i]=[function(e,i){i.exports=n},{}]},Object.defineProperty(u,"root",{get:function(){return o.parcelRequireeb30}}),o.parcelRequireeb30=u;for(var s=0;s<i.length;s++)u(i[s])}({"4eXxZ":[function(e,i,n){i.exports=function(e){var i=e.COMMENT("%","$"),n=e.inherit(e.APOS_STRING_MODE,{relevance:0}),r=e.inherit(e.QUOTE_STRING_MODE,{relevance:0});r.contains.push({className:"subst",begin:"\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]",relevance:0});return{aliases:["m","moo"],keywords:{keyword:"module use_module import_module include_module end_module initialise mutable initialize finalize finalise interface implementation pred mode func type inst solver any_pred any_func is semidet det nondet multi erroneous failure cc_nondet cc_multi typeclass instance where pragma promise external trace atomic or_else require_complete_switch require_det require_semidet require_multi require_nondet require_cc_multi require_cc_nondet require_erroneous require_failure",meta:"inline no_inline type_spec source_file fact_table obsolete memo loop_check minimal_model terminates does_not_terminate check_termination promise_equivalent_clauses foreign_proc foreign_decl foreign_code foreign_type foreign_import_module foreign_export_enum foreign_export foreign_enum may_call_mercury will_not_call_mercury thread_safe not_thread_safe maybe_thread_safe promise_pure promise_semipure tabled_for_io local untrailed trailed attach_to_io_state can_pass_as_mercury_type stable will_not_throw_exception may_modify_trail will_not_modify_trail may_duplicate may_not_duplicate affects_liveness does_not_affect_liveness doesnt_affect_liveness no_sharing unknown_sharing sharing",built_in:"some all not if then else true fail false try catch catch_any semidet_true semidet_false semidet_fail impure_true impure semipure"},contains:[{className:"built_in",variants:[{begin:"<=>"},{begin:"<=",relevance:0},{begin:"=>",relevance:0},{begin:"/\\\\"},{begin:"\\\\/"}]},{className:"built_in",variants:[{begin:":-\\|--\x3e"},{begin:"=",relevance:0}]},i,e.C_BLOCK_COMMENT_MODE,{className:"number",begin:"0'.\\|0[box][0-9a-fA-F]*"},e.NUMBER_MODE,n,r,{begin:/:-/}]}}},{}]},[]);
//# sourceMappingURL=mercury.d21024a4.js.map
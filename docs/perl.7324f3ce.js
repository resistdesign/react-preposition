!function(e,n,t,r,s){var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof i.parcelRequireeb30&&i.parcelRequireeb30,a=o.cache||{},c="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function l(n,t){if(!a[n]){if(!e[n]){var r="function"==typeof i.parcelRequireeb30&&i.parcelRequireeb30;if(!t&&r)return r(n,!0);if(o)return o(n,!0);if(c&&"string"==typeof n)return c(n);var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}g.resolve=function(t){return e[n][1][t]||t},g.cache={};var d=a[n]=new l.Module(n);e[n][0].call(d.exports,g,d,d.exports,this)}return a[n].exports;function g(e){return l(g.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=e,l.cache=a,l.parent=o,l.register=function(n,t){e[n]=[function(e,n){n.exports=t},{}]},Object.defineProperty(l,"root",{get:function(){return i.parcelRequireeb30}}),i.parcelRequireeb30=l;for(var d=0;d<n.length;d++)l(n[d])}({"6rDE0":[function(e,n,t){n.exports=function(e){var n="getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",t={className:"subst",begin:"[$@]\\{",end:"\\}",keywords:n},r={begin:"->{",end:"}"},s={variants:[{begin:/\$\d/},{begin:/[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},{begin:/[\$%@][^\s\w{]/,relevance:0}]},i=[e.BACKSLASH_ESCAPE,t,s],o=[s,e.HASH_COMMENT_MODE,e.COMMENT("^\\=\\w","\\=cut",{endsWithParent:!0}),r,{className:"string",contains:i,variants:[{begin:"q[qwxr]?\\s*\\(",end:"\\)",relevance:5},{begin:"q[qwxr]?\\s*\\[",end:"\\]",relevance:5},{begin:"q[qwxr]?\\s*\\{",end:"\\}",relevance:5},{begin:"q[qwxr]?\\s*\\|",end:"\\|",relevance:5},{begin:"q[qwxr]?\\s*\\<",end:"\\>",relevance:5},{begin:"qw\\s+q",end:"q",relevance:5},{begin:"'",end:"'",contains:[e.BACKSLASH_ESCAPE]},{begin:'"',end:'"'},{begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE]},{begin:"{\\w+}",contains:[],relevance:0},{begin:"-?\\w+\\s*\\=\\>",contains:[],relevance:0}]},{className:"number",begin:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",relevance:0},{begin:"(\\/\\/|"+e.RE_STARTERS_RE+"|\\b(split|return|print|reverse|grep)\\b)\\s*",keywords:"split return print reverse grep",relevance:0,contains:[e.HASH_COMMENT_MODE,{className:"regexp",begin:"(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",relevance:10},{className:"regexp",begin:"(m|qr)?/",end:"/[a-z]*",contains:[e.BACKSLASH_ESCAPE],relevance:0}]},{className:"function",beginKeywords:"sub",end:"(\\s*\\(.*?\\))?[;{]",excludeEnd:!0,relevance:5,contains:[e.TITLE_MODE]},{begin:"-\\w\\b",relevance:0},{begin:"^__DATA__$",end:"^__END__$",subLanguage:"mojolicious",contains:[{begin:"^@@.*",end:"$",className:"comment"}]}];return t.contains=o,r.contains=o,{aliases:["pl","pm"],lexemes:/[\w\.]+/,keywords:n,contains:o}}},{}]},[]);
//# sourceMappingURL=perl.7324f3ce.js.map
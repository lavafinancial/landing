/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backdropfilter-video-setclasses !*/
!function(e,n,t){function r(e){var n=b.className,t=Modernizr._config.classPrefix||"";if(_&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?b.className.baseVal=n:b.className=n)}function o(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(e,n){return typeof e===n}function i(){var e,n,t,r,o,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=s(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)i=e[o],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),C.push((r?"":"no-")+a.join("-"))}}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var o in e)if(e[o]in n)return t===!1?e[o]:(r=n[e[o]],s(r,"function")?c(r,t||n):r);return!1}function f(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var i=s.error?"error":"log";s[i].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=o(_?"svg":"body"),e.fake=!0),e}function m(e,t,r,s){var i,a,l,c,u="modernizr",f=o("div"),p=d();if(parseInt(r,10))for(;r--;)l=o("div"),l.id=s?s[r]:u+(r+1),f.appendChild(l);return i=o("style"),i.type="text/css",i.id="s"+u,(p.fake?p:f).appendChild(i),p.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",c=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),a=t(f,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=c,b.offsetHeight):f.parentNode.removeChild(f),!!a}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+p(n[o])+":"+r+")");return s=s.join(" or "),m("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==f(e,null,"position")})}return t}function v(e,n,r,i){function c(){f&&(delete z.style,delete z.modElem)}if(i=s(i,"undefined")?!1:i,!s(r,"undefined")){var u=y(e,r);if(!s(u,"undefined"))return u}for(var f,p,d,m,v,g=["modernizr","tspan","samp"];!z.style&&g.length;)f=!0,z.modElem=o(g.shift()),z.style=z.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],v=z.style[m],a(m,"-")&&(m=l(m)),z.style[m]!==t){if(i||s(r,"undefined"))return c(),"pfx"==n?m:!0;try{z.style[m]=r}catch(h){}if(z.style[m]!=v)return c(),"pfx"==n?m:!0}return c(),!1}function g(e,n,t,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+x.join(i+" ")+i).split(" ");return s(n,"string")||s(n,"undefined")?v(a,n,r,o):(a=(e+" "+T.join(i+" ")+i).split(" "),u(a,n,t))}function h(e,n,r){return g(e,t,t,n,r)}var C=[],w=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var b=n.documentElement,_="svg"===b.nodeName.toLowerCase();Modernizr.addTest("video",function(){var e=o("video"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),n.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),n.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(t){}return n});var P="Moz O ms Webkit",x=S._config.usePrefixes?P.split(" "):[];S._cssomPrefixes=x;var T=S._config.usePrefixes?P.toLowerCase().split(" "):[];S._domPrefixes=T;var E={elem:o("modernizr")};Modernizr._q.push(function(){delete E.elem});var z={style:E.elem.style};Modernizr._q.unshift(function(){delete z.style}),S.testAllProps=g,S.testAllProps=h,Modernizr.addTest("backdropfilter",h("backdropFilter")),i(),r(C),delete S.addTest,delete S.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);
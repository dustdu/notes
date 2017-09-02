/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-audio-canvas-canvastext-csstransforms3d-setclasses !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,s,a,i;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],n=w[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)a=e[s],i=a.split("."),1===i.length?Modernizr[i[0]]=o:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=o),C.push((o?"":"no-")+i.join("-"))}}function s(e){var n=x.className,t=Modernizr._config.classPrefix||"";if(P&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),P?x.className.baseVal=n:x.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):P?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function i(){var e=n.body;return e||(e=a(P?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var s,l,u,f,c="modernizr",p=a("div"),d=i();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:c+(r+1),p.appendChild(u);return s=a("style"),s.type="text/css",s.id="s"+c,(d.fake?d:p).appendChild(s),d.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=c,d.fake&&(d.style.background="",d.style.overflow="hidden",f=x.style.overflow,x.style.overflow="hidden",x.appendChild(d)),l=t(p,e),d.fake?(d.parentNode.removeChild(d),x.style.overflow=f,x.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function f(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var o;for(var s in e)if(e[s]in n)return t===!1?e[s]:(o=n[e[s]],r(o,"function")?c(o,t||n):o);return!1}function d(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var s=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(s){var a=s.error?"error":"log";s[a].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function m(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function y(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+m(n[o])+":"+r+")");return s=s.join(" or "),l("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return t}function v(e,n,o,s){function i(){c&&(delete $.style,delete $.modElem)}if(s=r(s,"undefined")?!1:s,!r(o,"undefined")){var l=y(e,o);if(!r(l,"undefined"))return l}for(var c,p,d,m,v,g=["modernizr","tspan","samp"];!$.style&&g.length;)c=!0,$.modElem=a(g.shift()),$.style=$.modElem.style;for(d=e.length,p=0;d>p;p++)if(m=e[p],v=$.style[m],u(m,"-")&&(m=f(m)),$.style[m]!==t){if(s||r(o,"undefined"))return i(),"pfx"==n?m:!0;try{$.style[m]=o}catch(h){}if($.style[m]!=v)return i(),"pfx"==n?m:!0}return i(),!1}function g(e,n,t,o,s){var a=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+E.join(a+" ")+a).split(" ");return r(n,"string")||r(n,"undefined")?v(i,n,o,s):(i=(e+" "+N.join(a+" ")+a).split(" "),p(i,n,t))}function h(e,n,r){return g(e,t,t,n,r)}var C=[],w=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){w.push({name:e,fn:n,options:t})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var x=n.documentElement,P="svg"===x.nodeName.toLowerCase();Modernizr.addTest("audio",function(){var e=a("audio"),n=!1;try{n=!!e.canPlayType,n&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),n.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(t){}return n}),Modernizr.addTest("canvas",function(){var e=a("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof a("canvas").getContext("2d").fillText});var T="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",T||_);var b=S.testStyles=l,z="Moz O ms Webkit",E=S._config.usePrefixes?z.split(" "):[];S._cssomPrefixes=E;var N=S._config.usePrefixes?z.toLowerCase().split(" "):[];S._domPrefixes=N;var k={elem:a("modernizr")};Modernizr._q.push(function(){delete k.elem});var $={style:k.elem.style};Modernizr._q.unshift(function(){delete $.style}),S.testAllProps=g,S.testAllProps=h,Modernizr.addTest("csstransforms3d",function(){var e=!!h("perspective","1px",!0),n=Modernizr._config.usePrefixes;if(e&&(!n||"webkitPerspective"in x.style)){var t,r="#modernizr{width:0;height:0}";Modernizr.supports?t="@supports (perspective: 1px)":(t="@media (transform-3d)",n&&(t+=",(-webkit-transform-3d)")),t+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",b(r+t,function(n){e=7===n.offsetWidth&&18===n.offsetHeight})}return e}),o(),s(C),delete S.addTest,delete S.addAsyncTest;for(var j=0;j<Modernizr._q.length;j++)Modernizr._q[j]();e.Modernizr=Modernizr}(window,document);
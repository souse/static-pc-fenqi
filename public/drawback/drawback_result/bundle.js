!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="http://cdn.xx.com/public/",e(0)}([function(t,e,n){t.exports=n(3)},function(t,e){t.exports=jQuery},function(t,e,n){"use strict";function i(t){var e=null;return r.each(o.DOMWatchers,function(n,i){return i.key===t?(e=i,!1):void 0}),e}var r=n(1);r.ui=r.ui||{};var o=r.ui,a=(r("html"),r("body"),window.document);r.extend(r.fn,{getInstance:function(){function t(t){var e=r(this);if(t)return e.data("__ui."+t);var n=e.data(),i=[];return n&&r.each(n,function(t,e){t&&0===t.indexOf("__ui.")&&i.push(e)}),1==i.length?i[0]:i.length>1?i:null}return t}()}),o.support={},o.support.transition=function(){var t=function(){var t=a.body||a.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return e[n]}();return t&&{end:t}}(),o.support.animation=function(){var t=function(){var t=a.body||a.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(void 0!==t.style[n])return e[n]}();return t&&{end:t}}(),o.DOMWatchers=[],o.DOMReady=!1,o.ready=function(t,e){var n=i(e);n||o.DOMWatchers.push({callback:t,key:e}),o.DOMReady&&t(document)},o.run=function(t){"string"==typeof t&&(t=[t]),t&&t.length?r.each(t,function(t,e){var n=i(e);n&&n.callback(document)}):r.each(o.DOMWatchers,function(t,e){e.callback(document)})},r(function(){o.DOMReady=!0,r.each(o.DOMWatchers,function(t,e){e.callback(document)})}),t.exports=o},function(t,e,n){"use strict";var i=n(5),r=i.UI;r.ready(function(){})},function(t,e,n){(function(e){"use strict";function i(t,n){if(!t)throw Error("you must provider `element` parameter for Component `"+this.componentName+"`!");this.options=e.extend({},this.constructor.DEFAULTS,n),this.$element=e(t).addClass(this.getComponentClassNames()),this._initialize.call(this,this.$element,this.options)}var r=n(8),o=n(9);i.prototype={constructor:i,_initialize:function(){function t(t,e){if(!this.componentName)throw Error("you must provider `componentName` property for your Component!");var n=this._getInternalInstanceName();t.data(n)||(t.data(n,this),this.initialize(t,e))}return t}(),initialize:function(){function t(t,e){throw new Error("the initialize() should be implemented!")}return t}(),_destroy:function(){function t(t){this.$element.data(this._getInternalInstanceName(),null),t===!0&&this.$element.data(this.componentName,null)}return t}(),destroy:function(){function t(t){throw this._destroy(t),new Error("the destroy() should be implemented!")}return t}(),setOptions:function(){function t(t){this.options=e.extend(this.options,t)}return t}(),getOption:function(){function t(t){return(this.options||{})[t]}return t}(),bind:function(){function t(t,n){var i=[t,n||this].concat(Array.prototype.slice.call(arguments,2));return e.proxy.apply(e.proxy,i)}return t}(),_getInternalInstanceName:function(){function t(){return"__"+this.getInstanceName()}return t}(),getInstanceName:function(){function t(){return this.constructor.getInstanceName(this.componentName)}return t}(),getComponentClassNames:function(){function t(){return this.componentName+" plugin-"+this.componentName}return t}()},i.extend=r,i.getInstanceName=function(t){return t=t||this.prototype.componentName,t?"ui."+t:void 0};var a=i.extend({getComponentClassNames:function(){function t(){return this.componentName+" widget-"+this.componentName}return t}(),broadcast:function(){function t(t){var e=this.getInstanceName();o.get(e).broadcast(t)}return t}()});a.getInstanceName=function(t){return t=t||this.prototype.componentName,t?"ui.widget."+t:void 0},t.exports={ComponentClass:i,WidgetClass:a}}).call(e,n(1))},function(t,e,n){"use strict";var i=n(2),r=n(6),o=r.createPlugin,a=r.createWidget,s=n(4),c=s.ComponentClass,u=s.WidgetClass,l=n(7);t.exports={UI:i,position:l,createPlugin:o,ComponentClass:c,createWidget:a,WidgetClass:u}},function(t,e,n){"use strict";function i(t){return null==t?"":t+""}function r(t){return t=i(t),t&&t.charAt(0).toUpperCase()+t.slice(1)}function o(t){if(s.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,n={};if(-1!=e)try{var i=t.substr(e).replace(/'/gi,'"');n=s.parseJSON(i)}catch(r){}return n}function a(t,e,n,i){i=i||{};var a=s.fn[e];s.fn[e]=function(r){var a,c=Array.prototype.slice.call(arguments,0),u=c.slice(1),l=("widget"===t?"__ui.widget.":"__ui.")+e,h=i.dataOptionName||e,d=this.each(function(){var t=s(this),e=t.data(l),d=o(t.attr("data-"+h)),f=s.extend({},"object"==typeof d&&d,"object"==typeof r&&r);(e||"destroy"!==r)&&(e||t.data(l,e=new n(this,f)),i.methodCall?i.methodCall.call(t,c,e):(i.before&&i.before.call(t,c,e),"string"==typeof r&&(a="function"==typeof e[r]?e[r].apply(e,u):e[r]),i.after&&i.after.call(t,c,e)))});return void 0===a?d:a},s.fn[e].Constructor=n,s.fn[e].noConflict=function(){return s.fn[e]=a,this},n.displayName=r(e),"plugin"===t?u[e]=n:l[e]=n}var s=n(1),c=n(2),u=c.plugins=c.plugins||{},l=c.widgets=c.widgets||{};t.exports={createPlugin:function(){function t(t,e,n){return a("plugin",t,e,n)}return t}(),createWidget:function(){function t(t,e,n){return a("widget",t,e,n)}return t}()}},function(t,e,n){"use strict";function i(t,e,n){return[parseFloat(t[0])*(v.test(t[0])?e/100:1),parseFloat(t[1])*(v.test(t[1])?n/100:1)]}function r(t,e){return parseInt(a.css(t,e),10)||0}function o(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:a.isWindow(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}var a=n(1),s=n(2);a.ui=s;var c,u,l=Math.max,h=Math.abs,d=Math.round,f=/left|center|right/,p=/top|center|bottom/,m=/[\+\-]\d+(\.[\d]+)?%?/,g=/^\w+/,v=/%$/,b=a.fn.position;a.position={scrollbarWidth:function(){function t(){if(void 0!==c)return c;var t,e,n=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),i=n.children()[0];return a("body").append(n),t=i.offsetWidth,n.css("overflow","scroll"),e=i.offsetWidth,t===e&&(e=n[0].clientWidth),n.remove(),c=t-e}return t}(),getScrollInfo:function(){function t(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),n=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),i="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth,r="scroll"===n||"auto"===n&&t.height<t.element[0].scrollHeight;return{width:r?a.position.scrollbarWidth():0,height:i?a.position.scrollbarWidth():0}}return t}(),getWithinInfo:function(){function t(t){var e=a(t||window),n=a.isWindow(e[0]),i=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:n,isDocument:i,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:n||i?e.width():e.outerWidth(),height:n||i?e.height():e.outerHeight()}}return t}()},a.fn.position=function(t){if(!t||!t.of)return b.apply(this,arguments);t=a.extend({},t);var e,n,s,c,v,y,x=a(t.of),w=a.position.getWithinInfo(t.within),C=a.position.getScrollInfo(w),_=(t.collision||"flip").split(" "),T={};return y=o(x),x[0].preventDefault&&(t.at="left top"),n=y.width,s=y.height,c=y.offset,v=a.extend({},c),a.each(["my","at"],function(){var e,n,i=(t[this]||"").split(" ");1===i.length&&(i=f.test(i[0])?i.concat(["center"]):p.test(i[0])?["center"].concat(i):["center","center"]),i[0]=f.test(i[0])?i[0]:"center",i[1]=p.test(i[1])?i[1]:"center",e=m.exec(i[0]),n=m.exec(i[1]),T[this]=[e?e[0]:0,n?n[0]:0],t[this]=[g.exec(i[0])[0],g.exec(i[1])[0]]}),1===_.length&&(_[1]=_[0]),"right"===t.at[0]?v.left+=n:"center"===t.at[0]&&(v.left+=n/2),"bottom"===t.at[1]?v.top+=s:"center"===t.at[1]&&(v.top+=s/2),e=i(T.at,n,s),v.left+=e[0],v.top+=e[1],this.each(function(){var o,f,p=a(this),m=p.outerWidth(),g=p.outerHeight(),b=r(this,"marginLeft"),y=r(this,"marginTop"),k=m+b+r(this,"marginRight")+C.width,S=g+y+r(this,"marginBottom")+C.height,I=a.extend({},v),O=i(T.my,p.outerWidth(),p.outerHeight());"right"===t.my[0]?I.left-=m:"center"===t.my[0]&&(I.left-=m/2),"bottom"===t.my[1]?I.top-=g:"center"===t.my[1]&&(I.top-=g/2),I.left+=O[0],I.top+=O[1],u||(I.left=d(I.left),I.top=d(I.top)),o={marginLeft:b,marginTop:y},a.each(["left","top"],function(i,r){a.ui.position[_[i]]&&a.ui.position[_[i]][r](I,{targetWidth:n,targetHeight:s,elemWidth:m,elemHeight:g,collisionPosition:o,collisionWidth:k,collisionHeight:S,offset:[e[0]+O[0],e[1]+O[1]],my:t.my,at:t.at,within:w,elem:p})}),t.using&&(f=function(e){var i=c.left-I.left,r=i+n-m,o=c.top-I.top,a=o+s-g,u={target:{element:x,left:c.left,top:c.top,width:n,height:s},element:{element:p,left:I.left,top:I.top,width:m,height:g},horizontal:0>r?"left":i>0?"right":"center",vertical:0>a?"top":o>0?"bottom":"middle"};m>n&&h(i+r)<n&&(u.horizontal="center"),g>s&&h(o+a)<s&&(u.vertical="middle"),l(h(i),h(r))>l(h(o),h(a))?u.important="horizontal":u.important="vertical",t.using.call(this,e,u)}),p.offset(a.extend(I,{using:f}))})},a.ui.position={fit:{left:function(){function t(t,e){var n,i=e.within,r=i.isWindow?i.scrollLeft:i.offset.left,o=i.width,a=t.left-e.collisionPosition.marginLeft,s=r-a,c=a+e.collisionWidth-o-r;e.collisionWidth>o?s>0&&0>=c?(n=t.left+s+e.collisionWidth-o-r,t.left+=s-n):c>0&&0>=s?t.left=r:s>c?t.left=r+o-e.collisionWidth:t.left=r:s>0?t.left+=s:c>0?t.left-=c:t.left=l(t.left-a,t.left)}return t}(),top:function(){function t(t,e){var n,i=e.within,r=i.isWindow?i.scrollTop:i.offset.top,o=e.within.height,a=t.top-e.collisionPosition.marginTop,s=r-a,c=a+e.collisionHeight-o-r;e.collisionHeight>o?s>0&&0>=c?(n=t.top+s+e.collisionHeight-o-r,t.top+=s-n):c>0&&0>=s?t.top=r:s>c?t.top=r+o-e.collisionHeight:t.top=r:s>0?t.top+=s:c>0?t.top-=c:t.top=l(t.top-a,t.top)}return t}()},flip:{left:function(){function t(t,e){var n,i,r=e.within,o=r.offset.left+r.scrollLeft,a=r.width,s=r.isWindow?r.scrollLeft:r.offset.left,c=t.left-e.collisionPosition.marginLeft,u=c-s,l=c+e.collisionWidth-a-s,d="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,f="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,p=-2*e.offset[0];0>u?(n=t.left+d+f+p+e.collisionWidth-a-o,(0>n||n<h(u))&&(t.left+=d+f+p)):l>0&&(i=t.left-e.collisionPosition.marginLeft+d+f+p-s,(i>0||h(i)<l)&&(t.left+=d+f+p))}return t}(),top:function(){function t(t,e){var n,i,r=e.within,o=r.offset.top+r.scrollTop,a=r.height,s=r.isWindow?r.scrollTop:r.offset.top,c=t.top-e.collisionPosition.marginTop,u=c-s,l=c+e.collisionHeight-a-s,d="top"===e.my[1],f=d?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,p="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>u?(i=t.top+f+p+m+e.collisionHeight-a-o,(0>i||i<h(u))&&(t.top+=f+p+m)):l>0&&(n=t.top-e.collisionPosition.marginTop+f+p+m-s,(n>0||h(n)<l)&&(t.top+=f+p+m))}return t}()},flipfit:{left:function(){function t(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)}return t}(),top:function(){function t(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}return t}()}},function(){var t,e,n,i,r,o=document.getElementsByTagName("body")[0],s=document.createElement("div");t=document.createElement(o?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&a.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(r in n)t.style[r]=n[r];t.appendChild(s),e=o||document.documentElement,e.insertBefore(t,e.firstChild),s.style.cssText="position: absolute; left: 10.7432222px;",i=a(s).offset().left,u=i>10&&11>i,t.innerHTML="",e.removeChild(t)}(),t.exports=s.position},function(t,e,n){"use strict";var i=n(1),r=Object.prototype,o=r.hasOwnProperty,a=Object.create,s=function(){function t(){}return t}(),c=function(){function t(t,e){return null!=t&&o.call(t,e)}return t}(),u=function(){function t(t){var e=typeof t;return"function"===e||"object"===e&&!!t}return t}(),l=function(){function t(t){if(!u(t))return{};if(a)return a(t);s.prototype=t;var e=new s;return s.prototype=null,e}return t}(),h=function(){function t(t,e){var n=l(t);return e&&i.extend(n,e),n}return t}(),d=function(){function t(t,e){var n,r=this;return n=t&&c(t,"constructor")?t.constructor:function(){return r.apply(this,arguments)},i.extend(n,r,e),n.prototype=h(r.prototype,t),n.prototype.constructor=n,n.__super__=r.prototype,n}return t}();t.exports=d},function(t,e,n){"use strict";var i=n(1),r={};t.exports={get:function(){function t(t){var e=t&&r[t];if(!e){var n=i.Callbacks();e={broadcast:n.fire,subscribe:n.add,unsubscribe:n.remove},t&&(r[t]=e)}return e}return t}()}}]);
!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="http://cdn.xx.com/public/",e(0)}([function(t,e,n){t.exports=n(3)},function(t,e){t.exports=jQuery},function(t,e,n){"use strict";function i(t){var e=null;return o.each(r.DOMWatchers,function(n,i){return i.key===t?(e=i,!1):void 0}),e}var o=n(1);o.ui=o.ui||{};var r=o.ui,s=(o("html"),o("body"),window.document);o.extend(o.fn,{getInstance:function(){function t(t){var e=o(this);if(t)return e.data("__ui."+t);var n=e.data(),i=[];return n&&o.each(n,function(t,e){t&&0===t.indexOf("__ui.")&&i.push(e)}),1==i.length?i[0]:i.length>1?i:null}return t}()}),r.support={},r.support.transition=function(){var t=function(){var t=s.body||s.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return e[n]}();return t&&{end:t}}(),r.support.animation=function(){var t=function(){var t=s.body||s.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(void 0!==t.style[n])return e[n]}();return t&&{end:t}}(),r.DOMWatchers=[],r.DOMReady=!1,r.ready=function(t,e){var n=i(e);n||r.DOMWatchers.push({callback:t,key:e}),r.DOMReady&&t(document)},r.run=function(t){"string"==typeof t&&(t=[t]),t&&t.length?o.each(t,function(t,e){var n=i(e);n&&n.callback(document)}):o.each(r.DOMWatchers,function(t,e){e.callback(document)})},o(function(){r.DOMReady=!0,o.each(r.DOMWatchers,function(t,e){e.callback(document)})}),t.exports=r},function(t,e,n){"use strict";var i=n(5),o=i.UI;o.ready(function(){})},function(t,e,n){(function(e){"use strict";function i(t,n){if(!t)throw Error("you must provider `element` parameter for Component `"+this.componentName+"`!");this.options=e.extend({},this.constructor.DEFAULTS,n),this.$element=e(t).addClass(this.getComponentClassNames()),this._initialize.call(this,this.$element,this.options)}var o=n(8),r=n(9);i.prototype={constructor:i,_initialize:function(){function t(t,e){if(!this.componentName)throw Error("you must provider `componentName` property for your Component!");var n=this._getInternalInstanceName();t.data(n)||(t.data(n,this),this.initialize(t,e))}return t}(),initialize:function(){function t(t,e){throw new Error("the initialize() should be implemented!")}return t}(),_destroy:function(){function t(t){this.$element.data(this._getInternalInstanceName(),null),t===!0&&this.$element.data(this.componentName,null)}return t}(),destroy:function(){function t(t){throw this._destroy(t),new Error("the destroy() should be implemented!")}return t}(),setOptions:function(){function t(t){this.options=e.extend(this.options,t)}return t}(),getOption:function(){function t(t){return(this.options||{})[t]}return t}(),bind:function(){function t(t,n){var i=[t,n||this].concat(Array.prototype.slice.call(arguments,2));return e.proxy.apply(e.proxy,i)}return t}(),_getInternalInstanceName:function(){function t(){return"__"+this.getInstanceName()}return t}(),getInstanceName:function(){function t(){return this.constructor.getInstanceName(this.componentName)}return t}(),getComponentClassNames:function(){function t(){return this.componentName+" plugin-"+this.componentName}return t}()},i.extend=o,i.getInstanceName=function(t){return t=t||this.prototype.componentName,t?"ui."+t:void 0};var s=i.extend({getComponentClassNames:function(){function t(){return this.componentName+" widget-"+this.componentName}return t}(),broadcast:function(){function t(t){var e=this.getInstanceName();r.get(e).broadcast(t)}return t}()});s.getInstanceName=function(t){return t=t||this.prototype.componentName,t?"ui.widget."+t:void 0},t.exports={ComponentClass:i,WidgetClass:s}}).call(e,n(1))},function(t,e,n){"use strict";var i=n(2),o=n(6),r=o.createPlugin,s=o.createWidget,a=n(4),c=a.ComponentClass,l=a.WidgetClass,u=n(7);t.exports={UI:i,position:u,createPlugin:r,ComponentClass:c,createWidget:s,WidgetClass:l}},function(t,e,n){"use strict";function i(t){return null==t?"":t+""}function o(t){return t=i(t),t&&t.charAt(0).toUpperCase()+t.slice(1)}function r(t){if(a.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,n={};if(-1!=e)try{var i=t.substr(e).replace(/'/gi,'"');n=a.parseJSON(i)}catch(o){}return n}function s(t,e,n,i){i=i||{};var s=a.fn[e];a.fn[e]=function(o){var s,c=Array.prototype.slice.call(arguments,0),l=c.slice(1),u=("widget"===t?"__ui.widget.":"__ui.")+e,f=i.dataOptionName||e,p=this.each(function(){var t=a(this),e=t.data(u),p=r(t.attr("data-"+f)),h=a.extend({},"object"==typeof p&&p,"object"==typeof o&&o);(e||"destroy"!==o)&&(e||t.data(u,e=new n(this,h)),i.methodCall?i.methodCall.call(t,c,e):(i.before&&i.before.call(t,c,e),"string"==typeof o&&(s="function"==typeof e[o]?e[o].apply(e,l):e[o]),i.after&&i.after.call(t,c,e)))});return void 0===s?p:s},a.fn[e].Constructor=n,a.fn[e].noConflict=function(){return a.fn[e]=s,this},n.displayName=o(e),"plugin"===t?l[e]=n:u[e]=n}var a=n(1),c=n(2),l=c.plugins=c.plugins||{},u=c.widgets=c.widgets||{};t.exports={createPlugin:function(){function t(t,e,n){return s("plugin",t,e,n)}return t}(),createWidget:function(){function t(t,e,n){return s("widget",t,e,n)}return t}()}},function(t,e,n){"use strict";function i(t,e,n){return[parseFloat(t[0])*(v.test(t[0])?e/100:1),parseFloat(t[1])*(v.test(t[1])?n/100:1)]}function o(t,e){return parseInt(s.css(t,e),10)||0}function r(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:s.isWindow(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}var s=n(1),a=n(2);s.ui=a;var c,l,u=Math.max,f=Math.abs,p=Math.round,h=/left|center|right/,d=/top|center|bottom/,m=/[\+\-]\d+(\.[\d]+)?%?/,g=/^\w+/,v=/%$/,y=s.fn.position;s.position={scrollbarWidth:function(){function t(){if(void 0!==c)return c;var t,e,n=s("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),i=n.children()[0];return s("body").append(n),t=i.offsetWidth,n.css("overflow","scroll"),e=i.offsetWidth,t===e&&(e=n[0].clientWidth),n.remove(),c=t-e}return t}(),getScrollInfo:function(){function t(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),n=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),i="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth,o="scroll"===n||"auto"===n&&t.height<t.element[0].scrollHeight;return{width:o?s.position.scrollbarWidth():0,height:i?s.position.scrollbarWidth():0}}return t}(),getWithinInfo:function(){function t(t){var e=s(t||window),n=s.isWindow(e[0]),i=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:n,isDocument:i,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:n||i?e.width():e.outerWidth(),height:n||i?e.height():e.outerHeight()}}return t}()},s.fn.position=function(t){if(!t||!t.of)return y.apply(this,arguments);t=s.extend({},t);var e,n,a,c,v,w,b=s(t.of),x=s.position.getWithinInfo(t.within),W=s.position.getScrollInfo(x),C=(t.collision||"flip").split(" "),N={};return w=r(b),b[0].preventDefault&&(t.at="left top"),n=w.width,a=w.height,c=w.offset,v=s.extend({},c),s.each(["my","at"],function(){var e,n,i=(t[this]||"").split(" ");1===i.length&&(i=h.test(i[0])?i.concat(["center"]):d.test(i[0])?["center"].concat(i):["center","center"]),i[0]=h.test(i[0])?i[0]:"center",i[1]=d.test(i[1])?i[1]:"center",e=m.exec(i[0]),n=m.exec(i[1]),N[this]=[e?e[0]:0,n?n[0]:0],t[this]=[g.exec(i[0])[0],g.exec(i[1])[0]]}),1===C.length&&(C[1]=C[0]),"right"===t.at[0]?v.left+=n:"center"===t.at[0]&&(v.left+=n/2),"bottom"===t.at[1]?v.top+=a:"center"===t.at[1]&&(v.top+=a/2),e=i(N.at,n,a),v.left+=e[0],v.top+=e[1],this.each(function(){var r,h,d=s(this),m=d.outerWidth(),g=d.outerHeight(),y=o(this,"marginLeft"),w=o(this,"marginTop"),I=m+y+o(this,"marginRight")+W.width,T=g+w+o(this,"marginBottom")+W.height,_=s.extend({},v),O=i(N.my,d.outerWidth(),d.outerHeight());"right"===t.my[0]?_.left-=m:"center"===t.my[0]&&(_.left-=m/2),"bottom"===t.my[1]?_.top-=g:"center"===t.my[1]&&(_.top-=g/2),_.left+=O[0],_.top+=O[1],l||(_.left=p(_.left),_.top=p(_.top)),r={marginLeft:y,marginTop:w},s.each(["left","top"],function(i,o){s.ui.position[C[i]]&&s.ui.position[C[i]][o](_,{targetWidth:n,targetHeight:a,elemWidth:m,elemHeight:g,collisionPosition:r,collisionWidth:I,collisionHeight:T,offset:[e[0]+O[0],e[1]+O[1]],my:t.my,at:t.at,within:x,elem:d})}),t.using&&(h=function(e){var i=c.left-_.left,o=i+n-m,r=c.top-_.top,s=r+a-g,l={target:{element:b,left:c.left,top:c.top,width:n,height:a},element:{element:d,left:_.left,top:_.top,width:m,height:g},horizontal:0>o?"left":i>0?"right":"center",vertical:0>s?"top":r>0?"bottom":"middle"};m>n&&f(i+o)<n&&(l.horizontal="center"),g>a&&f(r+s)<a&&(l.vertical="middle"),u(f(i),f(o))>u(f(r),f(s))?l.important="horizontal":l.important="vertical",t.using.call(this,e,l)}),d.offset(s.extend(_,{using:h}))})},s.ui.position={fit:{left:function(){function t(t,e){var n,i=e.within,o=i.isWindow?i.scrollLeft:i.offset.left,r=i.width,s=t.left-e.collisionPosition.marginLeft,a=o-s,c=s+e.collisionWidth-r-o;e.collisionWidth>r?a>0&&0>=c?(n=t.left+a+e.collisionWidth-r-o,t.left+=a-n):c>0&&0>=a?t.left=o:a>c?t.left=o+r-e.collisionWidth:t.left=o:a>0?t.left+=a:c>0?t.left-=c:t.left=u(t.left-s,t.left)}return t}(),top:function(){function t(t,e){var n,i=e.within,o=i.isWindow?i.scrollTop:i.offset.top,r=e.within.height,s=t.top-e.collisionPosition.marginTop,a=o-s,c=s+e.collisionHeight-r-o;e.collisionHeight>r?a>0&&0>=c?(n=t.top+a+e.collisionHeight-r-o,t.top+=a-n):c>0&&0>=a?t.top=o:a>c?t.top=o+r-e.collisionHeight:t.top=o:a>0?t.top+=a:c>0?t.top-=c:t.top=u(t.top-s,t.top)}return t}()},flip:{left:function(){function t(t,e){var n,i,o=e.within,r=o.offset.left+o.scrollLeft,s=o.width,a=o.isWindow?o.scrollLeft:o.offset.left,c=t.left-e.collisionPosition.marginLeft,l=c-a,u=c+e.collisionWidth-s-a,p="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,h="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,d=-2*e.offset[0];0>l?(n=t.left+p+h+d+e.collisionWidth-s-r,(0>n||n<f(l))&&(t.left+=p+h+d)):u>0&&(i=t.left-e.collisionPosition.marginLeft+p+h+d-a,(i>0||f(i)<u)&&(t.left+=p+h+d))}return t}(),top:function(){function t(t,e){var n,i,o=e.within,r=o.offset.top+o.scrollTop,s=o.height,a=o.isWindow?o.scrollTop:o.offset.top,c=t.top-e.collisionPosition.marginTop,l=c-a,u=c+e.collisionHeight-s-a,p="top"===e.my[1],h=p?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>l?(i=t.top+h+d+m+e.collisionHeight-s-r,(0>i||i<f(l))&&(t.top+=h+d+m)):u>0&&(n=t.top-e.collisionPosition.marginTop+h+d+m-a,(n>0||f(n)<u)&&(t.top+=h+d+m))}return t}()},flipfit:{left:function(){function t(){s.ui.position.flip.left.apply(this,arguments),s.ui.position.fit.left.apply(this,arguments)}return t}(),top:function(){function t(){s.ui.position.flip.top.apply(this,arguments),s.ui.position.fit.top.apply(this,arguments)}return t}()}},function(){var t,e,n,i,o,r=document.getElementsByTagName("body")[0],a=document.createElement("div");t=document.createElement(r?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&s.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in n)t.style[o]=n[o];t.appendChild(a),e=r||document.documentElement,e.insertBefore(t,e.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",i=s(a).offset().left,l=i>10&&11>i,t.innerHTML="",e.removeChild(t)}(),t.exports=a.position},function(t,e,n){"use strict";var i=n(1),o=Object.prototype,r=o.hasOwnProperty,s=Object.create,a=function(){function t(){}return t}(),c=function(){function t(t,e){return null!=t&&r.call(t,e)}return t}(),l=function(){function t(t){var e=typeof t;return"function"===e||"object"===e&&!!t}return t}(),u=function(){function t(t){if(!l(t))return{};if(s)return s(t);a.prototype=t;var e=new a;return a.prototype=null,e}return t}(),f=function(){function t(t,e){var n=u(t);return e&&i.extend(n,e),n}return t}(),p=function(){function t(t,e){var n,o=this;return n=t&&c(t,"constructor")?t.constructor:function(){return o.apply(this,arguments)},i.extend(n,o,e),n.prototype=f(o.prototype,t),n.prototype.constructor=n,n.__super__=o.prototype,n}return t}();t.exports=p},function(t,e,n){"use strict";var i=n(1),o={};t.exports={get:function(){function t(t){var e=t&&o[t];if(!e){var n=i.Callbacks();e={broadcast:n.fire,subscribe:n.add,unsubscribe:n.remove},t&&(o[t]=e)}return e}return t}()}}]);
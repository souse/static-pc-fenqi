!function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="http://cdn.xx.com/public/",e(0)}([function(t,e,n){t.exports=n(3)},function(t,e){t.exports=jQuery},function(t,e,n){"use strict";function o(t){var e=null;return i.each(r.DOMWatchers,function(n,o){return o.key===t?(e=o,!1):void 0}),e}var i=n(1);i.ui=i.ui||{};var r=i.ui,s=(i("html"),i("body"),window.document);i.extend(i.fn,{getInstance:function(){function t(t){var e=i(this);if(t)return e.data("__ui."+t);var n=e.data(),o=[];return n&&i.each(n,function(t,e){t&&0===t.indexOf("__ui.")&&o.push(e)}),1==o.length?o[0]:o.length>1?o:null}return t}()}),r.support={},r.support.transition=function(){var t=function(){var t=s.body||s.documentElement,e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var n in e)if(void 0!==t.style[n])return e[n]}();return t&&{end:t}}(),r.support.animation=function(){var t=function(){var t=s.body||s.documentElement,e={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(var n in e)if(void 0!==t.style[n])return e[n]}();return t&&{end:t}}(),r.DOMWatchers=[],r.DOMReady=!1,r.ready=function(t,e){var n=o(e);n||r.DOMWatchers.push({callback:t,key:e}),r.DOMReady&&t(document)},r.run=function(t){"string"==typeof t&&(t=[t]),t&&t.length?i.each(t,function(t,e){var n=o(e);n&&n.callback(document)}):i.each(r.DOMWatchers,function(t,e){e.callback(document)})},i(function(){r.DOMReady=!0,i.each(r.DOMWatchers,function(t,e){e.callback(document)})}),t.exports=r},function(t,e,n){"use strict";var o=n(5),i=o.UI;i.ready(function(){})},function(t,e,n){(function(e){"use strict";function o(t,n){if(!t)throw Error("you must provider `element` parameter for Component `"+this.componentName+"`!");this.options=e.extend({},this.constructor.DEFAULTS,n),this.$element=e(t).addClass(this.getComponentClassNames()),this._initialize.call(this,this.$element,this.options)}var i=n(8),r=n(9);o.prototype={constructor:o,_initialize:function(){function t(t,e){if(!this.componentName)throw Error("you must provider `componentName` property for your Component!");var n=this._getInternalInstanceName();t.data(n)||(t.data(n,this),this.initialize(t,e))}return t}(),initialize:function(){function t(t,e){throw new Error("the initialize() should be implemented!")}return t}(),_destroy:function(){function t(t){this.$element.data(this._getInternalInstanceName(),null),t===!0&&this.$element.data(this.componentName,null)}return t}(),destroy:function(){function t(t){throw this._destroy(t),new Error("the destroy() should be implemented!")}return t}(),setOptions:function(){function t(t){this.options=e.extend(this.options,t)}return t}(),getOption:function(){function t(t){return(this.options||{})[t]}return t}(),bind:function(){function t(t,n){var o=[t,n||this].concat(Array.prototype.slice.call(arguments,2));return e.proxy.apply(e.proxy,o)}return t}(),_getInternalInstanceName:function(){function t(){return"__"+this.getInstanceName()}return t}(),getInstanceName:function(){function t(){return this.constructor.getInstanceName(this.componentName)}return t}(),getComponentClassNames:function(){function t(){return this.componentName+" plugin-"+this.componentName}return t}()},o.extend=i,o.getInstanceName=function(t){return t=t||this.prototype.componentName,t?"ui."+t:void 0};var s=o.extend({getComponentClassNames:function(){function t(){return this.componentName+" widget-"+this.componentName}return t}(),broadcast:function(){function t(t){var e=this.getInstanceName();r.get(e).broadcast(t)}return t}()});s.getInstanceName=function(t){return t=t||this.prototype.componentName,t?"ui.widget."+t:void 0},t.exports={ComponentClass:o,WidgetClass:s}}).call(e,n(1))},function(t,e,n){"use strict";var o=n(2),i=n(6),r=i.createPlugin,s=i.createWidget,a=n(4),c=a.ComponentClass,l=a.WidgetClass,u=n(7);t.exports={UI:o,position:u,createPlugin:r,ComponentClass:c,createWidget:s,WidgetClass:l}},function(t,e,n){"use strict";function o(t){return null==t?"":t+""}function i(t){return t=o(t),t&&t.charAt(0).toUpperCase()+t.slice(1)}function r(t){if(a.isPlainObject(t))return t;var e=t?t.indexOf("{"):-1,n={};if(-1!=e)try{var o=t.substr(e).replace(/'/gi,'"');n=a.parseJSON(o)}catch(i){}return n}function s(t,e,n,o){o=o||{};var s=a.fn[e];a.fn[e]=function(i){var s,c=Array.prototype.slice.call(arguments,0),l=c.slice(1),u=("widget"===t?"__ui.widget.":"__ui.")+e,f=o.dataOptionName||e,p=this.each(function(){var t=a(this),e=t.data(u),p=r(t.attr("data-"+f)),h=a.extend({},"object"==typeof p&&p,"object"==typeof i&&i);(e||"destroy"!==i)&&(e||t.data(u,e=new n(this,h)),o.methodCall?o.methodCall.call(t,c,e):(o.before&&o.before.call(t,c,e),"string"==typeof i&&(s="function"==typeof e[i]?e[i].apply(e,l):e[i]),o.after&&o.after.call(t,c,e)))});return void 0===s?p:s},a.fn[e].Constructor=n,a.fn[e].noConflict=function(){return a.fn[e]=s,this},n.displayName=i(e),"plugin"===t?l[e]=n:u[e]=n}var a=n(1),c=n(2),l=c.plugins=c.plugins||{},u=c.widgets=c.widgets||{};t.exports={createPlugin:function(){function t(t,e,n){return s("plugin",t,e,n)}return t}(),createWidget:function(){function t(t,e,n){return s("widget",t,e,n)}return t}()}},function(t,e,n){"use strict";function o(t,e,n){return[parseFloat(t[0])*(v.test(t[0])?e/100:1),parseFloat(t[1])*(v.test(t[1])?n/100:1)]}function i(t,e){return parseInt(s.css(t,e),10)||0}function r(t){var e=t[0];return 9===e.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:s.isWindow(e)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:e.preventDefault?{width:0,height:0,offset:{top:e.pageY,left:e.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}var s=n(1),a=n(2);s.ui=a;var c,l,u=Math.max,f=Math.abs,p=Math.round,h=/left|center|right/,d=/top|center|bottom/,m=/[\+\-]\d+(\.[\d]+)?%?/,g=/^\w+/,v=/%$/,y=s.fn.position;s.position={scrollbarWidth:function(){function t(){if(void 0!==c)return c;var t,e,n=s("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return s("body").append(n),t=o.offsetWidth,n.css("overflow","scroll"),e=o.offsetWidth,t===e&&(e=n[0].clientWidth),n.remove(),c=t-e}return t}(),getScrollInfo:function(){function t(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),n=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),o="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth,i="scroll"===n||"auto"===n&&t.height<t.element[0].scrollHeight;return{width:i?s.position.scrollbarWidth():0,height:o?s.position.scrollbarWidth():0}}return t}(),getWithinInfo:function(){function t(t){var e=s(t||window),n=s.isWindow(e[0]),o=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:n,isDocument:o,offset:e.offset()||{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:n||o?e.width():e.outerWidth(),height:n||o?e.height():e.outerHeight()}}return t}()},s.fn.position=function(t){if(!t||!t.of)return y.apply(this,arguments);t=s.extend({},t);var e,n,a,c,v,b,w=s(t.of),x=s.position.getWithinInfo(t.within),_=s.position.getScrollInfo(x),C=(t.collision||"flip").split(" "),W={};return b=r(w),w[0].preventDefault&&(t.at="left top"),n=b.width,a=b.height,c=b.offset,v=s.extend({},c),s.each(["my","at"],function(){var e,n,o=(t[this]||"").split(" ");1===o.length&&(o=h.test(o[0])?o.concat(["center"]):d.test(o[0])?["center"].concat(o):["center","center"]),o[0]=h.test(o[0])?o[0]:"center",o[1]=d.test(o[1])?o[1]:"center",e=m.exec(o[0]),n=m.exec(o[1]),W[this]=[e?e[0]:0,n?n[0]:0],t[this]=[g.exec(o[0])[0],g.exec(o[1])[0]]}),1===C.length&&(C[1]=C[0]),"right"===t.at[0]?v.left+=n:"center"===t.at[0]&&(v.left+=n/2),"bottom"===t.at[1]?v.top+=a:"center"===t.at[1]&&(v.top+=a/2),e=o(W.at,n,a),v.left+=e[0],v.top+=e[1],this.each(function(){var r,h,d=s(this),m=d.outerWidth(),g=d.outerHeight(),y=i(this,"marginLeft"),b=i(this,"marginTop"),T=m+y+i(this,"marginRight")+_.width,I=g+b+i(this,"marginBottom")+_.height,N=s.extend({},v),H=o(W.my,d.outerWidth(),d.outerHeight());"right"===t.my[0]?N.left-=m:"center"===t.my[0]&&(N.left-=m/2),"bottom"===t.my[1]?N.top-=g:"center"===t.my[1]&&(N.top-=g/2),N.left+=H[0],N.top+=H[1],l||(N.left=p(N.left),N.top=p(N.top)),r={marginLeft:y,marginTop:b},s.each(["left","top"],function(o,i){s.ui.position[C[o]]&&s.ui.position[C[o]][i](N,{targetWidth:n,targetHeight:a,elemWidth:m,elemHeight:g,collisionPosition:r,collisionWidth:T,collisionHeight:I,offset:[e[0]+H[0],e[1]+H[1]],my:t.my,at:t.at,within:x,elem:d})}),t.using&&(h=function(e){var o=c.left-N.left,i=o+n-m,r=c.top-N.top,s=r+a-g,l={target:{element:w,left:c.left,top:c.top,width:n,height:a},element:{element:d,left:N.left,top:N.top,width:m,height:g},horizontal:0>i?"left":o>0?"right":"center",vertical:0>s?"top":r>0?"bottom":"middle"};m>n&&f(o+i)<n&&(l.horizontal="center"),g>a&&f(r+s)<a&&(l.vertical="middle"),u(f(o),f(i))>u(f(r),f(s))?l.important="horizontal":l.important="vertical",t.using.call(this,e,l)}),d.offset(s.extend(N,{using:h}))})},s.ui.position={fit:{left:function(){function t(t,e){var n,o=e.within,i=o.isWindow?o.scrollLeft:o.offset.left,r=o.width,s=t.left-e.collisionPosition.marginLeft,a=i-s,c=s+e.collisionWidth-r-i;e.collisionWidth>r?a>0&&0>=c?(n=t.left+a+e.collisionWidth-r-i,t.left+=a-n):c>0&&0>=a?t.left=i:a>c?t.left=i+r-e.collisionWidth:t.left=i:a>0?t.left+=a:c>0?t.left-=c:t.left=u(t.left-s,t.left)}return t}(),top:function(){function t(t,e){var n,o=e.within,i=o.isWindow?o.scrollTop:o.offset.top,r=e.within.height,s=t.top-e.collisionPosition.marginTop,a=i-s,c=s+e.collisionHeight-r-i;e.collisionHeight>r?a>0&&0>=c?(n=t.top+a+e.collisionHeight-r-i,t.top+=a-n):c>0&&0>=a?t.top=i:a>c?t.top=i+r-e.collisionHeight:t.top=i:a>0?t.top+=a:c>0?t.top-=c:t.top=u(t.top-s,t.top)}return t}()},flip:{left:function(){function t(t,e){var n,o,i=e.within,r=i.offset.left+i.scrollLeft,s=i.width,a=i.isWindow?i.scrollLeft:i.offset.left,c=t.left-e.collisionPosition.marginLeft,l=c-a,u=c+e.collisionWidth-s-a,p="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,h="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,d=-2*e.offset[0];0>l?(n=t.left+p+h+d+e.collisionWidth-s-r,(0>n||n<f(l))&&(t.left+=p+h+d)):u>0&&(o=t.left-e.collisionPosition.marginLeft+p+h+d-a,(o>0||f(o)<u)&&(t.left+=p+h+d))}return t}(),top:function(){function t(t,e){var n,o,i=e.within,r=i.offset.top+i.scrollTop,s=i.height,a=i.isWindow?i.scrollTop:i.offset.top,c=t.top-e.collisionPosition.marginTop,l=c-a,u=c+e.collisionHeight-s-a,p="top"===e.my[1],h=p?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,d="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,m=-2*e.offset[1];0>l?(o=t.top+h+d+m+e.collisionHeight-s-r,(0>o||o<f(l))&&(t.top+=h+d+m)):u>0&&(n=t.top-e.collisionPosition.marginTop+h+d+m-a,(n>0||f(n)<u)&&(t.top+=h+d+m))}return t}()},flipfit:{left:function(){function t(){s.ui.position.flip.left.apply(this,arguments),s.ui.position.fit.left.apply(this,arguments)}return t}(),top:function(){function t(){s.ui.position.flip.top.apply(this,arguments),s.ui.position.fit.top.apply(this,arguments)}return t}()}},function(){var t,e,n,o,i,r=document.getElementsByTagName("body")[0],a=document.createElement("div");t=document.createElement(r?"div":"body"),n={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&s.extend(n,{position:"absolute",left:"-1000px",top:"-1000px"});for(i in n)t.style[i]=n[i];t.appendChild(a),e=r||document.documentElement,e.insertBefore(t,e.firstChild),a.style.cssText="position: absolute; left: 10.7432222px;",o=s(a).offset().left,l=o>10&&11>o,t.innerHTML="",e.removeChild(t)}(),t.exports=a.position},function(t,e,n){"use strict";var o=n(1),i=Object.prototype,r=i.hasOwnProperty,s=Object.create,a=function(){function t(){}return t}(),c=function(){function t(t,e){return null!=t&&r.call(t,e)}return t}(),l=function(){function t(t){var e=typeof t;return"function"===e||"object"===e&&!!t}return t}(),u=function(){function t(t){if(!l(t))return{};if(s)return s(t);a.prototype=t;var e=new a;return a.prototype=null,e}return t}(),f=function(){function t(t,e){var n=u(t);return e&&o.extend(n,e),n}return t}(),p=function(){function t(t,e){var n,i=this;return n=t&&c(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)},o.extend(n,i,e),n.prototype=f(i.prototype,t),n.prototype.constructor=n,n.__super__=i.prototype,n}return t}();t.exports=p},function(t,e,n){"use strict";var o=n(1),i={};t.exports={get:function(){function t(t){var e=t&&i[t];if(!e){var n=o.Callbacks();e={broadcast:n.fire,subscribe:n.add,unsubscribe:n.remove},t&&(i[t]=e)}return e}return t}()}}]);
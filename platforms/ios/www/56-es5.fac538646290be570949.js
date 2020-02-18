function asyncGeneratorStep(t,e,n,i,r,o,a){try{var s=t[o](a),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(i,r)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){asyncGeneratorStep(o,i,r,a,s,"next",t)}function s(t){asyncGeneratorStep(o,i,r,a,s,"throw",t)}a(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{IlGI:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_menu",(function(){return h})),n.d(e,"ion_menu_button",(function(){return v})),n.d(e,"ion_menu_toggle",(function(){return f}));var i=n("54nT"),r=n("AfW+"),o=n("aiEM"),a=(n("iAHb"),n("0AIG")),s=n("AzGJ"),c=n("MgeF"),d=n("Dl6n");const h=class{constructor(t){Object(i.k)(this,t),this.lastOnEnd=0,this.blocker=s.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(i.d)(this),this.easing="ios"===this.mode?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",this.easingReverse="ios"===this.mode?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(i.e)(this,"ionWillOpen",7),this.ionWillClose=Object(i.e)(this,"ionWillClose",7),this.ionDidOpen=Object(i.e)(this,"ionDidOpen",7),this.ionDidClose=Object(i.e)(this,"ionDidClose",7),this.ionMenuChange=Object(i.e)(this,"ionMenuChange",7)}typeChanged(t,e){const n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-".concat(e)),n.classList.add("menu-content-".concat(t)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=Object(o.h)(this.side)}swipeGestureChanged(){this.updateState()}connectedCallback(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var i,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===t.type&&(t.type=r.b.get("menuType","overlay")),i=t.el.parentNode,void 0===t.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),!(o=void 0!==t.contentId?document.getElementById(t.contentId):i&&i.querySelector&&i.querySelector("[main]"))||!o.tagName){e.next=17;break}return t.contentEl=o,o.classList.add("menu-content"),t.typeChanged(t.type,void 0),t.sideChanged(),c.a._register(t),e.next=12,Promise.resolve().then(n.bind(null,"AzGJ"));case 12:e.t0={el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:e=>t.canStart(e),onWillStart:()=>t.onWillStart(),onStart:()=>t.onStart(),onMove:e=>t.onMove(e),onEnd:e=>t.onEnd(e)},t.gesture=e.sent.createGesture(e.t0),t.updateState(),e.next=18;break;case 17:console.error('Menu: must have a "content" element to listen for drag events on.');case 18:case"end":return e.stop()}}),e)})))()}componentDidLoad(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.ionMenuChange.emit({disabled:t.disabled,open:t._isOpen}),t.updateState();case 1:case"end":return e.stop()}}),e)})))()}disconnectedCallback(){this.blocker.destroy(),c.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return c.a._setOpen(this,t,e)}_setOpen(t,e=!0){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(i.t0=!n._isActive()||n.isAnimating||t===n._isOpen,i.t0){i.next=9;break}return n.beforeAnimation(t),i.next=5,n.loadAnimation();case 5:return i.next=7,n.startAnimation(t,e);case 7:n.afterAnimation(t),i.t0=0;case 9:return i.abrupt("return",!i.t0);case 10:case"end":return i.stop()}}),i)})))()}loadAnimation(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.menuInnerEl.offsetWidth,e.t0=n===t.width&&void 0!==t.animation,e.t0){e.next=10;break}return t.width=n,t.animation&&(t.animation.destroy(),t.animation=void 0),e.next=7,c.a._createAnimation(t.type,t);case 7:t.animation=e.sent,r.b.getBoolean("animated",!0)||t.animation.duration(0),t.animation.fill("both");case 10:case"end":return e.stop()}}),e)})))()}startAnimation(t,e){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function i(){var r,o;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r=!t,o=n.animation.direction(r?"reverse":"normal").easing(r?n.easingReverse:n.easing).onFinish(()=>{"reverse"===o.getDirection()&&o.direction("normal")}),!e){i.next=6;break}return i.next=4,o.play();case 4:i.next=7;break;case 6:o.play({sync:!0});case 7:case"end":return i.stop()}}),i)})))()}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!c.a._getOpenSync()&&u(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(o.b)(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void Object(o.b)(!1,"isAnimating has to be true");const e=l(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-e:e)}onEnd(t){if(!this.isAnimating||!this.animation)return void Object(o.b)(!1,"isAnimating has to be true");const e=this._isOpen,n=this.isEndSide,i=l(t.deltaX,e,n),r=this.width,s=i/r,c=t.velocityX,d=r/2,h=c>=0&&(c>.2||t.deltaX>d),u=c<=0&&(c<-.2||t.deltaX<-d),p=e?n?h:u:n?u:h;let m=!e&&p;e&&!p&&(m=!0),this.lastOnEnd=t.currentTime;let b=p?.001:-.001;const g=s<0?.01:s;b+=Object(a.a)([0,0],[.4,0],[.6,1],[1,1],Object(o.c)(0,g,.9999))[0]||0;const v=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish(()=>this.afterAnimation(m),{oneTimeCallback:!0}).progressEnd(v?1:0,this._isOpen?1-b:b,300)}beforeAnimation(t){Object(o.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){Object(o.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.contentEl&&this.contentEl.classList.add(b),this.ionDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(b),this.backdropEl&&this.backdropEl.classList.remove(m),this.animation&&this.animation.stop(),this.ionDidClose.emit())}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),this.disabled||c.a._setActiveMenu(this),Object(o.b)(!this.isAnimating,"can not be animating")}forceClosing(){Object(o.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const t=this.isEndSide,e=this.type,n=this.disabled,r=this.mode,o=this.isPaneVisible;return Object(i.i)(i.a,{role:"navigation",class:{[r]:!0,["menu-type-".concat(e)]:!0,"menu-enabled":!n,"menu-side-end":t,"menu-side-start":!t,"menu-pane-visible":o}},Object(i.i)("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},Object(i.i)("slot",null)),Object(i.i)("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}get el(){return Object(i.f)(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}static get style(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"}},l=(t,e,n)=>Math.max(0,e!==n?-t:t),u=(t,e,n,i)=>n?e>=t.innerWidth-i:e<=i,p="show-menu",m="show-backdrop",b="menu-content-open",g=function(){var t=_asyncToGenerator(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.get(e);case 2:if(n=t.sent,t.t0=!n,t.t0){t.next=8;break}return t.next=7,n.isActive();case 7:t.t0=!t.sent;case 8:return t.abrupt("return",!t.t0);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=class{constructor(t){var e=this;Object(i.k)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",c.a.toggle(e.menu));case 1:case"end":return t.stop()}}),t)})))}componentDidLoad(){this.visibilityChanged()}visibilityChanged(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.menu);case 2:t.visible=e.sent;case 3:case"end":return e.stop()}}),e)})))()}render(){const t=this.color,e=this.disabled,n=Object(i.d)(this),o=r.b.get("menuIcon","ios"===n?"menu-outline":"menu-sharp"),a=this.autoHide&&!this.visible,s={type:this.type};return Object(i.i)(i.a,{onClick:this.onClick,"aria-disabled":e?"true":null,"aria-hidden":a?"true":null,class:Object.assign(Object.assign({[n]:!0},Object(d.a)(t)),{button:!0,"menu-button-hidden":a,"menu-button-disabled":e,"in-toolbar":Object(d.c)("ion-toolbar",this.el),"ion-activatable":!0,"ion-focusable":!0})},Object(i.i)("button",Object.assign({},s,{disabled:e,class:"button-native"}),Object(i.i)("span",{class:"button-inner"},Object(i.i)("slot",null,Object(i.i)("ion-icon",{icon:o,mode:n,lazy:!1}))),"md"===n&&Object(i.i)("ion-ripple-effect",{type:"unbounded"})))}get el(){return Object(i.f)(this)}static get style(){return':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity,0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}'}},f=class{constructor(t){Object(i.k)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=()=>c.a.toggle(this.menu)}connectedCallback(){this.visibilityChanged()}visibilityChanged(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t.menu);case 2:t.visible=e.sent;case 3:case"end":return e.stop()}}),e)})))()}render(){const t=Object(i.d)(this),e=this.autoHide&&!this.visible;return Object(i.i)(i.a,{onClick:this.onClick,"aria-hidden":e?"true":null,class:{[t]:!0,"menu-toggle-hidden":e}},Object(i.i)("slot",null))}static get style(){return":host(.menu-toggle-hidden){display:none}"}}}}]);
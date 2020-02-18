function asyncGeneratorStep(t,e,o,a,r,n,i){try{var s=t[n](i),c=s.value}catch(d){return void o(d)}s.done?e(c):Promise.resolve(c).then(a,r)}function _asyncToGenerator(t){return function(){var e=this,o=arguments;return new Promise((function(a,r){var n=t.apply(e,o);function i(t){asyncGeneratorStep(n,a,r,i,s,"next",t)}function s(t){asyncGeneratorStep(n,a,r,i,s,"throw",t)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{XGfm:function(t,e,o){"use strict";o.r(e),o.d(e,"ion_toast",(function(){return u}));var a=o("54nT"),r=(o("AfW+"),o("aiEM"),o("iAHb")),n=o("u6aj"),i=o("Dl6n"),s=o("YtD4");const c=(t,e)=>{const o=Object(r.a)(),a=Object(r.a)(),n=t.host||t,i=t.querySelector(".toast-wrapper");switch(a.addElement(i),e){case"top":a.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const t=Math.floor(n.clientHeight/2-i.clientHeight/2);i.style.top="".concat(t,"px"),a.fromTo("opacity",.01,1);break;default:a.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return o.addElement(n).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(a)},d=(t,e)=>{const o=Object(r.a)(),a=Object(r.a)(),n=t.host||t,i=t.querySelector(".toast-wrapper");switch(a.addElement(i),e){case"top":a.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(a)},l=(t,e)=>{const o=Object(r.a)(),a=Object(r.a)(),n=t.host||t,i=t.querySelector(".toast-wrapper");switch(a.addElement(i),e){case"top":i.style.top="calc(8px + var(--ion-safe-area-top, 0px))",a.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(n.clientHeight/2-i.clientHeight/2);i.style.top="".concat(t,"px"),a.fromTo("opacity",.01,1);break;default:i.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",a.fromTo("opacity",.01,1)}return o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(a)},p=t=>{const e=Object(r.a)(),o=Object(r.a)(),a=t.host||t,n=t.querySelector(".toast-wrapper");return o.addElement(n).fromTo("opacity",.99,0),e.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(o)},u=class{constructor(t){Object(a.k)(this,t),this.presented=!1,this.mode=Object(a.d)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=t=>{const e=t.detail.role;if(Object(n.j)(e)){const t=this.getButtons().find(t=>"cancel"===t.role);this.callButtonHandler(t)}},Object(n.e)(this.el),this.didPresent=Object(a.e)(this,"ionToastDidPresent",7),this.willPresent=Object(a.e)(this,"ionToastWillPresent",7),this.willDismiss=Object(a.e)(this,"ionToastWillDismiss",7),this.didDismiss=Object(a.e)(this,"ionToastDidDismiss",7)}present(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(n.f)(t,"toastEnter",c,l,t.position);case 2:t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration));case 3:case"end":return e.stop()}}),e)})))()}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(n.g)(this,t,e,"toastLeave",d,p,this.position)}onDidDismiss(){return Object(n.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return Object(n.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(t=>"string"==typeof t?{text:t}:t):[]}buttonClick(t){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function o(){var a;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(a=t.role,!Object(n.j)(a)){o.next=5;break}o.t0=e.dismiss(void 0,a),o.next=13;break;case 5:return o.next=7,e.callButtonHandler(t);case 7:if(!o.sent){o.next=11;break}o.t1=e.dismiss(void 0,a),o.next=12;break;case 11:o.t1=Promise.resolve();case 12:o.t0=o.t1;case 13:return o.abrupt("return",o.t0);case 14:case"end":return o.stop()}}),o)})))()}callButtonHandler(t){return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.handler){e.next=13;break}return e.prev=1,e.t0=!1,e.next=5,Object(n.n)(t.handler);case 5:if(e.t1=e.sent,e.t0!==e.t1){e.next=8;break}return e.abrupt("return",!1);case 8:e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),console.error(e.t2);case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}renderButtons(t,e){if(0===t.length)return;const o=Object(a.d)(this),r={"toast-button-group":!0,["toast-button-group-".concat(e)]:!0};return Object(a.i)("div",{class:r},t.map(t=>Object(a.i)("button",{type:"button",class:b(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:"button"},Object(a.i)("div",{class:"toast-button-inner"},t.icon&&Object(a.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===o&&Object(a.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),e=t.filter(t=>"start"===t.side),o=t.filter(t=>"start"!==t.side),r=Object(a.d)(this),n={"toast-wrapper":!0,["toast-".concat(this.position)]:!0};return Object(a.i)(a.a,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign({[r]:!0},Object(i.a)(this.color)),Object(i.b)(this.cssClass)),{"toast-translucent":this.translucent}),onIonToastWillDismiss:this.dispatchCancelHandler},Object(a.i)("div",{class:n},Object(a.i)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),Object(a.i)("div",{class:"toast-content"},void 0!==this.header&&Object(a.i)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(a.i)("div",{class:"toast-message",part:"message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(o,"end"))))}get el(){return Object(a.f)(this)}static get style(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50,#f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-850,#262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-wrapper.toast-middle{opacity:.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:.4}@media (any-hover:hover){.toast-button:hover{opacity:.6}}"}},b=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,["toast-button-".concat(t.role)]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},Object(i.b)(t.cssClass))}}]);
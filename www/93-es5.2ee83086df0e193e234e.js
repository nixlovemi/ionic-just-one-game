function asyncGeneratorStep(t,e,n,r,o,a,i){try{var s=t[a](i),c=s.value}catch(d){return void n(d)}s.done?e(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){asyncGeneratorStep(a,r,o,i,s,"next",t)}function s(t){asyncGeneratorStep(a,r,o,i,s,"throw",t)}i(void 0)}))}}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"Y/uG":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_toast",(function(){return u}));var r=n("54nT"),o=(n("AfW+"),n("aiEM"),n("iAHb")),a=n("u6aj"),i=n("Dl6n"),s=n("YtD4");const c=(t,e)=>{const n=Object(o.a)(),r=Object(o.a)(),a=t.host||t,i=t.querySelector(".toast-wrapper");switch(r.addElement(i),e){case"top":r.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const t=Math.floor(a.clientHeight/2-i.clientHeight/2);i.style.top="".concat(t,"px"),r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return n.addElement(a).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)},d=(t,e)=>{const n=Object(o.a)(),r=Object(o.a)(),a=t.host||t,i=t.querySelector(".toast-wrapper");switch(r.addElement(i),e){case"top":r.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return n.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)},l=(t,e)=>{const n=Object(o.a)(),r=Object(o.a)(),a=t.host||t,i=t.querySelector(".toast-wrapper");switch(r.addElement(i),e){case"top":i.style.top="calc(8px + var(--ion-safe-area-top, 0px))",r.fromTo("opacity",.01,1);break;case"middle":const t=Math.floor(a.clientHeight/2-i.clientHeight/2);i.style.top="".concat(t,"px"),r.fromTo("opacity",.01,1);break;default:i.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",r.fromTo("opacity",.01,1)}return n.addElement(a).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)},p=t=>{const e=Object(o.a)(),n=Object(o.a)(),r=t.host||t,a=t.querySelector(".toast-wrapper");return n.addElement(a).fromTo("opacity",.99,0),e.addElement(r).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},u=class{constructor(t){Object(r.k)(this,t),this.presented=!1,this.mode=Object(r.d)(this),this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=t=>{const e=t.detail.role;if(Object(a.j)(e)){const t=this.getButtons().find(t=>"cancel"===t.role);this.callButtonHandler(t)}},Object(a.e)(this.el),this.didPresent=Object(r.e)(this,"ionToastDidPresent",7),this.willPresent=Object(r.e)(this,"ionToastWillPresent",7),this.willDismiss=Object(r.e)(this,"ionToastWillDismiss",7),this.didDismiss=Object(r.e)(this,"ionToastDidDismiss",7)}present(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.f)(t,"toastEnter",c,l,t.position);case 2:t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration));case 3:case"end":return e.stop()}}),e)})))()}dismiss(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(a.g)(this,t,e,"toastLeave",d,p,this.position)}onDidDismiss(){return Object(a.h)(this.el,"ionToastDidDismiss")}onWillDismiss(){return Object(a.h)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(t=>"string"==typeof t?{text:t}:t):[]}buttonClick(t){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.role,!Object(a.j)(r)){n.next=5;break}n.t0=e.dismiss(void 0,r),n.next=13;break;case 5:return n.next=7,e.callButtonHandler(t);case 7:if(!n.sent){n.next=11;break}n.t1=e.dismiss(void 0,r),n.next=12;break;case 11:n.t1=Promise.resolve();case 12:n.t0=n.t1;case 13:return n.abrupt("return",n.t0);case 14:case"end":return n.stop()}}),n)})))()}callButtonHandler(t){return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!t.handler){e.next=13;break}return e.prev=1,e.t0=!1,e.next=5,Object(a.n)(t.handler);case 5:if(e.t1=e.sent,e.t0!==e.t1){e.next=8;break}return e.abrupt("return",!1);case 8:e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),console.error(e.t2);case 13:return e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()}renderButtons(t,e){if(0===t.length)return;const n=Object(r.d)(this),o={"toast-button-group":!0,["toast-button-group-".concat(e)]:!0};return Object(r.i)("div",{class:o},t.map(t=>Object(r.i)("button",{type:"button",class:b(t),tabIndex:0,onClick:()=>this.buttonClick(t),part:"button"},Object(r.i)("div",{class:"toast-button-inner"},t.icon&&Object(r.i)("ion-icon",{icon:t.icon,slot:void 0===t.text?"icon-only":void 0,class:"toast-icon"}),t.text),"md"===n&&Object(r.i)("ion-ripple-effect",{type:void 0!==t.icon&&void 0===t.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),e=t.filter(t=>"start"===t.side),n=t.filter(t=>"start"!==t.side),o=Object(r.d)(this),a={"toast-wrapper":!0,["toast-".concat(this.position)]:!0};return Object(r.i)(r.a,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:Object.assign(Object.assign(Object.assign({[o]:!0},Object(i.a)(this.color)),Object(i.b)(this.cssClass)),{"toast-translucent":this.translucent}),onIonToastWillDismiss:this.dispatchCancelHandler},Object(r.i)("div",{class:a},Object(r.i)("div",{class:"toast-container",part:"container"},this.renderButtons(e,"start"),Object(r.i)("div",{class:"toast-content"},void 0!==this.header&&Object(r.i)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&Object(r.i)("div",{class:"toast-message",part:"message",innerHTML:Object(s.a)(this.message)})),this.renderButtons(n,"end"))))}get el(){return Object(r.f)(this)}static get style(){return":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;left:0;top:0;display:block;position:absolute;width:100%;height:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}:host-context([dir=rtl]) .toast-wrapper,[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-container,.toast-content{display:-ms-flexbox;display:flex}.toast-content{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:pre-wrap}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover:hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800,#333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);--button-color:var(--ion-color-primary,#3880ff);--color:var(--ion-color-step-50,#f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:.01;z-index:10}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-header,.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100,#e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover:hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb,56,128,255),.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.08)}}"}},b=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,["toast-button-".concat(t.role)]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},Object(i.b)(t.cssClass))}}]);
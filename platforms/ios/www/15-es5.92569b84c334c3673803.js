function _defineProperties(n,l){for(var t=0;t<l.length;t++){var u=l[t];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(n,u.key,u)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{UoHk:function(n,l,t){"use strict";t.r(l);var u=t("8Y7J"),e=function n(){_classCallCheck(this,n)},o=t("pMnS"),i=t("oBZk"),r=t("ZZ/e"),a=t("mrSG"),s=t("7S5c"),c=function(){function n(l,t,u){_classCallCheck(this,n),this.router=l,this.actRoute=t,this.utilsSrv=u,this.totalPoints=0,this.finalText=""}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){return a.b(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.actRoute.params.subscribe((function(n){void 0!==n.totalPoints&&(l.totalPoints=n.totalPoints),l.finalText=l.utilsSrv.getStrFinalPoints(l.totalPoints)}));case 2:case"end":return n.stop()}}),n,this)})))}},{key:"resetGame",value:function(){this.router.navigate([""],{skipLocationChange:!0})}}]),n}(),b=t("iInd"),p=u.zb({encapsulation:0,styles:[[".row-centered[_ngcontent-%COMP%]{height:100%}.title[_ngcontent-%COMP%]{font-size:8vh;text-align:center}.sub-title[_ngcontent-%COMP%]{font-size:5vh;text-align:center}.button[_ngcontent-%COMP%]{font-size:4vh}p[_ngcontent-%COMP%]{margin:10px 0}"]],data:{}});function f(n){return u.Sb(0,[(n()(),u.Bb(0,0,null,null,24,"ion-content",[],null,null,null,i.q,i.f)),u.Ab(1,49152,null,0,r.v,[u.j,u.p,u.F],null,null),(n()(),u.Bb(2,0,null,0,22,"ion-grid",[["style","height: 100%; background-image: url(assets/bg-word-area.jpg);"]],null,null,null,i.r,i.g)),u.Ab(3,49152,null,0,r.B,[u.j,u.p,u.F],null,null),(n()(),u.Bb(4,0,null,0,20,"ion-row",[["align-items-center",""],["class","row-centered"],["justify-content-center",""]],null,null,null,i.t,i.i)),u.Ab(5,49152,null,0,r.kb,[u.j,u.p,u.F],null,null),u.Ab(6,16384,null,0,r.d,[u.p],null,null),(n()(),u.Bb(7,0,null,0,17,"ion-grid",[],null,null,null,i.r,i.g)),u.Ab(8,49152,null,0,r.B,[u.j,u.p,u.F],null,null),(n()(),u.Bb(9,0,null,0,6,"ion-row",[["align-items-center",""],["class","row-centered"],["justify-content-center",""]],null,null,null,i.t,i.i)),u.Ab(10,49152,null,0,r.kb,[u.j,u.p,u.F],null,null),u.Ab(11,16384,null,0,r.d,[u.p],null,null),(n()(),u.Bb(12,0,null,0,3,"p",[["class","title"]],null,null,null,null,null)),(n()(),u.Rb(-1,null,[" Sua pontua\xe7\xe3o final: "])),(n()(),u.Bb(14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),u.Rb(15,null,[" "," pontos "])),(n()(),u.Bb(16,0,null,0,8,"ion-row",[["align-items-center",""],["class","row-centered"],["justify-content-center",""]],null,null,null,i.t,i.i)),u.Ab(17,49152,null,0,r.kb,[u.j,u.p,u.F],null,null),u.Ab(18,16384,null,0,r.d,[u.p],null,null),(n()(),u.Bb(19,0,null,0,1,"p",[["class","sub-title"]],null,null,null,null,null)),(n()(),u.Rb(20,null,['"','"'])),(n()(),u.Bb(21,0,null,0,3,"p",[],null,null,null,null,null)),(n()(),u.Bb(22,0,null,null,2,"ion-button",[["class","button button-green"],["shape","round"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.resetGame()&&u),u}),i.n,i.c)),u.Ab(23,49152,null,0,r.l,[u.j,u.p,u.F],{shape:[0,"shape"]},null),(n()(),u.Rb(-1,0,["Voltar ao In\xedcio"]))],(function(n,l){n(l,23,0,"round")}),(function(n,l){var t=l.component;n(l,15,0,t.totalPoints),n(l,20,0,t.finalText)}))}var g=u.xb("app-just-one-ending",c,(function(n){return u.Sb(0,[(n()(),u.Bb(0,0,null,null,1,"app-just-one-ending",[],null,null,null,f,p)),u.Ab(1,114688,null,0,c,[b.m,b.a,s.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),h=t("SVse"),d=t("s7LF"),m=function n(){_classCallCheck(this,n)};t.d(l,"JustOneEndingPageModuleNgFactory",(function(){return v}));var v=u.yb(e,[],(function(n){return u.Jb([u.Kb(512,u.m,u.jb,[[8,[o.a,g]],[3,u.m],u.D]),u.Kb(4608,h.l,h.k,[u.z,[2,h.t]]),u.Kb(4608,d.d,d.d,[]),u.Kb(4608,r.b,r.b,[u.F,u.g]),u.Kb(4608,r.Ib,r.Ib,[r.b,u.m,u.w]),u.Kb(4608,r.Lb,r.Lb,[r.b,u.m,u.w]),u.Kb(1073742336,h.b,h.b,[]),u.Kb(1073742336,d.c,d.c,[]),u.Kb(1073742336,d.a,d.a,[]),u.Kb(1073742336,r.Fb,r.Fb,[]),u.Kb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),u.Kb(1073742336,m,m,[]),u.Kb(1073742336,e,e,[]),u.Kb(1024,b.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);
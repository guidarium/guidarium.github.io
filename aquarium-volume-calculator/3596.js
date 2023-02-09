"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3596],{3596:(x,p,g)=>{g.r(p),g.d(p,{CalculatorPagePageModule:()=>f});var m=g(6895),u=g(433),a=g(4556),d=g(2598),t=g(8256),_=g(287);function C(e,l){if(1&e&&(t.TgZ(0,"ion-select-option",16),t._uU(1),t.qZA()),2&e){const n=l.$implicit;t.Q6J("value",n),t.xp6(1),t.Oqu(n)}}const h=function(){return{standalone:!0}};function P(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"ion-item",9)(1,"ion-label"),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.TgZ(4,"ion-input",10),t.NdJ("keyup",function(){t.CHM(n);const r=t.oxw();return t.KtG(r.submitForm())})("ngModelChange",function(r){const c=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.tankObj[c.internalName].value=r)}),t.qZA(),t.TgZ(5,"p",11),t._uU(6),t.qZA(),t.TgZ(7,"ion-select",12),t.NdJ("ngModelChange",function(r){const c=t.CHM(n).$implicit,s=t.oxw();return t.KtG(s.tankObj[c.internalName].unit=r)})("ngModelChange",function(r){const c=t.CHM(n).$implicit,s=t.oxw();return c.selectedUnit=r,t.KtG(s.submitForm())}),t.YNc(8,C,2,2,"ion-select-option",13),t.qZA(),t.TgZ(9,"ion-button",14),t.NdJ("click",function(){const i=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.calculateThis(i.internalName))}),t._UZ(10,"ion-icon",15),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA()()}if(2&e){const n=l.$implicit,o=t.oxw();t.Q6J("color",n.internalName===o.toCalculate?"primary":"none"),t.xp6(2),t.Oqu(t.lcZ(3,11,n.name)),t.xp6(2),t.Q6J("ngModel",o.tankObj[n.internalName].value)("ngModelOptions",t.DdM(13,h)),t.xp6(2),t.Oqu(n.selectedUnit),t.xp6(1),t.Q6J("ngModel",o.tankObj[n.internalName].unit)("ngModelOptions",t.DdM(14,h)),t.xp6(1),t.Q6J("ngForOf",n.units),t.xp6(1),t.Q6J("disabled",!(o.reversableInputs.includes(n.internalName)||"volume"===n.name))("fill",n.internalName===o.toCalculate?"solid":"clear"),t.xp6(3),t.Oqu(o.message)}}const M=[{path:":shape",component:(()=>{class e{constructor(n,o){this.route=n,this.shp=o,this.isSubmitted=!1,this.toCalculate="volume",this.inputs=[],this.tankObj={volume:new TankInput("","l")},this.fillPercentage=90,this.inputList=[{name:"any",units:["any","unit","available"],selectedUnit:"any",calculate:!0}]}ngOnInit(){this.route.paramMap.subscribe(i=>{this.shapeName=i.get("shape")});let n=this.shp.getData().filter(i=>i.name===this.shapeName)[0].inputs;const o=this.shp.getData();this.internalShapeName=o.filter(i=>i.name===this.shapeName)[0].internalName,this.tankImg=o.filter(i=>i.name===this.shapeName)[0].img,this.internalInputs=o.filter(i=>i.name===this.shapeName)[0].internalInputs,this.reversableInputs=o.filter(i=>i.name===this.shapeName)[0].reverse,n.forEach((i,c)=>{let s={id:c,name:i,internalName:this.internalInputs[c],units:["cm","m","inch","ft"],selectedUnit:"cm",value:"",calculate:!1};this.inputs.push(s),this.tankObj[s.internalName]=new TankInput(s.value,s.selectedUnit)}),this.inputs.push({name:"volume",internalName:"volume",units:["cm3","m3","l","inch3","ft3","gal"],selectedUnit:"l",calculate:!0})}submitForm(){this.isSubmitted=!0;let n=new TANK(this.internalShapeName,this.tankObj,this.toCalculate);Object.assign(this.tankObj,n)}calculateThis(n){this.toCalculate=n,this.submitForm()}test(){console.log("test")}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(_.E))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-calculator-page"]],decls:14,vars:5,consts:[["mode","md"],["slot","start"],["defaultHref","/"],[1,"row"],[1,"img","col"],["alt","","srcset","",3,"src"],[1,"form"],["novalidate",""],["lines","none",3,"color",4,"ngFor","ngForOf"],["lines","none",3,"color"],["type","number",3,"ngModel","ngModelOptions","keyup","ngModelChange"],[1,"unit"],["interface","popover",3,"ngModel","ngModelOptions","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["positionV","bottom","title","Need to Find the Length ?",3,"disabled","fill","click"],["name","calculator-outline"],[3,"value"]],template:function(n,o){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.ALo(4,"titlecase"),t.qZA(),t.TgZ(5,"ion-buttons",1),t._UZ(6,"ion-back-button",2),t.qZA()()(),t.TgZ(7,"ion-content",0)(8,"div",3)(9,"div",4),t._UZ(10,"img",5),t.qZA(),t.TgZ(11,"div",6)(12,"form",7),t.YNc(13,P,13,15,"ion-item",8),t.qZA()()()()),2&n&&(t.xp6(3),t.Oqu(t.lcZ(4,3,o.shapeName)),t.xp6(7),t.MGl("src","assets/tanks/",o.tankImg,"",t.LSH),t.xp6(3),t.Q6J("ngForOf",o.inputs))},dependencies:[m.sg,u._Y,u.JJ,u.JL,u.On,u.F,a.oU,a.YG,a.Sm,a.W2,a.Gu,a.gu,a.pK,a.Ie,a.Q$,a.t9,a.n0,a.wd,a.sr,a.as,a.QI,a.cs,m.rS],styles:['ion-toolbar[_ngcontent-%COMP%]{width:100%;padding-inline:20px}ion-toolbar[_ngcontent-%COMP%]   .custom-toggler[_ngcontent-%COMP%]{--width: 20px;padding:20px;border-radius:calc(var(--width));background-color:var(--ion-color-primary-tint);width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:var(--width);display:flex;place-items:center}ion-toolbar[_ngcontent-%COMP%]   .custom-toggler[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%]{width:var(--width);height:var(--width);border-radius:var(--width);background-color:var(--ion-color-primary-contrast)}ion-toolbar[_ngcontent-%COMP%]   .custom-toggler[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-inline:20px}ion-toolbar[_ngcontent-%COMP%]   .custom-toggler.imperial[_ngcontent-%COMP%]{flex-direction:row}ion-toolbar[_ngcontent-%COMP%]   .custom-toggler.metric[_ngcontent-%COMP%]{flex-direction:row-reverse}ion-toggle[_ngcontent-%COMP%]{height:40px;width:100px;--background: var(--ion-color-dark);--background-checked: var(--ion-color-dark);--handle-spacing: 10px;--handle-width: 27px;--handle-max-width: auto;--handle-height: 27px;--handle-max-height: auto;--border-radius: 40px}ion-content[_ngcontent-%COMP%]{height:100vh}.row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin:0 auto;height:100%}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:100%;text-align:center}img[_ngcontent-%COMP%]{height:100%}@media screen and (max-width: 300px){.item-input.sc-ion-label-md-h[_ngcontent-%COMP%], .item-input[_ngcontent-%COMP%]   .sc-ion-label-md-h[_ngcontent-%COMP%]{width:60px}}@media screen and (min-width: 600px){.row[_ngcontent-%COMP%]{width:80%}}@media screen and (min-width: 1000px){.row[_ngcontent-%COMP%]{width:80%;align-items:center}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:50%}.row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{padding-left:20px}}@media screen and (min-width: 3000px){.row[_ngcontent-%COMP%]{scale:1.5;width:30%}}.row.tank-list[_ngcontent-%COMP%]{margin-block:80px;align-items:baseline;justify-content:space-around}.row.tank-list[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.row.tank-list[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{margin-left:50px}ion-item[_ngcontent-%COMP%]::part(native){transition:background-color .1s 50ms ease-in-out,color .1s 50ms ease-in-out}ion-button[_ngcontent-%COMP%]::part(native){transition:background-color 20ms .15s ease-in,background-color 20ms .15s ease-in,box-shadow 20ms .15s ease-in}ion-item[_ngcontent-%COMP%] {border-radius:10px;margin-bottom:10px;border:0}ion-item[_ngcontent-%COMP%]  ion-label{width:156px}ion-item[_ngcontent-%COMP%]  ion-input {background:lightblue;color:#000;border-radius:10px;margin-left:auto}ion-item[_ngcontent-%COMP%]  ion-input  .native-input[disabled].sc-ion-input-md:not(.cloned-input){opacity:1!important}ion-item[_ngcontent-%COMP%]  .unit{min-width:20px;margin-left:20px;margin-right:-20px}ion-item[_ngcontent-%COMP%]  ion-select{--padding-start: 0;padding-left:20px}ion-item[_ngcontent-%COMP%]  ion-select, ion-item[_ngcontent-%COMP%]  .unit{--ion-font-family: "Pacifico", cursive;font-family:var(--ion-font-family)}ion-item[_ngcontent-%COMP%]  ion-select::part(text), ion-item[_ngcontent-%COMP%]  .unit::part(text){display:none}ion-item[_ngcontent-%COMP%]:last-child{margin-top:20px}']}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(M),d.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,u.u5,a.Pc,O,u.UX]}),e})()}}]);
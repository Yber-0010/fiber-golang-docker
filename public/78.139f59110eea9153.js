"use strict";(self.webpackChunkcountryApp=self.webpackChunkcountryApp||[]).push([[78],{5078:(re,_,s)=>{s.r(_),s.d(_,{CountriesModule:()=>oe});var c=s(4755),d=s(1328),A=s(3900),e=s(1902),b=s(262),C=s(9646),w=s(4004),u=s(8505),U=s(3144);let g=(()=>{class n{getCountriesRequest(t){return this.http.get(t).pipe((0,b.K)(o=>(0,C.of)([])))}constructor(t){this.http=t,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}searchCountryByAlphaCode(t){return this.http.get(`${this.apiUrl}/alpha/${t}`).pipe((0,w.U)(r=>r.length>0?r[0]:null),(0,b.K)(r=>(0,C.of)(null)))}searchcapital(t){return this.getCountriesRequest(`${this.apiUrl}/capital/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCapital={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchcountry(t){return this.getCountriesRequest(`${this.apiUrl}/name/${t}`).pipe((0,u.b)(r=>this.cacheStore.byCountries={term:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}searchRegion(t){return this.getCountriesRequest(`${this.apiUrl}/region/${t}`).pipe((0,u.b)(r=>this.cacheStore.byRegion={region:t,countries:r}),(0,u.b)(()=>this.saveToLocalStorage()))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(U.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function S(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," Espere por favor. "),e.qZA())}function q(n,i){if(1&n&&(e.TgZ(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),e._uU(4,"Pa\xeds: "),e.TgZ(5,"strong"),e._uU(6),e.qZA()(),e._UZ(7,"hr"),e.qZA()(),e.TgZ(8,"div",3)(9,"div",5)(10,"h3"),e._uU(11,"Bandera"),e.qZA(),e._UZ(12,"img",6),e.qZA(),e.TgZ(13,"div",7)(14,"h3"),e._uU(15,"Informaci\xf3n"),e.qZA(),e.TgZ(16,"ul",8)(17,"li",9)(18,"strong"),e._uU(19,"Poblacion: "),e.qZA(),e._uU(20),e.ALo(21,"number"),e.qZA(),e.TgZ(22,"li",9)(23,"strong"),e._uU(24,"C\xf3digo: "),e.qZA(),e._uU(25),e.qZA()()()(),e.TgZ(26,"div",10)(27,"div",7)(28,"h3"),e._uU(29," Traducciones "),e.TgZ(30,"div",11)(31,"span",12),e._uU(32),e.qZA(),e.TgZ(33,"span",12),e._uU(34),e.qZA(),e.TgZ(35,"span",12),e._uU(36),e.qZA(),e.TgZ(37,"span",12),e._uU(38),e.qZA(),e.TgZ(39,"span",12),e._uU(40),e.qZA(),e.TgZ(41,"span",12),e._uU(42),e.qZA(),e.TgZ(43,"span",12),e._uU(44),e.qZA()()()()()()),2&n){const t=e.oxw();e.xp6(6),e.Oqu(t.country.name.common),e.xp6(6),e.Q6J("src",t.country.flags.svg,e.LSH)("alt",t.country.name.common),e.xp6(8),e.hij(" ",e.lcZ(21,12,t.country.population)," "),e.xp6(5),e.hij(" ",t.country.cca3," "),e.xp6(7),e.Oqu(t.country.translations.ara.common),e.xp6(2),e.Oqu(t.country.translations.bre.common),e.xp6(2),e.Oqu(t.country.translations.ces.common),e.xp6(2),e.Oqu(t.country.translations.cym.common),e.xp6(2),e.Oqu(t.country.translations.deu.common),e.xp6(2),e.Oqu(t.country.translations.est.common),e.xp6(2),e.Oqu(t.country.translations.fin.common)}}let P=(()=>{class n{constructor(t,o,r){this.activatedRoute=t,this.router=o,this.countriesService=r}ngOnInit(){this.activatedRoute.params.pipe((0,A.w)(({id:t})=>this.countriesService.searchCountryByAlphaCode(t))).subscribe(t=>t?this.country=t:this.router.navigateByUrl(""))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.gz),e.Y36(d.F0),e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(t,o){if(1&t&&(e.YNc(0,S,2,0,"ng-template",null,0,e.W1O),e.YNc(2,q,45,14,"div",1)),2&t){const r=e.MAs(1);e.xp6(2),e.Q6J("ngIf",o.country)("ngIfElse",r)}},dependencies:[c.O5,c.JJ],encapsulation:2}),n})(),f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-loading-spinner"]],decls:15,vars:0,consts:[[1,"spinner-container","bg-dark"],["width","30","height","30","viewBox","0 0 45 45","xmlns","http://www.w3.org/2000/svg","stroke","#fff"],["fill","none","fill-rule","evenodd","transform","translate(1 1)","stroke-width","2"],["cx","22","cy","22","r","6","stroke-opacity","0"],["attributeName","r","begin","1.5s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","1.5s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","1.5s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["attributeName","r","begin","3s","dur","3s","values","6;22","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-opacity","begin","3s","dur","3s","values","1;0","calcMode","linear","repeatCount","indefinite"],["attributeName","stroke-width","begin","3s","dur","3s","values","2;0","calcMode","linear","repeatCount","indefinite"],["cx","22","cy","22","r","8"],["attributeName","r","begin","0s","dur","1.5s","values","6;1;2;3;4;5;6","calcMode","linear","repeatCount","indefinite"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"buscando"),e.qZA(),e.O4$(),e.TgZ(3,"svg",1)(4,"g",2)(5,"circle",3),e._UZ(6,"animate",4)(7,"animate",5)(8,"animate",6),e.qZA(),e.TgZ(9,"circle",3),e._UZ(10,"animate",7)(11,"animate",8)(12,"animate",9),e.qZA(),e.TgZ(13,"circle",10),e._UZ(14,"animate",11),e.qZA()()()())},styles:[".spinner-container[_ngcontent-%COMP%]{align-items:center;background-color:#000;border-radius:20px;bottom:15px;color:#fff;display:flex;padding:5px 10px;position:fixed;right:15px;box-shadow:0 3px 5px #0003}span[_ngcontent-%COMP%]{margin-left:5px}"]}),n})();var O=s(7579),M=s(727);class I extends M.w0{constructor(i,t){super()}schedule(i,t=0){return this}}const m={setInterval(n,i,...t){const{delegate:o}=m;return o?.setInterval?o.setInterval(n,i,...t):setInterval(n,i,...t)},clearInterval(n){const{delegate:i}=m;return(i?.clearInterval||clearInterval)(n)},delegate:void 0};var B=s(8737);const v={now:()=>(v.delegate||Date).now(),delegate:void 0};class h{constructor(i,t=h.now){this.schedulerActionCtor=i,this.now=t}schedule(i,t=0,o){return new this.schedulerActionCtor(this,i).schedule(o,t)}}h.now=v.now;const R=new class L extends h{constructor(i,t=h.now){super(i,t),this.actions=[],this._active=!1}flush(i){const{actions:t}=this;if(this._active)return void t.push(i);let o;this._active=!0;do{if(o=i.execute(i.state,i.delay))break}while(i=t.shift());if(this._active=!1,o){for(;i=t.shift();)i.unsubscribe();throw o}}}(class J extends I{constructor(i,t){super(i,t),this.scheduler=i,this.work=t,this.pending=!1}schedule(i,t=0){var o;if(this.closed)return this;this.state=i;const r=this.id,a=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(a,r,t)),this.pending=!0,this.delay=t,this.id=null!==(o=this.id)&&void 0!==o?o:this.requestAsyncId(a,this.id,t),this}requestAsyncId(i,t,o=0){return m.setInterval(i.flush.bind(i,this),o)}recycleAsyncId(i,t,o=0){if(null!=o&&this.delay===o&&!1===this.pending)return t;null!=t&&m.clearInterval(t)}execute(i,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const o=this._execute(i,t);if(o)return o;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(i,t){let r,o=!1;try{this.work(i)}catch(a){o=!0,r=a||new Error("Scheduled action threw falsy error")}if(o)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){const{id:i,scheduler:t}=this,{actions:o}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,B.P)(o,this),null!=i&&(this.id=this.recycleAsyncId(t,i,null)),this.delay=null,super.unsubscribe()}}});var k=s(4482),N=s(5403);const V=["txtInput"];let x=(()=>{class n{constructor(){this.debouncer=new O.x,this.placeholder="",this.onValue=new e.vpe,this.onDebounce=new e.vpe}ngOnInit(){this.debouncerSubscription=this.debouncer.pipe(function F(n,i=R){return(0,k.e)((t,o)=>{let r=null,a=null,l=null;const Z=()=>{if(r){r.unsubscribe(),r=null;const p=a;a=null,o.next(p)}};function ie(){const p=l+n,T=i.now();if(T<p)return r=this.schedule(void 0,p-T),void o.add(r);Z()}t.subscribe((0,N.x)(o,p=>{a=p,l=i.now(),r||(r=i.schedule(ie,n),o.add(r))},()=>{Z(),o.complete()},void 0,()=>{a=r=null}))})}(300)).subscribe(t=>{this.onDebounce.emit(t)})}ngOnDestroy(){this.debouncerSubscription?.unsubscribe()}searchValue(t){this.onValue.emit(t),this.tagInput.nativeElement.value=""}onKeyPress(t){this.debouncer.next(t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["shared-search-box"]],viewQuery:function(t,o){if(1&t&&e.Gf(V,5),2&t){let r;e.iGM(r=e.CRH())&&(o.tagInput=r.first)}},inputs:{placeholder:"placeholder",initialValue:"initialValue"},outputs:{onValue:"onValue",onDebounce:"onDebounce"},decls:2,vars:2,consts:[["type","text",1,"form-control",3,"placeholder","value","keyup"],["txtInput",""]],template:function(t,o){if(1&t){const r=e.EpF();e.TgZ(0,"input",0,1),e.NdJ("keyup",function(){e.CHM(r);const l=e.MAs(1);return e.KtG(o.onKeyPress(l.value))}),e.qZA()}2&t&&e.Q6J("placeholder",o.placeholder)("value",o.initialValue)},encapsulation:2}),n})();function Q(n,i){1&n&&(e.TgZ(0,"div",2),e._uU(1," No hay paises que mostrar\n"),e.qZA())}function E(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"td")(1,"div",9)(2,"div",10)(3,"h2",11),e._uU(4," Confirmaci\xf3n "),e.qZA(),e.TgZ(5,"div",12)(6,"label",13),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(3);return e.KtG(r.cerrarModal())}),e.O4$(),e.TgZ(7,"svg",14),e._UZ(8,"path",15),e.qZA()()(),e.kcU(),e.TgZ(9,"p",16),e._uU(10),e.qZA(),e.TgZ(11,"div",17)(12,"label",18),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(3);return e.KtG(r.cerrarModal())}),e._uU(13,"Cerrar"),e.qZA()()(),e.TgZ(14,"label",19),e.NdJ("click",function(){e.CHM(t);const r=e.oxw(3);return e.KtG(r.cerrarModal())}),e.qZA()()()}if(2&n){const t=e.oxw().$implicit;e.xp6(10),e.hij(" selecciono ",t.name.common," ")}}const Y=function(n){return["/countries/by",n]};function D(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._UZ(6,"img",5),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"td")(15,"a",6),e._uU(16,"info"),e.qZA(),e.TgZ(17,"a",7),e.NdJ("click",function(){const a=e.CHM(t).index,l=e.oxw(2);return e.KtG(l.modal(a))}),e._uU(18," Maximizar"),e.qZA()(),e.YNc(19,E,15,1,"td",8),e.qZA()}if(2&n){const t=i.$implicit,o=i.index,r=e.oxw(2);e.xp6(2),e.Oqu(o+1),e.xp6(2),e.Oqu(t.flag),e.xp6(2),e.Q6J("src",t.flags.svg,e.LSH)("alt",t.name.common),e.xp6(2),e.Oqu(t.name.common),e.xp6(2),e.Oqu(t.capital),e.xp6(2),e.Oqu(e.lcZ(13,9,t.population)),e.xp6(3),e.Q6J("routerLink",e.VKq(11,Y,t.cca3)),e.xp6(4),e.Q6J("ngIf",o===r.modali)}}function $(n,i){if(1&n&&(e.TgZ(0,"table",3)(1,"thead")(2,"tr")(3,"th"),e._uU(4,"#"),e.qZA(),e.TgZ(5,"th"),e._uU(6,"flag"),e.qZA(),e.TgZ(7,"th"),e._uU(8,"Bandera"),e.qZA(),e.TgZ(9,"th"),e._uU(10,"Nombre"),e.qZA(),e.TgZ(11,"th"),e._uU(12,"Capital"),e.qZA(),e.TgZ(13,"th"),e._uU(14,"Poblacion"),e.qZA(),e._UZ(15,"th"),e.qZA()(),e.TgZ(16,"tbody"),e.YNc(17,D,20,13,"tr",4),e.qZA()()),2&n){const t=e.oxw();e.xp6(17),e.Q6J("ngForOf",t.countries)}}let y=(()=>{class n{constructor(){this.countries=[]}modal(t){this.modali=t}cerrarModal(){this.modali=!1}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-header"],[4,"ngFor","ngForOf"],["width","25","height","25",3,"src","alt"],[3,"routerLink"],[3,"click"],[4,"ngIf"],[1,"container-modal"],[1,"content-modal"],[1,"title"],[1,"btn-cerrar-X"],["for","btn-modal",1,"label1",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","26","height","26","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],[1,"parrafo"],[1,"btn-cerrar"],["for","btn-modal",1,"label2","label3",3,"click"],["for","btn-modal",1,"cerrar-modal",3,"click"]],template:function(t,o){if(1&t&&(e.YNc(0,Q,2,0,"div",0),e.YNc(1,$,18,1,"ng-template",null,1,e.W1O)),2&t){const r=e.MAs(2);e.Q6J("ngIf",0===o.countries.length)("ngIfElse",r)}},dependencies:[c.sg,c.O5,d.rH,c.JJ],styles:[".container-modal[_ngcontent-%COMP%]{padding-top:10px;width:100%;height:100vh;position:fixed;top:0;left:0;background-color:#909496cc;display:flex;justify-content:center;align-items:center;z-index:100}.content-modal[_ngcontent-%COMP%]{width:100%;max-width:400px;padding:20px;background-color:#fff;border-radius:4px}.title[_ngcontent-%COMP%]{font-weight:400;margin-bottom:15px;width:100%}.parrafo[_ngcontent-%COMP%]{padding:15px 0}.content-modal[_ngcontent-%COMP%]   .btn-cerrar[_ngcontent-%COMP%]{width:100%;margin-top:15px;display:flex;justify-content:flex-end}.btn-cerrar-X[_ngcontent-%COMP%]{margin-top:-48px;width:35px;height:35px;display:flex;justify-content:center;float:right;border-radius:50%}.btn-cerrar-X[_ngcontent-%COMP%]:hover{background:#f5f5f5}.label1[_ngcontent-%COMP%]{padding:5px;cursor:pointer;transition:all .3s ease}.label2[_ngcontent-%COMP%]{padding:7px 10px;border-radius:4px;cursor:pointer;transition:all .3s ease}.label3[_ngcontent-%COMP%]{border-radius:3px;border:rgb(35,35,35) solid 1px}.label3[_ngcontent-%COMP%]:hover{border:#f5f5f5 solid 1px;background-color:#f5f5f5}.cerrar-modal[_ngcontent-%COMP%]{width:100%;height:100vh;position:absolute;top:0;left:0;z-index:-1}@media screen and (max-width:800px){.content-modal[_ngcontent-%COMP%]{width:95%}}"]}),n})();function K(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}function H(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}const z=function(n){return{"btn-outline-primary":n}};function G(n,i){if(1&n){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){const a=e.CHM(t).$implicit,l=e.oxw();return e.KtG(l.searchByRegion(a))}),e._uU(1),e.qZA()}if(2&n){const t=i.$implicit,o=e.oxw();e.Q6J("ngClass",e.VKq(2,z,o.selecterRegion===t)),e.xp6(1),e.hij(" ",t," ")}}function W(n,i){1&n&&e._UZ(0,"shared-loading-spinner")}const ee=[{path:"by-capital",component:(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(t){this.isLoading=!0,this.countriesService.searchcapital(t).subscribe(o=>{this.countries=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","buscar por capital...",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Capital"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return o.searchByCapital(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,K,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countries))},dependencies:[c.O5,f,x,y]}),n})()},{path:"by-country",component:(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(t){this.isLoading=!0,this.countriesService.searchcountry(t).subscribe(o=>{this.countries=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","buscar por pa\xeds...",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Pa\xeds"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"shared-search-box",2),e.NdJ("onDebounce",function(a){return o.searchByCountry(a)}),e.qZA()()(),e.TgZ(6,"div",0)(7,"div",1),e._UZ(8,"hr"),e.YNc(9,H,1,0,"shared-loading-spinner",3),e._UZ(10,"countries-table",4),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("initialValue",o.initialValue),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countries))},dependencies:[c.O5,f,x,y],encapsulation:2}),n})()},{path:"by-region",component:(()=>{class n{constructor(t){this.countriesService=t,this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selecterRegion=this.countriesService.cacheStore.byRegion.region,this.searchByRegion(this.selecterRegion)}searchByRegion(t){this.selecterRegion=t,this.isLoading=!0,this.countriesService.searchRegion(t).subscribe(o=>{this.countries=o,this.isLoading=!1})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(t,o){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Por Region"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1),e.YNc(5,G,2,4,"button",2),e.qZA()(),e.TgZ(6,"div",0)(7,"div",3),e._UZ(8,"hr"),e.YNc(9,W,1,0,"shared-loading-spinner",4),e._UZ(10,"countries-table",5),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",o.regions),e.xp6(4),e.Q6J("ngIf",o.isLoading),e.xp6(1),e.Q6J("countries",o.countries))},dependencies:[c.mk,c.sg,c.O5,f,y],encapsulation:2}),n})()},{path:"by/:id",component:P},{path:"**",redirectTo:"by-capital"}];let te=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[d.Bz.forChild(ee),d.Bz]}),n})();var ne=s(4466);let oe=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,te,ne.m]}),n})()}}]);
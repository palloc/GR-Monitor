webpackJsonp([1],{118:function(t,s,e){function a(t){e(174)}var n=e(1)(e(123),e(180),a,"data-v-c9620974",null);t.exports=n.exports},119:function(t,s,e){"use strict";var a=e(2),n=e(181),r=e(118),o=e.n(r);a.a.use(n.a),s.a=new n.a({routes:[{path:"/",name:"Top",component:o.a}]})},120:function(t,s,e){function a(t){e(172)}var n=e(1)(e(122),e(178),a,null,null);t.exports=n.exports},121:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(125),n=e.n(a),r=["line","bar","radar","polarArea","pie","doughnut"];s.default={props:{width:Number,height:Number,type:{type:String,required:!0,validator:function(t){return r.includes(t)}},data:{type:Object,required:!0,default:function(){return{}}},options:{type:Object,default:function(){return{}}}},mounted:function(){this.chart=new n.a(this.$el,{type:this.type,data:this.data,options:this.options})},data:function(){return{chart:null}},methods:{resetChart:function(){var t=this;this.$nextTick(function(){t.chart.destroy(),t.chart=new n.a(t.$el,{type:t.type,data:t.data,options:t.options})})}},watch:{type:function(){this.resetChart()},data:function(){this.chart.update()},options:function(){this.resetChart()}}}},122:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(118),n=e.n(a);s.default={components:{Top:n.a}}},123:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(177),n=e.n(a),r=e(175);s.default={components:{Chart:n.a},data:function(){return{gpu_resources:[{number:Number,name:"",total_memory:Number,free_memory:Number,utilization_rate:Number,data:{}}],graph_data:[],graph_labels:["70","65","60","55","50","45","40","35","30","25","20","15","10","5","0"],graph_datasets:[],options:{segmentShowStroke:!0,scales:{yAxes:[{stacked:!1,ticks:{beginAtZero:!0,min:0,max:100}}]}}}},mounted:function(){this.getJson(),this.getJson(),setInterval(function(){this.getJson()}.bind(this),5e3)},methods:{getJson:function(){var t=this;r.ajax({type:"GET",crossDomain:!1,url:"http://192.168.56.101:6101",dataType:"json",success:function(s){0===t.$data.graph_data.length?(t.$data.gpu_resources=s,r.each(t.$data.gpu_resources,function(s){t.$data.graph_data.push([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]),t.$data.gpu_resources[s].data={labels:t.$data.graph_labels,datasets:[{label:"GPU usage",data:t.$data.graph_data[s],backgroundColor:"rgba(211, 0, 0, 0.6)",tension:0}]}})):(t.$data.gpu_resources=s,r.each(t.$data.gpu_resources,function(s){r.each(t.$data.graph_data[0],function(e){e!==t.$data.graph_data[s].length-1?t.$data.graph_data[s][e]=t.$data.graph_data[s][e+1]:t.$data.graph_data[s][e]=t.$data.gpu_resources[s].utilization_rate}),t.$data.gpu_resources[s].data={labels:t.$data.graph_labels,datasets:[{data:t.$data.graph_data[s],backgroundColor:"rgba(248, 11, 11, 0.5)",tension:0}]}}))}})}}}},124:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),n=e(120),r=e.n(n),o=e(119);a.a.config.productionTip=!1,new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:r.a}})},172:function(t,s){},173:function(t,s){},174:function(t,s){},176:function(t,s,e){function a(t){return e(n(t))}function n(t){var s=r[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}var r={"./af":3,"./af.js":3,"./ar":10,"./ar-dz":4,"./ar-dz.js":4,"./ar-kw":5,"./ar-kw.js":5,"./ar-ly":6,"./ar-ly.js":6,"./ar-ma":7,"./ar-ma.js":7,"./ar-sa":8,"./ar-sa.js":8,"./ar-tn":9,"./ar-tn.js":9,"./ar.js":10,"./az":11,"./az.js":11,"./be":12,"./be.js":12,"./bg":13,"./bg.js":13,"./bn":14,"./bn.js":14,"./bo":15,"./bo.js":15,"./br":16,"./br.js":16,"./bs":17,"./bs.js":17,"./ca":18,"./ca.js":18,"./cs":19,"./cs.js":19,"./cv":20,"./cv.js":20,"./cy":21,"./cy.js":21,"./da":22,"./da.js":22,"./de":25,"./de-at":23,"./de-at.js":23,"./de-ch":24,"./de-ch.js":24,"./de.js":25,"./dv":26,"./dv.js":26,"./el":27,"./el.js":27,"./en-au":28,"./en-au.js":28,"./en-ca":29,"./en-ca.js":29,"./en-gb":30,"./en-gb.js":30,"./en-ie":31,"./en-ie.js":31,"./en-nz":32,"./en-nz.js":32,"./eo":33,"./eo.js":33,"./es":35,"./es-do":34,"./es-do.js":34,"./es.js":35,"./et":36,"./et.js":36,"./eu":37,"./eu.js":37,"./fa":38,"./fa.js":38,"./fi":39,"./fi.js":39,"./fo":40,"./fo.js":40,"./fr":43,"./fr-ca":41,"./fr-ca.js":41,"./fr-ch":42,"./fr-ch.js":42,"./fr.js":43,"./fy":44,"./fy.js":44,"./gd":45,"./gd.js":45,"./gl":46,"./gl.js":46,"./gom-latn":47,"./gom-latn.js":47,"./he":48,"./he.js":48,"./hi":49,"./hi.js":49,"./hr":50,"./hr.js":50,"./hu":51,"./hu.js":51,"./hy-am":52,"./hy-am.js":52,"./id":53,"./id.js":53,"./is":54,"./is.js":54,"./it":55,"./it.js":55,"./ja":56,"./ja.js":56,"./jv":57,"./jv.js":57,"./ka":58,"./ka.js":58,"./kk":59,"./kk.js":59,"./km":60,"./km.js":60,"./kn":61,"./kn.js":61,"./ko":62,"./ko.js":62,"./ky":63,"./ky.js":63,"./lb":64,"./lb.js":64,"./lo":65,"./lo.js":65,"./lt":66,"./lt.js":66,"./lv":67,"./lv.js":67,"./me":68,"./me.js":68,"./mi":69,"./mi.js":69,"./mk":70,"./mk.js":70,"./ml":71,"./ml.js":71,"./mr":72,"./mr.js":72,"./ms":74,"./ms-my":73,"./ms-my.js":73,"./ms.js":74,"./my":75,"./my.js":75,"./nb":76,"./nb.js":76,"./ne":77,"./ne.js":77,"./nl":79,"./nl-be":78,"./nl-be.js":78,"./nl.js":79,"./nn":80,"./nn.js":80,"./pa-in":81,"./pa-in.js":81,"./pl":82,"./pl.js":82,"./pt":84,"./pt-br":83,"./pt-br.js":83,"./pt.js":84,"./ro":85,"./ro.js":85,"./ru":86,"./ru.js":86,"./sd":87,"./sd.js":87,"./se":88,"./se.js":88,"./si":89,"./si.js":89,"./sk":90,"./sk.js":90,"./sl":91,"./sl.js":91,"./sq":92,"./sq.js":92,"./sr":94,"./sr-cyrl":93,"./sr-cyrl.js":93,"./sr.js":94,"./ss":95,"./ss.js":95,"./sv":96,"./sv.js":96,"./sw":97,"./sw.js":97,"./ta":98,"./ta.js":98,"./te":99,"./te.js":99,"./tet":100,"./tet.js":100,"./th":101,"./th.js":101,"./tl-ph":102,"./tl-ph.js":102,"./tlh":103,"./tlh.js":103,"./tr":104,"./tr.js":104,"./tzl":105,"./tzl.js":105,"./tzm":107,"./tzm-latn":106,"./tzm-latn.js":106,"./tzm.js":107,"./uk":108,"./uk.js":108,"./ur":109,"./ur.js":109,"./uz":111,"./uz-latn":110,"./uz-latn.js":110,"./uz.js":111,"./vi":112,"./vi.js":112,"./x-pseudo":113,"./x-pseudo.js":113,"./yo":114,"./yo.js":114,"./zh-cn":115,"./zh-cn.js":115,"./zh-hk":116,"./zh-hk.js":116,"./zh-tw":117,"./zh-tw.js":117};a.keys=function(){return Object.keys(r)},a.resolve=n,t.exports=a,a.id=176},177:function(t,s,e){function a(t){e(173)}var n=e(1)(e(121),e(179),a,null,null);t.exports=n.exports},178:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("header",[e("div",{attrs:{id:"title"}},[e("h1",[t._v("GR-Monitor")])])])}]}},179:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("canvas",{staticClass:"chartjs",attrs:{width:t.width,height:t.height}})},staticRenderFns:[]}},180:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},t._l(t.gpu_resources,function(s){return e("div",{staticClass:"contents"},[s.name!==t.none?e("div",{staticClass:"gpu-content"},[e("h2",[e("span",[t._v("GPU "+t._s(s.number))])]),t._v(" "),e("div",{staticClass:"gpu-exp"},[e("p",[t._v("・GPU type : "),e("em",[t._v(t._s(s.name))])]),t._v(" "),e("p",[t._v("・GPU memory usage : "),e("em",[t._v(t._s(Math.round((s.total_memory-s.free_memory)/s.total_memory*100))+" %")])]),t._v(" "),e("p",[t._v("・GPU usage : "),e("em",[t._v(t._s(s.utilization_rate)+" %")])])]),t._v(" "),e("div",{staticClass:"gpu-graph"},[e("chart",{attrs:{type:"line",data:s.data,options:t.options}})],1)]):t._e()])}))},staticRenderFns:[]}}},[124]);
//# sourceMappingURL=app.f39f01f7106d9e0069cf.js.map
import{_ as m,f as u,o as r,c as n,a as t,t as i,g as _,p as h,k as g,r as v,F as p,b,i as f}from"./index-C-2Bz-4G.js";const w=e=>(h("data-v-ce49b3bd"),e=e(),g(),e),S={class:"card"},k=w(()=>t("img",{class:"card-img-top"},null,-1)),x={class:"card-body"},y={class:"card-title"},C={class:"card-text"},D={class:"card-text"},I={class:"card-text"},T={__name:"Day15Cart",props:{imgUrl:String,title:String,price:Number,count:Number},emits:["add-to-cart"],setup(e,{emit:d}){const s=e,a=d,o=()=>{a("add-to-cart",s.title)},c=u(()=>s.price*.8);return(l,V)=>(r(),n("div",S,[k,t("div",x,[t("h5",y,"水果名稱："+i(e.title),1),t("p",C,"價錢："+i(e.price),1),t("p",D,"折扣後價錢："+i(c.value),1),t("p",I,"數量："+i(e.count),1),t("a",{href:"#",class:"btn",onClick:_(o,["prevent"])},"加入購物車")])]))}},U=m(T,[["__scopeId","data-v-ce49b3bd"]]),$=t("h2",null,[t("a",{href:"https://hackmd.io/JdDqZOhGThapMEwn2-mWTg"},"Day15 - Vue.js 的黑魔法：總結練習")],-1),j={id:"app",class:"container"},N={class:"row"},B={__name:"Day15View",setup(e){const d=v([{title:"apple",price:25,count:50,imgUrl:"https://i.imgur.com/w4sYWlS.jpeg"},{title:"orange",price:15,count:20,imgUrl:"https://i.imgur.com/PSmzmXi.jpeg"},{title:"strawberry",price:45,count:10,imgUrl:"https://i.imgur.com/FIMmh6h.png"},{title:"kiwi",price:55,count:20,imgUrl:"https://i.imgur.com/TIA6v4m.jpeg"}]),s=a=>{const o=`您已將 ${a} 加入購物車`;alert(o)};return(a,o)=>(r(),n(p,null,[$,t("div",j,[t("div",N,[(r(!0),n(p,null,b(d.value,(c,l)=>(r(),n("div",{key:l,class:"col"},[f(U,{title:c.title,price:c.price,count:c.count,onAddToCart:s},null,8,["title","price","count"])]))),128))])])],64))}};export{B as default};

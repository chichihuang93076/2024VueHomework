import{r as a,c,a as t,F as r,b as h,d as p,w as b,v as k,e as q,o as s,t as i}from"./index-yHWEfC_6.js";const C=t("h1",null,"Week1",-1),x={class:"table"},f=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"品項"),t("th",{scope:"col"},"描述"),t("th",{scope:"col"},"價格"),t("th",{scope:"col"},"庫存")])],-1),g=["onClick"],V=["onClick"],m=["onClick"],E=t("hr",null,null,-1),w={key:0},B=t("h2",null,"編輯",-1),$={__name:"Week1View",setup(D){const l=a([]),d=a([{id:1,title:"珍珠奶茶",desc:"香濃奶茶搭配QQ珍珠",price:50,qty:20},{id:2,title:"冬瓜檸檬",desc:"清新冬瓜配上新鮮檸檬",price:45,qty:18},{id:3,title:"翡翠檸檬",desc:"綠茶與檸檬的完美結合",price:55,qty:34},{id:4,title:"四季春茶",desc:"香醇四季春茶，回甘無比",price:45,qty:10},{id:5,title:"阿薩姆奶茶",desc:"阿薩姆紅茶搭配香醇鮮奶",price:50,qty:25},{id:6,title:"檸檬冰茶",desc:"檸檬與冰茶的清新組合",price:45,qty:20},{id:7,title:"芒果綠茶",desc:"芒果與綠茶的獨特風味",price:55,qty:18},{id:8,title:"抹茶拿鐵",desc:"抹茶與鮮奶的絕配",price:60,qty:20}]),_=n=>{l.value={...n},console.log(l.value)},y=()=>{const n=d.value.findIndex(o=>o.id===l.value.id);console.log(l.value.id),d.value[n]=l.value,l.value={}},v=()=>{l.value={}};return(n,o)=>(s(),c(r,null,[C,t("div",null,[t("table",x,[f,t("tbody",null,[(s(!0),c(r,null,h(d.value,e=>(s(),c("tr",{key:e.id},[t("td",null,i(e.title),1),t("td",null,[t("small",null,i(e.desc),1)]),t("td",null,i(e.price),1),t("td",null,[t("button",{type:"button",onClick:u=>e.qty>0?e.qty--:0},"-",8,g),p(i(e.qty),1),t("button",{type:"button",onClick:u=>e.qty++},"+",8,V)]),t("td",null,[t("button",{type:"button",onClick:u=>_(e)},"編輯",8,m)])]))),128))])])]),E,l.value.id?(s(),c("div",w,[B,t("label",null,[p(" 品項:"),b(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>l.value.title=e)},null,512),[[k,l.value.title]])]),t("button",{type:"button",onClick:y},"更新"),t("button",{type:"button",onClick:v},"取消")])):q("",!0)],64))}};export{$ as default};

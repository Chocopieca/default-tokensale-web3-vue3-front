import{_ as u,f as l,o as h,c as p,d as o,t as a}from"./index-4a9fbba2.js";const f=l({name:"BaseTimer",props:{timestamp:{type:Number,default:0},isClearInterval:{type:Boolean,default:!1}},data(){return{time:new Date(this.timestamp).getTime(),days:"HI",hours:"TH",minutes:"ER",seconds:"E!",expired:!0}},computed:{theTime(){const e=this,d=setInterval(function(){const c=new Date(+e.timestamp).getTime(),m=new Date().getTime(),s=c-m,t=Math.floor(s/(1e3*60*60*24)),n=Math.floor(s%(1e3*60*60*24)/(1e3*60*60)),r=Math.floor(s%(1e3*60*60)/(1e3*60)),i=Math.floor(s%(1e3*60)/1e3);e.days=t<10?"0"+t:t,e.hours=n<10?"0"+n:n,e.minutes=r<10?"0"+r:r,e.seconds=i<10?"0"+i:i,e.isClearInterval&&s<0&&s>-15&&(clearInterval(d),e.$emit("clearInter"),e.expired=!0)},1e3);return{days:e.days,hours:e.hours,minutes:e.minutes,seconds:e.seconds}}}}),_={class:"row size14-weight400"},T={class:"mr-1"},y={class:"mr-1"},v={class:"mr-1"},w={class:"mr-1"};function D(e,d,c,m,s,t){return h(),p("div",_,[o("div",T,"Days: "+a(e.theTime.days)+",",1),o("div",y,"Hours: "+a(e.theTime.hours)+",",1),o("div",v,"Minutes: "+a(e.theTime.minutes)+",",1),o("div",w,"Seconds: "+a(e.theTime.seconds),1)])}const I=u(f,[["render",D]]);export{I as default};
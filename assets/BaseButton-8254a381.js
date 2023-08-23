import{_ as r,f as u,o as l,c as i,i as d,j as p,n as c,u as f}from"./index-4a9fbba2.js";const s=u({name:"BaseButton",props:{buttonColor:{type:String,default:"#ffffff"},buttonColorClass:{type:String,default:"default",validate(t){return["transparent","border","icon","default"].includes(t)}},type:{type:String,default:"button",validate(t){return["button","submit"].includes(t)}},width:{type:String,default:"100%"},height:{type:String,default:"50px"},disabled:{type:Boolean,default:!1}},computed:{getButtonColor(){switch(this.buttonColorClass){case"transparent":return"button-transparent";case"border":return"button-border";case"chips":return"button-chips";default:return"button-default"}},getClasses(){let t="";return t+=this.disabled?"button-disabled":this.getButtonColor,t}},methods:{buttonClick(){this.disabled||this.$emit("buttonClick")}}}),n=()=>{f(t=>({"3b7309ad":t.buttonColor}))},o=s.setup;s.setup=o?(t,e)=>(n(),o(t,e)):n;const b=s,_=["type"];function h(t,e,C,g,y,m){return l(),i("button",{class:p([t.getClasses,"button main-white-text flex-center text-uppercase"]),type:t.type,style:c({width:t.width,height:t.height}),onClick:e[0]||(e[0]=(...a)=>t.buttonClick&&t.buttonClick(...a))},[d(t.$slots,"default",{},void 0,!0)],14,_)}const S=r(b,[["render",h],["__scopeId","data-v-96576c46"]]);export{S as default};

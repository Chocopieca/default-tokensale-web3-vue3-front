import{u as e}from"./modal-8e080340.js";import{f as n,g as s,_ as r,o as p,c as a,t as i}from"./index-4a9fbba2.js";const c=n({name:"TestComponent",props:{options:{type:Object,default:()=>({})}},setup(){const t=e();return{optionsStore:s(()=>t.options??null)}},computed:{getContent(){return this.optionsStore?.title??this.options?.title??null}}}),l={class:"text-align-center"};function u(t,o,m,d,f,_){return p(),a("div",l,i(t.getContent),1)}const C=r(c,[["render",u]]);export{C as default};

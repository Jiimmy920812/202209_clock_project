import{u as A,d as S,_ as M,w as L,o as l,c as a,a as e,b as T,e as c,v as p,f as i,F as m,r as h,t as u,n as x,g as v,h as k,p as O,i as b}from"./index.fcf80df4.js";const f={set(t,s){localStorage.setItem(t,JSON.stringify(s))},get(t){return JSON.parse(localStorage.getItem(t))},remove(t){localStorage.removeItem(t)}},_=A(),w=S({id:"alarmList",state:()=>({setHour:"",setMinute:"",setTimeZone:"",hourArr:[],minuteArr:[],timeArr:["AM","PM"],ringtone:new Audio("/shivers.mp3"),alarmList:[]}),actions:{setHourArr(){for(let t=1;t<=12;t++)t<10?this.hourArr.push(`0${t}`):this.hourArr.push(t)},setMinuteArr(){for(let t=0;t<60;t++)t<10?this.minuteArr.push(`0${t}`):this.minuteArr.push(t)},addAlarm(){this.alarmList.push({hour:this.setHour,minute:this.setMinute,timeZone:this.setTimeZone,turnOn:!0}),this.setHour="",this.setMinute="",this.setTimeZone=""},removeAlarm(t){this.alarmList.splice(this.alarmList.indexOf(t),1),this.ringtone.pause()},alarmRing(){this.alarmList.forEach(t=>{t.turnOn!==!1&&`${t.hour}:${t.minute}${t.timeZone}`==`${_.hh}:${_.mm}${_.timeZone}`&&t.turnOn===!0&&(this.ringtone.play(),this.ringtone.loop=!0)})},alarmStop(){this.ringtone.loop=!1,this.ringtone.pause()},checkTime(){setInterval(()=>{this.alarmRing()},100)},renderStorageData(){let t=f.get("list");t&&(this.alarmList=t)}}});const n=t=>(O("data-v-c07cf0ec"),t=t(),b(),t),I={class:"container"},V={class:"createAlarm"},Z=n(()=>e("p",{class:"largeText"},"Alarm Setting",-1)),$=n(()=>e("div",{class:"line"},null,-1)),C={class:"formActions"},H={class:"alarmInputs"},U=n(()=>e("option",{value:"",disabled:""},"HOUR",-1)),y=n(()=>e("div",{class:"semi"},[e("div",{class:"round"}),e("div",{class:"round"})],-1)),N=n(()=>e("option",{value:"",disabled:""},"MINUTE",-1)),D=n(()=>e("option",{value:"",disabled:""},"AM/PM",-1)),q=n(()=>e("button",{class:"add"},null,-1)),B=n(()=>e("div",{class:"listTop"},[e("p",{class:"largeText"},"Alarm List"),e("div",{class:"line"})],-1)),E={class:"listContent"},R={class:"textLine"},F={class:"switch"},J=["onUpdate:modelValue"],P=n(()=>e("span",{class:"slider round"},null,-1)),z=["onClick"],j=n(()=>e("div",null,null,-1)),G={__name:"alarmView",setup(t){const s=w();A(),s.renderStorageData(),s.setHourArr(),s.setMinuteArr(),s.checkTime();const g=s.alarmList;return L(g,()=>{f.set("list",s.alarmList)}),(K,r)=>(l(),a("div",I,[e("div",V,[Z,$,e("div",C,[e("form",{onSubmit:r[3]||(r[3]=T((...o)=>i(s).addAlarm&&i(s).addAlarm(...o),["prevent"]))},[e("div",H,[c(e("select",{class:"hour","onUpdate:modelValue":r[0]||(r[0]=o=>i(s).setHour=o),required:""},[U,(l(!0),a(m,null,h(i(s).hourArr,o=>(l(),a("option",null,u(o),1))),256))],512),[[p,i(s).setHour]]),y,c(e("select",{class:"minute","onUpdate:modelValue":r[1]||(r[1]=o=>i(s).setMinute=o),required:""},[N,(l(!0),a(m,null,h(i(s).minuteArr,o=>(l(),a("option",null,u(o),1))),256))],512),[[p,i(s).setMinute]]),c(e("select",{class:"timeZone","onUpdate:modelValue":r[2]||(r[2]=o=>i(s).setTimeZone=o),required:""},[D,(l(!0),a(m,null,h(i(s).timeArr,o=>(l(),a("option",null,u(o),1))),256))],512),[[p,i(s).setTimeZone]])]),q],32),B,e("div",E,[e("ul",null,[(l(!0),a(m,null,h(i(s).alarmList,o=>(l(),a("li",null,[e("div",R,[e("div",{class:x([{close:o.turnOn===!1},"listText"])},[v(u(o.hour)+":"+u(o.minute)+" "+u(o.timeZone)+" ",1),e("label",F,[c(e("input",{type:"checkbox","onUpdate:modelValue":d=>o.turnOn=d,onClick:r[4]||(r[4]=(...d)=>i(s).alarmStop&&i(s).alarmStop(...d))},null,8,J),[[k,o.turnOn]]),v(" "+u(o.turnOn)+" ",1),P])],2),e("button",{onClick:d=>i(s).removeAlarm(o),class:"delete"},null,8,z)]),j]))),256))])])])])]))}},W=M(G,[["__scopeId","data-v-c07cf0ec"]]);export{W as default};

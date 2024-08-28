"use strict";(self.webpackChunknews=self.webpackChunknews||[]).push([[90],{286:(e,r,s)=>{s.r(r),s.d(r,{default:()=>n});s(43),s(50);var t=s(188),a=s(805),l=s(579);const n=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"overflow-hidden d-flex flex-column justify-content-center m-3",children:[(0,l.jsx)("h3",{className:"d-flex justify-content-center",style:{color:"red"},children:"Top Headlines"}),(0,l.jsx)(a.m,{})]}),(0,l.jsxs)("div",{className:"type",children:[(0,l.jsxs)("h3",{className:"text bg-transparent",style:{fontWeight:"bold"},children:["ENTERTAINMENT ",(0,l.jsx)("span",{children:" NEWS "})]}),(0,l.jsx)("div",{className:"hide"})]}),(0,l.jsx)("div",{className:"overflow-x-hidden d-inline-flex",children:(0,l.jsx)(t.K,{category:"entertainment"})})]})}},805:(e,r,s)=>{s.d(r,{m:()=>n});var t=s(43),a=(s(50),s(579));function l(e){let{title:r,url:s}=e;return(0,a.jsx)("div",{className:"mx-2 px-2",style:{width:"10rem",height:"6rem"},children:(0,a.jsx)("a",{href:s,children:(0,a.jsx)("h6",{style:{color:"white"},children:r})})})}function n(){const[e,r]=(0,t.useState)([]);return(0,t.useEffect)((()=>{!async function(){let e;try{let s="headlines";if(e=await fetch("https://fastapi-newsfetch.onrender.com/fetch/",{method:"POST",headers:{"Content-Type":"text/plain"},body:s}),!e.ok)throw new Error("Network response was not ok");e=await e.json();let t=await e.articles,a=[];for(let e=0;e<4;e++)a.push(t[e]);r(a),console.log("Success:")}catch(s){console.error("Error:",s)}}()}),[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"d-flex justify-content-center flex-row m-1 p-1 w-auto overflow-x-hidden",style:{backgroundColor:"red"},children:e&&e.length>0?e.map(((e,r)=>(0,a.jsx)(l,{title:e.title,url:e.url},r))):(0,a.jsx)("p",{style:{color:"white"},children:"No News Available"})})})}},188:(e,r,s)=>{s.d(r,{K:()=>O});var t=s(43),a=s(282),l=s(139),n=s.n(l),i=s(852),o=s(579);const c=t.forwardRef(((e,r)=>{let{className:s,bsPrefix:t,as:a="div",...l}=e;return t=(0,i.oU)(t,"card-body"),(0,o.jsx)(a,{ref:r,className:n()(s,t),...l})}));c.displayName="CardBody";const d=c,f=t.forwardRef(((e,r)=>{let{className:s,bsPrefix:t,as:a="div",...l}=e;return t=(0,i.oU)(t,"card-footer"),(0,o.jsx)(a,{ref:r,className:n()(s,t),...l})}));f.displayName="CardFooter";const m=f;var h=s(778);const x=t.forwardRef(((e,r)=>{let{bsPrefix:s,className:a,as:l="div",...c}=e;const d=(0,i.oU)(s,"card-header"),f=(0,t.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,o.jsx)(h.A.Provider,{value:f,children:(0,o.jsx)(l,{ref:r,...c,className:n()(a,d)})})}));x.displayName="CardHeader";const u=x,N=t.forwardRef(((e,r)=>{let{bsPrefix:s,className:t,variant:a,as:l="img",...c}=e;const d=(0,i.oU)(s,"card-img");return(0,o.jsx)(l,{ref:r,className:n()(a?`${d}-${a}`:d,t),...c})}));N.displayName="CardImg";const w=N,j=t.forwardRef(((e,r)=>{let{className:s,bsPrefix:t,as:a="div",...l}=e;return t=(0,i.oU)(t,"card-img-overlay"),(0,o.jsx)(a,{ref:r,className:n()(s,t),...l})}));j.displayName="CardImgOverlay";const p=j,y=t.forwardRef(((e,r)=>{let{className:s,bsPrefix:t,as:a="a",...l}=e;return t=(0,i.oU)(t,"card-link"),(0,o.jsx)(a,{ref:r,className:n()(s,t),...l})}));y.displayName="CardLink";const b=y;var g=s(488);const v=(0,g.A)("h6"),k=t.forwardRef(((e,r)=>{let{className:s,bsPrefix:t,as:a=v,...l}=e;return t=(0,i.oU)(t,"card-subtitle"),(0,o.jsx)(a,{ref:r,className:n()(s,t),...l})}));k.displayName="CardSubtitle";const C=k,T=t.forwardRef(((e,r)=>{let{className:s,bsPrefix:t,as:a="p",...l}=e;return t=(0,i.oU)(t,"card-text"),(0,o.jsx)(a,{ref:r,className:n()(s,t),...l})}));T.displayName="CardText";const P=T,R=(0,g.A)("h5"),S=t.forwardRef(((e,r)=>{let{className:s,bsPrefix:t,as:a=R,...l}=e;return t=(0,i.oU)(t,"card-title"),(0,o.jsx)(a,{ref:r,className:n()(s,t),...l})}));S.displayName="CardTitle";const E=S,U=t.forwardRef(((e,r)=>{let{bsPrefix:s,className:t,bg:a,text:l,border:c,body:f=!1,children:m,as:h="div",...x}=e;const u=(0,i.oU)(s,"card");return(0,o.jsx)(h,{ref:r,...x,className:n()(t,u,a&&`bg-${a}`,l&&`text-${l}`,c&&`border-${c}`),children:f?(0,o.jsx)(d,{children:m}):m})}));U.displayName="Card";const I=Object.assign(U,{Img:w,Title:E,Subtitle:C,Body:d,Link:b,Text:P,Header:u,Footer:m,ImgOverlay:p}),A=s.p+"static/media/news-back-api-loading.ea5ed7db3f3818e54e56.jpg";function F(e){let{title:r,description:s,url:t,img:l}=e;return(0,o.jsx)("div",{className:"mb-3 p-1 text-light d-inline-block",children:(0,o.jsxs)(I,{style:{width:"28rem",height:"25rem",border:"3px double red",backgroundColor:"black",color:"white"},children:[(0,o.jsx)(I.Img,{variant:"top",src:l||A,style:{width:"27.7rem",height:"15rem"},alt:"News-Image"}),(0,o.jsxs)(I.Body,{children:[(0,o.jsx)(I.Title,{style:{fontSize:"medium"},children:r?r.slice(0,120):""}),(0,o.jsx)(I.Text,{style:{fontSize:"small"},children:s?s.slice(0,130):""}),(0,o.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:(0,o.jsx)(a.A,{variant:"primary",className:"text-decoration-underline",style:{fontSize:"small",width:"5.6rem",height:"2.2rem"},children:"Read-more"})})]})]})})}s(50);function O(e){let{category:r}=e;const[s,a]=(0,t.useState)([]);return(0,t.useEffect)((()=>{!async function(){let e;try{if(e=await fetch("https://fastapi-newsfetch.onrender.com/fetch/",{method:"POST",headers:{"Content-Type":"text/plain"},body:r}),!e.ok)throw new Error("Network response was not ok");e=await e.json();let s=await e.articles;a(s),console.log("Success:")}catch(s){console.error("Error:",s)}}()}),[r]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{id:"all",className:"d-flex justify-content-center flex-row flex-wrap m-1 p-1 w-auto overflow-x-hidden",children:s&&s.length>0?s.map(((e,r)=>(0,o.jsx)(F,{title:e.title,description:e.description,url:e.url,img:e.urlToImage},r))):(0,o.jsx)("p",{style:{color:"white"},children:"No News Available"})})})}}}]);
//# sourceMappingURL=90.fbcf1143.chunk.js.map
(this["webpackJsonppwa-demo"]=this["webpackJsonppwa-demo"]||[]).push([[0],[,,function(e,t,n){e.exports={wrapper:"TaskCard_wrapper__2pwFH",milestones:"TaskCard_milestones__aQ1Fm",milestone:"TaskCard_milestone__1ZgSQ",complete:"TaskCard_complete__2qkrJ",photos:"TaskCard_photos__2EWg6",photo:"TaskCard_photo__qubp1",addPhoto:"TaskCard_addPhoto__2k0jz",remove:"TaskCard_remove__5Qf8u",buttons:"TaskCard_buttons__1SyS5",completeButton:"TaskCard_completeButton__oOeo0",resetButton:"TaskCard_resetButton__3Nj-C"}},,,,,function(e,t,n){e.exports={wrapper:"TakePhoto_wrapper__2IAC6",video:"TakePhoto_video__3jRgH",buttons:"TakePhoto_buttons__10Dcp",backButton:"TakePhoto_backButton__mVHoW",takePhotoButton:"TakePhoto_takePhotoButton__3jwSX"}},,,,,,,,function(e,t,n){e.exports={wrapper:"App_wrapper__2yWJv",footer:"App_footer__2nLYZ"}},,function(e,t,n){},function(e,t,n){e.exports={wrapper:"TasksList_wrapper__19HVx"}},,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(16),c=n.n(r),s=(n(24),n(25),n(15)),i=n.n(s),d=n(4),l=n(10),u=n(3),j=function(e,t){switch(t.type){case"LoadTasks":return Object(u.a)(Object(u.a)({},e),{},{tasks:Object(l.a)(t.value)});case"UpdateTask":var n=e.tasks.findIndex((function(e){return e._id===t.task._id}));if(!n)return e;var a=e.tasks;return a[n]=Object(u.a)({},t.task),Object(u.a)(Object(u.a)({},e),{},{tasks:Object(l.a)(a)});default:return e}},h={tasks:[]},p=n(0),b=Object(a.createContext)([h,function(){}]),v=function(e){var t=e.children,n=Object(a.useReducer)(j,h),o=Object(d.a)(n,2),r=o[0],c=o[1];return Object(p.jsx)(b.Provider,{value:[r,c],children:t})},f=n(17),O=n.n(f),k=n(5),m=n.n(k),w=n(18),x=n.n(w),_=n(2),g=n.n(_),S=function(e){if(!e)return"";try{var t=new Date(e);return"".concat(t.getHours(),":").concat(t.getMinutes().toString().padStart(2,"0"))}catch(n){return""}},C=function(e){var t=e.className,n=e.task,a=e.onPhotoRemove,o=e.onCompleteStep,r=e.onPhotoAddStart,c=e.onReset;return Object(p.jsxs)("div",{className:m()(g.a.wrapper,t),children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("b",{children:n.location})}),Object(p.jsx)("div",{children:n.description})]}),Object(p.jsxs)("div",{className:g.a.milestones,children:[Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{className:m()(g.a.milestone,n.travelStart&&g.a.complete),children:[Object(p.jsx)("b",{children:"Travel started "}),Object(p.jsx)("span",{children:S(n.travelStart)})]}),n.travelStart&&Object(p.jsxs)("li",{className:m()(g.a.milestone,n.travelEnd&&g.a.complete),children:[Object(p.jsx)("b",{children:"Travel finished "}),Object(p.jsx)("span",{children:S(n.travelEnd)})]}),n.travelEnd&&Object(p.jsxs)("li",{className:m()(g.a.milestone,n.workStart&&g.a.complete),children:[Object(p.jsx)("b",{children:"Work started "}),Object(p.jsx)("span",{children:S(n.workStart)})]}),n.workStart&&Object(p.jsxs)("li",{className:m()(g.a.milestone,n.workEnd&&g.a.complete),children:[Object(p.jsx)("b",{children:"Work finished "}),Object(p.jsx)("span",{children:S(n.workEnd)})]})]}),Object(p.jsxs)("div",{className:g.a.buttons,children:[Object(p.jsx)("button",{className:g.a.completeButton,onClick:o,disabled:!!n.workEnd,children:"\u25b6"}),Object(p.jsx)("button",{className:g.a.resetButton,onClick:c,children:"Reset"})]})]}),Object(p.jsxs)("div",{className:g.a.photos,children:[n.photos&&n.photos.map((function(e,t){return Object(p.jsxs)("div",{className:g.a.photo,onClick:function(){return a(t)},children:[Object(p.jsx)("img",{alt:"",src:e}),Object(p.jsx)("span",{className:g.a.remove,children:"\xd7"})]},t)})),Object(p.jsx)("div",{className:g.a.addPhoto,onClick:r,children:"\ud83d\udcf7"})]})]})},T=Object(a.memo)(C),N=n(12),P=n(6),y=n.n(P),E=n(7),B=n.n(E),W=function(e){var t=e.onPhoto,n=e.onCancel,o=Object(a.useRef)(null),r=Object(a.useState)(null),c=Object(d.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(!1),u=Object(d.a)(l,2),j=u[0],h=u[1],b=Object(a.useState)(void 0),v=Object(d.a)(b,2),f=v[0],O=v[1],k=Object(a.useCallback)(Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.current){e.next=10;break}return o.current.addEventListener("loadedmetadata",(function(){console.log("video ready");var e=null===s||void 0===s?void 0:s.getVideoTracks()[0].getCapabilities();O(e),h(!0)})),o.current.addEventListener("loadeddata",(function(){o.current&&o.current.play()})),o.current.addEventListener("ended",(function(){console.log("stream ended"),i(null),h(!1)})),e.next=6,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}});case 6:t=e.sent,console.log("setting stream"),i(t),o.current.srcObject=t;case 10:case"end":return e.stop()}}),e)}))),[s]);Object(a.useEffect)((function(){var e=o.current;return s||k(),function(){e&&e.pause(),s&&s.getTracks().forEach((function(e){e.stop()}))}}),[k,s]);var w=Object(a.useCallback)((function(e){var t=null===s||void 0===s?void 0:s.getVideoTracks(),n=t&&t[0];n&&j&&f.torch&&n.applyConstraints({advanced:[{torch:e}]}).then((function(){console.log("torch is ".concat(e?"on":"off"))}))}),[null===f||void 0===f?void 0:f.torch,j,s]);return Object(p.jsxs)("div",{className:m()(B.a.wrapper),children:[Object(p.jsx)("video",{className:B.a.video,ref:o,muted:!0,playsInline:!0}),Object(p.jsxs)("div",{className:B.a.buttons,children:[Object(p.jsx)("button",{className:B.a.backButton,onClick:n,children:"Back"}),Object(p.jsx)("button",{className:B.a.takePhotoButton,onClick:function(){var e=o.current;if(e){var n=document.createElement("canvas");n.height=e.videoHeight/2,n.width=e.videoWidth/2;var a=n.getContext("2d");if(a){a.drawImage(e,0,0,e.videoWidth/2,e.videoHeight/2);var r=n.toDataURL("image/webp",.8);t(r)}}},disabled:!j,children:"Take photo!"}),Object(p.jsx)("button",{className:B.a.torchButton,onClick:function(){return w(!0)},disabled:!j,children:"Flash"})]}),Object(p.jsx)("div",{style:{fontSize:"10px"},children:JSON.stringify(f)})]})},R=function(e){var t=e.className,n=e.onPhotoRemove,o=e.tasks,r=e.onCompleteStep,c=e.onPhotoAdd,s=e.onTaskReset,i=Object(a.useState)(null),l=Object(d.a)(i,2),u=l[0],j=l[1];return console.log(o),Object(p.jsxs)("div",{className:m()(x.a.wrapper,t),children:[Object(p.jsx)("ul",{children:o.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(T,{task:e,onPhotoRemove:function(t){return n(e,t)},onPhotoAddStart:function(){return j(e)},onCompleteStep:function(){return r(e)},onReset:function(){return s(e)}},e._id)})}))}),u&&Object(p.jsx)(W,{onCancel:function(){return j(null)},onPhoto:function(e){c(u,e),j(null)}})]})},A=n(8),L=n(9),I=Object(A.a)((function e(t){Object(L.a)(this,e),this.value=t,this.type="LoadTasks"})),D=Object(A.a)((function e(t){Object(L.a)(this,e),this.task=t,this.type="UpdateTask"})),U=n(19),H=["_id"],J="https://crudcrud.com/api/1aa10a5e89e24398bd56391f380dddd3";function M(){return(M=Object(N.a)(y.a.mark((function e(){var t,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(J,"/tasks"));case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return F.apply(this,arguments)}function F(){return(F=Object(N.a)(y.a.mark((function e(t){var n,a,o;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t._id,a=Object(U.a)(t,H),e.next=3,fetch("".concat(J,"/tasks/").concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Q=function(){var e=Object(a.useContext)(b),t=Object(d.a)(e,2),n=t[0].tasks,o=t[1];Object(a.useEffect)((function(){(function(){return M.apply(this,arguments)})().then((function(e){return o(new I(e))}))}),[o]);return Object(p.jsx)("div",{className:O.a.wrapper,children:Object(p.jsx)(R,{tasks:n,onPhotoRemove:function(e,t){var n=Object(l.a)(e.photos),a=Object(u.a)(Object(u.a)({},e),{},{photos:n.splice(t,1)});V(a),o(new D(a))},onPhotoAdd:function(e,t){var n=e.photos||[],a=Object(u.a)(Object(u.a)({},e),{},{photos:[].concat(Object(l.a)(n),[t])});V(a),o(new D(a))},onCompleteStep:function(e){var t=Object(u.a)({},e);t.workEnd||(t.workStart?t.workEnd=(new Date).toISOString():t.travelEnd?t.workStart=(new Date).toISOString():t.travelStart?t.travelEnd=(new Date).toISOString():t.travelStart=(new Date).toISOString()),V(t),o(new D(t))},onTaskReset:function(e){var t=Object(u.a)(Object(u.a)({},e),{},{workEnd:void 0,workStart:void 0,travelEnd:void 0,travelStart:void 0});V(t),o(new D(t))}})})},q="0.4.4",z=function(){return Object(p.jsxs)("div",{className:i.a.wrapper,children:[Object(p.jsx)(v,{children:Object(p.jsx)(Q,{})}),Object(p.jsxs)("footer",{className:i.a.footer,children:["version ",q]})]})},Z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(z,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/pwa-demo",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/pwa-demo","/service-worker.js");Z?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):X(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):X(t,e)}))}}()}],[[28,1,2]]]);
//# sourceMappingURL=main.c9ab318c.chunk.js.map
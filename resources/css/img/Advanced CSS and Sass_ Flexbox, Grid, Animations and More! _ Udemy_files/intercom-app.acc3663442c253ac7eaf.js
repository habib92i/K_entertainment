(window.webpackJsonp=window.webpackJsonp||[]).push([["intercom-app"],{"./src/udemy/js/intercom/app.js":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/mobx/lib/mobx.module.js"),r=n("./src/udemy/js/eu-cookie-message/eu-cookie-message.mobx-store.js"),c=n("./src/udemy/js/utils/get-config-data.js"),o=n("./src/udemy/js/utils/get-request-data.js"),s=n("./src/udemy/js/utils/ud-me.js"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window,n=t.Intercom;if("function"==typeof n)n("reattach_activator"),n("update",e);else{var a=function e(){e.c(arguments)};a.q=[],a.c=function(e){a.q.push(e)},t.Intercom=a;var r=function(){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src="https://widget.intercom.io/widget/".concat(e.app_id);var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)};"complete"===document.readyState?r():t.attachEvent?t.attachEvent("onload",r):t.addEventListener("load",r,!1)}},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=e.history;if(e.Intercom&&!t.hasIntercomPatch){var n=t.pushState;t.pushState=function(a){return"function"==typeof t.onpushstate&&t.onpushstate({state:a}),e.Intercom("update"),n.apply(t,arguments)},t.hasIntercomPatch=!0}};n.d(t,"default",(function(){return h}));var p=Object(c.a)(),d=Object(o.a)(),m=function(){var e=babelHelpers.asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(a.when)((function(){return!s.a.isLoading}));case 2:return n={},c=p.third_party.intercom.app_id,s.a.id&&Object.assign(n,{app_id:c,email:s.a.email,name:s.a.title,created_at:s.a.created,user_id:s.a.id,user_hash:t.intercom_user_hash}),d.extraIntercomData&&Object.assign(n,d.extraIntercomData),n.hide_default_launcher=Object(r.b)()||n.hide_default_launcher,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function h(e,t){return f.apply(this,arguments)}function f(){return(f=babelHelpers.asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.classList.contains("ud-component--intercom--app")||!p.features.intercom_chat){e.next=7;break}return e.next=3,m(n);case 3:a=e.sent,i(a),window.Intercom("boot",a),u();case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
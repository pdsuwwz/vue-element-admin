(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb4b230"],{"06fc":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-basic-container"},[n("NavigationNavBar"),n("NavigationMenuBar"),n("section",{staticClass:"section-container"},[n("main",{staticClass:"main-content-box"},[n("NavigationPageHeader"),n("div",{staticClass:"inner-content"},[n("router-view")],1)],1)])],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"aside-placeholder",class:{collapse:t.isCollapse}}),n("aside",{staticClass:"navigation-menubar-aside-container fixed-aside",class:{collapse:t.isCollapse}},[n("el-menu",{staticClass:"menubar-menu-list",attrs:{"default-active":t.getCurrentRoute,collapse:t.isCollapse,"collapse-transition":!1,"active-text-color":t.getActiveTextColor},on:{select:t.handleMenuSelect}},t._l(t.getRoutes,(function(t,e){return n("NavigationMenuBarItem",{key:e,attrs:{"route-item":t,"root-path":t.path}})})),1),n("div",{staticClass:"collapse-btn-box",on:{click:function(e){return t.toggleCollapse()}}},[n("i",{staticClass:"btn-icon",class:{"el-icon-s-fold":!t.isCollapse,"el-icon-s-unfold":t.isCollapse}})])],1)])},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.routeItem.hiddenMenu?t._e():n("div",{staticClass:"menu-bar-item-container"},[t.getRouteItemList?n("el-submenu",{class:{"submenu-active":t.isActiveRootRoute},attrs:{index:t.rootPath,"popper-append-to-body":""}},[t._l(t.getRouteItemList,(function(e,a){return n("NavigationMenuBarItem",{key:a,attrs:{"route-item":e,"root-path":t.getJoinPath(e.path)}})})),n("template",{slot:"title"},[t.isFontAwesome?n("i",{staticClass:"menu-font-awesome-icon"},[n("font-awesome-icon",{attrs:{icon:t.routeItem.icon}})],1):n("i",{class:t.routeItem.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.routeItem.name))])])],2):t.isOnlyRoute?[n("el-menu-item",{attrs:{index:t.rootPath}},[t.isFontAwesome?n("i",{staticClass:"menu-font-awesome-icon"},[n("font-awesome-icon",{attrs:{icon:t.routeItem.icon}})],1):n("i",{class:t.routeItem.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(t.routeItem.name))])])]:t._e()],2)},c=[],u=(n("caad"),n("a15b"),n("2532"),n("2ca0"),n("df7c")),l=n.n(u),d={name:"NavigationMenuBarItem",props:{routeItem:{type:Object,default:function(){return{}}},rootPath:{type:String,default:""}},computed:{isOnlyRoute:function(){var t=["/","*"];return!this.routeItem.children&&!this.routeItem.redirect&&!t.includes(this.routeItem.path)},isFontAwesome:function(){return this.routeItem.icon&&!this.routeItem.icon.startsWith("el-")},getRouteItemList:function(){return this.routeItem.children},getCurrentRoute:function(){return this.$route.path},isActiveRootRoute:function(){return this.getCurrentRoute.includes(this.rootPath)}},methods:{getJoinPath:function(t){return l.a.join(this.rootPath,t)}}},m=d,f=(n("ab3d"),n("2877")),h=Object(f["a"])(m,s,c,!1,null,"170aa3e2",null),v=h.exports,g=n("24ab"),p=n.n(g),b={name:"NavigationMenuBar",components:{NavigationMenuBarItem:v},data:function(){return{isCollapse:"1"===localStorage.getItem("menu-is-collapse")}},computed:{getRoutes:function(){return this.$router.options.routes},getCurrentRoute:function(){return this.$route.path},getActiveTextColor:function(){return p.a.colorPrimary}},methods:{toggleCollapse:function(){this.isCollapse=!this.isCollapse,localStorage.setItem("menu-is-collapse",this.isCollapse?"1":"0")},handleMenuSelect:function(t){this.getCurrentRoute!==t&&this.$router.push({path:t})}}},C=b,_=(n("5876"),Object(f["a"])(C,o,r,!1,null,"e6ef9330",null)),N=_.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"navigation-navbar-header-container fixed-header"},[n("div",{staticClass:"navbar-header-box"},[n("NavigationSideLogo"),n("div",{staticStyle:{flex:"1"}}),n("NavigationSideAction")],1)])])},I=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side-logo-container"},[a("router-link",{attrs:{to:"/"}},[a("img",{staticClass:"side-logo-img",attrs:{src:n("9d64"),alt:"商标"}}),a("h1",{staticClass:"side-logo-title"},[t._v(" "+t._s(t.title)+" ")])])],1)},y=[],S={name:"NavigationSideLogo",data:function(){return{title:"Element Admin"}}},$=S,w=(n("bc9e"),Object(f["a"])($,R,y,!1,null,"7b1b6ade",null)),k=w.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"side-action-container"},[n("ul",{staticClass:"action-list"},t._l(3,(function(e){return n("li",{key:e,staticClass:"action-item"},[t._v(" Action "+t._s(e)+" ")])})),0)])},A=[],L={name:"NavigationSideAction",data:function(){return{title:"Vue element admin"}},methods:{handleClick:function(){this.$emit("click")}}},O=L,P=(n("14c1"),Object(f["a"])(O,B,A,!1,null,"64505fdc",null)),M=P.exports,j={name:"NavigationNavBar",components:{NavigationSideLogo:k,NavigationSideAction:M}},E=j,W=(n("af87"),Object(f["a"])(E,x,I,!1,null,"54fa509e",null)),J=W.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-page-header-container"},[n("NavigationNavBreadcrumb"),n("div",{staticClass:"page-header-heading"},[n("h1",[t._v(t._s(t.$route.name))])])],1)},F=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigation-nav-breadcrumb-container"},[n("el-breadcrumb",{attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb",mode:"in-out"}},t._l(t.getRouteList,(function(e,a){return n("el-breadcrumb-item",{key:e.path,staticClass:"nav-breadcrumb-item"},[a===t.getRouteList.length-1?n("span",{staticClass:"breadcrumb-route-text"},[t._v(t._s(e.name))]):n("a",{staticClass:"breadcrumb-route-link",on:{click:function(n){return n.preventDefault(),t.handleLink(e)}}},[t._v(t._s(e.name))])])})),1)],1)],1)},D=[],V=(n("45fc"),{name:"NavigationNavBreadcrumb",computed:{getRouteList:function(){return this.$route.matched},getCurrentRoute:function(){return this.$route.path}},methods:{handleLink:function(t){var e=this,n=t.redirect,a=t.path,i=[n,a].some((function(t){return e.getCurrentRoute===t}));i||this.$router.push({path:n||a})}}}),q=V,z=(n("2ff0"),Object(f["a"])(q,H,D,!1,null,"cb75904c",null)),G=z.exports,K={name:"NavigationPageHeader",components:{NavigationNavBreadcrumb:G}},Q=K,U=(n("316c"),Object(f["a"])(Q,T,F,!1,null,"6812dc0c",null)),X=U.exports,Y={name:"LayoutBasic",components:{NavigationMenuBar:N,NavigationNavBar:J,NavigationPageHeader:X}},Z=Y,tt=(n("1c1d"),Object(f["a"])(Z,a,i,!1,null,"6cc6d895",null));e["default"]=tt.exports},"0f06":function(t,e,n){},"14c1":function(t,e,n){"use strict";var a=n("ddb4"),i=n.n(a);i.a},"1c1d":function(t,e,n){"use strict";var a=n("5af7"),i=n.n(a);i.a},"24ab":function(t,e,n){t.exports={colorPrimary:"#409eff"}},2532:function(t,e,n){"use strict";var a=n("23e7"),i=n("5a34"),o=n("1d80"),r=n("ab13");a({target:"String",proto:!0,forced:!r("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"2ca0":function(t,e,n){"use strict";var a=n("23e7"),i=n("06cf").f,o=n("50c4"),r=n("5a34"),s=n("1d80"),c=n("ab13"),u=n("c430"),l="".startsWith,d=Math.min,m=c("startsWith"),f=!u&&!m&&!!function(){var t=i(String.prototype,"startsWith");return t&&!t.writable}();a({target:"String",proto:!0,forced:!f&&!m},{startsWith:function(t){var e=String(s(this));r(t);var n=o(d(arguments.length>1?arguments[1]:void 0,e.length)),a=String(t);return l?l.call(e,a,n):e.slice(n,n+a.length)===a}})},"2ff0":function(t,e,n){"use strict";var a=n("810d"),i=n.n(a);i.a},"316c":function(t,e,n){"use strict";var a=n("0f06"),i=n.n(a);i.a},5876:function(t,e,n){"use strict";var a=n("7472"),i=n.n(a);i.a},"5a34":function(t,e,n){var a=n("44e7");t.exports=function(t){if(a(t))throw TypeError("The method doesn't accept regular expressions");return t}},"5af7":function(t,e,n){},7472:function(t,e,n){},"7e99":function(t,e,n){},"7ed8":function(t,e,n){},"810d":function(t,e,n){},"9d64":function(t,e,n){t.exports=n.p+"static/img/logo.82b9c7a5.png"},a157:function(t,e,n){},ab13:function(t,e,n){var a=n("b622"),i=a("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,"/./"[t](e)}catch(a){}}return!1}},ab3d:function(t,e,n){"use strict";var a=n("7ed8"),i=n.n(a);i.a},af87:function(t,e,n){"use strict";var a=n("a157"),i=n.n(a);i.a},bc9e:function(t,e,n){"use strict";var a=n("7e99"),i=n.n(a);i.a},ddb4:function(t,e,n){}}]);
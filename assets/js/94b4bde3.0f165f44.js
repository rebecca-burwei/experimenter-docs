(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),a=n(7),i=(n(0),n(90)),o={id:"fenix-experiments-getting-started",title:"Implementing an experiment",slug:"/fenix-engineers"},c={unversionedId:"fenix-experiments-getting-started",id:"fenix-experiments-getting-started",isDocsHomePage:!1,title:"Implementing an experiment",description:"Client configuration prechecks",source:"@site/docs/fenix-experiments-getting-started.md",slug:"/fenix-engineers",permalink:"/experimenter-docs/fenix-engineers",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/fenix-experiments-getting-started.md",version:"current",sidebar:"sidebar",previous:{title:"Root Page",permalink:"/experimenter-docs/experimenter-engineers"},next:{title:"Root Page",permalink:"/experimenter-docs/desktop-engineers"}},l=[{value:"Client configuration prechecks",id:"client-configuration-prechecks",children:[]},{value:"Fenix setup",id:"fenix-setup",children:[{value:"Example",id:"example",children:[]}]},{value:"Local Testing",id:"local-testing",children:[]}],p={toc:l};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"client-configuration-prechecks"},"Client configuration prechecks"),Object(i.b)("p",null,"\u2705  Get a copy of the experiment brief for your experiment from the ",Object(i.b)("a",{parentName:"p",href:"https://mana.mozilla.org/wiki/x/FaXNBw"},"Experiments Repository")," mana page."),Object(i.b)("p",null,"\u2705  Assure that your experiment brief contains values for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"experiment name"),Object(i.b)("li",{parentName:"ul"},"featureID"),Object(i.b)("li",{parentName:"ul"},"branch names (for a basic a/b experiment, prefer ",Object(i.b)("em",{parentName:"li"},"control")," and ",Object(i.b)("em",{parentName:"li"},"treatment"),")")),Object(i.b)("p",null,"\u2705  Confirm the ",Object(i.b)("strong",{parentName:"p"},"featureID")," is added to the experimenter list of console values.  "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: featureID setup access is controlled via experimenter Django admin."),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"staging"),", ask for help in the #nimbus-rust-sdk slack channel"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"production"),", ask for help in the #experimenter slack channel"))),Object(i.b)("h2",{id:"fenix-setup"},"Fenix setup"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Update ",Object(i.b)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/fenix/blob/master/app/src/main/java/org/mozilla/fenix/experiments/Experiments.kt"},"experiments.kt")," ",Object(i.b)("strong",{parentName:"li"},"Experiment")," to include the featureID string as your experiment constant."),Object(i.b)("li",{parentName:"ol"},"Confirm ",Object(i.b)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/fenix/blob/master/app/src/main/java/org/mozilla/fenix/experiments/Experiments.kt"},"experiments.kt")," ",Object(i.b)("strong",{parentName:"li"},"ExperimentBranch")," contains the branch names you intend to use or add them if you are using something other than the ",Object(i.b)("em",{parentName:"li"},"control")," and ",Object(i.b)("em",{parentName:"li"},"treatment")," default values."),Object(i.b)("li",{parentName:"ol"},"Initialize your experiment in the appropriate location and call ",Object(i.b)("strong",{parentName:"li"},"getExperimentBranch")," to get your experiment.")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"This is an example of the configuration of a Fenix ",Object(i.b)("strong",{parentName:"p"},"Bookmarks A/B")," experiment on the \u201c",Object(i.b)("strong",{parentName:"p"},"Bookmarks Icon"),"\u201d (bookmark-icon) featureID using the ",Object(i.b)("strong",{parentName:"p"},"treatment")," and ",Object(i.b)("strong",{parentName:"p"},"control")," branches."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kt",metastring:'title="Experiments.kt"',title:'"Experiments.kt"'},'class Experiments {\n    companion object {\n        const val BOOKMARK_ICON = "bookmark-icon"\n    }\n}\n\nclass ExperimentBranch {\n    companion object {\n        const val TREATMENT = "treatment"\n        const val CONTROL = "control"\n    }\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-kt",metastring:'title="HomeMenu.kt"',title:'"HomeMenu.kt"'},"\nval experiments = context.components.analytics.experiments\n        val bookmarksIcon = experiments.getExperimentBranch(Experiments.BOOKMARK_ICON)\n            .let {\n                when (it) {\n                    ExperimentBranch.TREATMENT -> R.drawable.ic_bookmark_list\n                    else -> R.drawable.ic_bookmark_filled\n                }\n            }\n")),Object(i.b)("h2",{id:"local-testing"},"Local Testing"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Setup your local Fenix build to point to the experimenter\n",Object(i.b)("a",{parentName:"li",href:"https://github.com/mozilla-mobile/fenix#using-nimbus-servers-during-local-development"},"staging url"),"."),Object(i.b)("li",{parentName:"ol"},"Build Fenix with the updated remote-settings configuration."),Object(i.b)("li",{parentName:"ol"},"Configure your experiment in the ",Object(i.b)("a",{parentName:"li",href:"https://stage.experimenter.nonprod.dataops.mozgcp.net/nimbus/"},"experimenter nimbus staging site"),"."),Object(i.b)("li",{parentName:"ol"},"Run Fenix and check you are able to see your expected behavior.")))}m.isMDXComponent=!0},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),m=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=m(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),u=r,f=s["".concat(o,".").concat(u)]||s[u]||b[u]||i;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
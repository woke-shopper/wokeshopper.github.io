(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(n,t,e){"use strict";e.r(t),e.d(t,"default",function(){return f}),e.d(t,"pageQuery",function(){return h});var a=e(7),r=e.n(a),i=e(188),o=e.n(i),l=e(0),c=e.n(l),s=e(185),d=e(189),m=e(191),u=e(192);function p(){var n=o()(["\n  list-style-type: none;\n\n  li::before {\n    content: '' !important;\n    padding-right: 0 !important;\n  }\n"]);return p=function(){return n},n}var g=Object(d.b)("ul")(p()),f=function(n){function t(){return n.apply(this,arguments)||this}return r()(t,n),t.prototype.render=function(){var n=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,e=this.props.pageContext,a=e.previous,r=e.next;return c.a.createElement(m.a,{title:t},c.a.createElement(u.a,{title:n.frontmatter.title,description:n.excerpt}),c.a.createElement("article",null,c.a.createElement("header",null,c.a.createElement("h1",null,n.frontmatter.title),c.a.createElement("p",null,n.frontmatter.date)),c.a.createElement("div",{className:"page-content"},c.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.html}}),c.a.createElement(g,null,a&&c.a.createElement("li",null,c.a.createElement(s.a,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r&&c.a.createElement("li",null,c.a.createElement(s.a,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →"))))))},t}(c.a.Component),h="1284548601"},185:function(n,t,e){"use strict";e.d(t,"b",function(){return m});var a=e(0),r=e.n(a),i=e(13),o=e.n(i),l=e(57),c=e.n(l);e.d(t,"a",function(){return c.a});e(187);var s=r.a.createContext({});function d(n){var t=n.staticQueryData,e=n.data,a=n.query,i=n.render,o=e?e.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var m=function(n){var t=n.data,e=n.query,a=n.render,i=n.children;return r.a.createElement(s.Consumer,null,function(n){return r.a.createElement(d,{data:t,query:e,render:a||i,staticQueryData:n})})};m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},187:function(n,t,e){var a;n.exports=(a=e(190))&&a.default||a},189:function(n,t,e){"use strict";e.d(t,"a",function(){return c});var a=e(188),r=e.n(a),i=e(186);function o(){var n=r()(["\n","\n","\n"]);return o=function(){return n},n}e.d(t,"b",function(){return i.b});var l={black:"#000000",background:"#fffff8",contrast:"#111",contrastLightest:"#dad9d9",accent:"red",white:"#ffffff"},c=Object(i.a)(o(),"\nhtml {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n*, *::before, *::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0 !important;\n  padding: 0;\n}\n\n::selection {\n  background-color: "+l.contrastLightest+";\n  color: rgba(0, 0, 0, 0.70);\n}\n\na.anchor, a.anchor:hover, a.anchor:link {\n  background: none !important;\n}\n\nfigure {\n  a.gatsby-resp-image-link {\n    background: none;\n  }\n\n  span.gatsby-resp-image-wrapper {\n    max-width: 100% !important;\n  }\n}\n","\nhtml {\n  font-size: 15px;\n}\n\nbody {\n  width: 87.5%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 12.5%;\n  font-family: Palatino, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif;\n  background-color: white;\n  color: #111;\n  max-width: 1400px;\n}\n\nh1 {\n  font-weight: 400;\n  margin-top: 4rem;\n  margin-bottom: 1.5rem;\n  font-size: 3.2rem;\n  line-height: 1;\n}\n\nh2 {\n  font-style: italic;\n  font-weight: 400;\n  margin-top: 2.1rem;\n  margin-bottom: 1.4rem;\n  font-size: 2.2rem;\n  line-height: 1;\n}\n\nh3 {\n  font-style: italic;\n  font-weight: 400;\n  font-size: 1.7rem;\n  margin-top: 2rem;\n  margin-bottom: 1.4rem;\n  line-height: 1;\n}\n\nhr {\n  display: block;\n  height: 1px;\n  width: 55%;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\narticle {\n  position: relative;\n  padding: 5rem 0rem;\n}\n\nsection {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\np,\nol,\nul {\n  font-size: 1.4rem;\n  line-height: 2rem;\n}\n\np {\n  margin-top: 1.4rem;\n  margin-bottom: 1.4rem;\n  padding-right: 0;\n  vertical-align: baseline;\n}\n\nblockquote {\n  font-size: 1.4rem;\n}\n\nblockquote p {\n  width: 55%;\n  margin-right: 40px;\n}\n\nblockquote footer {\n  width: 55%;\n  font-size: 1.1rem;\n  text-align: right;\n}\n\nsection > p,\nsection > footer,\nsection > table {\n  width: 55%;\n}\n\nsection > ol,\nsection > ul {\n  width: 50%;\n  -webkit-padding-start: 5%;\n}\n\nli:not(:first-child) {\n  margin-top: 0.25rem;\n}\n\nfigure {\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  max-width: 55%;\n  -webkit-margin-start: 0;\n  -webkit-margin-end: 0;\n  margin: 0 0 3em 0;\n}\n\nfigcaption {\n  float: right;\n  clear: right;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 1.1rem;\n  line-height: 1.6;\n  vertical-align: baseline;\n  position: relative;\n  max-width: 40%;\n}\n\nfigure.fullwidth figcaption {\n  margin-right: 24%;\n}\n\na:link,\na:visited {\n  color: inherit;\n}\n\nimg {\n  max-width: 100%;\n}\n\ndiv.fullwidth,\ntable.fullwidth {\n  width: 100%;\n}\n\ndiv.table-wrapper {\n  overflow-x: auto;\n  font-family: 'Trebuchet MS', 'Gill Sans', 'Gill Sans MT', sans-serif;\n}\n\ncode {\n  font-family: Consolas, 'Liberation Mono', Menlo, Courier, monospace;\n  font-size: 1rem;\n  line-height: 1.42;\n}\n\nh1 > code,\nh2 > code,\nh3 > code {\n  font-size: 0.8em;\n}\n\npre.code {\n  font-size: 0.9rem;\n  width: 52.5%;\n  margin-left: 2.5%;\n  overflow-x: auto;\n}\n\npre.code.fullwidth {\n  width: 90%;\n}\n\n.fullwidth {\n  max-width: 100%;\n  clear: both;\n}\n\n.iframe-wrapper {\n  position: relative;\n  padding-bottom: 56.25%; /* 16:9 */\n  padding-top: 25px;\n  height: 0;\n}\n\n.iframe-wrapper iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n@media (max-width: 760px) {\n  body {\n    width: 84%;\n    padding-left: 8%;\n    padding-right: 8%;\n  }\n\n  hr,\n  section > p,\n  section > footer,\n  section > table {\n    width: 100%;\n  }\n\n  pre.code {\n    width: 97%;\n  }\n\n  section > ol {\n    width: 90%;\n  }\n\n  section > ul {\n    width: 90%;\n  }\n\n  figure {\n    max-width: 90%;\n  }\n\n  figcaption,\n  figure.fullwidth figcaption {\n    margin-right: 0%;\n    max-width: none;\n  }\n\n  blockquote {\n    margin-left: 1.5em;\n    margin-right: 0em;\n  }\n\n  blockquote p,\n  blockquote footer {\n    width: 100%;\n  }\n\n  label.margin-toggle:not(.sidenote-number) {\n    display: inline;\n  }\n\n  label {\n    cursor: pointer;\n  }\n\n  div.table-wrapper,\n  table {\n    width: 85%;\n  }\n\n  img {\n    width: 100%;\n  }\n}\n")},190:function(n,t,e){"use strict";e.r(t);e(16);var a=e(0),r=e.n(a),i=e(13),o=e.n(i),l=e(83),c=function(n){var t=n.location,e=n.pageResources;return e?r.a.createElement(l.a,Object.assign({location:t,pageResources:e},e.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},191:function(n,t,e){"use strict";e.d(t,"a",function(){return f});var a=e(7),r=e.n(a),i=e(188),o=e.n(i),l=e(0),c=e.n(l),s=e(185),d=e(189);function m(){var n=o()(["\n  padding-bottom: 36px;\n"]);return m=function(){return n},n}function u(){var n=o()(["\n  ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    display: inline-block;\n    margin: 16px;\n\n    a {\n      background: none;\n    }\n  }\n"]);return u=function(){return n},n}var p=d.b.nav(u()),g=d.b.footer(m()),f=function(n){function t(){return n.apply(this,arguments)||this}return r()(t,n),t.prototype.render=function(){var n=this.props.children;return c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,null),c.a.createElement(p,{className:"navigation"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.a,{to:"/"},"&")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/tags"},"Tags")),c.a.createElement("li",null,c.a.createElement(s.a,{to:"/about"},"About")))),c.a.createElement("main",{className:"content",role:"main"},n),c.a.createElement(g,{className:"footer"},"© ",(new Date).getFullYear(),","," ",c.a.createElement("a",{href:"https://WokeShopper.com"},"wokeshopper.com"),"."))},t}(c.a.Component)},192:function(n,t,e){"use strict";e.d(t,"a",function(){return m});e(35);var a=e(7),r=e.n(a),i=e(193),o=e(0),l=e.n(o),c=e(194),s=e.n(c),d=e(185),m=function(n){function t(){return n.apply(this,arguments)||this}return r()(t,n),t.prototype.render=function(){var n=this;return l.a.createElement(d.b,{query:"872482878",render:function(t){var e=n.props.description||t.site.siteMetadata.description,a=n.props.lang||"en",r=n.props.title,i=n.props.keywords||[];return l.a.createElement(s.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:e},{property:"og:title",content:r},{property:"og:description",content:e},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author.name},{name:"twitter:title",content:r},{name:"twitter:description",content:e}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[])})},data:i})},t}(l.a.Component)},193:function(n){n.exports={data:{site:{siteMetadata:{title:"WokeShopper",description:"Helping consumers navigate ethical choices.",author:{name:"Ayman Nadeem"}}}}}}}]);
//# sourceMappingURL=component---src-templates-post-tsx-acb039e5c676c059703f.js.map
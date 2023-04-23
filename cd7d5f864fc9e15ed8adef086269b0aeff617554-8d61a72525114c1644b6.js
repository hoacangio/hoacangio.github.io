"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[84],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,s=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,i=new RegExp("^"+n.source),o=new RegExp(n.source+s.source,"gu"),l=new RegExp("\\d+"+s.source,"gu"),c=(e,s)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(s={pascalCase:!1,preserveConsecutiveUppercase:!1,...s},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===s.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(s.locale),c=!1===s.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(s.locale);if(1===e.length)return s.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,s)=>{let n=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];n&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),n=!1,o=i,i=!0,l++):i&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,n=!0):(n=r(c)===c&&s(c)!==c,o=i,i=s(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(i,""),e=s.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),s.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return m},M:function(){return k},P:function(){return E},S:function(){return H},_:function(){return o},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var r=a(7294),s=(a(3204),a(5697)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function u(e,t,a,r,s,n,o,l){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const g=["children"],p=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){let{children:t}=e,a=o(e,g);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],f=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:l}=e,c=o(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:s,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:n}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=o(e,b);const l=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(f,i({},n,t,{sizes:l,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:l})})),c):c};var v;f.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},y.displayName="Picture",y.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=o(e,w);return t?r.createElement(y,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:s.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(y,i({},e)),r.createElement("noscript",null,r.createElement(y,i({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],C=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:n().object.isRequired,alt:x},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],j=new Set;let _,O;const q=function(e){let{as:t="div",image:s,style:n,backgroundColor:d,className:u,class:g,onStartLoad:p,onLoad:m,onError:h}=e,b=o(e,T);const{width:f,height:y,layout:v}=s,w=c(f,y,v),{style:E,className:k}=w,S=o(w,I),L=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);g&&(u=g);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,f,y);return(0,r.useEffect)((()=>{_||(_=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==p||p({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(C);if(O&&j.has(C))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;L.current&&(L.current.innerHTML=a(i({isLoading:!0,isLoaded:j.has(C),image:s},b)),j.has(C)||(t=requestAnimationFrame((()=>{L.current&&(r=o(L.current,C,j,n,p,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{j.has(C)&&O&&(L.current.innerHTML=O(i({isLoading:j.has(C),isLoaded:j.has(C),image:s},b)),null==p||p({wasCached:!0}),null==m||m({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},S,{style:i({},E,n,{backgroundColor:d}),className:k+(u?" "+u:""),ref:L,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));R.propTypes=N,R.displayName="GatsbyImage";const z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function P(e){return function(t){let{src:a,__imageData:s,__error:n}=t,l=o(t,z);return n&&console.warn(n),s?r.createElement(e,i({image:s},l)):(console.warn("Image not loaded",a),null)}}const A=P((function(e){let{as:t="div",className:a,class:s,style:n,image:l,loading:g="lazy",imgClassName:p,imgStyle:h,backgroundColor:b,objectFit:f,objectPosition:y}=e,v=o(e,S);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),h=i({objectFit:f,objectPosition:y,backgroundColor:b},h);const{width:w,height:x,layout:N,images:T,placeholder:I,backgroundColor:j}=l,_=c(w,x,N),{style:O,className:q}=_,R=o(_,L),z={fallback:void 0,sources:[]};return T.fallback&&(z.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?C(T.fallback.srcSet):void 0})),T.sources&&(z.sources=T.sources.map((e=>i({},e,{srcSet:C(e.srcSet)})))),r.createElement(t,i({},R,{style:i({},O,n,{backgroundColor:b}),className:q+(a?" "+a:"")}),r.createElement(m,{layout:N,width:w,height:x},r.createElement(E,i({},u(I,!1,N,w,x,j,f,y))),r.createElement(k,i({"data-gatsby-image-ssr":"",className:p},v,d("eager"===g,!1,z,g,h)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:n().string.isRequired,alt:x,width:M,height:M,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};A.displayName="StaticImage",A.propTypes=F;const H=P(R);H.displayName="StaticImage",H.propTypes=F},8771:function(e,t,a){var r=a(7294),s=a(1883),n=a(8032);t.Z=()=>{var e;const t=null===(e=(0,s.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return r.createElement("div",{className:"bio"},r.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/avatar1.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(8940)}),(null==t?void 0:t.summary)&&r.createElement("p",null,(null==t?void 0:t.summary)||null))}},8940:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/4e997dbbd8ad75bc9dbb447a0122ed29/d24ee/avatar1.jpg","srcSet":"/static/4e997dbbd8ad75bc9dbb447a0122ed29/d24ee/avatar1.jpg 50w,\\n/static/4e997dbbd8ad75bc9dbb447a0122ed29/64618/avatar1.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/4e997dbbd8ad75bc9dbb447a0122ed29/d4bf4/avatar1.avif 50w,\\n/static/4e997dbbd8ad75bc9dbb447a0122ed29/ee81f/avatar1.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/4e997dbbd8ad75bc9dbb447a0122ed29/3faea/avatar1.webp 50w,\\n/static/4e997dbbd8ad75bc9dbb447a0122ed29/6a679/avatar1.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=cd7d5f864fc9e15ed8adef086269b0aeff617554-8d61a72525114c1644b6.js.map
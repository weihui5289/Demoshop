(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-icon" viewBox="0 0 1024 1024">'+""+'<path d="M960.306864 429.082522 841.986061 323.031161c0.538259-3.279696 0-6.620791 0-10.041704L841.986061 166.112272c0-33.796734-27.0204-61.200874-60.363809-61.200874-33.339316 0-60.361763 27.399023-60.361763 61.200874l0 50.279127L565.699528 77.982072c-30.990828-31.42778-81.238232-31.42778-112.234177 0L63.690066 419.299715c-30.991852 31.417547-30.991852 77.469396 0 108.887966l107.053178 43.030026 0 312.712141c0 43.266409 34.592866 78.340229 77.260641 78.340229l521.550517 0c42.670845 0 77.265758-35.069727 77.265758-78.340229L846.82016 582.043263l113.479541-44.066635C991.302809 506.556011 991.302809 460.511325 960.306864 429.082522L960.306864 429.082522M652.912845 446.731484c26.917046 0 48.737004 21.820981 48.737004 48.737004 0 26.91807-21.822005 48.735981-48.737004 48.735981s-48.737004-21.817911-48.737004-48.735981C604.175841 468.552465 625.996822 446.731484 652.912845 446.731484L652.912845 446.731484M371.082038 446.731484c26.917046 0 48.735981 21.820981 48.735981 48.737004 0 26.91807-21.820981 48.735981-48.735981 48.735981-26.917046 0-48.735981-21.817911-48.735981-48.735981C322.346057 468.552465 344.164992 446.731484 371.082038 446.731484L371.082038 446.731484M746.771513 719.011774c-56.631812 73.668837-142.357242 128.776945-235.162928 128.776945-0.052189 0-0.100284 0-0.151449 0-0.046049 0-0.096191 0-0.146333 0-91.821265 0-176.983877-54.383608-233.620805-126.766149-11.199063-14.332427-8.698103-35.023678 5.636371-46.221718 5.887081-4.630461 12.865006-6.92062 19.822464-7.017834 10.033517-0.228197 20.049638 4.114714 26.720571 12.650111 44.018539 56.266491 110.214171 88.538499 181.589778 88.584548 72.127737-0.039909 138.748041-32.878828 182.76658-90.130763 6.607488-8.590656 16.60212-13.036921 26.646893-12.884448 6.931876 0.036839 13.910824 2.25946 19.835767 6.818289C755.139088 683.927721 757.876432 704.615902 746.771513 719.011774L746.771513 719.011774M746.771513 719.011774 746.771513 719.011774z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)
"use strict";StackExchange.mockups=function(){function e(e,t,i,n,s){function a(e,t,i){for(var n=-1,s=-1;;){if(s=t.indexOf(e,s+1),-1==s)break;(0>n||Math.abs(s-i)<Math.abs(s-n))&&(n=s)}return n}return e.replace(new RegExp("<!-- Begin mockup[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End mockup -->","g"),function(e,o,r){var c={"payload":o.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":a(e,t,r),"len":e.length};return-1===c.pos?e:(s.push(c),e+"\n\n"+i+n+"-"+(s.length-1)+"%")})}function t(){StackExchange.externalEditor.init({"thingName":"mockup","thingFinder":e,"getIframeUrl":function(e){var t="/plugins/mockups/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"UI wireframe","buttonImageUrl":"/content/balsamiq/wmd-mockup-button.png?v=4","onShow":function(e){window.addMockupToEditor=e},"onRemove":function(){window.addMockupToEditor=null;try{delete window.addMockupToEditor}catch(e){}}})}return{"init":t}}(),StackExchange.schematics=function(){function e(){if(!window.postMessage)return n;var e=document.createElement("div");e.innerHTML="<svg/>";var t="http://www.w3.org/2000/svg"==(e.firstChild&&e.firstChild.namespaceURI);if(!t)return n;var i=navigator.userAgent;return/Firefox|Chrome/.test(i)?o:/Apple/.test(navigator.vendor)||/Opera/.test(i)?a:s}function t(e,t,i,n,s){function a(e,t,i){for(var n=-1,s=-1;;){if(s=t.indexOf(e,s+1),-1==s)break;(0>n||Math.abs(s-i)<Math.abs(s-n))&&(n=s)}return n}return e.replace(new RegExp("<!-- Begin schematic[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End schematic -->","g"),function(e,o,r){var c={"payload":o.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g,""),"pos":a(e,t,r),"len":e.length};return-1===c.pos?e:(s.push(c),e+"\n\n"+i+n+"-"+(s.length-1)+"%")})}function i(){var i;StackExchange.externalEditor.init({"thingName":"schematic","thingFinder":t,"getIframeUrl":function(e){var t="/plugins/schematics/editor";return e&&(t+="?edit="+encodeURIComponent(e)),t},"buttonTooltip":"Schematic","buttonImageUrl":"/content/electronics/img/wmd-schematic-button.png?v=1","checkSupport":function(){var t=e();switch(t){case o:return!0;case a:return confirm("Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?");case s:return confirm("Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?");case n:return alert("Sorry, your browser does not support all the necessary features for the schematics editor."),!1}},"onShow":function(e){var t=$("<div class='popup' />").css("z-index",1111).text("Loading editor").appendTo("body").show().addSpinner({"marginLeft":5}).center({"dy":-200});$("<div style='text-align:right;margin-top: 10px' />").append($("<button>cancel</button>").click(function(){t.remove(),e()})).appendTo(t),i=function(i){if(i=i.originalEvent,"https://www.circuitlab.com"===i.origin){i.data||e();var n=$.parseJSON(i.data);if(n&&"success"===n.load)return t.remove(),void 0;if(n&&n.edit_url&&n.image_url){n.fkey=StackExchange.options.user.fkey;var s=$("<div class='popup' />").css("z-index",1111).appendTo("body").show(),a=function(){s.text("Storing image").addSpinner({"marginLeft":5}).center(),$.post("/plugins/schematics/save",n).done(function(t){s.remove(),e(t.img)}).fail(function(e){if(409===e.status){var t="Storing aborted";e.responseText.length<200&&(t=e.responseText),s.text(t+", will retry shortly").addSpinner({"marginLeft":5}).center(),setTimeout(a,1e4)}else s.remove(),alert("Failed to upload the schematic image.")})};a()}}},$(window).on("message",i)},"onRemove":function(){$(window).off("message",i)}})}var n=0,s=1,a=2,o=3;return{"init":i}}(),StackExchange.externalEditor=function(){function e(e){function t(e,t){function d(t){function n(){StackExchange.helpers.closePopups(x.add(s)),h()}var s,r=m||v.caret(),c=v[0].value||"",u=t?t.pos:r.start,d=t?t.len:r.end-r.start,p=c.substring(0,u),g=c.substring(u+d);m=null;var f=function(t,s){if(!t)return setTimeout(n,0),v.focus(),void 0;StackExchange.navPrevention.start();var a=void 0===s?i(t):s,o=p.replace(/(?:\r\n|\r|\n){1,2}$/,""),c=o+a+g.replace(/^(?:\r\n|\r|\n){1,2}/,""),l=r.start+a.length-p.length+o.length;setTimeout(function(){e.textOperation(function(){v.val(c).focus().caret(l,l)}),n()},0)},x=null;if(a){var b=a(t?t.payload:null);x=$("<iframe>",{"src":b})}else{var k=o(t?t.payload:null);x=$(k)}x.addClass("esc-remove").css({"position":"fixed","top":"2.5%","left":"2.5%","width":"95%","height":"95%","background":"white","z-index":1001}),$("body").loadPopup({"html":x,"target":$("body"),"lightbox":!0}).done(function(){$(window).resize(),l(f)})}$('<style type="text/css"> .wmd-'+n+"-button span { background-position: 0 0; } .wmd-"+n+"-button:hover span { background-position: 0 -40px; }</style>)").appendTo("head");var p,g,m,f=e.getConverter().hooks,v=$("#wmd-input"+t);f.chain("preConversion",function(e){var t=(e.match(/%/g)||[]).length,i=v[0].value||"";return p=new Array(t+2).join("%"),g=[],s(e,i,p,n,g)}),f.chain("postConversion",function(e){return e.replace(new RegExp(p+n+"-(\\d+)%","g"),function(e,t){return"<sup><a href='#' class='edit-"+n+"' data-id='"+t+"'>edit the above "+n+"</a></sup>"})});var x="The "+n+" editor does not support touch devices.",b=!1;$("#wmd-preview"+t).on("touchend",function(){b=!0}).on("click","a.edit-"+n,function(){return b?(alert(x),b=!1,!1):(b=!1,(!u||u())&&d(g[$(this).attr("data-id")]),!1)}),$("#wmd-input"+t).keyup(function(e){e.shiftKey||e.altKey||e.metaKey||!e.ctrlKey||77!==e.which||(!u||u())&&d()}),setTimeout(function(){var e=($("#wmd-button-bar"+t),$("#wmd-image-button"+t)),i=parseInt(e.css("left"));e.nextAll("li").each(function(){var e=$(this),t=parseInt(e.css("left"));e.css("left",t+25)});var s=$("<li class='wmd-button wmd-"+n+"-button' style='left:"+(i+25)+"px' id='wmd-"+n+"-button"+t+"' title='"+r+" Ctrl-M' />").insertAfter(e),a=!1,o=$("<span />").css({"backgroundImage":"url("+c+")"}).appendTo(s).on("touchend",function(){a=!0}).click(function(){return a?(alert(x),a=!1,void 0):(a=!1,(!u||u())&&d(),void 0)});$.browser.msie&&o.mousedown(function(){m=v.caret()})},0)}function i(e){return('\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}]('+e+")\n\n<!-- End {THING} -->\n\n").replace(/{THING}/g,n)}var n=e.thingName,s=e.thingFinder,a=e.getIframeUrl,o=e.getDivContent,r=e.buttonTooltip,c=e.buttonImageUrl,l=e.onShow,h=e.onRemove||function(){},u=e.checkSupport;StackExchange.MarkdownEditor.creationCallbacks.add(t)}return{"init":e}}();
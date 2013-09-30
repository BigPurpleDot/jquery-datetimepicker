/*! jQuery UI - v1.9.2 - 2013-09-29
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.datepicker.js
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var s,n,r,o=t.nodeName.toLowerCase();return"area"===o?(s=t.parentNode,n=s.name,t.href&&n&&"map"===s.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&a(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&a(t)}function a(t){return e.expr.filters.visible(t)&&!e(t).parents().andSelf().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.ui.version||(e.extend(e.ui,{version:"1.9.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({_focus:e.fn.focus,focus:function(t,i){return"number"==typeof t?this.each(function(){var a=this;setTimeout(function(){e(a).focus(),i&&i.call(a)},t)}):this._focus.apply(this,arguments)},scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var a,s,n=e(this[0]);n.length&&n[0]!==document;){if(a=n.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,a){return!!e.data(t,a[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var a=e.attr(t,"tabindex"),s=isNaN(a);return(s||a>=0)&&i(t,!s)}}),e(function(){var t=document.body,i=t.appendChild(i=document.createElement("div"));i.offsetHeight,e.extend(i.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0}),e.support.minHeight=100===i.offsetHeight,e.support.selectstart="onselectstart"in i,t.removeChild(i).style.display="none"}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,a){function s(t,i,a,s){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,a&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===a?["Left","Right"]:["Top","Bottom"],r=a.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+a]=function(i){return i===t?o["inner"+a].call(this):this.each(function(){e(this).css(r,s(this,i)+"px")})},e.fn["outer"+a]=function(t,i){return"number"!=typeof t?o["outer"+a].call(this,t):this.each(function(){e(this).css(r,s(this,t,!0,i)+"px")})}}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),function(){var t=/msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase())||[];e.ui.ie=t.length?!0:!1,e.ui.ie6=6===parseFloat(t[1],10)}(),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,a){var s,n=e.ui[t].prototype;for(s in a)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([i,a[s]])},call:function(e,t,i){var a,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(a=0;s.length>a;a++)e.options[s[a][0]]&&s[a][1].apply(e.element,i)}},contains:e.contains,hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var a=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[a]>0?!0:(t[a]=1,s=t[a]>0,t[a]=0,s)},isOverAxis:function(e,t,i){return e>t&&t+i>e},isOver:function(t,i,a,s,n,r){return e.ui.isOverAxis(t,a,n)&&e.ui.isOverAxis(i,s,r)}}))})(jQuery);(function($,undefined){function Datepicker(){this.debug=!1,this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},$.extend(this._defaults,this.regional[""]),this.dpDiv=bindHover($('<div id="'+this._mainDivId+'" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))}function bindHover(e){var t="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.delegate(t,"mouseout",function(){$(this).removeClass("ui-state-hover"),-1!=this.className.indexOf("ui-datepicker-prev")&&$(this).removeClass("ui-datepicker-prev-hover"),-1!=this.className.indexOf("ui-datepicker-next")&&$(this).removeClass("ui-datepicker-next-hover")}).delegate(t,"mouseover",function(){$.datepicker._isDisabledDatepicker(instActive.inline?e.parent()[0]:instActive.input[0])||($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),$(this).addClass("ui-state-hover"),-1!=this.className.indexOf("ui-datepicker-prev")&&$(this).addClass("ui-datepicker-prev-hover"),-1!=this.className.indexOf("ui-datepicker-next")&&$(this).addClass("ui-datepicker-next-hover"))})}function extendRemove(e,t){$.extend(e,t);for(var i in t)(null==t[i]||t[i]==undefined)&&(e[i]=t[i]);return e}$.extend($.ui,{datepicker:{version:"1.9.2"}});var PROP_NAME="datepicker",dpuuid=(new Date).getTime(),instActive;$.extend(Datepicker.prototype,{markerClassName:"hasDatepicker",maxRows:4,log:function(){this.debug&&console.log.apply("",arguments)},_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return extendRemove(this._defaults,e||{}),this},_attachDatepicker:function(target,settings){var inlineSettings=null;for(var attrName in this._defaults){var attrValue=target.getAttribute("date:"+attrName);if(attrValue){inlineSettings=inlineSettings||{};try{inlineSettings[attrName]=eval(attrValue)}catch(err){inlineSettings[attrName]=attrValue}}}var nodeName=target.nodeName.toLowerCase(),inline="div"==nodeName||"span"==nodeName;target.id||(this.uuid+=1,target.id="dp"+this.uuid);var inst=this._newInst($(target),inline);inst.settings=$.extend({},settings||{},inlineSettings||{}),"input"==nodeName?this._connectDatepicker(target,inst):inline&&this._inlineDatepicker(target,inst)},_newInst:function(e,t){var i=e[0].id.replace(/([^A-Za-z0-9_-])/g,"\\\\$1");return{id:i,input:e,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:t,dpDiv:t?bindHover($('<div class="'+this._inlineClass+' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')):this.dpDiv}},_connectDatepicker:function(e,t){var i=$(e);t.append=$([]),t.trigger=$([]),i.hasClass(this.markerClassName)||(this._attachments(i,t),i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker",function(e,i,a){t.settings[i]=a}).bind("getData.datepicker",function(e,i){return this._get(t,i)}),this._autoSize(t),$.data(e,PROP_NAME,t),t.settings.disabled&&this._disableDatepicker(e))},_attachments:function(e,t){var i=this._get(t,"appendText"),a=this._get(t,"isRTL");t.append&&t.append.remove(),i&&(t.append=$('<span class="'+this._appendClass+'">'+i+"</span>"),e[a?"before":"after"](t.append)),e.unbind("focus",this._showDatepicker),t.trigger&&t.trigger.remove();var s=this._get(t,"showOn");if(("focus"==s||"both"==s)&&e.focus(this._showDatepicker),"button"==s||"both"==s){var n=this._get(t,"buttonText"),r=this._get(t,"buttonImage");t.trigger=$(this._get(t,"buttonImageOnly")?$("<img/>").addClass(this._triggerClass).attr({src:r,alt:n,title:n}):$('<button type="button"></button>').addClass(this._triggerClass).html(""==r?n:$("<img/>").attr({src:r,alt:n,title:n}))),e[a?"before":"after"](t.trigger),t.trigger.click(function(){return $.datepicker._datepickerShowing&&$.datepicker._lastInput==e[0]?$.datepicker._hideDatepicker():$.datepicker._datepickerShowing&&$.datepicker._lastInput!=e[0]?($.datepicker._hideDatepicker(),$.datepicker._showDatepicker(e[0])):$.datepicker._showDatepicker(e[0]),!1})}},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t=new Date(2009,11,20),i=this._get(e,"dateFormat");if(i.match(/[DM]/)){var a=function(e){for(var t=0,i=0,a=0;e.length>a;a++)e[a].length>t&&(t=e[a].length,i=a);return i};t.setMonth(a(this._get(e,i.match(/MM/)?"monthNames":"monthNamesShort"))),t.setDate(a(this._get(e,i.match(/DD/)?"dayNames":"dayNamesShort"))+20-t.getDay())}e.input.attr("size",this._formatDate(e,t).length)}},_inlineDatepicker:function(e,t){var i=$(e);i.hasClass(this.markerClassName)||(i.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker",function(e,i,a){t.settings[i]=a}).bind("getData.datepicker",function(e,i){return this._get(t,i)}),$.data(e,PROP_NAME,t),this._setDate(t,this._getDefaultDate(t),!0),this._updateDatepicker(t),this._updateAlternate(t),t.settings.disabled&&this._disableDatepicker(e),t.dpDiv.css("display","block"))},_dialogDatepicker:function(e,t,i,a,s){var n=this._dialogInst;if(!n){this.uuid+=1;var r="dp"+this.uuid;this._dialogInput=$('<input type="text" id="'+r+'" style="position: absolute; top: -100px; width: 0px;"/>'),this._dialogInput.keydown(this._doKeyDown),$("body").append(this._dialogInput),n=this._dialogInst=this._newInst(this._dialogInput,!1),n.settings={},$.data(this._dialogInput[0],PROP_NAME,n)}if(extendRemove(n.settings,a||{}),t=t&&t.constructor==Date?this._formatDate(n,t):t,this._dialogInput.val(t),this._pos=s?s.length?s:[s.pageX,s.pageY]:null,!this._pos){var o=document.documentElement.clientWidth,h=document.documentElement.clientHeight,l=document.documentElement.scrollLeft||document.body.scrollLeft,u=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[o/2-100+l,h/2-150+u]}return this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),n.settings.onSelect=i,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),$.blockUI&&$.blockUI(this.dpDiv),$.data(this._dialogInput[0],PROP_NAME,n),this},_destroyDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var a=e.nodeName.toLowerCase();$.removeData(e,PROP_NAME),"input"==a?(i.append.remove(),i.trigger.remove(),t.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"==a||"span"==a)&&t.removeClass(this.markerClassName).empty()}},_enableDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var a=e.nodeName.toLowerCase();if("input"==a)e.disabled=!1,i.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""});else if("div"==a||"span"==a){var s=t.children("."+this._inlineClass);s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t})}},_disableDatepicker:function(e){var t=$(e),i=$.data(e,PROP_NAME);if(t.hasClass(this.markerClassName)){var a=e.nodeName.toLowerCase();if("input"==a)e.disabled=!0,i.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"});else if("div"==a||"span"==a){var s=t.children("."+this._inlineClass);s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)}this._disabledInputs=$.map(this._disabledInputs,function(t){return t==e?null:t}),this._disabledInputs[this._disabledInputs.length]=e}},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]==e)return!0;return!1},_getInst:function(e){try{return $.data(e,PROP_NAME)}catch(t){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(e,t,i){var a=this._getInst(e);if(2==arguments.length&&"string"==typeof t)return"defaults"==t?$.extend({},$.datepicker._defaults):a?"all"==t?$.extend({},a.settings):this._get(a,t):null;var s=t||{};if("string"==typeof t&&(s={},s[t]=i),a){this._curInst==a&&this._hideDatepicker();var n=this._getDateDatepicker(e,!0),r=this._getMinMaxDate(a,"min"),o=this._getMinMaxDate(a,"max");extendRemove(a.settings,s),null!==r&&s.dateFormat!==undefined&&s.minDate===undefined&&(a.settings.minDate=this._formatDate(a,r)),null!==o&&s.dateFormat!==undefined&&s.maxDate===undefined&&(a.settings.maxDate=this._formatDate(a,o)),this._attachments($(e),a),this._autoSize(a),this._setDate(a,n),this._updateAlternate(a),this._updateDatepicker(a)}},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(e){var t=$.datepicker._getInst(e.target),i=!0,a=t.dpDiv.is(".ui-datepicker-rtl");if(t._keyEvent=!0,$.datepicker._datepickerShowing)switch(e.keyCode){case 9:$.datepicker._hideDatepicker(),i=!1;break;case 13:var s=$("td."+$.datepicker._dayOverClass+":not(."+$.datepicker._currentClass+")",t.dpDiv);s[0]&&$.datepicker._selectDay(e.target,t.selectedMonth,t.selectedYear,s[0]);var n=$.datepicker._get(t,"onSelect");if(n){var r=$.datepicker._formatDate(t);n.apply(t.input?t.input[0]:null,[r,t])}else $.datepicker._hideDatepicker();return!1;case 27:$.datepicker._hideDatepicker();break;case 33:$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 34:$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 35:(e.ctrlKey||e.metaKey)&&$.datepicker._clearDate(e.target),i=e.ctrlKey||e.metaKey;break;case 36:(e.ctrlKey||e.metaKey)&&$.datepicker._gotoToday(e.target),i=e.ctrlKey||e.metaKey;break;case 37:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,a?1:-1,"D"),i=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?-$.datepicker._get(t,"stepBigMonths"):-$.datepicker._get(t,"stepMonths"),"M");break;case 38:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,-7,"D"),i=e.ctrlKey||e.metaKey;break;case 39:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,a?-1:1,"D"),i=e.ctrlKey||e.metaKey,e.originalEvent.altKey&&$.datepicker._adjustDate(e.target,e.ctrlKey?+$.datepicker._get(t,"stepBigMonths"):+$.datepicker._get(t,"stepMonths"),"M");break;case 40:(e.ctrlKey||e.metaKey)&&$.datepicker._adjustDate(e.target,7,"D"),i=e.ctrlKey||e.metaKey;break;default:i=!1}else 36==e.keyCode&&e.ctrlKey?$.datepicker._showDatepicker(this):i=!1;i&&(e.preventDefault(),e.stopPropagation())},_doKeyPress:function(e){var t=$.datepicker._getInst(e.target);if($.datepicker._get(t,"constrainInput")){var i=$.datepicker._possibleChars($.datepicker._get(t,"dateFormat")),a=String.fromCharCode(e.charCode==undefined?e.keyCode:e.charCode);return e.ctrlKey||e.metaKey||" ">a||!i||i.indexOf(a)>-1}},_doKeyUp:function(e){var t=$.datepicker._getInst(e.target);if(t.input.val()!=t.lastVal)try{var i=$.datepicker.parseDate($.datepicker._get(t,"dateFormat"),t.input?t.input.val():null,$.datepicker._getFormatConfig(t));i&&($.datepicker._setDateFromField(t),$.datepicker._updateAlternate(t),$.datepicker._updateDatepicker(t))}catch(a){$.datepicker.log(a)}return!0},_showDatepicker:function(e){if(e=e.target||e,"input"!=e.nodeName.toLowerCase()&&(e=$("input",e.parentNode)[0]),!$.datepicker._isDisabledDatepicker(e)&&$.datepicker._lastInput!=e){var t=$.datepicker._getInst(e);$.datepicker._curInst&&$.datepicker._curInst!=t&&($.datepicker._curInst.dpDiv.stop(!0,!0),t&&$.datepicker._datepickerShowing&&$.datepicker._hideDatepicker($.datepicker._curInst.input[0]));var i=$.datepicker._get(t,"beforeShow"),a=i?i.apply(e,[e,t]):{};if(a!==!1){extendRemove(t.settings,a),t.lastVal=null,$.datepicker._lastInput=e,$.datepicker._setDateFromField(t),$.datepicker._inDialog&&(e.value=""),$.datepicker._pos||($.datepicker._pos=$.datepicker._findPos(e),$.datepicker._pos[1]+=e.offsetHeight);var s=!1;$(e).parents().each(function(){return s|="fixed"==$(this).css("position"),!s});var n={left:$.datepicker._pos[0],top:$.datepicker._pos[1]};if($.datepicker._pos=null,t.dpDiv.empty(),t.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),$.datepicker._updateDatepicker(t),n=$.datepicker._checkOffset(t,n,s),t.dpDiv.css({position:$.datepicker._inDialog&&$.blockUI?"static":s?"fixed":"absolute",display:"none",left:n.left+"px",top:n.top+"px"}),!t.inline){var r=$.datepicker._get(t,"showAnim"),o=$.datepicker._get(t,"duration"),h=function(){var e=t.dpDiv.find("iframe.ui-datepicker-cover");if(e.length){var i=$.datepicker._getBorders(t.dpDiv);e.css({left:-i[0],top:-i[1],width:t.dpDiv.outerWidth(),height:t.dpDiv.outerHeight()})}};t.dpDiv.zIndex($(e).zIndex()+1),$.datepicker._datepickerShowing=!0,$.effects&&($.effects.effect[r]||$.effects[r])?t.dpDiv.show(r,$.datepicker._get(t,"showOptions"),o,h):t.dpDiv[r||"show"](r?o:null,h),r&&o||h(),t.input.is(":visible")&&!t.input.is(":disabled")&&t.input.focus(),$.datepicker._curInst=t}}}},_updateDatepicker:function(e){this.maxRows=4;var t=$.datepicker._getBorders(e.dpDiv);instActive=e,e.dpDiv.empty().append(this._generateHTML(e)),this._attachHandlers(e);var i=e.dpDiv.find("iframe.ui-datepicker-cover");i.length&&i.css({left:-t[0],top:-t[1],width:e.dpDiv.outerWidth(),height:e.dpDiv.outerHeight()}),e.dpDiv.find("."+this._dayOverClass+" a").mouseover();var a=this._getNumberOfMonths(e),s=a[1],n=17;if(e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),s>1&&e.dpDiv.addClass("ui-datepicker-multi-"+s).css("width",n*s+"em"),e.dpDiv[(1!=a[0]||1!=a[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),e.dpDiv[(this._get(e,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),e==$.datepicker._curInst&&$.datepicker._datepickerShowing&&e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&e.input[0]!=document.activeElement&&e.input.focus(),e.yearshtml){var r=e.yearshtml;setTimeout(function(){r===e.yearshtml&&e.yearshtml&&e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml),r=e.yearshtml=null},0)}},_getBorders:function(e){var t=function(e){return{thin:1,medium:2,thick:3}[e]||e};return[parseFloat(t(e.css("border-left-width"))),parseFloat(t(e.css("border-top-width")))]},_checkOffset:function(e,t,i){var a=e.dpDiv.outerWidth(),s=e.dpDiv.outerHeight(),n=e.input?e.input.outerWidth():0,r=e.input?e.input.outerHeight():0,o=document.documentElement.clientWidth+(i?0:$(document).scrollLeft()),h=document.documentElement.clientHeight+(i?0:$(document).scrollTop());return t.left-=this._get(e,"isRTL")?a-n:0,t.left-=i&&t.left==e.input.offset().left?$(document).scrollLeft():0,t.top-=i&&t.top==e.input.offset().top+r?$(document).scrollTop():0,t.left-=Math.min(t.left,t.left+a>o&&o>a?Math.abs(t.left+a-o):0),t.top-=Math.min(t.top,t.top+s>h&&h>s?Math.abs(s+r):0),t},_findPos:function(e){for(var t=this._getInst(e),i=this._get(t,"isRTL");e&&("hidden"==e.type||1!=e.nodeType||$.expr.filters.hidden(e));)e=e[i?"previousSibling":"nextSibling"];var a=$(e).offset();return[a.left,a.top]},_hideDatepicker:function(e){var t=this._curInst;if(t&&(!e||t==$.data(e,PROP_NAME))&&this._datepickerShowing){var i=this._get(t,"showAnim"),a=this._get(t,"duration"),s=function(){$.datepicker._tidyDialog(t)};$.effects&&($.effects.effect[i]||$.effects[i])?t.dpDiv.hide(i,$.datepicker._get(t,"showOptions"),a,s):t.dpDiv["slideDown"==i?"slideUp":"fadeIn"==i?"fadeOut":"hide"](i?a:null,s),i||s(),this._datepickerShowing=!1;var n=this._get(t,"onClose");n&&n.apply(t.input?t.input[0]:null,[t.input?t.input.val():"",t]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),$.blockUI&&($.unblockUI(),$("body").append(this.dpDiv))),this._inDialog=!1}},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(e){if($.datepicker._curInst){var t=$(e.target),i=$.datepicker._getInst(t[0]);(t[0].id!=$.datepicker._mainDivId&&0==t.parents("#"+$.datepicker._mainDivId).length&&!t.hasClass($.datepicker.markerClassName)&&!t.closest("."+$.datepicker._triggerClass).length&&$.datepicker._datepickerShowing&&(!$.datepicker._inDialog||!$.blockUI)||t.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!=i)&&$.datepicker._hideDatepicker()}},_adjustDate:function(e,t,i){var a=$(e),s=this._getInst(a[0]);this._isDisabledDatepicker(a[0])||(this._adjustInstDate(s,t+("M"==i?this._get(s,"showCurrentAtPos"):0),i),this._updateDatepicker(s))},_gotoToday:function(e){var t=$(e),i=this._getInst(t[0]);if(this._get(i,"gotoCurrent")&&i.currentDay)i.selectedDay=i.currentDay,i.drawMonth=i.selectedMonth=i.currentMonth,i.drawYear=i.selectedYear=i.currentYear;else{var a=new Date;i.selectedDay=a.getDate(),i.drawMonth=i.selectedMonth=a.getMonth(),i.drawYear=i.selectedYear=a.getFullYear()}this._notifyChange(i),this._adjustDate(t)},_selectMonthYear:function(e,t,i){var a=$(e),s=this._getInst(a[0]);s["selected"+("M"==i?"Month":"Year")]=s["draw"+("M"==i?"Month":"Year")]=parseInt(t.options[t.selectedIndex].value,10),this._notifyChange(s),this._adjustDate(a)},_selectDay:function(e,t,i,a){var s=$(e);if(!$(a).hasClass(this._unselectableClass)&&!this._isDisabledDatepicker(s[0])){var n=this._getInst(s[0]);n.selectedDay=n.currentDay=$("a",a).html(),n.selectedMonth=n.currentMonth=t,n.selectedYear=n.currentYear=i,this._selectDate(e,this._formatDate(n,n.currentDay,n.currentMonth,n.currentYear))}},_clearDate:function(e){var t=$(e);this._getInst(t[0]),this._selectDate(t,"")},_selectDate:function(e,t){var i=$(e),a=this._getInst(i[0]);t=null!=t?t:this._formatDate(a),a.input&&a.input.val(t),this._updateAlternate(a);var s=this._get(a,"onSelect");s?s.apply(a.input?a.input[0]:null,[t,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(e){var t=this._get(e,"altField");if(t){var i=this._get(e,"altFormat")||this._get(e,"dateFormat"),a=this._getDate(e),s=this.formatDate(i,a,this._getFormatConfig(e));$(t).each(function(){$(this).val(s)})}},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t=new Date(e.getTime());t.setDate(t.getDate()+4-(t.getDay()||7));var i=t.getTime();return t.setMonth(0),t.setDate(1),Math.floor(Math.round((i-t)/864e5)/7)+1},parseDate:function(e,t,i){if(null==e||null==t)throw"Invalid arguments";if(t="object"==typeof t?""+t:t+"",""==t)return null;var a=(i?i.shortYearCutoff:null)||this._defaults.shortYearCutoff;a="string"!=typeof a?a:(new Date).getFullYear()%100+parseInt(a,10);for(var s=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,n=(i?i.dayNames:null)||this._defaults.dayNames,r=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,o=(i?i.monthNames:null)||this._defaults.monthNames,h=-1,l=-1,u=-1,d=-1,c=!1,p=function(t){var i=e.length>y+1&&e.charAt(y+1)==t;return i&&y++,i},m=function(e){var i=p(e),a="@"==e?14:"!"==e?20:"y"==e&&i?4:"o"==e?3:2,s=RegExp("^\\d{1,"+a+"}"),n=t.substring(v).match(s);if(!n)throw"Missing number at position "+v;return v+=n[0].length,parseInt(n[0],10)},f=function(e,i,a){var s=$.map(p(e)?a:i,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)}),n=-1;if($.each(s,function(e,i){var a=i[1];return t.substr(v,a.length).toLowerCase()==a.toLowerCase()?(n=i[0],v+=a.length,!1):undefined}),-1!=n)return n+1;throw"Unknown name at position "+v},g=function(){if(t.charAt(v)!=e.charAt(y))throw"Unexpected literal at position "+v;v++},v=0,y=0;e.length>y;y++)if(c)"'"!=e.charAt(y)||p("'")?g():c=!1;else switch(e.charAt(y)){case"d":u=m("d");break;case"D":f("D",s,n);break;case"o":d=m("o");break;case"m":l=m("m");break;case"M":l=f("M",r,o);break;case"y":h=m("y");break;case"@":var b=new Date(m("@"));h=b.getFullYear(),l=b.getMonth()+1,u=b.getDate();break;case"!":var b=new Date((m("!")-this._ticksTo1970)/1e4);h=b.getFullYear(),l=b.getMonth()+1,u=b.getDate();break;case"'":p("'")?g():c=!0;break;default:g()}if(t.length>v){var _=t.substr(v);if(!/^\s+/.test(_))throw"Extra/unparsed characters found in date: "+_}if(-1==h?h=(new Date).getFullYear():100>h&&(h+=(new Date).getFullYear()-(new Date).getFullYear()%100+(a>=h?0:-100)),d>-1)for(l=1,u=d;;){var k=this._getDaysInMonth(h,l-1);if(k>=u)break;l++,u-=k}var b=this._daylightSavingAdjust(new Date(h,l-1,u));if(b.getFullYear()!=h||b.getMonth()+1!=l||b.getDate()!=u)throw"Invalid date";return b},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var a=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,s=(i?i.dayNames:null)||this._defaults.dayNames,n=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,o=function(t){var i=e.length>c+1&&e.charAt(c+1)==t;return i&&c++,i},h=function(e,t,i){var a=""+t;if(o(e))for(;i>a.length;)a="0"+a;return a},l=function(e,t,i,a){return o(e)?a[t]:i[t]},u="",d=!1;if(t)for(var c=0;e.length>c;c++)if(d)"'"!=e.charAt(c)||o("'")?u+=e.charAt(c):d=!1;else switch(e.charAt(c)){case"d":u+=h("d",t.getDate(),2);break;case"D":u+=l("D",t.getDay(),a,s);break;case"o":u+=h("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":u+=h("m",t.getMonth()+1,2);break;case"M":u+=l("M",t.getMonth(),n,r);break;case"y":u+=o("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":u+=t.getTime();break;case"!":u+=1e4*t.getTime()+this._ticksTo1970;break;case"'":o("'")?u+="'":d=!0;break;default:u+=e.charAt(c)}return u},_possibleChars:function(e){for(var t="",i=!1,a=function(t){var i=e.length>s+1&&e.charAt(s+1)==t;return i&&s++,i},s=0;e.length>s;s++)if(i)"'"!=e.charAt(s)||a("'")?t+=e.charAt(s):i=!1;else switch(e.charAt(s)){case"d":case"m":case"y":case"@":t+="0123456789";break;case"D":case"M":return null;case"'":a("'")?t+="'":i=!0;break;default:t+=e.charAt(s)}return t},_get:function(e,t){return e.settings[t]!==undefined?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!=e.lastVal){var i,a,s=this._get(e,"dateFormat"),n=e.lastVal=e.input?e.input.val():null;i=a=this._getDefaultDate(e);var r=this._getFormatConfig(e);try{i=this.parseDate(s,n,r)||a}catch(o){this.log(o),n=t?"":n}e.selectedDay=i.getDate(),e.drawMonth=e.selectedMonth=i.getMonth(),e.drawYear=e.selectedYear=i.getFullYear(),e.currentDay=n?i.getDate():0,e.currentMonth=n?i.getMonth():0,e.currentYear=n?i.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(e,t,i){var a=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},s=function(t){try{return $.datepicker.parseDate($.datepicker._get(e,"dateFormat"),t,$.datepicker._getFormatConfig(e))}catch(i){}for(var a=(t.toLowerCase().match(/^c/)?$.datepicker._getDate(e):null)||new Date,s=a.getFullYear(),n=a.getMonth(),r=a.getDate(),o=/([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,h=o.exec(t);h;){switch(h[2]||"d"){case"d":case"D":r+=parseInt(h[1],10);break;case"w":case"W":r+=7*parseInt(h[1],10);break;case"m":case"M":n+=parseInt(h[1],10),r=Math.min(r,$.datepicker._getDaysInMonth(s,n));break;case"y":case"Y":s+=parseInt(h[1],10),r=Math.min(r,$.datepicker._getDaysInMonth(s,n))}h=o.exec(t)}return new Date(s,n,r)},n=null==t||""===t?i:"string"==typeof t?s(t):"number"==typeof t?isNaN(t)?i:a(t):new Date(t.getTime());return n=n&&"Invalid Date"==""+n?i:n,n&&(n.setHours(0),n.setMinutes(0),n.setSeconds(0),n.setMilliseconds(0)),this._daylightSavingAdjust(n)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var a=!t,s=e.selectedMonth,n=e.selectedYear,r=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=r.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=r.getMonth(),e.drawYear=e.selectedYear=e.currentYear=r.getFullYear(),s==e.selectedMonth&&n==e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(a?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""==e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(e){var t=this._get(e,"stepMonths"),i="#"+e.id.replace(/\\\\/g,"\\");e.dpDiv.find("[data-handler]").map(function(){var e={prev:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(i,-t,"M")},next:function(){window["DP_jQuery_"+dpuuid].datepicker._adjustDate(i,+t,"M")},hide:function(){window["DP_jQuery_"+dpuuid].datepicker._hideDatepicker()},today:function(){window["DP_jQuery_"+dpuuid].datepicker._gotoToday(i)},selectDay:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectDay(i,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(i,this,"M"),!1},selectYear:function(){return window["DP_jQuery_"+dpuuid].datepicker._selectMonthYear(i,this,"Y"),!1}};$(this).bind(this.getAttribute("data-event"),e[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t=new Date;t=this._daylightSavingAdjust(new Date(t.getFullYear(),t.getMonth(),t.getDate()));var i=this._get(e,"isRTL"),a=this._get(e,"showButtonPanel"),s=this._get(e,"hideIfNoPrevNext"),n=this._get(e,"navigationAsDateFormat"),r=this._getNumberOfMonths(e),o=this._get(e,"showCurrentAtPos"),h=this._get(e,"stepMonths"),l=1!=r[0]||1!=r[1],u=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),d=this._getMinMaxDate(e,"min"),c=this._getMinMaxDate(e,"max"),p=e.drawMonth-o,m=e.drawYear;if(0>p&&(p+=12,m--),c){var f=this._daylightSavingAdjust(new Date(c.getFullYear(),c.getMonth()-r[0]*r[1]+1,c.getDate()));for(f=d&&d>f?d:f;this._daylightSavingAdjust(new Date(m,p,1))>f;)p--,0>p&&(p=11,m--)}e.drawMonth=p,e.drawYear=m;var g=this._get(e,"prevText");g=n?this.formatDate(g,this._daylightSavingAdjust(new Date(m,p-h,1)),this._getFormatConfig(e)):g;var v=this._canAdjustMonth(e,-1,m,p)?'<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="'+g+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"e":"w")+'">'+g+"</span></a>":s?"":'<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="'+g+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"e":"w")+'">'+g+"</span></a>",y=this._get(e,"nextText");y=n?this.formatDate(y,this._daylightSavingAdjust(new Date(m,p+h,1)),this._getFormatConfig(e)):y;var b=this._canAdjustMonth(e,1,m,p)?'<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"w":"e")+'">'+y+"</span></a>":s?"":'<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="'+y+'"><span class="ui-icon ui-icon-circle-triangle-'+(i?"w":"e")+'">'+y+"</span></a>",_=this._get(e,"currentText"),k=this._get(e,"gotoCurrent")&&e.currentDay?u:t;_=n?this.formatDate(_,k,this._getFormatConfig(e)):_;var x=e.inline?"":'<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">'+this._get(e,"closeText")+"</button>",D=a?'<div class="ui-datepicker-buttonpane ui-widget-content">'+(i?x:"")+(this._isInRange(e,k)?'<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">'+_+"</button>":"")+(i?"":x)+"</div>":"",w=parseInt(this._get(e,"firstDay"),10);w=isNaN(w)?0:w;var T=this._get(e,"showWeek"),S=this._get(e,"dayNames");this._get(e,"dayNamesShort");var M=this._get(e,"dayNamesMin"),N=this._get(e,"monthNames"),C=this._get(e,"monthNamesShort"),A=this._get(e,"beforeShowDay"),P=this._get(e,"showOtherMonths"),I=this._get(e,"selectOtherMonths");this._get(e,"calculateWeek")||this.iso8601Week;for(var F=this._getDefaultDate(e),j="",H=0;r[0]>H;H++){var E="";this.maxRows=4;for(var z=0;r[1]>z;z++){var L=this._daylightSavingAdjust(new Date(m,p,e.selectedDay)),O=" ui-corner-all",R="";if(l){if(R+='<div class="ui-datepicker-group',r[1]>1)switch(z){case 0:R+=" ui-datepicker-group-first",O=" ui-corner-"+(i?"right":"left");break;case r[1]-1:R+=" ui-datepicker-group-last",O=" ui-corner-"+(i?"left":"right");break;default:R+=" ui-datepicker-group-middle",O=""}R+='">'}R+='<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix'+O+'">'+(/all|left/.test(O)&&0==H?i?b:v:"")+(/all|right/.test(O)&&0==H?i?v:b:"")+this._generateMonthYearHeader(e,p,m,d,c,H>0||z>0,N,C)+'</div><table class="ui-datepicker-calendar"><thead>'+"<tr>";for(var W=T?'<th class="ui-datepicker-week-col">'+this._get(e,"weekHeader")+"</th>":"",Y=0;7>Y;Y++){var J=(Y+w)%7;W+="<th"+((Y+w+6)%7>=5?' class="ui-datepicker-week-end"':"")+">"+'<span title="'+S[J]+'">'+M[J]+"</span></th>"}R+=W+"</tr></thead><tbody>";var Q=this._getDaysInMonth(m,p);m==e.selectedYear&&p==e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,Q));var B=(this._getFirstDayOfMonth(m,p)-w+7)%7,K=Math.ceil((B+Q)/7),V=l?this.maxRows>K?this.maxRows:K:K;this.maxRows=V;for(var U=this._daylightSavingAdjust(new Date(m,p,1-B)),G=0;V>G;G++){R+="<tr>";for(var q=T?'<td class="ui-datepicker-week-col">'+this._get(e,"calculateWeek")(U)+"</td>":"",Y=0;7>Y;Y++){var X=A?A.apply(e.input?e.input[0]:null,[U]):[!0,""],Z=U.getMonth()!=p,et=Z&&!I||!X[0]||d&&d>U||c&&U>c;q+='<td class="'+((Y+w+6)%7>=5?" ui-datepicker-week-end":"")+(Z?" ui-datepicker-other-month":"")+(U.getTime()==L.getTime()&&p==e.selectedMonth&&e._keyEvent||F.getTime()==U.getTime()&&F.getTime()==L.getTime()?" "+this._dayOverClass:"")+(et?" "+this._unselectableClass+" ui-state-disabled":"")+(Z&&!P?"":" "+X[1]+(U.getTime()==u.getTime()?" "+this._currentClass:"")+(U.getTime()==t.getTime()?" ui-datepicker-today":""))+'"'+(Z&&!P||!X[2]?"":' title="'+X[2]+'"')+(et?"":' data-handler="selectDay" data-event="click" data-month="'+U.getMonth()+'" data-year="'+U.getFullYear()+'"')+">"+(Z&&!P?"&#xa0;":et?'<span class="ui-state-default">'+U.getDate()+"</span>":'<a class="ui-state-default'+(U.getTime()==t.getTime()?" ui-state-highlight":"")+(U.getTime()==u.getTime()?" ui-state-active":"")+(Z?" ui-priority-secondary":"")+'" href="#">'+U.getDate()+"</a>")+"</td>",U.setDate(U.getDate()+1),U=this._daylightSavingAdjust(U)
}R+=q+"</tr>"}p++,p>11&&(p=0,m++),R+="</tbody></table>"+(l?"</div>"+(r[0]>0&&z==r[1]-1?'<div class="ui-datepicker-row-break"></div>':""):""),E+=R}j+=E}return j+=D+($.ui.ie6&&!e.inline?'<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>':""),e._keyEvent=!1,j},_generateMonthYearHeader:function(e,t,i,a,s,n,r,o){var h=this._get(e,"changeMonth"),l=this._get(e,"changeYear"),u=this._get(e,"showMonthAfterYear"),d='<div class="ui-datepicker-title">',c="";if(n||!h)c+='<span class="ui-datepicker-month">'+r[t]+"</span>";else{var p=a&&a.getFullYear()==i,m=s&&s.getFullYear()==i;c+='<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';for(var f=0;12>f;f++)(!p||f>=a.getMonth())&&(!m||s.getMonth()>=f)&&(c+='<option value="'+f+'"'+(f==t?' selected="selected"':"")+">"+o[f]+"</option>");c+="</select>"}if(u||(d+=c+(!n&&h&&l?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",n||!l)d+='<span class="ui-datepicker-year">'+i+"</span>";else{var g=this._get(e,"yearRange").split(":"),v=(new Date).getFullYear(),y=function(e){var t=e.match(/c[+-].*/)?i+parseInt(e.substring(1),10):e.match(/[+-].*/)?v+parseInt(e,10):parseInt(e,10);return isNaN(t)?v:t},b=y(g[0]),_=Math.max(b,y(g[1]||""));for(b=a?Math.max(b,a.getFullYear()):b,_=s?Math.min(_,s.getFullYear()):_,e.yearshtml+='<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">';_>=b;b++)e.yearshtml+='<option value="'+b+'"'+(b==i?' selected="selected"':"")+">"+b+"</option>";e.yearshtml+="</select>",d+=e.yearshtml,e.yearshtml=null}return d+=this._get(e,"yearSuffix"),u&&(d+=(!n&&h&&l?"":"&#xa0;")+c),d+="</div>"},_adjustInstDate:function(e,t,i){var a=e.drawYear+("Y"==i?t:0),s=e.drawMonth+("M"==i?t:0),n=Math.min(e.selectedDay,this._getDaysInMonth(a,s))+("D"==i?t:0),r=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(a,s,n)));e.selectedDay=r.getDate(),e.drawMonth=e.selectedMonth=r.getMonth(),e.drawYear=e.selectedYear=r.getFullYear(),("M"==i||"Y"==i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),s=i&&i>t?i:t;return s=a&&s>a?a:s},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,a){var s=this._getNumberOfMonths(e),n=this._daylightSavingAdjust(new Date(i,a+(0>t?t:s[0]*s[1]),1));return 0>t&&n.setDate(this._getDaysInMonth(n.getFullYear(),n.getMonth())),this._isInRange(e,n)},_isInRange:function(e,t){var i=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max");return(!i||t.getTime()>=i.getTime())&&(!a||t.getTime()<=a.getTime())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,a){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var s=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(a,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),s,this._getFormatConfig(e))}}),$.fn.datepicker=function(e){if(!this.length)return this;$.datepicker.initialized||($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv),$.datepicker.initialized=!0);var t=Array.prototype.slice.call(arguments,1);return"string"!=typeof e||"isDisabled"!=e&&"getDate"!=e&&"widget"!=e?"option"==e&&2==arguments.length&&"string"==typeof arguments[1]?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t)):this.each(function(){"string"==typeof e?$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this].concat(t)):$.datepicker._attachDatepicker(this,e)}):$.datepicker["_"+e+"Datepicker"].apply($.datepicker,[this[0]].concat(t))},$.datepicker=new Datepicker,$.datepicker.initialized=!1,$.datepicker.uuid=(new Date).getTime(),$.datepicker.version="1.9.2",window["DP_jQuery_"+dpuuid]=$})(jQuery);

(function($) {
  $.fn.dateTimePicker = function(opts) {
    var thresholdDictionary = {
      'minute'  : 'Minutes before',
      'hour'    : 'Hours before',
      'day'     : 'Days before',
      'week'    : 'Weeks before'
    }

    var methods = {
      insertCalendar: function(element, dateTimePicker) {
        if (options.horizontalView) {
          //currently no horizontal view with alerts. so set hideAlertUI to true
          options.hideAlertUI = true;
          dateTimePicker.addClass('horiz-datetime-view');
        }

        methods.bindMethods(element, dateTimePicker);
        element.data('activeDateTimePicker', true);
        // Add datepicker
        dateTimePicker.find('.reminder-date-add').datepicker({
          onSelect: function(dateText, _datepickerInstance) {
            options.onSelectDate.apply(element, [dateText, _datepickerInstance, this]); // 'this' refers to associated input field (see docs for jQuery-UI datepicker)
          },
          defaultDate: (typeof(options.defaultDate) == 'function') ? options.defaultDate.apply(element) : options.defaultDate
        });

        // convenience method for getting to datepicker element
        dateTimePicker.dtElement = dateTimePicker.find('.reminder-date-add');

        if (options.hideTimeUI) {
          dateTimePicker.find('.reminder-time-set').hide();
        }
        if (options.hideCalendarUI) {
          dateTimePicker.find('.reminder-date-add').hide();
          dateTimePicker.addClass('date-time-only');
        }

        if (options.hideAlertUI) {
          dateTimePicker.find('.add-alert-container').hide();
          dateTimePicker.find('.alert-add').hide();
        } else {
          // Show UI if there are alerts set by default if (dateTimePicker.alerts.length > 0) 
          // Set default alerts
          var defaultAlerts;
          if (typeof(options.defaultAlerts) == 'function') {
            defaultAlerts = options.defaultAlerts.apply(element) || [];
          } 
          else if (typeof(options.defaultAlerts) == 'array') {
            defaultAlerts = options.defaultAlerts;
          }

          $.each(defaultAlerts, function(i, _alert) {
            dateTimePicker.setAlert(_alert.time, _alert.threshold, _alert.data);
          });

          // Show UI if there are alerts set by default
          if (dateTimePicker.alerts.length > 0) {
            dateTimePicker.find('.alert-trigger-container .slider').addClass('on');
            dateTimePicker.find('.alert-add').show();
          }
        }

        // Insert the calendar into the DOM
        if (typeof(options.insert) == 'function') {
          options.insert.apply(element, [dateTimePicker]);
        }
        else if (typeof(options.insert) == 'string') {
          $(options.insert).append(dateTimePicker);
        } 
        else {
          element.append(dateTimePicker);
        }

        // Pick alert threshold (e.g. minutes, hours, days, weeks)
        dateTimePicker.find('.alert-before ul li').click(function() {
          dateTimePicker.find('.alert-before .selected').replaceWith(
            $(this).find('a').clone().addClass('selected')
          );
        });

        // Set default time
        if (typeof(options.defaultTime) == 'function') {
          dateTimePicker.setTime(options.defaultTime.apply(element));
        }else{
          dateTimePicker.setTime(options.defaultTime);
        }

        // Set pointer
        dateTimePicker.find('.calendar-pointer, .outer-pointer, .inner-pointer').addClass(options.pointer.side);
        if (options.pointer.offset != 0) {
          var position = $(dateTimePicker).find('.calendar-pointer').position();

          if (options.pointer.side == 'top' || options.pointer.side == 'bottom') {
            $('.calendar-pointer').css({left: position.left + options.pointer.offset});
          }
          else if (options.pointer.side == 'left' || options.pointer.side == 'right') {
            $('.calendar-pointer').css({top: position.top + options.pointer.offset});
          }
        }
      },
      bindMethods: function(element, dateTimePicker) {
        dateTimePicker.getDateTime = methods.getDateTime.bind(dateTimePicker);
        dateTimePicker.getDateTimeString = methods.getDateTimeString.bind(dateTimePicker);
        dateTimePicker.getDate = methods.getDate.bind(dateTimePicker);
        dateTimePicker.getTime = methods.getTime.bind(dateTimePicker);
        dateTimePicker.getAlerts = methods.getAlerts.bind(dateTimePicker);

        dateTimePicker.setTime = methods.setTime.bind(dateTimePicker);
        dateTimePicker.setAlert = methods.setAlert.bind(dateTimePicker);
        dateTimePicker.removeAlert = methods.removeAlert.bind(dateTimePicker);
        dateTimePicker.destroy = methods.destroy.bind(dateTimePicker);
        dateTimePicker.thresholdDictionary = thresholdDictionary;
        dateTimePicker.alerts = [];
        dateTimePicker.element = element;

        dateTimePicker.bind('clickoutside', function(e) {
          //*****************************************************
          // datepicker removes some elements from the dom, and 
          // that triggers clickoutside. So we need to check for elements
          // that have been removed from the DOM.

          if ($(e.target).parents('.ui-datepicker-header').length > 0) return; // Cycling through months
          if ($(e.target).parents('.alert-record').length > 0) return;  // Removal of alerts
          //*****************************************************

          // Looks like we're clear to remove 
          if (options.onClickOutside == 'cancel') {
            options.onCancel.apply(element, [dateTimePicker]);
          } else if (options.onClickOutside == 'OK') {
            options.onOK.apply(element, [dateTimePicker]);
          }

          dateTimePicker.destroy();
        });

        dateTimePicker.find('.clock-down-arrow,.clock-up-arrow').click(function () {
          methods.changeTime.apply($(this), [dateTimePicker]);
        });

        // Cancel button
        dateTimePicker.find('.cancel').click(function() {
          options.onCancel.apply(element, [dateTimePicker]);
          dateTimePicker.destroy();
        });

        // OK button
        dateTimePicker.find('.ok').click(function() {
          options.onOK.apply(element, [dateTimePicker]);
          dateTimePicker.destroy();
        });

        // Toggle alerts callback
        dateTimePicker.find('.alert-trigger-container').click(function(e) {
          var slider = $(this).find('.slider');
          slider.toggleClass("on");

          if(slider.hasClass("on")) {
            dateTimePicker.find('.alert-add').show();
          } else {
            // Destroy all alerts if use decides to hide UI
            dateTimePicker.find('.alert-add').hide();

            // callback for onRemoveAlert
            $.each($(dateTimePicker.alerts), function(i, _alert) {
              dateTimePicker.removeAlert($(_alert['recordElement']));
            });
          }
        });

        // Create alert callback
        dateTimePicker.find('.btn-add-alert').click(function(){
          var alertTime = dateTimePicker.find('.add-reminder-time-input input').val();
          var alertThreshold = dateTimePicker.find('.alert-before .selected').data('threshold');
          dateTimePicker.setAlert(alertTime, alertThreshold);
        });
      },
      setAlert: function(alertTime, alertThreshold, _data) {
        var alertRecord = $("<div class='alert-record'><span class='alert-time'>" + alertTime + "</span> <span data-threshold-value='"+alertThreshold+"' class='alert-threshold'>" + (this.thresholdDictionary[alertThreshold] || alertThreshold) + "</span></div>");
        var cancelAlert = $("<span class='cancel'>X</span>");

        var dateTimePicker = this;
        cancelAlert.click(function() {
          dateTimePicker.removeAlert($(this).closest('.alert-record'));
        });

        alertRecord.append(cancelAlert);
        dateTimePicker.find('.scheduled-alerts').append(alertRecord);

        var alertObject = methods.buildAlertObject(alertRecord);
        dateTimePicker.alerts.push(alertObject);

        // Custom data members for alert (can be set using defaultAlerts option)
        if (_data) {
          $.each(_data, function(attr, value) {
            alertRecord.attr("data-"+attr, value);
            alertRecord.data(attr, value);
          });

          alertObject.data = _data;
        }

        options.onSetAlert.apply(alertRecord, [alertObject]);

        return alertObject;
      },
      removeAlert: function(alertDOMObject) {
        // Note: Have to use [0] to get DOM element out of jQuery object (http://stackoverflow.com/questions/6325671/jquery-inarray-locating-html-element)
        var arrayPosition = $.inArray(alertDOMObject[0], alertDOMObject.parent('.scheduled-alerts').children('.alert-record')); 

        options.onRemoveAlert.apply(this.alerts[arrayPosition]['recordElement'], [this.alerts[arrayPosition]]);

        alertDOMObject.remove(); // remove it from DOM
        this.alerts.splice(arrayPosition, 1); // Remove it from alerts array
      },
      buildAlertObject: function(alertRecord) {
        var alertTime = parseInt($(alertRecord).find('.alert-time').html());
        var alertThreshold = $(alertRecord).find('.alert-threshold').data('threshold-value');
        return {time: alertTime, threshold: alertThreshold, recordElement: alertRecord};
      },
      destroy: function() {
        this.element.data('activeDateTimePicker', false);
        this.remove();
      },
      defaultTime: function() {
        var today=new Date();
        var hour = today.getHours() + 1 > 24 ? 0 : today.getHours() + 1
        return methods.toTimeObject(hour, 0);
      },
      toTimeObject: function(hour, minute, ampm) {
        var m1,m2;
        hour = parseInt(hour);
        minute = parseInt(minute);

        if (hour >= 12) {
          if (hour != 12) hour = hour - 12;
          if (!ampm) ampm = 'pm';
        } 
        else if (hour <= 11) {
          if (hour == 0) hour = 1;
          if (!ampm) ampm = 'am';
        }

        if (minute > 10) {
          m1 = parseInt((""+minute)[0]);
          m2 = parseInt((""+minute)[1]);
        } else {
          m1 = 0;
          m2 = minute;
        }

        return { "hour" : hour, 
                 "minuteOne" : m1, 
                 "minuteTwo" : m2,
                 "ampm" : ampm };
      },
      setTime: function(timeObject) {
        if (!this.time) this.time = methods.defaultTime();
        $.extend(this.time, timeObject);

        this.find('.clock-hour-one .clock-value').html(this.time['hour']);
        this.find('.clock-minute-one .clock-value').html(this.time['minuteOne']);
        this.find('.clock-minute-two .clock-value').html(this.time['minuteTwo']);
        this.find('.clock-ampm .clock-value').html(this.time['ampm']);
      },
      changeTime: function(dateTimePicker) {
        var value = parseInt($(this).siblings('.clock-value').html());
        var min = parseInt($(this).closest('[data-min]').data('min') || '0');
        var max = parseInt($(this).closest('[data-max]').data('max') || '0');
        var _type = $(this).closest('[data-clock-value]').data('clock-value');
        var next;

        if (_type == 'ampm') {
          next = ($(this).siblings('.clock-value').html() == 'am' ? 'pm' : 'am');
        } else {
          if ($(this).hasClass('clock-up-arrow')) {
            next = ((value + 1) > max) ? min : value + 1;
          } else {
            next = ((value - 1) < min) ? max : value - 1;
          }
        }

        dateTimePicker.time[_type] = next;
        dateTimePicker.setTime();
      },
      getDateTime: function() {
        var date = this.dtElement.datepicker('getDate');
        var time = this.time;
        var minute = parseInt(time.minuteOne + "" + time.minuteTwo);
        var hour = parseInt(time.hour);

        if (hour < 12 && time.ampm == 'pm'){
          hour = hour + 12;
        }
        else if (hour == 12 && time.ampm == 'am') {
          hour = 0;
        }

        date.setHours(hour);
        date.setMinutes(minute);
        return date;
      },
      getDateTimeString: function() {
        var d = this.dtElement.datepicker('getDate');
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear() + " " + this.time.hour + ":" + this.time.minuteOne + this.time.minuteTwo + " " + this.time.ampm;
      },
      getDate: function() {
        var d = this.dtElement.datepicker('getDate');
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
      },
      getTime: function() {
        return this.time;
      },
      getAlerts: function() {
        return this.alerts;
      }
    };

    var cal = '<div class="calendar-main-container"><div class="calendar-pointer"><div class="pointer outer-pointer"></div><div class="pointer inner-pointer"></div></div><div class="calender-container"> <div class="reminder-date-add"> </div> <ul class="reminder-time-set"> <li class="clock-hour-one" data-min="1" data-max="12" data-clock-value="hour"> <div class="clock-up-arrow"></div> <div class="clock-value">12</div> <div class="clock-down-arrow"></div> </li> <li class="clock-operator">:</li> <li class="clock-minute-one" data-max="5" data-clock-value="minuteOne"> <div class="clock-up-arrow"></div> <div class="clock-value">0</div> <div class="clock-down-arrow"></div> </li> <li class="clock-minute-two" data-max="9" data-clock-value="minuteTwo"> <div class="clock-up-arrow"></div> <div class="clock-value">0</div> <div class="clock-down-arrow"></div> </li> <li class="clock-ampm" data-clock-value="ampm"> <div class="clock-up-arrow"></div> <div class="clock-value">pm</div> <div class="clock-down-arrow"></div> </li> </ul> <div class="add-alert-container"> <div class="alerts-label">Alerts</div> <div class="alert-trigger-container"> <div class="alert-trigger"> <div class="slider off"></div> </div> <div class="trigger-labels"> <span class="pull-left">OFF</span> <span class="pull-right">ON</span> <br style="clear:both;"> </div> </div> <br style="clear:both;"> <div class="scheduled-alerts"></div> </div> <div class="alert-add"> <div class="a-label">Alerts</div> <div class="alert-settings"> <ul> <li class="add-reminder-time-input"><input type="text" value="5"></li> <li class="alert-before"> <a href="#" class="selected" data-format="M" title="Min" data-threshold="minute"><span class="alert-when">Minutes</span> <span class="before-label">before</span></a> <ul><li><a href="#" data-format="M" title="Minutes" data-threshold="minute"><span class="alert-when">Minutes</span> <span class="before-label">before</span></a></li><li><a href="#" title="Hours" data-format="H" data-threshold="hour"><span class="alert-when">Hours</span> <span class="alert-when">before</span></a></li> <li><a href="#" title="Days" data-format="D" data-threshold="day"><span class="alert-when">Days</span> <span class="before-label">before</span></a></li> <li><a href="#" title="Weeks" data-format="W" data-threshold="week"><span class="alert-when">Weeks</span> <span class="before-label">before</span></a></li> </ul> </li> <li class="btn-add-alert">+</li> <br style="clear:both;"> </ul> </div> </div> </div><div class="actions"><span class="cancel">Cancel</span><span class="ok">OK</span></div></div>';

    var options = $.extend(true, {
      onClickOutside: 'OK', // 'OK' or 'cancel'
      onSelectDate: $.noop, // (optional) When user clicks on a date. Passes dateText, datepicker instance, and associate input field as arguments.
      onSetAlert: $.noop, // (optional) passes added alert as argument
      onRemoveAlert: $.noop, // (optional) passes removed alert and alert instance as argument
      onCancel: $.noop,
      onOK: $.noop,
      defaultDate: null,
      defaultTime: null, // (optional) {hour: 12, minuteOne: 0, minuteTwo: 5, ampm: 'pm'} OR function that returns object
      defaultAlerts: $.noop, // (optional) [{time: 5, threshold: 'Mins', data : {'alert-id' : 1}}, {time: 10, threshold: 'Days'}]
      insert: null, // (optional) css id or function where you want to add the widget
      hideAlertUI: null,
      hideTimeUI: null,
      hideCalendarUI: null,
      horizontalView: null, // (optional) True if you want date and time to have a horizontal view. currently does not work with alerts. will default to hideAlertUI to true
      pointer: {
        side: 'top', //top, bottom, left, right
        offset: 0
      }
    }, opts);

    return $(document).on('click', this.selector, function(e) {
      if (!$(this).data('activeDateTimePicker')) {
        methods.insertCalendar($(this), $(cal));
      }

      e.stopPropagation();
    });
  }
})(jQuery);

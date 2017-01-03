define(["jquery","moment","lodash","websockets/binary_websockets","common/rivetsExtra","text!navigation/navigation.html","css!navigation/navigation.css","common/util"],function(a,b,c,d,e,f){"use strict";function g(){a("#nav-menu li > ul li").each(function(){var b=a(this);b.hasClass("update-list-item-handlers")||(b.addClass("update-list-item-handlers"),b.on("click",function(){var b=a(this),c=b.find("ul").length>0;c||b.parent("ul").hasClass("nav-closed")||b.parent("ul").not("#nav-menu").toggleClass("nav-closed")}))}),a("#nav-menu.nav-normal-menu li").each(function(){a(this).on("mouseover",function(){a(this).find("ul.nav-closed").each(function(){a(this).removeClass("nav-closed")})})})}function h(e){function f(a){if(!q)return void d.send({payout_currencies:1}).then(function(b){q=b.payout_currencies[0],local_storage.set("currency",q),setTimeout(function(){f(a)},0)})["catch"](function(a){});var b="0";b=a.authorize?a.authorize.balance:a.balance?a.balance.balance:"0",p.text(formatPrice(b,q)).fadeIn()}var g=e.find(".login"),h=e.find(".account").hide(),i=h.find("li.visible-on-real-accounts-only").hide(),k=h.find("li.upgrade-account").hide(),l=e.find("span.time"),m=e.find(".login button"),n=e.find(".account .logout"),o=e.find(".account span.login-id"),p=e.find(".account span.balance").fadeOut(),q="";local_storage.get("oauth")&&g.hide(),d.events.on("balance",f),d.events.on("logout",function(){a(".webtrader-dialog[data-authorized=true]").dialog("close").dialog("destroy").remove(),n.removeAttr("disabled"),h.fadeOut(),g.fadeIn(),o.fadeOut(),p.fadeOut(),q="",local_storage.remove("currency")}),d.events.on("login",function(b){a(".webtrader-dialog[data-authorized=true]").dialog("close").dialog("destroy").remove(),g.fadeOut(),h.fadeIn(),f(b),o.text("Account "+b.authorize.loginid).fadeIn();var e=local_storage.get("oauth")||[],l=0===b.authorize.is_virtual;l?i.show():i.hide(),j().then(function(b){{var d=l&&"upgrade-mf"===b,e=!l&&"upgrade-mlt"===b,f=Cookies.loginids();c.some(f,{is_real:!0}),c.some(f,{is_disabled:!0})}c.some(f,{is_disabled:!0})&&a.growl.error({fixed:!0,message:"<a href='https://www.champion-fx.com/en/contactus' target='_blank'>"+"Your account is locked, please contact customer support for more info.".i18n()+"</a>"});var g=function(a,b){a?b.show():b.hide()};g(!d,k.find(".upgrade-to-real-account-span")),g(d,k.find(".open-financial-account-span")),g(e||d,k),g(e||d,k.find("a.real-account"))}),a(".account li.info").remove(),e.forEach(function(c){if(c.id!==b.authorize.loginid){var e=a('<a href="#"></a>').html('<span class="ui-icon ui-icon-login"></span>'+c.id),f=a("<li/>").append(e).addClass("info");f.data(c),f.click(function(){var b=a(this).data();a(".account li.info").remove(),d.switch_account(b.id)["catch"](function(b){a.growl.error({message:b.message})})}),f.insertBefore(n.parent())}})}),m.on("click",function(){m.attr("disabled","disabled"),require(["oauth/login"],function(a){m.removeAttr("disabled"),a.init()})}),n.on("click",function(){d.invalidate(),n.attr("disabled","disabled")}),a(".login").on("login-error",function(){g.fadeIn()}),l.text(b.utc().format("YYYY-MM-DD HH:mm")+" GMT"),setInterval(function(){l.text(b.utc().format("YYYY-MM-DD HH:mm")+" GMT")},15e3)}function i(a){a=a.find("#topbar").addBack("#topbar");var b={lang:{value:"en",name:"English"},confirm:{visible:!1},languages:[{value:"en",name:"English"},{value:"ar",name:"Arabic"},{value:"de",name:"Deutsch"},{value:"es",name:"Español"},{value:"fr",name:"Français"},{value:"id",name:"Bahasa Indonesia"},{value:"it",name:"Italiano"},{value:"pl",name:"Polish"},{value:"pt",name:"Português"},{value:"ru",name:"Русский"},{value:"vi",name:"Vietnamese"},{value:"zh_cn",name:"简体中文"},{value:"zh_tw",name:"繁體中文"}]};b.onclick=function(a){var d=c.find(b.languages,{value:a});d.value!=b.lang.value&&(local_storage.set("i18n",{value:d.value}),window.location.reload())};var f=(local_storage.get("i18n")||{value:"en"}).value;b.lang=c.find(b.languages,{value:f}),e.bind(a[0],b),d.cached.send({website_status:1}).then(function(a){var d=(a.website_status||{}).supported_languages||[];d=c.map(d,function(a){return{value:a.toLowerCase()}});var e=c.intersectionBy(b.languages,d,"value")||[];b.languages.length=0,e.forEach(function(a){b.languages.push(a)})})["catch"](console.error)}function j(){return d.cached.send({landing_company:Cookies.residence()}).then(function(a){var b=a.landing_company.financial_company,d=a.landing_company.gaming_company,e=Cookies.loginids();return d&&b&&"maltainvest"===b.shortcode?c.some(e,{is_mlt:!0})&&c.some(e,{is_mf:!0})?"do-nothing":c.some(e,{is_mlt:!0})?"upgrade-mf":"upgrade-mlt":b&&"maltainvest"===b.shortcode&&!d?c.some(e,{is_mf:!0})?"do-nothing":"upgrade-mf":c.some(e,{is_mlt:!0})||c.some(e,{is_mx:!0})||c.some(e,{is_cr:!0})?"do-nothing":"upgrade-mlt"})}return{init:function(b){var c=a(f).i18n();a("body").prepend(c),h(c),i(c),require(["themes/themes"]),g(),b&&b(a("#nav-menu")),is_beta()&&c.find("a.config").closest("li").show()},getLandingCompany:j,updateDropdownToggles:g}});
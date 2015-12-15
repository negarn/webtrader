define(["jquery","navigation/navigation","common/util"],function(a,b){"use strict";function c(b,d,e){d.forEach(function(d){var f=d.submarkets||d.instruments,g="<span class='nav-submenu-caret'></span>",h=f?d.display_name+g:d.display_name,i=a("<a href='#'>"+h+"</a>");f&&i.addClass("nav-dropdown-toggle");var j=a("<li>").append(i);if(f||j.data("symbol",d.symbol).data("delay_amount",d.delay_amount),j.appendTo(b),f){var k=a("<ul>");k.appendTo(j),c(k,d.submarkets||d.instruments,e)}else e&&i.click(function(){var b=a(this).parent();e(b)})})}return{extractChartableMarkets:function(a){return this.extractFilteredMarkets(a,{filter:function(a){return"chartonly"!==a.feed_license}})||[]},extractFilteredMarkets:function(a,b){var c=a.trading_times.markets.map(function(a){var c={name:a.name,display_name:a.name};return c.submarkets=a.submarkets.map(function(a){var c={name:a.name,display_name:a.name},d=a.symbols;return b&&b.filter&&(d=d.filter(b.filter)),c.instruments=d.map(function(a){return{symbol:a.symbol,display_name:a.name,delay_amount:a.delay_amount||0,events:a.events,times:a.times,settlement:a.settlement,feed_license:a.feed_license||"realtime"}}),c}).filter(function(a){return a.instruments.length>0}),c});return c},sortMenu:function(b){var c=sortAlphaNum("display_name");a.isArray(b)&&(b.sort(c),b.forEach(function(b){a.isArray(b.submarkets)&&(b.submarkets.sort(c),b.submarkets.forEach(function(b){a.isArray(b.instruments)&&b.instruments.sort(c)}))}))},refreshMenu:function(a,d,e){c(a,d,e),b.updateDropdownToggles()}}});
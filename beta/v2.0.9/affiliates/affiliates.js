define(["jquery","websockets/binary_websockets","common/menu","common/util"],function(a,b,c){return{init:function(){require(["text!charts/chartWindow.html"],function(d){var e="webtrader-dialog-1",f=getParameterByName("timePeriod")||"1d",g="1t"==f?"line":"candlestick",h=a(d);h.attr("id",e).find("div.chartSubContainerHeader").attr("id",e+"_header").end().find("div.chartSubContainer").attr("id",e+"_chart").end(),require(["charts/chartOptions"],function(a){a.init(e,f,g)}),b.cached.send({trading_times:(new Date).toISOString().slice(0,10)}).then(function(b){if(b=c.extractChartableMarkets(b),!a.isEmptyObject(b)){var d=getParameterByName("instrument"),i=getObjects(b,"symbol",d);if(i&&i.length>0&&i[0].symbol&&i[0].display_name)if(validateParameters()){var d=i[0].symbol,j=i[0].display_name,k=i[0].delay_amount||0,l=(getParameterByName("startTime"),getParameterByName("endTime")),m=getParameterByName("entrySpotTime"),n=getParameterByName("barrierPrice");l&&m&&n?k>0?a.growl.error({message:"Delayed instruments cannot be rendered!"}):"1T"!==f.toUpperCase()?a.growl.error({message:"Only tick charts are supported in this route!"}):require(["charts/charts"],function(a){a.drawChart("#"+e+"_chart",{instrumentCode:d,instrumentName:j,timePeriod:f,type:g,delayAmount:k})}):require(["charts/charts"],function(a){a.drawChart("#"+e+"_chart",{instrumentCode:d,instrumentName:j,timePeriod:f,type:g,delayAmount:k})})}else require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Invalid parameter(s)!"})}),h.find("div.chartSubContainerHeader").hide();else require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Instrument Code Unknown/Unavailable!"})}),h.find("div.chartSubContainerHeader").hide()}})["catch"](function(){require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Error getting market information!"})}),h.find("div.chartSubContainerHeader").hide()}),a(".mainContainer").append(h),resizeElement("#"+e),resizeElement("#"+e+" .chartSubContainer"),a(window).resize(function(){resizeElement("#"+e),resizeElement("#"+e+" .chartSubContainer")})})}}});
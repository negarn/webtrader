define(["indicator_base","highstock"],function(a){function b(a,b,c){var d=0;return d=a.isOHLCorCandlestick(this.options.type)?((b[c][2]||b[c].high)+(b[c][3]||b[c].low)+(b[c][4]||b[c].close))/3:b[c].y?b[c].y:b[c][1]}var c={},d={};return{init:function(){!function(a,e,f){function g(a,e){{var g=this;g.chart}for(var h in d)if(d[h]&&d[h].options&&d[h].options.data&&d[h].options.data.length>0&&c[h].parentSeriesID==g.options.id){var i=g.options.data,j=(d[h].options.data,c[h].period,f.findIndexInDataForTime(i,a));if(j>=1){var k=b.call(this,f,i,j),l=f.toFixed(k,4);e?d[h].data[j].update({y:l}):d[h].addPoint([i[j].x||i[j][0],l],!0,!0,!1)}}}a&&!a.Series.prototype.addTYPPRICE&&(a.Series.prototype.addTYPPRICE=function(a){var g=this.options.id;a=e.extend({stroke:"red",strokeWidth:2,dashStyle:"line",parentSeriesID:g},a);var h="_"+(new Date).getTime(),i=this.options.data||[];if(i&&i.length>0){for(var j=[],k=0;k<i.length;k++){var l=b.call(this,f,i,k);j.push([i[k].x||i[k][0],f.toFixed(l,4)])}var m=this.chart;c[h]=a;var n=this;d[h]=m.addSeries({id:h,name:"TYPPRICE",data:j,type:"line",dataGrouping:n.options.dataGrouping,opposite:n.options.opposite,color:a.stroke,lineWidth:a.strokeWidth,dashStyle:a.dashStyle,compare:n.options.compare},!1,!1),e(d[h]).data({onChartIndicator:!0,indicatorID:"typprice",isIndicator:!0,parentSeriesID:a.parentSeriesID}),m.redraw()}return h},a.Series.prototype.removeTYPPRICE=function(a){var b=this.chart;c[a]=null,b.get(a).remove(),d[a]=null},a.Series.prototype.preRemovalCheckTYPPRICE=function(a){return{isMainIndicator:!0,isValidUniqueID:null!=c[a]}},a.wrap(a.Series.prototype,"addPoint",function(a,b,d,e,h){a.call(this,b,d,e,h),f.checkCurrentSeriesHasIndicator(c,this.options.id)&&g.call(this,b[0])}),a.wrap(a.Point.prototype,"update",function(a,b,d,e){a.call(this,b,d,e),f.checkCurrentSeriesHasIndicator(c,this.series.options.id)&&g.call(this.series,this.x,!0)}))}(Highcharts,jQuery,a)}}});
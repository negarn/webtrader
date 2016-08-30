define(["jquery","common/rivetsExtra","jquery-ui","color-picker"],function(a,b){function c(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function d(d,e){require(["css!charts/indicators/sar/sar.css"]),require(["text!charts/indicators/sar/sar.html","text!charts/indicators/indicators.json"],function(f,g){var h="#cd0a0a";f=a(f),f.appendTo("body"),g=JSON.parse(g);var i=g.sar,j={title:i.long_display_name,description:i.description};b.bind(f[0],j),f.find("input[type='button']").button(),f.find("#sar_stroke").colorpicker({part:{map:{size:128},bar:{size:128}},select:function(b,c){a("#sar_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a("#sar_stroke").css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}}),f.dialog({autoOpen:!1,resizable:!1,modal:!0,width:280,my:"center",at:"center",of:window,buttons:[{text:"OK",click:function(){var b=!0;if(a(".sar_input_width_for_period").each(function(){return a.isNumeric(a(this).val())?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numeric value allowed!"})}),$elem.val($elem.prop("defaultValue")),b=!1)}),b){var d={acceleration:parseFloat(f.find("#sar_acceleration").val()),maximum:parseFloat(f.find("#sar_maximum").val()),stroke:h,strokeWidth:parseInt(f.find("#sar_strokeWidth").val()),dashStyle:"line"};a(a(".sar").data("refererChartID")).highcharts().series[0].addIndicator("sar",d),c.call(f)}}},{text:"Cancel",click:function(){c.call(this)}}]}),f.find("select").selectmenu({width:140}),a.isFunction(e)&&e(d)})}return{open:function(b){return 0==a(".sar").length?void d(b,this.open):void a(".sar").data("refererChartID",b).dialog("open")}}});
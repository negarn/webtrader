define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close")}function c(c,e){require(["css!charts/indicators/hma/hma.css"]),require(["text!charts/indicators/hma/hma.html","text!charts/indicators/indicators.json"],function(f,g){var h="#cd0a0a";f=a(f),f.appendTo("body"),g=JSON.parse(g);var i=g.hma;f.attr("title",i.long_display_name),f.find(".hma-description").html(i.description),f.find("#hma_stroke_color").each(function(){a(this).colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),h="#"+c.formatted},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),h="#"+c.formatted}})});var j="Solid";a("#hma_dash_style").ddslick({imagePosition:"left",width:150,background:"white",onSelected:function(b){a("#hma_dash_style .dd-selected-image").css("max-width","115px"),j=b.selectedData.value}}),a("#hma_dash_style .dd-option-image").css("max-width","115px"),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"hma-ui-dialog",buttons:[{text:"OK",click:function(){var c=a(".hma_input_width_for_period");if(!_.isInteger(_.toNumber(c.val()))||!_.inRange(c.val(),parseInt(c.attr("min")),parseInt(c.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+c.attr("min")+" to "+c.attr("max")+" is allowed for "+c.closest("tr").find("td:first").text()+"!"})}),void c.val(c.prop("defaultValue"));var e={period:parseInt(a("#hma_period").val()),maType:a("#hma_ma_type").val(),stroke:h,strokeWidth:parseInt(a("#hma_stroke_width").val()),dashStyle:j,appliedTo:parseInt(f.find("#hma_appliedTo").val())};d&&d(),a(a(".hma").data("refererChartID")).highcharts().series[0].addIndicator("hma",e),b.call(f)}},{text:"Cancel",click:function(){b.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),a.isFunction(e)&&e(c)})}var d=null;return{open:function(b,e){var f=function(){d=e,a(".hma").data("refererChartID",b).dialog("open")};0==a(".hma").length?c(b,this.open):f()}}});
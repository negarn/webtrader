define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close")}function c(c,e){require(["css!charts/indicators/t3/t3.css"]),require(["text!charts/indicators/t3/t3.html","text!charts/indicators/indicators.json"],function(f,g){f=a(f),f.appendTo("body"),g=JSON.parse(g);var h=g.t3;f.attr("title",h.long_display_name),f.find(".t3-description").html(h.description),f.find("#t3_stroke").each(function(){a(this).colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})});var i="Solid";a("#t3_dash_style").ddslick({imagePosition:"left",width:150,background:"white",onSelected:function(b){a("#t3_dash_style .dd-selected-image").css("max-width","115px"),i=b.selectedData.value}}),a("#t3_dash_style .dd-option-image").css("max-width","115px"),f.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"t3-ui-dialog",buttons:[{text:"OK",click:function(){var c=a("#t3_period");if(!_.isInteger(_.toNumber(c.val()))||!_.inRange(c.val(),parseInt(c.attr("min")),parseInt(c.attr("max"))+1))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+c.attr("min")+" to "+c.attr("max")+" is allowed for "+c.closest("tr").find("td:first").text()+"!"})}),void c.val(c.prop("defaultValue"));var e=a("#t3_volume_factor");if(!_.inRange(e.val(),parseInt(e.attr("min")),parseInt(e.attr("max"))+.01))return require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+e.attr("min")+" to "+e.attr("max")+" is allowed for "+e.closest("tr").find("td:first").text()+"!"})}),void e.val(e.prop("defaultValue"));var g={period:parseInt(a("#t3_period").val()),vFactor:parseFloat(a("#t3_volume_factor").val()),stroke:a("#t3_stroke").css("background-color"),strokeWidth:parseInt(a("#t3_stroke_width").val()),dashStyle:i,appliedTo:parseInt(a("#t3_applied_to").val())};d&&d(),a(a(".t3").data("refererChartID")).highcharts().series[0].addIndicator("t3",g),b.call(f)}},{text:"Cancel",click:function(){b.call(this)}}]}),f.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),a.isFunction(e)&&e(c)})}var d=null;return{open:function(b,e){var f=function(){d=e,a(".t3").data("refererChartID",b).dialog("open")};0==a(".t3").length?c(b,this.open):f()}}});
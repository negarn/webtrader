define(["jquery","jquery-ui","color-picker","ddslick"],function(a){function b(){a(this).dialog("close"),a(this).find("*").removeClass("ui-state-error")}function c(c,d){var e=function(a,b,c,d){this.level=a,this.stroke=b,this.strokeWidth=c,this.dashStyle=d},f=[new e(30,"red",1,"Dash"),new e(70,"red",1,"Dash")];require(["text!charts/indicators/stochf/stochf.html","text!charts/indicators/indicators.json","css!charts/indicators/stochf/stochf.css"],function(e,g){e=a(e),e.appendTo("body"),g=JSON.parse(g);var h=g.stochf;e.attr("title",h.long_display_name),e.find(".stochf-description").html(h.description),e.find("input[type='button']").button(),e.find("#stochf_k_stroke,#stochf_d_stroke").each(function(){a(this).colorpicker({position:{at:"right+100 bottom",of:"element",collision:"fit"},part:{map:{size:128},bar:{size:128}},select:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)},ok:function(b,c){a(this).css({background:"#"+c.formatted}).val(""),a(this).data("color","#"+c.formatted)}})}),a("#stochf_k_stroke").css("background","#1c1010"),a("#stochf_d_stroke").css("background","#cd0a0a");var i="Solid";a("#stochf_dashStyle").ddslick({imagePosition:"left",width:148,background:"white",onSelected:function(b){a("#stochf_dashStyle .dd-selected-image").css("max-width","115px"),i=b.selectedData.value}}),a("#stochf_dashStyle .dd-option-image").css("max-width","115px");var j=e.find("#stochf_levels").DataTable({paging:!1,scrollY:100,autoWidth:!0,searching:!1,info:!1,columnDefs:[{className:"dt-center",targets:[0,1,2,3]}],aoColumnDefs:[{bSortable:!1,aTargets:[1,3]}]});a.each(f,function(b,c){a(j.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})}),e.find("#stochf_level_delete").click(function(){j.rows(".selected").indexes().length<=0?require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Select level(s) to delete!"})}):j.rows(".selected").remove().draw()}),e.find("#stochf_level_add").click(function(){require(["indicator_levels"],function(b){b.open(c,function(b){a.each(b,function(b,c){a(j.row.add([c.level,'<div style="background-color: '+c.stroke+';width:100%;height:20px;"></div>',c.strokeWidth,'<div style="width:50px;overflow:hidden;"><img src="images/dashstyle/'+c.dashStyle+'.svg" /></div>']).draw().node()).data("level",c).on("click",function(){a(this).toggleClass("selected")})})})})}),e.dialog({autoOpen:!1,resizable:!1,width:350,height:400,modal:!0,my:"center",at:"center",of:window,dialogClass:"stochf-ui-dialog",buttons:[{text:"OK",click:function(){var c=!0;if(a(".stochf_input_width_for_period").each(function(){var b=a(this);return _.isInteger(_.toNumber(b.val()))&&_.inRange(b.val(),parseInt(b.attr("min")),parseInt(b.attr("max"))+1)?void 0:(require(["jquery","jquery-growl"],function(a){a.growl.error({message:"Only numbers between "+b.attr("min")+" to "+b.attr("max")+" is allowed for "+b.closest("tr").find("td:first").text()+"!"})}),b.val(b.prop("defaultValue")),void(c=!1))}),c){var d=[];a.each(j.rows().nodes(),function(){var b=a(this).data("level");b&&d.push({color:b.stroke,dashStyle:b.dashStyle,width:b.strokeWidth,value:b.level,label:{text:b.level}})});var f={fastKPeriod:parseInt(a("#stochf_k_period").val()),fastDPeriod:parseInt(a("#stochf_d_period").val()),fastKMaType:a("#stochf_k_ma_type").val(),fastDMaType:a("#stochf_d_ma_type").val(),stroke:a("#stochf_k_stroke").css("background-color"),dStroke:a("#stochf_d_stroke").css("background-color"),strokeWidth:parseInt(a("#stochf_stroke_width").val()),dashStyle:i,appliedTo:parseInt(a("#stochf_applied_to").val()),levels:d};a(a(".stochf").data("refererChartID")).highcharts().series[0].addIndicator("stochf",f),b.call(e)}}},{text:"Cancel",click:function(){b.call(this)}}]}),e.find("select").each(function(b,c){a(c).selectmenu({width:150}).selectmenu("menuWidget").css("max-height","85px")}),"function"==typeof d&&d(c)})}var d=null;return{open:function(b,e){var f=function(){d=e,a(".stochf").data("refererChartID",b).dialog("open")};0==a(".stochf").length?c(b,this.open):f()}}});
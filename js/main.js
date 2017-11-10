$("#ttbar-myjd").hover(function() {
	console.log(this);
	$(this).addClass("hover");
	$.ajax({
		type: "get",
		url: "https://diviner.jd.com/diviner?lid=1&lim=5&ec=utf-8&uuid=15083204825022113429184&pin=&p=202001&sku=&ck=pin,ipLocation,atw,aview&callback=?",
		async: true,
		dataType: 'jsonp',
		success: function(data) {
			console.log(data)
			for(var i = 0; i < data.data.length; i++) {
				console.log(i);
				$("#ttbar-myjd .smc").append("<div class='item'><a href='' target='_blank' title=''><img src='' width='50' height='50' alt=''></a></div>")
				$("#ttbar-myjd .smc a")[i].href = '//item.jd.com/' + data.data[i].itemid + '.html';
				$("#ttbar-myjd .smc a")[i].title = data.data[i].t;
				$("#ttbar-myjd .smc a img")[i].src = "//img14.360buyimg.com/n5/" + data.data[i].img;
				if(i >= 3) {
					break;
				}
			}
		}
	});
}, function() {
	$(this).removeClass("hover");
	$("#ttbar-myjd .smc .item").remove()
});
//			ttbar-serv
$("#ttbar-serv").hover(function() {
	//				console.log(this);
	$(this).addClass("hover");
	$.ajax({
		type: "get",
		url: "https://dc.3.cn/client/get?&callback=?",
		async: true,
		dataType: 'jsonp',
		scriptCharset: 'gbk',
		success: function(data) {
			var str1 = '';
			var str2 = '';
			for(var i = 0; i < data.data.length; i++) {
				console.log(data.data[i].n)
				if(i < 8) {
					str1 += "<div class='item'><a href='" + data.data[i].u + "' target='_blank' data-true>" + data.data[i].n + "</a></div>";
				}
				if(i >= 8) {
					str2 += "<div class='item'><a href='" + data.data[i].u + "' target='_blank' data-true>" + data.data[i].n + "</a></div>";
				}
			}
			$("#ttbar-serv .dorpdown-layer .item-client").after(str1);
			$("#ttbar-serv .dorpdown-layer .item-business").after(str2);
		}
	});
}, function() {
	$(this).removeClass("hover");
	$("#ttbar-serv .dorpdown-layer .item").remove();
});
$("#ttbar-navs").hover(function() {
	$(this).addClass("hover");
	$.ajax({
		type: "get",
		url: "https://dc.3.cn/navigation/get?callback=?",
		async: true,
		dataType: 'jsonp',
		scriptCharset: 'gbk',
		success: function(data) {
			var str1 = '';
			for(var i = 0; i < data.data.length; i++) {
				var str2 = '';
				for(var j = 0; j < data.data[i].s.length; j++) {
					str2 += "<div class='item'><a href='" + data.data[i].s[j].u + "' target='_blank'>" + data.data[i].s[j].n + "</a></div>"
				}
				str1 += "<dl class='fore" + (i + 1) + "'><dt>" + data.data[i].n + "</dt><dd>" + str2 + "</dd></dl>";
			}
			str1 = "<div class='dd-spacer'></div>" + str1;
			console.log(str1);
			$("#ttbar-navs .dorpdown-layer").html(str1);
		}
	})
}, function() {
	$(this).removeClass("hover");
});

$("#ttbar-apps").hover(function() {
	$(this).addClass("hover");
}, function() {
	$(this).removeClass("hover");
});
$(function() {
	$.ajax({
		type: "get",
		url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00397625&callback=?",
		async: true,
		dataType: "jsonp",
		success: function(data) {
			//						console.log(data,data.DATA.adData[0].pictureUrl);
			$("#o-header").html("<a id='chaoshi_top_lk_28' class='chaoshi_top_lk grid_c1' href='" + data.DATA.adData[0].link + "' target='_blank' clstag='channel|keycount|3054|topBanner28_0' style='background: transparent;' title=''><img src='" + data.DATA.adData[0].pictureUrl + "' data-lazy-img='done' width='1190' height='80'><div class='chaoshi_top_close'></div></a>");
			data = "";
		}

	});
	$.ajax({
		type: "get",
		url: "json/province&city.json?callback=?",
		async: true,
		success: function(data) {
			var str1 = '';
			var str2 = '';
			var str3 = '';
			console.log();
			var prov = data[0].province;
			// <i class="iconfont"></i>
			//i 转换后的值 上面
			str1 = `<div class="dt cw-icon ui-areamini-text-wrap" style=""><i class="iconfont">&#xe604;</i><span class="ui-areamini-text" data-id="1" title="北京">北京</span></div><div class="dd dorpdown-layer"><div class="dd-spacer"></div><div class="ui-areamini-content-wrap"><div class="ui-areamini-content"></div></div></div>`;
			$("#ttbar-mycity").html(str1);
			//此处输出li下的框架
			str2 = `<div class="ui-areamini-content-list"><%=list%></div>`;
			// position下拉列表的省份信息
			for(var i in prov) {
				str3 += `<div class="item"><a data-id="${prov[i]}" href="javascript:void(0)">${i}</a></div>`
			}
			console.log(str2);
			console.log(str3);
			str2 = str2.replace(/<%=list%>/gi, str3);
			console.log(str2);
			$("#ttbar-mycity").find(".ui-areamini-content").html(str3);
			// 单个省份信息排列
		}
	});
});
$("#ttbar-mycity").hover(function() {
	$(this).addClass("hover");
	console.log($(this).children(".dt").children('.iconfont'));
	$(this).children(".dt").children('.iconfont').css({
		"transition": "all 0.5s",
		"transform": "rotate(-180deg)"
	});
	console.log('aa');
}, function() {
	$(this).removeClass("hover");
	$(this).children(".dt").children('.iconfont').css({
		"transition": "all 0.5s",
		"transform": "rotate(0deg)"
	});
})
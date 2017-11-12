var datena;

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
			$("#ttbar-navs .dorpdown-layer").html(str1);
		}
	})
}, function() {
	$(this).removeClass("hover");
});

$("#ttbar-apps").hover(function() {
	$(this).addClass("hover");
	//				<div class="dd dorpdown-layer"><div class="dd-spacer"></div><div class="dd-inner" id="ttbar-apps-main"></div></div>		
	var str1 = `<div class="dd dorpdown-layer"><div class="dd-spacer"></div><div class="dd-inner" id="ttbar-apps-main"></div></div>`;
	var str2 = '<div class="mobile_pop_item"> <div class="mobile_pop_qrcode mobile_pop_qrcode_1"><img src="//img10.360buyimg.com/da/jfs/t7525/251/1899038567/28110/d5764256/59a51bf6Nb8e478cc.png"></div> \<div class="mobile_pop_info"> \<h5 class="mobile_pop_tit"><a href="//app.jd.com/" target="_blank">&#25163;&#26426;&#20140;&#19996;</a></h5> \<p class="mobile_pop_value">&#x65B0;&#x4EBA;&#x4E13;&#x4EAB;&#x5927;&#x793C;&#x5305;</p> \<p class="mobile_pop_device"> \<a class="mobile_pop_device_lk mobile_pop_device_ios" href="https://itunes.apple.com/cn/app/id414245413" target="_blank">APP Store</a> \<a class="mobile_pop_device_lk mobile_pop_device_and" href="https://storage.jd.com/jdmobile/JDMALL-PC2.apk" target="_blank">&#x5B89;&#x5353;&#x5E02;&#x573A;</a> \<a class="mobile_pop_device_lk mobile_pop_device_pad" href="https://itunes.apple.com/cn/app/jing-dong-hd/id434374726" target="_blank">APP Store</a> \</p> \</div> \</div> \<div class="mobile_pop_item"> \<div class="mobile_pop_qrcode mobile_pop_qrcode_2"><img src="//img30.360buyimg.com/da/jfs/t3907/165/1380364192/12868/f47b703b/5874a54dNcec29924.jpg"></div> \<div class="mobile_pop_info"> \<h5 class="mobile_pop_tit">&#x5173;&#x6CE8;&#x4EAC;&#x4E1C;&#x5FAE;&#x4FE1;</h5> \<p class="mobile_pop_value">&#x5FAE;&#x4FE1;&#x626B;&#x4E00;&#x626B;&#x5173;&#x6CE8;<br>&#x65B0;&#x7C89;&#x6700;&#x9AD8;180&#x5143;<br>&#x60CA;&#x559C;&#x793C;&#x5305;</p> \</div> \</div> \<div class="mobile_pop_item"> \<div class="mobile_pop_qrcode mobile_pop_qrcode_3"><img src="//img13.360buyimg.com/da/jfs/t4018/193/1415357059/15408/876d5d6e/5874a555Ne8192324.jpg"></div> <div class="mobile_pop_info"> <h5 class="mobile_pop_tit"><a href="https://m.jr.jd.com/helppage/downApp/jrAppPromote.html" target="_blank">&#x4EAC;&#x4E1C;&#x91D1;&#x878D;&#x5BA2;&#x6237;&#x7AEF;</a></h5> <p class="mobile_pop_value">&#26032;&#20154;&#19987;&#20139;&#22823;&#31036;&#21253;</p> <p class="mobile_pop_device"> <a class="mobile_pop_device_lk mobile_pop_device_ios" href="https://itunes.apple.com/cn/app/jing-dong-jin-rong-hui-li/id895682747?mt=8" target="_blank">APP Store</a> <a class="mobile_pop_device_lk mobile_pop_device_and" href="http://211.151.9.66/downapp/jrapp_jr188.apk" target="_blank">&#x5B89;&#x5353;&#x5E02;&#x573A;</a> </p> </div> </div>';
	$(this).append(str1);
	$("#ttbar-apps-main").html(str2);
}, function() {
	$(this).find(".dorpdown-layer").remove();
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
			str2 = str2.replace(/<%=list%>/gi, str3);
			$("#ttbar-mycity").find(".ui-areamini-content").html(str3);
			// 单个省份信息排列
		}
	});
});
$(".logo_dropdown").hover(function() {
	$(this).find("#ttbar-mycity").addClass("hover");
}, function() {
	$(this).find("#ttbar-mycity").removeClass("hover");
});

$("#settleup-2014").hover(function() {
	$(this).addClass("hover");
	//	dorpdown-layer
	var str = `<div class="spacer"></div><div class="prompt"><div class="nogoods"><b></b>\u8d2d\u7269\u8f66\u4e2d\u8fd8\u6ca1\u6709\u5546\u54c1\uff0c\u8d76\u7d27\u9009\u8d2d\u5427\uff01</div></div>`;
	$(this).find('.dorpdown-layer').html(str);
}, function() {
	$(this).removeClass("hover");
})

$(function() {
	var str = `<div class="headerqrcode" id="J_headerqrcode" style="display: block;"><a href="javascript:;" class="headerqrcode_lk"><i class="headerqrcode_ico"></i><span class="headerqrcode_txt">扫码享受优惠</span></a><div class="headerqrcode_qc"><div class="headerqrcode_qcimg"><img data-src="//qrimg.jd.com/https%3A%2F%2Fpro.m.jd.com%2Fmall%2Factive%2F2hqsQcyM5bEUVSStkN3BwrBHqVLd%2Findex.html-110-1-4-0.png?v=1" src="//qrimg.jd.com/https%3A%2F%2Fpro.m.jd.com%2Fmall%2Factive%2F2hqsQcyM5bEUVSStkN3BwrBHqVLd%2Findex.html-110-1-4-0.png?v=1"></div><div class="headerqrcode_arrow"><i class="headerqrcode_arrow_bd"></i><i class="headerqrcode_arrow_bg"></i></div></div></div>`;
	$("#settleup-2014").after(str);
	$.ajax({
		type: "get",
		url: "http://cds.3.cn/get_jimdb_key/get?key=hotword&argv=h-1761",
		async: true,
		dataType: "jsonp",
		success: function(data) {
			var str = '';
			datena = data[0].name;
			getdata(datena);
			//			console.log(datena)
			$("#key")[0].placeholder = datena;
			for(var i = 1; i < data.length; i++) {
				str += `<a data-id="${data[i].id}" data-position-id="${data[i].order}" href="${data[i].url_info}" target="_blank">${data[i].name}</a>`;
			}
		}
	});

	function getdata(data) {
		datena = data;
	}

	$("#key").bind("input focus", function() {
		var ls_xx = $("#key").val();
		if(ls_xx !== "") {
			ls_xx = encodeURI(ls_xx);
			$.ajax({
				type: "get",
				url: "json/searchs.json",
				async: true,
				success: function(data) {
					var Array = data[1].ptt.split("&");
					var str1 = `<li class='fore1'><div id='d_0' suggest-pos='1.def.0' class='fore1' title='${data[1].key}'><div class='search-item'>${data[1].key}</div><div class='search-count'>约${data[1].qre}个商品</div></div><div id='d_1' class='item1' ><a href='${data[1].pul}?suggest=1.prom.0.V00&amp;wq=s' style='float:left;width:100%;'>${Array[0]}<img src='${data[1].ppc}'> ${Array[1]}</a></div></li>`;
					for(var i = 2; i < data.length - 1; i++) {
						str1 += `<li id='d_${i}' suggest-pos='${i}.def.0' title='${data[i].key}'><div class="search-item">${data[i].key}</div><div class="search-count">约${data[i].qre}个商品</div></li>`;
					}
					str1 = str1 + `<li class="close">关闭</li>`;
					$("#shelper").css({
						"display": "block"
					}).html(str1);
					listclick();
				}
			})
		} else {
			$("#shelper").css({
				"display": "none"
			});
		}
	});
	$.ajax({
		type: "get",
		url: "https://cds.3.cn/get_jimdb_key/get?key=hotword&argv=h-1761&callback=?",
		async: true,
		dataType:"jsonp",
		success:function  (dd) {
//			console.log(dd);
			var str = '';
//			<a data-id="7052" data-position-id="2" href="//sale.jd.com/act/Sw1OTAmaqzfK.html" target="_blank">美妆盛宴</a>
		for(var i = 1;i<dd.length;i++){
			str += `<a data-id="${dd[i].id}" data-position-id="${dd[i].order}" href="${dd[i].url_info}" target="_blank">${dd[i].name}</a>`;
		}
		$("#hotwords").html(str);
			
		}
	});

})

function listclick() {
	var flag = true;
	setTimeout(function() {
		if(flag = true) {
			listfocusout();
		}
	}, 100)
	$("#shelper").children(".fore1").children("div").hover(function() {
		console.log("输出div的hover")
		$(this).css({
			"background": "#f5f5f5"
		});
//		background: rgb(255, 223, 198);
		$(this).children("a").css({"color":"#f30213"});
//		background: rgb(255, 223, 198);
	}, function() {
		$(this).css({
			"background": "rgb(255, 255, 255)"
		});
		$(this).children("a").css({"color":"#666"});
	})

	$("#shelper").children("li").not(".fore1,.close").hover(function() {
		$(this).css({
			"background": "rgb(255, 223, 198)"
		});
	}, function() {
		$(this).css({
			"background": "#fff"
		});
	});
	$("#shelper").children(".fore1").children("div").click(function(e) {
		$("#key").val($("#shelper").find("#d_0").find(".search-item").text());
		$("#shelper").slideUp();
		flag = false;
	})

	$("#shelper").children().not(".fore1,.close").click(function(e) {
		$("#key").val($(e.target).children(".search-item").text());
		$("#shelper").slideUp();
		flag = false;
	})
	$("#key").focus(function() {
		if($("#key").val() == "") {
			$("#key")[0].placeholder = "";
		}
	})
	$("#key").find(".close").click(function() {
		$("#shelper").slideUp();
	})
}

function listfocusout() {
	$("#key").focusout(datena, function() {
		if($("#key").val() == "") {
			$("#key")[0].placeholder = datena;
		}
		$("#shelper").slideUp();
	});
}

$(function(){
	console.log(window.data);
	console.log(window.data.chaoshi_fs_1.navTitle[0]);
	var str = `<div class="chaoshi_fs" id="chaoshi_fs_1" data-id="chaoshi_fs_1" data-async="true" data-tpl="chaoshi_fs_tpl"></div>`;
	var str1 = `<div class="chaoshi_menu"><div class="grid_c1 clearfix"><ul class="chaoshi_menu_list clearfix fl"></ul><ul class="chaoshi_menu_ad clearfix fr"></ul></div></div>`;
	
})

















































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
	var str1 = `<div class="dd dorpdown-layer"><div class="dd-spacer"></div><div class="dd-inner" id="ttbar-apps-main"></div></div>`;
	var str2 = '<div class="mobile_pop_item"> <div class="mobile_pop_qrcode mobile_pop_qrcode_1"><img src="//img10.360buyimg.com/da/jfs/t7525/251/1899038567/28110/d5764256/59a51bf6Nb8e478cc.png"></div> \<div class="mobile_pop_info"> \<h5 class="mobile_pop_tit"><a href="//app.jd.com/" target="_blank">&#25163;&#26426;&#20140;&#19996;</a></h5> \<p class="mobile_pop_value">&#x65B0;&#x4EBA;&#x4E13;&#x4EAB;&#x5927;&#x793C;&#x5305;</p> \<p class="mobile_pop_device"> \<a class="mobile_pop_device_lk mobile_pop_device_ios" href="https://itunes.apple.com/cn/app/id414245413" target="_blank">APP Store</a> \<a class="mobile_pop_device_lk mobile_pop_device_and" href="https://storage.jd.com/jdmobile/JDMALL-PC2.apk" target="_blank">&#x5B89;&#x5353;&#x5E02;&#x573A;</a> \<a class="mobile_pop_device_lk mobile_pop_device_pad" href="https://itunes.apple.com/cn/app/jing-dong-hd/id434374726" target="_blank">APP Store</a> \</p> \</div> \</div> \<div class="mobile_pop_item"> \<div class="mobile_pop_qrcode mobile_pop_qrcode_2"><img src="//img30.360buyimg.com/da/jfs/t3907/165/1380364192/12868/f47b703b/5874a54dNcec29924.jpg"></div> \<div class="mobile_pop_info"> \<h5 class="mobile_pop_tit">&#x5173;&#x6CE8;&#x4EAC;&#x4E1C;&#x5FAE;&#x4FE1;</h5> \<p class="mobile_pop_value">&#x5FAE;&#x4FE1;&#x626B;&#x4E00;&#x626B;&#x5173;&#x6CE8;<br>&#x65B0;&#x7C89;&#x6700;&#x9AD8;180&#x5143;<br>&#x60CA;&#x559C;&#x793C;&#x5305;</p> \</div> \</div> \<div class="mobile_pop_item"> \<div class="mobile_pop_qrcode mobile_pop_qrcode_3"><img src="//img13.360buyimg.com/da/jfs/t4018/193/1415357059/15408/876d5d6e/5874a555Ne8192324.jpg"></div> <div class="mobile_pop_info"> <h5 class="mobile_pop_tit"><a href="https://m.jr.jd.com/helppage/downApp/jrAppPromote.html" target="_blank">&#x4EAC;&#x4E1C;&#x91D1;&#x878D;&#x5BA2;&#x6237;&#x7AEF;</a></h5> <p class="mobile_pop_value">&#26032;&#20154;&#19987;&#20139;&#22823;&#31036;&#21253;</p> <p class="mobile_pop_device"> <a class="mobile_pop_device_lk mobile_pop_device_ios" href="https://itunes.apple.com/cn/app/jing-dong-jin-rong-hui-li/id895682747?mt=8" target="_blank">APP Store</a> <a class="mobile_pop_device_lk mobile_pop_device_and" href="http://211.151.9.66/downapp/jrapp_jr188.apk" target="_blank">&#x5B89;&#x5353;&#x5E02;&#x573A;</a> </p> </div> </div>';
	$(this).append(str1);
	$("#ttbar-apps-main").html(str2);
}, function() {
	$(this).find(".dorpdown-layer").remove();
	$(this).removeClass("hover");
});
$(function() {
	//	$.ajax({
	//		type: "get",
	//		url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00397625&callback=?",
	//		async: true,
	//		dataType: "jsonp",
	//		success: function(data) {	
	//			console.log(data)
	//			$("#o-header").html("<a id='chaoshi_top_lk_28' class='chaoshi_top_lk grid_c1' href='" + data.DATA.adData[0].link+"' target='_blank' clstag='channel|keycount|3054|topBanner28_0' style='background: transparent;' title=''><img src='" + data.DATA.adData[0].pictureUrl + "' data-lazy-img='done' width='1190' height='80'><div class='chaoshi_top_close'></div></a>");
	//			data = "";
	//		}
	//
	//	});
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
					var str1 = `<li class='fore1'><div id='d_0' suggest-pos='1.def.0' class='fore1' title='${data[1].key}'><div class='search-item'>${data[1].key}</div><div class='search-count'>约${data[1].qre}个商品</div></div><div id='d_1' class='item1'><a href='${data[1].pul}?suggest=1.prom.0.V00&amp;wq=s' style='float:left;width:100%;'>${Array[0]}<img src='${data[1].ppc}' style="padding-left: 4px;"> ${Array[1]}</a></div></li>`;
					for(var i = 2; i < data.length - 1; i++) {
						str1 += `<li id='d_${i}' suggest-pos='${i}.def.0' title='${data[i].key}'><div class="search-item">${data[i].key}</div><div class="search-count">约${data[i].qre}个商品</div></li>`;
					}
					str1 = str1 + `<li class="close">关闭</li>`;
					$("#shelper").css({
						"display": "block",
						"visibility": "visible"
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
		dataType: "jsonp",
		success: function(dd) {
			var str = '';
			for(var i = 1; i < dd.length; i++) {
				str += `<a data-id="${dd[i].id}" data-position-id="${dd[i].order}" href="${dd[i].url_info}" target="_blank">${dd[i].name}</a>`;
			}
			$("#hotwords").html(str);

		}
	});

})

function listclick() {
	listfocusout();
	$("#shelper").children(".fore1").children("div").hover(function() {
		console.log("输出div的hover")
		$(this).css({
			"background": "#f5f5f5"
		});
		$(this).children("a").css({
			"color": "#f30213"
		});
	}, function() {
		$(this).css({
			"background": "rgb(255, 255, 255)"
		});
		$(this).children("a").css({
			"color": "#666"
		});
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
	})

	$("#shelper").children().not(".fore1,.close").click(function(e) {
		console.log($(e.target));
		console.log("aaaa", $(this).children(".search-item").text())
		$("#key").val($(this).children(".search-item").text());
		$("#shelper").slideUp();
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

$(function() {
	var str = `<div class="chaoshi_fs" id="chaoshi_fs_1" data-id="chaoshi_fs_1" data-async="true" data-tpl="chaoshi_fs_tpl"></div>`;
	$(".mod_container").append(str);
	var str1 = `<div class="chaoshi_menu"><div class="grid_c1 clearfix"><ul class="chaoshi_menu_list clearfix fl"></ul><ul class="chaoshi_menu_ad clearfix fr"></ul></div></div>`;
	$("#chaoshi_fs_1").append(str1);
	var str3 = '';
	var str4 = '';
	for(var i = 0; i < shuju.data.menuList.length; i++) {
		str3 += `<li class="chaoshi_menu_list_item fl"><i class="chaoshi_menu_list_split"></i><a href="${shuju.data.menuList[i].URL}" clstag="channel|keycount|3054|h_words1_1" target="_blank" class="chaoshi_menu_list_link" title="${shuju.data.menuList[i].NAME}">${shuju.data.menuList[i].NAME}</a></li>`;
	}
	$("#chaoshi_fs_1").children(".chaoshi_menu").find(".chaoshi_menu_list").append(str3);
	$("#chaoshi_fs_1").children(".chaoshi_menu").find(".chaoshi_menu_list").children("li:first").children("a:first").addClass("chaoshi_menu_list_link_on");
	for(var i = 0; i < shuju.data.adList.length; i++) {
		str4 += `<li class="chaoshi_menu_ad_item fl"><i class="mod_png chaoshi_menu_ad_icon" style="background-image: url(${shuju.data.adList[i].picUrl});"></i><span class="chaoshi_menu_ad_txt">${shuju.data.adList[i].title}</span></li>`;
	}
	$("#chaoshi_fs_1").children(".chaoshi_menu").find(".chaoshi_menu_ad").append(str4);
	$("#chaoshi_fs_1").children(".chaoshi_menu").find(".chaoshi_menu_list").children("li:first").children("a:first").addClass("chaoshi_menu_list_link_on");
	$("#chaoshi_fs_1").children(".chaoshi_menu").find(".chaoshi_menu_ad").children("li:first").addClass("chaoshi_menu_ad_item_first");

	var str = '';
	str = `<div class="chaoshi_banner_wrapper clearfix grid_c1"><div class="chaoshi_banner_inner"><div class="chaoshi_nav"><div class="chaoshi_nav_header">${shuju.data.navTitle[0].NAME}</div><div class="chaoshi_nav_body"></div></div></div></div>`;
	$("#chaoshi_fs_1").append(str);
	var str = '';
	var str1 = '';
	for(var i = 0; i < shuju.data.navFirst.length; i++) {
		str += `<div class="item"><div class="item_header"><div class="item_decoration" style="display: block;"></div><h3 class="item_header_title">${shuju.data.navFirst[i].NAME}<i class="item_header_title_arrow">&gt;</i></h3><p class="item_header_sublinks">{%%}</p></div></div>`;
		for(var j = 0; j < shuju.data.navFirst[i].children.length; j++) {
			shuju.data.navFirst[i].children[j].NAME
			str1 += `<a href="${shuju.data.navFirst[i].children[j].URL} "clstag="channel|keycount|3054|BANNERNAVHEADER1_${i}_${j}" class="item_header_sublinks_link" title="${shuju.data.navFirst[i].children[j].NAME}">${shuju.data.navFirst[i].children[j].NAME}</a>`;
		}
		str = str.replace(/{%%}/g, str1);
		str1 = '';
	}
	$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").append(str);
	$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item:last").addClass("item_last");
	for(var i = 4; i < shuju.data.groupIdsAd.length; i++) {
		$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").eq(i - 4).attr({
			"data-id": shuju.data.groupIdsAd[i].ANCHOR,
			"data-title": shuju.data.groupIdsAd[i].NAME
		})
	}
	var str = `<div class="item_body" style="display: none; visibility: visible;"><div class="item_body_wrapper clearfix"><ul class="chaoshi_nav_sub clearfix"></ul><div class="chaoshi_nav_recommend"></div></div></div>`;
	$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").append(str);
	var str1 = '';
	var str2 = '';
	var str3 = '';
	for(let i = 0; i < shuju.data.navFirst.length; i++) {
		var navthird = "navThird" + (i + 1);
		var a = 0
		for(let j = 0; j < shuju.data[navthird].length; j++) {
			str1 += `<li class="chaoshi_nav_sub_item"><div class="chaoshi_nav_sub_title">${shuju.data[navthird][j].NAME}</div><div class="chaoshi_nav_sub_main clearfix">{%%}</div></li>`;
			for(let m = 0; m < shuju.data[navthird][j].children.length; m++) {
				str2 += `<a href="${shuju.data[navthird][j].children[m].URL}" target="_blank" clstag="channel|keycount|3054|BANNERNAVBODY1_${i+1}_${j+1}_${m+1}" class="chaoshi_nav_sub_main_link" title="${shuju.data[navthird][j].children[m].NAME}">${shuju.data[navthird][j].children[m].NAME}</a>`;
			}
			str1 = str1.replace(/({%%})/gi, str2)
		}
		$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").eq(i).find(".chaoshi_nav_sub").append(str1);
		str2 = '';
		str1 = '';
	}

	for(let i = 0; i < shuju.data.navFirst.length; i++) {
		var o = $("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").eq(i),
			s = '';
		var groupid = o.attr("data-id");
		$.ajax({
			type: "get",
			url: `https://ai.jd.com/General?app=Bi&action=get_ad&groupId=${groupid}&callback=?`,
			async: true,
			dataType: "jsonp",
			success: function(data) {
				for(var j = 0; j < data.DATA.adData.length; j++) {
					s += `<a href="${data.DATA.adData[j].link}" clstag="channel|keycount|3054|BANNERNAVRECOMMEND${i}_1_${j}" target="_blank" class="chaoshi_nav_recommend_link"> <img src="${data.DATA.adData[j].pictureUrl}" data-lazy-img="done" class="chaoshi_nav_recommend_pic" alt="" title="" data-webp="no"></a>`
				}
				//					console.log(o.find(".chaoshi_nav_recommend"))
				$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").find(".chaoshi_nav_recommend").eq(i).html(s);
				s = '';
			}
		});
	}

	$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").hover(function() {
		var a = $(this),
			o = a.find(".item_body"),
			i = a.index();
		a.addClass("item_hover").find(".item_decoration").show();
		o.show();
		if(i > 4) {
			var e = 551 - o.height();
			e = Math.max(e, 0),
				o.css("top", e);
		}
		o.css("visibility", "visible");
	}, function() {
		$(this).removeClass("item_hover").find(".item_body").hide().end().find(".item_decoration").hide();
	});
})
$(function() {
	var s = '',
		s1 = '',
		ran = 0,
		sji = 0,
		length1 = 0,
		s2 = '',
		s3 = '',
		s4 = '';
	//轮播框架
	//			chaoshi_carousel_nav_btn_last
	//			chaoshi_carousel_nav_btn_on 轮播触发按钮的class名
	s = `<div class="chaoshi_banner_mid fl"><div class="chaoshi_carousel"><ul class="chaoshi_carousel_main">{1%%}</ul><div class="chaoshi_carousel_extra"><div class="chaoshi_carousel_btns"><a href="javascript:void(0)" clstag="channel|keycount|3054|BANNERCAROUSELBTN1_1" class="chaoshi_carousel_prev">&lt;</a><a href="javascript:void(0)" clstag="channel|keycount|3054|BANNERCAROUSELBTN1_2" class="chaoshi_carousel_next">&gt;</a></div><div class="chaoshi_carousel_nav clearfix">{2%%}</div></div></div><ul class="chaoshi_bottom clearfix">{3%%}</ul></div>`;
	$.when($.ajax({
		type: "get",
		url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368271&callback=?",
		async: true,
		dataType: "jsonp",
		success: function(a) {
			s1 = `<li class="chaoshi_carousel_item chaoshi_carousel_item_on" style="opacity: 1; z-index: 1; position: absolute;"><a href="${a.DATA.adData[0].link}" clstag="channel|keycount|3054|BANNERCAROUSEL1_${0}" target="_blank" class="chaoshi_carousel_link"><img src="${a.DATA.adData[0].pictureUrl}" data-lazy-img="done" class="chaoshi_carousel_img" title="" alt=""></a></li>`;
			for(let i = 1; i < 6; i++) {
				console.log(i)
				s1 += `<li class="chaoshi_carousel_item" style="opacity: 0; z-index: 0; position: absolute;"><a href="${a.DATA.adData[i].link}" clstag="channel|keycount|3054|BANNERCAROUSEL1_${i}" target="_blank" class="chaoshi_carousel_link"><img src="${a.DATA.adData[i].pictureUrl}" data-lazy-img="done" class="chaoshi_carousel_img" title="" alt=""></a></li>`
			}
		}
	}), $.ajax({
		type: "get",
		url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368340&callback=?",
		async: true,
		dataType: "jsonp",
		success: function(a) {
			s3 += `<li class="chaoshi_bottom_item fl" ><a href="${a.DATA.adData[0].link}" clstag="channel|keycount|3054|BANNERBOTTOMRECOMMEND1_1" class="chaoshi_bottom_link" target="_blank"><img class="chaoshi_bottom_img" src="${a.DATA.adData[0].pictureUrl}" data-lazy-img="done" alt="" title=""></a></li>`;
		}
	}), $.ajax({
		type: "get",
		url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368847&callback=?",
		async: true,
		dataType: "jsonp",
		success: function(a) {
			s3 += `<li class="chaoshi_bottom_item fl" ><a href="${a.DATA.adData[0].link}" clstag="channel|keycount|3054|BANNERBOTTOMRECOMMEND1_2" class="chaoshi_bottom_link" target="_blank"><img class="chaoshi_bottom_img" src="${a.DATA.adData[0].pictureUrl}" data-lazy-img="done" alt="" title=""></a></li>`;
		}
	})).done(
		function() {
			s = s.replace(/{1%%}/gi, s1);
			s = s.replace(/{3%%}/gi, s3);
			for(var i = 0; i < 6; i++) {
				s2 += `<a href="javascript:void(0)" class="chaoshi_carousel_nav_btn" style="width: 129.167px;"></a>`;
			}
			s = s.replace(/{2%%}/gi, s2);
			//			console.log(s)
			$(".chaoshi_banner_inner").append(s);
			$(".chaoshi_carousel_nav").find(".chaoshi_carousel_nav_btn:first").addClass("chaoshi_carousel_nav_btn_on");
			//			console.log($(".chaoshi_carousel_nav").find(".chaoshi_carousel_nav_btn"))
			$(".chaoshi_carousel_nav").find(".chaoshi_carousel_nav_btn:last").addClass("chaoshi_carousel_nav_btn_last");
			var i = 0;
			var length = $(".chaoshi_carousel_main").children("li").length;
			var timer = null;
			
			timer = setInterval(function(){
				starts ()
			},4000)
			
			
			console.log($(".chaoshi_carousel_prev"),$(".chaoshi_carousel_prev"));
			
			$(".chaoshi_carousel_prev").bind("click",function(){
				i--;
				if (i<0) {
					i = 0;
				}
				starts ();
			})
			$(".chaoshi_carousel_prev,.chaoshi_carousel_next").hover(function(){
				
			},function(){
				
			})
			$(".chaoshi_carousel_next").bind("click",function(){
				starts ();
			})
			function starts () {
				i++;
				if (i>length - 1) {
					i = 0;
				}
					$(".chaoshi_carousel_main").children("li").css("position","absolute")
					$(".chaoshi_carousel_main").children("li").eq(i).animate({
						"z-index":"5","opacity":"1"
					},1000).siblings().animate({
						"z-index":"0","opacity":"0"
					},1000);
					$(".chaoshi_carousel_nav").children("a").eq(i).addClass("chaoshi_carousel_nav_btn_on").siblings().removeClass("chaoshi_carousel_nav_btn_on");
			}
		});
		
})
//function结束处
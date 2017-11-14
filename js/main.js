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
	var o = $("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").find(".item_header_sublinks");
	for(let i = 0; i < o.length; i++) {
		var a = $(o[i]).find("a");
		$(a[0]).addClass("item_header_sublinks_link_first");
		$(a[a.length - 1]).addClass("item_header_sublinks_link_last");
	}

	for(var i = 4; i < shuju.data.groupIdsAd.length; i++) {
		$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").eq(i - 4).attr({
			"data-id": shuju.data.groupIdsAd[i].ANCHOR,
			"data-title": shuju.data.groupIdsAd[i].NAME
		})
	}
	var str = `<div class="item_body" style="display: none; visibility: visible;"><div class="item_body_wrapper clearfix"><ul class="chaoshi_nav_sub clearfix"></ul><div class="chaoshi_nav_recommend"></div></div></div>`;
	$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").append(str);
	var s1 = '',
		s2 = '',
		s3 = '';
	for(let i = 0; i < shuju.data.navFirst.length; i++) {
		var navthird = "navThird" + (i + 1);
		var a = 0
		for(let j = 0; j < shuju.data[navthird].length; j++) {
			s1 += `<li class="chaoshi_nav_sub_item"><div class="chaoshi_nav_sub_title">${shuju.data[navthird][j].NAME}</div><div class="chaoshi_nav_sub_main clearfix">{%%}</div></li>`;
			for(let m = 0; m < shuju.data[navthird][j].children.length; m++) {
				s2 += `<a href="${shuju.data[navthird][j].children[m].URL}" target="_blank" clstag="channel|keycount|3054|BANNERNAVBODY1_${i+1}_${j+1}_${m+1}" class="chaoshi_nav_sub_main_link" title="${shuju.data[navthird][j].children[m].NAME}">${shuju.data[navthird][j].children[m].NAME}</a>`;
			}
			s1 = s1.replace(/({%%})/gi, s2);
			s2 = '';
		}
		$("#chaoshi_fs_1").children(".chaoshi_banner_wrapper").find(".chaoshi_nav_body").children(".item").eq(i).find(".chaoshi_nav_sub").append(s1);
		s1 = '';
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
				s1 += `<li class="chaoshi_carousel_item" style="opacity: 0; z-index: 0; position: absolute;"><a href="${a.DATA.adData[i].link}" clstag="channel|keycount|3054|BANNERCAROUSEL1_${i}" target="_blank" class="chaoshi_carousel_link"><img src="${a.DATA.adData[i].pictureUrl}" data-lazy-img="done" class="chaoshi_carousel_img" title="" alt=""></a></li>`
			}
		}
	}), $.ajax({
		type: "get",
		url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368847&callback=?",
		async: true,
		dataType: "jsonp",
		success: function(a) {
			s3 += `<li class="chaoshi_bottom_item fl" ><a href="${a.DATA.adData[0].link}" clstag="channel|keycount|3054|BANNERBOTTOMRECOMMEND1_1" class="chaoshi_bottom_link" target="_blank"><img class="chaoshi_bottom_img" src="${a.DATA.adData[0].pictureUrl}" data-lazy-img="done" alt="" title=""></a></li>`;
		}
	}), $.ajax({
		type: "get",
		url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368340&callback=?",
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
			$(".chaoshi_carousel_nav").find(".chaoshi_carousel_nav_btn:last").addClass("chaoshi_carousel_nav_btn_last");
			var i = 0;
			var len = $(".chaoshi_carousel_main").children("li").length;
			var timer = null;
			timer = setInterval(function() {
				starts()
			}, 4000)
			$(".chaoshi_carousel_prev").bind("click", function() {
				console.log("aaa", length);
				console.log(i)
				i -= 2;
				if(i == -2) {
					i = len - 2;
				}
				console.log(i)
				starts();
			})
			$(".chaoshi_carousel_prev,.chaoshi_carousel_next,.chaoshi_carousel_nav_btn").hover(function() {
				clearInterval(timer);
			}, function() {
				timer = setInterval(function() {
					starts()
				}, 4000)
			})
			$(".chaoshi_carousel_nav_btn").hover(function(e) {
				$(this).addClass("chaoshi_carousel_nav_btn_on").siblings().removeClass("chaoshi_carousel_nav_btn_on");
				i = $(this).index() - 1;
				starts();
			}, function() {
				$(this).siblings().removeClass("chaoshi_carousel_nav_btn_on");
			})
			$(".chaoshi_carousel_next").bind("click", function() {
				starts();
			})

			function starts() {
				i++;
				if(i == len) {
					i = 0;
				}
				$(".chaoshi_carousel_main").children("li").css("position", "absolute")
				$(".chaoshi_carousel_main").children("li").eq(i).animate({
					"z-index": "5",
					"opacity": "1"
				}, 1000).siblings().animate({
					"z-index": "0",
					"opacity": "0"
				}, 1000);
				$(".chaoshi_carousel_nav").children("a").eq(i).addClass("chaoshi_carousel_nav_btn_on").siblings().removeClass("chaoshi_carousel_nav_btn_on");
			}
		});

})
//function结束处
$(function() {
			var s = '';
			s = `<div class="chaoshi_right fr"><div class="chaoshi_coupon"><p class="chaoshi_right_tt">${shuju.data.couponTT[0].NAME}</p><p class="chaoshi_right_tip">${shuju.data.couponTip[0].NAME}</p><div class="chaoshi_coupon_bd"><a class="chaoshi_coupon_info" href="${shuju.data.couponTT[0].customData}" target="_blank" style="z-index: 1;"><p class="chaoshi_coupon_info_num1">¥<em>${shuju.data.coupon[0].price*100}</em></p><p class="chaoshi_coupon_info_num2">满${shuju.data.coupon[0].promoteText}可用</p><p class="chaoshi_coupon_info_tip">${shuju.data.coupon[0].tag}</p></a><a class="chaoshi_coupon_more" href="//a.jd.com/channel/coupons.html?cat=2" target="_blank" clstag="channel|keycount|3054|couponMore1_10" >${shuju.data.couponMore[0].NAME}</a></div></div></div>`;
			$(".chaoshi_banner_inner").append(s);

			$.when($.ajax({
				type: "get",
				url: "https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00737125&callback=?",
				async: true,
				dataType: "jsonp",
				success: function(a) {
					//			console.log(a)
					//			console.log(a.DATA.data)
					var s = '',
						s1 = '',
						s2 = '';
					s = `<div class="chaoshi_handy"><h4 class="chaoshi_right_tt">${shuju.data.handyTT[0].NAME}</h4><p class="chaoshi_right_tip">${shuju.data.handyTip[0].NAME}</p><div class="chaoshi_handy_carousel"><ul class="chaoshi_handy_carousel_main">{aa&&}</ul><div class="chaoshi_handy_carousel_nav clearfix">{bb&&}</div></div></div>`;

					s1 = `<li class="chaoshi_handy_carousel_item" style="opacity: 1; z-index: 5; position: absolute;"><a href="//item.jd.com/${a.DATA.data[0].skuData[0].skuId}.html" clstag="channel|keycount|3054|handy1_${1}" target="_blank" class="chaoshi_handy_carousel_link"><img src="${a.DATA.data[0].skuData[0].image}" data-lazy-img="done" class="chaoshi_handy_carousel_img" title="${a.DATA.data[0].skuData[0].name}" alt="${a.DATA.data[0].skuData[0].name}"></a><a class="chaoshi_handy_carousel_enter" href="https://sale.jd.com/act/7UOF1BLiYI.html" clstag="channel|keycount|3054|handyEnter1_${1}" target="_blank">进入&gt;</a></li>`;
					for(var i = 1; i < a.DATA.data[0].skuData.length; i++) {
						s1 += `<li class="chaoshi_handy_carousel_item" style="opacity: 0; z-index: 0; position: absolute;"><a href="//item.jd.com/${a.DATA.data[0].skuData[i].skuId}.html" clstag="channel|keycount|3054|handy1_${i+1}" target="_blank" class="chaoshi_handy_carousel_link"><img src="${a.DATA.data[0].skuData[i].image}" data-lazy-img="done" class="chaoshi_handy_carousel_img" title="${a.DATA.data[0].skuData[i].name}" alt="${a.DATA.data[0].skuData[i].name}"></a><a class="chaoshi_handy_carousel_enter" href="https://sale.jd.com/act/7UOF1BLiYI.html" clstag="channel|keycount|3054|handyEnter1_${i+1}" target="_blank">进入&gt;</a></li>`;
						//				a.DATA.data[0].skuData[i]
					}
					s = s.replace(/{aa&&}/, s1);
					s2 = `<a href="javascript:void(0)" class="chaoshi_handy_carousel_nav_btn on"></a>`;
					for(var i = 1; i < a.DATA.data[0].skuData.length; i++) {
						s2 += `<a href="javascript:void(0)" class="chaoshi_handy_carousel_nav_btn"></a>`;
					}
					s = s.replace(/{bb&&}/, s2);
					$(".chaoshi_right").append(s);

				}
			})).done(
				function() {
					var len = $(".chaoshi_handy_carousel_main").children("li").length,
						i = 0,
						timer1 = null;
					timer1 = setInterval(function() {
						lunbs()
					}, 3000);

					$(".chaoshi_handy_carousel_nav_btn").hover(function(e) {
						$(this).addClass("on").siblings().removeClass("on");
						i = $(this).index() - 1;
						lunbs();
						clearInterval(timer1);
					}, function() {
						$(this).siblings().removeClass("on");
						timer1 = setInterval(function() {
							lunbs()
						}, 3000)
					})

					function lunbs() {
						i++;
						if(i == len) {
							i = 0;
						}
						//				chaoshi_handy_carousel_main
						$(".chaoshi_handy_carousel_main").children("li").css("position", "absolute")
						$(".chaoshi_handy_carousel_main").children("li").eq(i).animate({
							"z-index": "5",
							"opacity": "1"
						}, 1000).siblings().animate({
							"z-index": "0",
							"opacity": "0"
						}, 1000);
						$(".chaoshi_handy_carousel_nav").children("a").eq(i).addClass("on").siblings().removeClass("on");
					}
				})
			$.when(
				$.ajax({
					type: "get",
					url: "https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00725585&callback=?&num=1&position=0",
					async: true,
					dataType: "jsonp",
					success: function(a) {
						var len = 0;
						s = '';
						s1 = '',
							s2 = '';
						//			console.log(a);
						len = a.DATA.data[0].skuData;
						s = `<div class="chaoshi_seckill" id="chaoshi_seckill_2" data-id="chaoshi_seckill_2" data-tpl="chaoshi_seckill_tpl">
			<div class="grid_c1">
				<div class="chaoshi_seckill_hd clearfix">
					<h3 class="chaoshi_seckill_tit">{text%%}</h3>
					<div class="J_chaoshi_seckill_time chaoshi_seckill_time">
						<span class="chaoshi_seckill_time_tip">距离本场结束还有</span>
						<div class="J_chaoshi_seckill_time_main chaoshi_seckill_time_main">
							<div class="time clearfix">
								<div class="time_item time_hour"><span class="time_item_txt">{hour}</span></div>
								<div class="time_split"><i class="time_split_dot time_split_top"></i><i class="time_split_dot time_split_bottom"></i></div>
								<div class="time_item time_minute"><span class="time_item_txt">{minute}</span></div>
								<div class="time_split"><i class="time_split_dot time_split_top"></i><i class="time_split_dot time_split_bottom"></i></div>
								<div class="time_item time_second"><span class="time_item_txt">{second}</span></div>
							</div>
						</div>
					</div>
				</div>
				<div class="chaoshi_seckill_bd clearfix">
						<ul class="chaoshi_seckill_list clearfix" data-qianggou="//chaoshi.jd.com/qianggou">{li%%}</ul>
						{aa%%}
				</div>
			</div>
		</div>`
						//			开发文档： {hour} {minute} {second} {li%%}	
						var length = Math.floor(Math.random() * (len.length - 6));

						//			console.log(len)￥
						for(var i = length; i < length + 5; i++) {
							s1 += `<li class="chaoshi_seckill_item csi" >  <div class="csi_pic"><a class="csi_pic_lk" href="//chaoshi.jd.com/qianggou#${a.DATA.data[0].skuData[i].skuId}" target="_blank" clstag="channel|keycount|3054|sale_item_chaoshi_seckill_2_${i}"><img class="csi_img" src="${a.DATA.data[0].skuData[i].image}" data-lazy-img="done" alt="${a.DATA.data[0].skuData[i].name}" title="${a.DATA.data[0].skuData[i].name}">      <p class="csi_name">${a.DATA.data[0].skuData[i].name}</p>    </a>  </div>  <p class="csi_price clearfix"><span class="csi_price_new" data-price-id="${a.DATA.data[0].skuData[i].skuId}">￥${a.DATA.data[0].skuData[i].promoPrice}</span><del class="csi_price_origin" data-price-id="${a.DATA.data[0].skuData[i].skuId}" data-price-type="m">￥${a.DATA.data[0].skuData[i].jdPrice}</del></p></li>`;
						}

						s2 = `<a href="${shuju1.data.more[0].url}" class="chaoshi_seckill_more" clstag="channel|keycount|3054|more2_1_1" target="_blank" title="${shuju1.data.more[0].title}"><img src="${shuju1.data.more[0].picUrl}" data-lazy-img="done" alt="${shuju1.data.more[0].title}" data-webp="no"></a>`
					}
				})
			).done(
				function() {
					s = s.replace(/{li%%}/, s1);
					s = s.replace(/{text%%}/, shuju1.data.title[0].NAME);
					s = s.replace(/{hour}/, "00");
					s = s.replace(/{minute}/, "00");
					s = s.replace(/{second}/, "00");
					s = s.replace(/{aa%%}/, s2)
					$(".mod_container").append(s);
					setInterval(function() {
						var mydate = new Date();
						var mydateyear = mydate.getFullYear()
						var mydatemonth = mydate.getMonth();
						var mydatenext = mydate.getDate() + 1;
						var mydate1 = new Date(mydateyear, mydatemonth, mydatenext, "00", "00", "00", "0000");
						var mytime = Math.floor(mydate1 - mydate);
						var hour = Math.floor(mytime / 1000 / 3600);
						var minute = Math.floor(mytime / 1000 / 60 % 60);
						var second = Math.floor(mytime / 1000 % 60);

						function zparseint(a) {
							if(a < 10) {
								a = "0" + a;
								return a;
							}
							return a;
						}
						hour = zparseint(hour);
						minute = zparseint(minute);
						second = zparseint(second);
						$(".time_hour").html(hour);
						$(".time_minute").html(minute);
						$(".time_second").html(second);
					}, 500);

				}
			).done(function() {
				//家庭量贩开始  
				var s = '',
					s1 = '',
					s2 = '',
					s3 = '';
				s = `<div class="chaoshi_discount grid_c1" id="chaoshi_discount_3" data-id="chaoshi_discount_3" data-async="true" data-elevator="true" data-tpl="chaoshi_discount_tpl">
			<div class="chaoshi_mod_head">
				<h3 class="chaoshi_mod_head_title">${shuju2.data.title[0].NAME}</h3>
			</div>
			<ul class="chaoshi_discount_big clearfix cdb">
				{li%%}
			</ul>
			 <div class="chaoshi_discount_small clearfix">
			 <div class="chaoshi_discount_listwrap">
			 	<ul class="chaoshi_discount_list clearfix">
			 	{li1%%}
			 	</ul>
			 </div>
				{aa%%}
			 </div>
		</div>`;
				//ul的ajax的提交
				$.when($.ajax({
					type: "get",
					url: "https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00725321&callback=?",
					async: true,
					dataType: 'jsonp',
					success: function(a) {
						for(var i = 0; i < a.DATA.data[0].skuData.length; i++) {
							//				a.DATA.data[0].skuData[i]
							// 				a.DATA.data[0].skuData[i].image 图片路径
							//				a.DATA.data[0].skuData[i].name 标题
							//				a.DATA.data[0].skuData[i].tag  内容
							// 				a.DATA.data[0].skuData[i].skuId  商品ID
							//				a.DATA.data[0].skuData[i].pPrice 量贩价
							s1 += `<li class="J_goods_item cdb_item">
			<div class="cdb_bd">
				<a class="cdb_pic" href="//item.jd.com/1103186.html" target="_blank" clstag="channel|keycount|3054|bigItem3_${i}"><img class="J_goods_img" src="${a.DATA.data[0].skuData[i].image}" data-lazy-img="done" alt="${a.DATA.data[0].skuData[i].name}" title="${a.DATA.data[0].skuData[i].name}"></a><img class="cdb_logo" src="//static.360buyimg.com/mtd/pc/cms/images/mod_1x1.png" data-lazy-img="" alt="" data-webp="no">
				<a class="cdb_name" href="//item.jd.com/${a.DATA.data[0].skuData[i].skuId}.html" target="_blank" clstag="channel|keycount|3054|bigItem3_${i}">${a.DATA.data[0].skuData[i].name}</a>
				<p class="cdb_promote1"></p>
				<p class="cdb_promote2">${a.DATA.data[0].skuData[i].tag}</p>
			</div>
			<div class="cdb_ft clearfix">
				<div class="cdb_ft_l">
					<p class="cdb_price nosalenum">量贩价：<span class="J_goods_price" data-price-id="${a.DATA.data[0].skuData[i].skuId}">¥${a.DATA.data[0].skuData[i].pPrice}</span></p>
				</div>
				<a class="J_goods_add cdb_ft_r cdb_add" href="javascript:;" clstag="channel|keycount|3054|buygoodsAdd3_2_${i}"><i class="cdb_add_icon"></i><span class="cdb_add_txt">加入购物车</span></a>
			</div>
		</li>`;
						}
					}
				}), $.ajax({
					type: "get",
					url: "https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00718507&callback=?",
					async: true,
					dataType: "jsonp",
					success: function(a) {
						//				console.log(a);
						//			a.DATA.data[0].skuData[i] 开发文档
						// 				a.DATA.data[0].skuData[i].image 图片路径
						//				a.DATA.data[0].skuData[i].name 标题
						//				a.DATA.data[0].skuData[i].tag  内容
						// 				a.DATA.data[0].skuData[i].skuId  商品ID
						//				a.DATA.data[0].skuData[i].pPrice 特价
						//				s4 = '';
						for(var i = 0; i < a.DATA.data[0].skuData.length; i++) {
							s3 += `<li class="J_goods_item chaoshi_discount_item cdi"><div class="cdi_pic"><a class="cdi_pic_lk" href="//item.jd.com/${a.DATA.data[0].skuData[i].skuId}.html" target="_blank" clstag="channel|keycount|3054|smallItem3_${i}"><img class="J_goods_img cdi_img" src="${a.DATA.data[0].skuData[i].image}" data-lazy-img="done" alt="${a.DATA.data[0].skuData[i].name}" title="${a.DATA.data[0].skuData[i].name}"><p class="cdi_name">${a.DATA.data[0].skuData[i].name}</p></a></div><p class="cdi_promote">${a.DATA.data[0].skuData[i].tag}</p><p class="cdi_price clearfix"><span class="J_goods_price cdi_price_new" data-price-id="${a.DATA.data[0].skuData[i].skuId}">¥${a.DATA.data[0].skuData[i].pPrice}</span></p><a class="J_goods_add cdi_add" href="javascript:;" clstag="channel|keycount|3054|add3_${i}"><i class="cdi_add_icon"></i></a></li>`;
						}
					}
				})).done(
					function() {
						//			console.log(s1)
						s2 = `<a class="chaoshi_discount_more" href="//chaoshi.jd.com/liangfan" clstag="channel|keycount|3054|strollgoods3_1_1" target="_blank" title="${shuju2.data.more[0].title}" ><img src="${shuju2.data.more[0].picUrl}" data-lazy-img="done" alt="${shuju2.data.more[0].title}" data-webp="no"></a>`
						//			shuju2.data.more[0].picUrl
						//			shuju2.data.more[0].title 电磁炉的地址
						s = s.replace(/{li%%}/, s1)
						s = s.replace(/{aa%%}/, s2)
						// 上半部分的最后一个里 添加一个class名：last
						//			{li1%%} 此处替换下半部分的lI	
						s = s.replace(/{li1%%}/, s3);
						$(".mod_container").append(s);
						$(".chaoshi_discount_big").children("li:last").addClass("last");
					}
					//家庭量贩结束
				)
			}).done(
				function() {
					var s = '',
						s1 = '',
						s2 = '';
					$.when($.ajax({
							type: "get",
							url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368889&callback=?",
							async: true,
							dataType: "jsonp",
							success: function(a) {
								$.ajax({
									type: "get",
									url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368889&callback=?",
									async: true,
									dataType: "jsonp",
									success: function(a) {
									console.log(shuju3.data);
										for(var i = 0; i < Things.length; i++) {
											Things[i]
										}
									}
								})
							})).done() 

					}
				); //done结束处
			})

		s = `<div class="chaoshi_brand grid_c1" id="chaoshi_brand_5" data-id="chaoshi_brand_5" data-async="true" data-elevator="true" data-tpl="chaoshi_brand_tpl">
			<div class="chaoshi_mod_head">
				<h3 class="chaoshi_mod_head_title"> ${shuju3.data.title[0].NAME}</h3>
			</div>
			<div class="chaoshi_brand_row clearfix">
				<a class="chaoshi_brand_today" href="${a.DATA.adData[0].link}" clstag="channel|keycount|3054|today5_1_1" target="_blank" title="1"><img src="${a.DATA.adData[0].pictureUrl}" data-lazy-img="done" alt="1"></a>
				<div class="chaoshi_brand_list chaoshi_brand_big clearfix">{aa1%%}</div>
			</div>
			<div class="chaoshi_brand_row clearfix">
				<div class="chaoshi_brand_list chaoshi_brand_small clearfix">{aa2%%}</div>
				<a class="chaoshi_brand_more" href="${shuju3.data.more[0].url}" clstag="channel|keycount|3054|more5_1_1" target="_blank" title="${shuju3.data.more[0].title}"><img src="${shuju3.data.more[0].picUrl}" data-lazy-img="done" data-webp="no" alt="${shuju3.data.more[0].picUrl}"></a>
			</div>
		</div>`;
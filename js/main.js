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



$("#ttbar-mycity").hover(function() {
	$(this).addClass("hover");
	console.log($(this).children(".dt").children('.iconfont'));
}, function() {
	$(this).removeClass("hover");
});
$("#settleup-2014").hover(function  () {
	$(this).addClass("hover");
},function  () {
	$(this).removeClass("hover");
})





















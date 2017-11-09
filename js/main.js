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
			},function  () {
				$(this).removeClass("hover");
			});
			$(function  () {
				$.ajax({
					type:"get",
					url:"https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00397625&callback=?",
					async:true,
					dataType:"jsonp",
					success:function  (data) {
						console.log(data,data.DATA.adData[0].pictureUrl);
						$("#o-header").html("<a id='chaoshi_top_lk_28' class='chaoshi_top_lk grid_c1' href='"+data.DATA.adData[0].link+"' target='_blank' clstag='channel|keycount|3054|topBanner28_0' style='background: transparent;' title=''><img src='"+data.DATA.adData[0].pictureUrl+"' data-lazy-img='done' width='1190' height='80'><div class='chaoshi_top_close'></div></a>");
					}
				});
			});	































































































































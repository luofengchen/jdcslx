$(function() {
	if(getCookie("user")) {
		if(getCookie("carttxt")) {
			var url1 = getCookie("carttxt");
			creatcart(url1);
			//			$.ajax({
			//				type: "get",
			//				url: "https://dc.3.cn/navigation/get?callback=?",
			//				async: true,
			//				dataType: "jsonp",
			//				scriptCharset: "gbk",
			//				success: function(data) {
			//					console.log(data)
			//					var tolStr = "";
			//					var data = data.data;
			//					for(var i = 0; i < data.length; i++) {
			//						var str = "";
			//						var str1 = "";
			//						var detdata = data[i].s;
			//						str += '<dl class="fore' + (i + 1) + '"><dt>' + data[i].n + '</dt>';
			//						for(var j = 0; j < detdata.length; j++) {
			//							str1 += '<div class="item"><a href="#">' + detdata[j].n + '</a></div>';
			//						}
			//						tolStr += str + '<dd class="clearfix">' + str1 + '</dd></dl>';
			//					}
			//					$("#navWrap .ul-r .li7 .dropdown").html(tolStr);
			//				}
			//			});
			//
			//			/*
			////			 * 客户服务区域
			////			 */
			//			$.ajax({
			//				type: "get",
			//				url: "https://dc.3.cn/client/get?callback=?",
			//				async: true,
			//				dataType: "jsonp",
			//				scriptCharset: "gbk",
			//				success: function(data) {
			//					console.log(data)
			//					var data = data.data;
			//					var str = "";
			//					var str1 = "";
			//					var tolStr = "";
			//					for(var i = 0; i < data.length; i++) {
			//						if(data[i].c == 0) {
			//							str += '<div class="item"><a href="#">' + data[i].n + '</a></div>';
			//						}
			//						if(data[i].c == 1) {
			//							str1 += '<div class="item"><a href="#">' + data[i].n + '</a></div>';
			//						}
			//					}
			//					tolStr += '<div class="item-client">客户</div>' + str + '<div class="item-business">商户</div>' + str1;
			//					$("#navWrap .ul-r .li6 .dropdown").html(tolStr);
			//				}
			//			});

			if(getCookie("cart")) {
				var objCookie = JSON.parse(getCookie("cart"));
				console.log(objCookie);
			} else {
				var objCookie = {};
			}

			//判断cookie是否为空
			if(JSON.stringify(objCookie) == "{}") {
				
				$(".content .list_wrap").show();
				$(".content .cart_empty").hide();
			} else {
				$(".content .list_wrap").show();
				$(".content .cart_empty").hide();
			}

		}
	}

	function creatcart(url1) {
		//购物车数据
		$.ajax({
			type: "get",
			url: url1,
			async: true
		}).done(function(a) {
			a = JSON.parse(a);
			console.log(a)
			var str = "";
			var talPrice = 0;
			for(var i = 0; i < a[0].Cart.TheSkus.length; i++) {
				var picre = a[0].Cart.TheSkus[i].Num * a[0].Cart.TheSkus[i].PromotionPrice;
				console.log(picre)
				picre = picre.toFixed(2);
				console.log(picre)
				//				${a[0].Cart.TheSkus[i].ImgUrl}
				//				${a[0].Cart.TheSkus[i].Name}
				// 				${a[0].Cart.TheSkus[i].PromotionPrice}
				//				${a[0].Cart.TheSkus[i].Num}
				str += `<div class="item_list"><ul class="item_form clearfix"><li class="li1"><div class="checkbox"><input type="checkbox" /></div></li><li class="li2"><div class="p_img"><a href="#"><img src="//img12.360buyimg.com/n5/${a[0].Cart.TheSkus[i].ImgUrl}"/></a></div><div class="item_msg"><a href="#">${a[0].Cart.TheSkus[i].Name}</a></div><div class="no_reason"><i></i><b>支持7天无理由退货</b></div></li><li class="li3">¥${a[0].Cart.TheSkus[i].PromotionPrice}</li><li class="li4"><div class="quantity_form"><a href="javascript:void(0);" class="fl" data-id="${i}">-</a> <span>${a[0].Cart.TheSkus[i].Num}</span><a href="javascript:void(0);" class="fr" data-id="${i}">+</a></div><div class="quantity_text">有货</div></li><li class="li5"><b>¥${picre}</b></li><li class="li6"><a href="javascript:void(0);" data-id="${i}">删除</a></li></ul></div>`
				talPrice += a[0].Cart.TheSkus[i].Num * a[0].Cart.TheSkus[i].PromotionPrice;
			}
			//			console.log("aa")
			$(".jd_cart_list").html(str);
			//			$(".jd_floatbar .checkout span i").html(talPrice.toFixed(2));
		}).done(function() {
			//全选按钮事件
			$(".li1 input").click(function() {
				if($(this).prop("checked")) {
					$(this).parents(".item_list").css("background", "#fff4e8");
				} else {
					$(this).parents(".item_list").css("background", "#fff");
				}
				if($(".li1 input:checked").length == $(".li1 input").length) {
					$(".jd_cart_header input,.jd_floatbar input").prop("checked", true);
				} else {
					$(".jd_cart_header input,.jd_floatbar input").prop("checked", false);
				}

				//改变总价
				var talMoney = 0;
				$(".item_list .li1 input:checked").each(function(i, ele) {
					var ele = $(ele).parents(".li1").siblings(".li5").children("b");
					talMoney += Number(ele.html().substr(1));
				});
				$(".jd_floatbar .checkout span i").html("￥" + talMoney.toFixed(2));

			})
			$(".jd_cart_header input,.jd_floatbar input").click(function() {
				$(".li1 input,.jd_cart_header input,.jd_floatbar input").prop("checked", $(this).prop("checked"));

				if($(this).prop("checked")) {
					$(".jd_cart_list .item_list").css("background", "#fff4e8");
				} else {
					$(".jd_cart_list .item_list").css("background", "#fff");
				}

				//改变总价
				var talMoney = 0;
				$(".item_list .li1 input:checked").each(function(i, ele) {
					var ele = $(ele).parents(".li1").siblings(".li5").children("b");
					talMoney += Number(ele.html().substr(1));
				});
				$(".jd_floatbar .checkout span i").html("￥" + talMoney.toFixed(2));

			})
			//全局删除事件
			$(".jd_floatbar").children("a").click(function() {
				for(var i = 0; i < $(".li1 input:checked").length; i++) {
					del($(".li1 input:checked").eq(i).parents(".li1").siblings(".li6").children("a"));
					i -= 1;
				}
			})
			//数量的操控
			calc($(".item_list").find(".li4 .quantity_form a:eq(0)"), "-");

			calc($(".item_list").find(".li4 .quantity_form a:eq(1)"), "+");

			$(".item_list").find(".li6 a").click(function() {
				del($(this));
			})

			function del(jqObj) {
				var id = jqObj.attr("data-id");
				jqObj.parents(".item_list").remove();
				delete objCookie[id];
				var strCookie = JSON.stringify(objCookie)
				setCookie("cart", strCookie, 7);

				var talMoney = 0;
				$(".item_list .li1 input:checked").each(function(i, ele) {
					var ele = $(ele).parents(".li1").siblings(".li5").children("b");
					talMoney += Number(ele.html().substr(1));
				});
				$(".jd_floatbar .checkout span i").html("￥" + talMoney.toFixed(2));

				//判断cookie是否为空
				if(JSON.stringify(objCookie) == "{}") {
					$(".content .list_wrap").hide();
					$(".content .cart_empty").show();
				} else {
					$(".content .list_wrap").show();
					$(".content .cart_empty").hide();
				}

			}

			function calc(jqObj, cal) {
				jqObj.click(function() {
					if(cal == "+") {
						$(this).siblings("span").html(parseInt($(this).siblings("span").html()) + 1);
					}
					if(cal == "-") {
						$(this).siblings("span").html($(this).siblings("span").html() - 1);
					}
					var money = $(this).siblings("span").html() * $(this).parents(".li4").siblings(".li3").html().substr(1);
					$(this).parents(".li4").siblings(".li5").children("b").html("￥" + money.toFixed(2));

					var talMoney = 0;

					$(".item_list .li1 input:checked").each(function(i, ele) {
						var ele = $(ele).parents(".li1").siblings(".li5").children("b");
						talMoney += Number(ele.html().substr(1));
					});
					$(".jd_floatbar .checkout span i").html("￥" + talMoney.toFixed(2));

					//更新cookie
					var id = $(this).attr("data-id");
					console.log(id)
//					if(objCookie[id]){
//						var id = $(this).attr("data-id");
					console.log(id,objCookie[id])
					objCookie[id] = $(this).siblings("span").html();
					
//					}else{
//						id = parseInt(id);
//					for(var i in objCookie){
//						console.log(i,objCookie[i])
//						if(objCookie[id]){
//						objCookie[id] = $(this).siblings("span").html();
//					}
//					}
//					}
					var strCookie = JSON.stringify(objCookie)
					setCookie("cart", strCookie, 7);

					if(Number($(this).siblings("span").html()) <= 0) {
						del($(this));
					}

					//判断cookie是否为空
					//					if(getCookie("cart")) {
					//						console.log(objCookie);
					//						console.log($(".item_form ll4 span"))
					//					}
					//					if(JSON.stringify(objCookie) != "{}") {
					//						console.log(objCookie);
					//						console.log($(".item_form ll4 span"))
					//						$(".content .list_wrap").hide();
					//						$(".content .cart_empty").show();
					//					} 
					//					else {
					//						$(".content .list_wrap").show();
					//						$(".content .cart_empty").hide();
					//					}

				});
				//				if(){
				//					
				//				}

			}

		}).done(function() {
			if(getCookie("cart")) {
//				console.log(objCookie);
				var data = getCookie("cart");
				data = JSON.parse(data)
				console.log($(".item_form .li4 span"))
				for (var i in data){
				$(".item_form .li4 span").eq(i).html(data[i]);
				}
			}
		})
	}

})
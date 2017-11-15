	var s = '',
		s1 = '',
		s2 = '',
		s3 = '';
	$.ajax({
				type: "get",
				url: "https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00725321&callback=?",
				async: true,
				dataType: "jsonp"
			}).done(
	//家庭量贩开始  
		function(a) {
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

			$.ajax({
				type: "get",
				url: "https://ai.jd.com/General?app=Bi&action=get_sku&groupId=00718507&callback=?",
				async: true,
				dataType: "jsonp"
			}).done(
			function(a) {
				console.log(a)
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
			//			console.log(s1)
			s2 = `<a class="chaoshi_discount_more" href="//chaoshi.jd.com/liangfan" clstag="channel|keycount|3054|strollgoods3_1_1" target="_blank" title="${shuju2.data.more[0].title}" ><img src="${shuju2.data.more[0].picUrl}" data-lazy-img="done" alt="${shuju2.data.more[0].title}" data-webp="no"></a>`
			//			shuju2.data.more[0].picUrl
			//			shuju2.data.more[0].title 电磁炉的地址
			s = s.replace(/{li%%}/, s1)
			s = s.replace(/{aa%%}/, s2)
			// 上半部分的最后一个里 添加一个class名：last
			//			{li1%%} 此处替换下半部分的lI	
			console.log("执行生成")
			s = s.replace(/{li1%%}/, s3);
			$(".mod_container").append(s);
			$(".chaoshi_discount_big").children("li:last").addClass("last");
			
		//家庭量贩结束
	})}).done(
		function () {
		$.ajax({
				type: "get",
				url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368889&callback=?",async: true,dataType: "jsonp"}).done(
		// 品牌特卖开始
		function(b) {
			var s = '',
				s1 = '',
				s2 = '';
				console.log(b);
			s = `<div class="chaoshi_brand grid_c1" id="chaoshi_brand_5" data-id="chaoshi_brand_5" data-async="true" data-elevator="true" data-tpl="chaoshi_brand_tpl">
			<div class="chaoshi_mod_head">
				<h3 class="chaoshi_mod_head_title"> ${shuju3.data.title[0].NAME}</h3>
			</div>
			<div class="chaoshi_brand_row clearfix">
				<a class="chaoshi_brand_today" href="${b.DATA.adData[0].link}" clstag="channel|keycount|3054|today5_1_1" target="_blank" title="1"><img src="${b.DATA.adData[0].pictureUrl}" data-lazy-img="done" alt="1"></a>
				<div class="chaoshi_brand_list chaoshi_brand_big clearfix">{aa1%%}</div>
			</div>
			<div class="chaoshi_brand_row clearfix">
				<div class="chaoshi_brand_list chaoshi_brand_small clearfix">{aa2%%}</div>
				<a class="chaoshi_brand_more" href="${shuju3.data.more[0].url}" clstag="channel|keycount|3054|more5_1_1" target="_blank" title="${shuju3.data.more[0].title}"><img src="${shuju3.data.more[0].picUrl}" data-lazy-img="done" data-webp="no" alt="${shuju3.data.more[0].picUrl}"></a>
			</div>
		</div>`;
			$.ajax({
				type: "get",
				url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368891&callback=?",
				async: true,
				dataType: "jsonp"
			}).done(function(c) {
				for(var i = 0; i < c.DATA.adData.length; i++) {
					//								a.DATA.adData[i]
					s1 += `<a class="chaoshi_brand_item" href="${c.DATA.adData[i].link}" target="_blank" clstag="channel|keycount|3054|bigItem5_${i}"><img src="${c.DATA.adData[i].pictureUrl}" data-lazy-img="done" alt="1" title="1"></a>`

				}
			}).done(
				function(){
				$.ajax({
					type: "get",
					url: "https://ai.jd.com/General?app=Bi&action=get_ad&groupId=00368892&callback=?",
					async: true,
					dataType: "jsonp"
				}).done(
				function(a) {
				for(var i = 0; i < a.DATA.adData.length; i++) {
					s2 += `<a class="chaoshi_brand_item" href="${a.DATA.adData[i].link}" target="_blank" clstag="channel|keycount|3054|smallItem5_0"><img src="${a.DATA.adData[i].pictureUrl}" data-lazy-img="done" alt="" title=""></a>`
				}
			})}).done(function() {
					s = s.replace(/{aa1%%}/, s1);
					s = s.replace(/{aa2%%}/, s2);
					$(".mod_container").append(s);
				//						console.log(s1)
				//// 品牌特卖结束
			}).done(function() {
		//热卖商品开始
		var s = '',
			s1 = '',
			s2 = '',
			s3 = '',
			s4 = '';
		s = `<div class="chaoshi_buy grid_c1 chaoshi_mod" id="chaoshi_buy_6" data-id="chaoshi_buy_6" data-async="true" data-tpl="chaoshi_buy_tpl"><div class="chaoshi_mod_head"><h3 class="chaoshi_mod_head_title chaoshi_buy_title">${shuju4.data.title3[0].NAME}</h3></div><div class="chaoshi_mod_body"><div class="chaoshi_buy_goods goods" data-price-area="done"><div class="chaoshi_buy_goods_list goods_list clearfix" style="width: 4776px; position: absolute; top: 0px; left: -1194px;"><ul class="goods_list_items clearfix">{li1%%}</ul><ul class="goods_list_items clearfix">{li2%%}</ul></div><div class="chaoshi_buy_goods_btns">{aa%%}</div></div></div></div>`;
		console.log(shuju4['data']);
		var len = Math.floor(shuju4.data.goodsBackup.length / 2);
		for(var i = len; i < shuju4.data.goodsBackup.length; i++) {
			//				shuju4.data.goodsBackup[i] 后6张图 构成一个ul 因为价格接口是 从后6开始
			s2 += `
			<li class="J_goods_item goods_item" data-skuid="${shuju4.data.goodsBackup[i].skuId}"><a class="goods_pic" href="//item.jd.com/${shuju4.data.goodsBackup[i].skuId}.html" clstag="channel|keycount|3054|buygoods6_${i}" target="_blank" title="${shuju4.data.goodsBackup[i].title}" ><img class="J_goods_img goods_img" src="${shuju4.data.goodsBackup[i].picUrl}" data-lazy-img="${shuju4.data.goodsBackup[i].picUrl}" alt="${shuju4.data.goodsBackup[i].title}"></a><p class="goods_title" target="_blank" title="${shuju4.data.goodsBackup[i].title}">${shuju4.data.goodsBackup[i].title}</p><p class="goods_desc"></p><p class="goods_priceall clearfix"><span class="J_goods_price goods_price" data-price-id="${shuju4.data.goodsBackup[i].skuId}">¥{价格}</span></p><a class="J_goods_add goods_add" href="javascript:;" clstag="channel|keycount|3054|buygoodsAdd6_2_7" ><i class="goods_add_icon"></i><span class="goods_add_txt">加入购物车</span></a></li>`;
		}
		for(var i = 0; i < len; i++) {
			//				shuju4.data.goodsBackup[i] 开发文档
			s3 += `
			<li class="J_goods_item goods_item" data-skuid="${shuju4.data.goodsBackup[i].skuId}"><a class="goods_pic" href="//item.jd.com/${shuju4.data.goodsBackup[i].skuId}.html" clstag="channel|keycount|3054|buygoods6_${i}" target="_blank" title="${shuju4.data.goodsBackup[i].title}" ><img class="J_goods_img goods_img" src="${shuju4.data.goodsBackup[i].picUrl}" data-lazy-img="${shuju4.data.goodsBackup[i].picUrl}" alt="${shuju4.data.goodsBackup[i].title}"></a><p class="goods_title" target="_blank" title="${shuju4.data.goodsBackup[i].title}">${shuju4.data.goodsBackup[i].title}</p><p class="goods_desc"></p><p class="goods_priceall clearfix"><span class="J_goods_price goods_price" data-price-id="${shuju4.data.goodsBackup[i].skuId}">¥{价格}</span></p><a class="J_goods_add goods_add" href="javascript:;" clstag="channel|keycount|3054|buygoodsAdd6_2_7" ><i class="goods_add_icon"></i><span class="goods_add_txt">加入购物车</span></a></li>`;
		}
		s4 = `<a href="javascript:void(0)" clstag="channel|keycount|3054|buybtn6_1" class="chaoshi_buy_goods_prev">&lt;</a><a href="javascript:void(0)" clstag="channel|keycount|3054|buybtn6_2" class="chaoshi_buy_goods_next">&gt;</a>`;
		s = s.replace(/{li1%%}/, s2);
		s = s.replace(/{li2%%}/, s3);
		s = s.replace(/{aa%%}/, s4)
		$(".mod_container").append(s);
		$.ajax({
			type: "get",
			url: "https://p.3.cn/prices/mgets?type=1&skuIds=J_1030656,J_1909882,J_1006574585,J_1029507,J_1135611,J_3043161,J_1385736,J_918498,J_1241849,J_1304821,J_848852,J_2518087,J_1030656,J_1909882,J_1006574585,J_1029507,J_1135611,J_3043161,J_1385736,J_918498,J_1241849,J_1304821,J_848852,J_2518087&callback=?&_=1510717499485",
			async: true,
			dataType: "jsonp"
		}).done(
			function(a) {
				//						获取价格接口
				var pircelen = $(".goods_list_items").children("li").find(".J_goods_price").length;
				var ojqeryp = $(".goods_list_items").children("li").find(".J_goods_price");
				for(var i = 0; i < pircelen; i++) {
					//							a[i].p 实时价格
					$(ojqeryp[i]).html("¥" + a[i].p);

				}
				//						console.log($(".chaoshi_buy_goods_list").children("ul:first"))
				$(".chaoshi_buy_goods_list").children("ul:first").clone(true).appendTo(".chaoshi_buy_goods_list");
				//;						console.log("clone")
				var i = 0;
				var len = $(".chaoshi_buy_goods_list").children("ul").length;
				var timer = null;
				timer = setInterval(function() {
					start();
					//							console.log("计时器")
				}, 2000);
				$(".chaoshi_buy_goods_list").find("li").hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						start();
						//							console.log("计时器")
					}, 2000);
				})
				$(".chaoshi_buy_goods_btns").find("a").hover(
					function() {
						clearInterval(timer);
					},
					function() {
						timer = setInterval(function() {
							start();
							//							console.log("计时器")
						}, 2000);
					}
				)
				$(".chaoshi_buy_goods_btns").find("a:first").click(function() {
					i -= 2;
					if(i == -2) {
						i = 0;
						$(".chaoshi_buy_goods_list")[0].style.left = -(len - 1) * 1194 + "px";
					}

					start()
				})

				$(".chaoshi_buy_goods_btns").find("a:last").click(function() {
					start();
				})

				function start() {
					//							1194  2388
					i++;
					console.log(len)
					if(i == len) {
						i = 0;
						console.log("执行");
						//								chaoshi_buy_goods_list
						$(".chaoshi_buy_goods_list")[0].style.left = 0 + "px";
					}
					//						.chaoshi_buy_goods_list 开发文档 这个是要移动div的class名
					$(".chaoshi_buy_goods_list").animate({
						"left": -i * 1194
					}, 1500)
				}
			}
		)
		//热卖商品结束

		//热卖结束done处
	})})})
//	})
//	})
//购物车购物接口
//https://cart.jd.com/cart/miniCartServiceNew.action?callback=jQuery5414704&method=GetCart&_=1510815399639
//https://cart.jd.com/cart/miniCartServiceNew.action?callback=?&method=GetCart
$(function() {
			$("#settleup-2014").hover(function() {
				$(this).addClass("hover")
				data();
			}, function() {
				$(this).removeClass("hover")
			})
			//	
			function data() {
				$.get("../js/cartdata.js").done(
					function(a) {
						//			console.log("aaa");
						a = JSON.parse(a);
						//				console.log(a[0].Cart.TheSkus);
						var s = '',
							s1 = '',
							s2 = '',
							s3 = '';
						//			#settleup-content settleup-content
						s = `<div class="spacer"></div><div id="settleup-content"><div class="smt">
				<h4 class="fl">最新加入的商品</h4>
			</div>
			<div class="smc">
				<ul id="mcart-sigle">
				{li%%}
				</ul>
			</div>
			<div class="smb ar">
				<div class="p-total">共<b>6</b>件商品　共计<strong>￥ 608.60</strong></div>
				<span  title="去购物车" id="btn-payforgoods">去购物车</span>
			</div></div>`
						//../index/cart.html
						for(var i = 0; i < a[0].Cart.TheSkus.length; i++) {
							s1 += `<li>      <div class="p-img fl"><a href="//item.jd.com/3378602.html" target="_blank"><img src="//img12.360buyimg.com/n5/${a[0].Cart.TheSkus[i].ImgUrl}" width="50" height="50" alt=""></a></div><div class="p-name fl"><a href="../index/cart.html" title="${a[0].Cart.TheSkus[i].Name}" target="_blank">${a[0].Cart.TheSkus[i].Name}</a></div>      <div class="p-detail fr ar">          <span class="p-price"><strong>￥${a[0].Cart.TheSkus[i].PromotionPrice}</strong>×${a[0].Cart.TheSkus[i].Num}</span>          <br>           <a class="delete" data-id="3378602" data-type="RemoveProduct" href="javascript:void(0)">删除</a>      </div>  
					</li>`;
							$("#shopping-amount").html(i + 1)

						}
						//			console.log(s,s1)
						s = s.replace(/{li%%}/, s1);
						//				console.log($("#settleup-2014").children(".dorpdown-layer"))

						//			$("#settleup-2014").children(".dorpdown-layer").remove(".dorpdown-layer");
						$("#settleup-2014").children(".dorpdown-layer").remove(".prompt");
						$("#settleup-2014").children(".dorpdown-layer").html(s);

					}).done(function() {
						console.log($("#btn-payforgoods"))
						$("#settleup-content").children(".smb").find("span").click(function() {
								if(getCookie("carttxt")) {
									setCookie("carttxt", "", -100);
								}
								console.log("aaa")
								setCookie("carttxt", "../js/cartdata.js", 7);
								location.href = "../index/cart.html";
							})
						})
				}

				//	../index/cart.html
				//	function cartin () {
				//		console.log("aaa")
				//		setCookie("carttxt","../js/cartdata.js",7);
				//		location.href = "../index/cart.html";
				//	}

			})
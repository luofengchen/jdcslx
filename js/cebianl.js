$(function() {
	//生成楼层 
	s = '', s1 = '';
	s = `<div class="chaoshi_lift" id="chaoshi_lift_27" data-forcerender="true" data-async="true" data-tpl="chaoshi_lift_tpl" style="left: 0px; top: 28px; right: auto; display: block;">
			<ul class="class="chaoshi_lift_list">
			{li%%}
			</ul>
		</div>`
	for(var i = 0; i < shuju6.data.liftList.length - 1; i++) {
		//				shuju6.data.liftList 长度
		s1 += `<li class="chaoshi_lift_item chaoshi_lift_item_btn_active" ><a href="javascript:;" class="chaoshi_lift_item_btn" clstag="channel|keycount|3054|elitem27_${i}">${shuju6.data.liftList[i].NAME}</a></li>`
	}
	s1 += `<li class="chaoshi_lift_top chaoshi_lift_item_last"><a href="javascript:;" class="chaoshi_lift_item_btn" clstag="channel|keycount|3054|eltop27_1"><i class="chaoshi_lift_top_icon mod_png"></i>回到顶部</a></li>`
	s = s.replace(/{li%%}/, s1)
	$(".mod_container").append(s);
	$("#chaoshi_lift_27").css({
		"display": "none"
	});
	$(window).scroll(function() {
		var scroll = $('html,body').scrollTop();
		if(scroll < 720) {
			$("#chaoshi_lift_27").fadeOut(1000);
		}
		if(scroll >= 720) {
			$("#chaoshi_lift_27").fadeIn(1000);
			var index = Math.floor(scroll / 720)
			for (let i = 0; i < $(".mod_container").children(".grid_c1").length; i++) {
				var jquerytop = $(".mod_container").children(".grid_c1")[i].offsetTop;
//				console.log($(".mod_container").children(".grid_c1"))
//				console.log($('html,body').scrollTop(),jquerytop)
				if (jquerytop - $('html,body').scrollTop()<= $(window).height()/2 && jquerytop - scroll >=0 ) {
					$("#chaoshi_lift_27").find("li").not(".chaoshi_lift_item_last").eq(i).css({"background":"#ffa133"}).find("a").css({"color":"#fff"})
					$("#chaoshi_lift_27").find("li").not(".chaoshi_lift_item_last").eq(i).siblings().not(".chaoshi_lift_item_last").css({"background":"rgb(255, 255, 255)"}).find("a").css({"color":"#666"});
				}
				
			}
				
		}
//css({"background":background}).siblings().css({"background":"#fff"})
		//337 第一块滚动1057 每块608
	})
//	console.log($("#chaoshi_lift_27").find("li"));
	$("#chaoshi_lift_27").find("li").not(".chaoshi_lift_item_last").bind("click", function() {
		var i = $(this).index();
		var firstscroll = 1057;
		var meikuai = 608;
//		console.log($(this).index())
		$(this).css({"background":"#ffa133","color":"#fff"}).siblings().not(".chaoshi_lift_item_last").css({"background":"rgb(255, 255, 255)","color":"#666"})
		
		var jequerytop = $(".mod_container").children(".grid_c1")[i].offsetTop
		$("html,body").animate({
			scrollTop: jequerytop
		}, 1000)
	})
	$("#chaoshi_lift_27").find(".chaoshi_lift_item_last").click(function  () {
		$("html,body").animate({
			scrollTop: 0
		}, 1000)
	})
})
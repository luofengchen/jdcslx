
$(function  () {
	$(".login_tab_r a").click(function(){
		$(this).addClass("login_mode").parent().siblings(".login_tab_l").children("a").removeClass("login_mode");
		$(".login_box").show().siblings(".qrcode_login").hide();
	});
	
	$(".login_tab_l a").click(function(){
		$(this).addClass("login_mode").parent().siblings(".login_tab_r").children("a").removeClass("login_mode");
		$(".qrcode_login").show().siblings(".login_box").hide();
		
	});
	//laben改变颜色
	$(".login_box .form form .fore1").children("input").focus(function(){
		$(this).siblings("label").css({"background-position":"0 -48px","border-color":"#bdbdbd"}).parent().css("border","1px solid #bdbdbd");
	})
	
	$(".login_box .form form .fore1").children("input").blur(function(){
		$(this).siblings("label").css("background-position","0 0");
	})
	
	$(".login_box .form form .fore2").children("input").focus(function(){
		$(this).siblings("label").css({"background-position":"-48px -48px","border-color":"#bdbdbd"}).parent().css("border","1px solid #bdbdbd");
	})
	
	$(".login_box .form form .fore2").children("input").blur(function(){
		$(this).siblings("label").css("background-position","-48px 0");
	})
	
	
	//拿cookie
	if(getCookie("user")){
		var objCookie=JSON.parse(getCookie("user"));
	}else{
		var objCookie={};
	}
	
	//按enter登录
	$(".fore1 input,.fore2 input").keypress(function(e){
		if(e.keyCode==13){
			foo();
		}
	});
	
	//点击后判断	
	$(".form form .fore4 a").click(foo)
	
	function foo(){
		//判断账号是否为空
		if($(".fore1 input").val()==""){
			$(".fore1 label").css({"background-position":"0 -96px","border-color":"#e4393c"}).parent().css("border","1px solid #e4393c");
			$(".error").css("visibility","visible");
		}else{
			$(".fore1 label").css({"background-position":"0 0","border-color":"#bdbdbd"}).parent().css("border","1px solid #bdbdbd");
			$(".error").css("visibility","hidden");
		}
		
		//判断密码是否为空
		if($(".fore2 input").val()==""){
			$(".fore2 label").css({"background-position":"-48px -96px","border-color":"#e4393c"}).parent().css("border","1px solid #e4393c");
			$(".error").css("visibility","visible");
		}else{
			$(".fore2 label").css({"background-position":"-48px 0","border-color":"#bdbdbd"}).parent().css("border","1px solid #bdbdbd");
			$(".error").css("visibility","hidden");
		}
		
		//判断和cookie的对比
		if($(".fore1 input").val()!="" && $(".fore2 input").val()!=""){
			if(objCookie[escape($(".fore1 input").val())]==$(".fore2 input").val()){
				location.href="../index/index.html?user="+escape($(".fore1 input").val());
			}else{
				$(".fore2 input").val("");
				$(".error").css("visibility","visible");
			}
		}
		
		
	}
	
	
	
	
	
	
	
	
})

	
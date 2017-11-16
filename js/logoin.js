$(function  () {
	if (getCookie("user")) {
		var ocoos = JSON.parse(getCookie("user"));
		ocoos = {};
	}else{
		var ocoos = {};
	}
	$(".username,.psw,.confirm,.tel,.ver_code").children("input").focus(function(){
		$(this).parent().next().css("visibility","visible");
	});
	
	$(".username,.psw,.confirm,.tel,.ver_code").children("input").blur(function(){
		$(this).parent().next().css("visibility","hidden");
	});
//	if () {
//		
//	}
	var reg1=/^[\u4300-\u9fa5\-\w]{3,}$/;//账号
	var reg2=/^[\$\.a-zA-Z0-9_-]{6,20}$/;//密码
	var reg3=/^[\w\-\.]+\@[\w]+\.[\w]{2,4}$/;//邮箱
	var reg4=/^((13[0-9])|(15[^4,\D])|(17[^4,\D])|(18[0-9]))\d{8}$/;//手机
	
	rand();
	$(".ver_code span").click(function(){
		rand();
	})
	
	function rand(){
		var arr=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k",0,1,2,3,4,5,6,7,8,9,"l","m","n","o","p","q","r","s","t",0,1,2,3,4,5,6,7,8,9,"u","v","w","x","y","z","A","B","C",0,1,2,3,4,5,6,7,8,9,"D","E","F","G","H","I","J","K","L",0,1,2,3,4,5,6,7,8,9,"M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
		var ranStr="";
		for(var i=0;i<4;i++){
			ranStr+=arr[Math.floor(Math.random()*arr.length)];
			console.log(ranStr)
			$(".ver_code span").html(ranStr);
			$(".ver_code input").val(ranStr)
		}
	}
	$(".username input").focusout(function  () {
		if (ocoos[escape($(".username input").val())]) {
			alert("用户名已被注册！");
			$(".username b").hide();
		}
		hideobj($(this),reg1);
	})
	$(".phone_code span,.ver_code span").on("selectstart",function(){
		return false;
	})
	
	var code="";
	$(".phone_code span").click(function(){
		console.log("aaa")
		if($(this).parent(".phone_code").siblings(".tel").children("input").val()==""){
			$(this).parent(".phone_code").siblings(".tel").css("border","solid 1px #e22").next().hide().next().show();
		}else{
				code="";
				for(var i=0;i<6;i++){
					var random=Math.floor(Math.random()*10);
					code+=random;
				}
				console.log(code)
				$(this).siblings("input").val(code);
			}
		})
		
//	});
	
	
	//注册提交
	console.log($("form").children("input"))
	$("form").children("input").click(function(){
		if($(".username input").val()!=""&&$(".psw input").val()!=""&&$(".confirm input").val()==$(".psw input").val()){
			console.log("提交成功")
			//验证码匹配
	var str=$(".ver_code span").html().toUpperCase();
			if($(".ver_code input").val().toUpperCase()==str){
				if($(".phone_code input").val()==code){
					
					ocoos[escape($(".username input").val())]=$(".psw input").val();
					console.log(getCookie("user"));
					if (getCookie("user")) {
						var cookies = getCookie("user");
						console.log("cookies")
						setCookie("user",cookies,-100);
					}
					console.log(ocoos)
					var strCookie=JSON.stringify(ocoos);
					console.log(strCookie)
					setCookie("user",strCookie,7);
					location.href="../index/index.html";
				}else{
					alert("手机验证码不正确，请重新输入");
					return;
				}
			}else{
				alert("验证码不正确，请重新输入");
				return;
			}
		}
		
	})
	
	
	
	
	function hideobj(obj,regname){
		if(obj.val()!=""){
			if(regname.test(obj.val())){
				obj.siblings("b").show().parent().css("border","solid 1px #ddd").next().show().next().hide();
			}else{
				obj.siblings("b").hide().parent().css("border","solid 1px #e22").next().hide().next().show();
			}
		}else{
			obj.siblings("b").hide().parent().css("border","solid 1px #ddd").next().show().next().hide();
		}
	}
	
	
	
})

































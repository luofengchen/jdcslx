$(function() {
	var username = location.search.split("user=")[1];
	if (username != undefined) {
	if(getCookie("user")) {
		var cookises = JSON.parse(getCookie("user"));
		console.log(cookises)
		var jqea = $("#ttbar-login").find("a");
		var cartjq = $("#navWrap").find(".ul-r").find(".li1").find("a");
		
		for(var i in cookises) {
			if(username == i) {
				alert("欢迎用户" + username + "来到京东");
				$(jqea[0]).html("你好，" + username + "登录成功");
				$(cartjq[0]).html("你好，" + username + "登录成功")
				$(jqea[1]).hide();
				$(cartjq[1]).hide();
			}

		}
	}
	}else{
		if(getCookie("user")) {
			console.log(cookises)
		var cookises = JSON.parse(getCookie("user"));
		console.log(cookises)
		var jqea = $("#ttbar-login").find("a");
		var cartjq = $("#navWrap").find(".ul-r").find(".li1").find("a");
		for(var i in cookises) {
				alert("欢迎用户" + i + "来到京东");
				$(jqea[0]).html("你好，" + i + "登录成功")
				$(cartjq[0]).html("你好，" + i + "登录成功")
				$(jqea[1]).hide();
				$(cartjq[1]).hide();
		}
		}else{
			alert("请注册")
		}
	}
	
	
})
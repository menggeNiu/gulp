// 点击X，删除所对应地址
$('.adname i').click(function(){
	$(this).parent().parent().remove();
});
// 设置弹出框背景的高度
$('.popmenu').css({
	height:$(document).height()+'px'
});
$('.addnew').click(function(){
	$('.popmenu').show();
})
$('.pop i').click(function(){
	$('.popmenu').hide();
})
// 选择国家
$('.ctselect ulbox div').text($('.ctselect ulbox ul li').eq(0).text());
$('.ctselect .btn').click(function(e){
	var ev=e||window.event;
	ev.stopPropagation();
	$('.ctselect .ulbox ul').show();
	$('.ctselect .ulbox').css({
		height:$('.ctselect .ulbox li').height()*5+10+'px'
	});
	$('.ctselect .ulbox').addClass('active');
	$('.ctselect .ulbox').scroll(function(){
		$(this).find('ul').css({
			top:-$(this).scrollTop()+'px'
		});
	});
	$(document).click(function(){
		console.log('a')
		$('.ctselect .ulbox ul').hide();
		$('.ctselect .ulbox').css('height','29px');
	});
	$('.ctselect .ulbox li').click(function(){
		$('.ctselect .ulbox ul').hide();
		$('.ctselect .ulbox').css('height','29px');
		$('.ctselect .ulbox div').text($(this).text());
	})
});
// 选择省份
$('.prselect ulbox div').text($('.prselect ulbox ul li').eq(0).text());
$('.prselect .btn').click(function(e){
	var ev=e||event;
	ev.stopPropagation();
	$('.prselect .ulbox ul').show();
	$('.prselect .ulbox').css({
		height:$('.prselect .ulbox li').height()*5+10+'px'
	});
	$('.prselect .ulbox').addClass('active');
	$('.prselect .ulbox').scroll(function(){
		$(this).find('ul').css({
			top:-$(this).scrollTop()+'px'
		});
	});
	$(document).click(function(){
		$('.prselect .ulbox ul').hide();
		$('.prselect .ulbox').css('height','29px');
	});
	$('.prselect .ulbox li').click(function(){
		$('.prselect .ulbox ul').hide();
		$('.prselect .ulbox').css('height','29px');
		$('.prselect .ulbox div').text($(this).text());
	})
});
//对应模块出现

$('.centerbox .list ul li').eq(0).click(function(){
	$('.content').hide();
	$('.content1').show();
});
$('.centerbox .list ul li').eq(1).click(function(){
	$('.content').hide();
	$('.content2').show();
});
$('.centerbox .list ul li').eq(3).click(function(){
	$('.content').hide();
	$('.content3').show();
})
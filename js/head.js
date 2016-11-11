// 设置弹出框背景的高度
$('.loginpop').css({
	height:$(document).height()+'px'
});
$('.zhuce').click(function(){
	$('.loginpop').show();
});
//注册按钮
$('.zhuce').click(function(){
	$('.loginpop').show();
	$('.loginpop .firstres').show();
	$('.loginpop').click(function(){
		$(this).hide();
		$('.secondres').hide();
	})
});
$('.firstres').click(function(e){
	var ev = e||window.event;
	ev.stopPropagation();
});
$('.creat').click(function(){
	$('.firstres').hide();
	$('.secondres').show();
		
});
$('.firstdown').click(function(){
	$('.firstres').hide();
	$('.goto').show();
})
$('.secondres').click(function(e){
	var ev = e||window.event;
	ev.stopPropagation();
	$('.loginpop').click(function(){
		$(this).hide();
		$('.secondres').hide();
	})
});
//登录
$('.denglu').click(function(e){
	var ev = e||window.event;
	ev.stopPropagation();
	$('.loginpop').show();
	$('.loginpop .goto').show();
	$('.loginpop').click(function(){
		$(this).hide();
		$('.goto').hide();
	})
});
$('.goto').click(function(e){
	var ev = e||window.event;
	ev.stopPropagation();
	console.log('a');
	$('.loginpop').click(function(){
		$(this).hide();
	})
});
$('.zhucea').click(function(){
	$('.goto').hide();
	$('.firstres').show();
})
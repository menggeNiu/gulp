$('.biggoods img').attr('src',$('.goodsdetails ul li').eq(0).find('img').attr('src')); 
$('.big img').attr('src',$('.goodsdetails ul li').eq(0).find('img').attr('src'));
$('.goodsdetails ul li').click(function(){
	$('.biggoods img').attr('src',$(this).eq(0).find('img').attr('src')); 
	$('.big img').attr('src',$(this).eq(0).find('img').attr('src')); 
});
$('.biggoods').mouseover(function(){
	$('.big').show();
	$('.turnbig').show();
	$(document).mousemove(function(e){
		var ev = e||window.element;
		var distancex = ev.clientX-$('.biggoods').position().left-$('.turnbig').width()/1.5;
		var distancey = ev.clientY-$('.biggoods').position().top-$('.turnbig').height();
		var maxw = $('.biggoods').width()-$('.turnbig').width();
		var maxy = $('.biggoods').height()-$('.turnbig').height();
		if (distancex<=0) {
				distancex=0;
			}else if (distancex>=maxw) {
				distancex=maxw;
			};
			if (distancey<=0) {
				distancey=0;
			}else if (distancey>=maxy) {
				distancey=maxy;
			}
			var screx = distancex/maxw;
			var screy = distancey/maxy;
			$('.big img').css({
				left:-screx*$('.big').width()+'px',
				top:-screy*$('.big').height()+'px'
			})
			$('.turnbig').css({
				left:distancex+'px',
				top:distancey+'px'
			});
	});
	$('.biggoods').mouseleave(function(){
		$('.big').hide();
		$('.turnbig').hide();
	})
});

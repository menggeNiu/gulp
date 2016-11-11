//轮播图
var timer = null;
var i = 0;
function bo(){
	timer = setInterval(function(){
	i++;
	if (i>=3) {
		i=0;
	}
	$('.baginner ul li').css('opacity','0');
	$('.baginner ul li').eq(i).animate({
		opacity:'1'
	},1000);
	$('.baginner ol li').removeClass('active');
	$('.baginner ol li').eq(i).addClass('active');
	},2000);
};
bo();
$('.baginner ol li').click(function(){
	$('.baginner ol li').removeClass('active');
	$(this).addClass('active');
	$('.baginner ul').animate({
		left:-$('.baginner ul li').width()*$(this).index()+'px'
		},500);
	i = $(this).index();	
	});
$('.baginner ul').mouseover(function(){
	clearInterval(timer);
});
$('.baginner ul').mouseleave(function(){
		 bo();
});
$(window).resize(function(){
	$('.baginner ul li').css({
width:$('.baginner').width()+'px'
});
	$('.baginner ul').css({
	width:$('.baginner ul li').width()*$('.baginner ul li').length
});
})
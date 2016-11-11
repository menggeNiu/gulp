$('.dong ul li').css({
	width:$(document).width()/4+'px'
})
$('.dong ul').html($('.dong ul').html()+$('.dong ul').html());
$('.dong ul').css({
	width:$('.dong ul li').length*$('.dong ul li').width()+'px'
});
function leftdong(){
	if ($('.dong ul').position().left<=-$('.dong ul').width()/2) {
		$('.dong ul').css('left','0');
	}
	$('.dong ul').animate({
		left:'-=10px',
	},100,leftdong)
};
leftdong();
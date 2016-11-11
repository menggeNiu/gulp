$('.plus').click(function(){
	var total = parseInt($(this).parent().parent().next('td').find('.tolprice').text());
	var num = parseInt($(this).parent().find('.numspan').text());
	var single = total/num;
	$(this).parent().find('.numspan').text(num+1);
	$(this).parent().parent().next('td').find('.tolprice').text(total+total/num);
});
$('.minus').click(function(){
	var total = parseInt($(this).parent().parent().next('td').find('.tolprice').text());
	var num = parseInt($(this).parent().find('.numspan').text());
	var single = total/num;
	$(this).parent().find('.numspan').text(num-1);
	console.log(num)
	if(num<1){
		$(this).parent().parent().next('td').find('.tolprice').text('0');
		$(this).parent().find('.numspan').text('0');
	}
	if(num>=1){
		$(this).parent().parent().next('td').find('.tolprice').text(total-total/num);
	}
	
});
// 上面
$('.continue').click(function(){
	$('.up1').hide();
	$('.up2').show();
	$('.pay').show();
	$('.songname').text($('.name').val());
	$('.songcall .call').text($('.company').val());
	$('.songdizhi').text($('.country').val()+$('.province').val()+$('.city').val()+$('.street1').val()+$('.street2').val());
	$('.headdowns span.block').eq(0).css({
		background:'#c29bb1'
	});
	$('.headdowns span.block').eq(1).css({
		background:'#c29bb1'
	});
	$('.headdowns span.block').eq(2).css({
		background:'#c29bb1'
	});
	$('.sureinner .line1').text('您的订单已经准备好');
	$('.sureinner .line2').text('请确认以下信息');
})
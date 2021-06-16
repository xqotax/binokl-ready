function scrolll() {
  	if (window.pageYOffset<100){
		$('#div_0').css('background','rgba(16, 24, 32, 1)');
	} else { $('#div_0').css('background','rgba(16, 24, 32, 0.5)');}
}
window.addEventListener('scroll', scrolll);
$( "#div_0" ).mouseover(function(){
	$('#div_0').css('background','rgba(16, 24, 32, 1)');
	window.removeEventListener('scroll', scrolll);
});
$( "#div_0" ).mouseout(function(){
	$('#div_0').css('background','rgba(16, 24, 32, 0.5)');
	window.addEventListener('scroll', scrolll);
	if (window.pageYOffset<100){
		$('#div_0').css('background','rgba(16, 24, 32, 1)');}
});
setInterval(()=>{
	if(window.pageYOffset>1000){
		$('.o2t-element--hidden').css('opacity', 1);
	};
	if(window.pageYOffset<1000){
		$('.o2t-element--hidden').css('opacity', 0);
	};
}, 1000)
$('.navigation').click(function(){
	$('.popup').css({'visibility':'visible','opacity':'1'});
	$('#div_0').css({'visibility':'hidden','opacity':'0'});
});
$('.close_popup').click(function(){
	$('.popup').css({'visibility':'hidden','opacity':'0'});
	$('#div_0').css({'visibility':'visible','opacity':'1'});
});
$('.but_popup').click(function(){
	$('.popup').css({'visibility':'hidden','opacity':'0'});
	$('#div_0').css({'visibility':'visible','opacity':'1'});
});
const mediaQuery = window.matchMedia('(max-width: 850px)')
if (mediaQuery.matches) {
  setInterval(()=>{
		$('#div_0').css('background','rgba(16, 24, 32, 0.5)');
		window.addEventListener('scroll', scrolll);
		if (window.pageYOffset<80){
			$('#div_0').css('background','rgba(16, 24, 32, 1)');}
	}, 3000) 
};
$('.text_450_sorts').click(function(){
	$('.text_5').css({'visibility':'visible','opacity':'1'});

	$('.text_5_main').css({'visibility':'visible','opacity':'1'});
	$('#div_5').css({'height':'530px'});
	$('#three_in_one').css({'top':'-50px'});
	$('.text_450_sorts').css({'visibility':'hidden','opacity':'0'});
	$('#hid').css({'visibility':'visible','opacity':'1', 'top':'-40px'});
});
$('#hid').click(function(){
	$('.text_5').css({'visibility':'hidden','opacity':'0'});

	$('.text_5_main').css({'visibility':'hidden','opacity':'0'});
	$('#div_5').css({'height':'300px'});
	$('#three_in_one').css({'top':'-230px'});
	$('.text_450_sorts').css({'visibility':'visible','opacity':'1'});
	$('#hid').css({'visibility':'hidden','opacity':'0', 'top':'0px'});
});

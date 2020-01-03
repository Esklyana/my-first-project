$(document).ready(function(){

	$('.burger').click(function(){
		if('none' == $('.absolute').css('display')){
			$('.absolute').css('display', 'flex');
		} else {
			$('.absolute').css('display', 'none');
		}
	});

});
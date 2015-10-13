$(document).ready(function() {

	var ryuStatus = 'still';

	$(document).keydown(function(key) {
		if(key.which == 88) {
			
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
			$('.ryu-cool').show();
		}
		
	});

	$(document).on('keyup',function(event){
		if (event.which == 88){
			$('.ryu-cool').hide();

			if (ryuStatus == 'ready') {
				$('.ryu-ready').show();
			} else if (ryuStatus == 'still') {
				$('.ryu-still').show();
			}
			

		};
	});				

	$('.ryu').mouseenter(function(){
		ryuStatus = 'ready';
		$('.ryu-still').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	})

	.mouseleave(function(){
		ryuStatus = 'still';
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
		$('.ryu-still').show();
	})

	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '560px');
			});	
	})

	.mouseup(function(){
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});


});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();
}
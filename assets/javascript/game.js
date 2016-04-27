$( document ).ready(function() {


window.onload = function (){
	$('.charCard').click(game.choose);
	$('.charCard').hover(function(){
		$(this).animate({borderWidth: 5}, 'fast');
	}, function(){
		$(this).animate({borderWidth: 0}, 'fast');
	}
);
};


var binks = {
	health: 75,
	attack: 15
};


var game = {
	choose:function() {
	}
};

})
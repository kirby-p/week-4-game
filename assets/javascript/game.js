$( document ).ready(function() {


window.onload = function (){
	$('#jarBinks').click(game.test);
};

$('img').hover(
	function(){
		$(this).animate({borderWidth: 5}, 'fast');
	},
	function(){
		$(this).animate({borderWidth: 0}, 'fast');
	}
);

var game = {
	test:function() {
		alert("You have chosen Jar Jar Binks!");
	}
};

})
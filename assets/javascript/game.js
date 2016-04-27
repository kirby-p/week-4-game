window.onload = function (){
	$('.charCard').on('click', game.choose);
	// $('#grievous').on('click', game.choose);
	// $('#vader').on('click', game.choose);
	// $('#rey').on('click', game.choose);

	$('.charCard').hover(function(){
		$(this).animate({borderWidth: 5}, 'fast');
	}, function(){
		$(this).animate({borderWidth: 0}, 'fast');
	});
};


var binks = {
	health: 75,
	attack: 15,
	counter: 5
};


var game = {
	choose:function() {
		var id = this.id;
		console.log(id);
	}
};


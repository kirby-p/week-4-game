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
		$('#chooseTitle').replaceWith('<h2>Your Character</h2>');
		var playerID = this.id;
		if(playerID == 'binks'){
			$('#chooseTitle').replaceWith($('#binks'));
			$('#chooseEnemy').replaceWith($('#grievous, #vader, #rey'));
			$('#grievous, #vader, #rey').toggleClass('enemiesToChoose');
		}
		else if(playerID == 'grievous'){
			$('#chooseTitle').replaceWith($('#grievous'));
			$('#chooseEnemy').replaceWith($('#binks, #vader, #rey'));
			$('#binks, #vader, #rey').toggleClass('enemiesToChoose');
		}
		else if(playerID == 'vader'){
			$('#chooseTitle').replaceWith($('#vader'));
			$('#chooseEnemy').replaceWith($('#binks, #grievous, #rey'));
			$('#binks, #grievous, #rey').toggleClass('enemiesToChoose');
		}
		else if(playerID == 'rey'){
			$('#chooseTitle').replaceWith($('#rey'));
			$('#chooseEnemy').replaceWith($('#binks, #grievous, #vader'));
			$('#binks, #grievous, #vader').toggleClass('enemiesToChoose');
		}

	}
};


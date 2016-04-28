// window.onload = function (){
// 	// $('.charCard').on('click', game.choosePlayer);
// 	// $('.charCard').hover(function(){
// 	// 	$(this).animate({borderWidth: 5}, 'fast');
// 	// }, function(){
// 	// 	$(this).animate({borderWidth: 0}, 'fast');
// 	// });

// };

$('#binks').on('click', function(){
	$('#chooseTitle').replaceWith('<h2>Your Character</h2>', $('#binks'));
	$('#binks').removeClass('charCard').addClass('playerSelection');
	$('#chooseEnemy').replaceWith($('#grievous, #vader, #rey'));
	$('#grievous, #vader, #rey').removeClass('charCard').addClass('enemiesToChoose');
	$('#binks').attr('id', 'binksPlayer');
	$('#grievous').attr('id', 'grievousEnemy');
	$('#vader').attr('id', 'vaderEnemy');
	$('#rey').attr('id', 'reyEnemy');
	chooseEnemy(this.id);				
});

$('#grievous').on('click', function(){
	$('#chooseTitle').replaceWith('<h2>Your Character</h2>', $('#grievous'));
	$('#grievous').removeClass('charCard').addClass('playerSelection');
	$('#chooseEnemy').replaceWith($('#binks, #vader, #rey'));
	$('#binks, #vader, #rey').removeClass('charCard').addClass('enemiesToChoose');
	$('#binks').attr('id', 'binksEnemy');
	$('#grievous').attr('id', 'grievousPlayer');
	$('#vader').attr('id', 'vaderEnemy');
	$('#rey').attr('id', 'reyEnemy');
	chooseEnemy(this.id);				
});

$('#vader').on('click', function(){
	$('#chooseTitle').replaceWith('<h2>Your Character</h2>', $('#vader'));
	$('#vader').removeClass('charCard').addClass('playerSelection');
	$('#chooseEnemy').replaceWith($('#binks, #grievous, #rey'));
	$('#binks, #grievous, #rey').removeClass('charCard').addClass('enemiesToChoose');
	$('#binks').attr('id', 'binksEnemy');
	$('#grievous').attr('id', 'grievousEnemy');
	$('#vader').attr('id', 'vaderPlayer');
	$('#rey').attr('id', 'reyEnemy');
	chooseEnemy(this.id);				
});

$('#rey').on('click', function(){
	$('#chooseTitle').replaceWith('<h2>Your Character</h2>', $('#rey'));
	$('#rey').removeClass('charCard').addClass('playerSelection');
	$('#chooseEnemy').replaceWith($('#binks, #grievous, #vader'));
	$('#binks, #grievous, #vader').removeClass('charCard').addClass('enemiesToChoose');
	$('#binks').attr('id', 'binksEnemy');
	$('#grievous').attr('id', 'grievousEnemy');
	$('#vader').attr('id', 'vaderEnemy');
	$('#rey').attr('id', 'reyPlayer');	
	chooseEnemy(this.id);				
});

function chooseEnemy(result) {
	if(result == 'binksPlayer'){
		$('#grievousEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#grievousEnemy'));
			$('#grievousEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});
		$('#vaderEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#vaderEnemy'));
			$('#vaderEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});
		$('#reyEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#reyEnemy'));
			$('#reyEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});		
	}
	else if(result == 'grievousPlayer'){
		$('#binksEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#binksEnemy'));
			$('#binksEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});		
		$('#vaderEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#vaderEnemy'));
			$('#vaderEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});
		$('#reyEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#reyEnemy'));
			$('#reyEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});		
	}
	else if(result == 'vaderPlayer'){
		$('#binksEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#binksEnemy'));
			$('#binksEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});		
		$('#grievousEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#grievousEnemy'));
			$('#grievousEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});
		$('#reyEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#reyEnemy'));
			$('#reyEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});		
	}
	else if(result == 'reyPlayer'){
		$('#binksEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#binksEnemy'));
			$('#binksEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});		
		$('#grievousEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#grievousEnemy'));
			$('#grievousEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});
		$('#vaderEnemy').on('click', function(){
			$('#currentEnemy').replaceWith($('#vaderEnemy'));
			$('#vaderEnemy').removeClass('enemiesToChoose').addClass('enemySelection');
		});		
	}
}
// var game = {
// 	choosePlayer:function() {
// 		var playerID = this.id;
// 		$('#binks').on('click', function(){
// 			$('#chooseTitle').replaceWith($('#binks'));
// 			$('#binks').removeClass('charCard').addClass('playerSelection');
// 			$('#chooseEnemy').replaceWith($('#grievous, #vader, #rey'));
// 			$('#grievous, #vader, #rey').removeClass('charCard').addClass('enemiesToChoose');		

// 		});
		// if(playerID == 'binks'){
		// 	$('#chooseTitle').replaceWith($('#binks'));
		// 	$('#binks').removeClass('charCard').addClass('playerSelection');
		// 	$('#chooseEnemy').replaceWith($('#grievous, #vader, #rey'));
		// 	$('#grievous, #vader, #rey').removeClass('charCard').addClass('enemiesToChoose');
		// }
		// else if(playerID == 'grievous'){
		// 	$('#chooseTitle').replaceWith($('#grievous'));
		// 	$('#grievous').removeClass('charCard').addClass('playerSelection');
		// 	$('#chooseEnemy').replaceWith($('#binks, #vader, #rey'));
		// 	$('#binks, #vader, #rey').toggleClass('enemiesToChoose');
		// }
		// else if(playerID == 'vader'){
		// 	$('#chooseTitle').replaceWith($('#vader'));
		// 	$('#vader').removeClass('charCard').addClass('playerSelection');
		// 	$('#chooseEnemy').replaceWith($('#binks, #grievous, #rey'));
		// 	$('#binks, #grievous, #rey').toggleClass('enemiesToChoose');
		// }
		// else if(playerID == 'rey'){
		// 	$('#chooseTitle').replaceWith($('#rey'));
		// 	$('#rey').removeClass('charCard').addClass('playerSelection');
		// 	$('#chooseEnemy').replaceWith($('#binks, #grievous, #vader'));
		// 	$('#binks, #grievous, #vader').toggleClass('enemiesToChoose');
		// }

// 		$('.enemiesToChoose').on('click', game.chooseEnemy);

// 	},

// 	chooseEnemy:function() {
// 		$('#chooseTitle').replaceWith('<h2>Your Character</h2>');
// 		var enemyID = this.id;
// 		$('enemyID').removeClass('enemiesToChoose');
// 		// if(enemyID == 'binks'){

// 		// }
// 		// else if(enemyID == 'grievous'){
// 		// }
// 		// else if(enemyID == 'vader'){
// 		// }
// 		// else if(enemyID == 'rey'){
// 		// }
// 	}

// };
// 	$('.charCard').on('click', game.choosePlayer());



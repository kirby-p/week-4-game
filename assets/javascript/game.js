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
});

$('#grievous').on('click', function(){
	$('#chooseTitle').replaceWith('<h2>Your Character</h2>', $('#grievous'));
	$('#grievous').removeClass('charCard').addClass('playerSelection');
	$('#chooseEnemy').replaceWith($('#binks, #vader, #rey'));
	$('#binks, #vader, #rey').toggleClass('enemiesToChoose');
});

$('#vader').on('click', function(){
	$('#chooseTitle').replaceWith('<h2>Your Character</h2>', $('#vader'));
	$('#vader').removeClass('charCard').addClass('playerSelection');
	$('#chooseEnemy').replaceWith($('#binks, #grievous, #rey'));
	$('#binks, #grievous, #rey').toggleClass('enemiesToChoose');
});

$('#rey').on('click', function(){
	$('#chooseTitle').replaceWith('<h2>Your Character</h2>', $('#rey'));
	$('#rey').removeClass('charCard').addClass('playerSelection');
	$('#chooseEnemy').replaceWith($('#binks, #grievous, #vader'));
	$('#binks, #grievous, #vader').toggleClass('enemiesToChoose');
});

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
// 		// 	console.log('meesa jar jar binks');

// 		// }
// 		// else if(enemyID == 'grievous'){
// 		// 	console.log('i\'m grievous, bitch');
// 		// }
// 		// else if(enemyID == 'vader'){
// 		// 	console.log('i am your father');
// 		// }
// 		// else if(enemyID == 'rey'){
// 		// 	console.log('i will fuck you up');
// 		// }
// 	}

// };
// 	$('.charCard').on('click', game.choosePlayer());



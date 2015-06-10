module.exports = function() {
	var gameService = {
		games: []
	};

	gameService.addGame = function(templateName, minPlayers, maxPlayers) {
		var game = {};

		game.templateName = templateName;
		game.minPlayers = minPlayers;
		game.maxPlayers = maxPlayers;

		games.push(game);
	}
};
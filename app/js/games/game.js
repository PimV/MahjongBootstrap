var name = "game";

var gamesApp = angular.module(name, []);

gamesApp.service('GameService', [require('./gameService')]);
gamesApp.controller('GameService', [require('./gameService')]);
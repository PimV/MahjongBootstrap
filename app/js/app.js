require('angular/angular');
require('angular-ui-bootstrap/ui-bootstrap');
require('./games/game');

var UIRouter = require('angular-ui-router');
var globals = require('./globals');

var app = angular.module(globals.appName, [
	UIRouter,
	'ui.bootstrap',
	'game'
	]);

app.config(require('./routes'));
app.constant('settings', globals);

require('../directives/base')(globals);
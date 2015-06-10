module.exports = function(globals) {
	angular.module(globals.appName)
	.directive('topNavigation', require('./top-navigation'));
};
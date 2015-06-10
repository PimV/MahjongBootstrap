module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home/index.html',
		title: 'Home'
	});

	$stateProvider.state('test', {
		url: '/test',
		templateUrl: 'views/test/index.html',
		title: 'Test'
	});
};
module.exports = function($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);

	$urlRouterProvider.otherwise('/');

	$stateProvider.state('home', {
		url: '/',
		templateUrl: 'views/home/index.html',
		title: 'Home'
	});

	$stateProvider.state('games', {
		url: '/games',
		templateUrl: 'views/games/index.html',
		title: 'Games'
	});

	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'views/login/index.html',
		title: 'Login'
	});
};
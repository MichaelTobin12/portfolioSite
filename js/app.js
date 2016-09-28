angular.module('portfolio', ['portfolio.controllers', 'portfolio.filters','portfolio.services',
 'ngRoute','ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/')
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: '../views/main.html',
			controller: 'mainPageController',
			controllerAs: 'mainCtrl'
		})
        .state('projects', {
			url: '/projects',
			templateUrl: '../views/projects.html',
			controller: 'projectController',
			controllerAs: 'projectCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: '../views/about.html',
			controller: 'aboutController',
			controllerAs: 'aboutCtrl'
		})
		.state('projects/:id', {
			url: '/projects/:id',
			templateUrl: '../views/projectSingle.html',
			controller: 'projectSingleController',
			controllerAs: 'projectSingleCtrl'
		})

}])

var portfolio = angular.module('portfolio.controllers', [])

.controller('mainPageController', ['$scope', '$state', "Projects",
	function($scope, $state, Projects) {
        $scope.projects = Projects.all();

        $scope.number = 3;
        $scope.getNumber = function(num) {
            return new Array(num);
        }

	}
])

.controller('projectController', ['$scope', '$state', '$stateParams', 'Projects',
	function($scope, $state, $stateParams, Projects) {
        $scope.allProjects = Projects.all();

	}
])

.controller('projectSingleController', ['$scope', '$state', '$stateParams', 'Projects',
	function($scope, $state, $stateParams, Projects) {
        $scope.project = Projects.get($stateParams.id);

        }
])

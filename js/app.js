var app = angular.module("app", ["ionic"]);	//ionic include ui.route

app.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/app/blog-index");

	$stateProvider.state('app', {
		url: "/app",
		abstract: true,						// abstract: true 表明此状态不能被显性激活，只能被子状态隐性激活
		views: {
			"index-view": {
				templateUrl: "templates/menu.html",
				controller: "app_ctrl"
			}
		}
	});

	$stateProvider.state("app.blog-index", {
		url: "/blog-index",
		views: {
			"menu-with-view": {
				templateUrl: "templates/blog-index.html",
				controller: "blog_lst_ctrl"
			}
		}
	});

	$stateProvider.state("app.blog-detail", {
		url: "/blog-detail/:id",
		views: {
			"menu-with-view": {
				templateUrl: "templates/blog-detail.html",
				controller: "blog_detail_ctrl"
			}
		}
	});
});

app.controller("loading_ctrl", function ($scope, $ionicLoading) {
	$scope.show = function () {
		$ionicLoading.show({
			template: "Loading ..."
		});
	};

	$scope.hide = function () {
		$ionicLoading.hide();
	};
});

app.controller("app_ctrl", function ($scope, $ionicModal, $timeout) {

	$scope.login_data = {};

	$ionicModal.fromTemplateUrl("templates/login.html", {
		scope: $scope
	}).then(function (modal) {
		$scope.modal = modal;	
	});

	$scope.show_login_page = function () {
		$scope.modal.show();
	};

	$scope.close_login_page = function () {
		$scope.modal.hide();
	};

	$scope.login = function () {
		console.log("Doing login", $scope.login_data);

		//TODO MORE
		$timeout(function () {
			$scope.close_login_page();		
		}, 1000);
	};
});

app.controller("blog_lst_ctrl", function ($scope) {
	$scope.blog_list = [
		{title: "hello, welcome ...", id: 1},
		{title: "my first blog", id: 2},
		{title: "abc ...", id: 3},
		{title: "android with html5", id: 4},
		{title: "ios with html5", id: 5},
		{title: "webapp server with lisp", id: 6},
		{title: "angularjs ", id: 7},
		{title: "angularjs ", id: 7},
		{title: "angularjs ", id: 7},
		{title: "angularjs ", id: 7}
	];		
});


app.controller("blog_detail_ctrl", function ($scope) {
	//$scope.sleep = function (d){
	//	for(var t = Date.now();Date.now() - t <= d;);
	//};

	//$scope.sleep(5000);
});

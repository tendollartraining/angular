var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function ($routeProvider) {
	$routeProvider
		.when("/Training", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
        .when("/about", {
            templateUrl: "partials/about.html"
           
        })
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
		})
	.otherwise({
		redirectTo: "/Training"
	});
});

myApp.factory("kartService", function ($location, $window) {
	var kart = [];
	
	return {
		getKart: function() {
			return kart;
		},
		addToKart: function (book) {
		    console.log($location);
		    var key = book.$$hashKey;
		    var find = false;
		   
		    if (kart.length == 0) kart.push(book)
		   	
		    for (var i = 0; i < kart.length; i++) {
		        
		        if (kart[i].$$hashKey == key) {
		            find = true;}              
	                
		    }

		    if (find == false) {
		        kart.push(book);
		    }

		    $window.location.href = "#/kart";

		   



		},

		buy: function (book) {
		    $window.location.assign("https://www.udemy.com/learn-web-development-foundations-with-aspnet-mvc-5/?couponCode=" + book.couponcode);
		   
		}
	}
});

myApp.factory("bookService", function() {
	var books = [
		{
			imgUrl: "mvc.jpg",
			name: "ASP.NET MVC 5 Complete Beginners Web Development Course ",
			price: 9,
			rating: 5,
			couponcode:"MKLavan02",
			location: "On-Line",
			publisher: "TENDollarAcademy",
			releaseDate: "1-15-2015",
			details: "Learn the Asp.net MVC Framework with Microsoft Visual Studio to and immediately utilize these skills in the workplace."
		},
		{
		    imgUrl: "mvc.jpg",
		    name: "ASP.NET MVC 5 Complete Beginners Web Development Course ",
		    price: 9,
		    rating: 5,
		    couponcode: "MKLavan02",
		    location: "On-Line",
		    publisher: "TENDollarAcademy",
		    releaseDate: "1-15-2015",
		    details: "Learn the Asp.net MVC Framework with Microsoft Visual Studio to and immediately utilize these skills in the workplace."
		},
		{
		    imgUrl: "mvc.jpg",
		    name: "ASP.NET MVC 5 Complete Beginners Web Development Course ",
		    price: 10,
		    rating: 5,
		    couponcode: "MKLavan02",
		    location: "On-Line",
		    publisher: "TENDollarAcademy",
		    releaseDate: "1-15-2015",
		    details: "Learn the Asp.net MVC Framework with Microsoft Visual Studio to and immediately utilize these skills in the workplace."
		},
		{
		    imgUrl: "mvc.jpg",
		    name: "ASP.NET MVC 5 Complete Beginners Web Development Course ",
		    price: 9,
		    rating: 5,
		    couponcode: "MKLavan02",
		    location: "On-Line",
		    publisher: "TENDollarAcademy",
		    releaseDate: "1-15-2015",
		    details: "Learn the Asp.net MVC Framework with Microsoft Visual Studio to and immediately utilize these skills in the workplace."
		},
		{
		    imgUrl: "mvc.jpg",
		    name: "ASP.NET MVC 5 Complete Beginners Web Development Course ",
		    price: 9,
		    rating: 5,
		    couponcode: "MKLavan02",
		    location: "On-Line",
		    publisher: "TENDollarAcademy",
		    releaseDate: "1-15-2015",
		    details: "Learn the Asp.net MVC Framework with Microsoft Visual Studio to and immediately utilize these skills in the workplace."
		},
		{
		    imgUrl: "mvc.jpg",
		    name: "ASP.NET MVC 5 Complete Beginners Web Development Course ",
		    price: 9,
		    rating: 5,
		    couponcode: "MKLavan02",
		    location: "On-Line",
		    publisher: "TENDollarAcademy",
		    releaseDate: "1-15-2015",
		    details: "Learn the Asp.net MVC Framework with Microsoft Visual Studio to and immediately utilize these skills in the workplace."
		}
	];
	
	return {
		getBooks: function() {
			return books;
		},
		addToKart: function(book) {
			
		}
	}
});

myApp.controller("KartListCtrl", function($scope, kartService) {
	$scope.kart = kartService.getKart();
	
	$scope.buy = function(book) {
		//console.log("book: ", book);
		kartService.buy(book);
	}
});

myApp.controller("HeaderCtrl", function ($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "TenDollarTraining";
	$scope.appDetails.tagline = "Affordable Training for Everyone";
	
	$scope.nav = {};
	$scope.nav.isActive = function(path) {
		if (path === $location.path()) {
			return true;
		}
		
		return false;
	}
});

myApp.controller("BookListCtrl", function ($scope, bookService, kartService, $location) {
	$scope.books = bookService.getBooks();
	
	$scope.addToKart = function(book) {
		kartService.addToKart(book);
	}
});
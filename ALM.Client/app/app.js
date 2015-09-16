(function () {
    "use strict";

    var app = angular.module("productManagement",
                            ["common.services",
                             "ui.router"]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                function ($stateProvider, $urlRouterProvider) {
                    $urlRouterProvider.otherwise("/");

                    $stateProvider
                        .state("home", {
                            url: "/",
                            templateUrl: "app/dashboard/dashboardView.html"
                        })
                        .state("productList", {
                            url: "/products",
                            templateUrl: "app/products/productListView.html",
                            controller: "ProductListCtrl as vm"
                        })
                }]
       );

}());
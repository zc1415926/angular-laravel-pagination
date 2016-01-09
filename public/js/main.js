(function(){
    
    'use strict';
    
    var app = angular.module('ngPaginationApp', ['ui.bootstrap']);
    

    
    app.controller('itemsController', function($scope, $http){
        
        $scope.maxSize = 5;
        
        $scope.init = function() {
            $http({
                url: '/api/items',
                method: 'GET',
                //params: {page: $scope.currentPage}
            }).success(function(data, status, headers, config){
                console.log(data);
                $scope.things = data.data;
                $scope.totalItems = data.total;
                $scope.currentpage = data.current_page;
            });
        };
        
        $scope.init();
  
        $scope.pageChanged = function() {
            $http({
                url: '/api/items',
                method: 'GET',
                params: {page: $scope.currentPage}
            }).success(function(data, status, headers, config){
                console.log(data);
                $scope.things = data.data;
            });
        };
    })
})();
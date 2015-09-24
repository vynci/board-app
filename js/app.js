angular.module('boardApp',['ui.router','ngResource','boardApp.controllers','boardApp.services']);

angular.module('boardApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('boards',{
        url:'/boards',
        templateUrl:'partials/boards.html',
        controller:'BoardListController'
    }).state('viewBoard',{
       url:'/boards/:id/view',
       templateUrl:'partials/board-view.html',
       controller:'BoardViewController'
    }).state('newBoard',{
        url:'/boards/new',
        templateUrl:'partials/board-add.html',
        controller:'BoardCreateController'
    }).state('editBoard',{
        url:'/boards/:id/edit',
        templateUrl:'partials/board-edit.html',
        controller:'BoardEditController'
    });
}).run(function($state){
   $state.go('boards');
});
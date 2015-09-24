
angular.module('boardApp.controllers',[]).controller('BoardListController',function($scope,$state,popupService,$window,Board){
    var tmp = Board.query(function(data){
      console.log(data.results);
      $scope.boards=tmp.results;
    });
    console.log(tmp);


    $scope.deleteBoard=function(board){
        console.log($scope.board);
        if(popupService.showPopup('Really delete this?')){
          board.$delete(function(){
              $window.location.href='';
          });
        }
    }

}).controller('BoardViewController',function($scope,$stateParams,Board){
    console.log($stateParams);
    $scope.board=Board.get({id:$stateParams.id});

}).controller('BoardCreateController',function($scope,$state,$stateParams,Board){

    $scope.board=new Board();
    console.log($scope.board);
    $scope.addBoard=function(){
        $scope.board.$save(function(){
          $state.go('boards');
        });
    }

}).controller('BoardEditController',function($scope,$state,$stateParams,Board){

    $scope.updateBoard=function(){
        console.log($scope.board);
        $scope.board.$update(function(){
            $state.go('boards');
        });
    };

    $scope.loadBoard=function(){
        $scope.board=Board.get({id:$stateParams.id});

    };

    $scope.loadBoard();
});

angular.module('myApp')

.controller('homeCtrl', function($scope, $state){
    $scope.details = {
        
    };
    
    $scope.go = function() {
        $state.go('room', {roomName: $scope.details.room, name: $scope.details.name});
    };
})
;
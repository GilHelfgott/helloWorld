angular.module('myApp')

.controller('roomCtrl', function (roomName, name, $scope) {
    $scope.roomName = roomName;
    $scope.name = name;
})
;
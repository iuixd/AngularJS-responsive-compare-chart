'use strict';

/**
 * @ngdoc function
 * @name oraTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oraTestApp
 */
angular.module('oraTestApp')
  .controller('MainCtrl', ['$scope', 'dataFactory', function ($scope, dataFactory) {
    $scope.status;
    $scope.competitorReport;

    getCompetitorReport();

    function getCompetitorReport() {
        dataFactory.getCompetitorReport()
        .success(function (competeData) {
            // console.log("data loaded: " + competeData);
            $scope.competitorReport = competeData.reportdata;
            // console.log($scope.competitorReport);
        })
        .error(function (error) {
            $scope.status = 'Unable to load customer data: ' + error.message;
        });
    }
  }]);

angular.module('oraTestApp')
.factory('dataFactory', ['$http', function($http) {

    var dataFactory = {};

    dataFactory.getCompetitorReport = function () {
        return $http.get('scripts/competitor-report-data.json');
    };

    return dataFactory;
}]);
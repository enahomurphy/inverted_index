'use strict';

angular.module('invertedIndex')
  .service('alerts', function($rootScope, $timeout) {
    return function(message, type, show, timeout) {
      // var alertTimeout;
      $rootScope.alert = {
        hasBeenHidden: true,
        message: message,
        type: type,
        show: true
      }
    $timeout(function() {
        $rootScope.alert.show = false
      }, timeout || 5000)
    }
  });

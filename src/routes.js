(function () {
'use strict';

angular.module('Ugu')

.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
    
    // Redirect to homepage if no URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: './src/ugu/templates/home.template.html'
    })

    .state('services', {
        url: '/servicepage',
        templateUrl: './src/ugu/templates/services.template.html'
    });

}

})();
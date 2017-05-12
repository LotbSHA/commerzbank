(function() {
    'use strict';

    angular
        .module('commerzbankApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {
        /*$urlRouterProvider.otherwise('/yourvehicle');*/
        $stateProvider.state('info', {
                parent: 'views',
                url: '/information',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/views/information/information.html',
                        controller: 'InfoController',
                        controllerAs: 'vm'
                    }

                }
            })
            .state('info.partnership', {
                url: '/partnership',
                templateUrl: "app/views/information/partnership.html"
            })
    }
})();
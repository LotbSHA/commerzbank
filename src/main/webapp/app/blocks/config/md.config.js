(function () {
    'use strict';

    angular
        .module('commerzbankApp')
        .config(materialDesignConfig);

    function materialDesignConfig() {
        // Initialize material design
        $.material.init();
    }
})();

(function() {
    angular
        .module('app.tasks')
        .directive('jsonViewer', jsonViewer);

    function jsonViewer () {
        var directive = {
            link: link,
            restrict: 'EA',
            templateUrl: '/app/tasks/three/json-viewer/json-viewer.directive.html',
            scope: {
                bowerJsonData: '=?'
            }
        };
        return directive;

        function link(scope, element, attrs) {

        }
    }

})();
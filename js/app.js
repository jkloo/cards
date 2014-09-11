var app = angular.module("doorstopui", []);

// app.filter('markdown', function() {
    
// });
// Render markdown in the HTML page
app.directive("markdown", function ($compile, $http) {
    var converter = new Showdown.converter();
    return {
        restrict: 'E',
        replace: true,
        link: function (scope, element, attrs) {
            if ("src" in attrs) {
                $http.get(attrs.src).then(function(data) {
                    element.html(converter.makeHtml(data.data));
                });
            } else {
                element.html(converter.makeHtml(element.text()));
            }
        }
    };
});


// app.directive('markdown', function ($http) {
//     var converter = new Showdown.converter();
//     return {
//         restrict: 'A',
//         scope: { link:'@' },
//         link: function (scope, element, attrs) {
//             var htmlText = converter.makeHtml(element.text());
//             element.html(htmlText);
//         }
//     };
//   });

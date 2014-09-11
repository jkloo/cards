app.controller("documentController", function($scope, $http) {
    var url_base = "http://localhost:7867";
    var url_documents = "/documents";
    var url_all = '/all';
    var format_json = "?format=json";
    $scope.items = {};
    $http.get(url_base + url_documents + url_all + format_json)
        .success(function(response) {$scope.items = response;});
    
});

// function getDocumentItems($scope, $http) {
//     var nDocuments = $scope.documents.length;
//     $scope.items = {};
//     for (var i = 0; i < nDocuments; i++) {
//         alert(url_base + url_documents + "/" + $scope.documents[i] + format_json);
//         $http.get(url_base + url_documents + "/" + $scope.documents[i] + format_json)
//             .success(function(response) {$scope.items[$scope.documents[i]] = response;});
//     }
// }

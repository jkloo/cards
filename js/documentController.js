function documentController($scope, $http) {
    var url_base = "http://localhost:7867";
    var url_documents = "/documents";
    var format_json = "?format=json";
    var documents = [];
    $http.get(url_base + url_documents + format_json)
        .success(function(response) {$scope.documents = response.prefixes; getDocumentItems($scope, $http);});
}

function getDocumentItems($scope, $http) {
    var nDocuments = $scope.documents.length;
    $scope.items = {};
    for (var i = 0; i < nDocuments; i++) {
        alert(url_base + url_documents + "/" + $scope.documents[i] + format_json);
        $http.get(url_base + url_documents + "/" + $scope.documents[i] + format_json)
            .success(function(response) {$scope.items[$scope.documents[i]] = response;});
    }
    // $scope.documents = documents;
    // $scope.items = items;
}
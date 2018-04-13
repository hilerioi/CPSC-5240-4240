var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.clearField = function () {
        document.getElementById("searchText").value = "";
    };
    SearchComponent.prototype.search = function () {
        this.name = document.getElementById("searchText").value;
        document.getElementById("resultContainer").innerHTML = "----" + this.name + "-----";
    };
    return SearchComponent;
}());
var sComponent;
(function () {
    var sc = new SearchComponent();
    sComponent = sc;
})();

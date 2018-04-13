"use strict";
exports.__esModule = true;
var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.clearField = function () {
        document.getElementById("searchText").value = "";
    };
    SearchComponent.prototype.search = function () {
        this.name = document.getElementById("searchText").value;
        document.getElementById("resultContainer").innerHTML = this.name;
        console.log(this.name);
    };
    SearchComponent.prototype.searchGoogle = function () {
        this.name = document.getElementById("searchText").value;
        var uri = "https://www.googleapis.com/customsearch/v1?key={addkey}cx={othervalue}&q=" + this.name;
        this.req = new XMLHttpRequest();
        this.req.onload = this.getListings;
        this.req.open("GET", uri, true);
        this.req.send();
    };
    SearchComponent.prototype.getListings = function () {
        var textOutput = JSON.parse(this.responseText);
        document.getElementById("resultContainer").innerHTML = textOutput.kind; // JSON.stringify(textOutput, null, 4);
    };
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;

/*function clearField(): void {
    document.getElementById("searchText").value = "";
}

function search(): void {
    let name:string = document.getElementById("searchText").value;
    document.getElementById("resultContainer").innerHTML = name;
    console.log(name);
}
*/
interface SearchInterface {
    clearField(): void;
}

class SearchComponent implements SearchInterface{
    name:string;

    clearField(): void {
        document.getElementById("searchText").value = "";
    }

    search(): void {
        this.name = document.getElementById("searchText").value;
        document.getElementById("resultContainer").innerHTML = "----" + this.name + "-----";
    }
}

var sComponent;

(function(){
    let sc:SearchComponent = new SearchComponent();
    sComponent = sc;
})();
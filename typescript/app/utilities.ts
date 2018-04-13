interface SearchInterface {
    clearField(): void;
}

export class SearchComponent implements SearchInterface{
    name:string;
    req:any;

    clearField(): void {
        document.getElementById("searchText").value = "";
    }

    search(): void {
        this.name = document.getElementById("searchText").value;
        document.getElementById("resultContainer").innerHTML = this.name;
        console.log(this.name);
    }
    searchGoogle(): void {
        this.name = document.getElementById("searchText").value;
        let uri:string = "https://www.googleapis.com/customsearch/v1?key={addkey}cx={othervalue}&q=" + this.name;
        this.req = new XMLHttpRequest();
        this.req.onload = this.getListings;
        this.req.open("GET", uri, true);
        this.req.send();
    }
    getListings():void {
        var textOutput = JSON.parse(this.responseText);
        document.getElementById("resultContainer").innerHTML = textOutput.kind; // JSON.stringify(textOutput, null, 4);
    }

    constructor() {}
}
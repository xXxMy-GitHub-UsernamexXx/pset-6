let itemList = [];

window.onload = function() {
        document.getElementById("submit button").onclick = newItem;

};

let itemPrototype = Object.create(Object.prototype);
itemPrototype["description"] = "blank";
itemPrototype["priority"] = "low";
itemPrototype["completion"] = "not completed";

var newItem = function() {
        let addedItem = Object.create(itemPrototype)
        let itemDescription = document.getElementById("add item").getElementsByTagName("input");
        addedItem["description"] = itemDescription;
        itemList[itemList.length] = addedItem;
        let list = document.querySelector("html body ul");
        let newItemForList = document.createElement("li");
        li.innerHTML = addedItem["description"];
        list.append(itemList[itemList.length]);

};

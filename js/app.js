let itemPrototype = Object.create(Object.prototype);
itemPrototype["description"] = "blank";
itemPrototype["priority"] = "low";
itemPrototype["completion"] = "not completed";

var newItem = function() {
        let addedItem = Object.create(itemPrototype)
        let itemDescription = document.getElementById("add item").getElementsByTagName("input");
        addedItem["description"] = itemDescription;
        itemList[itemList.length] = addedItem;
        let list = document.getElementById("to-do list");
        let newItemForList = document.createElement("li");
        list.append(itemList[itemList.length]);
        li.textContent = addedItem["description"];

};


let itemList = [];
window.onload = function() {
        document.getElementById("submit button").onclick = newItem;

};

window.onload = function() {
        document.getElementById("add item").onsubmit = newItem;

};

let itemList = [];

let itemPrototype = Object.create(Object.prototype);
itemPrototype["description"] = "blank";
itemPrototype["priority"] = "low";
itemPrototype["completion"] = "not completed";

const newItem = function() {
        let addedItem = Object.create(itemPrototype)
        let itemDescription = document.getElementById("add item").getElementsByTagName("input");
        newItem["description"] = itemDescription;
        itemList.push(newItem);
        let newItemForList = document.createElement("li");
        let list = document.querySelector("html body ul");
        list.append(newItemForList);

};

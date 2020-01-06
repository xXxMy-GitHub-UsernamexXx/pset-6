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

let itemPrototype = Object.create(Object.prototype);
itemPrototype["description"] = "blank";
itemPrototype["priority"] = "low";
itemPrototype["completion"] = "not completed";

let itemList = [];
document.getElementById("submit button").onclick = newItem;

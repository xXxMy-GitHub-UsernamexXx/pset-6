window.onload = function() {
        document.getElementById("add item").onsubmit = newItem;

};

let itemList = [];

let first = true

let itemPrototype = Object.create(Object.prototype);
itemPrototype["description"] = "blank";
itemPrototype["priority"] = "low";
itemPrototype["completion"] = "not completed";

const newItem = function() {
        let addedItem = Object.create(itemPrototype)
        let itemDescription = document.getElementById("add item").getElementsByTagName("input");
        newItem["description"] = itemDescription;
        itemList.push(newItem);
        if (first == true) {
                let list = document.getElementById("first item");
                list.innerHTML = itemList[0];
                first = false;

        } else {
                let list = document.querySelector("html body ul");
                let newItemForList = document.createElement("li");
                li.innerHTML = itemList[itemList.length];
                list.append(itemList[itemList.length]);

        };

};

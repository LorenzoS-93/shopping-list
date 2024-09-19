const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    
    // Save the item in the variable 'item' and cancel the input from the form;
    const item = input.value;
    input.value = '';
    
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const deleteItemBtn = document.createElement("button");

    // create the DOM in the right order, li span button; 
    listItem.appendChild(listText);
    listItem.appendChild(deleteItemBtn);
    
    // set the item name as the input word and the btntext to delete
    listText.textContent = item;
    deleteItemBtn.textContent = "delete";

    // add the item to the list
    list.appendChild(listItem);

    // remove the whole parent li node if the delete button is clicked
    deleteItemBtn.addEventListener("click", () => {
        deleteItemBtn.parentNode.remove();
    });

    // keep the form focused
    input.focus();

});

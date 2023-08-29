
// Adding a todo item on form submission
const input = document.querySelector("#new-todo")
let counterId =0;
let list;
let deleteItem;

const showDateButton = document.getElementById('date');
const dateDisplay = document.getElementById('dateDisplay');

showDateButton.addEventListener('click', () => {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString(undefined, options);
    dateDisplay.textContent = `Today's date is: ${formattedDate}`;
})

const handleSubmit = (event) => {
    event.preventDefault();

    const newToDo = input.value;
    console.log(newToDo);
    const newListItem = document.createElement('li');
    newListItem.innerText = newToDo +"\n";

    const newDeleteButton= document.createElement('button');
    const text = document.createTextNode("Delete");
    newDeleteButton.appendChild(text);
    newListItem.appendChild(newDeleteButton);
    console.log(newListItem)

    //const list = document.querySelector('#list');
    list = document.querySelector('#list');
    list.appendChild(newListItem);

    newDeleteButton.addEventListener('click',()=>handleDelete(newListItem));
    //remove handle
    // const deletes = document.getElementById('1');
    // deletes.remove();

}



const handleDelete = (newListItem) => {
    list.removeChild(newListItem);
}

const toDoForm = document.querySelector('#todo-form');
console.log(toDoForm);

// const button= document.querySelector("#sumbit")
toDoForm.addEventListener('submit', handleSubmit);

const date = document.querySelector('#todo-form');
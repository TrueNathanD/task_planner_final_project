window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const list_el = document.querySelector('#tasks');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

// when pressing submit, return info stays on same page 

        const task = input.value;

        if (!task) {
            alert("Dont forget to add your text!"); 
            return; 
        }
// created a function for mandatory writing in text box 

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        task_content_el.innerText = task;

 // added element for "add task" submission to work properly
    task_el.appendChild(task_content_el);
        
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

    // made input value read only so user can't edit text 
        
    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classList.add("delete");
    task_edit_el.innerHTML = "Delete";
 // * edit and delete button doesn't work - have to figure out how to make it work * //

        
        list_el.appendChild(task_el);

// this code list the tasks on the page


    })

})

console.log("Hello, World.");
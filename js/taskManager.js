



// Let's go! This adds a delete button to the task (class="delete-button")
const createTaskHtml = (id, name, description, assignedTo, dueDate, status) => `
    <li class="list-group-item" data-task-id=${id}>
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <assigned-plus-date>Assigned To: ${assignedTo}</assigned-plus-date>
            <assigned-plus-date>Due: ${dueDate}</assigned-plus-date>
        </div>
        <p>${description}</p>
        <div class="d-flex w-100 justify-content-center">
            <button class="btn btn-outline-success done-button mr-1 ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
            <button class="btn btn-outline-danger delete-button">Delete</button>
        </div>
    </li>
`;

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;
    }


    addTask(name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        if (name.length === 0 || description.length === 0 || assignedTo.length === 0 || dueDate.length === 0) {
            alert("Whoa! Form inputs cannot be blank! How would that even work???");
            return false;
        }


        this.tasks.push(task);

}

    // This code creates deleteTask

    deleteTask(taskId) {
        // Here's an empty array just waiting for a new variable! (newTasks)
        const newTasks = [];

        // Loops over it!

        for (let i = 0; i < this.tasks.length; i++) {
            // Gets the current task!
            const task = this.tasks[i];


            // This checks if the task ID is the wrong task (bad parameter!)
            if (task.id !== taskId) {
                // ...and pushes the task to the newTasks array!
                newTasks.push(task);
            }
        }





        this.tasks = newTasks;
    }



    getTaskById(taskId) {
        let foundTask;

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            if (task.id === taskId) {
                foundTask = task;
            }
        }

        return foundTask;
    }

    render() {
        const tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            const task = this.tasks[i];

            const date = new Date(task.dueDate);
            const formattedDate = (date.getMonth() + 1) + '/' + (date.getDate() + 1)  + '/' + date.getFullYear();

            const taskHtml = createTaskHtml(task.id, task.name, task.description, task.assignedTo, formattedDate, task.status);

            tasksHtmlList.push(taskHtml);
        }

        const tasksHtml = tasksHtmlList.join('\n');

        const tasksList = document.querySelector('#tasksList');
        tasksList.innerHTML = tasksHtml;
    }

    save() {
        const tasksJson = JSON.stringify(this.tasks);

        localStorage.setItem('tasks', tasksJson);


        
        const currentId = String(this.currentId);

        localStorage.setItem('currentId', currentId);
    }

    load() {
        if (localStorage.getItem('tasks')) {
            const tasksJson = localStorage.getItem('tasks');

            this.tasks = JSON.parse(tasksJson);
        }


        if (localStorage.getItem('currentId')) {
            const currentId = localStorage.getItem('currentId');

            this.currentId = Number(currentId);
        }
    }
}

// function myFun(){
//     var newTaskNameInput=document.getElementById('newTaskNameInput').value;
//     alert("Enter information please");

//     var newTaskDescription=document.getElementById('newTaskDescription').value;
//     alert("Enter information please");

//     var newTaskAssignedTo=document.getElementById('newTaskAssignedTo').value;
//     alert("Enter information please");

//     var newTaskDue=document.getElementById('newTaskDueDate').value;
//     alert("Enter information please");
// }
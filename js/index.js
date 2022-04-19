// const taskManager = new TaskManager(0);
// const newTaskManager = new TaskManager(0);

// // Select the New Task Form
// const newTaskForm = document.querySelector('#newTaskForm');

// // Adds event listener
// newTaskForm.addEventListener('submit', (event) => {
//     // Prevents default action
//     event.preventDefault();
//     let messages = [];

//     // Selects the inputs
//     const newTaskNameInput = document.querySelector('#newTaskNameInput');
//     const newTaskDescription = document.querySelector('#newTaskDescription');
//     const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
//     const newTaskDueDate = document.querySelector('#newTaskDueDate');


//     // Gets the input's values
//     const taskName = newTaskNameInput.value;
//     const description = newTaskDescription.value;
//     const assignedTo = newTaskAssignedTo.value;
//     const dueDate = newTaskDueDate.value;

// taskManager.addTask(taskName, description, assignedTo, dueDate, status);

// newTaskNameInput.value = '';
// newTaskDescription.value = '';
// newTaskAssignedTo.value = '';
// newTaskDueDate.value = '';

// });

// const tasksList = document.querySelector('#tasksList');

// tasksList.addEventListener('click', (event) => {
//     if (event.target.classList.contains('done-button')) {
//         const parentTask = event.target.parentElement.parentElement;

//         const taskId = Number(parentTask.dataset.taskId);

//         const task = taskManager.getTaskById(taskId);

//         task.status = 'DONE';

//     }
// });




// // const task1 = {
// //     id: 0,
// //     name: 'Meditate',
// //     description: 'Meditate 15 mins before the start of every day',
// //     assignedTo: 'Myself',
// //     dueDate: '05/01/2022',
// //     status: 'IN PROGRESS'
    
// // };

// // const task2 = {
// //     id: 1,
// //     name: 'All in the name of self love',
// //     description: 'Cater to myself for an hour',
// //     assignedTo: 'Myself',
// //     dueDate: '06/01/2022',
// //     status: 'NOT STARTED YET'
    
// // };

// // const task3 = {
// //     id: 2,
// //     name: 'Acts of love',
// //     description: 'Be kind to receive to every human you interact with to focus on being a more well rounded, thoughtful, loving person',
// //     assignedTo: 'Myself',
// //     dueDate: '07/01/2022',
// //     status: 'NOT STARTED YET'
    
// // };

// // const task4 = {
// //     id: 3,
// //     name: 'Positive thoughts',
// //     description: 'Read a book that focuses on positivity and happiness',
// //     assignedTo: 'Myself',
// //     dueDate: '08/01/2022',
// //     status: 'NOT STARTED YET'
    
// // };


// // const task5 = {
// //     id: 4,
// //     name: 'The power of manifestation',
// //     description: 'Think it, believe and achieve it by speaking and writing down your goals you want to accomplish in 30 days',
// //     assignedTo: 'Myself',
// //     dueDate: '09/01/2022',
// //     status: 'NOT STARTED YET'
    
// // };



// newTaskManager.addTask('map', 'pasta', 'coffee', 'hour');

// console.log(newTaskManager);

// // added the affirmation functions to complete


// CAUTION: TEST CODE BEGINS BELOW!

const taskManager = new TaskManager(0);

taskManager.load();

taskManager.render();

const newTaskForm = document.querySelector('#newTaskForm');

newTaskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const newTaskNameInput = document.querySelector('#newTaskNameInput');
    const newTaskDescription = document.querySelector('#newTaskDescription');
    const newTaskAssignedTo = document.querySelector('#newTaskAssignedTo');
    const newTaskDueDate = document.querySelector('#newTaskDueDate');

    const name = newTaskNameInput.value;
    const description = newTaskDescription.value;
    const assignedTo = newTaskAssignedTo.value;
    const dueDate = newTaskDueDate.value;

    taskManager.addTask(name, description, assignedTo, dueDate);

    taskManager.save();

    taskManager.render();

    newTaskNameInput.value = '';
    newTaskDescription.value = '';
    newTaskAssignedTo.value = '';
    newTaskDueDate.value = '';
});

const tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', (event) => {
    if (event.target.classList.contains('done-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        const task = taskManager.getTaskById(taskId);

        task.status = 'DONE';

        taskManager.save();

        taskManager.render();
    }

    // This checks for if the delete button clicked!!!
    if (event.target.classList.contains('delete-button')) {
        const parentTask = event.target.parentElement.parentElement;

        const taskId = Number(parentTask.dataset.taskId);

        taskManager.deleteTask(taskId);




        // Saves the tasks to local storage
        taskManager.save();

        taskManager.render();
    }
});
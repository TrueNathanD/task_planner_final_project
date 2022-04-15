// updated and used console log to make sure task manager works

                // *** Where we left off ***
function createTaskHtml() {
    'name', 'description', 'assignedTo', 'dueDate', 'status'

}


class TaskManager {
    constructor(currentId = 1) {
        this.tasks = [];
        this.currentId = currentId;
    }
    addTask(name, description, assignedTo, dueDate, status) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            dueDate: dueDate,
            status: 'TODO'
        };
        this.tasks.push(task);
};


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
}
// created an array to connect with the task objects

const newTaskForm = document.querySelector('#newTaskForm');
// made sure form was connected to task manager
newTaskForm.addEventListener('submit', (Event) => {
    Event.preventDefault();
});

const task1 = {
    id: 0,
    name: 'Meditate',
    description: 'Meditate 15 mins before the start of every day',
    assignedTo: 'Myself',
    dueDate: '05/01/2022',
    status: 'IN PROGRESS'
    
};

const task2 = {
    id: 1,
    name: 'All in the name of self love',
    description: 'Cater to myself for an hour',
    assignedTo: 'Myself',
    dueDate: '06/01/2022',
    status: 'NOT STARTED YET'
    
};

const task3 = {
    id: 2,
    name: 'Acts of love',
    description: 'Be kind to receive to every human you interact with to focus on being a more well rounded, thoughtful, loving person',
    assignedTo: 'Myself',
    dueDate: '07/01/2022',
    status: 'NOT STARTED YET'
    
};

const task4 = {
    id: 3,
    name: 'Positive thoughts',
    description: 'Read a book that focuses on positivity and happiness',
    assignedTo: 'Myself',
    dueDate: '08/01/2022',
    status: 'NOT STARTED YET'
    
};


const task5 = {
    id: 4,
    name: 'The power of manifestation',
    description: 'Think it, believe and achieve it by speaking and writing down your goals you want to accomplish in 30 days',
    assignedTo: 'Myself',
    dueDate: '09/01/2022',
    status: 'NOT STARTED YET'
    
};

// added the affirmation functions to complete

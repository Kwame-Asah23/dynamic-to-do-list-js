
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements



    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Retrieve tasks from Local Storage
        storedTasks.forEach(taskText => addTask(taskText, false)); // Load tasks into DOM without re-saving them
    }


    function addTask(taskText, save = true) {


        // Create a new <li> element for the task
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a new button element
        const removeButton = document.createElement('button');

        // Set the text content of the button to "Remove"
        removeButton.textContent = 'Remove';

        // Assign a class name to the button
        removeButton.classList.add = 'remove-btn';

        // Assign an onclick event to the remove button to remove the <li> element
        removeButton.onclick = function () {
            taskList.removeChild(taskItem);

            // Remove task from Local Storage
            removeTaskFromLocalStorage(taskText);
        };

        // Append the remove button to the taskItem
        taskItem.appendChild(removeButton);

        // Append the taskItem to the taskList
        taskList.appendChild(taskItem);

        //  // Clear the task input field
        //  taskInput.value = '';

        // If the task is being added through user input, save it to Local Storage
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get current tasks from Local Storage
            storedTasks.push(taskText); // Add the new task to the list
            localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save updated list to Local Storage
        }
        // Function to remove task from Local Storage
        function removeTaskFromLocalStorage(taskText) {
            let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]'); // Get current tasks from Local Storage
            storedTasks = storedTasks.filter(task => task !== taskText); // Filter out the task to be removed
            localStorage.setItem('tasks', JSON.stringify(storedTasks)); // Save the updated task list back to Local Storage
        }
    }




    addButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert('Please enter a task!');
            return;
        }
    });

    // Add an event listener for the 'Enter' keypress in taskInput
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            const taskText = taskInput.value.trim();
            if (taskText === "") {
                alert('Please enter a task!');
                return;
            }
            addTask(taskText); // Add the task and save it to Local Storage
            taskInput.value = ""; // Clear the input field
        }
    });

    // Load tasks from Local Storage when the page is loaded
    loadTasks();

})
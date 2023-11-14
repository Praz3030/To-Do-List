var taskCounter = 1;
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskDate = document.getElementById("taskDate");
    var finishDate = document.getElementById("finishDate");
    var taskDescription = document.getElementById("taskDescription");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var li = document.createElement("li");
    li.innerHTML = `<div>
                        <strong>Task ${taskCounter}: ${taskInput.value}</strong><br>
                        <span>Date: ${taskDate.value}</span><br>
                        <span>Finish Date: ${finishDate.value}</span><br>
                        <span>Description: ${taskDescription.value}</span>
                    </div>
                    <button onclick="removeTask(this)">Delete</button>`;
    
    taskCounter++;

    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
    finishDate.value = "";
    taskDescription.value = "";
}

function removeTask(button) {
    var li = button.parentElement;
    li.remove();
}

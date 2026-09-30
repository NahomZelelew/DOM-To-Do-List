const taskInputs = document.querySelector('#taskInput');
const addButtons = document.querySelector('#addButton');
const taskLists = document.querySelector('#taskList');
let taskCount = 0;
function toDo() {
    if (taskInputs.value.trim() === "") {
        return;
    }
    taskCount++;
    const taskItem = document.createElement("li");
    const textSpan = document.createElement("span");
    textSpan.classList.add("taskText");
    textSpan.textContent = `${taskCount}. ${taskInputs.value}`;
    taskItem.append(textSpan);
    taskLists.append(taskItem);
    const deleteButtons = document.createElement("button");
    deleteButtons.textContent = "Delete";
    deleteButtons.classList.add("deleteButton");
    taskItem.append(deleteButtons);
    deleteButtons.addEventListener("click", function() {
        taskItem.remove();
        const allTasks = document.querySelectorAll("#taskList li");
        taskCount = allTasks.length;
        allTasks.forEach(function(task, index) {
            const textSpan = task.querySelector(".taskText");
            const taskText = textSpan.textContent.substring(
                textSpan.textContent.indexOf(" ") + 1
            );
            textSpan.textContent = `${index + 1}. ${taskText}`;
        });
    });
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    taskItem.append(checkBox);
    checkBox.addEventListener("click", function() {
        taskItem.classList.toggle("completed");
    });
    taskInputs.value = "";
}
addButtons.addEventListener("click", toDo);
taskInputs.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        toDo();
    }
});

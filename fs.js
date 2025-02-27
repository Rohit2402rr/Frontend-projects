document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if(taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `${taskText} <button class="delete">❌</button>`;

        li.addEventListener("click", () => li.classList.toggle("completed"));

        li.querySelector(".delete").addEventListener("click", (e) => {
            e.stopPropagation();
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value = "";

    });
});
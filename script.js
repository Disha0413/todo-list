function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.onclick = function () {
        document.getElementById("completedList").appendChild(li);
        completeBtn.remove(); // remove complete button after clicking
    };

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    document.getElementById("remainingList").appendChild(li);

    input.value = "";
}



// function addTask() {
//             const input = document.getElementById("taskInput");
//             const taskText = input.value;

//             if (taskText === "") return;

//             const li = document.createElement("li");
//             li.textContent = taskText;

//             const deleteBtn = document.createElement("button");
//             deleteBtn.textContent = "Delete";
//             deleteBtn.onclick = function() {
//                 li.remove();
//             };

//             li.appendChild(deleteBtn);
//             document.getElementById("taskList").appendChild(li);

//             input.value = "";
//         }
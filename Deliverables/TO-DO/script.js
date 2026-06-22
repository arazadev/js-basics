const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

// Add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.style.margin = "5px";

  deleteBtn.addEventListener("click", () => {
    li.remove();

  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
//   taskInput.focus();
}

function clearAll() {
    taskList.innerHTML ="";
}

// Add task on button click
addBtn.addEventListener("click", addTask);
clearBtn.addEventListener("click",clearAll)

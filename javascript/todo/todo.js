let tasks = [];

const showTask = (id, arr) => {
  const element = document.getElementById(id);

  let inputText = "";

  if (arr.length == 0) {
    inputText += "No Tasks found";
  } else {
    arr.forEach((task) => {
      inputText += `<div class="task">
            <h3>${task.todo}</h3>
            <button onclick="handleRemoveTask(${task.id})">Delete</button>
          </div>`;
    });
  }

  element.innerHTML = inputText;
};

const handleAddTask = () => {
  const element = document.getElementById("inputValue");
  const todo = element.value;

  if (todo.trim() === "") return;

  tasks.push({ id: Date.now(), todo: todo });

  element.value = "";

  showTask("tasks", tasks);
};

const handleRemoveTask = (id) => {
  const exists = tasks.find((ele) => ele.id == id);
  if (exists) {
    tasks = tasks.filter((ele) => ele.id != id);
  }
  showTask("tasks", tasks);
};

document.addEventListener("DOMContentLoaded", () => {
  showTask("tasks", tasks);
});

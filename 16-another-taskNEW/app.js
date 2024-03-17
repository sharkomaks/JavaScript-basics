"use strict";

const toDoList = {
    tasks: [],
    id: 0,
    addTask: function (task) {
        if (task) {
            this.id++;
            task.id = this.id;
            this.tasks.push(task);
        }
    },
    removeTaskById: function (idNumber) {
        this.tasks = this.tasks.filter(task => task.id !== idNumber);
    },
    renameById: function (idNumber, newTitle, newPriority) {
        this.tasks.filter(task => {
            if (task.id === idNumber) {
                task.title = newTitle;
                task.priority = newPriority;
            }
        })
    },
    taskSort: function () {
        this.tasks.sort((a, b) => a.priority - b.priority)
    },
};

const newTask = {
    tasks: [],
    id: 0,
};


toDoList.addTask.call(newTask, {
    title: 'Помыть посуду',
    priority: 1,
})
toDoList.addTask.call(newTask, {
    title: 'Погулять с собакой',
    priority: 1,
})
toDoList.addTask.call(newTask, {
    title: 'Выбросить мусор',
    priority: 1,
})
toDoList.addTask.call(newTask, {
    title: 'Пропылесосить',
    priority: 2,
})
console.log(newTask.tasks);
toDoList.removeTaskById.call(newTask, 2);
console.log(newTask.tasks);
toDoList.renameById.call(newTask, 3, 'Купить продуктов', 3);
console.log(newTask.tasks);
toDoList.taskSort.call(newTask);
console.log(newTask.tasks);
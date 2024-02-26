"use strict";

const toDoList = {
    tasks: [],
    id: 0,
    addTask: function (task) {
        if (task) {
            this.id++;
            task.id = this.id;
            this.tasks.push(task);
            return this.id
        }
    },
    deleteTaskById: function (idNumber) {
        this.tasks = this.tasks.filter(task => task.id !== idNumber);
    },
    renameById: function (idNumber, newTitle, newPriority) {
        this.tasks.forEach(task => {
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

toDoList.addTask({
    title: 'Помыть посуду',
    priority: 1,
});
toDoList.addTask({
    title: 'Погулять с собакой',
    priority: 1,
});
toDoList.addTask({
    title: 'Выбросить мусор',
    priority: 1,
});
toDoList.addTask({
    title: 'Пропылесосить',
    priority: 2,
});
console.log(toDoList.tasks);
toDoList.deleteTaskById(2);
console.log(toDoList.tasks);
toDoList.renameById(3, 'Купить продуктов', 3);
console.log(toDoList.tasks);
toDoList.taskSort();
console.log(toDoList.tasks);
console.log(toDoList.id)
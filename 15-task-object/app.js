const toDoList = {
    tasks: [{
        title: 'Помыть посуду',
        id: 1,
        priority: 1,
    }],
    addTask: function (task) {
        this.tasks.push(task)
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
    title: 'Погулять с собакой',
    id: 2,
    priority: 1,
});
toDoList.addTask({
    title: 'Выбросить мусор',
    id: 3,
    priority: 1,
});
toDoList.addTask({
    title: 'Пропылесосить',
    id: 4,
    priority: 2,
});
console.log(toDoList.tasks);
toDoList.deleteTaskById(2);
console.log(toDoList.tasks);
toDoList.renameById(3, 'Купить продуктов', 3);
console.log(toDoList.tasks);
toDoList.taskSort();
console.log(toDoList.tasks);
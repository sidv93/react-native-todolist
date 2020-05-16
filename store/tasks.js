import { types, flow } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';

const Task = types.model('Task', {
    id: types.number,
    title: types.string,
    description: types.string,
    timestamp: types.Date,
    completed: false
})
.actions(self => ({
    toggleCompleted() {
        self.completed = !self.completed;
    }
}))

const TaskStore = types.model('Tasks', {
    tasks: types.array(Task)
})
.actions(self => {
    function addTask(task) {
        const newTask = { ...task, id: self.tasks.length+1};
        self.tasks.push(newTask);
    }

    const loadTasks = flow(function* loadTasks() {
        try {
            const json = yield AsyncStorage.getItem('tasks');
            const tasks = JSON.parse(json);
            console.log('tasks in store', tasks);
            self.tasks = [...tasks];
        } catch (err) {
            console.error("Failed to load tasks ", err)
        }
    })
    return {
        addTask, loadTasks
    }
})
.create({
    tasks: []
});

export default TaskStore;

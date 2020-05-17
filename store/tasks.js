import { types, flow } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';

const Task = types.model('Task', {
    id: types.number,
    title: types.string,
    description: types.string,
    timestamp: types.optional(types.undefined || types.Date),
    completed: false,
    tag: types.string
})
    .actions(self => ({
        toggleCompleted() {
            self.completed = !self.completed;
        }
    }))

const TaskStore = types.model('Tasks', {
    tasks: types.array(Task),
})
.views(self => ({
    taskLengthOfTag(tag) {
        return tag !== 'all' ? self.tasks.filter(task => task.tag === tag).length : self.tasks.length;
    }
}))
    .actions(self => ({
        addTask: flow(function* addTask(task) {
            const newTask = { ...task, id: self.tasks.length + 1 };
            try {
                const res = yield AsyncStorage.setItem('tasks', JSON.stringify([...self.tasks, newTask]));
                console.log('new task saved');
                self.tasks.push(newTask);
            } catch(e) {
                console.log('error when saving task', e);
            }           
        }),

        loadTasks: flow(function* loadTasks() {
            try {
                const json = yield AsyncStorage.getItem('tasks');
                const tasks = JSON.parse(json);
                if (tasks) {
                    self.tasks = [...tasks];
                }
            } catch (err) {
                console.error("Failed to load tasks ", err)
            }
        })
    }))
    .create({
        tasks: [],
    });

export default TaskStore;

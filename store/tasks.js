import { types, flow, destroy } from 'mobx-state-tree';
import { AsyncStorage } from 'react-native';
import isBefore from 'date-fns/isBefore';
import isEqual from 'date-fns/isEqual';
import isAfter from 'date-fns/isAfter';

const Task = types.model('Task', {
    id: types.number,
    title: types.string,
    description: types.string,
    timestamp: types.Date,
    completed: false,
    tag: types.string
})
    .actions(self => ({
        toggleCompleted() {
            self.completed = !self.completed;
        },
        setEditDetails({description, timestamp, tag}) {
            self.description = description;
            self.timestamp = timestamp;
            self.tag = tag;
        }
    }))

const TaskStore = types.model('Tasks', {
    tasks: types.array(Task),
})
    .views(self => ({
        taskLengthOfTag(tag) {
            return tag !== 'all' ? self.tasks.filter(task => task.tag === tag).length : self.tasks.length;
        },
        getTasksByTag(tag) {
            return tag === 'all' ? self.tasks : self.tasks.filter(item => item.tag === tag);
        },
        getElapsedTasksForTag(tag) {
            return self.getTasksByTag(tag).filter(item => {
                if (item.timestamp) {
                    const currDate = new Date();
                    const taskDate = new Date(item.timestamp);
                    return isBefore(
                        new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate()),
                        new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate())
                    )
                }
                return false;
            });
        },
        getTodayTasksForTag(tag) {
            return self.getTasksByTag(tag).filter(item => {
                if (item.timestamp) {
                    const currDate = new Date();
                    const taskDate = new Date(item.timestamp);
                    return isEqual(
                        new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate()),
                        new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate())
                    )
                }
                return false;
            });
        },
        getUpcomingTasksForTag(tag) {
            return self.getTasksByTag(tag).filter(item => {
                if (item.timestamp) {
                    const currDate = new Date();
                    const taskDate = new Date(item.timestamp);
                    return isAfter(
                        new Date(taskDate.getFullYear(), taskDate.getMonth(), taskDate.getDate()),
                        new Date(currDate.getFullYear(), currDate.getMonth(), currDate.getDate())
                    )
                }
                return false;
            });
        },
        getTaskById(id) {
            return self.tasks.find(item => item.id === id);
        }
    }))
    .actions(self => ({
        addTask: flow(function* addTask(task) {
            const newTask = { ...task, id: self.tasks.length + 1 };
            try {
                const res = yield AsyncStorage.setItem('tasks', JSON.stringify([...self.tasks, newTask]));
                self.tasks.push(newTask);
            } catch (e) {
                console.log('error when saving task', e);
            }
        }),

        editTask: flow(function* editTask(task) {
            try {
                const res = yield AsyncStorage.setItem('tasks', JSON.stringify([...self.tasks, newTask]));
                self.tasks.push(newTask);
            } catch (e) {
                console.log('error when saving task', e);
            }
        }),

        loadTasks: flow(function* loadTasks() {
            try {
                const json = yield AsyncStorage.getItem('tasks');
                const tasks = JSON.parse(json);
                if (tasks) {
                    tasks.forEach(item => {
                        item.timestamp = new Date();
                    })
                    self.tasks = [...tasks];
                }
            } catch (err) {
                console.error("Failed to load tasks ", err)
            }
        }),

        removeTask(task) {
            destroy(task);
        }
    }))
    .create({
        tasks: [],
    });

export default TaskStore;

import { AsyncStorage } from 'react-native';

let allTasks = [];
const tasksByTag = [
    {
        name: 'all',
        icon: require('./assets/icons/alltasks.png'),
        tasks: allTasks
    },
    {
        name: 'work',
        icon: require('./assets/icons/work.png'),
        tasks: []
    },
    {
        name: 'home',
        icon: require('./assets/icons/home.png'),
        tasks: []
    },
    {
        name: 'shopping',
        icon: require('./assets/icons/shopping.png'),
        tasks: []
    },
    {
        name: 'music',
        icon: require('./assets/icons/music.png'),
        tasks: []
    },
    {
        name: 'travel',
        icon: require('./assets/icons/travel.png'),
        tasks: []
    },
    {
        name: 'study',
        icon: require('./assets/icons/study.png'),
        tasks: []
    }
];

const constructTasksDS = async () => {
    try {
        const res = await AsyncStorage.getItem('tasks');
        const tasksFromStorage = JSON.parse(res);
        if(!tasksFromStorage) {
            console.log('no tasks');
            return;
        }
        if (tasksFromStorage.length) {
            allTasks = [...tasksFromStorage];
            console.log(`found ${allTasks.length} tasks`);
            tasksByTag.forEach(tag => {
                tag.tasks = allTasks.filter(item => item.tag === tag.name)
            });
        }
    } catch (e) {
        console.log(e);
    }
}

const addNewTask = async (task) => {
    const newTask = {
        id: allTasks.length + 1,
        ...task
    };
    allTasks.push(newTask);
    try {
        console.log('storing task');
        await AsyncStorage.setItem('tasks', JSON.stringify(allTasks));
        console.log('task saved');
        const res = await AsyncStorage.getItem('tasks');
        console.log('tasks after saving', res);
    } catch (e) {
        console.log(e);
    }
}

export default {
    constructTasksDS, addNewTask, allTasks, tasksByTag
};

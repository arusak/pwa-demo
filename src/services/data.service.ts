import { Task } from '../models/Task';

const base = 'https://crudcrud.com/api/1aa10a5e89e24398bd56391f380dddd3';

export async function fetchTasks() {
    const response = await fetch(`${base}/tasks`);
    const tasks: Task[] = await response.json();
    return tasks;
}

export async function updateTask(task: Task) {
    const { _id, ...content } = task;
    const response = await fetch(`${base}/tasks/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content),
    });
    return response;
}

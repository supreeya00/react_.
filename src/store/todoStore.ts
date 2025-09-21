// src/store/todoStore.ts
import { create } from "zustand";

export type Task = {
  id: number;
  title: string;
};

interface TodoState {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: number) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  tasks: [],
  addTask: (title) =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), title }],
    })),
  removeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),
}));

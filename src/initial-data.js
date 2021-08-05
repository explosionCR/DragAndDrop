export const initialData = {
  tasks: [
    { id: "task-1", content: "Программа 1" },
    { id: "task-2", content: "Программа 2" },
    { id: "task-3", content: "Программа 3" }
  ],
  columns: {
    "column-1": {
      id: "column-1",
      title: "todo",
      taskIds: ["task-1", "task-2", "task-3"]
    }
  },
  columnOrder: ["column-1"]
};

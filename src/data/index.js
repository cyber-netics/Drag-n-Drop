import { v4 } from "uuid";

const data = {
  todo: {
    title: "Todo",
    items: [
      { id: v4(), name: "Clean the house" },
      { id: v4(), name: "Wash the car" },
    ],
  },
  "in-progress": {
    title: "In Progress",
    items: [],
  },
  done: {
    title: "Completed",
    items: [],
  },
};

export default data;

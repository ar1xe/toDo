import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";
import { AddItemForm } from "../AddItemForm";
import { Task } from "../Task";
import { action } from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "TODOLISTS/Task",
  component: Task,
  args: {
    changeTaskStatus: action("changeTaskStatus"),
    changeTaskTitle: action("changeTaskStatus"),
    removeTask: action("changeTaskStatus"),
    task: { id: "asdasd", title: "JS", isDone: false },
    todolistId: "to123123",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof AddItemForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsNotDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const TaskDoneStory = Template.bind({});

TaskDoneStory.args = {
  task: { id: "asdasd", title: "HTML", isDone: true },
};

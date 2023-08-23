import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoList } from '.';

export default {
  title: 'Templates/ToDoList',
  component: ToDoList,
} as ComponentMeta<typeof ToDoList>;

const Template: ComponentStory<typeof ToDoList> = (args) => <ToDoList {...args} />;

export const Default = Template.bind({});
Default.args = {
  toDoList: [],
};

export const WithToDoList = Template.bind({});
WithToDoList.args = {
  toDoList: ['리액트 공부하기', 'CDD 공부하기', '할 일 목록 앱 개발하기'],
};

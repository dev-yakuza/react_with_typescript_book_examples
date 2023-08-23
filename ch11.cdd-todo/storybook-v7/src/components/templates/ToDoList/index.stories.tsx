import type { Meta, StoryObj } from '@storybook/react';

import { ToDoList } from '.';

const meta = {
  title: 'Templates/ToDoList',
  component: ToDoList,
  tags: ['autodocs'],
} satisfies Meta<typeof ToDoList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    toDoList: [],
  },
};

export const WithToDoList: Story = {
  args: {
    toDoList: ['리액트 공부하기', 'CDD 공부하기', '할 일 목록 앱 개발하기'],
  },
};

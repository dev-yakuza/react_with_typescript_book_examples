import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoItem } from '.';

export default {
  title: 'Organisms/ToDoItem',
  component: ToDoItem,
} as ComponentMeta<typeof ToDoItem>;

const Template: ComponentStory<typeof ToDoItem> = (args) => <ToDoItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '리액트 공부하기',
};

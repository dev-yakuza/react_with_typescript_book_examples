import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToDoListContextProvider } from 'contexts/ToDoList';

import { ToDoListPage } from '.';

export default {
  title: 'Pages/ToDoListPage',
  component: ToDoListPage,
} as ComponentMeta<typeof ToDoListPage>;

const Template: ComponentStory<typeof ToDoListPage> = () => (
  <ToDoListContextProvider>
    <ToDoListPage />
  </ToDoListContextProvider>
);

export const Default = Template.bind({});

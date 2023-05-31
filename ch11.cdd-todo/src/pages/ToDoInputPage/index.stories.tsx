import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoInputPage } from '.';

export default {
  title: 'Pages/ToDoInputPage',
  component: ToDoInputPage,
} as ComponentMeta<typeof ToDoInputPage>;

const Template: ComponentStory<typeof ToDoInputPage> = () => <ToDoInputPage />;

export const Default = Template.bind({});

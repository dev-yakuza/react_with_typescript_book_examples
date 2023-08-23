import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ToDoInput } from '.';

export default {
  title: 'Templates/ToDoInput',
  component: ToDoInput,
} as ComponentMeta<typeof ToDoInput>;

const Template: ComponentStory<typeof ToDoInput> = () => <ToDoInput />;

export const Default = Template.bind({});

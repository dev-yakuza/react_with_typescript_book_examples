import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputToDo } from '.';

export default {
  title: 'Organisms/InputToDo',
  component: InputToDo,
} as ComponentMeta<typeof InputToDo>;

const Template: ComponentStory<typeof InputToDo> = () => <InputToDo />;

export const Default = Template.bind({});

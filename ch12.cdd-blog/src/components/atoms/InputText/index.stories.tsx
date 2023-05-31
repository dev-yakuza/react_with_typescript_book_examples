import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from '.';

export default {
  title: 'Atoms/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '리액트란?',
};

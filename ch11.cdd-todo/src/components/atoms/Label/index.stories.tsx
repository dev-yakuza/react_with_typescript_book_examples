import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '.';

export default {
  title: 'Atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: '리액트 공부하기',
};

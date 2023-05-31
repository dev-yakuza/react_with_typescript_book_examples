import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const RedButton = Template.bind({});
RedButton.args = {
  label: '등록',
};

export const BlueButton = Template.bind({});
BlueButton.args = {
  label: '닫기',
  color: '#304FFE',
};

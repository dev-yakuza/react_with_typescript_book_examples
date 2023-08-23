import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Count } from '.';

export default {
  title: 'Atoms/Count',
  component: Count,
} as ComponentMeta<typeof Count>;

const Template: ComponentStory<typeof Count> = (args) => <Count {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 0,
};

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from '.';

export default {
  title: 'Organisms/Counter',
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => <Counter />;

export const Default = Template.bind({});

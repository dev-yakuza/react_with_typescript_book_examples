import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CounterApp } from '.';

export default {
  title: 'Templates/CounterApp',
  component: CounterApp,
} as ComponentMeta<typeof CounterApp>;

const Template: ComponentStory<typeof CounterApp> = () => <CounterApp />;

export const Default = Template.bind({});

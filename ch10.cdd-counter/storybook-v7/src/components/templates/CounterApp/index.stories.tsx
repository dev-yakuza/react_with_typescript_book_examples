import type { Meta, StoryObj } from '@storybook/react';

import { CounterApp } from '.';

const meta = {
  title: 'Organisms/CounterApp',
  component: CounterApp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CounterApp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

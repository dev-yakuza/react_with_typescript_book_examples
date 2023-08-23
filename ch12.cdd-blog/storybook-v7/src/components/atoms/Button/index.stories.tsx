import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RedButton: Story = {
  args: {
    label: '등록',
  },
};

export const BlueButton: Story = {
  args: {
    label: '닫기',
    color: '#304FFE',
  },
};
